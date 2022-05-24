import { useEffect, useRef, useState } from 'react'
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'

export default function Carousel({ imgs }) {
  const [buttonLeftAppear, setButtonLeftApear] = useState(false)
  const [buttonRigthAppear, setButtonRigthApear] = useState(true)
  const carousel = useRef()
  const scrollLeft = useRef()
  const startX = useRef()
  const isDown = useRef(false)
  let a = 0

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
    })
    carousel.current.addEventListener('mousemove', (e) => {
      if (!isDown.current) return
      e.preventDefault()
      const x = e.pageX - carousel.current.offsetLeft

      const walk = (x - startX.current) * 2

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
        console.log(carousel.current.scrollLeft - carousel.current.offsetWidth)
        setButtonLeftApear(false)
      } else {
        setButtonLeftApear(true)
      }
    })
  }, [])

  function img() {
    return (
      <div className="flex w-56 h-96 rounded bg-slate-500 items-center justify-center">
        <button onClick={(e) => alert('CLICOU')}>CLICK</button>
      </div>
    )
  }

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
    //xl:w-[78rem] lg:w-[63rem] md:w-[48rem] sm:w-[33rem] w-[18rem]
    <div className="relative w-full ">
      <div className=" px-10 py-2 w-full flex items-stretch ">
        <div
          ref={carousel}
          className="flex flex-1 h-full bg-white rounded-xl overflow-x-hidden scroll-smooth"
        >
          <button
            disabled={!buttonLeftAppear}
            onClick={handleClickLeft}
            className={`${
              !buttonLeftAppear && 'opacity-0'
            } absolute text-neutral-900 -left-7 origin-top pr-2  -translate-y-1/2 top-1/2 duration-200  `}
          >
            <div className="  bg-slate-300 rounded-xl  duration-200">
              <ChevronLeftIcon className="w-16 hover:w-[67px] duration-200" />
            </div>
          </button>
          {imgs.map((filmes) => (
            <div className="p-2">{filmes}</div>
          ))}

          <button
            disabled={!buttonRigthAppear}
            onClick={handleClickRight}
            className={`${
              !buttonRigthAppear && 'opacity-0'
            } absolute text-neutral-900 -right-7 origin-top  -translate-y-1/2 top-1/2 duration-200`}
          >
            <div className="bg-slate-300 rounded-xl   flex-1 duration-200">
              <ChevronRightIcon className="w-16 hover:w-[67px]  duration-200" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

Carousel.defaultProps = {
  imgs: [
    <div className="flex w-56 h-96 rounded bg-slate-500 items-center justify-center" />,
    <div className="flex w-56 h-96 rounded bg-slate-500 items-center justify-center" />,
    <div className="flex w-56 h-96 rounded bg-slate-500 items-center justify-center" />,
    <div className="flex w-56 h-96 rounded bg-slate-500 items-center justify-center" />,
    <div className="flex w-56 h-96 rounded bg-slate-500 items-center justify-center" />,
    <div className="flex w-56 h-96 rounded bg-slate-500 items-center justify-center" />,
    <div className="flex w-56 h-96 rounded bg-slate-500 items-center justify-center" />,
    <div className="flex w-56 h-96 rounded bg-slate-500 items-center justify-center" />,
    <div className="flex w-56 h-96 rounded bg-slate-500 items-center justify-center" />,
    <div className="flex w-56 h-96 rounded bg-slate-500 items-center justify-center" />,
    <div className="flex w-56 h-96 rounded bg-slate-500 items-center justify-center" />,
    <div className="flex w-56 h-96 rounded bg-slate-500 items-center justify-center" />,
    <div className="flex w-56 h-96 rounded bg-slate-500 items-center justify-center" />,
  ],
}
