import { SUCCESS, GETJOBS, REQUEST, BS_REQUEST, NEW_BS, BS } from '../Actions'
import { initBlockstack } from 'react-blockstack'
import { AppConfig, UserSession } from 'blockstack'

const appConfig = new AppConfig(["store_write"])
const userSession = new UserSession({ appConfig: appConfig })
initBlockstack(appConfig)

const initialState = {

    loggingIn: false,
    loggedIn: false,
    user: undefined,
    blockstackConfig: userSession,
    jobs: [],
    bsUser: null

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case REQUEST:
            return {
                ...state,
                loggingIn: true
            }

        case BS_REQUEST:
            return {
                ...state,
                loggingIn: true
            }

        case BS:
            return {
                ...state,
                bsUser: 'existing',
                user: action.payload
            }

        case NEW_BS:
            return {
                ...state,
                user: action.payload,
                bsUser: 'new'
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
