// src\services\api\apiPOST.js
import { api } from './api.js'

const apiPOST = async ({ table = '', objToAdd }) => {

    if (table !== '') {

        try {

            const response = await api.post(table, objToAdd)

            return response

        } catch (error) {

            console.log(`error when trying to read the apitPOST - table: ${table}`, error)
        }
    }

    return false
}

export { apiPOST }