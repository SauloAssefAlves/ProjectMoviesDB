import axios from 'axios'

function apiFilmes() {
  let baseURLs = `https://api.themoviedb.org/3/`

  return axios.create({
    baseURL: baseURLs,
  })
}
//2c568402
export default apiFilmes()
