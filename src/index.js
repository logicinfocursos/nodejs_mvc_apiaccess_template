// src\index.js
import ProductsController from './controllers/products.controller.js'
import CategoriesController from './controllers/categories.controller.js'
import HomeController from './controllers/home.controller.js'
//import ProductsRepository  from './models/repositories/products.repository.js'

/* const getProducts = async () => {
    const productsRepository = new ProductsRepository('products')
    const response = await productsRepository.getAll()
    console.log(response)
    return response
} */

/* const products = getProducts()
products.then(data => console.log(data)) */

/* const productsController = new ProductsController()
const products = productsController.getAll()
products.then(data => console.log(data)) */

/* const categoriesController = new CategoriesController()
const categories = categoriesController.getAll()
categories.then(data2 => console.log(data2)) */

const homeController = new HomeController()
const home = homeController.view()
