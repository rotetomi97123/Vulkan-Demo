import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Newsletter from '../Components/Newsletter'
import styled from 'styled-components'
import Colleen from '../Components/Colleen'
import { NovaIzdaImg,NovoIzdBooks,Popularna,TopEng } from '../Components/data'
import Books from '../Components/Books'

const NovaIzdanja = () => {

    const [NovoImg , setNovoImg] = useState(NovaIzdaImg)

    const [NovoBooks, setNovoBooks] = useState(NovoIzdBooks)
    const [PopularBooks, setPopularBooks] = useState(Popularna)
    const [TopEngBooks, setTopEngBooks] = useState(TopEng)


  return (
    <div>
        <Navbar />
        <Colleen img={NovoImg} />
        <Books title='NOVA IZDAVANJA' books={NovoBooks}/>
        <Books title='POPULAR BOOKS' books={PopularBooks}/>
        <Books title='POPULAR - ENGLISH BOOKS' books={TopEngBooks}/>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default NovaIzdanja