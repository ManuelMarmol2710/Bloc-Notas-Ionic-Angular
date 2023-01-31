
import {Router} from 'express'
import {
  signIn,
  signUp,
  getUsers,
  getUsersById,
  updateUserById,
  deleteUserById
} from '../controller/user.controller'
import {
  homeBloc,
  getNotes,
  getNotesById,
  updateNoteById,
  deleteNoteById
 
} from '../controller/notes.controller'
const router = Router();

router.post('/signup', signUp);
router.get('/signup',  getUsers)
router.get('/signup/:userId', getUsersById,)
router.put('/signup/:userId',updateUserById)
//error
router.delete('signup/:userId', deleteUserById)


router.post('/signin', signIn);


router.post('/homebloc',homeBloc)
router.get('/homebloc',getNotes)
router.get('/homebloc/:noteId',getNotesById)
router.put('/homebloc/:noteId',updateNoteById)
//error
router.delete('homebloc/:noteId',deleteNoteById)

export default router;