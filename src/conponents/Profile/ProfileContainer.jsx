import React, {useEffect} from "react";
import Profile from "./Profile";
import {
    addNewPost, toggleIsFetching,
    getProfile, setProfileInfo, getStatus, updateStatus, updatePhoto, saveProfileData,
} from "../../redux/profileReducer";
import Preloader from "../common/Preloader";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";


const ProfileContainer = ({
                              toggleIsFetching, isAuth, authUserId, isFetchingProfile, profileInfo,
                              getProfile, getStatus, addNewPost, status, updateStatus, updatePhoto, saveProfileData
                          }) => {
    const {userId} = useParams()
    const isOwner = () => !(userId && (userId !== authUserId));
    const navigate = useNavigate()

    useEffect(() => {
        let id = userId
        toggleIsFetching()
        if (!userId && isAuth) {
            id = authUserId
        } else if (!userId && !isAuth) return  navigate('/login')
        if (id) {
            getProfile(id)
            getStatus(id)
        }
    }, [isAuth])

    return <>
        {
            (isFetchingProfile && profileInfo)
                ? <Preloader/>
                : <Profile profileInfo={profileInfo} addNewPost={addNewPost}
                           status={status} updateStatus={updateStatus}
                           isAuth={isAuth} isOwner={isOwner()}
                           updatePhoto={updatePhoto} saveProfileData={saveProfileData}/>
        }
    </>

}



let mapStateToProps = (state) => {
    return {
        isFetchingProfile: state.profilePage.isFetchingProfile,
        profileInfo: state.profilePage.profileInfo,
        posts: state.profilePage.posts,
        status: state.profilePage.profileStatus,
        isAuth: state.authData.isAuth,
        authUserId: state.authData.id
    }
}
let dispatching = {
    addNewPost, getProfile, saveProfileData,
    toggleIsFetching, setProfileInfo, getStatus, updateStatus, updatePhoto,
}
export default connect(mapStateToProps, dispatching)(ProfileContainer)