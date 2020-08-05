import Axios from 'axios'
import { constants } from '../../constants'


const initState = {
    connected: false,
    user: {
        id_user: '',
        second_user: '',
        first_user: '',
        username: '',
        type_user: '',
        email_user: '',
        domain_user: '',
        university_user: '',
    },
    profile: {
        id_user: '',
        second_user: '',
        first_user: '',
        username: '',
        type_user: '',
        email_user: '',
        domain_user: '',
        university_user: '',
    },
    feed: []
}


const UPDATE_CONNECTION_STATUS = 'UPDATE_CONNECTION_STATUS'
const UPDATE_USER = 'UPDATE_USER'
const DISCONNECT_USER = 'DISCONNECT_USER'
const LOAD_USER_WITH_TOKEN = 'LOAD_USER_WITH_TOKEN'

const UPDATE_PROFILE = 'UPDATE_PROFILE'
const LOAD_FEED_ENSEIGNANT = 'LOAD_FEED_ENSEIGNANT'
const UPDATE_FEED = 'UPDATE_FEED'

export const loadFeedEnseignant = (dispatch, id_user) => {
    Axios.get(constants.url + '/annonce/enseignant/' + id_user)
        .then(res => {
            return dispatch(
                {
                    type: LOAD_FEED_ENSEIGNANT,
                    payload: res.data.row
                }
            )
        })
        .catch(err => {
            return dispatch(
                {
                    type: LOAD_FEED_ENSEIGNANT,
                    payload: []
                }
            )
        })
}

export const updateConnectionStatus = (payload) => ({
    type: UPDATE_CONNECTION_STATUS,
    payload
})

export const updateUser = (payload) => ({
    type: UPDATE_USER,
    payload
})

export const disconnectUser = () => ({
    type: DISCONNECT_USER,
})

export const loadUserWithToken = (payload) => ({
    type: LOAD_USER_WITH_TOKEN,
    payload
})

export const updateProfile = (payload) => ({
    type: UPDATE_PROFILE,
    payload
})

export const updateFeed = (payload) => ({
    type: UPDATE_FEED,
    payload
})

export function mainReducer(state = initState, action) {

    switch (action.type) {

        case UPDATE_CONNECTION_STATUS:
            return {
                ...state,
                connected: action.payload
            }

        case UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }

        case LOAD_USER_WITH_TOKEN:
            return {
                ...state,
                connected: true,
                user: { ...action.payload },
            }

        case DISCONNECT_USER:
            return initState

        case UPDATE_PROFILE:
            return {
                ...state,
                profile: action.payload
            }

        case UPDATE_FEED:
            return {
                ...state,
                feed: action.payload
            }

        case LOAD_FEED_ENSEIGNANT:
            return {
                ...state,
                feed: action.payload
            }


    }

    return state
}