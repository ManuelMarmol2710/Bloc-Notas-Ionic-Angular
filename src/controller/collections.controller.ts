import {Request,Response} from 'express'
import Collect from '../models/collections';
import collections from '../models/collections';

export const putcollections = async (req: Request, res:Response ): Promise<Response>=>{
  const {collections}= req.body;
  if(!collections ){
    
    return res.status(400).json({msg: 'Por favor una colleccion'})
    
    }
       
    const newCollect = new Collect({
     
      collections,
    }) 
  
  const saveCollection = await newCollect.save();
  saveCollection!.owner = req.params.owner

  const newCollects = new Collect(saveCollection);
  await newCollects.save();
  return res.status(201).json(newCollects)

  }

    export const getcollectBOX = async (req: Request,res:Response) => {
      
      const collects = await collections.find();
    res.json(collects)

    }
   
      
      export const getcollectByName = async (req: Request, res: Response) => {

        const collect = await collections.findOne({collections: req.params.collections});
        res.status(200).json(collect);
      
      };


      
            export const updatecollectById = async (req: Request, res: Response) => {
        const updatedCollect = await collections.findOneAndUpdate({collections: req.params.collections});
        res.status(200).json(updatedCollect);
      };
      
      
    
      export const deletecollect = async (req: Request, res: Response) => {
        await collections.findOneAndDelete({collections: req.params.collections});
   
     
        res.status(200).json();
      
        
      };