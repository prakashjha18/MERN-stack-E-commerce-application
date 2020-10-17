import express from 'express'
const router = express.Router()
import { authUser, getUserProfile,RegisterUser } from '../controllers/userContoller.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(RegisterUser)
router.post('/login', authUser)
router.route('/profile').get(protect,getUserProfile)

export default router
