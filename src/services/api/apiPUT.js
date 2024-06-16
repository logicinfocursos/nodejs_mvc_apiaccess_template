// src\services\api\apiPUT.js - logicinfo.com.br
import { api } from './api.js'



const apiPUT = async ({ table = '', objToUpdate }) => {

    if (table !== '') {

        try {

            const response = await api.put(`${table}/${objToUpdate.id}`, objToUpdate)

            return response

        } catch (error) {

            console.log(`error when trying to read the apitPUT - table: ${table}`, error)

        }
    }

    return false
}

export { apiPUT }