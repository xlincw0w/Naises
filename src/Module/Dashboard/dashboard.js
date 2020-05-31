import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { slide as Menu } from 'react-burger-menu'
import cx from 'classnames'
import Annonces from '../Annonces/annonces';
import Modules from '../Modules/modules';
import Professeurs from '../Professeurs/professeurs';

import './dashboard.css'

const Dashboard = () => {

    const [trackClick, setTrackClick] = useState('annonces')

    return (
        <div className="bg-image">
            <Menu>
                <div className="outline-none" style={{ 'marginLeft': '20px' }}>
                    <Link to="/" className="orange unlink f2 disable-select">N<span className="outline-none" style={{ 'fontSize': '2.4rem' }}>▲</span>ISES</Link>

                </div>
                <div className="mt5">
                    <div>
                        <Navbar.Brand><span className="textanimation disable-select db f3">❖</span></Navbar.Brand>
                        <Link to="#" className="outline-none signin white-80 disable-select mv4">Creer module</Link>
                    </div>
                    <div>
                        <Navbar.Brand><span className="textanimation disable-select db f3">❖</span></Navbar.Brand>
                        <Link to="#" className="outline-none signin white-80 disable-select mv4">Nouvelle annonces</Link>
                    </div>
                    <div>
                        <Navbar.Brand><span className="textanimation disable-select db f3">❖</span></Navbar.Brand>
                        <Link to="#" className="outline-none signin white-80 disable-select mv4">Vos modules</Link>
                    </div>
                    <div>
                        <Navbar.Brand><span className="textanimation disable-select db f3">❖</span></Navbar.Brand>
                        <Link to="#" className="outline-none signin white-80 disable-select mv4">Vos etudiants</Link>
                    </div>
                    <div>
                        <Navbar.Brand><span className="textanimation disable-select db f3">❖</span></Navbar.Brand>
                        <Link to="#" className="outline-none signin white-80 disable-select mv4">Paramétres</Link>
                    </div>
                    <div>
                        <Navbar.Brand><span className="textanimation disable-select db f3">❖</span></Navbar.Brand>
                        <Link to="#" className="outline-none signin white-80 disable-select mv4">Déconnexion</Link>
                    </div>
                </div>
            </Menu>

            <div className="pt6">
                <div className="mb6">
                    <div className="center bg-white br3 pa3 p0 ba b--black-10 shadow-1 tc pt0" style={{ 'width': '60%', 'height': '140px' }}>
                        <div className="mb3">
                            <Navbar.Brand><span className="disable-select f2 orange">❖</span></Navbar.Brand>
                        </div>
                        <Link to="#" className={cx(
                            "NaisesButton br3 grow shadow-4 disable-select mh1",
                            { "NaisesButton-click": (trackClick == 'modules') }
                        )}
                            style={{ 'paddingLeft': '0.4rem', 'paddingRight': '0.4rem' }}
                            onClick={() => { setTrackClick('modules') }}
                        >
                            <p className="dib" style={{ 'width': '150px' }}>Vos modules</p>
                        </Link>
                        <Link to="#" className={cx(
                            "NaisesButton br3 grow shadow-4 disable-select mh1",
                            { "NaisesButton-click": (trackClick == 'annonces') }
                        )}
                            style={{ 'paddingLeft': '0.4rem', 'paddingRight': '0.4rem' }}
                            onClick={() => { setTrackClick('annonces') }}
                        >
                            <p className="dib" style={{ 'width': '150px' }}>Annonces</p>
                        </Link>
                        <Link to="#" className={cx(
                            "NaisesButton br3 grow shadow-4 disable-select mh1",
                            { "NaisesButton-click": (trackClick == 'profsubs') }
                        )}
                            style={{ 'paddingLeft': '0.4rem', 'paddingRight': '0.4rem' }}
                            onClick={() => { setTrackClick('profsubs') }}
                        >
                            <p className="dib" style={{ 'width': '150px' }}>Vos professeurs</p>
                        </Link>
                    </div>

                    <div>
                        {
                            trackClick == 'annonces' ?
                                <Annonces />
                                :
                                trackClick == 'modules' ?
                                    <Modules />
                                    :
                                    <Professeurs />
                        }
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Dashboard;