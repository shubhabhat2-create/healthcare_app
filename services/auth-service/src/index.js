import express from 'express';
import cors from 'cors';
const app=express();
app.use(cors()); app.use(express.json());
app.get('/health',(req,res)=>res.json({service:'auth-service',status:'ok'}));
app.post('/api/auth/login',(req,res)=>{const {email,password}=req.body;if(!email||!password)return res.status(400).json({message:'Email and password are required'});res.json({token:'demo-token',user:{name:'Demo Customer',email,role:'customer'}});});
app.listen(4003,()=>console.log('auth-service listening on :4003'));
