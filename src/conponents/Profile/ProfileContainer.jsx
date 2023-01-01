import React from "react";
import Profile from "./Profile";
import {
    addNewPost, toggleIsFetching,
    changeNewPostText, getProfile, setProfileInfo,
} from "../../redux/profileReducer";
import Preloader from "../Preloader/Preloader";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching()
        let userId = this.props.router.params.id
        if (!userId) {
            userId = 15
        }
        this.props.getProfile(userId)
    }


    render() {
        return (<div>
            {
                (this.props.isFetching && this.props.profileInfo)
                    ? <Preloader/>
                    : <Profile posts={this.props.posts}
                               profileInfo={this.props.profileInfo}
                               changeNewPostText={this.props.changeNewPostText}
                               addNewPost={this.props.addNewPost}
                               newPostText={this.props.newPostText}
                    />
            }
        </div>)
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
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}


export default connect(mapStateToProps, {
    changeNewPostText, addNewPost, getProfile,
    toggleIsFetching, setProfileInfo,
})(withRouter(ProfileContainer))