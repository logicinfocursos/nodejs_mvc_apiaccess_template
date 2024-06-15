// src\controllers\home.controller.js
import ProductsRepository from '../models/repositories/products.repository.js'

const view = async (req, res) => {
    const productsRepository = new ProductsRepository();
    const { data: products } = await productsRepository.getAll();

    const data = {
        products,
        title:  "lista de produtos",        
    } 

    res.render('index', data);
}

export default {
    view,
}