import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { constants } from '../../constants'
import cx from 'classnames'

const StudForm = ({ tools }) => {

    return (
        <div className="fadein" style={{ 'display': tools.showFormStud ? 'block' : 'none' }}>
            <div style={{ 'height': '200px' }}></div>
            <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>Cher <span className="orange ml2">Etudiant</span></p>
            <p className="black-70 disable-select" style={{ 'fontSize': '2rem' }}>Merci de bien vouloir remplir ce formulaire</p>
            <div className="mt5">
                <div>
                    <div>
                        <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Nom</label>
                        <input style={{ height: '42px' }} onChange={e => tools.setSecond(e.target.value)} className="ba b--black-20 pa2 mb2" type="text"></input>
                        <label style={{ width: '50px' }} className={cx('ml3 f4 red dib trans', { 'hide': constants.alph_rg.test(tools.second) })}>✘</label>
                    </div>
                    <div>
                        <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Prenom</label>
                        <input  style={{ height: '42px' }} onChange={e => tools.setFirst(e.target.value)} className="ba b--black-20 pa2 mb2" type="text"></input>
                        <label style={{ width: '50px' }} className={cx('ml3 f4 red dib trans', { 'hide': constants.alph_rg.test(tools.first) })}>✘</label>
                    </div>
                    <div>
                        <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Email</label>
                        <input  style={{ height: '42px' }} onChange={e => tools.setEmail(e.target.value)} className="ba b--black-20 pa2 mb2" type="text"></input>
                        <label style={{ width: '50px' }} className={cx('ml3 f4 red dib trans', { 'hide': tools.email.length === 0 || constants.email_rg.test(tools.email) })}>✘</label>
                    </div>
                    <div>
                        <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Université</label>
                        <input  style={{ height: '42px' }} onChange={e => tools.setUniversity(e.target.value)} className="ba b--black-20 pa2 mb2" type="text"></input>
                        <label style={{ width: '50px' }} className={cx('ml3 f4 red dib trans', { 'hide': constants.alphanum_rg.test(tools.university) })}>✘</label>
                    </div>
                    <div>
                        <label style={{ 'width': '250px', 'textAlign': 'start' }}><span className="disable-select mr2 orange">❖</span>Domaine</label>
                        <input style={{ height: '42px' }} onChange={e => tools.setDomain(e.target.value)} className="ba b--black-20 pa2 mb2" type="text"></input>
                        <label style={{ width: '50px' }} className={cx('ml3 f4 red dib trans', { 'hide': constants.alph_rg.test(tools.domain) })}>✘</label>
                    </div>
                </div>
                <div className="mt5">
                    <Link to="#" className="NaisesButton br3 shadow-4 disable-select" onClick={() => tools.FormStudHandler()}>Continuer</Link>
                </div>
            </div>
        </div>
    )
}

export default StudForm