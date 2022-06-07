import { XIcon } from '@heroicons/react/solid'

export default function Modal({ setIsOpen, children }) {
  function handleClick() {
    setIsOpen(false)
  }

  return (
    <div className=" backdrop-blur-sm flex items-center justify-center absolute w-full h-full left-0 top-0 z-50 px-10 overflow-hidden">
      <div className=" relative flex flex-col p-4 max-h-full  flex-1 bg-container rounded-2xl max-w-6xl ">
        <div className="absolute right-0 top-0 rounded-full bg-accent origin-center translate-x-2 -translate-y-2 border-2 border-text hover:bg-accent_hover duration-200">
          <button
            onClick={handleClick}
            className=" text-center flex items-center justify-center w-6 "
          >
            <XIcon className="w-6 text-text" />
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
