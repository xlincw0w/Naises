import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { slide as Menu } from 'react-burger-menu'
import ActionFeed from '../Feed/actionFeed'
import Newsfeed from '../Feed/newsFeed'

import './profile.css'

const Profile = ({ data, feed }) => {

    const MapFeed = (feed) => {

        return (feed.feed.map((val, index) =>
            val.type == 'note' ?
                <Newsfeed
                    key={index}
                    name={val.name + " " + val.firstname}
                    date={val.date}
                    text={val.text}
                /> :
                <ActionFeed
                    key={index}
                    name={val.name + " " + val.firstname}
                    date={val.date}
                    text={val.text}
                />
        ))
    }

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

            <div className="row pt6">
                <div className="col-sm-5">
                    <div className="center bg-white br3 pa3 pa4-ns ba b--black-10 shadow-1" style={{ 'width': '400px', 'height': '600px' }}>
                        <div className="tc disable-select">
                            <img src="https://robohash.org/147?set=set4;size=64x64" className="br-100 h3 w3 db center" />
                            <p className="f5 orange mb0 mt3">{data.userType.capitalize()}</p>
                            <p className="f4">{data.name.capitalize() + " " + data.firstname.capitalize()}</p>
                            <hr className="mw4 bb bw1 b--black-10"></hr>
                        </div>
                        <div className="mt5" style={{ 'height': '260px' }}>
                            <div className="ml1">
                                <p className="black-80 dib disable-select" style={{ 'width': '180px' }}>Identifiant</p>
                                <p className="black-30 dib colorSelect">{data.username}</p>
                            </div>
                            <div className="ml1 disable-select">
                                <p className="black-80 dib" style={{ 'width': '180px' }}>Université</p>
                                <p className="black-30 dib">{data.university.capitalize()}</p>
                            </div>
                            <div className="ml1 disable-select">
                                <p className="black-80 dib" style={{ 'width': '180px' }}>Ville</p>
                                <p className="black-30 dib">{data.city.capitalize()}</p>
                            </div>
                        </div>
                        <div className="tc">
                            <Navbar.Brand><span className="disable-select f1 orange db">❖</span></Navbar.Brand>
                        </div>
                    </div>
                </div>

                {/* Feed */}
                <div className="col-sm-7 mb6">
                    <div className="bg-white br3 pa3 pa4-ns ba b--black-10 shadow-1" style={{ 'width': '90%', 'minHeight': '1000px' }}>
                        {
                            data.userType == 'enseignant' ?
                                <MapFeed feed={feed} /> :
                                <div>
                                    {/* Student case */}
                                </div>
                        }
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Profile;