import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {FaDotCircle} from 'react-icons/fa'

const Dostava = () => {

    const cartItems = useSelector(state => state.cart.cartItems)
    const [selectedDos, setSelectedDos] = useState('')
    
  return (
    <>
    {cartItems.length === 0 ? '' :
        <Wrapper>
            <h1>DOSTAVA I PLAĆANJE</h1>
            <Line />
            <Box>
                <Flex>
                    <SmallBox onClick={() => {setSelectedDos('AKS')}}>
                        {selectedDos === 'AKS' ? <Circle color='red' /> : ''}
                        <img src='https://www.knjizare-vulkan.rs/files/thumbs/files/images/thumbs_150/aks-logo_150px.png' />
                        <span>
                            <h2>AKS</h2>
                            <p>Proizvode dostavljamo kurirskom službom AKS Express.<br /> Neophodno je da ostavite broj telefona, kako bi kurir mogao <br />da Vas kontaktira prilikom isporuke. Kuriska služba vrši <br />isporuku proizvoda od 8 do 16h i to u roku od 24-72h radnim <br /> danima od trenutka preuzimanja paketa od nas. Upišite <br />adresu za dostavu na kojoj ćete biti u tom periodu.</p>
                        </span>
                    </SmallBox>
                    <BigBox onClick={() => {setSelectedDos('RADNJI')}}>
                        {selectedDos === 'RADNJI' ? <Circle color='red' /> : ''}
                        <img src='https://www.knjizare-vulkan.rs/files/thumbs/files/images/vulkan/thumbs_150/vulkan_knjizare_150px.png' />
                        <span>
                            <h2>Preuzimanje u radnji</h2>
                            <p>Preuzmite svoju porudžbinu u knjižari Vulkan, Sremska 2, 11000 Beograd.</p>
                            <h2 style={{fontSize:'0.9rem'}}> Rok za preuzimanje je najranije sledećeg radnog dana nakon 16h od trenutka poručivanja. Obaveštenje da je porudžbina spremna za preuzimanje poslaćemo vam putem emaila.</h2>
                            <p>Ovaj vid isporuke je besplatan i dostupan isključivo za porudžbine plaćene platnom karticom i IPS sken.</p>
                            <p>Pre poručivanja proverite radno vreme prodavnice klikom na navedenu prodavnicu u delu KNJIŽARE.</p>
                            <p>Kada Vaša porudžbina bude spremna za preuzimanje dobićete email obaveštenje.</p>
                        </span>
                    </BigBox>
                </Flex>
                <Flex>
                    <SmallBox onClick={() => {setSelectedDos('KARTICA')}}>
                        {selectedDos === 'KARTICA' ? <Circle color='red' /> : ''}
                        <img src='https://icon-library.com/images/money-stack-icon/money-stack-icon-13.jpg' />
                        <span>
                            <h2>Platnom karticom</h2>
                            <p>Sva plaćanja biće izvršena u lokalnoj valuti Republike Srbije – dinar (RSD). <br />
                                Za informativni prikaz cena u drugim valutama koristi se srednji kurs Narodne Banke Srbije. Iznos za koji će biti zadužena Vaša platna kartica biće izražen u Vašoj lokalnoj valuti kroz konverziju u istu po kursu koji koriste kartičarske organizacije, a koji nama u trenutku transakcije ne može biti poznat. Kao rezultat ove konverzije postoji mogućnost neznatne razlike od originalne cene navedene na našem sajtu.</p>
                        </span>
                    </SmallBox>
                    <BigBox onClick={() => {setSelectedDos('IPS')}}>
                        {selectedDos === 'IPS' ? <Circle color='red' /> : ''}
                        <img src='https://i.ibb.co/4KpxFnD/ips-skeniraj-removebg-preview.png' />
                            <span>
                                <h2>IPS Skeniraj</h2>
                                <p>Svoju online porudžbinu možete platiti instant plaćanjem, metodom IPS skeniraj.</p>
                                <p>Kada izaberete IPS skeniraj bićete preusmereni na stranicu na kojoj će Vam biti prikazan jednokratan IPS QR kod koji je obezbedila Raiffeisen banka.</p>
                                <p>Aplikacijom mobilnog bankarstva (Mbanking aplikacijom) koju imate instaliranu na svom mobilnom uređaju skeniraćete/preuzećete podatke iz generisanog IPS QR koda i plaćanje obavljate jednostavno, u sigurnom okruženju Vaše banke.</p>
                                <p>Informacija o ishodu plaćanja biće Vam prikazana odmah po završetku obrade ali će Vam biti dostavljena i putem imejla.</p>
                            </span>
                    </BigBox>
                </Flex>
            </Box>
            <h1>IMATE PITANJE?</h1>
                <Line />
            <Pitanje>
                <p>Unesite komentar ukoliko imate posebnu napomenu vezano za ovu porudžbinu</p>
                <input type='text' />
            </Pitanje>
        </Wrapper>
        }
    </>
  )
}

const Wrapper = styled.div`
  padding: 0 15rem;
  @media (max-width: 1700px) {
    padding: 0 1rem;
  }
  @media (max-width: 700px) {
    padding: 0 0rem;
  }
  h1{
    margin-top:1rem;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    @media (max-width: 700px) {
        margin-left: 1rem;
    }
}
    input{
        width: 550px;
        height: 100px;
        margin: 1rem 0;
    }
`
const Pitanje = styled.div`

    @media (max-width: 700px) {
        margin-left: 1rem;
        input{
            width: 80%;
        }
    }
`
const Circle = styled(FaDotCircle)`
    position:absolute;
    left: 1rem;
    top:1rem;
`
const Box = styled.div`
    width: 100%;
    height: 65vh;
    display:flex;
    @media (max-width: 1200px) {
        flex-direction:column;
        height:auto;
        justify-content:center;
        align-items:center;
    }
`
const SmallBox = styled.div`
    position:relative;
    width: 100%;
    height: 40%;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    img{
        width: 150px;
        margin-left: 1rem;
    }
    span{
        display:flex;
        flex-direction:column;
        margin-left: 2.5rem;
        h2{
            font-size: 1rem;
            color:red;
            font-weight: 600;
        }
        p{
            font-size: 0.9rem;
        }
    }
    &:hover{
        background: #FCE4E8;
        transition: 0.3s ease;
    }
    @media (max-width: 1200px) {
        margin: 1.5rem 0;
    }
    @media (max-width: 700px) {
        flex-direction:column;
    }
`
const BigBox = styled.div`
    width: 100%;
    height: 60%;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    position:relative;
    img{
        width: 150px;
        margin-left: 1rem;
    }
    span{
        display:flex;
        flex-direction:column;
        margin-left: 2.5rem;
        h2{
            font-size: 1rem;
            color:red;
            font-weight: 600;
           
        }
        p{
            font-size: 0.9rem;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
        }
    }
    &:hover{
        background: #FCE4E8;
        transition: 0.3s ease;
    }
    @media (max-width: 700px) {
        flex-direction:column;
    }
`
const Flex = styled.div`
    width: 50%;
    height: 100%;
    @media (max-width: 1200px) {
        width: 80%;
    }
    @media (max-width: 700px) {
        width: 90%;
    }
`

const Line = styled.div`
  width:100%;
  height: 2px;
  background: #DDDDDD;
  margin-bottom: 1.5rem;
`
export default Dostava