import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: calc(100vh - 100px);
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

const SellerSection = () => {
  return (
    <Container>
      <Title>Make money by selling Odogwu Bitters?</Title>
      <Hr />
    </Container>
  )
}

export default SellerSection
