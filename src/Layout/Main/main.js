import React, { lazy, Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import MainNavbar from '../MainNavbar/mainNavbar'
import Footer from '../Footer/footer'
import Signup from '../../Module/Signup/signup'
import Presentation from '../../Module/Presentation/presentation'
import Loading from '../Loading/loading'

const Inscription = lazy(() => import('../../Module/Inscription/inscription'))
const Connexion = lazy(() => import('../../Module/Connexion/connexion'))
const Contact = lazy(() => import('../../Module/Contact/contact'))
const Dashboard = lazy(() => import('../../Module/Dashboard/dashboard'))
const Profile = lazy(() => import('../../Module/Profile/profile'))

import { loadUserWithToken } from '../../reducers/MainReducer/main_reducer'
import { constants } from '../../constants'
import Axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'tachyons'
import './style.css'

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const Main = (props) => {

    useEffect(() => {
        Axios.get(constants.url)
            .then(res => { console.log(res.data) })

        const token = window.localStorage.getItem('token')
        if (token) {

            Axios.post(constants.url + '/signin/user', {}, {
                headers: {
                    'content-type': 'application/json',
                    'authorization': token
                }
            })
                .then(res => {
                    props.loadUserWithToken(res.data.user)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])

    console.log('User connected with : ', props.user.username)

    return (
        <Router>
            <div>

                <div className="row ma0 pa0 shadow-3 fixed" style={{ 'width': '100%', 'zIndex': '10' }}>
                    <MainNavbar />
                </div>

                <div className="mainApp">
                    <Switch>
                        <Route exact path="/">
                            {
                                !props.connected ?
                                    <div>
                                        <div className="row ma0 pa0" style={{ 'width': '100%' }}>
                                            <Signup />
                                            <Presentation />
                                        </div>
                                    </div> :
                                    <Suspense fallback={<Loading />}>
                                        <Dashboard />
                                    </Suspense>
                            }
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
    )
}

const mapState = (state) => ({
    connected: state.mainReducer.connected,
    user: state.mainReducer.user,
})

const mapDispatch = (dispatch) => ({
    loadUserWithToken: (payload) => dispatch(loadUserWithToken(payload))
})

export default connect(mapState, mapDispatch)(Main)