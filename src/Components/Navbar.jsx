import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {BiLogIn,BiSearchAlt2,BiMenu} from 'react-icons/Bi'
import {AiOutlineHeart,AiOutlineQuestionCircle,AiOutlineShoppingCart} from 'react-icons/ai'
import {BsFillCartFill,BsHouseFill} from 'react-icons/bs'
import {MdDiscount} from 'react-icons/md'
import {TbDiscount} from 'react-icons/tb'
import {GrNext} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addItemToCart , clearFavouriteCart} from '../Actions'

const Navbar = () => {

    const dispatch = useDispatch();
    const [favouriteShow, setFavouriteShow] = useState(false)

    const [kategorije, setKategorije] = useState(false);
    const [isMouseOver,setMouseOver] = useState(false);

    const [isWindowBelow750, setWindowBelow750] = useState(false);
    const [mobileMenu,setMobileMenu] = useState(false);
    const [mobileKateg,setMobileKateg] = useState(false)

    const cartItems = useSelector(state => state.cart.cartItems)
    const favourites = useSelector(state => state.favourite.favouriteItems);
    //
    const [tooltipVisible, setTooltipVisible] = useState(false);
    const closingTimeoutRef = useRef(null);

    const handleMouseEnterButton = () => {
    clearTimeout(closingTimeoutRef.current); // Clear any existing timeout
    setTooltipVisible(true);
    };

    const handleMouseLeaveButton = () => {
    // Set a timeout to close the tooltip after a brief delay
    const timeout = setTimeout(() => {
        setTooltipVisible(false);
    }, 150); // Adjust the delay as needed

    closingTimeoutRef.current = timeout;
    };

    const handleMouseEnterTooltip = () => {
    clearTimeout(closingTimeoutRef.current); // Clear the timeout when entering tooltip
    };

    const handleMouseLeaveTooltip = () => {
    // Set a timeout to close the tooltip after a brief delay
    const timeout = setTimeout(() => {
        setTooltipVisible(false);
    }, 150); // Adjust the delay as needed

    closingTimeoutRef.current = timeout;
    }


//

    useEffect(() => {
        const handleResize = () => {
          setWindowBelow750(window.innerWidth < 750);
        };
        if(mobileMenu === false){
            setMobileKateg(false)
        }
        // Initial check when the component mounts
        handleResize();
    
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [mobileMenu]);
      
    
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
                    <Heart onClick={() => (setFavouriteShow(prev => !prev))}>
                        <AiOutlineHeart size={20} />
                        <p>{favourites.length}</p>
                    </Heart>
                    <Link to='/kupovina'>
                        <Cart>
                            <BsFillCartFill size={22} />
                            <p>{cartItems.length}</p>
                        </Cart>
                    </Link>
            </InfoDiv>
        </TopNav>
        <BottomNav>
            <BoxImg>
               <Link to='/'> <img src='https://www.knjizare-vulkan.rs/files/images/vulkan/logo.png.webp' alt='img' /></Link> 
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
        <RealNav onMouseEnter={()=> {setMouseOver(true)}}>
            <BsHouseFill size={30} color='gray' />
            <p   onMouseEnter={handleMouseEnterButton}
        onMouseLeave={handleMouseLeaveButton}>KATEGORIJE</p>
            <Link to='/Akcija'><p>AKCIJE</p></Link>
            <Link to='/NovaIzdanja'><p>NOVA IZDANJA</p></Link>
            <Link to='/BookTok'><p>#BOOKTOK</p></Link>
            <Link to='/HarryPotter'><h4>HARRY POTTER</h4></Link>
            <SearchContainer>
                <SearchInput type="text" placeholder="Pretraži sajt" />
                <SearchButton type="button"><BiSearchAlt2 size={25}/></SearchButton>
            </SearchContainer>
            {tooltipVisible  && <Kategorije  className="tooltip"
          onMouseEnter={handleMouseEnterTooltip}
          onMouseLeave={handleMouseLeaveTooltip}>
                <Link to='/Allbooks'><p>KNJIGA</p></Link>
                <p>ZA DECU</p>
                <p>ENGLISH BOOKS</p>
                <p>GIFT</p>
                <p>PARTY PROGRAM</p>
                <Link to='/Allbooks'><p>POGLEDAJ SVE</p></Link>
            </Kategorije>}
        </RealNav>
        {isWindowBelow750 &&<MobileNav>
            <Flex>
                <div>
                    <Hamburger size={42} onClick={()=>(setMobileMenu(!mobileMenu))} />
                    <Link to='/'><img src='https://www.knjizare-vulkan.rs/files/images/vulkan/logo.png.webp' /></Link> 
                </div>
                <span>
                    <Heart onClick={() => (setFavouriteShow(prev => !prev))}>
                        <AiOutlineHeart size={20} />
                        <p>{favourites.length}</p>
                    </Heart>
                    <Link to='/kupovina'>
                        <CartMobile>
                            <BsFillCartFill size={22} />
                            <p>{cartItems.length}</p>
                        </CartMobile>
                    </Link> 
                </span>
            </Flex>
            <MobileTitle>BESPLATNA DOSTAVA Za porudžbine preko 3000 dinara</MobileTitle>
            {mobileMenu &&<MobileMenu>
                <span>
                    <p onClick={()=>{setMobileKateg(prev => !prev)}}>KATEGORIJE</p>
                    <Arrow />
                </span>
                <Link to='/Akcija'><p>AKCIJE</p></Link>
                <Link to='/NovaIzdanja'><p>NOVA IZDANJA</p></Link>
                <Link to='/BookTok'><p>#BOOKTOK</p></Link>
                <Link to='/HarryPotter'><h4>HARRY POTTER</h4></Link>
            </MobileMenu>}
            {mobileKateg &&<MobileKategorija>
                <p>KNJIGE</p>
                <p>ZA DECU</p>
                <p>ENGLISH BOOKS</p>
                <p>GIFT</p>
                <p>PARTY PROGRAM</p>
            </MobileKategorija>}
        </MobileNav>}
        {favouriteShow &&<FavouriteDiv>
            <Position>
            {favourites.length === 0 ? <p>Vaša lista želja je prazna</p> : <>
            <h2>Lišta želja</h2>
                {favourites.map((item,index) =>{
                    return(
                        <FavouriteBox key={index}>
                            <img src={item.img} />
                            <span>
                                <p>{item.name}</p>
                                <h2>{item.price} RSD</h2>
                                <h3>{item.realPrice}RSD</h3>
                            <Dodaj onClick={() => dispatch(addItemToCart(item))}><AiOutlineShoppingCart/></Dodaj>
                            </span>
                        </FavouriteBox>
                    )
                })}
            <ClearButton onClick={() => dispatch(clearFavouriteCart())}>Clear</ClearButton>
            </>}
            </Position>
        </FavouriteDiv>}

    </Nav>
  )
}
const Nav = styled.div`
display:flex;
    width:100%;
    flex-direction:column;
    `
