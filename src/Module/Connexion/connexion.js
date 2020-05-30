import React from 'react'
import { Link } from 'react-router-dom'

const Connexion = () => {
    return (
        <div>
            <div className="fadein tc">
                <div style={{ 'height': '200px' }}></div>
                <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>Identifiez-vous</p>
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
                        <div className="mt4">
                            <Link to="#" className="disable-select black-80 unlink">Mot de passe oublié ?</Link>
                        </div>
                    </div>
                    <div className="mt5">
                        <Link to="#" className="NaisesButton br3 shadow-4 disable-select">Se connecter</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connexion