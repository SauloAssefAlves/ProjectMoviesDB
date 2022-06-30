import { Outlet } from 'react-router'
import Container from '../Container'
import Header from '../Header'

export default function Body() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-background">
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  )
}
