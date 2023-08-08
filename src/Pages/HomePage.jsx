import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Books from '../Components/Books'
import Colleen from '../Components/Colleen'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import BrziPregled from './BrziPregled'
import {Novo,Top,TopEng,Hoover,Manga,Stephen} from '../Components/data'
import styled from 'styled-components'

const HomePage = () => {
  const [book, setBook] = useState(Novo)
  const [TopBooks, setTopBooks] = useState(Top)
  const [TopEn, setTopEng] = useState(TopEng)
  const [King,setKing] = useState(Stephen)

  const [ColImg, setColImg] = useState(Hoover)
  const [manges, setManges] = useState(Manga)
  

  return (
    <Wrapper>
        <Navbar />
        <Hero />
        <Books title='NOVO I AKTUELNO' books={book}/>
        <Books title='TOP LISTA - KNJIGE' books={TopBooks}/>
        <Colleen img={ColImg} />
        <Books title='TOP LISTA - ENGLISH BOOKS' books={TopEn}/>
        <Colleen img={manges} />
        <Books title='STEPHEN KING BOOKS' books={King}/>
        <Newsletter />
        <Footer />
    </Wrapper>
  )
}
const Wrapper = styled.div`
`


export default HomePage