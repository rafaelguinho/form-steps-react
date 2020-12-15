export function getVehicles(vehicleType, brandId) {
    return fetch(`http://fipeapi.appspot.com/api/1/${vehicleType}/veiculos/${brandId}.json`)
      .then(data => data.json())
  }