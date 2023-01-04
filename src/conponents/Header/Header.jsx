import React from 'react'
import st from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = ({login, isAuth, userLogout}) => {
    return (
        <header className={st.header}>
            <img src="https://cdn.pixabay.com/photo/2018/03/27/15/05/logo-3266214_1280.png"/>
            {
                isAuth
                ? <div>
                        {login}
                    <button onClick={() => {userLogout()}}>logout</button>
                </div>
                : <NavLink to={'/login'}>Log In</NavLink>
            }
        </header>
    )
}
export default Header