import React from 'react'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Nav.css'

const CartHolder = styled.div`
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Span = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: -10px;
  font-size: 10px;
  background-color: red;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
`


const NavigationBar = () => {
  return (
  
    <Navbar expand="lg" className='color-nav' variant='light'  >
    <Container>
       <Navbar.Brand href="/" >
           <img src="./images/logo2.jfif" alt="" className='logo' />
       </Navbar.Brand>

       <Navbar.Toggle aria-controls="basic-navbar-nav " />
       
       <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
       <Nav >
       <Nav.Link href="/" className='nav-item'>Home</Nav.Link>
       <Nav.Link href="/about"  className='nav-item'>About Us</Nav.Link>
       <Nav.Link href="/promotion"  className='nav-item'>Promo</Nav.Link>
       <Nav.Link href="/photos"  className='nav-item'>Photo Gallery</Nav.Link>
       <Nav.Link href="/videos"  className='nav-item'>Video Gallery</Nav.Link>
       <a className="shop-now" href="/products" role="button">Buy Now!</a>
      
          <Link to="/checkout">
                  <CartHolder>
                   <FaCartArrowDown className='cart__basket'/>
                      <Span>2</Span>
                  </CartHolder>
                </Link>
        </Nav>
      </Navbar.Collapse>
  </Container>
</Navbar>  
  )
}

export default NavigationBar
