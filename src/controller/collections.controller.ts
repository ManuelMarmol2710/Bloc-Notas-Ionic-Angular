import { Request, Response } from "express";
import Collect from "../models/collections";
import collections from "../models/collections";
import notes from "../models/notes";
export const putcollections = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { collections } = req.body;
  if (!collections) {
    return res.status(400).json({ msg: "Por favor una colleccion" });
  }

  const newCollect = new Collect({
    collections,
  });

  const saveCollection = await newCollect.save();
  saveCollection!.owner = req.params.owner;

  const newCollects = new Collect(saveCollection);
  await newCollects.save();
  return res.status(201).json(newCollects);
};
 
export const getcollectByName = async (req: Request, res: Response) => {
  const { collections } = req.body;
  if (!collections) {
    return res.status(400).json({ msg: "Por favor rellenar el campo buscar." });
  }
 const collection = await notes
    .find({collections: req.params.collections, owner:req.params.owner })
    .select("title notes collections");
 if (collection) {
  res.status(200).json(collection);
} else {
  return res.status(400).json({ msg: "Coleccion  incorrecta." });
}
};

export const deletecollect = async (req: Request, res: Response) => {
  const collect = await notes.findOneAndDelete({
    collections: req.params.collections,
  });

  if (!collect) {
    res.status(400).json("Coleccion no encontrada.");
  }

  if (collect) {
    res.status(200).json(collect);
  }
};
