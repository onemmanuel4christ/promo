import React from 'react'
import styled from 'styled-components'
import DistributorCard from './DistributorCard'
import Carousel from 'better-react-carousel'

const Container = styled.div`
    /* background-color: #ECECEC; */
    background-color: #002E25;
    padding: 20px;
`
const Hr = styled.div`
        width: 100px;
        height: 0;
        border: 2px solid #ECECEC;
        margin: 0 auto;
        background-color: #ECECEC; 
`
const Title = styled.h1`
    color: #ECECEC;
    font-size: 2.5rem;
    font-weight: 800;
    text-transform: capitalize;
    text-align: center;
    
`

const Distributors = () => {
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
