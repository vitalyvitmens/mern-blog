import { Router } from 'express'
import { getMe, login, register } from '../controllers'

export const router = new Router()

// Register
router.post('/register', register)

// Login
router.post('/login', login)

// Get Me
router.get('/me', getMe)
