import { Link } from 'react-router-dom'
import LinksHeader from '../../../Router/LinksHeader'

export default function Header({ children }) {
  return (
    <div className="flex-1 flex flex-col sticky top-0 z-10 shadow-sm bg-neutral bg-transparent">
      <div className=" pl-10 flex items-center justify-center   h-14  ">
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-400 duration-200 font-title font-bold text-2xl"
        >
          Project
        </Link>

        <div className="flex   items-center justify-center  space-x-6  pl-6">
          {LinksHeader.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className=" font-body 
                  font-semibold text-sm text-white hover:text-neutral-100 "
            >
              <div className="text-center p-2 rounded-lg flex hover:bg-hover duration-200">
                {page.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-1" />
      </div>
    </div>
  )
}
