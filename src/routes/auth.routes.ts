
import {Router} from 'express'
import {
  homeBloc,
  signIn,
  signUp,
} from '../controller/user.controller'

const router = Router();

router.post('/homebloc',homeBloc)
router.post('/signup', signUp);
router.post('/signin', signIn);
export default router;