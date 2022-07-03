import dota from './1.jpg'
import food from './2.jpg'
import kdrama from './3.jpg'
import img from './img1.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown, Carousel } from 'react-bootstrap';

const App = () => {
  return (
    <>
    {/* Navbar */}
    <Navbar bg="dark" variant="dark" className="bg-bg">
      <Container>
      <img
        src={img}
        className="img-size"
        alt="img"
      />{ }
        <span className="h5 pt-1"> Raymart Victoriano </span>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Passions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Playing Video Games</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Watching Food Vlogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Watching Korean Drama</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* Carousel */}
    <div>
      <Carousel variant="light">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={dota}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Playing Video Games</h5>
            <p>I'm playing video games because it makes me excited and relax at the same time.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={food}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Waching Food Vlog</h5>
            <p>I'm watching food vlog because I want to learn some techniques on how to cook differebt.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={kdrama}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Watching K-Drama</h5>
            <p>I'm watching k-drama because it's not broing, they have a lot of genre interms of drama and movies.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  );
}

export default App;
