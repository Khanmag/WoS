import st from './Post.module.css'
const Post = ({text}) => {
    return (
        <div className={st.container}>
            <img src='https://avatars.services.sap.com/images/mahesh.gonda.png' />
            <p>{text}</p>
        </div>
    )
}
export default Post