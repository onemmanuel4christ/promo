import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'
import { Row, Col } from 'react-bootstrap'


const Container = styled.div`
    background-color: #ECECEC;
    padding: 20px;
`
const Hr = styled.div`
        width: 100px;
        height: 0;
        border: 2px solid #002E25;
        margin: 0 auto;
        background-color: #002E25; 
`
const Title = styled.h1`
    color: #002E25;
    font-size: 2.5rem;
    font-weight: 800;
    text-transform: capitalize;
    text-align: center;
    
`

const Description = () => {
  return (
    <Container>
      <Title>Why you need Odogwu Bitters!</Title>
      <Hr />
      <Row>
        <Col><Cards /></Col>
        <Col><Cards /></Col>
        <Col><Cards /></Col>
        <Col><Cards /></Col>
      </Row>
    </Container>
  )
}

export default Description
