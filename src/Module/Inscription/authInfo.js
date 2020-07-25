import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { constants } from '../../constants'
import cx from 'classnames'

const AuthInfo = ({ tools }) => {
    return (
        <div className="fadein" style={{ 'display': tools.switchToAuthInfo ? 'block' : 'none' }}>
            <div style={{ 'height': '200px' }}></div>
            <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>Introduisez vos informations d'<span className="orange">authentification</span></p>
            <div className="mt5">
                <div>
                    <div>
                        <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Identifiant</label>
                        <input style={{ height: '42px' }} onChange={e => tools.setUsername(e.target.value)} className="ba b--black-20 pa2 mb2" type="text"></input>
                        <label style={{ width: '50px' }} className={cx('ml3 f4 red dib trans', { 'hide': tools.username.length === 0 || constants.username_rg.test(tools.username) })}>✘</label>
                    </div>
                    <div>
                        <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Mot de passe</label>
                        <input style={{ height: '42px' }} onChange={e => tools.setPasswd(e.target.value)} className="ba b--black-20 pa2 mb2" type="password"></input>
                        <label style={{ width: '50px' }} className={cx('ml3 f4 red dib trans', { 'hide': tools.passwd.length === 0 || tools.passwd.length >= 8 })}>faible</label>
                    </div>
                    <div>
                        <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Confirmer mot de passe</label>
                        <input style={{ height: '42px' }} onChange={e => tools.setPasswdConfirm(e.target.value)} className="ba b--black-20 pa2 mb2" type="password"></input>
                        <label style={{ width: '50px' }} className={cx('ml3 f4 red dib trans', { 'hide': tools.passwd_confirm.length === 0 || tools.passwd === tools.passwd_confirm })}>✘</label>
                    </div>
                </div>
                <div className="mt5">
                    <Link to="#" className="NaisesButton br3 shadow-4 disable-select" onClick={() => tools.AuthInfoHandler()}>Adhérer</Link>
                </div>
            </div>
        </div>
    )
}

export default AuthInfo