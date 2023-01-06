import axios from 'axios'

export const BASE_URL = 'https://notifymeez.onrender.com'

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})