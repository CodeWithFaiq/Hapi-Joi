const express=require('express');

const router=express.Router();
const {userModel,isRegistrationSchemaVerified}=require('../../Models/users');

router.post('/', isRegistrationSchemaVerified, async(req,res)=>{
const {username,password,email}=req.body;
const user=await userModel.create({
    username,
    password,
    email
}) 
res.send(user);
})



module.exports=router;