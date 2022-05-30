/* eslint-disable react/jsx-curly-brace-presence */
import { useCallback, useEffect, lazy, useState, Suspense } from 'react'
import SkeletonCarosuel from '../../Components/Carosuel/skeleton'
import apiMovies from '../../services/apiMovies'

const Carousel = lazy(() => import('../../Components/Carosuel'))

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

  const loadImgsMovies = useCallback(() => {
    let cache = []
    let arrayImgs = movies.map((movie) => {
      cache.push(`https://image.tmdb.org/t/p/original/${movie.poster_path}`)
      return {
        id: movie.id,
        imgs: (
          <div
            key={movie.id}
            className="flex w-52  relative rounded bg-slate-500 items-center justify-center group  "
          >
            <img
              className="rounded w-56  h-72 duration-500"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="flex items-center rounded justify-center w-full h-full absolute backdrop-blur-[2px] opacity-0 group-hover:opacity-100 duration-500">
              <button className="font-body font-semibold text-white  text-xl">
                Detalhar
              </button>
            </div>
          </div>
        ),
      }
    })
    return arrayImgs
  })
  const loadImgsSeries = useCallback(() => {
    let cache = []
    let arrayImgs = series.map((serie) => {
      cache.push(`https://image.tmdb.org/t/p/original/${serie.poster_path}`)
      return {
        id: serie.id,
        imgs: (
          <div
            key={serie.id}
            className="flex w-52  relative rounded bg-slate-500 items-center justify-center group  "
          >
            <img
              className="rounded w-56  h-72 duration-500"
              src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`}
              alt={serie.title}
            />
            <div className="flex items-center rounded justify-center w-full h-full absolute backdrop-blur-[2px] opacity-0 group-hover:opacity-100 duration-500">
              <button className="font-body font-semibold text-white  text-xl">
                Detalhar
              </button>
            </div>
          </div>
        ),
      }
    })
    return arrayImgs
  })

  return (
    <div className="flex flex-col items-start flex-1 max-w-full ">
      <p className="px-12">FILMES</p>
      <div className="max-w-full ">
        {movies.length === 0 ? (
          <SkeletonCarosuel />
        ) : (
          <Carousel imgs={loadImgsMovies()} />
        )}
      </div>
      <p className="px-12">TV</p>
      <div className="max-w-full  ">
        {movies.length === 0 ? (
          <SkeletonCarosuel />
        ) : (
          <Carousel imgs={loadImgsSeries()} />
        )}
      </div>
    </div>
  )
}
