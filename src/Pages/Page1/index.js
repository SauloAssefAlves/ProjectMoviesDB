import Carousel from '../Components/Carosuel'

export default function Page1() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <p className="font-thin font-retro text-xl">Page 1</p>
      <div
        className="w-full px-10
      "
      >
        <Carousel />
      </div>
    </div>
  )
}
