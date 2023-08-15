import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Detaljnije from './Detaljnije'
import Korpa from './Korpa'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Detaljnije' element={<Detaljnije />} />
        <Route path='/kupovina' element={<Korpa />} />
    </Routes>
  )
}

export default Routing