let ADD_NEW_POST = 'ADD_NEW_POST'
let CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'

const initialState = {
    posts: [
        {id: '1', text: 'HTML user'},
        {id: '2', text: 'CSS master'},
        {id: '3', text: 'JS is my kung-fu'},
        {id: '1', text: 'I am React GOD!!'},
    ],
    newPostText: 'Assalam Aleikum',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: '5',
                text: state.newPostText,
            }
            state.newPostText = ''
            return {...state, posts: [...state.posts, newPost]}
        case CHANGE_NEW_POST_TEXT:
            return {...state, newPostText: action.text}
        default:
            return state
    }

}

export const addNewPostAC = () => {
    return {type: ADD_NEW_POST}
}
export const changeNewPostTextAC = (text) => {
    return {
        type: CHANGE_NEW_POST_TEXT,
        text,
    }
}

export default profileReducer