import axios from "axios"

export const apiUser = axios.create({
  baseURL: 'http://localhost:3334/'
})