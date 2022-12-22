import st from './Postcreator.module.css'
import React from "react";


const PostCreator = ({addPost, newPostText, newPostTextChanger}) => {
    const newPostRef = React.createRef()

    return (
        <div className={st.postcreatorwrapper}>
            <textarea value={newPostText} ref={newPostRef}
                      onChange={() => {newPostTextChanger(newPostRef.current.value)}}/>
            <button onClick={addPost}>Add post</button>
        </div>
    )
}
export default PostCreator