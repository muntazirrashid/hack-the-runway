import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';


let isRes = true;

function Header() {
  return (

    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/ws.png"
              width="120"
              style={{ transform: "scale(3.7)", marginLeft: "2.0 rem" }}
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <div>
            {
              isRes ? (<>
                <Button variant="dark" style={{ borderRadius: "0", marginRight: '50px' }}>&nbsp;&nbsp;&nbsp;&nbsp; Explore &nbsp;&nbsp;&nbsp;&nbsp;</Button>{' '}
                <Button variant="dark" style={{ borderRadius: "0", marginRight: '50px' }}>&nbsp;&nbsp;&nbsp;&nbsp; Create &nbsp;&nbsp;&nbsp;&nbsp;</Button>{' '}
                <Button variant="dark" style={{ borderRadius: "0", marginRight: '50px' }}>&nbsp;&nbsp;&nbsp;&nbsp; Account &nbsp;&nbsp;&nbsp;&nbsp;</Button>{' '}
              </>) : (<>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Explore</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Create
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Account</NavDropdown.Item>
                </NavDropdown>
              </>)}
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;