import "./index.css";
import "./imagelogo.jpg"
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'

const NavBar1 = () => {
  return(
    <>
        <Navbar bg= "light" expand= "lg" fill= "tabs">
        <Navbar.Brand href="#" className="gamehubspace titleclass">
        <img
          alt= ""
          src= "./imagelogo.jpg"
          width= "30"
          height= "30"
          className= "d-inline-block align-top"
        /> Game Hub </Navbar.Brand>
        <Navbar.Toggle aria-controls= "navbarScroll" />
        <Navbar.Collapse id= "navbarScroll">
          <Nav
            className= "mr-auto my-2 my-lg-0 navdirection"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Parceiros</Nav.Link>
            <Nav.Link href="#action2">Page2</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
            </NavDropdown>
          </Nav>
          <Form className= "d-flex">
            <FormControl
              type= "search"
              placeholder= "Search"
              className= "mr-2"
              aria-label= "Search"
            />
            <Button variant= "outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
 

export default NavBar1;