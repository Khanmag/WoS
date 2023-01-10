import React from 'react';
import Preloader from '../common/Preloader';
import User from "./UserCard";
import Paginator from "../common/Paginator";


class Users extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onCurrentPageChange = (pageNum) => {
        this.props.getUsersThunk(pageNum, this.props.pageSize)
        this.props.setCurrentPage(pageNum)
    }

    checkDisableButton = (id) => {
        return this.props.followingOnProcess.some(item => item === id )
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        return (
            <div>

                <Paginator currentPage={this.props.currentPage}
                           pagesNum={pagesCount}
                           onCurrentPageChange={this.onCurrentPageChange}/>

                {this.props.isFetching
                    ? <Preloader/>
                    : this.props.users.map(item => {
                        return <User checkDisableButton={this.checkDisableButton}
                                     followThunk={this.props.followThunk}
                                     unfollowThunk={this.props.unfollowThunk}
                                     key={item.id}
                                     followOnUser={this.props.followOnUser}
                                     unfollowOnUser={this.props.unfollowOnUser}
                                     id={item.id}
                                     avatar={item.photos.small}
                                     userName={item.name}
                                     userStatus={item.status}
                                     isFollow={item.followed}
                        />
                    })}
            </div>
        )
    }
}

export default Users


