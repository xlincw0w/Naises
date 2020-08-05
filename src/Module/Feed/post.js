import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { IoMdShareAlt } from "react-icons/io"
import { constants } from '../../constants'
import Axios from 'axios'
import { loadFeedEnseignant } from '../../reducers/MainReducer/main_reducer'

const MAX_POST_LENGTH = 5000

const Post = (props) => {

    const [feedContent, setFeedContent] = useState('')
    const [wordCount, setWordCount] = useState(0)

    const updateChanges = (val) => {
        setFeedContent(val)
        setWordCount(val.length)
    }

    console.log(feedContent)

    const handleAnnouncement = () => {
        console.log(props.user.id_user, feedContent)

        if (feedContent.length !== 0 && feedContent.length <= MAX_POST_LENGTH) {
            const date_now = new Date()

            Axios.post(constants.url + '/annonce/info/' + props.user.id_user, { date_now, feedContent })
                .then(() => {
                    props.loadFeedEnseignant(props.user.id_user)
                    console.log('post added')
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }

    return (
        <div className="tc" style={{ 'width': '100%', 'minHeight': '200px' }}>
            <div className="ph2" style={{ 'width': '100%' }}>
                <p className="orange">{'Maximum : ' + MAX_POST_LENGTH + ' caractéres'}</p>
                <textarea placeholder="Une annonce a faire ? tenez vos etudiants informés ..." onChange={e => updateChanges(e.target.value)} className="ba b--black-20 pa2 mb0" type="text" style={{ width: '80%', height: '80px' }}></textarea>
                <p className="black-60 p0">{wordCount}</p>
            </div>
            <div className="mt3">
                <Link to="#" className="NaisesButton br3 shadow-4 disable-select" onClick={handleAnnouncement} style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>Publier <IoMdShareAlt style={{ width: '25px', height: '40px', marginBottom: '4px' }} /></Link>
            </div>
        </div>
    )
}

const mapState = (state) => ({
    user: state.mainReducer.user
})

const mapDispatch = (dispatch) => ({
    loadFeedEnseignant: (id_user) => loadFeedEnseignant(dispatch, id_user)
})

export default connect(mapState, mapDispatch)(Post)