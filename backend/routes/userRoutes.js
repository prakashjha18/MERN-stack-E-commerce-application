import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  RegisterUser,
  updateUserProfile,
  getUsers
} from '../controllers/userContoller.js'
import { protect,admin } from '../middleware/authMiddleware.js'

router.route('/').post(RegisterUser).get(protect,admin,getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

export default router
