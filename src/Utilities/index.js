import axios from 'axios'
import Cookies from 'js-cookie'

export default () => {
    const token = Cookies.get('token')

    return axios.create({
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        }
    })
}

export const handleError = err => {
    if (err.response) return console.error({
        status: err.response.status,
        message: err.response.data.errors[0].message
    })
    else return console.error(err)
}
