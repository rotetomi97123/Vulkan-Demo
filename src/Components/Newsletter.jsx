import React from 'react'
import styled from 'styled-components'
import {BsSendFill} from 'react-icons/bs'

const Newsletter = () => {
  return (
    <Wrapper>
        <Box>
            <h1>NEWSLETTER</h1>
            <span>
                <Input type='email' />
                <Button>PRIJAVITE SE{<Logo />}</Button>
            </span>
            <span>
                <CheckboxContainer>
                    <StyledCheckbox />
                    Čitao sam i složio se sa uslovima korišćenja
                </CheckboxContainer>
            </span>
        </Box>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width:100%;
  height: 30vh;
  background: url('https://img.freepik.com/free-vector/seamless-white-interlaced-rounded-arc-patterned-background_53876-97975.jpg?w=2000');
  background-position: center;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  padding: 0 15rem;
  display:flex;
  justify-content:center;
  align-items:center;
  span{
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
  }
  @media (max-width: 1700px) {
    padding: 0 1rem;
  }
  @media (max-width: 700px) {
    padding: 0 0rem;
  }
  margin-bottom: 4rem;
`
const Box = styled.div`
    width: 650px;
    height: 150px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h1{
        font-size:1.5rem;
        font-weight:1200;
        margin-bottom:1rem;
    }
`
const Input = styled.input`
    padding: 0.7rem;
    border:none;
    border:1px solid grey;
    width: 350px;
    @media (max-width: 700px) {
        width:150px;
      }
`
const Button = styled.button`
    background: #FF0000;
    font-size:1rem;
    border:none;
    color:white;
    padding: 10px;
    font-weight: 600;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    &:hover{
        background:black;
        transition:0.4s ease;
    }
`
const Logo = styled(BsSendFill)`
    color:white;
    margin-left: 0.5rem;
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
export default Newsletter