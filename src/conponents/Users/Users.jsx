import React, {useEffect, useState} from "react";
import Paginator from "../common/Paginator";
import Preloader from "../common/Preloader";
import User from "./UserCard";
import {useParams} from "react-router-dom";
import st from './Users.module.css'


const Users = ({
                   getUsersThunk, totalUsersCount, pageSize, followingOnProcess,
                   users, followThunk, unfollowThunk, isFetching
               }) => {
    let {page} = useParams()
    const [currentPage, setCurrentPage] = useState(page || 1)
    useEffect(() => {
        getUsersThunk(currentPage, pageSize)
    }, [currentPage])

    const checkDisableButton = (id) => {
        return followingOnProcess.some(item => item === id)
    }
    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    return (
        <div>
            <Paginator currentPage={currentPage}
                       pagesCount={pagesCount}
                       setCurrentPage={setCurrentPage}
            />

            {isFetching
                ? <Preloader/>

                : <div className={st.users_cards_wrapper}>
                    {users.map(item => {
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
                    })}
                </div>
            }
        </div>
    )
}

export default React.memo(Users)

