import express from 'express'
import { createAccesorio, getAccesorios, getAccesorio, updateAccesorio } from '../controllers/accesorio.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/accesorios', checkToken, createAccesorio)
router.get('/accesorios', checkToken, getAccesorios)
router.get('/accesorios/:id', checkToken, getAccesorio)
router.put('/accesorios/:id', checkToken, updateAccesorio)

export default router
