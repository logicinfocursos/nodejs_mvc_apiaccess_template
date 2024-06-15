// src\routes\router.js
import express from 'express'
import HomeController from '../controllers/home.controller.js'

const router = express.Router()

router.get('/home', HomeController.view)

export default router
