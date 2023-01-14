import HeaderContainer from "./conponents/Header/HeaderContainer";
import {Outlet} from "react-router-dom";
import st from './App.module.css'
import './global_styles.css'


const Layout = () => {
    return <>
        <HeaderContainer />
        <main className={st.main}>
            <Outlet />
        </main>
        <footer></footer>
    </>
}
export {Layout}