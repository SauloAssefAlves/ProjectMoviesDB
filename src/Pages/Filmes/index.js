import { useEffect } from 'react'
import Carousel from '../../Components/Carosuel'
import apiFilmes from '../../services/apiFilmes'

//http://www.omdbapi.com/?i=tt3896198&apikey=2c568402
export default function Filmes() {
  useEffect(() => {
    apiFilmes
      .get('movie/now_playing', {
        params: {
          api_key: '18837df4b81f4d167d64ac8bc77f7eae',
          language: 'pt-BR',
          page: 1,
        },
      })
      .then((res) => {
        console.log('RES ', res)
      })
      .catch((err) => {
        console.log('ERR ', err)
      })
  }, [])

  return (
    <div className="flex flex-col items-center w-full h-full">
      <p className="font-thin font-retro text-xl">Filmes</p>
      <div
        className="w-full px-10
      "
      >
        <Carousel />
      </div>
    </div>
  )
}
