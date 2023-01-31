
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
  deleteNoteById,
  getNotesByTitle,
  getNotesByCollections
 
} from '../controller/notes.controller'
const router = Router();

router.post('/signup', signUp);
router.get('/signup',  getUsers)
router.get('/signup/:userId', getUsersById,)
router.put('/signup/:userId',updateUserById)
router.delete('/signup/:userId', deleteUserById)


router.post('/signin', signIn);


router.post('/homebloc',homeBloc)
router.get('/homebloc',getNotes)
router.get('/homeblocC/:collections',getNotesByCollections)
router.get('/homeblocT/:title',getNotesByTitle)
router.put('/homebloc/:noteId',updateNoteById)
router.delete('/homebloc/:noteId',deleteNoteById)

export default router;