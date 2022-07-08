import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  gap: 10px;
  background-color: #e7e2e2;
  border-radius: 5px;
`
const Image = styled.img`
    height: 100px;
    width: 80px;
    margin: 10px auto;
`
const Right = styled.div`
flex: 10;
`
const Checkout = () => {
  return (
    <Container className='py-5'>
      <h2 className='my-3'>Your shopping basket</h2>
      <div>
        <Row>
            <Col xs={12} md={4}>
            <Image src="./images/pic4.jpg" alt="" />
            </Col>
            <Col xs={12} md={8}>
           <h3>Odogwu Bitters Alcoholic Drink 200ml </h3>
            </Col>
        </Row>
      </div>
        <Row noGutters >
            <Col xs={12} md={9}>
            <ImgWrap>
                 <Right>
                    <Row>
                      <Col><strong>Qty</strong></Col>  
                      <Col><strong>Type</strong></Col>  
                      <Col><strong>Unit Amount</strong></Col>  
                      <Col><strong>Total Amount</strong></Col>  
                    </Row>  
                    <Row className='my-5' >
                      <Col>
                      <span>
                            <button>-</button>{" "} 20 {" "} <button>+</button>
                      </span> 
                        </Col>  
                      <Col>Cartons</Col>  
                      <Col>₦1500</Col>  
                      <Col>₦30,000</Col>  
                    </Row>
                   
                </Right>
            </ImgWrap>
            </Col>
            <Col xs={12} md={3} className="">
                      <span className='text-red'>
                      <strong>Grand Total: ₦30,000 </strong>  
                    </span>
            <Button variant='primary' className='my-5'>Proceed to payment</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default Checkout
