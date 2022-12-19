import Post from "./Post"

const postsData = [
    {id: '1', text: 'HTML user'},
    {id: '2', text: 'CSS master'},
    {id: '3', text: 'JS is my kung-fu'},
    {id: '1', text: 'I am React GOD!!'},
]

const PostsAll = () => {
    return (
        <div>
            {
                postsData.map( ({text}) => {
                    return <Post text={text} />
                })
            }
        </div>
    )
}

export default PostsAll