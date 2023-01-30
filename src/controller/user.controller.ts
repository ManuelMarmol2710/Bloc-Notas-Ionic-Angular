import {Request,Response} from 'express'
import User,{I_User} from '../models/user'
import jwt from 'jsonwebtoken'
import config from '../config/config'
import blocNotes,{bloc_User} from '../models/notes'

function createToken(user: I_User){


    return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
        expiresIn: 86400
      });
}


export const homeBloc = async (req: Request, res:Response ): Promise<Response>=>{

if(!req.body.notes || !req.body.collections ||!req.body.title ){

return res.status(400).json({msg: 'Por favor colocar titulo, notas y la colections :)'})

}

const newNote = new blocNotes(req.body);
await newNote.save();
return res.status(201).json(newNote)
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
