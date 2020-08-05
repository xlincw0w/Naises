import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ActionFeed from '../Feed/actionFeed'
import Newsfeed from '../Feed/newsFeed'
import Post from '../Feed/post'
import { loadFeedEnseignant, updateFeed } from '../../reducers/MainReducer/main_reducer'
import { constants } from '../../constants'
import Axios from 'axios'

const DiffDays = (dateA, dateB) => {
    const miliSecOffset = dateA.getTimezoneOffset() * 60 * 1000

    const diffSec = parseInt(Math.abs(dateA - dateB + miliSecOffset) / 1000)
    if (diffSec <= 60) { return { sec: diffSec, unit: 'sec' } }
    const diffMin = parseInt(diffSec / 60)
    if (diffMin <= 60) {
        let sec = diffSec - (60 * diffMin)
        return { min: diffMin, sec, unit: 'min' }
    }
    const diffHours = parseInt(diffMin / 60)
    if (diffHours <= 24) {
        let min = diffMin - (60 * diffHours)
        return { hour: diffHours, min, unit: 'h' }
    }
    const diffDays = parseInt(diffHours / 24)
    return { day: diffDays, unit: 'j' }
}

const Annonces = (props) => {

    useEffect(() => {
        console.log(props.feed)

        if (props.user.type_user === 'enseignant') {
            props.loadFeedEnseignant(props.user.id_user)
        }

    }, [])

    const MapFeed = ({ feed }) => {
        return (feed.map((val, index, arr) => {
            const len = arr.length
            const current_obj = arr[len - index - 1]

            return current_obj.type_annonce === 'info' ?
                <Newsfeed
                    key={index}
                    name={current_obj.first_user + " " + current_obj.second_user}
                    date={DiffDays(new Date(), new Date(current_obj.date_annonce))}
                    text={current_obj.content_annonce}
                /> :
                <ActionFeed
                    key={index}
                    name={current_obj.name + " " + current_obj.firstname}
                    date={current_obj.date_annonce}
                    text={current_obj.content_annonce}
                />
        }))
    }

    return (
        <div className="center bg-white br3 pa3 pa4-ns ba b--black-10 shadow-1 mt3" style={{ 'width': '60%', 'minHeight': '1000px' }}>
            {
                props.user.type_user === 'enseignant' ?
                    <div className="">
                        <Post />
                    </div>
                    :
                    <br />
            }
            {

                <MapFeed feed={props.feed} />

            }
        </div >
    )
}

const mapState = (state) => ({
    user: state.mainReducer.user,
    feed: state.mainReducer.feed,
})

const mapDispatch = (dispatch) => ({
    updateFeed: (feed) => dispatch(updateFeed(feed)),
    loadFeedEnseignant: (id_user) => loadFeedEnseignant(dispatch, id_user)
})

export default connect(mapState, mapDispatch)(Annonces)
