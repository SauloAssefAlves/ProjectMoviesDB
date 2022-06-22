import { useEffect, useState } from 'react'
import Loader from '../../Components/Loader'

export default function Page2() {
  const [loader, setLoader] = useState('LOADING')
  useEffect(() => {
    setLoader('DONE')
  }, [])

  return (
    <Loader status={loader}>
      <div className="flex items-start justify-center ">
        <p className="font-medium font-body text-text text-xl">
          Page 2 em breve...
        </p>
      </div>
    </Loader>
  )
}
