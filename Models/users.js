const mongoose=require('mongoose');
const joi=require('joi');
const bcrypt=require('bcryptjs');
const userSchema=mongoose.Schema({
    username:String,
    password:String,
    email:String

  
})

userSchema.pre('save',async function(done){
  if(this.isModified('password')){
    const hashed=await bcrypt.hash(this.get('password'),12);
    this.set('password',hashed);
  }
  done();
})

userSchema.pre('validate',async function(done,err){
  if(this.isModified('email')){
  const checkUser=await userModel.findOne({email:this.get('email')});
  if(checkUser){
  console.log(err);
  }
  }
  else{
    const userExists=await userModel.findOne({email:this.get('email')});
    if(!userExists)return new Error('Invalid Email or Password');
  
  }
done();

  }
  
)


const RegisterSchema=joi.object({
    username:joi.string().required('Please Enter Username').min(7).max(11),
    password:joi.string().required('Please Enter Password').min(6).max(10),
    email:joi.string().email().required('Please Enter Email').min(7).max(20).lowercase()


})

const isRegistrationSchemaVerified=async(req,res,next)=>{

  const {error,value}=  RegisterSchema.validate(req.body);
if(error)return res.status(403).send(error.message);
next();
}








const userModel=mongoose.model('users',userSchema)

module.exports={userModel,isRegistrationSchemaVerified};