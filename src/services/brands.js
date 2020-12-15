export function getBrands(vehicleType) {
    return fetch(`http://fipeapi.appspot.com/api/1/${vehicleType}/marcas.json`)
      .then(data => data.json())
  }