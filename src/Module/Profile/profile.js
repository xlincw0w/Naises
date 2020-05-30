import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu'

import './profile.css'

class Profile extends React.Component {
    showSettings(event) {
        event.preventDefault();

    }

    render() {
        return (
            <div>
                <Menu>
                    <div className="outline-none" style={{ 'marginLeft': '20px' }}>
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

                <div className="row pt6">
                    <div className="col-sm-5">
                        <div className="center bg-white br3 pa3 pa4-ns ba b--black-10 shadow-1" style={{ 'width': '400px', 'height': '600px' }}>
                            <div className="tc disable-select">
                                <img src="https://robohash.org/147?set=set4;size=64x64" className="br-100 h3 w3 db center" title="Photo of a kitty staring at you" />
                                <p className="f5 orange mb0 mt3">Enseignant</p>
                                <p className="f4">Khazem Khaled</p>
                                <hr className="mw4 bb bw1 b--black-10"></hr>
                            </div>
                            <div className="mt5" style={{ 'height': '260px' }}>
                                <div className="ml1">
                                    <p className="black-80 dib disable-select" style={{ 'width': '180px' }}>Identifiant</p>
                                    <p className="black-30 dib colorSelect">khaled.khazem</p>
                                </div>
                                <div className="ml1 disable-select">
                                    <p className="black-80 dib" style={{ 'width': '180px' }}>Université</p>
                                    <p className="black-30 dib">Mouloud Mammeri</p>
                                </div>
                                <div className="ml1 disable-select">
                                    <p className="black-80 dib" style={{ 'width': '180px' }}>Ville</p>
                                    <p className="black-30 dib">Tizi-Ouzou</p>
                                </div>
                            </div>
                            <div className="tc">
                                <Navbar.Brand><span className="disable-select f1 orange db">❖</span></Navbar.Brand>
                            </div>
                        </div>
                    </div>

                    {/* Feed */}
                    <div className="col-sm-7">
                        <div className="bg-white br3 pa3 pa4-ns ba b--black-10 shadow-1" style={{ 'width': '90%', 'minHeight': '1000px' }}>

                            <div className="Naisesborder br3 shadow-1 mv3" style={{ 'width': '100%', 'minHeight': '200px' }}>
                                <div className="row pt3" style={{ 'width': '100%', 'height': '100px' }}>
                                    <img src="https://robohash.org/147?set=set4;size=64x64" className="br-100 h3 db ml4 shadow-1 grow pointer" style={{ 'width': '48px', 'height': '48px' }} />
                                    <div className="ml3 black-60">
                                        <p className="db mb0 grow pointer">Khazem khaled</p>
                                        <p className="db">4 min</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="center ph2" style={{ 'width': '80%' }}>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="NaisesborderReverse br3 shadow-1 mv3" style={{ 'width': '100%', 'minHeight': '100px' }}>
                                <div className="row pt3" style={{ 'width': '100%', 'height': '100px' }}>
                                    <img src="https://robohash.org/147?set=set4;size=64x64" className="br-100 h3 db ml4 shadow-1 grow pointer bg-white" style={{ 'width': '48px', 'height': '48px' }} />
                                    <div className="ml3">
                                        <p className="db mb0 grow pointer">Khazem khaled</p>
                                        <p className="db">17 min</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="center ph2" style={{ 'width': '80%' }}>
                                        <p>
                                            A ajouté un fichier au cours 'Ingenieur System D'information'
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="Naisesborder br3 shadow-1 mv3" style={{ 'width': '100%', 'minHeight': '200px' }}>
                                <div className="row pt3" style={{ 'width': '100%', 'height': '100px' }}>
                                    <img src="https://robohash.org/147?set=set4;size=64x64" className="br-100 h3 db ml4 shadow-1 grow pointer" style={{ 'width': '48px', 'height': '48px' }} />
                                    <div className="ml3 black-60">
                                        <p className="db mb0 grow pointer">Khazem khaled</p>
                                        <p className="db">37 min</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="center ph2" style={{ 'width': '80%' }}>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                            but also the leap into electronic typesetting, remaining essentially unchanged
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="Naisesborder br3 shadow-1 mv3" style={{ 'width': '100%', 'minHeight': '200px' }}>
                                <div className="row pt3" style={{ 'width': '100%', 'height': '100px' }}>
                                    <img src="https://robohash.org/147?set=set4;size=64x64" className="br-100 h3 db ml4 shadow-1 grow pointer" style={{ 'width': '48px', 'height': '48px' }} />
                                    <div className="ml3 black-60">
                                        <p className="db mb0 grow pointer">Khazem khaled</p>
                                        <p className="db">2 h</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="center ph2" style={{ 'width': '80%' }}>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Profile;