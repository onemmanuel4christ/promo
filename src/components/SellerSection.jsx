import React from 'react'
import { Accordion } from 'react-bootstrap'
import styled from 'styled-components'

const Container = styled.div`
    /* height: calc(100vh - 100px); */
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
        <Title>Questions about Odogwu bitters</Title>
        <Hr className='mb-3'/>
        <Accordion>
          <Accordion.Item eventKey="0">
           <Accordion.Header> What does odogwu bitters work?</Accordion.Header>
            <Accordion.Body className='acc__body'>
              Odogwu Bitters is an energy booster which helps in increasing libido and provides antioxidant that aids the digestive 
              system of the body and can also fight flu and common cold.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
            Who is the real owner of odogwu bitters?
            </Accordion.Header>
            <Accordion.Body className='acc__body'>
                Obinna Iyiegbu, popularly known as Obi Cubana, has ventured into another line of business with the launch of Odogwu Bitters
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
            Is odogwu bitters an alcoholic drink?
            </Accordion.Header>
            <Accordion.Body className='acc__body'>
             Odogwu Bitters is a Herbal Alcoholic Drink that contains an Ancient Herbal Mix that also includes Honey and Ginger.
              This Recipe has been trusted and proven to guarantee a fast and efficient result in the body
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
            How do you drink odogwu bitters?
            </Accordion.Header>
            <Accordion.Body className='acc__body'>
                Odogwu bitter benefits:
                It contains an ancient herbal mix that also include honey and ginger. Ginger and honey also aid digestion thereby making Odogwu bitters a good drink after meal. 
              Ginger and honey helps in fighting inflammation in the body
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
            How much is odogwu bitter?
            </Accordion.Header>
            <Accordion.Body className='acc__body'>
            Its price ranges from N7,000 to N15,000 per carton. While a bottle of Odogwu bitters (200ml) is sold for about N3,000 (Three thousand Naira) in many shops in Nigeria.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>
            How many is odogwu bitters in carton?
            </Accordion.Header>
            <Accordion.Body className='acc__body'>
              24 ODOGWU BITTERS Alcoholic Drink 200ml - CARTON OF 24.
            </Accordion.Body>
          </Accordion.Item>
      </Accordion>
      </div>
    </Container>
  )
}

export default SellerSection
