import {connect} from "react-redux";
import Users from "./Users";
import {
    disableCurrentButton, enableCurrentButton,
    followThunk, getUsersThunk,
    setCurrentPage,
    setTotalUsersCount,
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
    {setTotalUsersCount, setCurrentPage, getUsersThunk, followThunk, unfollowThunk,
        toggleIsFetching, disableCurrentButton, enableCurrentButton
})(Users)
export default UsersContainer