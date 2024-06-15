// src\models\repositories\categories.repository.js
import BaseRepository from './base.repository.js'

class CategoriesRepository extends BaseRepository {

    constructor() {
        super('categories')
    }
}

export default CategoriesRepository