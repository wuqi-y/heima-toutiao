import axios from 'axios'

const request = axios.create({
  baseURL: 'http://api.tianapi.com/internet'
})

export default request
