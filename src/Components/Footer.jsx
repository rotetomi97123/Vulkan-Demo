import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {BsFillTelephoneFill,} from 'react-icons/bs'
import {FaMapMarkerAlt,FaTiktok,FaArrowUp} from 'react-icons/fa'
import {GrMail,GrFacebookOption,GrTwitter} from 'react-icons/gr'
import {AiFillInstagram} from 'react-icons/ai'
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io'
import { bankImages } from './data'

const Footer = () => {
    const [images,setImages] = useState(bankImages)
    const bottomDivRef = useRef(null);
    const [isActive, setIsActive] = useState(false)
    const [isReal, setIsReal] = useState(false)

    const [isShowen, setIsShowen] = useState(true)

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Optional: Add smooth scrolling animation
      });
    };
  
    useEffect(() => {
        // Function to update state based on screen width
        const updateImagesBasedOnScreenWidth = () => {
          if (window.innerWidth < 750) {
            setIsReal(true)
            setIsShowen(false)
          } else {
            setIsReal(false)
            setIsShowen(true)
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
      }, []);

  return (
    <Wrapper>
        <TopDiv>
            <Box>
                <h2>KNJIŽARE VULKAN D.O.O {isReal && (isActive ?<UpArrow onClick={()=>(setIsActive(false),setIsShowen(false))} /> : <DownArrow  onClick={()=>(setIsActive(true),setIsShowen(true))}/>)}</h2>
                {isShowen &&<span>
                    <p><BsFillTelephoneFill color='grey' size={15} style={{marginRight:'0.5rem'}} />011 4540900 (pon-subota 9 do 16h)</p>
                    <p><FaMapMarkerAlt color='grey' size={15} style={{marginRight:'0.5rem'}} />Sremska 2 11000 Beograd</p>
                    <p><GrMail color='grey' size={15} style={{marginRight:'0.5rem'}} />info@knjizare-vulkan.rs</p>
                    <p>Račun: Banka intesa 155-333123-04</p>
                    <p>Šifra delatnosti: 45123</p>
                    <p>PIB: 111144556</p>
                    <p>Matični broj: 2511667</p>
                </span>}
            </Box>
            <Box>
                <h2>INFORMACIOJE{isReal && (isActive ?<UpArrow onClick={()=>(setIsActive(false),setIsShowen(false))} /> : <DownArrow  onClick={()=>(setIsActive(true),setIsShowen(true))}/>)}</h2>
                {isShowen &&<span>
                    <p>NOVOSTI</p>
                    <p>NAŠE KNJIŽARE</p>
                    <p>O nama</p>
                    <p>Najčešća pitanja</p>
                    <p>Vulkan klub</p>
                    <p>POSAO</p>
                </span>}
            </Box>
            <Box>
                <h2>KORISNIČKI SERVIS{isReal && (isActive ?<UpArrow onClick={()=>(setIsActive(false),setIsShowen(true))} /> : <DownArrow  onClick={()=>(setIsActive(true),setIsShowen(false))}/>)}</h2>
                {isShowen &&<span>
                    <p>Uslovi korišćenja</p>
                    <p>Izjava o privatnosti i sigurnosti podataka</p>
                    <p>Načini plaćanja</p>
                    <p>Reklamacije</p>
                    <p>Kako kupiti</p>
                    <p>Pravo na odustajanje</p>
                    <p>Autorska prava</p>
                    <p>Šta dobijam registracijom?</p>
                </span>}
            </Box>
            <Box2>
                <FaceBook/>
                <Twitter />
                <Tiktok />
                <Instagram />
            </Box2>
        </TopDiv>
        <BottomDiv>
            <Images>
                {images.map((image)=> {
                    return(
                        <div key={image.id}>
                            <img src={image.img} alt='image' />
                        </div>
                    )
                })}
            </Images>
            <p>Nastojimo da budemo što precizniji u opisu proizvoda, prikazu slika i samih cena, ali ne možemo garantovati da su sve informacije kompletne i bez grešaka. Svi artikli prikazani na sajtu su deo naše ponude i ne podrazumeva da su dostupni u svakom trenutku. </p>
            <p>©2023 <span>www.knjizare-vulkan.rs</span>, Izrada <span>NB SOFT</span>. Sva prava zadržana.</p>
        </BottomDiv>
        <ArrowDiv ref={bottomDivRef} onClick={scrollToTop}><FaArrowUp size={20}  /></ArrowDiv>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width:100%;
    height:50vh;
    padding: 0 15rem;
    display:flex;
    flex-direction:column;
    @media (max-width: 1700px) {
      padding: 0 1rem;
    }
    @media (max-width: 750px) {
        height:100%;
      }
    @media (max-width: 700px) {
      padding: 0 0rem;
    }
`
const DownArrow  = styled(IoIosArrowDown)`
    cursor:pointer;
    margin-left:1rem;
`
const UpArrow  = styled(IoIosArrowUp)`
    cursor:pointer;
    margin-left:1rem;

`
const TopDiv = styled.div`
    width:100%;
    height:70%;
    display:flex;
    @media (max-width: 750px) {
        flex-direction:column;
        justify-content:center;
        align-items:center;
      }
`
const Box = styled.div`
    width:25%;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    padding-left:1.5rem;
    span{
       
    }
    h2{
        font-size:1rem;
        margin-bottom:1rem;
    }
    p{
        font-size:0.9rem;
        margin-bottom:0.5rem;
        cursor:pointer;
        &:hover{
            transition: 0.3s ease;
        }
    }
    @media (max-width: 750px) {
        width:100%;
        justify-content:center;
        align-items:center;
        margin-bottom: 1rem;
      }
  
`
const Images = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    img{
        width: 60px;
        margin-right:1rem;
    }
`
const Box2 = styled.div`
    width:25%;
    height:100%;
    display:flex;
    font-size: 2rem;
    justify-content:center;
    @media (max-width: 750px) {
        width:100%;
        justify-content:center;
        align-items:center;
        margin-bottom: 1rem;
      }
`
const BottomDiv = styled.div`
    width:100%;
    height:30%;
    p{
        font-size: 0.9rem;
        text-align:center;
        margin-top: 0.5rem;
    }
    span{
        font-weight: bold;
    }
    @media (max-width: 750px) {
        p{
            font-size:0.8rem;
        }
        margin-bottom:1rem;
      }
`
const FaceBook = styled(GrFacebookOption)`
    margin-right: 1rem;
    &:hover{
        cursor:pointer;
        opacity: 70%;
        transition:0.3s ease;
    }
`
const Twitter = styled(GrTwitter)`
    margin-right: 1rem;
    &:hover{
        cursor:pointer;
        opacity: 70%;
        transition:0.3s ease;
    }
`
const Tiktok = styled(FaTiktok)`
    margin-right: 1rem;
    &:hover{
        cursor:pointer;
        opacity: 70%;
        transition:0.3s ease;
    }
`
const Instagram = styled(AiFillInstagram)`
    margin-right: 1rem;
    &:hover{
        cursor:pointer;
        opacity: 70%;
        transition:0.3s ease;
    }
`
const ArrowDiv = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 5rem;
    width: 40px;
    height: 40px;
    background: red;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:0.5rem;
    cursor:pointer;
    &:hover{
        background:black;
        transition:0.3s ease;
    }
    @media (max-width: 500px) {
        right: 2rem;
        width: 30px;
        height: 30px;
    }
`
export default Footer
