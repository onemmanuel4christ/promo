import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import Subtotal from '../components/Subtotal'
import { useStateValue } from '../context/StateProvider'
import CartProducts from '../components/CartProducts'
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
    width: 100%;
    margin: 10px auto;
    object-fit: fill;
`
const Right = styled.div`
flex: 10;
`
const Checkout = () => {
  const [{basket}, dispatch] = useStateValue();

  return (
    <Container className='py-2'>
      
      <div>
        <Row>
            <Col xs={12} md={8}>
            <Image src="./images/banner.webp" alt="" />
            </Col>
            <Col xs={12} md={4}>
            <h5 className='my-2'>Your shopping basket</h5>
            </Col>
        </Row>
      </div>
        <Row noGutters >
            <Col xs={12} md={8}>
            <ImgWrap>
            <div>
               {basket.map(item =>(
                   <CartProducts 
                    id={item.id}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    rating={item.rating}
                        />
                    ))}
                </div>
            </ImgWrap>
            </Col>
           
            <Col xs={12} md={4} className="">
              <Subtotal />
            </Col>
        </Row>
    </Container>
  )
}

export default Checkout
