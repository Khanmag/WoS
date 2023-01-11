import st from "./UserCard.module.css";
import {NavLink} from "react-router-dom";
import defaultUserAvatar from "../../localImage/defaultUser.png";
import React from "react";


const User = ({
                  followThunk, unfollowThunk, checkDisableButton,
                  id, avatar, userName, isFollow
              }) => {
    return (
        <div className={st.user_container}>

            <div>
                <NavLink to={`/profile/${id}`}>
                    <img src={avatar || defaultUserAvatar} alt={'...'}/>
                </NavLink>
            </div>

            <div className={st.user_full_name}>
                <NavLink to={`/profile/${id}`}>
                    {userNameValidator(userName) || 'anonim'}
                </NavLink>
            </div>

            <FollowButton id={id}
                          isFollow={isFollow}
                          checkDisableButton={checkDisableButton}
                          followThunk={followThunk}
                          unfollowThunk={unfollowThunk}
            />

        </div>
    )
}
export default User

const userNameValidator = (name) => {
    if (name.length > 10) name = name.slice(0, 8) + '...'
    return name
}
const FollowButton = ({id, isFollow, checkDisableButton, followThunk, unfollowThunk}) => {
    return (
        <div className={st.following_button}>
            {
                !isFollow
                    ? <button disabled={checkDisableButton(id)}
                              onClick={() => followThunk(id)}>
                        {checkDisableButton(id) ? '.....' : 'Follow'}
                    </button>
                    : <button disabled={checkDisableButton(id)}
                              onClick={() => unfollowThunk(id)}>
                        {checkDisableButton(id) ? '.....' : 'Unfollow'}
                    </button>
            }
        </div>
    )
}