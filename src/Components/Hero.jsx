import React, { useState } from 'react'
import images from './data';
import styled from 'styled-components'
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const Hero = () => {
    const [image, setImage] = useState(images);
  return (
    <div>
     <Wrapper>
       <Splide options={{
        perPage:1,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '5rem',
        isLoop: true, 
       }}>
          {image.map((img) => {
            return(
              <SplideSlide  key={img.id}>
                <Card>
                    <img src={img.img} alt='kep' />
                </Card>
              </SplideSlide>
            )
          })};
        </Splide>
      </Wrapper>
</div>
  )
}
const Wrapper = styled.div`
    padding: 0 15rem;
    @media (max-width: 1700px) {
        padding: 0 1rem;
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