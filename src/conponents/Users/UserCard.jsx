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

            <div className={st.user_avatar}>
                <NavLink to={`/profile/${id}`}>
                    <img src={avatar || defaultUserAvatar} alt={'...'}/>
                </NavLink>
            </div>

            <div className={st.user_full_name}>
                <NavLink to={`/profile/${id}`}>
                    {userName || 'anonim'}
                </NavLink>
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