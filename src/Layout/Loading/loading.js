import React from 'react'
import { Navbar } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
    return (
        <div className='tc' style={{ width: '100%', height: '100vh' }}>
            <div style={{ height: '10vh' }}></div>
            <Navbar.Brand>
                <span className='orange disable-select mb3' style={{ fontSize: '10rem' }}>
                    ❖
                </span>
            </Navbar.Brand>
            <p className='f3 black-80 mb5'>Chargement de la page ...</p>
            <Spinner animation='border' />
        </div>
    )
}

export default Loading
