import {getAuthUserInfo} from "./authReducer";

let INITIALIZE_SUCCESS = 'INITIALIZE_SUCCESS'

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {...state, initialized: true}
        default:
            return state
    }
}
export default appReducer

export const initializeSuccess = () => ({type: INITIALIZE_SUCCESS})

export const appInitialize = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserInfo())
        Promise.all([promise]).then(() => {
            dispatch(initializeSuccess())
        })
    }
}
