import {useEffect} from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {getUsers, followThunk, unfollowThunk} from "../../redux/userReducer";
import {Users} from "./Users";
import UsersError from "../Errors/UsersError";
import Preloader from "../common/Preloader";
import {Paginator} from "../common/Paginator";

const UsersPage = ({
                       initialized, isFetching, users, pageSize, totalUsersCount, hasError,
                       getUsers, followThunk, unfollowThunk, followingOnProcess,
                   }) => {

    const {page} = useParams()
    useEffect(() => {
        getUsers(page, pageSize)
    }, [page])
    const checkDisableButton = (id) => followingOnProcess.some(item => item === id)
    if (!initialized) return <Preloader/>
    else if (hasError) return <UsersError/>
    return (
        <div>
            <Paginator page={+page} isFetching={isFetching}
                       totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            <Users users={users} followThunk={followThunk} unfollowThunk={unfollowThunk}
                   checkDisableButton={checkDisableButton}/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        initialized: state.usersPage.initialized,
        isFetching: state.usersPage.isUsersFetching,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        hasError: state.usersPage.hasError,
        followingOnProcess: state.usersPage.followingOnProcess,
    }
}

const UsersContainer = connect(mapStateToProps, {getUsers, followThunk, unfollowThunk})(UsersPage)
export default UsersContainer