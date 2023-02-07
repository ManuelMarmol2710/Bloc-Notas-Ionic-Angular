import {Request,Response} from 'express'
import notes from '../models/notes'
import blocNotes from '../models/notes'

  
    export const addNotesWithOwner = async (req: Request,res:Response): Promise<Response> => {

      const {title,notes}= req.body;

    if(!title ){
        return res.status(400).json({msg: 'Por favor colocar titulo y contenido a la nota'})
        
       }
    
      const newNotes = new blocNotes({
    title,
    notes,
    
      }) 
    
    const saveNote = await newNotes.save();
    saveNote!.owner = req.params.owner

    const newNoteWithOwner = new blocNotes(saveNote);
    await newNoteWithOwner.save();
return     res.status(201).json(newNoteWithOwner)

    }
   
    
      export const getNotesByTitle = async (req: Request, res: Response) => {
        
   //     const note = await notes.findOne({title: req.params.title});
  //   console.log(note)  
  
  const owner = await notes.find({owner: req.params.owner});
        if(owner){
          res.status(200).json(owner);
        
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