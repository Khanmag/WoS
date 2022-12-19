import React from 'react'
import st from './Header.module.css'

const Header = () => {
    return (
        <header className={st.header}>
            <img src="https://cdn.pixabay.com/photo/2018/03/27/15/05/logo-3266214_1280.png" />
            <div>
                <nav className={st.topmenu}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Portefolio</a>
                    <a href="#">Contact</a>
                    <div class={st.animation + " " + st.startHome}></div>
                </nav>
            </div>
        </header>
    )
}
export default Header