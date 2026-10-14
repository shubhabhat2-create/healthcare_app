import express from 'express'; import cors from 'cors';
const app=express(); app.use(cors()); app.use(express.json());
const PRODUCT='http://localhost:4001', ORDER='http://localhost:4002', AUTH='http://localhost:4003';
app.get('/health',(req,res)=>res.json({service:'api-gateway',status:'ok'}));
app.get('/api/products',async(req,res)=>proxy(`${PRODUCT}/api/products?${new URLSearchParams(req.query)}`,res));
app.get('/api/products/:id',async(req,res)=>proxy(`${PRODUCT}/api/products/${req.params.id}`,res));
app.post('/api/orders',async(req,res)=>proxy(`${ORDER}/api/orders`,res,{method:'POST',body:req.body}));
app.post('/api/auth/login',async(req,res)=>proxy(`${AUTH}/api/auth/login`,res,{method:'POST',body:req.body}));
async function proxy(url,res,options={}){try{const r=await fetch(url,{method:options.method||'GET',headers:{'content-type':'application/json'},body:options.body?JSON.stringify(options.body):undefined});const text=await r.text();res.status(r.status).type('json').send(text);}catch(e){res.status(502).json({message:'Upstream service unavailable'});}}
app.listen(4000,()=>console.log('api-gateway listening on :4000'));
//Testing this