import st from './Post.module.css'
const Post = ({text}) => {
    return (
        <div className={st.container}>
            <img src='https://avatars.services.sap.com/images/mahesh.gonda.png' />
            <textarea value={text}/>
        </div>
    )
}
export default Post