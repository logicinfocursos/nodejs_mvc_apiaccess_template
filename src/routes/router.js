// src\routes\router.js - logicinfo.com.br
import express from 'express'
import ProductsController from '../controllers/products.controller.js'



const router = express.Router()

router.get('/', ProductsController.list)
router.get('/home', ProductsController.list)
router.get('/products', ProductsController.list)
router.get('/products/:id', ProductsController.view)
router.get('/add', ProductsController.add)
router.post('/save', ProductsController.save)

export default router