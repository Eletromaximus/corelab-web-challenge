// const API = 'http://localhost:3333'

// const endpoint = (path: string): string => API + path

// const get = async (path: string): Promise<any> => {
//   return fetch(endpoint(path)).then((res) => res.json())
// }

export const getVehicles = () => {
  // return get('/vehicles')
  return get
}

export const get = {
  id: 15648,
  name: 'Gol',
  description: 'Unico dono, 10 anos de uso',
  plate: 'H218JK',
  isFavorite: false,
  year: 2010,
  color: 'white',
  price: 21000,
  createdAt: new Date(),
}
