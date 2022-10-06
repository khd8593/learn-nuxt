import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}
function fetchProductsByKeyword(keyword){
  const params = {
    params: {
      name_like: keyword
    }
  }
  return instance.get(`/products`, params)
}

export {
  fetchProductById,
  fetchProductsByKeyword
}