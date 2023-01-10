import React from 'react'
import st from './Header.module.css'
import Navbar from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";
import defaultPhoto from '../../localImage/defaultUser.png'

const Header = ({login, isAuth, userLogout, photo}) => {
    return (
        <header className={st.header_wrapper}>
            <Navbar/>
            <div className={st.auth_block}>
                <AuthBlock isAuth={isAuth} userLogout={userLogout} login={login} photo={photo}/>
            </div>
        </header>
    )
}
export default Header

const AuthBlock = ({isAuth, userLogout, login, photo}) => {
    return <>
        <img src={photo || defaultPhoto} alt={'user image'}/>
        <span>{login || 'anonim'}</span>
        {(isAuth) ? <a onClick={userLogout}>logout</a> : <NavLink to={'/login'}>Log In</NavLink>}
    </>
}