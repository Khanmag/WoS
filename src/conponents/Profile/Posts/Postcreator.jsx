import st from './Postcreator.module.css'
import React from "react";


const PostCreator = ({addNewPost, newPostText, changeNewPostText}) => {
    return (
        <div className={st.post_creator_wrapper}>
            <textarea value={newPostText} onChange={(e) => changeNewPostText(e.target.value)}/>
            <button onClick={addNewPost}>Add post</button>
        </div>
    )
}
export default PostCreator