import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import {Novo} from './data'

const Books = () => {

    const [book, setBook] = useState(Novo)
    const [perPageOption, setPerPageOption] = useState(6);
  
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
            <h1>NOVO I AKTUELNO</h1>
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
          {book.map((img) => {
            return(
              <SplideSlide  key={img.id}>
                <Card>
                    <img src={img.img} alt='kep' />
                    <Circle>
                        <p>{img.popust}%</p>
                    </Circle>
                </Card>
                <NameDiv>
                    <p>{img.name}</p>
                    <h2>{img.price} RSD</h2>
                    <h3>{img.realPrice}RSD</h3>
                </NameDiv>
              </SplideSlide>
            )
          })};
        </Splide>
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
  margin-bottom: 3rem;
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
   background:red;
   display:flex;
   justify-content:center;
   align-items:center;
   color:white;
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
  }
`
const Card = styled.div`
  height: 15rem;
  boder-radius: 0rem;
  position:relative;
  margin-top: 2rem;
  cursor:pointer;
  
  &:hover{
    opacity: 70%;
    transition: 0.3s ease;
  }
  img{
    border-radius: 0rem;
    position: absolute;
    left:0;
    width:90%;
    height: 90%;
    object-fit: cover;
  }
`;
export default Books