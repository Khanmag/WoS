import React from 'react'
import st from './Header.module.css'

const Header = ({login, isAuth}) => {
    return (
        <header className={st.header}>
            <img src="https://cdn.pixabay.com/photo/2018/03/27/15/05/logo-3266214_1280.png"/>
            {
                isAuth
                ? <div>{login}</div>
                : <div>Log In</div>
            }
        </header>
    )
}
export default Header