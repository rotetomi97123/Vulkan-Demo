import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import {BsFillCartFill} from 'react-icons/bs'
import { useLocation } from 'react-router-dom';

const Detaljnije = () => {
  const location = useLocation();
  const { book } = location.state;

  return (
    <div>
        <Navbar />
        <Wrapper>

            <Box>
                <ImgDiv>
                    <img src={book.book.img} alt={book.name} />
                    <Circle>
                            <p>{book.book.popust}%</p>
                    </Circle>
                    {book.book.booktok &&<BookTok>Book{<br />}Tok</BookTok>}
                </ImgDiv>
                <ContentDiv>
                    <h2>{book.book.name}</h2>
                    <MarginDiv>
                        <h4>{book.book.type}</h4>
                        <h4>Šifra artikla: 335206</h4>
                        <h4>Isbn: 9781405391245</h4>
                    </MarginDiv>
                    <MarginDiv>
                        <p>AUTOR: <span>{book.book.autor}</span></p>
                        <p>IZDAVAC: <span>{book.book.izdavac}</span></p>
                    </MarginDiv>
                    <MarginDiv>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eum nam suscipit sint nulla, quis, aliquam dicta a temporibus minus ex! Neque magni animi a molestiae sint consectetur ratione repellat.
                    </MarginDiv>
                        <Line />
                        <h3>{book.book.realPrice}RSD</h3>
                        <Cena>Cena na sajtu: {book.book.price} RSD</Cena>
                        <p>Ušteda: {((book.book.realPrice - book.book.price))} RSD</p>
                    <Flex>
                        <PriceDiv>
                            <Button>-</Button>
                            <County>1</County>
                            <Button>+</Button>
                        </PriceDiv>
                        <Dodaj>DODAJ U KORPU<BsFillCartFill style={{marginLeft:'0.5rem'}} size={20}/></Dodaj>
                    </Flex>
                        <DetaljnijeBtn>DETALJNIJE</DetaljnijeBtn>
                </ContentDiv>
            </Box>
        </Wrapper>
        <Newsletter />
        <Footer />
    </div>
  )
}
const Wrapper = styled.div`
    width:100%;
    height: 80vh;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Flex = styled.div`
    display:flex;
    width:100%;
    justify-content: flex-start;
    align-items:center;
    margin-top: 2.5rem;
`
const DetaljnijeBtn = styled.button`
    width: 150px;
    height: 30px;
    font-size: 0.9rem;
    color:white;
    background: black;
    cursor:pointer;
    border: none;
    margin-top: 1.5rem;
    &:hover{
        background: red;
        transition: 0.3s ease;
    }
`
const Dodaj = styled.button`
    width: 250px;
    height: 35px;
    border: none;
    background: #66CC00;
    color: white;
    font-size: 1rem;
    margin-left:1rem;
    display:flex;
    justify-content:center;
    align-items: center;
    cursor:pointer;
    &:hover{
        opacity:80%;
        transition: 0.3s ease;
    }
`
const PriceDiv = styled.div`
    display:flex;
    border:1px solid #b0b0b0;
    width:85px;
    justify-content:center;
    align-items:center;
    font-size: 1.2rem;
    background: none;
`
const Button = styled.button`
    border:none;
    font-size: 1.5rem;
    cursor:pointer;
    margin: 0 0.5rem;
    background: none;
   
`
const County = styled.div`
    border:none;
    font-size: 1.2rem;
    border-left:1px solid #b0b0b0;
    border-right:1px solid #b0b0b0;
    padding: 0 0.5rem;
`
const Line = styled.div`
    width:100%;
    height: 1px;
    background: darkgrey;
`
const MarginDiv = styled.div`
    margin-bottom: 1rem;
`
const Box = styled.div`
    position:relative;
    width: 60%;
    height:75%;
    background: white;
    display:flex;
`   
const ImgDiv = styled.div`
    position:relative;
    width:50%;
    height:100%;
    display:flex;
    padding-left: 5rem;
    padding-bottom: 6rem;
    padding-top: 1.5rem;
    img{
        object-fit:cover;
    }
`
const ContentDiv = styled.div`
    width:50%;
    height:100%;
    padding-right:2rem;
    h2{
        margin: 1rem 0; 
    }
    p{
        font-size:1rem;
    }
    span{
        color:red;
    }
    h4{
        font-weight:100;
        color:grey;
    }
    h3{
        font-size:0.9rem;
        color:grey;
        text-decoration: line-through;
        font-weight:400;
        margin-top:1rem;
      }
    `
const Cena = styled.h5`
      color: red;
      font-size: 1.1rem;
      font-weight:400;
      margin-bottom: 0.1rem;
`
const Circle = styled.div`
   width: 50px;
   height:50px;
   border-radius: 50%;
   position: absolute;
   left: 22rem;
   top: 0.5rem;
   background:	#FF0000;
   display:flex;
   justify-content:center;
   align-items:center;
   color:white;
   z-index:50;

`
const BookTok = styled.div`
  background:#D70040;
  position:absolute;
  top:1rem;
  left:4rem;
  color:white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0 0.4rem;
  border-top-left-radius:1rem;
  border-bottom-right-radius:1rem;
  border: 2px solid #00FFFF;
  text-align:center;
  z-index:50;
`

export default Detaljnije