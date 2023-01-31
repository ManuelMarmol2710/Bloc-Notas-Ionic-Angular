import {Request,Response} from 'express'
import User,{I_User} from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config/config'


function createToken(user: I_User){


    return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
        expiresIn: 86400
      });
}

export const signUp = async (req: Request, res:Response ): Promise<Response>=>{

if(!req.body.email || !req.body.password || !req.body.name || !req.body.last_Name ){

return res.status(400).json({msg: 'Por favor enviar tu correo y contraseña :)'})

}

const user = await User.findOne({email: req.body.email});


console.log(user)
 if (user){

    return res.status(400).json({msg:'el usuario ya existe'})


}

const newUser = new User(req.body);
await newUser.save();
return res.status(201).json(newUser)
}



export const getUsers = async (req: Request,res:Response) => {
    const Users = await User.find();
 res.json(Users)

 }

 export const getUsersById = async (req: Request, res: Response) => {
     const { userId } = req.params;
   
     const user = await User.findById(userId);
     res.status(200).json(user);
   };
   
   export const getUser = async (req: Request, res: Response) => {
     const user = await User.find();
     return res.json(user);
   };
   
   export const updateUserById = async (req: Request, res: Response) => {
     const updatedUser = await User.findByIdAndUpdate(
       req.params.userId,
       req.body,
       {
         new: true,
       }
     );
     res.status(200).json(updatedUser);
   };
   
   
   //error
   
   export const deleteUserById = async (req: Request, res: Response) => {
     const { userId } = req.params;
   
     await User.findByIdAndDelete(userId);
   
     
     res.status(200).json();
   };














export const signIn = async (req: Request, res:Response ) => {

    if(!req.body.email || !req.body.password ){

        return res.status(400).json({msg: 'Por favor enviar tu correo y contraseña :)'})
        
    }

   const user = await User.findOne({email: req.body.email})

if (!user) {

return res.status(400).json({msg: ' El usuario no existe'})

}


const  isMatch = await user.comparePassword(req.body.password);

if (isMatch){


return res.status(200).json({token: createToken(user)});



}

return res.status(400).json ({

msg: 'email y contraseña incorrectos'

});

}
