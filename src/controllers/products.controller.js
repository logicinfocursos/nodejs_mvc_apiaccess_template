// src\controllers\home.controller.js - logicinfo.com.br
import ProductsRepository from '../models/repositories/products.repository.js'

class ProductsController {
    constructor() {
        this.productsRepository = new ProductsRepository()
    }

    list = async (req, res) => {
        const { data: products } = await this.productsRepository.getAll()

        const data = {
            products,
            title:  "lista de produtos",        
        } 

        res.render('products/index.ejs', data)
    }

    view = async (req, res) => {
        const { id } = req.params
        const result = await this.productsRepository.getById(id)
        const product = result.data[0]

        const data = {
            product,
            title:  `product: ${product.name.substring(0, 30)}`,        
        } 

        res.render('products/view.ejs', data)
    }

    add = async (req, res) => {
        const data = {
            title:   "adicionar produto",        
        } 

        res.render('products/add.ejs', data)
    }

    save = async (req, res) => {
        const { name, details } = req.body
        const result = await this.productsRepository.create(req.body)

        res.redirect('/products') 
    }
}

export default new ProductsController()