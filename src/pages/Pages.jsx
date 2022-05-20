import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import {Route, Routes, useLocation} from 'react-router-dom'
import Searched from './Searched'
import Recipe from './Recipe'
import {AnimatePresence} from 'framer-motion'


function Pages() {

  const location = useLocation()
  return (
   <AnimatePresence exitBeforeEnter>
    <Routes key={location.pathname} location={location} >
        <Route path='/' exact element={<Home />} />
        <Route path='/cuisine/:type' elements={<Cuisine />} />
        <Route path='/searched/:search' elements={<Searched />} />
        <Route path='/recipe/:name' elements={<Recipe />} />
    </Routes>
    </AnimatePresence>
   
  )
}

export default Pages