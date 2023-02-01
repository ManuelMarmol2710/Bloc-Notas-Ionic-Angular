import {Request,Response} from 'express'
import Collections from '../models/collections';

export const putcollections = async (req: Request, res:Response ): Promise<Response>=>{

    if(!req.body.collections ){
    
    return res.status(400).json({msg: 'Por favor una colleccion'})
    
    }
        const newCollect = new Collections(req.body);
    await newCollect.save();
return res.status(201).json(newCollect)

  }

    export const getcollectBOX = async (req: Request,res:Response) => {
      
      const collects = await Collections.find();
    res.json(collects)

    }
   
      
      export const getcollectByName = async (req: Request, res: Response) => {

        const collect = await Collections.findOne({collections: req.params.collections});
        res.status(200).json(collect);
      
      };
            export const updatecollectById = async (req: Request, res: Response) => {
        const updatedCollect = await Collections.findOneAndUpdate({collections: req.params.collections});
        res.status(200).json(updatedCollect);
      };
      
      
     //OJO
      export const deletecollect = async (req: Request, res: Response) => {
        await Collections.findOneAndDelete({collections: req.params.collections});
   
     
        res.status(200).json();
      
        
      };