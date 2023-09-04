import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Newsletter from '../Components/Newsletter'
import { BookTokImg } from '../Components/data'
import {TiktokHit2,HarryPotterImg,HarryPotterItems1,HarryPotterItems2,HarryPotterItems3 } from '../Components/data'
import Colleen from '../Components/Colleen'
import Books from '../Components/Books'

const HarryPotter = () => {

    const [PotterImg,setPotterImg] = useState(HarryPotterImg)

    const [PotterItems1, setPotterItems1] = useState(HarryPotterItems1)
    const [PotterItems2, setPotterItems2] = useState(HarryPotterItems2)
    const [PotterItems3, setPotterItems3] = useState(HarryPotterItems3)

 

  return (
    <div>
        <Navbar />
        <Colleen img={PotterImg} />
        <Books title='HARRY POTTER - PRIBOR ' books={PotterItems1}/>
        <Books title='HARRY POTTER - SETS' books={PotterItems2}/>
        <Books title='HARRY POTTER - PRIBOR' books={PotterItems3}/>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default HarryPotter