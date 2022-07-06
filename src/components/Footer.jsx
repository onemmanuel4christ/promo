import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Mollitia eaque commodi suscipit aliquid, dolor maxime iusto. Corporis 
            inventore officiis perspiciatis minus laudantium hic eos, 
            iste id impedit libero doloremque expedita.
            </span>
        </Col>
        <Col xs={12} md={4}>
        <h4 className="my-2">Phone No:</h4>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Mollitia eaque commodi suscipit aliquid, dolor maxime iusto. Corporis 
            inventore officiis perspiciatis minus laudantium hic eos, 
            iste id impedit libero doloremque expedita.
            </span>
        </Col>
        <Col xs={12} md={4}>
        <h4 className="my-2">Social Network:</h4>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Mollitia eaque commodi suscipit aliquid, dolor maxime iusto. Corporis 
            inventore officiis perspiciatis minus laudantium hic eos, 
            iste id impedit libero doloremque expedita.
            </span>
        </Col>
      </Row>
      </Container>
    </Wrapper>
  )
}

export default Footer
