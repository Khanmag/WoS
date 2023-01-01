import st from "./Users.module.css";
import {NavLink} from "react-router-dom";
import defaultUserAvatar from "../../localImage/avatarUser.png";
import React from "react";


const User = ({
                  followThunk, unfollowThunk, checkDisableButton,
                  id, avatar, userName, userStatus, isFollow
              }) => {
    return (
        <div className={st.user_container}>
            <div className={st.user_avatar}>
                <NavLink to={`/profile/${id}`}>
                    <img src={avatar || defaultUserAvatar} alt={'...'}/>
                </NavLink>
            </div>
            <div className={st.user_description}>
                <div className={st.user_full_name}>
                    <NavLink to={`/profile/${id}`}>
                        {userName || 'anonim'}
                    </NavLink>
                </div>
                <div className={st.user_status}>{userStatus || 'I\'m new, say me Hi!'}</div>
            </div>
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

        </div>
    )
}
export default User