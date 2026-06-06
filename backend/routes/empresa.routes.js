import express from 'express'
import { createEmpresa, getEmpresas, getEmpresa } from '../controllers/empresa.controller.js'
import { checkToken } from '../middlewares/user.auth.js'

const router = express.Router()

router.post('/empresas', checkToken, createEmpresa)
router.get('/empresas', checkToken, getEmpresas)
router.get('/empresas/:nit', checkToken, getEmpresa)

export default router
