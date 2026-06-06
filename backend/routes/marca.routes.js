import express from 'express'
import { createMarca, getMarcas, getMarca, updateMarca } from '../controllers/marca.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/marcas', checkToken, createMarca)
router.get('/marcas', checkToken, getMarcas)
router.get('/marcas/:nombre', checkToken, getMarca)
router.put('/marcas/:nombre', checkToken, updateMarca)

export default router
