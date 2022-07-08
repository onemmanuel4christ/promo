import React from 'react'
import styled from 'styled-components'
import { Row, Col, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios';
import './Card.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Wrapper = styled.div`
    background-color: #ECECEC;
    padding: 20px 30px;
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
  const [data, setData ] = useState([])
  const [loading, setLoading ] = useState(false)

  const fetchdata = async() =>{
    setLoading(true)
    await axios.get('https://odogwu-api.herokuapp.com/benefits').then((response) => {
      setData(response.data);
      setLoading(false)
      console.log(data)
    });
  }

  useEffect(() => {
    fetchdata()
 }, []);

  return (
    <Wrapper>
      <Title>Why you need Odogwu Bitters!</Title>
      <Hr />
        <Row>
        {data.map((item, idx) =>(
          <Col>
          <Card style={{ width: '18rem', margin: "20px 0px" }} >
                <Card.Img variant="top" src={item.img_url} className="card-pic" key={item.id} />
                <Card.Body className='card__body'>
                  <Card.Title className='h3 mb-2 pt-2 font-weight-bold'>{item.title}</Card.Title>
                  <Card.Text className="card__text mb-3 font-weight-light card__info">
                  {item.description}
                  </Card.Text>
                  <Button className='card__btn'>Read More...</Button>
                </Card.Body>
              </Card>
          </Col>
              ))}
        </Row>
    </Wrapper>
  )
}

export default Description
