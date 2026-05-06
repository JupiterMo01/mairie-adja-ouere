import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL
const TOKEN = process.env.STRAPI_TOKEN

const api = axios.create({
  baseURL: `${API_URL}/api`,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
  },
})

export default api