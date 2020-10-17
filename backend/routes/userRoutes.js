import express from 'express'
const router = express.Router()
import { authUser } from '../controllers/userContoller.js'

router.post('/login', authUser)

export default router
