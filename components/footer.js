import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-red-50">
      <Container>
        <div className="py-8 px-5 flex flex-col lg:flex-row">
          Contact me at: 
        </div>
      </Container>
    </footer>
  )
}
