import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, FormControl, Form } from 'react-bootstrap';
import search from '../../Assets/Images/search.svg'

export default class MainNavbar extends Component {
    render() {
        return (
            <div style={{ 'width': '100%' }}>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand><span className="textanimation disable-select">❖</span></Navbar.Brand>
                    <Link to="/" className="mr-auto orange unlink f5 disable-select">N<span style={{ 'fontSize': '1.25rem' }}>▲</span>ISES</Link>
                    <Form style={{ 'marginRight': 'auto' }}>
                        <input placeholder="Rechercher un profil" className="ba b--black-20 pa2 mh3 searchInp" type="text" style={{ 'width': '300px', 'display': 'inline' }}></input>
                        <img src={search} style={{ 'width': '25px', 'height': '25px' }} className="disable-select pointer searchButton grow" onClick={() => console.log("a")} />
                    </Form>
                    <Nav className="mr-sm-2">
                        <Link to="/connexion" className="signin black-70 disable-select">Connexion</Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

