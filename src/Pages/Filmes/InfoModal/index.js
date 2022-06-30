import { useEffect, useState, useCallback } from 'react'
import { StarIcon, CalendarIcon } from '@heroicons/react/solid'
import Carousel from '../../../Components/Carosuel'
import apiMovies from '../../../services/apiMovies'
import { getGenre } from '../utils'

export default function InfoModal({ info }) {
  const [information, setInformation] = useState(info)
  const [changetitleSize, setChangeTitleSize] = useState(false)
  const [similar, setSimilar] = useState([])

  useEffect(() => {
    if (information?.title?.length >= 40) {
      setChangeTitleSize(true)
    }
  }, [information])

  useEffect(() => {
    const similarShows = new Promise((resolve, reject) => {
      apiMovies
        .get(`movie/${information.id}/similar`, {
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

    Promise.all([similarShows])
      .then((res) => {
        setSimilar(...res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  useEffect(() => {})
  const loadImgs = (data) =>
    data.map((movie) => ({
      id: movie.id,
      imgs: (
        <button
          onClick={() => {
            setInformation(movie)
          }}
          key={movie.id}
          className="  flex w-52  py-5 relative rounded  items-center justify-center group  "
        >
          {movie.poster_path ? (
            <img
              className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500  rounded flex flex-1 items-stretch max-h-72  duration-500"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          ) : (
            <div className="transition  items-center justify-center ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 rounded flex flex-1  h-72  duration-500">
              <p className="font-title text-lg text-text font-semibold underline underline-offset-1">
                {' '}
                NOT FOUND
              </p>
            </div>
          )}
        </button>
      ),
    }))

  function dateFormat(dateStr) {
    if (!dateStr) {
      return ''
    }
    const date = dateStr.split('-')
    return `${date[2]}/${date[1]}/${date[0]}`
  }

  return (
    <div className="flex flex-col flex-1 justify-center ">
      <div className="flex md:flex-row flex-col items-center md:items-start justify-center">
        <div className="flex md:pr-8 ">
          {information.poster_path ? (
            <img
              className=" rounded-xl flex flex-1 h-[450px] duration-500 "
              src={`https://image.tmdb.org/t/p/w500/${information.poster_path}`}
              alt={information?.title}
            />
          ) : (
            <div className=" items-center justify-center  bg-blue-500  w-64  rounded flex flex-1  h-96  duration-500">
              <p className="font-title text-lg text-text font-semibold underline underline-offset-1">
                {' '}
                NOT FOUND
              </p>
            </div>
          )}
        </div>
        <div className=" flex flex-col pt-10 flex-1">
          <p
            className={`text-text ${
              changetitleSize ? 'text-3xl' : 'text-4xl'
            }  font-title font-bold`}
          >
            {information?.title}
          </p>
          <div className="flex pt-2">
            <div className="flex items-center justify-center pr-4">
              <CalendarIcon className="w-6 text-text" />
              <p className="text-text font-light font-title pl-2 ">
                {dateFormat(information.release_date)}
              </p>
            </div>
            <div className="flex items-center justify-center pr-2 ">
              {getGenre(information.genre_ids).map((genres, id) => (
                <p key={genres} className="text-text text-sm align-bottom">
                  &nbsp;
                  {genres}
                  &nbsp;
                  {id < information.genre_ids.length - 1 && '|'}
                </p>
              ))}
            </div>
            <div className="flex justify-center">
              <StarIcon className="w-6 text-yellow-300" />
              <div className="flex items-center justify-center pl-2">
                <p className="text-text font-light font-title ">
                  {information?.vote_average.toFixed(1)}
                </p>
                <p className="text-text opacity-70 font-light font-title text-xs ">
                  /10
                </p>
              </div>
            </div>
          </div>
          <div className="text-text font-light font-title text-sm pt-4 md:pb-0 pb-4 max-h-full  break-words">
            {information.overview !== ''
              ? information.overview
              : 'Nenhuma Descrição...'}
          </div>
        </div>
      </div>
      {similar.length !== 0 && (
        <div className="max-w-full md:flex hidden flex-col flex-1 items-stretch pt-2">
          <p className="text-text flex flex-1  font-title text-center items-center justify-center">
            Relacionados
          </p>
          <Carousel imgs={loadImgs(similar)} />
        </div>
      )}
    </div>
  )
}
