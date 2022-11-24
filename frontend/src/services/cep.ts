import axios from 'axios'

export const cepService = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})
