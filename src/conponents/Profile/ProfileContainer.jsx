import React from "react";
import Profile from "./Profile";
import {
    addNewPost, toggleIsFetching,
    changeNewPostText, getProfile, setProfileInfo, getStatus, updateStatus,
} from "../../redux/profileReducer";
import Preloader from "../Preloader/Preloader";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching()
        let userId = this.props.router.params.id
        if (!userId) {
            userId = this.props.myId || 19785
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }


    render() {
        return <>
            {
                (this.props.isFetching && this.props.profileInfo)
                    ? <Preloader/>
                    : <Profile posts={this.props.posts}
                               profileInfo={this.props.profileInfo}
                               changeNewPostText={this.props.changeNewPostText}
                               addNewPost={this.props.addNewPost}
                               status={this.props.status}
                               updateStatus={this.props.updateStatus}
                    />
            }
        </>
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }
    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.profilePage.isFetching,
        profileInfo: state.profilePage.profileInfo,
        posts: state.profilePage.posts,
        status: state.profilePage.profileStatus,
        myId: state.authData.id
    }
}

export default connect(mapStateToProps, {
    addNewPost, getProfile,
    toggleIsFetching, setProfileInfo, getStatus, updateStatus
})(withRouter(ProfileContainer))