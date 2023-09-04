import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Detaljnije from './Detaljnije'
import Korpa from './Korpa'
import Akcija from './Akcija'
import AllBooks from './AllBooks'
import NovaIzdanja from './NovaIzdanja'
import BookTok from './BookTok'
import HarryPotter from './HarryPotter'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Detaljnije' element={<Detaljnije />} />
        <Route path='/kupovina' element={<Korpa />} />
        <Route path='/Akcija' element={<Akcija />} />
        <Route path='/Allbooks' element={<AllBooks />} />
        <Route path='/NovaIzdanja' element={<NovaIzdanja />} />
        <Route path='/BookTok' element={<BookTok />} />
        <Route path='/HarryPotter' element={<HarryPotter />} />
    </Routes>
  )
}

export default Routing