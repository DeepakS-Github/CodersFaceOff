import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/navbar'
import Hero from './components/Hero'
import HeroBottom from './components/HeroBottom'
import Group120 from '../src/assets/Group120.png'
import HeroBottomBanner from './components/HeroBottomBanner'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
     
    <Navbar/>
    <Hero/>
    {/* <HeroBottom/> */}
 <HeroBottomBanner/>
    </div>
  )
}

export default App
