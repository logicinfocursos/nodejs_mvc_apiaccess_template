// src\index.js
import express from 'express'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import path from 'path'
import router from './routes/router.js'

const require = createRequire(import.meta.url)
require('dotenv').config()

// Get the current directory name
const dirname = path.dirname(fileURLToPath(import.meta.url))

const port = process.env.PORT || 3111

const app = express()

app.set('view engine', 'ejs')
app.use(express.static(path.join(dirname, 'public')))

// Set the views directory
app.set('views', path.join(dirname, 'views')) 

// define /routes/router.js para distribuir as rotas da aplicação
app.use(router)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})