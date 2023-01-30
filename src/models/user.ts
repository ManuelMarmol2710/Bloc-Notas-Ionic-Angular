import {model,Schema, Document} from "mongoose";

import bcrypt from 'bcrypt'



export interface I_User extends Document{
    email: string;
    name: string;
    last_Name: string;
    password: string;
    comparePassword: (password: string) => Promise<boolean>
    
    }


const userSchema = new Schema({

email:{


type:String,
unique:true,
required: true,
lowercase: true,
trim: true,


},

name:
{
    type: String,
    require:true,

},
last_Name:
{
    type: String,
    require:true,

},

password:{

    type: String,
    require:true,


}


});


userSchema.pre<I_User>('save', async function(next){


const user= this;

if(!user.isModified('password')) return next();

 const salt = await bcrypt.genSalt(10);
 const contraseñaCifrada = await bcrypt.hash(user.password,salt)
user.password = contraseñaCifrada;
next();

});


 userSchema.methods.comparePassword = async function(password:string): Promise<boolean>{

  return await bcrypt.compare(password, this.password);


 }


export default model<I_User>('User', userSchema);

