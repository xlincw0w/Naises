import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import { slide as Menu } from 'react-burger-menu'
import Axios from 'axios'
import ActionFeed from '../Feed/actionFeed'
import Newsfeed from '../Feed/newsFeed'

import { updateProfile } from '../../reducers/MainReducer/main_reducer'
import { constants } from '../../constants'

import './profile.css'

const Profile = (props) => {

    useEffect(() => {
        const url = window.location.href.split("/")
        const username = url[url.length - 1]

        Axios.get(constants.url + '/profile/' + username)
            .then(res => {
                console.log(res.data)
                props.updateProfile({ ...res.data.user })
            }).catch(err => {
                console.log(err)
            })


    }, [])

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

    console.log('reducer', props.profile)

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

            <div className="pt5">
                <div className="center bg-white br3 pa3 pa4-ns ba b--black-10 shadow-1" style={{ 'width': '60vw', 'height': '380px' }}>
                    <div className="tc disable-select">
                        <img src="https://robohash.org/147?set=set4;size=64x64" className="br-100 h3 w3 db center" />
                        <p className="f5 orange mb0 mt3">{props.profile.type_user.capitalize()}</p>
                        <p className="f4">{props.profile.second_user.capitalize() + " " + props.profile.first_user.capitalize()}</p>
                        <hr className="mw4 bb bw1 b--black-10"></hr>
                    </div>
                    <div className="pt3 flex">
                        <div className="center">
                            <div className="">
                                <p className="black-80 dib disable-select" style={{ 'width': '100px' }}>Identifiant</p>
                                <p className="black-30 dib colorSelect">{props.profile.username}</p>
                            </div>
                            <div className=" disable-select">
                                <p className="black-80 dib" style={{ 'width': '100px' }}>Université</p>
                                <p className="black-30 dib">{props.profile.university_user.capitalize()}</p>
                            </div>
                            <div className=" disable-select">
                                <p className="black-80 dib" style={{ 'width': '100px' }}>Domaine</p>
                                <p className="black-30 dib">{props.profile.domain_user.capitalize()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feed */}
            <div className="mt3">
                <div className="center bg-white br3 pa3 pa4-ns ba b--black-10 shadow-1" style={{ 'width': '90%', 'minHeight': '1000px' }}>
                    {
                        props.profile.type_user == 'enseignant' ?
                            <MapFeed feed={[]} /> :
                            <div>
                                {/* Student case */}
                            </div>
                    }
                </div>
            </div>
        </div>

    );
}

const mapState = (state) => ({
    profile: state.mainReducer.profile,

})

const mapDispatch = (dispatch) => ({
    updateProfile: (user) => dispatch(updateProfile(user))
})

export default connect(mapState, mapDispatch)(Profile);