import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Contact from '../pages/Contact'
import {Routes, Route, useLoaction} from 'react-router-dom'

const AnimRoutes = () => {
  return (
    <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/about' element= {<About></About>}/>
    </Routes>
  )
}

export default AnimRoutes
