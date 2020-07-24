import React, { lazy, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import MainNavbar from '../MainNavbar/mainNavbar'
import Footer from '../Footer/footer'
import Signup from '../../Module/Signup/signup'
import Presentation from '../../Module/Presentation/presentation'
import Loading from '../Loading/loading';

const Inscription = lazy(() => import('../../Module/Inscription/inscription'));
const Connexion = lazy(() => import('../../Module/Connexion/connexion'));
const Contact = lazy(() => import('../../Module/Contact/contact'));
const Dashboard = lazy(() => import('../../Module/Dashboard/dashboard'));
const Profile = lazy(() => import('../../Module/Profile/profile'));

import { AppContext, InitState } from '../../State/initState'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'tachyons'
import './style.css'

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

const Main = () => {

    return (
        <AppContext.Provider value={InitState}>
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
                                <Suspense fallback={<Loading />}>
                                    <Connexion />
                                </Suspense>
                            </Route>
                            <Route path="/inscription">
                                <Suspense fallback={<Loading />}>
                                    <Inscription />
                                </Suspense>
                            </Route>
                            <Route path="/contact">
                                <Suspense fallback={<Loading />}>
                                    <Contact />
                                </Suspense>
                            </Route>
                            <Route path="/dashboard">
                                <Suspense fallback={<Loading />}>
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
                                </Suspense>
                            </Route>
                            <Route path="/profile">
                                <Suspense fallback={<Loading />}>
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
                                </Suspense>
                            </Route>
                        </Switch>
                    </div>

                    <Footer />
                </div>
            </Router>
        </AppContext.Provider>
    )
}

export default Main