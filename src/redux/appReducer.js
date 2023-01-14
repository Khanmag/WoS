import {getAuthUserInfo} from "./authReducer";

const INITIALIZE_SUCCESS = 'app_reducer/INITIALIZE_SUCCESS'
const TOGGLE_MODAL_STATUS ='app_reducer/TOGGLE_MODAL_STATUS'

let initialState = {
    initialized: false,
    isModalOpen: false,
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZE_SUCCESS:
            return {...state, initialized: true}
        case TOGGLE_MODAL_STATUS:
            return {...state, isModalOpen: !state.isModalOpen}
        default:
            return state
    }
}
export default appReducer

export const initializeSuccess = () => ({type: INITIALIZE_SUCCESS})
export const toggleModalStatus = () => ({type: TOGGLE_MODAL_STATUS})

export const appInitialize = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserInfo())
        Promise.all([promise]).then(() => {
            dispatch(initializeSuccess())
        })
    }
}
