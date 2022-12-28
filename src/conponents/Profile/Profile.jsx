import PostCreator from './Posts/Postcreator'
import PostsAll from './Posts/PostsAll'
import st from './Profile.module.css'
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Profile = ({profilePage, dispatch}) => {
    return (
        <div className={st.profile}>
            <PersonalInfo profileInfo={profilePage.profileInfo}/>
            <PostCreator newPostText={profilePage.newPostText} dispatch={dispatch}/>
            <PostsAll posts={profilePage.posts} />
        </div>
    )
}

export default Profile