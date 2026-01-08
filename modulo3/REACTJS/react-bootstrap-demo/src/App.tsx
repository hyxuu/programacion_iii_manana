
import './App.css'
import BsCarousel from './components/bs/BsCarousel'
import BsFeatures from './components/bs/BsFeatures'
import BsFooter from './components/bs/BsFooter'
import BsHero from './components/bs/BsHero'
import BsNavbar from './components/bs/BsNavbar'
import BsNewsletter from './components/bs/BsNewsletter'

function App() {

  return (
    <>
      <BsNavbar/>
      <BsHero/>
      <BsCarousel/>
      <BsFeatures/>
      <BsNewsletter/>
      <BsFooter/>
    </>
  )
}

export default App
