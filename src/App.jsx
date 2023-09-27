import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/navbar'
import Hero from './components/Hero'
import HeroBottom from './components/HeroBottom'
import Group120 from '../src/assets/Group120.png'
import DeepakComponent3 from './components/DeepakComponent3'
import HeroBottomBanner from './components/HeroBottomBanner'
import DeepakComponent1 from './components/DeepakComponent1'
import DeepakComponent2 from './components/DeepakComponent2'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <DeepakComponent3/>
    <DeepakComponent2/>
    <DeepakComponent1/>
    <Footer/>
    </>
  )
}

export default App
