import './index.css';

import {Row, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const MicroCards = (props) => {
  return (
    <>
        <Row xs={1} md={2} className="g-4 micro-card-style">
  {Array.from({ length: 8 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This
          </Card.Text>
          <Card.Text>
            This
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </>
  )
}

export default MicroCards;