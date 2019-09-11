import { SUCCESS, GETJOBS, REQUEST } from '../Actions'

const initialState = {

    loggingIn: false,
    loggedIn: false,
    jobs: []

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case REQUEST:
            return {
                ...state,
                loggingIn: true
            }

        case SUCCESS:
            return {
                ...state,
                loggedIn: true,
                user: action.payload
            }

        case GETJOBS:
            return {
                ...state,
                jobs: action.payload ? action.payload : []
            }

        default:
            return { ...state }
    }

}

export default rootReducer
