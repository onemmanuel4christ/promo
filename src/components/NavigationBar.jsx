import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Button  } from 'react-bootstrap'
import './Nav.css'
const NavigationBar = () => {
  return (
  
        <Navbar expand="lg" className='color-nav d-flex justify-content-between' variant='light'  >
         <Container>
            <Navbar.Brand href="/" >
                <img src="./images/logo2.jfif" alt="" className='logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav " />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto" >
            <Nav.Link href="/" className='nav-item'>Home</Nav.Link>
            <Nav.Link href="/about"  className='nav-item'>About Us</Nav.Link>
            <Nav.Link href="/promotion"  className='nav-item'>Promo</Nav.Link>
            <Nav.Link href="/photos"  className='nav-item'>Photo Gallery</Nav.Link>
            <Nav.Link href="/videos"  className='nav-item'>Video Gallery</Nav.Link>
            <a className="shop-now" href="/join" role="button">Join our Distributors</a>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>    
  )
}

export default NavigationBar
