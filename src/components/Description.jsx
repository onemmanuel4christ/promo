import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'
import { Row, Col } from 'react-bootstrap'


const Container = styled.div`
    /* height: calc(100vh - 100px); */
    background-color: #002E25;
    padding: 20px;
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

const Description = () => {
  return (
    <Container>
      <Title>Why you need Odogwu Bitters?</Title>
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
