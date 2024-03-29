import { NextFunction, Request, Response } from "express";
import User, { I_User } from "../models/user";
import jwt from "jsonwebtoken";
import config from "../config/config";
import bcrypt from "bcrypt";

export function createToken(user: I_User) {
  return jwt.sign({ id: user.id, email: user.email }, config.jwtSecret, {
    expiresIn: 86400,
  });
}

export const signUp = async (
  req: Request,
  res: Response
): Promise<Response> => {
  if (
    !req.body.email ||
    !req.body.password ||
    !req.body.name ||
    !req.body.last_Name
  ) {
    return res.status(400).json({ msg: "Llenar todos los campos de datos." });
  }

  const user = await User.findOne({ email: req.body.email });

  console.log(user);
  if (user) {
    return res.status(400).json({ msg: "El usuario ya existe." });
  }

  const newUser = new User(req.body);
  await newUser.save();
  return res.status(201).json(newUser);
};

export const updateUserByEmail = async (req: Request, res: Response) => {
  if (!req.body.name) {
    return res.status(400).json({ msg: "Llenar algun campo de datos." });
  }

  const user = await User.findOneAndUpdate(
    { email: req.params.email },
    {
      email: req.params.email,
      name: req.body.name,
      last_Name: req.body.last_Name,
    },
    { upsert: true, new: true }
  );

  res.status(200).json(user);
};

export const updatePassword = async (req: Request, res: Response) => {
  const salt = await bcrypt.genSalt(10);
  const contrasenaCifrada = await bcrypt.hash(req.body.password, salt);
  const updatePassword = await User.findOneAndUpdate(
    { email: req.params.email },
    {
      password: contrasenaCifrada,
    },
    { upsert: true, new: true }
  );

  res.status(200).json(updatePassword);
};

export const deleteUserByEmail = async (req: Request, res: Response) => {
  const user = await User.findOneAndDelete({ email: req.params.email });

  if (user) {
    res.status(200).json();
  } else {
    return res.status(400).json({ msg: "Correo incorrecto." });
  }
};

export const signIn = async (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ msg: "Usuario o contraseña invalidos." });
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({ msg: "Usuario o contraseña incorrectos." });
  }

  const isMatch = await user.comparePassword(req.body.password);

  if (isMatch) {
    return res.status(200).json({ token: createToken(user) });
  }

  return res.status(400).json({
    msg: "email y contraseña incorrectos",
  });
};
