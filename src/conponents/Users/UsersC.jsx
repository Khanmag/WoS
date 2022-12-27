import st from './Users.module.css'
import defaultUserAvatar from '../../localImage/avatarUser.png'
import axios from "axios";
import React from "react";



class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            console.log(response.data.items)
            this.props.setUsers(response.data.items)
            // this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onCurrentPageChange = (pageNum) => {
        this.props.setCurrentPage(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setCurrentPage(pageNum)
            })


    }

    render () {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)



        return (
            <div>
                <p>totalUsersCount: {this.props.totalUsersCount}</p>
                <p>pagesCount: {pagesCount}</p>
                <p>currentPage: {this.props.currentPage}</p>
                <Paginator currentPage={this.props.currentPage}
                           pagesNum={pagesCount}
                           onCurrentPageChange={this.onCurrentPageChange}/>

                {
                    this.props.users.map( item => {
                        return <User toggleFollowing={this.props.toggleFollowing} key={item.id}
                                     id={item.id}
                                     avatar={item.photos.small}
                                     userName={item.name}
                                     userStatus={item.status}
                                     userLocation={item.location}
                                     isFollow={item.followed}
                        />
                    })
                }
            </div>
        )
    }
}


export default Users

const Paginator = ({pagesNum, onCurrentPageChange, currentPage}) => {
    let pages = []
    for (let i=1; i <= pagesNum; i++) {
        pages.push(i)
    }
    return (
        <div className={st.paginator_wrapper}>
            {
                pages.map(i => {
                    return <a className={currentPage == i ? st.currentPage : ""}
                        onClick={() => onCurrentPageChange(i)}>{i}</a>
                })
            }
        </div>
    )
}

const User = ({toggleFollowing, id, avatar, userName, userLocation, userStatus, isFollow}) => {
    return (
        <div className={st.user_container} >
            <div className={st.user_avatar}>
                <img src={avatar || defaultUserAvatar} alt={'...'}/>
            </div>
            <div className={st.user_description}>
                <div className={st.user_fullname}>{userName || 'anonim'}</div>
                <div className={st.user_location}>{userLocation || 'world\'s men'}</div>
                <div className={st.user_status}>{userStatus || 'I\'m new, say me Hi!'}</div>
            </div>
            <div className={st.following_button}>
                <button onClick={() => {toggleFollowing(id)}}>
                    {isFollow ? 'Unfollow' : 'Follow'}
                </button>
            </div>

        </div>
    )
}