import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import BrziPregled from '../Pages/BrziPregled'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../Actions'

const Books = ({ title, books }) => {

    const [perPageOption, setPerPageOption] = useState(6);
  
    const [selectedBook, setSelectedBook] = useState(null);
    const dispatch = useDispatch();

  
    const openModal = (book) => {
      setSelectedBook(book);
    };
  
    const closeModal = () => {
      setSelectedBook(null);
    };

    useEffect(() => {
        const handleResize = () => {
          const windowWidth = window.innerWidth;
          // Update the perPageOption based on the window width
          if (windowWidth < 700) {
            setPerPageOption(2);
          } else if (windowWidth < 1000) {
            setPerPageOption(3);
          } else {
            setPerPageOption(6);
          }
        };
    
        // Call handleResize initially
        handleResize();
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
  return (
    <div>
     <Wrapper>
        <TitleDiv>
            <h1>{title}</h1>
            <p>Pogledajte sve</p>
        </TitleDiv>

       <Splide
        options={{
          perPage: perPageOption,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
          isLoop: true, 
        }}>
          {books.map((book) => {
            return(
              <SplideSlide  key={book.id}>
                <Card>
                    <img src={book.img} alt='kep' />
                    <Circle>
                        <p>{book.popust}%</p>
                    </Circle>
                    {book.booktok &&<BookTok>Book{<br />}Tok</BookTok>}
                    <HoverDiv>
                      <Link to="/Detaljnije" state={{ book: {book} }}><Btn>DETALJNIJE</Btn></Link>
                      <Btn  onClick={() => openModal(book)}>BRZI PREGLED</Btn>
                      <Dodaj onClick={() => dispatch((addItemToCart(book)))} ><AiOutlineShoppingCart/></Dodaj>
                    </HoverDiv>
                </Card>
                <NameDiv>
                    <p>{book.name}</p>
                    <h2>{book.price} RSD</h2>
                    <h3>{book.realPrice}RSD</h3>
                </NameDiv>
              </SplideSlide>
            )
          })}
        </Splide>
          {selectedBook && (
          <BrziPregled book={selectedBook} onClose={closeModal} />
        )}
      </Wrapper>
</div>
  )
}
const Wrapper = styled.div`
  position:relative;
  padding: 0 15rem;
  @media (max-width: 1700px) {
    padding: 0 1rem;
  }
  padding-bottom: 3rem;
`
const Dodaj = styled.button`
  color:white;
  cursor:pointer;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  border:none;
  font-size: 1.5rem;
  background:black;
  border-radius:50%;
  &:hover{
    background:red;
    transition:0.3s ease;
  }
`
const HoverDiv = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity:0;
  backdrop-filter: blur(2px)
`
const Btn = styled.button`
  width: 110px;
  border:none;
  background: black;
  color:white;
  padding: 0.5rem 0.5rem;
  font-size:0.8rem;
  margin: 0.5rem 0;
  cursor:pointer;
  &:hover{
    background: red;
    transition:0.3s ease;
  }
`
const BookTok = styled.div`
  background:#D70040;
  position:absolute;
  top:0rem;
  left:-1rem;
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
const NameDiv = styled.div`
  p{
    font-size: 0.8rem;
    text-align:center;
  }
  h2{
    font-size: 1rem;
    color:red;
    text-align:center;
    margin-top:1rem;
  }
  h3{
    font-size:1rem;
    color:grey;
    text-align:center;
    text-decoration: line-through;
    font-weight:400;
  }
  `
const Circle = styled.div`
   width: 50px;
   height:50px;
   border-radius: 50%;
   position: absolute;
   right: -1rem;
   top: -1rem;
   background:	#FF0000;
   display:flex;
   justify-content:center;
   align-items:center;
   color:white;
   z-index:50;

`
const TitleDiv = styled.div`
  width: 100%;
  height: 10vh;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items:center;
  h1{
    font-size: 1.5rem;
    font-weight: 400;
  }
  p{
    font-size: 0.9rem;
    cursor:pointer;
    &:hover{
      text-decoration:underline;
      transition:0.3s ease;
    }
  }
`
const Card = styled.div`
  height: 15rem;
  boder-radius: 0rem;
  position:relative;
  margin-top: 2rem;
  cursor:pointer;
  margin-bottom: 1rem;
  &:hover{
    & > ${HoverDiv} {
      opacity: 1;
      transition:0.3s ease;
    }
  }
  img{
    border-radius: 0rem;
    position: absolute;
    left:0;
    width:100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default Books