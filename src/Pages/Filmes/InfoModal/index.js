import { useEffect, useState, useCallback } from 'react'
import { StarIcon, CalendarIcon } from '@heroicons/react/solid'
import Carousel from '../../../Components/Carosuel'

export default function InfoModal({ info }) {
  const [changetitleSize, setChangeTitleSize] = useState(false)

  useEffect(() => {
    if (info?.title?.length >= 40) {
      setChangeTitleSize(true)
    }

    if (info?.name?.length >= 40) {
      setChangeTitleSize(true)
    }
    console.log(Object.prototype.hasOwnProperty.call(info, 'overview'))
  }, [])

  useEffect(() => {
    console.log(info)
  })

  return (
    <div className="flex flex-col flex-1 justify-center items-stretch">
      <div className="flex items-start justify-center">
        <div className="flex pr-8">
          <img
            className=" rounded-xl flex flex-1 items-stretch h-[450px]  duration-500"
            src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}
            alt={info.title}
          />
        </div>
        <div className=" flex flex-col pt-10 flex-1">
          <p
            className={`text-text ${
              changetitleSize ? 'text-3xl' : 'text-5xl'
            }  font-title font-bold`}
          >
            {info?.title} {info?.name}
          </p>
          <div className="flex pt-2">
            <div className="flex items-center justify-center pr-4">
              <CalendarIcon className="w-6 text-text" />
              <p className="text-text font-light font-title pl-2 ">
                {info?.release_date} {info?.first_air_date}
              </p>
            </div>
            <div className="flex justify-center">
              <StarIcon className="w-6 text-yellow-300" />
              <div className="flex items-center justify-center pl-2">
                <p className="text-text font-light font-title ">
                  {info?.vote_average}
                </p>
                <p className="text-text opacity-70 font-light font-title text-xs ">
                  /10
                </p>
              </div>
            </div>
          </div>
          <div className="text-text font-light font-title text-sm pt-4 break-words">
            {info.overview !== '' ? info.overview : 'Nenhuma Descrição...'}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col flex-1 items-stretch pt-4">
        <Carousel />
      </div>
    </div>
  )
}
