import express from 'express';
import cors from 'cors';
const app=express();
app.use(cors()); app.use(express.json());
app.get('/health',(req,res)=>res.json({service:'order-service',status:'ok'}));
app.post('/api/orders',(req,res)=>{const {items=[],customer}=req.body; if(!items.length)return res.status(400).json({message:'Order must contain at least one item'}); const total=items.reduce((s,i)=>s+i.price*i.quantity,0); res.status(201).json({orderId:'ORD-'+Date.now(),status:'Order Placed',paymentStatus:'Pending',items,total,customer});});
app.listen(4002,()=>console.log('order-service listening on :4002'));
