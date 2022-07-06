import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled.div`
    height: calc(100vh - 100px);
    background-color: #002E25; 
    color: #FFF;
    padding: 20px 0;
`
const Hr = styled.div`
        width: 100px;
        height: 0;
        border: 2px solid #FFF;
        margin: 0 auto;
        background-color: #FFF;
      
`
const Title = styled.h1`
    color: #FFF;
    font-size: 2.5rem;
    font-weight: 800;
    text-transform: capitalize;
    text-align: center;
`

const SellerSection = () => {
  return (
    <Container>
      <div className='container'>
        <Title>Contents of Odogwu Bitters</Title>
        <Hr />
        <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0">
          <Col xs={12} md={6} >
              <p>Left</p>
          </Col>
          <Col xs ={12} md={6}>
              <p>Right</p>
          </Col>
     </Row>
      </div>
    </Container>
  )
}

export default SellerSection