const Position = styled.div`
    width: 100%;
    height: 100%;
    position:relative;
    margin-bottom: 3rem;
    h2{
        text-align:center;
        font-size: 1.2rem;
        font-weight:500;
        margin-top: 0.2rem;
    }
    p{
        text-align:center;
        font-size: 1.2rem;
    }
`
const ClearButton = styled.button`
    position: absolute;
    bottom: -2rem;
    right: 0.5rem;
    width: 60px;
    height: 25px;
    font-size: 1rem;
    border: 1px solid black;
    background: none;
    cursor: pointer;
    &:hover{
        color:white;
        background: black;
        transition: 0.3s ease;
    }
`
const Dodaj = styled.button`
  color:white;
  cursor:pointer;
  width:40px;
  height:40px;
  display:flex;
  justify-content:center;
  align-items:center;
  border:none;
  font-size: 1.4rem;
  background:black;
  border-radius:50%;
  &:hover{
    background:red;
    transition:0.3s ease;
  }
`
const FavouriteDiv = styled.div`
    position: absolute;
    width: 300px;
    height: auto;
    border: 1px solid black;
    right:  7.5rem;
    top: 4vh;
    z-index: 100;
    border-radius: 0.5rem;
    background: white;
    @media (max-width: 750px){
        width: 250px;
        top: 7vh;
        right: 0;
    }
`
const FavouriteBox = styled.div`
    display:flex;
    padding: 0.5rem;
    img{
        width: 100px;
    }
    span{
        width: 100%;
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
    }
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
        margin-bottom: 0.5rem;
        font-size:1rem;
        color:grey;
        text-align:center;
        text-decoration: line-through;
        font-weight:400;
      }
`
const Flex = styled.div`
display:flex;
    justify-content: space-between;
    padding: 0.5rem 0.5rem;
    align-items:center;
    width: 100%;
    a{
        text-decoration:none;
        link-style-type: none;
        color:black;
    }
    @media (max-width: 500px){
        img{
            width:150px;
        }
    }
`
const MobileKategorija = styled.div`
    z-index: 100;
    width: 40%;
    height: 260px;
    border: 1px solid #cccccc;
    background: #F2F2F2;
    position: absolute;
    top: 6.25rem;
    left: 50%;
    transition: 0.4s ease;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    p{
        font-size: 1rem;
        margin-bottom:1rem;
        cursor:pointer;
        &:hover{
            color:red;
            transition: 0.3s ease;
        }
        @media (max-width: 350px){
            font-size: 0.9rem;
        }
    }
    @media (max-width: 500px){
        top: 5.5rem;
    }
`
const Arrow = styled(GrNext)`

`

