import React from 'react'
import { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { MdMapsHomeWork } from 'react-icons/md'
import Home from './Home'
import About from './About'
import Contact from './Contact'
const MyOffcanvas = () => {

    const [showCanvas, setshowCanvas] = useState(false)
    const [currentLoc, setCurrentLoc] = useState("")


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
                        <Nav.Link onClick={() => {
                            setshowCanvas(false)
                            setCurrentLoc(window.location.href.split('/')[3])
                        }}>
                            <MdMapsHomeWork size={26} className='mr-3' color={currentLoc === '' ? 'red' : "blue"} />
                            <Link to='/app/home'>Home</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => {
                            setCurrentLoc(window.location.href.split('/')[3])
                            setshowCanvas(false)
                        }}>
                            <MdMapsHomeWork size={26} className='mr-3' color={currentLoc === 'about' ? 'red' : "blue"} />
                            <Link to='/app/about'>About</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => {
                            setCurrentLoc(window.location.href.split('/')[3])
                            setshowCanvas(false)
                        }}>
                            <MdMapsHomeWork size={26} className='mr-3' color={currentLoc === 'contact' ? 'red' : "blue"} />
                            <Link to='/app/contact'>Contact Us</Link>
                        </Nav.Link>

                        <Nav.Link>
                            <Link to="/">Logout</Link>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
            <Outlet />
            {console.log("LOCARION", window.location.href.split('/')[3])}
        </div>
    )
}

export default MyOffcanvas