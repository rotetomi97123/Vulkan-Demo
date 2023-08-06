import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Books from '../Components/Books'
import Colleen from '../Components/Colleen'
import {Novo,Top} from '../Components/data'

const HomePage = () => {
  const [book, setBook] = useState(Novo)
  const [TopBooks, setTopBooks] = useState(Top)
  return (
    <div>
        <Navbar />
        <Hero />
        <Books title='NOVO I AKTUELNO' books={book}/>
        <Books title='TOP LISTA - KNJIGE' books={TopBooks}/>
        <Colleen />
        <Books title='TOP LISTA - KNJIGE' books={TopBooks}/>
    </div>
  )
}


export default HomePage