const CartMobile = styled.div`
    display:flex;
    margin-left: 1rem;
    p{
        margin-left:0.3rem;
    }
`
const MobileTitle = styled.div`
    width: 100%;
    font-size: 0.8rem;
    height: 3vh;
    background:black;
    color: white;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width: 350px){
        font-size: 0.6rem;
    }
`

const MobileMenu = styled.div`
    z-index: 100;
    position: absolute;
    top:6.3rem;
    left:0rem;
    width: 50%;
    height: 93vh;
    border: 1px solid #cccccc;
    background: #F2F2F2;
    position: absolute;
    transition: 0.1s ease;
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:flex-start;
    padding-top:2rem;
    
    a{
        text-decoration:none;
        list-style-type:none;
        color:black;
    }
    span{
        display:flex;
        cursor:pointer;
        &:hover{
            transition:0.1s ease;
        }
    }
    p{
        font-size: 1rem;
        margin: 1.2rem 1rem;
        cursor:pointer;
        &:hover{
            color:red;
            transition:0.1s ease;
        }
        @media (max-width: 350px){
            font-size: 0.9rem;
        }
    }
    h4{
        color:red;
        font-weight:bold;
        font-family: 'Cinzel Decorative', sans-serif;
        margin: 1.2rem 1rem;
        &:hover{
            color:black;
            transition:0.4s ease;
        }
    @media (max-width: 500px){
        top:5.5rem;
    }
    
`
const MobileNav = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    img{
        user-select: none;
        -moz-user-select: none; /* Firefox */
        -webkit-user-select: none; /* Safari and Chrome */
        -ms-user-select: none; /* Internet Explorer/Edge */
        @media (max-width: 350px){
            width: 100px;
        }
    }
    span{
        display:flex;
        align-items:center;
        justify-content: center;
    }

`
const Hamburger = styled(BiMenu)`
    cursor: pointer;
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
    a{
        text-decoration:none;
        list-style-type:none;
    }
    h4{
        color:red;
        font-weight:bold;
        font-family: 'Cinzel Decorative', sans-serif;
        margin: 0 2rem;
        &:hover{
            color:black;
            transition:0.4s ease;
        }
    }
    p{
        margin: 0 2rem;
        color: grey;
        cursor:pointer;
        &:hover{
            color:black;
            transition:0.1s ease;
        }
        @media (max-width: 1400px) {
            margin: 0 0.5rem;
        }
        @media (max-width: 1400px) {
            font-size: 0.8rem;
        }
    }
    @media (max-width: 1700px) {
        padding: 0 1rem;
    }
    @media (max-width: 750px){
        display:none;
    }
`
const Kategorije = styled.div`
    z-index: 100;
    width: 200px;
    height: 260px;
    border: 1px solid #cccccc;
    background: #F2F2F2;
    position: absolute;
    top: 2.2rem;;
    transition: 0.4s ease;
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
  border:none;
  color: black;
  width: 300px;
  @media (max-width: 1400px) {
    width: 100px;
}
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
    @media (max-width: 750px){
        display:none;
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
    a{
        text-decoration:none;
        link-style-type: none;
        color:white;
    }
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
    background: red;
    p{
        margin-left: 0.2rem;
        z-index: 10;
        font-size: 0.8rem;
        @media (max-width: 750px) {
            font-size: 1rem;
        }
    }
    `
    const Discount = styled(MdDiscount)`
        color: red;
        position: absolute;
        right: 14.5rem;
        top: 0rem;
        font-size:4rem;
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
    width: 33%;
   
`;
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