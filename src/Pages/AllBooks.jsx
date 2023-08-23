import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'
import {Novo,Top,TopEng,Stephen,do40,Popularna,Za500} from '../Components/data'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { addItemToCart } from '../Actions'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io'
import BrziPregled from './BrziPregled'

const AllBooks = () => {
    // Combine all arrays into a single array
    const allBooks = [...Novo, ...Top, ...TopEng, ...Stephen, ...do40, ...Popularna, ...Za500];

    const [sorting, setSorting] = useState('default'); // Default sorting

    const sortedBooks = [...allBooks]; // Create a copy of the array to avoid modifying the original

    if (sorting === 'cheapest') {
        sortedBooks.sort((a, b) => a.price - b.price);
    } else if (sorting === 'expensive') {
        sortedBooks.sort((a, b) => b.price - a.price);
    }


    const [selectedBook, setSelectedBook] = useState(false);
    const dispatch = useDispatch();

  
    const openModal = (book) => {
      setSelectedBook(book);
    };
  
    const closeModal = () => {
      setSelectedBook(null);
    };

    const itemsPerPage = 12;
    const totalPages = Math.ceil(sortedBooks.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);
  
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = sortedBooks.slice(startIndex, endIndex);
  
    const goToPage = (page) => {
      setCurrentPage(page);
    };
  
    const goToNextPage = () => {
      if (currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const goToPrevPage = () => {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index);
  
  
    const [selectedType, setSelectedType] = useState(null);

    const typeCounts = {};
    sortedBooks.forEach(item => {
      const itemType = item.type;
      if (!typeCounts[itemType]) {
        typeCounts[itemType] = 1;
      } else {
        typeCounts[itemType]++;
      }
    });
  
    const [filterOn, setFilterOn] = useState(false)

    const filteredBooks = selectedType
    ? sortedBooks.filter(item => item.type === selectedType)
    : sortedBooks;

    return (
        <div>
            <Navbar />
            <Wrapper>
                <SortingUp> 
                    <div>
                        <h1>Proizvodi</h1>  
                        <p>{selectedType}</p>
                    </div>
                    <SelectWrap>
                        <p>Sortiraj:</p>
                        <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
                            <option value="default">Podrazumevano</option>
                            <option value="cheapest">Najjeftinije</option>
                            <option value="expensive">Najskupje</option>
                        </select>
                    </SelectWrap>
                </SortingUp>
                <Box>
                    <SortingLeft>
                      <TypeDiv>
                      {Object.keys(typeCounts).map((type, index) => (
                        <Type
                          key={index}
                          onClick={() => {setSelectedType(type === selectedType ? null : type) , setFilterOn(false)}}
                        >
                          {type} ({typeCounts[type]})
                        </Type>
                      ))}
                
                      </TypeDiv>
                    </SortingLeft>
                    <Content>
                       {/* {currentItems.map((book, index) => (
                            <Card key={index}>
                                <img src={book.img} />
                                <Circle>
                                    <p>{book.popust}%</p>
                                </Circle>
                                <Name>{book.name}</Name>
                                <Autor>{book.autor}</Autor>
                                <h3>{book.price},00 RSD</h3>
                                <h4>{book.realPrice},00 RSD</h4>
                                <HoverDiv>
                                    <Link to="/Detaljnije" state={{ book: {book} }}><Btn>DETALJNIJE</Btn></Link>
                                    <Btn  onClick={() => openModal(book)}>BRZI PREGLED</Btn>
                                    <Dodaj onClick={() => dispatch((addItemToCart(book)))} ><AiOutlineShoppingCart/></Dodaj>
                                </HoverDiv>
                            </Card>
                        )) } */}
                        {filteredBooks.map((book, index) => (
                          <Card key={index}>
                          <img src={book.img} />
                          <Circle>
                              <p>{book.popust}%</p>
                          </Circle>
                          <Name>{book.name}</Name>
                          <Autor>{book.autor}</Autor>
                          <h3>{book.price},00 RSD</h3>
                          <h4>{book.realPrice},00 RSD</h4>
                          <HoverDiv>
                              <Link to="/Detaljnije" state={{ book: {book} }}><Btn>DETALJNIJE</Btn></Link>
                              <Btn  onClick={() => openModal(book)}>BRZI PREGLED</Btn>
                              <Dodaj onClick={() => dispatch((addItemToCart(book)))} ><AiOutlineShoppingCart/></Dodaj>
                          </HoverDiv>
                      </Card>
                          ))}
                        
                         
                          
                        {selectedBook && (
                         <BrziPregled book={selectedBook} onClose={closeModal} />
                         )}
                    </Content>
                </Box>
                <PageNumbers>
                    <ArrowButton onClick={goToPrevPage}>
                      <IoIosArrowBack />
                    </ArrowButton>
                  {pageNumbers.map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => goToPage(pageNumber)}
                      disabled={pageNumber === currentPage}
                    >
                      {pageNumber + 1}
                    </button>
                  ))}
                    <ArrowButton onClick={goToNextPage}>
                      <IoIosArrowForward />
                    </ArrowButton>
                </PageNumbers>
            </Wrapper>
            <Newsletter />
            <Footer />
        </div>
    );
};
const Wrapper = styled.div`
  height:auto;
  padding: 0 15rem;
  @media (max-width: 1700px) {
    padding: 0 1rem;
  }
  @media (max-width: 700px) {
    padding: 0 0rem;
  }
  position:relative;
`
const TypeDiv = styled.div`
  padding: 0.5rem 0.5rem;
  border-bottom: 1px solid #CCCCCC;
`
const Type = styled.p`
  font-size: 0.9rem;
  cursor: pointer;
  margin-bottom: 0.2rem;
  &:hover{
    color:red;
    transition: 0.3s ease;
    transform: translateX(4px);
  }
`
const PageNumbers = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 50%;
  button{
    padding: 0.6rem 0.8rem;
    background-color: ${(props) => (props.active ? 'red' : '#ffffff')};
    color: ${(props) => (props.active ? '#ffffff' : 'red')};
    border: none;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: red;
      color: #ffffff;
      transition: 0.3s ease;
    }

    &:disabled {
      background-color: red;
      color: white;
      border: none;
    }
