import st from './UsersError.module.css'
import errorImg from '../../localImage/errorRobot.png'

const UsersError = () => {
    return (
        <div className={st.error_wrapper} style={{backgroundImage: `url(${errorImg})`}}>
            <h2>Error</h2>
            <h3>Something go wrong</h3>
            <h4>Sorry, please try latter</h4>
        </div>
    )
}
export default UsersError