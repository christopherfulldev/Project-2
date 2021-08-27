import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./index.css";

const Cards = (props) => {

const {name, released, rating, platforms, genres, background_image: image } = props;

    return (
      <div className="card-config elegantext container-fluid">
        <Container>
          <Row>
            <Card>
            <Card.Img variant="top" src= {image} className="img-config"/>
            <Card.Body>
                <Card.Title> <div className="card-titles"> Name: </div> {name} </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup> <div className="card-titles"> Platforms: </div> {platforms.map((el)=> el.platform.name)} </ListGroup>
                <ListGroup> <div className="card-titles"> Genres: </div> {genres.map((el)=> el.name)} </ListGroup>
                <ListGroup> <div className="card-titles"> Released: </div> {released} </ListGroup>
                <ListGroup> <div className="card-titles"> Rating: </div> {rating} </ListGroup>
            </ListGroup>
            </Card>
            </Row> 
        </Container>
      </div>
    );
  }

export default Cards;

// {props.gameList.results ? props.gameList.results.map((el)=>{
//   console.log(el)
//   return <Cards key={el.id} {...el}/>
// }): null}