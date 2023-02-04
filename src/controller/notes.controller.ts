import {Request,Response} from 'express'
import notes from '../models/notes'
import blocNotes from '../models/notes'
import User,{I_User} from '../models/user'
import mongoose from 'mongoose'

const toId = mongoose.Types.ObjectId
import jwt from 'jsonwebtoken'
import config from '../config/config'


export const addNotes = async (req: Request, res:Response )=>{


const {title,notes}= req.body;

if(!title ){
    return res.status(400).json({msg: 'Por favor colocar titulo y contenido a la nota'})
    
   }

  const newNotes = new blocNotes({
title,
notes

  }) 
  const saveNote = await newNotes.save();

 res.status(200).json(saveNote);

  }
   
   

    export const getNotes = async (req: Request,res:Response): Promise<Response> => {
      
    new toId(req.params.owner)
   
     const note = await notes.findById(req.params.note)
     note!.owner = req.params.owner
   
     if(!note){
      return res.status(201).json('Nota no asignada')

    }
   
    const newNoteWithOwner = new blocNotes(note);
    await newNoteWithOwner.save();
    return res.status(201).json(newNoteWithOwner)


    }
   
      
      export const getNotesByTitle = async (req: Request, res: Response) => {
        
        const note = await notes.findOne({title: req.params.title});
      
   if (note) {
    res.status(200).json(note);
   
   }
       else {

        return res.status(400).json({msg: 'Titulo incorrecto.'})
       }

      };
      
            export const updateNoteByOne= async (req: Request, res: Response) => {
       const emaill = req.body.email;
       
       const updatedNote = await notes.findOneAndUpdate(emaill, 
          {
            new: true,
          }
        );
        res.status(200).json(updatedNote);
      };
      
      
     
      export const deleteNoteByTitle = async (req: Request, res: Response) => {
      const title =  await notes.findOneAndDelete({title: req.params.title});
   
        if (title) {
      
       res.status(200).json();
    
          } else if(!req.params.title) {
            return res.status(400).json({msg: 'El titulo ingresado es invalidos.'})
          } 
          
          
          else {
         
         return res.status(400).json({msg: 'Titulo incorrectos.'})
         
         }
      };