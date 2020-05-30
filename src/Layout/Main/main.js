import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import MainNavbar from '../MainNavbar/mainNavbar';
import Footer from '../Footer/footer';
import Signup from '../../Module/Signup/signup';
import Presentation from '../../Module/Presentation/presentation';
import Inscription from '../../Module/Inscription/inscription';
import Connexion from '../../Module/Connexion/connexion';
import Contact from '../../Module/Contact/contact';
import Dashboard from '../../Module/Dashboard/dashboard';
import Profile from '../../Module/Profile/profile';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons'
import './style.css'

export default class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="row ma0 pa0 shadow-3 fixed" style={{ 'width': '100%', 'zIndex': '10' }}>
                        <MainNavbar />
                    </div>

                    <div className="mainApp">
                        <Switch>
                            <Route exact path="/">
                                <div>
                                    <div className="row ma0 pa0" style={{ 'width': '100%' }}>
                                        <Signup />
                                        <Presentation />
                                    </div>
                                </div>
                            </Route>
                            <Route path="/connexion">
                                <Connexion />
                            </Route>
                            <Route path="/inscription">
                                <Inscription />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/dashboard">
                                <Dashboard />
                            </Route>
                            <Route path="/profile">
                                <Profile />
                            </Route>
                        </Switch>
                    </div>

                    <Footer />
                </div>
            </Router>

        )
    }
}
