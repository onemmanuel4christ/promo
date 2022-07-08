import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useStateValue } from '../context/StateProvider';

const Products = ({id, img, title, desc, rating, price}) => {
  const [{ basket }, dispatch] = useStateValue()

  console.log("this is basket ", basket)
  const addToBasket = () =>{
      dispatch({
        type: "ADD_TO_BASKET",
        item:{
          id,
          img,
          title,
          desc,
          rating,
          price
        },
      })
  }
  return (
    <Card style={{ width: '18rem', margin: "20px 0px" }} >
     <Card.Img variant="top" src={img} className="card-pic" />
     <Card.Body className='card__body'>
     <Card.Title className='h3 mb-2 pt-2 font-weight-bold'>{title}</Card.Title>
       <Card.Text className="card__text mb-3 font-weight-light card__info">{desc}</Card.Text>
       <div className='d-flex justify-content-between'>
          <div className='d-flex'>
          {Array(rating).fill().map((_, i) =>(
            <p>⭐</p>
          ))}
          </div>
          <div>
            <small>₦</small>
            <strong>{price}</strong>
          </div>
       </div>
       <Button className='card__btn' onClick={addToBasket}>Add to Cart</Button>
     </Card.Body>
   </Card>
  )
}

export default Products
