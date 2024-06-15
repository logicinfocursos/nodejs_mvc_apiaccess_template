// src\models\repositories\products.repository.js
import BaseRepository from './base.repository.js'

class ProductsRepository extends BaseRepository {

    constructor() {
        super('products')
    }
}

export default ProductsRepository