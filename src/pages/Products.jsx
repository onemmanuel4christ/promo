import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import '../components/Products.css'

const Title = styled.h3`
  color: #002E25;
  font-weight: 800;
  font-size: 2rem;
  margin-bottom: 10px;
  text-transform: capitalize;
`

const ImgWrap = styled.div`
  width: 100%;
  margin: 0 auto;
`
const Review = styled.span`
  margin: 10px 0;
`

const Price = styled.p`
  margin-top: 20px;
  color: red;
  font-weight: 800;
  font-size: 20px;
`
const Description = styled.p`
  color: #002E25;
  font-weight: 400;
  font-size: 14px;
  text-align: justify;
  margin-top: 10px;
     display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
     overflow: hidden;
`
const QtyHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  input{
    outline: none;
    font-size: 14px;
    font-weight: 400;
  }
`
const Size = styled.select`
    outline: none;
    
`
const Quantity = styled.select`
 outline: none;
`

const CartBtn = styled.button`
  float: right;
  border: 0;
  outline: none;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #002E25;
  color: #FFF;
  font-weight: 500;
  font-size: 16px;
  margin-top: 20px;
`
const Products = () => {
  return (
    <Container className="my-5 product">
      <Row noGutters >
        <Col xs={12} md={5}>
          <ImgWrap>
            <img src="./images/pic4.jpg" alt="" className="product__img" />
          </ImgWrap>
        </Col>
        <Col xs={12} md={7}>
            <div>
              <Title> Odogwu bitters</Title>
              <Review>⭐⭐⭐⭐⭐ (Review)</Review>
              <Description>
              Odogwu bitters is a herbal drink which contain Ancient herbal mixture which also contains Honey and ginger. 
              This recipe has been trusted and proven to guarantee a fast and efficient result in the body.  Odogwu bitters is a herbal drink which contain Ancient herbal mixture which also contains Honey and ginger. 
              This recipe has been trusted and proven to guarantee a fast and efficient result in the body  Odogwu bitters is a herbal drink which contain Ancient herbal mixture which also contains Honey and ginger. 
              This recipe has been trusted and proven to guarantee a fast and efficient result in the body
              This recipe has been trusted and proven to guarantee a fast and efficient result in the body  Odogwu bitters is a herbal drink which contain Ancient herbal mixture which also contains Honey and ginger. 
              This recipe has been trusted and proven to guarantee a fast and efficient result in the body
              </Description>
              <QtyHolder>
                <Size>
                  <option style={{width: '70%'}} value="1">Size</option>
                  <option style={{width: '70%'}} value="1">200ml </option>
                  <option style={{width: '70%'}} value="1">1000ml</option>
                </Size>
                <Quantity>
                  <option value="1">Type</option>
                  <option value="1">Bottle </option>
                  <option value="1">Cartons</option>
                </Quantity>
                <input type="number" placeholder="Write Qty" />
              </QtyHolder>
              <Price>Total Price: ₦7,000 : 00</Price>
              <CartBtn>Add to Cart</CartBtn>
            </div>
        </Col>
      </Row> 
    </Container>
  )
}

export default Products
