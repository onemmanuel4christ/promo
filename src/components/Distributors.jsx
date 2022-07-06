import React from 'react'
import styled from 'styled-components'
import DistributorCard from './DistributorCard'
import Carousel from 'better-react-carousel'

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

const Distributors = () => {
    const n = 8;
      return (
    <Container>
      <Title>Meet our distributors</Title>
      <Hr />
        <Carousel cols={4} rows={1} gap={10} loop>
        { [...Array(60)].map( ( el, i) => (              
            <Carousel.Item key={i}>
                    <DistributorCard />
            </Carousel.Item>
                    
        ) ) }
        </Carousel>       
    </Container>
  )
}
export default Distributors
