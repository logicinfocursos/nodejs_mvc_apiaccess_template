// src\models\repositories\base.repository.js
import { apiGET } from '../../services/api/apiGET.js'
import { apiPOST } from '../../services/api/apiPOST.js'
import { apiPUT } from '../../services/api/apiPUT.js'
import { apiDELETE } from '../../services/api/apiDELETE.js'

class BaseRepository {    

    constructor(entity) {
        this.entity = entity
    }

    async getAll() {

        const list = await apiGET({ table: this.entity })

       // return mapObject(list) 
        return list
    }

    async getById(id) {

        const obj = await apiGET({ table:this.entity, searchID: id, searchField:'id' })

        //return mapObject(obj) 
        return obj
    }

    async getByField(field, value) {

        const list = await apiGET({ table:this.entity, searchID: value, searchField:field })

        //return mapObject(list) 
        return list
    }

    async save(dataBody) {

        if (dataBody.id === null) return await this.create(dataBody)

        else return await this.update(dataBody)                       
    }

    async create(dataBody) {
       
        console.log(">> dataBody:", )
        return await apiPOST({table: this.entity, objToAdd:dataBody})
    }

    async update(dataBody) {

        return await apiPUT({table: this.entity, objToUpdate: dataBody})
    
    }

    async erase(id) {

        return await apiDELETE({table: this.entity, id: id})
    }

    mapObject(object) {
        let newObject = {}
        Object.keys(object).forEach((key) => {
            newObject[key] = object[key]
        })

        return newObject
    }
}

export default BaseRepository