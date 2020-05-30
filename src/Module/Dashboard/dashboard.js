import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu'

import './dashboard.css'

class Dashboard extends React.Component {
    showSettings(event) {
        event.preventDefault();

    }

    render() {
        return (
            <Menu>
                <div className="outline-none" style={{'marginLeft': '20px'}}>
                    <Link to="/" className="orange unlink f2 disable-select">N<span className="outline-none" style={{ 'fontSize': '2.4rem' }}>▲</span>ISES</Link>

                </div>
                <div className="mt5">
                    <div>
                        <Navbar.Brand><span className="textanimation disable-select db f3">❖</span></Navbar.Brand>
                        <Link to="/connexion" className="outline-none signin white-80 disable-select mv4">Creer module</Link>
                    </div>
                    <div>
                        <Navbar.Brand><span className="textanimation disable-select db f3">❖</span></Navbar.Brand>
                        <Link to="/connexion" className="outline-none signin white-80 disable-select mv4">Nouvelle annonces</Link>
                    </div>
                    <div>
                        <Navbar.Brand><span className="textanimation disable-select db f3">❖</span></Navbar.Brand>
                        <Link to="/connexion" className="outline-none signin white-80 disable-select mv4">Vos modules</Link>
                    </div>
                    <div>
                        <Navbar.Brand><span className="textanimation disable-select db f3">❖</span></Navbar.Brand>
                        <Link to="/connexion" className="outline-none signin white-80 disable-select mv4">Vos etudiants</Link>
                    </div>
                    <div>
                        <Navbar.Brand><span className="textanimation disable-select db f3">❖</span></Navbar.Brand>
                        <Link to="/connexion" className="outline-none signin white-80 disable-select mv4">Paramétres</Link>
                    </div>
                    <div>
                        <Navbar.Brand><span className="textanimation disable-select db f3">❖</span></Navbar.Brand>
                        <Link to="/connexion" className="outline-none signin white-80 disable-select mv4">Déconnexion</Link>
                    </div>
                </div>

            </Menu>
        );
    }
}

export default Dashboard;