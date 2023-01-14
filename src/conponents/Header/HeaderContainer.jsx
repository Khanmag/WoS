import React, {useState} from "react";
import {connect} from "react-redux";
import {getAuthUserInfo, setAuthUser, userLogout} from "../../redux/authReducer";
import st from "./Header.module.css";
import Navbar from "./Navbar";
import defaultPhoto from "../../localImage/defaultUser.png";
import {NavLink} from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {toggleModalStatus} from "../../redux/appReducer";


const Header = ({login, isAuth, userLogout, photo, isModalOpen, toggleModalStatus}) => {
    const styles = isModalOpen ? `${st.active_header} ${st.header_wrapper}` : st.header_wrapper
    return <>
        <header className={styles}>
            <Navbar/>
            <AuthBlock isAuth={isAuth} userLogout={userLogout} login={login} photo={photo}/>
        </header>
        <OpenMobileMenuButton isOpen={isModalOpen} setOpenStatus={toggleModalStatus}/>
    </>
}

const OpenMobileMenuButton = ({isOpen, setOpenStatus}) => {
    return (
        <button className={st.open_menu_button} onClick={() => {
            setOpenStatus()
        }}>
            {isOpen
                ? <AiOutlineClose color='white' size={'30px'}/>
                : <AiOutlineMenu color='white' size={'30px'}/>
            }
        </button>
    )

}


let mapStateToProps = (state) => {
    return {
        login: state.authData.login,
        email: state.authData.email,
        isAuth: state.authData.isAuth,
        photo: state.authData.photos.small,
        isModalOpen: state.app.isModalOpen,
    }
}

export default connect(mapStateToProps, {getAuthUserInfo, userLogout, toggleModalStatus})(Header)

const AuthBlock = ({isAuth, userLogout, login, photo}) => {
    return <div className={st.auth_block}>
        <img src={photo || defaultPhoto} alt={'user image'}/>
        <span>{login || 'anonim'}</span>
        {(isAuth) ? <button onClick={userLogout}>logout</button> : <NavLink to={'/login'}>Log In</NavLink>}
    </div>
}