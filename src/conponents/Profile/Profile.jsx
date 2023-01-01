import PostCreator from './Posts/Postcreator'
import PostsAll from './Posts/PostsAll'
import st from './Profile.module.css'
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Profile = ({profileInfo, changeNewPostText, addNewPost, newPostText, posts}) => {
    return (
        <div className={st.profile}>
            <PersonalInfo profileInfo={profileInfo}/>
            <PostCreator newPostText={newPostText}
                         addNewPost={addNewPost}
                         changeNewPostText={changeNewPostText}/>
            <PostsAll posts={posts} />
        </div>
    )
}

export default Profile