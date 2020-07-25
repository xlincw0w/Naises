const initState = {
    connected: false,
    user: {
        user_id: '',
        second_user: '',
        first_user: '',
        username: '',
        type_user: '',
        email_user: '',
        domain_user: '',
        university_user: '',
    }
}

const UPDATE_CONNECTION_STATUS = 'UPDATE_CONNECTION_STATUS'
const UPDATE_USER = 'UPDATE_USER'
const DISCONNECT_USER = 'DISCONNECT_USER'
const LOAD_USER_WITH_TOKEN = 'LOAD_USER_WITH_TOKEN'

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
    }

    return state
}