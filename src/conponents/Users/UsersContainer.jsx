import {connect} from "react-redux";
import Users from "./UsersC";
import {
    disableCurrentButton, enableCurrentButton,
    followOnUser, followThunk, getUsersThunk,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, unfollowOnUser, unfollowThunk,
} from "../../redux/userReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingOnProcess: state.usersPage.followingOnProcess
    }
}

const UsersContainer = connect(mapStateToProps,
    {setUsers, setTotalUsersCount, setCurrentPage, getUsersThunk, followThunk, unfollowThunk,
        toggleIsFetching, followOnUser, unfollowOnUser, disableCurrentButton, enableCurrentButton
})(Users)
export default UsersContainer