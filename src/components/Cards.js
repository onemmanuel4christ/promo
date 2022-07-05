import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'
function Cards() {
  return (
    <Card style={{ width: '18rem', margin: "20px 0px" }}>
      <Card.Img variant="top" src="https://www.ideasthatwork.com.au/wp-content/uploads/2016/04/healthy-bodies.jpg" className="card-pic" />
      <Card.Body className='card__body'>
        <Card.Title className='h3 mb-2 pt-2 font-weight-bold'>Balance appetite</Card.Title>
        <Card.Text className="card__text mb-3 font-weight-light">
          Odogwu bitters is a herbal drink which contain Ancient herbal mixture which also contains Honey and ginger. 
          This recipe has been trusted and proven to guarantee a fast and efficient result in the body
        </Card.Text>
        <Button className='card__btn'>Read More...</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards
