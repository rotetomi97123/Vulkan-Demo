import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Newsletter from '../Components/Newsletter'
import { BookTokImg } from '../Components/data'
import { NovaIzdaImg,NovoIzdBooks,Popularna,TopEng,TiktokHit1,TiktokHit2 } from '../Components/data'
import Colleen from '../Components/Colleen'
import Books from '../Components/Books'

const BookTok = () => {

    const [BookTok,setBookTok] = useState(BookTokImg)

    const [BookTok1Books, setBookTok1Books] = useState(TiktokHit1)
    const [BookTok2Books, setBookTok2Books] = useState(TiktokHit2)
    const [TopEngBooks, setTopEngBooks] = useState(TopEng)
  return (
    <div>
        <Navbar />
        <Colleen img={BookTok} />
        <Books title='TIKTOK HITOVI' books={BookTok1Books}/>
        <Books title='POPULAR ON TIKTOK' books={BookTok2Books}/>
        <Books title='POPULAR - ENGLISH BOOKS' books={TopEngBooks}/>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default BookTok