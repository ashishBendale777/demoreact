import React from 'react'
import { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyOffcanvas = () => {

    const [showCanvas, setshowCanvas] = useState(false)



    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand onClick={() => setshowCanvas(true)}>Cafe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>
            </Navbar>
            <Offcanvas show={showCanvas} onHide={() => setshowCanvas(false)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="d-flex flex-column">
                        <Nav.Link onClick={()=>setshowCanvas(false)}>
                            <Link to='/'>Home</Link>
                        </Nav.Link>
                        <Nav.Link onClick={()=>setshowCanvas(false)}>
                            <Link to='/about'>About</Link>
                        </Nav.Link>
                        <Nav.Link onClick={()=>setshowCanvas(false)}>
                            <Link to='/contact'>Contact Us</Link>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default MyOffcanvas