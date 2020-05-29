import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import MainNavbar from '../MainNavbar/mainNavbar';
import Footer from '../Footer/footer';
import Signup from '../Signup/signup';
import Presentation from '../Presentation/presentation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons'
import './style.css'

export default class Main extends Component {
    render() {
        return (
            <Router>

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

                        </Route>
                        <Route path="/inscription">

                        </Route>
                        <Route path="/contact">

                        </Route>
                    </Switch>
                </div>

                <Footer />
            </Router>

        )
    }
}
