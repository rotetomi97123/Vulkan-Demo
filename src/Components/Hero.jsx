import React, { useEffect, useRef, useState } from 'react'
import {images,smallImages} from './data';
import styled from 'styled-components'
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'

const Hero = () => {
  const [image, setImage] = useState(images);
  const [smallImage, setSmallImage] = useState(smallImages);
  const [mapImg, setMapImg] = useState(images);

  const splideRef = useRef(null); // Create a ref to store the Splide instance.


  useEffect(() => {
    // Function to update state based on screen width
    const updateImagesBasedOnScreenWidth = () => {
      if (window.innerWidth > 800) {
        setMapImg(image)
      } else {
        setMapImg(smallImage)
      }
    };

    // Call the function initially to set the state correctly based on the initial screen width
    updateImagesBasedOnScreenWidth();

    // Event listener for window resize
    const handleResize = () => {
      updateImagesBasedOnScreenWidth();
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [images, smallImages]);
  
  const scrollRight = () => {
    if (splideRef.current) {
      splideRef.current.splide.go('+1'); // Go to the next slide.
    }
  };
  const scrollLeft = () => {
    if (splideRef.current) {
      splideRef.current.splide.go('-1'); // Go to the next slide.
    }
  };
  
  const onMoved = (splide) => {
    const { index, perPage, Components } = splide;

    // Check if the carousel has reached the last slide.
    if (index + perPage === Components.Elements.track.children.length) {
      // Go to the first slide to achieve infinite scrolling.
      splide.go(`0`);
    }
  };
  return (
    <div>
     <Wrapper>
       <Splide
        ref={splideRef}
        options={{
          perPage:1,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
          isLoop: true, 
        }}>
          {mapImg.map((img) => {
            return(
              <SplideSlide  key={img.id}>
                <Card>
                    <img src={img.img} alt='kep' />
                </Card>
              </SplideSlide>
            )
          })};
        </Splide>
                    <ArrowDiv>
                      <ArrowLeft onClick={() => scrollLeft()} />
                      <ArrowRight onClick={() => scrollRight()} />
                    </ArrowDiv>
      </Wrapper>
</div>
  )
}
const ArrowDiv = styled.div`
  opacity:0;
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height: 100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size:4rem;
  padding: 0 15rem;
  pointer-events: none;
  @media (max-width: 1700px) {
    padding: 0 1rem;
  }
  @media (max-width: 700px) {
    font-size: 3rem;
  }

`
const Wrapper = styled.div`
  position:relative;
  padding: 0 15rem;
  &:hover{
    & > ${ArrowDiv} {
      opacity: 1;
      transition:0.4s ease;
    }
  }
  @media (max-width: 1700px) {
    padding: 0 1rem;
  }
  @media (max-width: 700px) {
    padding: 0 0rem;
  }
`

const ArrowLeft = styled(IoIosArrowBack)`
  pointer-events: auto;
  cursor:pointer;
  color:#5A5A5A;
  &:hover{
    color:red;
    transition:0.3s ease;
  }
`
const ArrowRight = styled(IoIosArrowForward)`
  pointer-events: auto;
  cursor:pointer;
  color:#5A5A5A;
  &:hover{
    color:red;
    transition:0.3s ease;
  }
`
const Card = styled.div`
  min-height: 30rem;
  boder-radius: 0rem;
  overflow:hidden;
  position:relative;
  img{
    border-radius: 0rem;
    position: absolute;
    left:0;
    width:100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Hero