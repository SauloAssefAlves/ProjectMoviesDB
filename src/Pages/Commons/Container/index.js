export default function Container({ children }) {
  return (
    <div
      style={{ height: 'calc(100% - 84px)', width: '100%' }}
      className=" bg-zinc-300 p-4"
    >
      {children}
    </div>
  )
}
