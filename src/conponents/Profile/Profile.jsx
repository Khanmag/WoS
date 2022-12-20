import PostCreator from './Posts/Postcreator'
import PostsAll from './Posts/PostsAll'
import st from './Profile.module.css'
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Profile = ({posts}) => {
    return (
        <div className={st.profile}>
            <PersonalInfo />
            <PostCreator />
            <PostsAll posts={posts} />
        </div>
    )
}

export default Profile