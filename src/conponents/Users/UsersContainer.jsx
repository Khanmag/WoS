import {connect} from "react-redux";
import Users from "./UsersC";
import {setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFollowingAC} from "../../redux/userReducer";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollowing: (id) => dispatch(toggleFollowingAC(id)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setTotalUsersCount: (count) => dispatch(setTotalUsersCountAC(count)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer