import PostCreator from './Posts/Postcreator'
import PostsAll from './Posts/PostsAll'
import st from './Profile.module.css'
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Profile = ({store}) => {
    return (
        <div className={st.profile}>
            <PersonalInfo />
            <PostCreator addPost={store.addPost} newPostText={store.state.profileData.newPostText}
            newPostTextChanger={store.newPostTextChanger}/>
            <PostsAll posts={store.state.profileData.posts} />
        </div>
    )
}

export default Profile