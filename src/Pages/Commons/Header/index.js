import { Link } from 'react-router-dom'
import LinksHeader from '../../../Router/LinksHeader'

export default function Header({ children }) {
  return (
    <div className="flex-1 flex flex-col sticky top-0 z-50">
      <div className=" flex items-center justify-center  h-14 bg-slate-900">
        <Link
          to="/"
          className="text-neutral-200 hover:text-neutral-100 duration-200 font-title text-2xl"
        >
          Project
        </Link>
      </div>
      <div className="flex flex-1  items-center justify-center bg-slate-800 space-x-6">
        {LinksHeader.map((page) => (
          <Link
            key={page.name}
            to={page.path}
            className=" font-body font-semibold text-lg text-neutral-300 hover:text-neutral-100 duration-200"
          >
            {page.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
