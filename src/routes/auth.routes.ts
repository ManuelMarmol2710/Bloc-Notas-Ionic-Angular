
import {Router} from 'express'
import {
  signIn,
  signUp,
  getUsers,
  getUsersById,
  updateUserById,
  deleteUserByEmail,
} from '../controller/user.controller'
import {
  homeBloc,
  getNotes,
  updateNoteById,
  deleteNoteById,
  getNotesByTitle,
  getNotesByCollections
 
} from '../controller/notes.controller'
import {
  putcollections,
  getcollectBOX,
  getcollectByName,
  updatecollectById,
  deletecollect,
} from '../controller/collections.controller'
const router = Router();

router.post('/signup', signUp);
router.get('/signup',  getUsers)
router.get('/signup/:userId', getUsersById,)
router.put('/signup/:userId',updateUserById)
router.delete('/signup/:email', deleteUserByEmail)


router.post('/signin', signIn);


router.post('/bloc',homeBloc)
router.get('/bloc',getNotes)
router.get('/homeblocC:collections',getNotesByCollections)
router.get('/homeblocT/:userId/:title',getNotesByTitle)
router.put('/homebloc/:noteId',updateNoteById)
router.delete('/homebloc/:noteId',deleteNoteById)

router.post('/collections', putcollections);
router.get('/collections',   getcollectBOX)
router.get('/collections/:collections', getcollectByName,)
router.put('/collections/:collections', updatecollectById,)
router.delete('/collections/:collections',  deletecollect,)



export default router;