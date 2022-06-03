export default function Container({ children }) {
  return (
    <div
      style={{ minHeight: 'calc(100% - 56px)' }}
      className=" bg-background p-4 flex items-start justify-center"
    >
      {children}
    </div>
  )
}
