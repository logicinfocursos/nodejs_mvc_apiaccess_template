// src\routes\router.js
import express from 'express'
import HomeController from '../controllers/home.controller.js'

const router = express.Router()

router.get('/', HomeController.list)
router.get('/home', HomeController.list)
router.get('/view/:id', HomeController.view)
router.get('/add', HomeController.add)
router.post('/save', HomeController.save) // Changed from GET to POST

export default router