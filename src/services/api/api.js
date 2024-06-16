// src\services\api\api.js - logicinfo.com.br
import axios from 'axios'
import { createRequire } from 'module'



const require = createRequire(import.meta.url)

require('dotenv').config()

const api = axios.create({ baseURL: process.env.MAIN_API_URL })

export { api }