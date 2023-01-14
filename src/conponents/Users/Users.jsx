import User from "./UserCard";
import React from "react";
import st from './Users.module.css'


const Users = ({users, followThunk, unfollowThunk, checkDisableButton}) => {
    return (
        <div className={st.users_cards_wrapper}>
            {
                users.map(item => {
                    return <User checkDisableButton={checkDisableButton}
                                 followThunk={followThunk}
                                 unfollowThunk={unfollowThunk}
                                 key={item.id}
                                 id={item.id}
                                 avatar={item.photos.small}
                                 userName={item.name}
                                 userStatus={item.status}
                                 isFollow={item.followed}
                    />
                })
            }
        </div>
    )
}
export {Users}