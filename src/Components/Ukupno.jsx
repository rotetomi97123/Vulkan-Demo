import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const Ukupno = () => {

    const cartItems = useSelector(state => state.cart.cartItems)

  return (
    <Wrapper>
        <h1>UKUPNO ZA PLAĆANJE</h1>
        <Line />
        <Box>
            <span>
                <p>Ukupno:</p>
                <h3>{cartItems.reduce((acc, item) => acc + ((item.quantity)*(item.price)), 0).toFixed(0)},00 RSD</h3>
            </span>
        </Box>
        <Box>
            <span>
                <p>Ušteda:</p>
                <h3>{cartItems.reduce((acc, item) => acc + ((item.quantity)*(item.realPrice)), 0)-cartItems.reduce((acc, item) => acc + ((item.quantity)*(item.price)), 0)},00 RSD</h3>
            </span>
        </Box>
        <Box>
            <span>
                <p>Troškovi dostave:</p>
                <h3>Besplatni troškovi dostave</h3>
            </span>
        </Box>
        <Box>
            <span>
                <p>Ukupno za plaćanje sa PDV-om:</p>
                <h2>{cartItems.reduce((acc, item) => acc + ((item.quantity)*(item.price)), 0).toFixed(0)},00 RSD</h2>
            </span>
        </Box>
        <PotvrdiBox>
            <CheckboxContainer>
                    <StyledCheckbox />
                    Klikom na dugme, slažeš se sa <div style={{marginLeft:'0.5rem',color:'red'}}>Uslovima korišćenja i prodaje.</div>
            </CheckboxContainer>
            <Btn>POTVRDI</Btn>
        </PotvrdiBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position:relative;
  padding: 0 15rem;
  h1{
    margin-top:1rem;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    @media (max-width: 700px) {
        margin-left: 1rem;
        }   
    }
    span{
        width: 450px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        h2{
            font-weight:600;
            font-size: 1.3rem;
            color:red;
        }
    }
  @media (max-width: 1700px) {
    padding: 0 1rem;
  }
  @media (max-width: 700px) {
    padding: 0 0rem;
  }
  
`
const Btn = styled.button`
  width: 250px;
  height: 60px;
  font-size: 1.3rem;
  margin-top: 2rem;
  background: #66CC00;
  color:white;
  border:none;
  cursor:pointer;
  &:hover{
    opacity:80%;
    transition: 0.3s ease;
}
@media (max-width: 900px) {
    font-size: 1rem;
}
`
const PotvrdiBox = styled.div`
  width:100%;
  height: 30vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
const Box = styled.div`
  display:flex;
  justify-content:flex-end;
  margin: 0.5rem 0;
`
const Line = styled.div`
  width:100%;
  height: 2px;
  background: #DDDDDD;
  margin-bottom: 1.5rem;
`
const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  /* Hide the native checkbox */
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  width: 18px;
  height: 18px;
  border-radius:2px;
  border: 1px solid darkgrey; /* Default border color for the checkbox (red) */
  outline: none;
  cursor: pointer;
  margin-right: 0.5rem;
  /* Change the custom checkbox style when it's checked */
  &:checked {
    border-color: #ff0000; /* Border color for the checked checkbox (red) */
    background-color: #ff0000; /* Background color for the checked checkbox (red) */
  }

  /* Add the checkmark inside the checkbox */
  &::before {
    content: '\u2713'; /* Unicode checkmark character */
    position: absolute;
    top: -3px;
    left: 3px;
    font-size: 14px;
    color: #fff; /* Color of the checkmark (white) */
    display: none; /* Hide the checkmark by default */
  }

  /* Display the checkmark when the checkbox is checked */
  &:checked::before {
    display: block;
  }
`;

const CheckboxContainer = styled.label`
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  margin-top:2rem;
  width:535px;
  @media (max-width: 700px) {
    width:335px;
    font-size:0.9rem;
  }
`;
export default Ukupno