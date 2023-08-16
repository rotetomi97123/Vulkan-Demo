import React from 'react'
import styled from 'styled-components'
import {FaDotCircle} from 'react-icons/fa'
import { EuropeanCountryNames } from './data'
import { useSelector } from 'react-redux'


const Isporuke = () => {

    const cartItems = useSelector(state => state.cart.cartItems)


  return (
    <>
    {cartItems.length === 0 ? '' : <Wrapper>
        <h1>ADRESA ISPORUKE</h1>
        <Line />
        <span>
            <FaDotCircle color='red' />
            <h3>Porudžbina bez registracije</h3>
        </span>
        <h5>Ukoliko želite da poručite, a da se ne registrujete na sajt popunite obavezne podatke</h5>
        <SelectFlex>
            <div style={{display:'flex', flexDirection:'column'}}>
                <label htmlFor="dropdown">Tip korisnika</label>
                <select id="dropdown" name="dropdown">
                <option value="Fizičko lice">Fizičko lice</option>
                <option value="Pravno Lice">Pravno Lice</option>
                </select>
            </div>
        </SelectFlex>
        <InputFlex>
            <Box>
                <label htmlFor="input">Ime</label>
                <Input type='text'></Input>
            </Box>
            <Box>
                <label htmlFor="input">Prezime</label>
                <Input type='text'></Input>
            </Box>
        </InputFlex>
        <InputFlex>
            <Box>
                <label htmlFor="input">Email adresa</label>
                <Input type='email'></Input>
            </Box>
            <Box>
                <label htmlFor="input">Telefon</label>
                <Input type='number'></Input>
            </Box>
        </InputFlex>
        <Drzava>
            <div style={{display:'flex', flexDirection:'column'}}>
                <label htmlFor="dropdown">Država</label>
                <select id="dropdown" name="dropdown" defaultValue="Serbia">
                {EuropeanCountryNames.map((item,index) =>{
                    return(
                        <option key={index} value={item.name}>{item.name}</option>
                        )
                    })}
                </select>
            </div>
        </Drzava>
        <InputFlex>
            <Box>
                <label htmlFor="input">Grad</label>
                <Input type='text'></Input>
            </Box>
            <Box>
                <label htmlFor="input">Poštanski broj</label>
                <Input type='number'></Input>
            </Box>
        </InputFlex>
        <InputFlex>
            <Box>
                <label htmlFor="input">Ulica</label>
                <Input type='text'></Input>
            </Box>
            <Box>
                <label htmlFor="input">Kućni broj</label>
                <Input type='number'></Input>
            </Box>
        </InputFlex>
        <CheckboxContainer>
                <StyledCheckbox />
                Da, imam više od 15 godina
        </CheckboxContainer>
    </Wrapper>}
    </>
  )
}
const Wrapper = styled.div`
    margin-top: 1.5rem;
    padding: 0 15rem;
    @media (max-width: 1700px) {
        padding: 0 1rem;
    }
    @media (max-width: 700px) {
        padding: 0 0rem;
    }
    h1{
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        @media (max-width: 700px) {
            margin-left: 1rem;
        }
    }
    h5{
        font-size: 0.9rem;
        font-weight:400;
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
        @media (max-width: 700px) {
            margin-left: 1rem;
        }
    }
    span{
        display:flex;
        align-items:center;
        @media (max-width: 700px) {
            margin-left: 1rem;
        }
        h3{
            margin-left: 0.5rem;
            font-weight: 500;
        }
    }
`
const Box = styled.div`
    display:flex;
    flex-direction:column;
`
const InputFlex = styled.div`
    display:flex;
    width: 720px;
    justify-content:space-between;
    align-items:center;
    margin-top: 1rem;
    @media (max-width: 700px) {
        flex-direction: column;
    }
    @media (max-width: 700px) {
        width: auto;
    }
`
const Input = styled.input`
    width: 350px;
    height: 35px;
    padding-left:0.5rem;
`
const Drzava = styled.div`
    display:flex;
    flex-direction:column;
    margin-top: 1rem;
    select{
        padding: 0.3rem;
        border: 1px solid #ddddd
        font-weight: 600;
        margin-top: 0.5rem;
        width: 720px;
        height: 35px;
        @media (max-width: 700px) {
            width: 350px;

        }
    }
    @media (max-width: 700px) {
        align-items:center;
    }
`
const SelectFlex = styled.div`
    display:flex;
    flex-direction:column;
    margin-top: 1rem;
    select{
        padding: 0.3rem;
        border: 1px solid #ddddd
        font-weight: 600;
        margin-top: 0.5rem;
        width: 350px;
        height: 35px;
    }
    @media (max-width: 700px) {
        align-items:center;
    }
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
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  margin-top:2rem;
  margin-bottom: 2rem;
  width:535px;
  @media (max-width: 700px) {
    width:335px;
    font-size:0.9rem;
    margin-left: 1rem;
  }
`;
export default Isporuke