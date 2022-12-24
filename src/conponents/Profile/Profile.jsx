import PostCreator from './Posts/Postcreator'
import PostsAll from './Posts/PostsAll'
import st from './Profile.module.css'
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Profile = ({profileData, dispatch}) => {
    return (
        <div className={st.profile}>
            <PersonalInfo />
            <PostCreator newPostText={profileData.newPostText} dispatch={dispatch}/>
            <PostsAll posts={profileData.posts} />
        </div>
    )
}

export default Profile