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
return     res.status(201).json(saveNote)

    }
    export const NotesByOwner = async (req: Request, res: Response) => {
      const owner = await notes.find({ owner: req.params.owner }).select('title notes');
    
      if (owner) {
        res.status(200).json(owner);
      } else {
        return res.status(400).json({ msg: "Titulo incorrecto." });
      }
    };
    
    
      export const getNotesByTitle = async (req: Request, res: Response) => {
     const owner = await notes.find({owner: req.params.owner});
        if(owner){
          res.status(200).json(owner);
        
        }
     
       else {

        return res.status(400).json({msg: 'Titulo incorrecto.'})
       }

      };

      export const getNotesTitle = async (req: Request, res: Response) => {
        
             const title = req.params.title
             const notes = req.params.notes
   
             
      if(title){
               res.status(200).json(title);
             
             }
          
            else {
     
             return res.status(400).json({msg: 'Titulo incorrecto.'})
            }
     
           };
           export const getNotes = async (req: Request, res: Response) => {
        
            
            const note = req.params.notes
     
            if(note){
              res.status(200).json(note);
            
            }
         
           else {
    
            return res.status(400).json({msg: 'Titulo incorrecto.'})
           }
    
          };
      


          export const getNotesById = async (req: Request, res: Response) => {
            const { notesId } = req.params;
          
            const user = await notes.findById(notesId);
            res.status(200).json(user);
          };

      export const updateNoteByCollect= async (req: Request, res: Response) => {
        const note = await notes.findOne({title: req.params.title});
  
        note!.collections = req.params.collections
   
       const newNoteWithOwner = new blocNotes(note);
       await newNoteWithOwner.save();
       return res.status(201).json(newNoteWithOwner)
      
      
      }
      



            export const updateNoteByOne= async (req: Request, res: Response) => {
              const {notesId} = req.params 
   
              const Notes = await notes.findByIdAndUpdate( notesId, req.body,
          { 
          
            new: true,
          
          })
              ;
               res.status(200).json(Notes);
                
              
             };
             export const updateNoteByOne1= async (req: Request, res: Response) => {
              const {notesId} = req.params 
   
              const Notes = await notes.findOneAndUpdate( req.body,
          { 
          
            new: true,
          
          })
              ;
               res.status(200).json(Notes);
                
              
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