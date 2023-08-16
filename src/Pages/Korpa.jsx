import React from 'react'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import VasaKorpa from '../Components/VasaKorpa'
import Isporuke from '../Components/Isporuke'
import Dostava from '../Components/Dostava'
import Ukupno from '../Components/Ukupno'

const Korpa = () => {
  return (
    <div>
      <Navbar />
      <VasaKorpa />
      <Isporuke />
      <Dostava />
      <Ukupno />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Korpa