import React, {useState} from "react";
import {connect} from "react-redux";
import {getAuthUserInfo, setAuthUser, userLogout} from "../../redux/authReducer";
import st from "./Header.module.css";
import Navbar from "./Navbar";
import defaultPhoto from "../../localImage/defaultUser.png";
import {NavLink} from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";


const Header = ({login, isAuth, userLogout, photo}) => {
    const [isMenuOpen, setMenuOpen] = useState(false)
    let styles = isMenuOpen ? `${st.active_header} ${st.header_wrapper}` : st.header_wrapper
    return <>
        <header className={styles}>
            <Navbar/>
            <AuthBlock isAuth={isAuth} userLogout={userLogout} login={login} photo={photo}/>
        </header>
        <OpenMobileMenuButton isOpen={isMenuOpen} setOpenStatus={setMenuOpen}/>
    </>
}

const OpenMobileMenuButton = ({isOpen, setOpenStatus}) => {
    return (
        <button className={st.open_menu_button} onClick={() => {
            setOpenStatus(!isOpen)
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
    }
}

export default connect(mapStateToProps, {getAuthUserInfo, userLogout})(Header)

const AuthBlock = ({isAuth, userLogout, login, photo}) => {
    return <div className={st.auth_block}>
        <img src={photo || defaultPhoto} alt={'user image'}/>
        <span>{login || 'anonim'}</span>
        {(isAuth) ? <button onClick={userLogout}>logout</button> : <NavLink to={'/login'}>Log In</NavLink>}
    </div>
}