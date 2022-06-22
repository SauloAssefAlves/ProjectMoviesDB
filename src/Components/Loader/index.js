import { useState, useEffect } from 'react'
import OnLoad from './OnLoad'
import OnError from './OnError'

export default function Loader({ children, status }) {
  const [loaderStatus, setLoaderStatus] = useState('LOADING')

  function statusSwitch(stat) {
    switch (stat) {
      case 'DONE':
        return children
      case 'ERROR':
        return <OnError />
      default:
        return <OnLoad />
    }
  }

  useEffect(() => {
    console.log(status)
    setTimeout(() => {
      setLoaderStatus(status)
    }, 1000)
  }, [status])

  return statusSwitch(loaderStatus)
}

Loader.defaultProps = {
  status: 'LOADING',
}
