import "./index.css";
import MicroCards from "../MicroCards/index";
import Card from 'react-bootstrap/Card';
import "./index.css";
import GetOnApi from "../../Services/Getonapi";

import ListGroup from 'react-bootstrap/ListGroup';
import {useEffect, useState} from "react";

const PageTree = (props) => {

    const {search} = props.match.params;
    const [cardInfo, setCardInfo] = useState({});
    const [microCardInfo, setMicroCardInfo] = useState([]);

    useEffect(async () => {
        const searchResult = await GetOnApi.getSearch(search);
        const {name, released, rating, platforms, genres, background_image: image} = searchResult.data.results[0];
        setCardInfo({name, released, rating, platforms, genres, image})
        const microCard = searchResult.data.results.slice(1, searchResult.data.results.length);
        setMicroCardInfo (microCard);
    }, []);

    return (
        <div className= "elegantext page-tree-style">
            <Card className= "card-style3" key={cardInfo.name}>
            <Card.Img variant="top" src={cardInfo.image}/>
            <Card.Body>
                <Card.Title>{cardInfo.name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className= "list-group-flush" key={1}>
            <ListGroup.Item>{cardInfo.platforms ? cardInfo.platforms[0].platform.name : null}</ListGroup.Item>
            <ListGroup.Item>{cardInfo.rating ? cardInfo.rating : null}</ListGroup.Item>
            <ListGroup.Item>{cardInfo.genres ? cardInfo.genres[0].name : null}</ListGroup.Item>
        </ListGroup>
            <Card.Body>
                <Card.Link href="#"></Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
            </Card>
            <MicroCards itens={microCardInfo} className= "micro-cards"/>
        </div>
    )
}

export default PageTree;