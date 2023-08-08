import React, { useEffect, useState } from 'react'
import { Hoover } from './data'
import styled from 'styled-components'

const Colleen = ({ img  }) => {
    const [image, setImage] = useState(img)
    const [count,setCount] = useState(0)

    useEffect(() => {
        // Function to update state based on screen width
        const updateImagesBasedOnScreenWidth = () => {
          if (window.innerWidth > 1200) {
            setCount(0)
          } else {
            setCount(1)
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
      }, [image]);
  return (
    <Wrapper>
        <img src={image[count].img} alt='kep' />
    </Wrapper>
  )
}
const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding: 0 15rem;
    margin-bottom:3rem;
    @media (max-width: 1700px) {
        padding: 0 1rem;
    }
    @media (max-width: 550px){
      img{
        width: 100%;
      }
    }
`
export default Colleen