import PostCreator from './Posts/Postcreator'
import PostsAll from './Posts/PostsAll'
import st from './Profile.module.css'
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Profile = ({profileInfo, addNewPost, posts, status, updateStatus}) => {
    return (
        <div className={st.profile}>
            <PersonalInfo profileInfo={profileInfo} status={status} updateStatus={updateStatus}/>
            <PostCreator addNewPost={addNewPost}/>
            <PostsAll posts={posts} />
        </div>
    )
}

export default Profile