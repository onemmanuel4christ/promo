import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'
import { useState, useEffect } from 'react'
import axios from 'axios';

function Cards() {
  const [data, setData ] = useState([])
  const [loading, setLoading ] = useState(false)

  const fetchdata = async() =>{
    setLoading(true)
    await axios.get('http://localhost:3500/benefits').then((response) => {
      setData(response.data);
      setLoading(false)
      console.log(data)
    });
  }

  useEffect(() => {
    fetchdata()
 }, []);

  return (
  <Card style={{ width: '18rem', margin: "20px 0px" }} >
   {data.map((item, idx) =>(
    <>
    <Card.Img variant="top" src={item.img_url} className="card-pic" key={item.id} />
    <Card.Body className='card__body'>
      <Card.Title className='h3 mb-2 pt-2 font-weight-bold'>{item.title}</Card.Title>
      <Card.Text className="card__text mb-3 font-weight-light card__info">
      {item.description}
      </Card.Text>
      <Button className='card__btn'>Read More...</Button>
    </Card.Body>
  </>
   ))}
  </Card>

  );
}

export default Cards
