export function getProducts(callback) {
  return fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((response) => callback(response));
}

export function getDetailProduct(id, callback) {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => callback(json));
}
