// src\services\apiGET.js
import { api } from './api.js'

const apiGET = async ({ table = '', searchID = '', searchField = 'id' }) => {

    if (table !== '') {
        try {
            let uri = searchID == '' ? `${table}` : `${table}?${searchField}=${searchID}`
            const response = await api.get(`${uri}`)

            return response

        } catch (error) {
            console.error('Erro:', error.message)
        }
    }

    return null
}

export { apiGET }
