import { useEffect, useRef, useState } from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'

export default function Carousel({ imgs }) {
  const [buttonLeftAppear, setButtonLeftApear] = useState(false)
  const [buttonRigthAppear, setButtonRigthApear] = useState(true)
  const [move, setMove] = useState(false)

  const carousel = useRef()
  const isDown = useRef(false)
  const scrollLeft = useRef()
  const startX = useRef()

  //const isDown = useRef(false)

  useEffect(() => {
    carousel.current.addEventListener('mousedown', (e) => {
      isDown.current = true
      startX.current = e.pageX - carousel.current.offsetLeft
      scrollLeft.current = carousel.current.scrollLeft
    })
    carousel.current.addEventListener('mouseleave', () => {
      isDown.current = false
    })
    carousel.current.addEventListener('mouseup', () => {
      isDown.current = false
      setMove(false)
    })
    carousel.current.addEventListener('mousemove', (e) => {
      if (!isDown.current) return
      setMove(true)
      e.preventDefault()
      const x = e.pageX - carousel.current.offsetLeft

      const walk = x - startX.current

      carousel.current.scrollLeft = scrollLeft.current - walk

      if (
        carousel.current.scrollWidth - carousel.current.clientWidth * 2 <=
        carousel.current.scrollLeft - carousel.current.clientWidth
      ) {
        setButtonRigthApear(false)
      } else {
        setButtonRigthApear(true)
      }
      if (carousel.current.scrollLeft <= 0) {
        setButtonLeftApear(false)
      } else {
        setButtonLeftApear(true)
      }
    })
  }, [])

  const handleClickRight = (e) => {
    e.preventDefault()
    setButtonLeftApear(true)

    carousel.current.scrollLeft += carousel.current.offsetWidth
    if (
      carousel.current.scrollWidth - carousel.current.clientWidth * 2 <=
      carousel.current.scrollLeft
    ) {
      setButtonRigthApear(false)
    }
  }
  const handleClickLeft = (e) => {
    e.preventDefault()
    setButtonRigthApear(true)

    carousel.current.scrollLeft -= carousel.current.offsetWidth
    if (carousel.current.scrollLeft - carousel.current.offsetWidth <= 0) {
      setButtonLeftApear(false)
    }
  }

  return (
    <div
      className={` relative px-10 w-full flex flex-1 ${
        move && 'cursor-grabbing  '
      }`}
    >
      <button
        disabled={!buttonLeftAppear}
        onClick={handleClickLeft}
        className={`${
          !buttonLeftAppear && 'opacity-0'
        } absolute text-neutral-900 -left-6 origin-top pr-2 -translate-y-1/2 top-1/2 duration-200  `}
      >
        <ChevronLeftIcon className="w-20  text-hover hover:text-text duration-200" />
      </button>
      <button
        disabled={!buttonRigthAppear}
        onClick={handleClickRight}
        className={`${
          !buttonRigthAppear && 'opacity-0'
        } absolute text-neutral-900 -right-6 origin-top  -translate-y-1/2 top-1/2 duration-200`}
      >
        <ChevronRightIcon className="w-20  text-hover hover:text-text duration-200" />
      </button>
      <div
        ref={carousel}
        className={`flex flex-1 h-full bg-transparent rounded-xl  overflow-x-hidden ${
          !move && 'scroll-smooth  '
        }  `}
      >
        {imgs.map((filmes, index) => (
          <div
            key={filmes.id}
            className={`px-2 duration-200   ${
              move && 'pointer-events-none  '
            } `}
          >
            {filmes.imgs}
          </div>
        ))}
      </div>
    </div>
  )
}
