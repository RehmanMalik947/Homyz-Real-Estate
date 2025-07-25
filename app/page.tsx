import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Residencies from '../components/Residencies'
import Value from '../components/Value'
import Contact from '../components/Contact'
import GetStarted from '../components/GetStarted'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </>
  )
}