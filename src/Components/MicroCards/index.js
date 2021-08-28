import './index.css';

import {Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const MicroCards = (props) => {
  
  return (

    <>
        <Row xs={1} md={2} className="g-4 micro-card-style">
  {props.itens ? props.itens.map((item, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.genres[0].name}
          </Card.Text>
          <Card.Text>
            {item.rating}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )): null}
</Row>
    </>
  )
}

export default MicroCards;