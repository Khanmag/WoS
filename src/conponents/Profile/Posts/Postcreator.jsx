import st from './Postcreator.module.css'
import React from "react";
import {addNewPostAC, changeNewPostTextAC} from "../../../redux/profileReducer";


const PostCreator = ({dispatch, newPostText}) => {

    const changeNewPostText = (e) => {
        dispatch(changeNewPostTextAC(e.target.value))
    }
    const addPost = () => {
        dispatch(addNewPostAC())
    }

    return (
        <div className={st.postcreatorwrapper}>
            <textarea value={newPostText} onChange={changeNewPostText}/>
            <button onClick={addPost}>Add post</button>
        </div>
    )
}
export default PostCreator