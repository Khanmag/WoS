import React from "react";
import {connect} from "react-redux";
import {getAuthUserInfo, setAuthUser, userLogout} from "../../redux/authReducer";
import st from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import defaultPhoto from "../../localImage/defaultUser.png";
import {NavLink} from "react-router-dom";


const Header = ({login, isAuth, userLogout, photo}) => {
    return <header className={st.header_wrapper}>
        <Navbar/>
        <AuthBlock isAuth={isAuth} userLogout={userLogout} login={login} photo={photo}/>
    </header>
}

const AuthBlock = ({isAuth, userLogout, login, photo}) => {
    return <div className={st.auth_block}>
        <img src={photo || defaultPhoto} alt={'user image'}/>
        <span>{login || 'anonim'}</span>
        {(isAuth) ? <button onClick={userLogout}>logout</button> : <NavLink to={'/login'}>Log In</NavLink>}
    </div>
}


let mapStateToProps = (state) => {
    return {
        login: state.authData.login,
        email: state.authData.email,
        isAuth: state.authData.isAuth,
        photo: state.authData.photos.small,
    }
}

export default connect(mapStateToProps, {getAuthUserInfo, userLogout})(Header)