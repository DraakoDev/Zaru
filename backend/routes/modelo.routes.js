import express from 'express'
import { createModelo, getModelos, getModelo, updateModelo } from '../controllers/modelo.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/modelos', checkToken, createModelo)
router.get('/modelos', checkToken, getModelos)
router.get('/modelos/:id', checkToken, getModelo)
router.put('/modelos/:id', checkToken, updateModelo)

export default router
