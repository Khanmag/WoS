import Post from "./Post"
import React from "react";

const postsData = [
    {id: '1', text: 'HTML user'},
    {id: '2', text: 'CSS master'},
    {id: '3', text: 'JS is my kung-fu'},
    {id: '1', text: 'I am React GOD!!'},
]

const PostsAll = ({posts}) => {
    console.log('render')
    return (
        <div>
            {
                posts.map( ({text},i) => {
                    return <Post text={text} key={i} />
                })
            }
        </div>
    )
}

export default React.memo(PostsAll)