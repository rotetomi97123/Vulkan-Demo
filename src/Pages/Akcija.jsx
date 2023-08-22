import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import Books from '../Components/Books'
import { do40,Popularna,Za500,AkcijaImage,Aleksandro} from '../Components/data'
import Colleen from '../Components/Colleen'

const Akcija = () => {

  const [do40popust, setDo40popust] = useState(do40)
  const [popularnaBook,setPopularnaBook] = useState(Popularna)
  const [za500book, setZa500book] = useState(Za500)

  const [akcijaImg, setAkcijaImg] = useState(AkcijaImage)
  const [Aleksand,setAleksand] = useState(Aleksandro)

  return (
    <div>
      <Navbar />
      <Wrapper>
        <Colleen img={akcijaImg} />
      </Wrapper>
      <Books title='300 DO 40%' books={do40popust}/>
      <Books title='50% POPUSTA - POPULARNA PSIHOLOGIJA, YA, LJUBAVNI ROMANI' books={popularnaBook}/>
      <Colleen img={Aleksand} />
      <Books title='KNJIGE ZA 499 DINARA' books={za500book}/>
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