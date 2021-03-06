import "./index.css";
import Logo from "./imagelogo.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from "react-router-bootstrap";
import { NavItem } from "react-bootstrap";
import {useState, useEffect} from "react";
import GetOnApi from "../../Services/Getonapi";
import { useHistory } from "react-router";

const NavBar1 = (props) => {
  const [showButton, setShowButton] = useState(true)
  const [inputContent, setInputContent] = useState("");
   const history = useHistory();
   const handleSubmit = async (event) => {
   event.preventDefault();
   history.push(`/game-list/description/${inputContent}`);
  }

  useEffect(() => {
    console.log(history)
    history.listen(() => {
    const hiddeButton = history.location.pathname =="/" ? true : false;
    setShowButton(hiddeButton);     
    })
  }, []);
  
  const handleChange = (event) => {
    setInputContent(event.target.value);
  }


  return(
    <>
        <Navbar bg= "light" expand= "lg" fill= "tabs">
        <Navbar.Brand href= "#" className= "gamehubspace titleclass">
        <img
          alt= "logo"
          src= {Logo}
          width= "75vw"
          height= "75vw"
          className= "d-inline-block align-center"
        /> GameHub </Navbar.Brand>
        <Navbar.Toggle aria-controls= "navbarScroll" />
        <Navbar.Collapse id= "navbarScroll">
          <Nav
            className= "mr-auto my-2 my-lg-0 navdirection"
            style={{ maxHeight: '100vw' }}
            navbarScroll
          >
          {/* <LinkContainer to="/">
            <NavItem>Parceiros</NavItem>
          </LinkContainer>  */}
          <LinkContainer to= "/game-list"> 
            <NavItem>
            {showButton &&  <Button variant="dark" 
              size= "lg" 
              className= "button-position">Let's Go!!!
              </Button> } 
            </NavItem>
          </LinkContainer>
            <NavDropdown title= "Link" id= "navbarScrollingDropdown">
            </NavDropdown>
          </Nav>
          <Form className= "d-flex" onSubmit={handleSubmit}>
            <FormControl
              type= "search"
              placeholder= "Search"
              className= "mr-2"
              aria-label= "Search"
              onChange= {handleChange}
            />
            <Button variant= "outline-success" type= "submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
 

export default NavBar1;
