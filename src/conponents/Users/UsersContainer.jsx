import {connect} from "react-redux";
import Users from "./UsersC";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowing,
    toggleIsFetching,
} from "../../redux/userReducer";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         toggleFollowing: (id) => dispatch(toggleFollowingAC(id)),
//         setUsers: (users) => dispatch(setUsersAC(users)),
//         setTotalUsersCount: (count) => dispatch(setTotalUsersCountAC(count)),
//         setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//         toggleIsFetching: () => dispatch(toggleIsFetchingAC())
//     }
// }


const UsersContainer = connect(mapStateToProps, {
    toggleFollowing, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching
})(Users)
export default UsersContainer