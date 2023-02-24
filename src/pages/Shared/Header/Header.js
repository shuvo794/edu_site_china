import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../images/YC.png";
import "./Header.css";
const Header = () => {
  return (
    <Navbar className="bg" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <img className="logo" src={logo} alt="logo" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex serch">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>

          <Nav.Link href="#action1" className="home">
            Home
          </Nav.Link>
          <NavDropdown title="Courses" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Courses</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Single Courses</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Instructor Profile
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Research" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Research 1</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Research 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Research 2</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Contuct" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Contuct 1</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Contuct 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Contuct 2</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
