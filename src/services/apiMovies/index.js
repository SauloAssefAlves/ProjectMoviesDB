import axios from 'axios'

function apiMovies() {
  //key - 18837df4b81f4d167d64ac8bc77f7eae
  let baseURLs = `https://api.themoviedb.org/3/`

  return axios.create({
    baseURL: baseURLs,
  })
}
export default apiMovies()
