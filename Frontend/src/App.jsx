import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import '../public/fonts.css'
import Classes from './components/Classes'
import Schedule from './components/Schedule'
import ScheduleTabs from './components/Events'
import Trainers from './components/Trainers'
import Events from './components/Events'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Blog from './components/Blog'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Classes/>
      <Schedule/>
      <Trainers/>
      <Events/>
      <Pricing/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
