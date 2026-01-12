import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LabRbButtons from './lab/LabRbButtons'
import LabRbAlert from './lab/LabRbAlert'
import LabRbCard from './lab/LabRbCard'
import LabRbForm from './lab/LabRbForm'
import LabRbTable from './lab/LabRbTable'
import RBHero from './components/rb/RBHero'
import RBCarousel from './components/rb/RBCarousel'
import RBCardGrid from './components/rb/RBCardGrid'
import RBNewsletter from './components/rb/RBNewsletter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RBHero/>
      <RBCarousel/>
      <RBCardGrid/>
      <RBNewsletter/>
    </>
  )
}

export default App
