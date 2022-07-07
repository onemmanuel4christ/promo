import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Wrapper = styled.div`
    display: flex;
    color: #FFF;
    padding: 40px 0;
    background-color: #002E25;
`

const Footer = () => {
  return (
    <Wrapper>
      <Container className='my-10'>
      <Row>
        <Col xs={12} md={4}>
          <h4 className="my-2">Address:</h4>
          <span>
          Plot 1263 Off Adeola Odeku street Vi, Lagos State.
          </span>
        </Col>
        <Col xs={12} md={4}>
        <h4 className="my-2">Phone No:</h4>
          <span>
            Dealers Nos: Pascal– 08033237766. <br />
            Madam Sharp Sharp-08033211148. <br />
            Ogomec– 08033082559. <br />
            Coal City– 08033296985
          </span>
        </Col>
        <Col xs={12} md={4} className="text-white">
        <h4 className="my-2">Social Network:</h4>
          <Link to="https://facebook.com" className="text-white">
              <FaFacebook /> <span>Facebook</span>
          </Link> <br />
          <Link to="https://facebook.com" className="text-white">
              <FaInstagram /> <span>Instaram</span>
          </Link> <br />
          <Link to="https://facebook.com" className="text-white">
              <FaTwitter /> <span>Twitter</span>
          </Link> <br />
        </Col>
      </Row>
      </Container>
    </Wrapper>
  )
}

export default Footer
