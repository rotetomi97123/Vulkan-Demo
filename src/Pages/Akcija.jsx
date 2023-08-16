import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import Books from '../Components/Books'
import { do40,Popularna} from '../Components/data'


const Akcija = () => {

  const [do40popust, setDo40popust] = useState(do40)
  const [popularnaBook,setPopularnaBook] = useState(Popularna)

  return (
    <div>
      <Navbar />
      <Wrapper>
        <img src='https://i.ibb.co/w6JqH55/cold-smooth-tasty.png' />
      </Wrapper>
      <Books title='300 DO 40%' books={do40popust}/>
      <Books title='50% POPUSTA - POPULARNA PSIHOLOGIJA, YA, LJUBAVNI ROMANI' books={popularnaBook}/>

      <Newsletter />
      <Footer />
    </div>
  )
}

const Wrapper = styled.div`
  position:relative;
  padding: 0 15rem;
  @media (max-width: 1700px) {
    padding: 0 1rem;
  }
  @media (max-width: 700px) {
    padding: 0 0rem;
  }
`

export default Akcija