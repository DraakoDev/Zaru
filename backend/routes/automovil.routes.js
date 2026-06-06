import express from 'express'
import { createAutomovil, getAutomoviles, getAutomovil, updateAutomovil } from '../controllers/automovil.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/automoviles', checkToken, createAutomovil)
router.get('/automoviles', checkToken, getAutomoviles)
router.get('/automoviles/:numero_bastidor', checkToken, getAutomovil)
router.put('/automoviles/:numero_bastidor', checkToken, updateAutomovil)

export default router
