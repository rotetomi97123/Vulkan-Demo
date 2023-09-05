import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Newsletter from '../Components/Newsletter'
import { BookTokImg } from '../Components/data'
import {EnglishBooksImg ,FlaseImg,HarryPotterItems1,GiftItems1,GiftItems2} from '../Components/data'
import Colleen from '../Components/Colleen'
import Books from '../Components/Books'

const Gift = () => {

    
    const [FlasImg,setFlasImg] = useState(FlaseImg)

    const [GiftsItems1, setGiftsItems1] = useState(GiftItems1)
    const [GiftsItems2, setGiftsItems2] = useState(GiftItems2)
    const [GiftsItems3, setGiftsItems3] = useState(HarryPotterItems1)
  return (
    <div>
        <Navbar />
        <Colleen img={FlasImg} />
        <Books title='GIFT - NOVO' books={GiftsItems1}/>
        <Books title='KUĆNA DEKORACIJA' books={GiftsItems2}/>
        <Books title='GIFTS - NOTESI' books={GiftsItems3}/>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Gift