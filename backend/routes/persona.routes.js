import express from 'express'
import { createPersona, getPersona, getAllPersonas, updatePersona, getVendedores } from '../controllers/persona.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/personas', checkToken, createPersona)
router.get('/personas', checkToken, getAllPersonas)
router.get('/personas/vendedores/list', getVendedores)
router.get('/personas/:cedula', checkToken, getPersona)
router.put('/personas/:cedula', checkToken, updatePersona)

export default router
