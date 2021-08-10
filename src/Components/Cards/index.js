import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { Button } from 'reactstrap';

import newRequestGames from "../../Services/Apirequest";


const Cards = () => {

 // const {name, release, ratings, platforms, genres, } = games;

    return (
      <div>
            <Card style={{ width: '55vw', height:'20vw' }}>
            <Card.Img variant="top" src="/public/download.jpeg"/>
            <Card.Body>
                <Card.Title>Olá</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup>Plataforms:</ListGroup>
                <ListGroup>Dapibus ac facilisis in</ListGroup>
                <ListGroup>Vestibulum at eros</ListGroup>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">
                <ButtonGroup>
                <Button>Olá</Button>
                </ButtonGroup>
                </Card.Link>
                <Card.Link href="#"></Card.Link>
            </Card.Body>
            </Card> 
      </div>
    );
  }

export default Cards;