import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

function example() {
  return instance.get(`/products/${id}`)
}

export {
  example,
}