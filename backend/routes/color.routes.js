import express from 'express'
import { createColor, getColores, getColor, updateColor } from '../controllers/color.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/colores', checkToken, createColor)
router.get('/colores', checkToken, getColores)
router.get('/colores/:id', checkToken, getColor)
router.put('/colores/:id', checkToken, updateColor)

export default router
