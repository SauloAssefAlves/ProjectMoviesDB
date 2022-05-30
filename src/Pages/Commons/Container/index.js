export default function Container({ children }) {
  return (
    <div
      style={{ minHeight: 'calc(100% - 84px)' }}
      className=" bg-zinc-300 p-4 flex"
    >
      {children}
    </div>
  )
}
