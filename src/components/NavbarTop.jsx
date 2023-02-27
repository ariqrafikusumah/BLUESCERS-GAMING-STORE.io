import React from 'react'
import Logo from '../assets/img/logo-web.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavbarTop() {
  return (
    <>
      <div>
        {[false].map((expand) => (
          <Navbar key={expand} bg="" expand={expand} className=" border-gray-200 bg-blue-400 shadow-lg xl:px-52 lg:px-32">
            <Container fluid>
              <Navbar.Brand href="/"><img src={Logo} className="h-16 w-16 mr-3 sm:h-16 sm:w-16" alt="logo" /></Navbar.Brand>
              {/* <marquee className="xl:w-auto lg:w-auto md:w-auto sm:w-32 xs:w-32 xss:w-32 font-mono text-xl drop-shadow-xl bg-indigo-300 rounded-lg">Nikmati Bonus Diamonds Dan lain lain</marquee> */}
              <Navbar.Toggle className='border-3' aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                className="bg-blue-500"
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img src={Logo} className="h-12 w-14 mr-3 sm:h-12 sm:w-14" alt="logo" />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link className='text-black font-bold' href="/">Home</Nav.Link>
                    <Nav.Link className='text-black font-bold' href="/Tentang">Tentang</Nav.Link>
                    <Nav.Link className='text-black font-bold' href="/PrivacyPolicy">Privacy Policy</Nav.Link>
                    <Nav.Link className='text-black font-bold' href="/Terms">Terms &amp; Condition</Nav.Link>
                    {/* <Nav.Link href="/auth/Sign-in">Login</Nav.Link> */}
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  )
}

export default NavbarTop