// src\controllers\categories.controller.js
import BaseController from './base.controller.js'
import CategoryRepository from '../models/repositories/categories.repository.js'

class CategoryController extends BaseController {

    constructor() {
        super(new CategoryRepository())
    }
}

export default CategoryController