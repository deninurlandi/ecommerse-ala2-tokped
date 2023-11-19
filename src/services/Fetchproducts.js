export function getProducts(callback) {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      if (callback && typeof callback === 'function') {
        callback(null, data);
      }
    })
    .catch((error) => {
      if (callback && typeof callback === 'function') {
        callback(error, null);
      }
    });
}

export function getDetailProduct(id, callback) {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (callback && typeof callback === 'function') {
        callback(null, data);
      }
    })
    .catch((error) => {
      if (callback && typeof callback === 'function') {
        callback(error, null);
      }
    });
}
