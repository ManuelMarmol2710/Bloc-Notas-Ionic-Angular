import { Router } from "express";
import {
  signIn,
  signUp,
  getUsers,
  getUsersById,
  updateUserByEmail,
  deleteUserByEmail,
} from "../controller/user.controller";
import {
  addNotesWithOwner,
  updateNoteByOne,
  deleteNoteByTitle,
  updateNoteByCollect,
  NotesByOwner,
} from "../controller/notes.controller";
import {
  putcollections,
  getcollectByName,
  updatecollectById,
  deletecollect,
} from "../controller/collections.controller";

const router = Router();

router.post("/signup", signUp);
router.get("/signup", getUsers);
router.get("/signup/:userId", getUsersById);
router.put("/signup/:email", updateUserByEmail);
router.delete("/signup/:email", deleteUserByEmail);

router.post("/signin", signIn);

router.post("/note/:owner", addNotesWithOwner);
router.post("/note/:title/:collections", updateNoteByCollect);
router.get("/note/:owner", NotesByOwner);
router.put("/note/:notesId", updateNoteByOne);
router.delete("/note/:title", deleteNoteByTitle);

router.post("/collections/:owner", putcollections);
router.get("/collections/:owner/:collections", getcollectByName);
router.put("/collections/:collections", updatecollectById);
router.delete("/collections/:collections", deletecollect);

export default router;
