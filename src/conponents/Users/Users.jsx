import st from './Users.module.css'
import defaultUserAvatar from '../../localImage/avatarUser.png'
import axios from "axios";


const Users = ({users, toggleFollowing, setUsers}) => {
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            console.log(response.data.items)
            setUsers(response.data.items)
        })
    }
    return (
        <div>
            {
                users.map( item => {
                    return <User toggleFollowing={toggleFollowing} key={item.id}
                                 id={item.id}
                                 avatar={item.photos.small}
                                 userName={item.name}
                                 userStatus={item.status}
                                 userLocation={item.location}
                                 isFollow={item.followed}
                    />
                })
            }
        </div>
    )
}

export default Users


const User = ({toggleFollowing, id, avatar, userName, userLocation, userStatus, isFollow}) => {
    return (
        <div className={st.user_container} >
            <div className={st.user_avatar}>
                <img src={avatar || defaultUserAvatar} alt={'...'}/>
            </div>
            <div className={st.user_description}>
                <div className={st.user_fullname}>{userName || 'anonim'}</div>
                <div className={st.user_location}>{userLocation || 'world\'s men'}</div>
                <div className={st.user_status}>{userStatus || 'I\'m new, say me Hi!'}</div>
            </div>
            <div className={st.following_button}>
                <button onClick={() => {toggleFollowing(id)}}>
                    {isFollow ? 'Unfollow' : 'Follow'}
                </button>
            </div>

        </div>
    )
}