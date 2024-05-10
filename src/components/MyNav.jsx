import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import logo from "../assets/logo/logo.png";
import { useState } from "react";
import { searchSongsAction } from "../redux/actions";
import { useDispatch } from "react-redux";

const MyNav = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(searchSongsAction(query));
  };

  return (
    <Navbar className=" fixed-left justify-content-between" id="sidebar">
      <Container className="flex-column align-items-start">
        <Nav.Link className="navbar-brand" href="index.html">
          <img src={logo} alt="Spotify Logo" width="131" height="40" />
        </Nav.Link>
        <Navbar.Collapse
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <Nav className="flex-column">
            <Nav.Link className=" d-flex  align-items-center" href="#">
              <i className="bi bi-house-door-fill"></i>&nbsp; Home
            </Nav.Link>

            <Nav.Link
              className="nav-item nav-link d-flex align-items-center"
              href="#"
            >
              <i className="bi bi-book-fill"></i>&nbsp; Your Library
            </Nav.Link>

            <InputGroup className=" mt-3">
              <Form className="d-flex" onSubmit={handleSubmit}>
                <Form.Control
                  className="rounded-0"
                  type="search"
                  value={query}
                  onChange={handleChange}
                  placeholder="Search"
                />

                <div className="input-group-append">
                  <Button
                    variant="black"
                    className=" btn-outline-secondary btn-sm h-100"
                  >
                    GO
                  </Button>
                </div>
              </Form>
            </InputGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className="nav-btn">
        <Button className="signup-btn" type="button">
          Sign Up
        </Button>
        <Button className="login-btn" type="button">
          Login
        </Button>
        <div className="d-flex justify-content-center">
          <Nav.Link href="#">Cookie Policy</Nav.Link> |
          <Nav.Link href="#"> Privacy</Nav.Link>
        </div>
      </div>
    </Navbar>
  );
};

export default MyNav;
