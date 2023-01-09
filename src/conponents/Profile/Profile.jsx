import PostCreator from './Posts/Postcreator'
import PostsAll from './Posts/PostsAll'
import st from './Profile.module.css'
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import {updatePhoto} from "../../redux/profileReducer";

const Profile = ({profileInfo, addNewPost, posts, status, updateStatus, isAuth, isOwner,
                     updatePhoto, saveProfileData}) => {
    return (
        <div className={st.profile}>
            <PersonalInfo profileInfo={profileInfo}
                          status={status}
                          updateStatus={updateStatus}
                          isAuth={isAuth}
                          updatePhoto={updatePhoto}
                          isOwner={isOwner}
                          saveProfileData={saveProfileData}
            />
            <PostCreator addNewPost={addNewPost}/>
            <PostsAll posts={posts}/>
        </div>
    )
}

export default Profile