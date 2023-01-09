import React from "react";
import Profile from "./Profile";
import {
    addNewPost, toggleIsFetching,
    getProfile, setProfileInfo, getStatus, updateStatus, updatePhoto, saveProfileData,
} from "../../redux/profileReducer";
import Preloader from "../common/Preloader";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        this.props.toggleIsFetching()
        let userId = this.props.router.params.id
        if (!userId) {
            userId = this.props.myId
            if (!userId) {
                this.props.router.location.pathname = '/login'
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.id !== prevProps.router.params.id) {
            this.refreshProfile()
        }
    }


    render() {
        return <>
            {
                (!this.props.router.params.id && !this.props.isAuth) && <Navigate to={'/login'} />
            }
            {
                (this.props.isFetchingProfile && this.props.profileInfo)
                    ? <Preloader/>
                    : <Profile posts={this.props.posts}
                               profileInfo={this.props.profileInfo}
                               changeNewPostText={this.props.changeNewPostText}
                               addNewPost={this.props.addNewPost}
                               status={this.props.status}
                               updateStatus={this.props.updateStatus}
                               isAuth={this.props.isAuth}
                               isOwner={Boolean(!this.props.router.params.id && this.props.isAuth)}
                               updatePhoto={this.props.updatePhoto}
                               saveProfileData={this.props.saveProfileData}
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
        isFetchingProfile: state.profilePage.isFetchingProfile,
        profileInfo: state.profilePage.profileInfo,
        posts: state.profilePage.posts,
        status: state.profilePage.profileStatus,
        isAuth: state.authData.isAuth,
        myId: state.authData.id
    }
}

export default connect(mapStateToProps, {
    addNewPost, getProfile, saveProfileData,
    toggleIsFetching, setProfileInfo, getStatus, updateStatus, updatePhoto,
})(withRouter(ProfileContainer))