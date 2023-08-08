import React from 'react'
import styled from 'styled-components'
import {BsFillCartFill} from 'react-icons/bs'

const BrziPregled = ({ book, onClose }) => {

    const handleChildClick = (event) => {
        event.stopPropagation(); // Prevent event from reaching the parent wrapper
      };

  return (
    <Wrapper onClick={onClose}>
        <Box onClick={handleChildClick}>
            <ImgDiv>
                <img src={book.img} alt={book.name} />
                <Circle>
                        <p>{book.popust}%</p>
                </Circle>
                {book.booktok &&<BookTok>Book{<br />}Tok</BookTok>}
            </ImgDiv>
            <ContentDiv>
                <h2>{book.name}</h2>
                <MarginDiv>
                    <h4>{book.type}</h4>
                    <h4>Šifra artikla: 335206</h4>
                    <h4>Isbn: 9781405391245</h4>
                </MarginDiv>
                <MarginDiv>
                    <p>AUTOR: <span>{book.autor}</span></p>
                    <p>IZDAVAC: <span>{book.izdavac}</span></p>
                </MarginDiv>
                    <Line />
                    <h3>{book.realPrice}RSD</h3>
                    <Cena>Cena na sajtu: ${book.price} RSD</Cena>
                    <p>Ušteda: {((book.realPrice - book.price) > 0 ? (book.realPrice - book.price).toFixed(2) : 0)} RSD</p>
                <Btn onClick={onClose}>X</Btn>
                <Flex>
                    <PriceDiv>
                        <Button>-</Button>
                        <County>1</County>
                        <Button>+</Button>
                    </PriceDiv>
                    <Dodaj>DODAJ U KORPU<BsFillCartFill style={{marginLeft:'0.5rem'}} size={20}/></Dodaj>
                </Flex>
                    <Detaljnije>DETALJNIJE</Detaljnije>
            </ContentDiv>
        </Box>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width:100%;
    height:100%;
    background: #09090999;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:100;
`
const Flex = styled.div`
    display:flex;
    width:100%;
    justify-content: flex-start;
    align-items:center;
    margin-top: 2.5rem;
`
const Detaljnije = styled.button`
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
`
const Button = styled.button`
    border:none;
    font-size: 1.5rem;
    cursor:pointer;
    margin: 0 0.5rem;
   
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
    width: 48%;
    height:60%;
    background: white;
    display:flex;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Add shadow effect */
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
   right: 4rem;
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
const Btn = styled.button`
    position:absolute;
    top:1rem;
    right:2rem;
    background:none;
    border:none;
    font-size:1.2rem;
    font-weight: 600;
    cursor:pointer;
`
export default BrziPregled