import express from 'express'
import { createEquipamiento, getEquipamientos, getEquipamiento, updateEquipamiento } from '../controllers/equipamiento.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/equipamientos', checkToken, createEquipamiento)
router.get('/equipamientos', checkToken, getEquipamientos)
router.get('/equipamientos/:id', checkToken, getEquipamiento)
router.put('/equipamientos/:id', checkToken, updateEquipamiento)

export default router