`
const SelectWrap = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  p{
    margin-right: 0.5rem;
  }
`
const Name = styled.p`
  font-size: 0.9rem;
  text-align:center;
`
const Autor = styled.p`
  font-size: 0.9rem;
  text-align:center;
  margin-top: 1rem;
`
const Circle = styled.div`
   width: 40px;
   height:40px;
   border-radius: 50%;
   position: absolute;
   right: 0.5rem;
   top: 0.5rem;
   background:	#FF0000;
   display:flex;
   justify-content:center;
   align-items:center;
   color:white;
   z-index:50;
   font-size: 0.9rem;

`
const HoverDiv = styled.div`
  width:100%;
  height:175px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity:0;
  backdrop-filter: blur(2px)
`
const Card = styled.div`
  width: 170px;
  height: auto;
  padding: 1.5rem;
  position:relative;    
  img{
    width: 120px;
    height: 180px;
  }
  h3{
    font-size: 1rem;
    text-align:center;
    font-weight: 500;
    color:red;
    margin-top: 1rem;
  }
  h4{  
   font-size: 0.9rem;
    text-align:center;
    font-weight: 500;
    color: grey;
    text-decoration: line-through;
  }
  &:hover{
    & > ${HoverDiv} {
      opacity: 1;
      transition:0.3s ease;
    }
  }
`
const Box = styled.div`
  display:flex;
  width: 100%;
  height:auto;

`
const Content = styled.div`
  width: 80%;
  height: 100%;
  display:flex;
  flex-wrap: wrap;
`
const SortingUp = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 0 4rem;
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid #CCCCCC;
  h1{
    font-size: 2.5rem;
    color: grey;
  }
  select{
    border: 1px solid #CCCCCC;
    width: 200px;
    padding: 0.3rem;
    font-size: 1rem;
    @media (max-width: 600px){
      width: 120px;
    }
  }
  @media (max-width: 600px){
    padding: 0 0.5rem;
  }
`
const SortingLeft = styled.div`
  width: 20%;
  height: 100vh;
  border-right: 1px solid  #CCCCCC;
  ;

`
const Dodaj = styled.button`
  color:white;
  cursor:pointer;
  width:50px;
  height:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  border:none;
  font-size: 1.5rem;
  background:black;
  border-radius:50%;
  &:hover{
    background:red;
    transition:0.3s ease;
  }
`

const Btn = styled.button`
  width: 110px;
  border:none;
  background: black;
  color:white;
  padding: 0.5rem 0.5rem;
  font-size:0.8rem;
  margin: 0.5rem 0;
  cursor:pointer;
  &:hover{
    background: red;
    transition:0.3s ease;
  }
`
const BookTok = styled.div`
  background:#D70040;
  position:absolute;
  top:0rem;
  left:-1rem;
  color:white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 0 0.4rem;
  border-top-left-radius:1rem;
  border-bottom-right-radius:1rem;
  border: 2px solid #00FFFF;
  text-align:center;
  z-index:50;
`
const ArrowButton = styled.button`
  padding: 5px;
`;
export default AllBooks