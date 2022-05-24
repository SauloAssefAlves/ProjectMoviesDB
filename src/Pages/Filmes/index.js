/* eslint-disable react/jsx-curly-brace-presence */
import { useEffect, useRef, useState } from 'react'
import Carousel from '../../Components/Carosuel'
import apiMovies from '../../services/apiMovies'

//{``https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}
export default function Filmes() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    apiMovies
      .get('movie/now_playing', {
        params: {
          api_key: '18837df4b81f4d167d64ac8bc77f7eae',
          language: 'pt-BR',
          page: 1,
        },
      })
      .then((res) => {
        setMovies(res.data.results)

        console.log('RES ', res)
      })
      .catch((err) => {
        console.log('ERR ', err)
      })
  }, [])

  function loadImgs() {
    let arrayImgs = movies.map((movie) => (
      <div className="flex w-56 relative rounded bg-slate-500 items-center justify-center group hover:bg-slate-900 ">
        <img
          className="rounded h-[336px] duration-500"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="flex items-center justify-center w-full h-full absolute backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-500">
          <button className="  ">
            <p className="font-body font-bold text-2xl">Detalhar</p>
          </button>
        </div>
      </div>
    ))

    return arrayImgs
  }
  useEffect(() => {
    console.log('FILMES ', loadImgs())
  })

  return (
    <div className="flex flex-col items-center w-full h-full">
      <p className=" font-title font-medium text-xl">Filmes</p>
      <div className="w-full px-10">
        <Carousel imgs={loadImgs()} />
      </div>
    </div>
  )
}
