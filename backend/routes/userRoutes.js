import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  RegisterUser,
  updateUserProfile,
  getUsers,
  deleteUser
} from '../controllers/userContoller.js'
import { protect,admin } from '../middleware/authMiddleware.js'

router.route('/').post(RegisterUser).get(protect,admin,getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

router.route('/:id').delete(protect,admin,deleteUser)

export default router
