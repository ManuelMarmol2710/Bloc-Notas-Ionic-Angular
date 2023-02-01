import {Request,Response} from 'express'
import User, { I_User} from '../models/user';
import notes from '../models/notes'
import blocNotes from '../models/notes'
import jwt from 'jsonwebtoken'
import config from '../config/config'
import user from '../models/user';
export function createToken(user: I_User){


   const jsonUser = jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
     expiresIn: 86400
    });

return jsonUser
  }

export const homeBloc = async (req: Request, res:Response ): Promise<Response>=>{

    if(!req.body.title ){
    
    return res.status(400).json({msg: 'Por favor colocar titulo y contenido a la nota'})
    
    }


    const newNote = new blocNotes(req.body);
    await newNote.save();
return res.status(201).json(newNote)
       

    
  
  

  
  }

    export const getNotes = async (req: Request,res:Response) => {
      
      const Notes = await notes.find();
    res.json(Notes)

    }
   
      
      export const getNotesByTitle = async (req: Request, res: Response) => {
        const { userId } = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user);

        const note = await notes.findOne({title: req.params.title});
        res.status(200).json(note);
      
      };
      
      export const getNotesByCollections = async (req: Request, res: Response) => {
      
        const note = await notes.findOne({collections: req.params.collections});
        res.status(200).json(note);
       
       
      };
            export const updateNoteById = async (req: Request, res: Response) => {
        const updatedNote = await notes.findByIdAndUpdate(
          req.params.noteId,
          req.body,
          {
            new: true,
          }
        );
        res.status(200).json(updatedNote);
      };
      
      
     
      export const deleteNoteById = async (req: Request, res: Response) => {
        const { noteId } = req.params;
      
        await notes.findByIdAndDelete(noteId);
      
        
        res.status(200).json();
      };