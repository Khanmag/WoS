
const store = {
    state: {
        dialogsPage: {
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
            newMessageText: 'Hi!',
        },
        profileData: {
            posts: [
                {id: '1', text: 'HTML user'},
                {id: '2', text: 'CSS master'},
                {id: '3', text: 'JS is my kung-fu'},
                {id: '1', text: 'I am React GOD!!'},
            ],
            newPostText: 'Assalam Aleikum',

        },
        messages: [
            {text: 'Hi', id: 'asd'},
            {text: 'Meraba', id: 'asd'},
            {text: 'Salam', id: 'asd'},
        ],
    },
    rerenderEntireTree() {
        console.log('state is changed')
    },
    subscribe(observer) {
        store.rerenderEntireTree = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-NEW-POST') {
            this.state.profileData.posts.push({
                id: '5',
                text: this.state.profileData.newPostText,
            })
            this.state.profileData.newPostText = ''
            this.rerenderEntireTree()
        } else if (action.type === 'CHANGE-NEW-POST') {
            this.state.profileData.newPostText = action.text
            this.rerenderEntireTree()
        } else if (action.type === 'CHANGE-NEW-MESSAGE') {
            this.state.dialogsPage.newMessageText = action.text
            this.rerenderEntireTree()
        } else if (action.type === 'ADD-NEW-MESSAGE') {
            this.state.messages.push({
                text: this.state.dialogsPage.newMessageText,
                id: 'sda'
            })
            this.rerenderEntireTree()
        }
    }
}


export default store