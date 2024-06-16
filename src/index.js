// src\index.js
// Importando os módulos necessários
import express from 'express'
import { urlencoded } from 'express'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import path from 'path'
import router from './routes/router.js'

// Criando uma função require para importar módulos CommonJS
const require = createRequire(import.meta.url)

// Importando e configurando o módulo dotenv para gerenciar variáveis de ambiente
require('dotenv').config()

// Obtendo o diretório do arquivo atual
const dirname = path.dirname(fileURLToPath(import.meta.url))

// Definindo a porta do servidor a partir das variáveis de ambiente ou usando 3111 como padrão
const port = process.env.PORT || 3111

// Criando uma instância do aplicativo Express
const app = express()

// Definindo EJS como a engine de visualização
app.set('view engine', 'ejs')

// Definindo o diretório de arquivos estáticos
app.use(express.static(path.join(dirname, 'public')))

// Definindo o diretório das views
app.set('views', path.join(dirname, 'views')) 

// Configurando o middleware para analisar o corpo das requisições
app.use(urlencoded({ extended: true }))

// Usando o roteador importado
app.use(router)

// Iniciando o servidor na porta definida
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})