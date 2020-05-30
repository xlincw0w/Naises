import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import connect from '../../Assets/Images/connect.svg'
import book from '../../Assets/Images/book.svg'
import update from '../../Assets/Images/update.svg'
import './presentation.css'

export default class Presentation extends Component {
    render() {
        return (
            <div className="mt5" style={{ 'width': '100%', 'height': '900px' }}>
                <div className="tc">
                    <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>Pourquoi Naises</p>
                    <p className="center black-60 f5 disable-select" style={{ 'width': '30%' }}>
                        Naises est une plateform dédié uniquement aux etudes,
                        notre principal objectif est de créer une connexion directe
                        entre nos chers enseignants et nos etudiants du pays.
                    </p>
                </div>

                <div className="row mt6" style={{ 'width': '100%', 'height': '500px' }}>
                    <div className="center">
                        <div className="dib spaceHorizontal tc">
                            <div className="center" style={{ 'width': '150px', 'height': '150px' }}>
                                <img src={connect} className="disable-select" role='image' alt='Connection' />
                            </div>
                            <div>
                                <p className="f5 black-60 mt4 disable-select" style={{ 'width': '250px', 'height': '500px' }}>
                                    Naises vous permet de vous connecter en toute sécurité et assure
                                    votre liaison avec vos professeurs
                                </p>
                            </div>
                        </div>
                        <div className="dib spaceHorizontal tc">
                            <div className="center" style={{ 'width': '150px', 'height': '150px' }}>
                                <img src={book} className="disable-select" role='image' alt='Book' />
                            </div>
                            <div>
                                <p className="f5 black-60 mt4 disable-select" style={{ 'width': '250px', 'height': '500px' }}>
                                    Vos cours et vos travaux dirigés tous réunis en une seule et une unique plateform,
                                    profitez-en et augementer votre efficacité
                                </p>
                            </div>
                        </div>
                        <div className="dib spaceHorizontal tc">
                            <div className="center" style={{ 'width': '150px', 'height': '150px' }}>
                                <img src={update} className="disable-select" role='image' alt='Stay updated' />
                            </div>
                            <div>
                                <p className="f5 black-60 mt4 disable-select" style={{ 'width': '250px', 'height': '500px' }}>
                                    Etre a jour et se tenir informé sera désormais facile
                                    tout est géré automatiquement et c'est entiérement gratuit
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tc">
                    <p className="black-70 mt4 disable-select" style={{ 'fontSize': '2rem' }}>Nous contacter ?</p>
                    <p className="center black-60 f5 disable-select" style={{ 'width': '30%' }}>
                        Vous ne trouvez pas de réponse à vos questions,
                        le support Naises est à votre disposition
                    </p>
                    <div className="mtopqueries">
                        <Link to="/contact" className="NaisesButton br3 grow shadow-4 disable-select">Cliquez ici</Link>
                    </div>
                </div>

                <div style={{'height': '500px'}}></div>

            </div>
        )
    }
}
