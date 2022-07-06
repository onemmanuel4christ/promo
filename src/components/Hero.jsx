import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import styled from 'styled-components'


const Image = styled.img`
    width: 90%;
    height: 70vh;
    object-fit: cover;
    border-radius: 5px;
    
`
const BuyButton = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    border-radius: 25px;
    padding: 10px 0;
    font-size: 1.2rem;
    font-weight: 500;
    bottom: 10px;
    border: 2px solid #FFF;
    outline: none;
    margin: 20px auto;
    cursor: pointer;
    :hover{
        background-color: #FFF;
        color: #002E25;
        transition: all 1.5s ease;
    }
`

const Main = styled.main`
     background-color: #002E25;
`
const Text = styled.h4`
        font-size: 2.7rem;
        color: #FFF;
        text-transform: capitalize;
        font-weight: 900;
    `
const Description = styled.p`
    color: #ddd2d2;
    font-size: 1em;
    line-height: 28px;
    text-align: justify;
`
const Hero = () => {
  return (
    <Main className="py-3 px-2">
<Container fluid className="px-0" >
      <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0">
        <Col xs={12} md={5}>
        <Text className='text-left text-white'>Odogwu Bitters Herbal Alcoholic Drink</Text>
        <Description>
            Odogwu Bitters is an energy booster which helps in increasing libido and provides antioxidant 
            that aids the digestive system of the body and can also fight flu and common cold.
            It contains an ancient herbal mix that also include honey and ginger. 
            Ginger and honey also aid digestion thereby making Odogwu bitters a good drink after meal. 
            Ginger and honey helps in fighting inflammation in the body.
            Alot of brand ambassadors which included famous actor Zubby Micheal and music street mover,
            Portable, otherwise known as ZAZU, and actor Alex Okubo, others as MrJollof and Broda Shaggi all 
            showed massive support for ODOGWU Bitters and were unveiled at the eventOdogwu bitters have 30% alcohol and offer a unique taste ...
        </Description>
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
