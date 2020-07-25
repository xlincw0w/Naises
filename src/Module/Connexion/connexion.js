import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { constants } from '../../constants'
import cx from 'classnames'
import Axios from 'axios'
import { updateUser, updateConnectionStatus } from '../../reducers/MainReducer/main_reducer'

const Connexion = (props) => {

    const history = useHistory();

    const [username, setUsername] = useState('')
    const [passwd, setPasswd] = useState('')

    const [highlightReset, setHighLightReset] = useState(false)

    const HandleAuthentification = () => {

        Axios.post(constants.url + '/signin/user', {
            username,
            passwd
        }).then(res => {
            if (res.data.connected) {
                window.localStorage.setItem('token', res.data.token)

                props.updateConnectionStatus(true)
                props.updateUser(res.data.user)
                history.push("/")
                setHighLightReset(false)
            } else {
                console.log('Authentification denied')
                setHighLightReset(true)
            }
        })
    }

    console.log('Redux connected', props.connected)

    return (
        <div>
            <div className="fadein tc disable-select">
                <div style={{ 'height': '200px' }}></div>
                <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>Identifiez-vous</p>
                <div className="mt5">
                    <div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Identifiant</label>
                            <input onChange={e => setUsername(e.target.value)} className="ba b--black-20 pa2 mb2" type="text"></input>
                        </div>
                        <div>
                            <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Mot de passe</label>
                            <input onChange={e => setPasswd(e.target.value)} className="ba b--black-20 pa2 mb2" type="password"></input>
                        </div>
                        <label className={cx("mt4 orange trans", { "hide": !highlightReset })}>Votre mot de passe est incorrect. Veuillez le vérifier.</label>
                        <div className="mt4" style={{ height: '50px' }}>
                            <Link to="#" className={cx("disable-select black-80 unlink", { "HighlightAnimation": highlightReset })} style={{ fontSize: '16px' }} >Mot de passe oublié ?</Link>
                        </div>
                    </div>
                    <div className="mt5">
                        <Link onClick={HandleAuthentification} to="#" className="NaisesButton br3 shadow-4 disable-select">Se connecter</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatch = (dispatch) => ({
    updateUser: (user) => { dispatch(updateUser(user)) },
    updateConnectionStatus: (value) => { dispatch(updateConnectionStatus(value)) }
})

export default connect(null, mapDispatch)(Connexion)