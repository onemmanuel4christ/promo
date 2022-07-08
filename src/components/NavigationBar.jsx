import React from 'react'
import { Navbar, Nav, Container, Badge } from 'react-bootstrap'
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useStateValue } from '../context/StateProvider';
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
  const [{basket}, dispatch] = useStateValue()
  return (
  
    <Navbar expand="lg" className='color-nav' variant='light'  >
    <Container>
       <Navbar.Brand href="/" >
           <img src="./images/logo2.jfif" alt="" className='logo' />
       </Navbar.Brand>
       <Link to="/checkout">
                  <CartHolder>
                   <FaCartArrowDown className='cart__basket'/>
                      <Span>{basket?.length}</Span>
                  </CartHolder>
                </Link>
       <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          <Nav >
          <Link to="/" className='link'>
              <span className='nav-item'>Home</span>
          </Link>
          <Link to="/about" className='link'>
              <span className='nav-item'>About Us</span>
          </Link>
          <Link to="/promotion" className='link'>
              <span className='nav-item'>Promo</span>
          </Link>
          <Link to="/photos" className='link'>
              <span className='nav-item'>Photo Gallery</span>
          </Link>
          <Link to="/videos" className='link'>
              <span className='nav-item'>Video Gallery</span>
          </Link>
            <Link to="/collections" className='link'>
              <button className="btn btn-primary">Buy Now!</button>      
            </Link>
          </Nav>
      </Navbar.Collapse>
  </Container>
</Navbar>  
  )
}

export default NavigationBar
