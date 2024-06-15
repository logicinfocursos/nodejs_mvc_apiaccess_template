// src\controllers\home.controller.js
import ProductRepository from '../models/repositories/products.repository.js'
import HomeView from '../views/home/home.view.js'

class HomeController {

    view() {

        const productRepository = new ProductRepository()
        const products = productRepository.getAll()
        products.then(data => console.log(data))

        const data = {
            products: products,
            title: 'Home'
        }

        return new HomeView(data)
    }
}

export default HomeController
