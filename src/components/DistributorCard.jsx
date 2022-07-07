import Card from 'react-bootstrap/Card';
import './Card.css'
function DistributorCard() {
  return (
    <Card style={{ width: '18rem', margin: "20px 0px" }}>
      <Card.Img variant="top" src="https://www.ideasthatwork.com.au/wp-content/uploads/2016/04/healthy-bodies.jpg" className="card-pic" />
      <Card.Body className='card__body'>
        <Card.Title className='h3 mb-2 pt-2 font-weight-bolder text-center'>John Doe</Card.Title>
        <Card.Text className="card__text mb-3 font-weight-light">
         <div> <strong>Address: </strong>Atabara St, Wuse 904101, Abuja</div>
         <div> <strong>State: </strong>FCT-ABUJA</div>
         <div> <strong>Phone: </strong>0803 338 5836</div>
         <div> <strong>Open-Hours: </strong>8Am - 6PM Daily except on Sunday</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DistributorCard


