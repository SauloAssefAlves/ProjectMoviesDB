export default function OnLoad() {
  return (
    <div className="flex items-center justify-center w-full  ">
      <div className="flex flex-col sm:flex-row items-center justify-center  w-full  ">
        <div className=" w-20 h-20 rounded-3xl animate-pulse-medium bg-accent m-8" />
        <div className=" w-20 h-20 rounded-3xl animate-pulse-slow bg-accent m-8" />
        <div className=" w-20 h-20 rounded-3xl animate-pulse-medium bg-accent m-8" />
      </div>
    </div>
  )
}
