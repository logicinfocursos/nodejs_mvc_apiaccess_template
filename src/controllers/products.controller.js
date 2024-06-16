// src\controllers\home.controller.js - logicinfo.com.br
import ProductsRepository from '../models/repositories/products.repository.js'



const list = async (req, res) => {
    const productsRepository = new ProductsRepository();
    const { data: products } = await productsRepository.getAll();

    const data = {
        products,
        title:  "lista de produtos",        
    } 

    res.render('products/index.ejs', data);
}



const view = async (req, res) => {
    const { id } = req.params;
    const productsRepository = new ProductsRepository();
    const result = await productsRepository.getById(id);
    const product = result.data[0];

    const data = {
        product,
        title:  `product: ${product.name.substring(0, 30)}`,        
    } 

    res.render('products/view.ejs', data);
}



const add = async (req, res) => {
    
    const data = {
        title:   "adicionar produto",        
    } 

    res.render('products/add.ejs', data);
}



const save = async (req, res) => {
    const { name, details } = req.body;
    const productsRepository = new ProductsRepository();
    const result = await productsRepository.create(req.body);

    res.redirect('/products'); 
}

export default {
    list, view, add, save
}