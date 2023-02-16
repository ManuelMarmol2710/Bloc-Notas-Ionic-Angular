import { Router } from "express";
import {
  signIn,
  signUp,
  updateUserByEmail,
  deleteUserByEmail,
  updatePassword,
} from "../controller/user.controller";
import {
  addNotesWithOwner,
  updateNoteByOne,
  deleteNoteByTitle,
  updateNoteByCollect,
  NotesByOwner,
  NotesByOneUser,
} from "../controller/notes.controller";
import {
  putcollections,
  getcollectByName,
  deletecollect,
} from "../controller/collections.controller";

const router = Router();

router.post("/signup", signUp);
router.put("/signup/:email", updateUserByEmail);
router.put("/signup/password/:email", updatePassword);
router.delete("/signup/:email", deleteUserByEmail);

router.post("/signin", signIn);

router.post("/note/:owner", addNotesWithOwner);
router.post("/note/:title/:collections", updateNoteByCollect);
router.get("/note/:owner", NotesByOwner);
router.get("/note/:owner/:title", NotesByOneUser);
router.put("/note/:notesId", updateNoteByOne);
router.delete("/note/:title", deleteNoteByTitle);

router.post("/collections/:owner", putcollections);
router.get("/collections/:owner/:collections", getcollectByName);
router.delete("/collections/:owner/:collections", deletecollect);

export default router;
