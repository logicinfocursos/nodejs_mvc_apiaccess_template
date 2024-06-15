// src\controllers\products.controller.js
import BaseController from './base.controller.js'
import ProductRepository from '../models/repositories/products.repository.js'

class ProductsController extends BaseController {

    constructor() {
        super(new ProductRepository())
    }
}

export default ProductsController