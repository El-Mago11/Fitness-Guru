import React from 'react'
import About from '../About'
import Classes from '../Classes'
import Schedule from '../Schedule'
import Trainers from '../Trainers'
import Events from '../Events'
import Pricing from '../Pricing'
import Blog from '../Blog'
import Contact from '../Contact'
import Home from '../Home'


const Homepage = () => {
  return (
    <div className="app-wrapper overflow-x-hidden fade-in">
      <Home/>
      <About/>
      <Classes/>
      <Schedule/>
      <Trainers/>
      <Events/>
      <Pricing/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Homepage
