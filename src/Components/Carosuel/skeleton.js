import Carousel from '.'

export default function SkeletonCarosuel() {
  let imgs = [
    {
      id: 1,
      imgs: (
        <div className="flex w-52 h-72 blur-sm rounded bg-gray-200 animate-pulse " />
      ),
    },
    {
      id: 2,
      imgs: (
        <div className="flex w-52 h-72 blur-sm rounded bg-gray-200 animate-pulse " />
      ),
    },
    {
      id: 3,
      imgs: (
        <div className="flex w-52 h-72 blur-sm rounded bg-gray-200 animate-pulse" />
      ),
    },
    {
      id: 4,
      imgs: (
        <div className="flex w-52 h-72 blur-sm rounded bg-gray-200 animate-pulse" />
      ),
    },
    {
      id: 5,
      imgs: (
        <div className="flex w-52 h-72 blur-sm rounded bg-gray-200 animate-pulse" />
      ),
    },
    {
      id: 6,
      imgs: (
        <div className="flex w-52 h-72 blur-sm rounded bg-gray-200 animate-pulse" />
      ),
    },
    {
      id: 7,
      imgs: (
        <div className="flex w-52 h-72 blur-sm rounded bg-gray-200 animate-pulse" />
      ),
    },
    {
      id: 8,
      imgs: (
        <div className="flex w-52 h-72 blur-sm rounded bg-gray-200 animate-pulse" />
      ),
    },
    {
      id: 9,
      imgs: (
        <div className="flex w-52 h-72 blur-sm rounded bg-gray-200 animate-pulse" />
      ),
    },
    {
      id: 10,
      imgs: (
        <div className="flex w-52 h-72 blur-sm rounded bg-gray-200 animate-pulse" />
      ),
    },
    {
      id: 11,
      imgs: (
        <div className="flex w-52 h-72 blur-sm rounded bg-gray-200 animate-pulse" />
      ),
    },
  ]
  return <Carousel imgs={imgs} />
}
