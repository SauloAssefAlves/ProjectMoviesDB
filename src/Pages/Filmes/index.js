/* eslint-disable react/jsx-curly-brace-presence */
import { useCallback, useEffect, lazy, useState, Suspense } from 'react'
import apiMovies from '../../services/apiMovies'

import Carousel from '../../Components/Carosuel'

//{``https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}
export default function Filmes() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    const moviesPromise = new Promise((resolve, reject) => {
      apiMovies
        .get('movie/now_playing', {
          params: {
            api_key: '18837df4b81f4d167d64ac8bc77f7eae',
            language: 'pt-BR',
            page: 1,
          },
        })
        .then((res) => {
          resolve(res.data.results)
        })
        .catch((err) => {
          reject(err)
          console.log('ERR ', err)
        })
    })
    const seriesPromise = new Promise((resolve, reject) => {
      apiMovies
        .get('tv/airing_today', {
          params: {
            api_key: '18837df4b81f4d167d64ac8bc77f7eae',
            language: 'pt-BR',
            page: 1,
          },
        })
        .then((res) => {
          resolve(res.data.results)
        })
        .catch((err) => {
          reject(err)
          console.log('ERR ', err)
        })
    })

    Promise.all([moviesPromise, seriesPromise])
      .then((res) => {
        setMovies(res[0])
        setSeries(res[1])
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const loadImgs = useCallback((data) =>
    data.map((movie) => ({
      id: movie.id,
      imgs: (
        <button
          onClick={() => {
            console.log('CLicou', movie)
          }}
          key={movie.id}
          className="  flex w-52 h-80 hover: relative rounded  items-center justify-center group  "
        >
          <img
            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500  rounded flex flex-1 items-stretch h-72  duration-500"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </button>
      ),
    }))
  )

  return (
    <div className="flex flex-col items-stretch justify-center flex-1 max-w-full ">
      <div className="flex items-center justify-start">
        <p className="font-title text-lg text-text d font-medium pl-12">
          Filmes em Cartaz
        </p>
      </div>

      <div className="max-w-full ">
        {movies.length === 0 ? (
          <Carousel />
        ) : (
          <Carousel imgs={loadImgs(movies)} />
        )}
      </div>
      <div className="flex items-center justify-start">
        <p className="font-title text-lg text-text d font-medium pl-12">
          Tv Shows
        </p>
      </div>
      <div className="max-w-full  ">
        {movies.length === 0 ? (
          <Carousel />
        ) : (
          <Carousel imgs={loadImgs(series)} />
        )}
      </div>
    </div>
  )
}
