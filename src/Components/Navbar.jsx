import React, { useState } from 'react'
import styled from 'styled-components'
import {BiLogIn,BiSearchAlt2} from 'react-icons/Bi'
import {AiOutlineHeart,AiOutlineQuestionCircle} from 'react-icons/ai'
import {BsFillCartFill,BsHouseFill} from 'react-icons/bs'
import {MdDiscount} from 'react-icons/md'
import {TbDiscount} from 'react-icons/tb'

const Navbar = () => {
    const [kategorije, setKategorije] = useState(false);
  return (
    <Nav>
        <TopNav>
            <div></div>
            <NavTitle>BESPLATNA DOSTAVA Za porudžbine preko 3000 dinara</NavTitle>
            <InfoDiv>
                    <span>
                        <BiLogIn size={22} />
                        <Prijav>Prijavite se</Prijav>
                    </span>
                    <p>Registrujte se</p>
                    <Heart>
                        <AiOutlineHeart size={20} />
                        <p>0</p>
                    </Heart>
                    <Cart>
                        <BsFillCartFill size={22} />
                        <p>0</p>
                    </Cart>
                        <Discount  />
            </InfoDiv>
        </TopNav>
        <BottomNav>
            <BoxImg>
                <img src='https://www.knjizare-vulkan.rs/files/images/vulkan/logo.png.webp' />
            </BoxImg>
            <Box>
                <TbDiscount size={42}/>
                <span>
                    <p>Količinski popust</p>
                    <h6>Dodatnih 10% na tri kupljena artikla</h6>
                </span>
            </Box>
            <Box>
                <AiOutlineQuestionCircle size={42}/>
                <span>
                    <p>Pomoć i najčešća pitanja</p>
                    <h6>Kontaktirajte nas</h6>
                </span>
            </Box>
        </BottomNav>
        <RealNav>
            <BsHouseFill size={30} color='gray' />
            <p onMouseEnter={()=>{setKategorije(true)}} >KATEGORIJE</p>
            <p>AKCIJE</p>
            <p>NOVA IZDANJA</p>
            <p>#BOOKTOK</p>
            <p>HARRY POTTER</p>
            <p>USKORO</p>
            <SearchContainer>
                <SearchInput type="text" placeholder="Pretraži sajt" />
                <SearchButton type="button"><BiSearchAlt2 size={25}/></SearchButton>
            </SearchContainer>
            {kategorije &&<Kategorije onMouseLeave={()=>{setKategorije(false)}}>
                <p>KJNIGE</p>
                <p>ZA DECU</p>
                <p>ENGLISH BOOKS</p>
                <p>GIFT</p>
                <p>PARTY PROGRAM</p>
                <p>POGLEDAJ SVE</p>
            </Kategorije>}
        </RealNav>
        
    </Nav>
  )
}
const Nav = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    `
const RealNav = styled.div`
    position: relative;
    width: 100%;
    height:4vh;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    padding: 0 15rem;
    border-top: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
    p{
        margin: 0 2rem;
        color: grey;
        cursor:pointer;
        &:hover{
            color:black;
            transition:0.1s ease;
        }
    }
    @media (max-width: 1600px) {
        padding: 0 5rem;
    }
`
const Kategorije = styled.div`
    width: 200px;
    height: 260px;
    border: 1px solid #cccccc;
    background: #F2F2F2;
    position: absolute;
    top: 2.2rem;;
    transition: 0.1s ease;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:flex-start;
    p{
        font-size: 1rem;
        margin-bottom:1rem;
    }
    
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 6rem;
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  background: #F2F2F2;
  border:1px solid #CCCCCC;
  color: black;
  width: 300px;
`;

const SearchButton = styled.button`
  background-color: red;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 6px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

const TopNav = styled.div`
    height: 4vh;
    width:100%;
    background: black;
    color:white;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    position:relative;
    padding: 0 15rem;
    p{
        font-size: 0.9rem;
        cursor:pointer;
    }
    @media (max-width: 1600px) {
        padding: 0 5rem;
    }
`
const Prijav = styled.p`
    margin-right: 2rem;
    margin-left: 0.5rem;
    &:hover{
        text-decoration: underline; 
    }
`
const NavTitle = styled.p`
    font-size: 0.9rem;
    cursor:pointer;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 1300px) {
        display:none;
    }
    `
    const InfoDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    p{
        &:hover{
            text-decoration: underline; 
        }
    }
    span{
        font-size: 0.9rem;
        display: flex;
        justify-content:center;
        align-items:center;
    }
    @media (max-width: 550px){
        display:none;
    }
    `
    const Heart = styled.div`
    display:flex;
    margin-left:2rem;
    cursor:pointer;
    p{
        margin-left: 0.2rem;
    }
    `
    const Cart = styled.div`
    z-index: 10;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left:2rem;
    cursor:pointer;
    width: 50px;
    height: 4vh;
    p{
        margin-left: 0.2rem;
        z-index: 10;
        font-size: 1.2rem;
    }
    `
    const Discount = styled(MdDiscount)`
        color: red;
        position: absolute;
        right: 14rem;
        top: -1.1rem;
        font-size:5.1rem;
        z-index:0;
        @media (max-width: 1600px) {
            right: 4rem;
        }
    `
    const BottomNav = styled.div`
        padding: 0 15rem;
        display:flex;
        justify-content:center;
        align-items:center;
        height: 10vh;
        @media (max-width: 1600px) {
            padding: 0 5rem;
        }
        @media (max-width: 1300px) {
            padding: 0 0.5rem;
        }
        @media (max-width: 750px){
            display:none;
        }
    `
    const BoxImg = styled.div`
        width:33%;
    `
    const Box = styled.div`
        width: 33%;
        display:flex;
        border-left: 1px solid darkgrey;
        padding-left: 2rem;
        h6{
            color:red;
            font-size: 0.9rem;
        }
        span{
            margin-left: 1rem;
        }
    `
    export default Navbar