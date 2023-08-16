import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { removeItemFromCart,handleIncrement,handleDecrement } from '../Actions'
import Isporuke from './Isporuke'


const VasaKorpa = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h1>VAŠA KORPA</h1>
      <Line />
      {cartItems.length === 0 ?
      <>
        <Prazna>
          <p>Vaša korpa je prazna!</p>
        </Prazna> 
        <Link to='/'><Nastavi>NASTAVI SA KUPOVINOM</Nastavi></Link> 
      </>  :
      <>
      <CartWrap>
        <ScrollFuntion>
          <Box>
            <span>
              <p>Proizvod</p> 
            </span>
            <Price>
              <p>Cena</p> 
            </Price>
            <Price>
              <p>Popust</p> 
            </Price>
            <Price>
              <p>Cena sa popustom</p> 
            </Price>
            <Price>
              <p>Količina</p> 
            </Price>
            <Price>
              <p>Ukupno</p> 
            </Price>
          </Box>
          {cartItems.map((item, index) => {
            return(
              <ItemBox key={item.id}>
                  <ImgDiv>
                    <img src={item.img} />
                  </ImgDiv>
                  <span>
                    <div>
                      <p>{item.type}</p>
                      <p>{item.name}</p>
                      <h4>Šifra artikla: 335206</h4>    
                    </div>
                  </span>
                  <Price>
                    <p>{item.realPrice},00 RSD</p>
                  </Price>
                  <Price>
                    <p>{item.popust},00%</p>
                  </Price>
                  <Price>
                    <p>{item.price},00 RSD</p>
                  </Price>
                  <Price>
                    <h4  onClick={() => dispatch((handleDecrement(item)))}>-</h4>
                    <p>{item.quantity}</p>
                    <h4 onClick={() => dispatch((handleIncrement(item)))}>+</h4>
                  </Price>
                  <Price>
                    <p>{(item.quantity)*(item.price)},00 RSD</p>
                  </Price>
                  <Izbrisi onClick={() => dispatch((removeItemFromCart(index)))}>IZBRIŠITE</Izbrisi>
              </ItemBox>
            )
          })}
        </ScrollFuntion>
        <UkupnoDiv>
          <span>
            <p>Ukupno: </p>
            <h2>{cartItems.reduce((acc, item) => acc + ((item.quantity)*(item.price)), 0).toFixed(0)},00 RSD</h2>
          </span>
        </UkupnoDiv>
      </CartWrap>
      </>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width:100%;
  height: auto;
  padding: 2rem 15rem;
  @media (max-width: 1700px) {
    padding: 0 1rem;
  }
  @media (max-width: 700px) {
    padding: 0 0rem;
  }
  h1{
    font-size: 1.5rem;
    color:#333333;
    font-weight: 450;
    margin-bottom: 0.5rem;
    @media (max-width: 1200px) {
      margin-left: 1rem;
      margin-top: 1rem;
    }
  }
`
const UkupnoDiv = styled.div`
  width: 100%;
  display:flex;
  justify-content:flex-end;
  span{
    width: 350px;
    display:flex;
    justify-content:space-between;
    p{
      font-size: 1.2rem;
    }
    h2{
      font-size: 1.2rem;
    }
  }
`
const Box = styled.div`
  width:100%;
  display:flex;
  font-weight: bold;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  span{
    width: 510px;
    display:flex;
    justify-content:flex-end;
    padding-right: 7rem;
    font-weight: bold;
  }
`
const ImgDiv = styled.div`
width: 115px;
height: auto;
display: flex;
justify-content: center;
align-items: center;
img{
  max-width: 100%;
  height: auto;
}
@media (max-width: 1200px) {
  display:none;
}
`
const Izbrisi = styled.button`
  font-size: 0.8rem;
  background:none;
  border: 1px solid darkgrey;
  padding: 0.2rem;
  cursor:pointer;
  &:hover{
    background: #36454F;
    color: white;
    transition: 0.3s ease;
  }
`
const Price = styled.div`
    width: 150px;
    display:flex;
    font-size: 1rem;
    justify-content:center;
    align-items:center;
    h4{
      margin: 0 0.5rem;
      font-size: 1.2rem;
      cursor:pointer;
    }
    @media (max-width: 1200px) {
      margin: 0 1rem;
    }
`
const ItemBox = styled.div`
  width: 100%;
  height: 20vh;
  display:flex;
  align-items:center;
  span{
    width: 400px;
    display:flex;
    flex-direction: column;
    font-size: 1rem;
    justify-content:center;
    align-items:center;
    p{
      margin-bottom: 0.2rem;
    }
    h4{
      color: grey;
    }
    @media (max-width: 1200px) {
      margin: 0 1rem;
    }
  }
  &:hover{
    background: #EDEDED ;
    transition: 0.3s ease;
  }
  
`
const ScrollFuntion = styled.div`
  @media (max-width: 1200px) {
    overflow-x: auto;   /* Enable horizontal scrolling when content overflows */
    white-space: nowrap;
  
  `
const CartWrap = styled.div`
  width: 100%;

`
const Nastavi = styled.button`
  width: 200px;
  height: 35px;
  border: none;
  background: #66CC00;
  color: white;
  font-size: 0.9rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  cursor:pointer;
  &:hover{
    opacity:80%;
    transition: 0.3s ease;
}
@media (max-width: 1500px) {
  margin-left: 1.5rem;
}
`
const Line = styled.div`
  width:100%;
  height: 2px;
  background: #DDDDDD;
  margin-bottom: 1.5rem;
`
const Prazna = styled.div`
width:100%;
padding: 0.4rem;
padding-left: 1rem;
border: 1px solid #DDDDDD;
color: #AA4A44;
font-size: 1rem;
background: #FADDE1;
@media (max-width: 1500px) {
  margin-left: 1.5rem;
}
`
export default VasaKorpa