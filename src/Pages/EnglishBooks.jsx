import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Newsletter from '../Components/Newsletter'
import { BookTokImg } from '../Components/data'
import {EnglishBooksImg ,HarryPotterItems1,HarryPotterItems2,HarryPotterItems3,TopEng,TiktokHit1,TiktokHit2} from '../Components/data'
import Colleen from '../Components/Colleen'
import Books from '../Components/Books'

const EnglishBooks = () => {

    const [EnglishImg,setEnglishImg] = useState(EnglishBooksImg)

    const [EnglishItems1, setEnglishItems1] = useState(TopEng)
    const [EnglishItems2, setEnglishItems2] = useState(TiktokHit2)
    const [EnglishItems3, setEnglishItems3] = useState(TiktokHit1)

 

  return (
    <div>
        <Navbar />
        <Colleen img={EnglishImg} />
        <Books title='POPULAR ENGLISH - BOOKS ' books={EnglishItems1}/>
        <Books title='TRENDING' books={EnglishItems2}/>
        <Books title='TRENDING ON TIKTOK' books={EnglishItems3}/>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default EnglishBooks