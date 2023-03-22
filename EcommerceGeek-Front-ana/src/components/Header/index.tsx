import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Navbar className="p-2">
        <Container className="m-2" fluid>
          <Navbar.Brand href="/home">
            <h3>GeekStore</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home">
                <h6>Home</h6>
              </Nav.Link>
              <Nav.Link href="/produtos">
                <h6>Produtos</h6>
              </Nav.Link>
            </Nav>
            <Button href="/login" variant="dark">
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
}
