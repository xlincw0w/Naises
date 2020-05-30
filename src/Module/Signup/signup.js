import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js';
import './signup.css'

const params = {

    "particles": {
        "number": {
            "value": 30,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.8,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 250,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 0.3
            },
        }
    },
}

export default class Signup extends Component {
    render() {
        return (
            <div className="shadow-3 NaisesBG" style={{ 'width': '100%', 'height': '700px', 'marginTop': '50px' }}>
                <Particles className="particleCanvas" params={params}></Particles>
                <div className="row" style={{ 'width': '100%', 'height': '45%' }}>
                    <div className="col-sm-6">
                        <div className="center white-80">
                            <p className="signupText pt5 center disable-select" style={{ 'width': '60%' }}><span className="f1">U</span>ne plateform dédié uniquement au travail, Plus d'excuses a la fainéantise !</p>
                        </div>
                    </div>
                    <div className="col-sm-6">

                    </div>
                </div>

                <div className="row" style={{ 'width': '100%', 'height': '55%' }}>
                    <div className="col-sm-6">
                        <div className="bg-white br3 shadow-3 center" style={{ 'width': '70%', 'height': '260px' }}>
                            <div className="bb bw1 b--black-50 center" style={{ 'width': '80%', 'height': '50px' }}>
                                <p className="black-60 tc f4 pt3 disable-select">Inscrivez-vous dés maintenant</p>
                            </div>
                            <div className="mt4 ml3">
                                <p className="tc center black-70 disable-select" style={{ 'width': '60%' }}>Vous ne possédez pas encore de compte ? Rejoignez nous en cliquant le bouton juste au dessous</p>
                            </div>
                            <div className="tc mtopqueries">
                                <Link to="/inscription" className="NaisesButton br3 grow shadow-4 disable-select">S'enregistrer</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="logo">
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
