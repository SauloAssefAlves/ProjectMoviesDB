export default function Header({ children }) {
  return (
    <div className="flex-1 flex flex-col sticky top-0 z-10 shadow-xl backdrop-blur-md ">
      <div className="  flex items-center justify-center   h-14  ">
        <butto className="text-blue-500  duration-200 font-title font-bold text-2xl">
          Project
        </butto>

        {/* <div className="flex   items-center justify-center  space-x-6  pl-6">
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
        </div> */}
      </div>
    </div>
  )
}
