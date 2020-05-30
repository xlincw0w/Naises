import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <div>
                <div className="fadein tc">
                    <div style={{ 'height': '200px' }}></div>
                    <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>On vous écoute</p>
                    <div className="mt5">
                        <div>
                            <div>
                                <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Nom et prénom</label>
                                <input className="ba b--black-20 pa2 mb2" type="text"></input>
                            </div>
                            <div>
                                <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Sujet</label>
                                <input className="ba b--black-20 pa2 mb2" type="text"></input>
                            </div>
                            <div>
                                <div className="mt5">
                                    <label className="db fw6 lh-copy f6">Dites-nous tout</label>
                                    <textarea className="pa2 ba b--black-20 bg-transparent" style={{ 'width': '40rem', 'height': '10rem' }}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="mt5">
                            <Link to="#" className="NaisesButton br3 shadow-4 disable-select">Envoyer</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact