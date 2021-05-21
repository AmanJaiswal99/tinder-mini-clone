import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-clone-aman.herokuapp.com'
})

export default instance