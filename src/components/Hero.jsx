import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import styled from 'styled-components'


const Image = styled.img`
    width: 100%;
    height: 400px;
    object-fit: fill;
    
`
const BuyButton = styled.div`
    width: fit-content;
    padding: 10px 20px;
    background-color: #002E25;
    color: #ffff;
    border-radius: 25px;
    font-size: 1.2rem;
    font-weight: 500;
    bottom: 10px;
    border: 0;
    outline: none;
    margin: 20px;

`

const Main = styled.main`
     background-color: #ECECEC;
`
const Text = styled.h4`
        font-size: 2.7rem;
        color: #002E25;
        text-transform: capitalize;
        font-weight: 900;
    `

const Hero = () => {
  return (
    <Main className="py-3 px-2">
<Container fluid className="px-0" >
      <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0">
        <Col xs={12} md={5}>
        <Text className='text-left'>Odogwu Bitters Herbal Alcoholic Drink</Text>
        <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque at tenetur 
            illum dolorum tempora eos dicta consequatur
            voluptatum inventore culpa quo iste quis autem, impedit quidem quasi, eum nulla ut.
        </span>
        <BuyButton>BUY NOW</BuyButton>
        </Col>
        <Col xs ={12} md={7}>
        <Carousel
          interval={1500}
          indicators={false}
        >
            <Carousel.Item>
                <Image
                className="d-block w-100"
                src="./images/pic1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                {/* <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="./images/pic2.jpg"
                    alt="First slide"
                />

                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="./images/pic4.jpg"
                    alt="First slide"
                    />

                <Carousel.Caption>
            
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                className="d-block w-100"
                src="./images/pic1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="./images/pic2.jpg"
                    alt="First slide"
                />

                <Carousel.Caption>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="./images/pic4.jpg"
                    alt="First slide"
                    />

                <Carousel.Caption>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="./images/pic6.jfif"
                    alt="First slide"
                    />

                <Carousel.Caption>
             
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="./images/pic7.jpg"
                    alt="First slide"
                    />

                <Carousel.Caption>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                className="d-block w-100"
                src="./images/pic1.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
               
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="./images/pic2.jpg"
                    alt="First slide"
                />

                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="./images/pic4.jpg"
                    alt="First slide"
                    />

                <Carousel.Caption>
              
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                    className="d-block w-100"
                    src="./images/pic8.jpg"
                    alt="First slide"
                    />

                <Carousel.Caption>
               
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Col>
     </Row>
    </Container>
    </Main>
    
  )
}

export default Hero
