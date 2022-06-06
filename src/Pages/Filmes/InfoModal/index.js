import { useEffect } from 'react'

export default function InfoModal({ info }) {
  useEffect(() => {
    console.log('AQUI ', info)
  })
  return (
    <div>
      <p className="text-text">
        
        {info?.title} {info?.name}
      </p>
    </div>
  )
}
