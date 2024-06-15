// src\controllers\base.controller.js
class BaseController {

    constructor(repository) {
        this.repository = repository
    }

    getAll() {

        return this.repository.getAll()
    }

    getById(id) {

        return this.repository.getById(id)
    }

    getByField(field, value) {

        return this.repository.getByField(value, field)
    }

    save(dataBody) {

        return this.repository.save(dataBody)
    }

    create(dataBody) {

        return this.repository.create(dataBody)
    }

    update(dataBody) {

        return this.repository.update(dataBody)
    }

    erase(id) {

        return this.repository.erase(id)
    }
}

export default BaseController
