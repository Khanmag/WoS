

let ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'

const initialState = {
    dialogs: [
        {
            id: 'solo',
            name: 'Solo',
            avatar: 'https://yt3.ggpht.com/a/AATXAJxcm5EfAgrVc2qepIPBeaqAw1Zq53M5Mbc0IpukHg=s900-c-k-c0xffffffff-no-rj-mo',
            messages: ['Hi']
        },
        {
            id: 'Khan',
            name: 'Khan',
            avatar: 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png',
            messages: ['Salam']
        },
        {
            id: 'mag',
            name: 'Mag',
            avatar: 'https://yt3.ggpht.com/ytc/AKedOLRnZ1AD08TRJrPs9ZG39oKUsYb9C1ceoUvDNlAubw=s900-c-k-c0x00ffffff-no-rj',
            messages: ['Meraba']
        },
        {
            id: 'eva',
            name: 'Eva',
            avatar: 'https://i.etsystatic.com/7015608/r/il/097f66/1234993530/il_fullxfull.1234993530_1clo.jpg',
            messages: ['Hello my lovely daughter']
        },
    ],
    messages: [
        {text: 'Hi', id: 'asd'},
        {text: 'Meraba', id: 'asd'},
        {text: 'Salam', id: 'asd'},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                text: action.text,
                id: '123'
            }
            state.newMessageText = ''
            return {...state, 'messages': [...state.messages, newMessage]}
        default:
            return state
    }
}

export const addNewMessage = (text) => ({type: ADD_NEW_MESSAGE, text})



export default dialogsReducer