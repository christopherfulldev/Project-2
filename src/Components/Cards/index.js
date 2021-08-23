import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

const Cards = (props) => {

const {name, released, rating, platforms, genres, background_image: image } = props;

    return (
      <div>
            <Card style={{ width: '55vw', height:'20vw' }}>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                 <ListGroup>{platforms.map((el)=>{return el.platforms.name})}</ListGroup>
                <ListGroup>{genres.map((el)=>{return el.name})}</ListGroup> 
                <ListGroup>{released}</ListGroup>
                <ListGroup>{rating}</ListGroup>
            </ListGroup>
            </Card> 
      </div>
    );
  }

export default Cards;

// {props.gameList.results ? props.gameList.results.map((el)=>{
//   console.log(el)
//   return <Cards key={el.id} {...el}/>
// }): null}