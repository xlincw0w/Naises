import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './inscription.css'


const Inscription = () => {

    const [userType, setUserType] = useState('')
    
    // User
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [university, setUniversity] = useState('')
    const [email, setEmail] = useState('')
    
    // Utilities
    const [showUserType, setShowUserType] = useState(true)
    const [showFormProf, setShowFormProf] = useState(false)
    const [showFormStud, setShowFormStud] = useState(false)
    const [switchToAuthInfo, setSwitchAuthInfo] = useState(false)
    const [switchToCon, setSwitchToCon] = useState(false)

    const ProfHandler = () => {
        setShowUserType(false)
        setShowFormProf(true)
    }

    const StudHandler = () => {
        setShowUserType(false)
        setShowFormStud(true)
    }

    const FormProfHandler = () => {
        setShowFormProf(false)
        setSwitchAuthInfo(true)
    }

    const FormStudHandler = () => {
        setShowFormStud(false)
        setSwitchAuthInfo(true)
    }

    const AuthInfoHandler = () => {
        setSwitchAuthInfo(false)
        setSwitchToCon(true)
    }

    const WhoYouAre = () => {

        return (
            <div className="fadein" style={{ 'display': showUserType ? 'default' : 'none' }}>
                <div style={{ 'height': '200px' }}></div>
                <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>Etes vous un enseignant ou un etudiant ?</p>
                <div className="mt6">
                    <Link to="#" className="NaisesButton br3 shadow-4 disable-select mh3" onClick={() => ProfHandler()}>Enseignant</Link>
                    <Link to="#" className="NaisesButton br3 shadow-4 disable-select mh3" onClick={() => StudHandler()}>Etudiant</Link>
                </div>
            </div>
        )
    }

    const ProfForm = () => {

        return (
            <div className="fadein" style={{ 'display': showFormProf ? 'default' : 'none' }}>
                <div style={{ 'height': '200px' }}></div>
                <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>Cher professeur</p>
                <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>Merci de bien vouloir remplir ce formulaire</p>
                <div className="mt5">
                    <div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Nom</label>
                            <input className="ba b--black-20 pa2 mb2" type="text"></input>
                        </div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Prenom</label>
                            <input className="ba b--black-20 pa2 mb2" type="text"></input>
                        </div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Email</label>
                            <input className="ba b--black-20 pa2 mb2" type="text"></input>
                        </div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Université</label>
                            <input className="ba b--black-20 pa2 mb2" type="text"></input>
                        </div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Domaine</label>
                            <input className="ba b--black-20 pa2 mb2" type="text"></input>
                        </div>
                    </div>
                    <div className="mt5">
                        <Link to="#" className="NaisesButton br3 shadow-4 disable-select" onClick={() => FormProfHandler()}>Continuer</Link>
                    </div>
                </div>
            </div>
        )
    }

    const StudForm = () => {
        return (
            <div className="fadein" style={{ 'display': showFormStud ? 'default' : 'none' }}>
                <div style={{ 'height': '200px' }}></div>
                <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>Cher etudiant</p>
                <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>Merci de bien vouloir remplir ce formulaire</p>
                <div className="mt5">
                    <div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Nom</label>
                            <input className="ba b--black-20 pa2 mb2" type="text"></input>
                        </div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Prenom</label>
                            <input className="ba b--black-20 pa2 mb2" type="text"></input>
                        </div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Email</label>
                            <input className="ba b--black-20 pa2 mb2" type="text"></input>
                        </div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Université</label>
                            <input className="ba b--black-20 pa2 mb2" type="text"></input>
                        </div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Domaine</label>
                            <input className="ba b--black-20 pa2 mb2" type="text"></input>
                        </div>
                    </div>
                    <div className="mt5">
                        <Link to="#" className="NaisesButton br3 shadow-4 disable-select" onClick={() => FormStudHandler()}>Continuer</Link>
                    </div>
                </div>
            </div>
        )
    }

    const AuthInfo = () => {
        return (
            <div className="fadein" style={{ 'display': switchToAuthInfo ? 'default' : 'none' }}>
                <div style={{ 'height': '200px' }}></div>
                <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>Introduisez vos informations d'authentification</p>
                <div className="mt5">
                    <div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Identifiant</label>
                            <input className="ba b--black-20 pa2 mb2" type="text"></input>
                        </div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Mot de passe</label>
                            <input className="ba b--black-20 pa2 mb2" type="password"></input>
                        </div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Confirmer mot de passe</label>
                            <input className="ba b--black-20 pa2 mb2" type="password"></input>
                        </div>
                    </div>
                    <div className="mt5">
                        <Link to="#" className="NaisesButton br3 shadow-4 disable-select" onClick={() => AuthInfoHandler()}>Adhérer</Link>
                    </div>
                </div>
            </div>
        )
    }

    const AccountCreated = () => {
        return (
            <div className="fadein" style={{ 'display': switchToCon ? 'default' : 'none' }}>
                <div style={{ 'height': '200px' }}></div>
                <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>Votre compte Naises a été crée avec succés !</p>
                <span className="disable-select mr2 orange" style={{ 'fontSize': '10rem' }}>❖</span>
                <div className="mt6">
                    <Link to="/connexion" className="NaisesButton br3 shadow-4 disable-select mh3">Connectez-vous</Link>
                </div>
            </div>
        )
    }


    return (
        <div className="tc" >

            <WhoYouAre />
            <ProfForm />
            <StudForm />
            <AuthInfo />
            <AccountCreated />

        </div>
    )
}

export default Inscription;
