import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, DropdownButton, Dropdown } from 'react-bootstrap'
import { disconnectUser } from '../../reducers/MainReducer/main_reducer'
import search from '../../Assets/Images/search.svg'
import cx from 'classnames'

const MainNavbar = (props) => {

    const logout = () => {
        window.localStorage.clear()
        props.disconnectUser()
    }

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
                    <Link to="/connexion" className={cx("signin black-70 disable-select mh2", { "dn": props.connected })}>Connexion</Link>
                    <div className={props.connected ? "block" : "dn"}>
                        <Dropdown drop="left">
                            <Dropdown.Toggle variant="outline-danger" id="dropdown-basic">
                                <label style={{ width: '80px', height: '18px' }} className="signin black disable-select mh2">{props.user.username}</label>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Voir profile</Dropdown.Item>
                                <Dropdown.Item href="#">Paramétres</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#" onClick={logout}>Se déconnecter</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Nav>
            </Navbar>
        </div>
    )
}

const mapState = (state) => ({
    connected: state.mainReducer.connected,
    user: state.mainReducer.user,
})

const mapDispatch = (dispatch) => ({
    disconnectUser: () => { dispatch(disconnectUser()) }
})

export default connect(mapState, mapDispatch)(MainNavbar)

