import React from 'react'
import Products from '../components/Products'
import { Row, Col } from 'react-bootstrap'

const Collection = () => {
  return (
    <div className='container'>
      <Row>
        <Col>
            <Products 
                id={1}
                img="./images/pic4.jpg"
                title="Odogwu Bitters 200ml"
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore soluta, 
                Soluta facere nemo quod obcaecati impedit suscipit veritatis minima unde, hic eius vitae."
                rating={5}
                price={1499.99}
            />
        </Col>
        <Col>
            <Products 
                id={2}
                img="./images/pic5.webp"
                title="Odogwu Bitters 500ml"
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore soluta, 
                Soluta facere nemo quod obcaecati impedit suscipit veritatis minima unde, hic eius vitae."
                rating={4}
                price={2999.99}
            />
        </Col>
        <Col>
            <Products 
                id={3}
                img="./images/pic2.jpg"
                title="Odogwu Bitters 1000ml"
                desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore soluta, 
                Soluta facere nemo quod obcaecati impedit suscipit veritatis minima unde, hic eius vitae."
                rating={3}
                price={14999.99}
            />
        </Col>
      </Row>
    </div>
  )
}

export default Collection
