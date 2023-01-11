import React from 'react'
import st from './Header.module.css'
import Navbar from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";
import defaultPhoto from '../../localImage/defaultUser.png'

const Header = ({login, isAuth, userLogout, photo}) => {
    return (
        <header className={st.header_wrapper}>

            <Navbar/>

            <AuthBlock isAuth={isAuth} userLogout={userLogout} login={login} photo={photo}/>

        </header>
    )
}
export default Header

const AuthBlock = ({isAuth, userLogout, login, photo}) => {
    return <div className={st.auth_block}>
        <img src={photo || defaultPhoto} alt={'user image'}/>
        <span>{login || 'anonim'}</span>
        {(isAuth) ? <button onClick={userLogout}>logout</button> : <NavLink to={'/login'}>Log In</NavLink>}
    </div>
}