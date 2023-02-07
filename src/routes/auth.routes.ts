
import {Router} from 'express'
import {
  signIn,
  signUp,
  getUsers,
  getUsersById,
  updateUserByEmail,
  deleteUserByEmail,
} from '../controller/user.controller'
import {

  addNotesWithOwner,
  updateNoteByOne,
  getNotesByTitle,
  deleteNoteByTitle,

 
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
router.put('/signup/:email',updateUserByEmail)
router.delete('/signup/:email', deleteUserByEmail)


router.post('/signin', signIn);



router.post('/note/:owner',addNotesWithOwner)
router.get('/note/:owner',getNotesByTitle)
router.put('/note/:user',updateNoteByOne)
router.delete('/note/:title',deleteNoteByTitle)





router.post('/collections', putcollections);
router.get('/collections',   getcollectBOX)
router.get('/collections/:collections', getcollectByName,)
router.put('/collections/:collections', updatecollectById,)
router.delete('/collections/:collections',  deletecollect,)



export default router;