/* eslint-disable react/jsx-curly-brace-presence */
import { useCallback, useEffect, lazy, useState, Suspense } from 'react'
import apiMovies from '../../services/apiMovies'
import { getGenre, MovieCarosuel } from './utils'
import Carousel from '../../Components/Carosuel'
import InfoModal from './InfoModal'
import Modal from '../../Components/Modal'
import Loader from '../../Components/Loader'

//{``https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}
export default function Filmes() {
  const [loader, setLoader] = useState('LOADING')
  const [movies, setMovies] = useState({
    nowPlaying: [],
    popular: [],
    action: [],
    comedy: [],
    drama: [],
  })
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [details, setDetails] = useState({})

  useEffect(() => {
    const moviesNowPlaying = new Promise((resolve, reject) => {
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
    const moviesPopular = new Promise((resolve, reject) => {
      apiMovies
        .get('movie/popular', {
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
    const ActionMovies = new Promise((resolve, reject) => {
      apiMovies
        .get(`movie/28/similar`, {
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
    const ComedyMovies = new Promise((resolve, reject) => {
      apiMovies
        .get(`movie/35/similar`, {
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
    const DramaMovies = new Promise((resolve, reject) => {
      apiMovies
        .get(`movie/18/similar`, {
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

    Promise.all([
      moviesNowPlaying,
      moviesPopular,
      ActionMovies,
      ComedyMovies,
      DramaMovies,
    ])
      .then((res) => {
        setMovies({
          nowPlaying: res[0],
          popular: res[1],
          action: res[2],
          comedy: res[3],
          drama: res[4],
        })
        console.log('aaasssss', res[2])
        setLoader('DONE')
      })
      .catch((err) => {
        setLoader('ERROR')
        console.log(err)
      })
  }, [])

  const handleClickImg = (movieDetails) => {
    setIsOpenModal(true)
    setDetails(movieDetails)
  }

  const loadImgsUpComing = (data) =>
    data.map((movie) => ({
      id: movie.id,
      imgs: (
        <div className=" relative flex w-[1100px] items-center justify-center  bg-background">
          {movie.poster_path ? (
            <button key={movie.id} onClick={() => handleClickImg(movie)}>
              <img
                className="flex flex-1 h-[700px]  pb-4 "
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt={movie.title}
              />

              <div className="absolute flex flex-col p-10 text-left left-0 w-full h-1/2 bottom-0 items-start justify-center bg-gradient-to-b from-transparent to-black">
                <p
                  className={`text-text  font-body font-bold ${
                    movie.title.length < 25 ? 'text-7xl' : 'text-5xl'
                  }`}
                >
                  {movie.title}
                </p>
                <div className="flex">
                  {getGenre(movie.genre_ids).map((genres, id) => (
                    <p key={genres} className="text-text ">
                      &nbsp;
                      {genres}
                      &nbsp;
                      {id < movie.genre_ids.length - 1 && '|'}
                    </p>
                  ))}
                </div>
              </div>
            </button>
          ) : (
            <div className=" items-center justify-center  rounded flex flex-1  h-72  duration-500">
              <p className="font-title text-lg text-text font-semibold underline underline-offset-1">
                {' '}
                NOT FOUND
              </p>
            </div>
          )}
        </div>
      ),
    }))

  const loadImgs = (data) =>
    data.map((movie) => ({
      id: movie.id,
      imgs: (
        <button
          onClick={() => handleClickImg(movie)}
          key={movie.id}
          className="  flex w-64 h-[410px]  relative rounded  items-center justify-center group  "
        >
          {movie.poster_path ? (
            <img
              className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 rounded flex flex-1 items-stretch h-96  duration-500"
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

  return (
    <Loader status={loader}>
      <div className="flex flex-col justify-start items-start max-w-full ">
        {isOpenModal && (
          <Modal setIsOpen={setIsOpenModal}>
            <InfoModal info={details} />
          </Modal>
        )}

        <MovieCarosuel imgs={loadImgsUpComing(movies.nowPlaying)} />
        <MovieCarosuel title="Mais Populares" imgs={loadImgs(movies.popular)} />
        <MovieCarosuel title="Ação" imgs={loadImgs(movies.action)} />
        <MovieCarosuel title="Comédia" imgs={loadImgs(movies.comedy)} />
        <MovieCarosuel title="Drama" imgs={loadImgs(movies.drama)} />
      </div>
    </Loader>
  )
}
