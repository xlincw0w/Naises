import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


import MainNavbar from '../MainNavbar/mainNavbar'
import Footer from '../Footer/footer'
import Signup from '../../Module/Signup/signup'
import Presentation from '../../Module/Presentation/presentation'

// const Inscription = React.lazy(() => import('../../Module/Inscription/inscription'));

import Inscription from '../../Module/Inscription/inscription'
import Connexion from '../../Module/Connexion/connexion'
import Contact from '../../Module/Contact/contact'
import Dashboard from '../../Module/Dashboard/dashboard'
import Profile from '../../Module/Profile/profile'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'tachyons'
import './style.css'

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

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
                                <Dashboard
                                    feed={
                                        [
                                            {
                                                type: 'note',
                                                date: '4 min',
                                                name: 'khazem',
                                                firstname: 'khaled',
                                                text: 'Demain le cours aura lieu a 8h au lieu de 9H30.'
                                            },
                                            {
                                                type: 'note',
                                                date: '17 min',
                                                name: 'khazem',
                                                firstname: 'khaled',
                                                text: 'Demain le cours aura lieu a 10h au lieu de 9H30.'
                                            },
                                            {
                                                type: 'action',
                                                date: '24 min',
                                                name: 'khazem',
                                                firstname: 'sabrina',
                                                text: "a ajouté un cours a 'Ingenieur System d'information'"
                                            },
                                            {
                                                type: 'note',
                                                date: '2 h',
                                                name: 'hadbi',
                                                firstname: 'mouloud',
                                                text: 'la gréve de demain est annulé merci de vous présenté au cours'
                                            },
                                            {
                                                type: 'action',
                                                date: '3 j',
                                                name: 'khazem',
                                                firstname: 'sabrina',
                                                text: "a ajouté un cours a 'Ingenieur System d'information'"
                                            },
                                        ]
                                    }
                                />
                            </Route>
                            <Route path="/profile">
                                <Profile
                                    data={{
                                        userType: 'enseignant',
                                        name: 'khazem',
                                        firstname: 'khaled',
                                        username: 'khaled.khazem',
                                        university: 'mouloud mammeri',
                                        city: 'tizi-ouzou'
                                    }}

                                    feed={
                                        [
                                            {
                                                type: 'note',
                                                date: '4 min',
                                                name: 'khazem',
                                                firstname: 'khaled',
                                                text: 'Demain le cours aura lieu a 8h au lieu de 9H30.'
                                            },
                                            {
                                                type: 'note',
                                                date: '17 min',
                                                name: 'khazem',
                                                firstname: 'khaled',
                                                text: 'Demain le cours aura lieu a 10h au lieu de 9H30.'
                                            },
                                            {
                                                type: 'action',
                                                date: '24 min',
                                                name: 'khazem',
                                                firstname: 'khaled',
                                                text: "a ajouté un cours a 'Ingenieur System d'information'"
                                            },
                                        ]
                                    }
                                />
                            </Route>
                        </Switch>
                    </div>

                    <Footer />
                </div>
            </Router>

        )
    }
}
