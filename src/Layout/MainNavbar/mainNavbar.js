import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap';

export default class MainNavbar extends Component {
    render() {
        return (
            <div style={{ 'width': '100%' }}>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand><span className="textanimation">❖</span></Navbar.Brand>
                    <Link to="/" className="mr-auto orange unlink f4">N▲ISES</Link>
                    <Nav className="mr-sm-2">
                        <Link to="/connexion" className="signin black-70">Connexion</Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

