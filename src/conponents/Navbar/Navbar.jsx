import st from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom";

const createNavlink = (name, link) => {
    return (
        <NavLink to={link}
                 className={({isActive}) => isActive ? (st.activelink + " " + st.navlink) : st.navlink}>
            {name}
        </NavLink>
    )
}
const navbarData = [
    {name: "Profile", link: "/profile"},
    {name: "Dialogs", link: "/dialogs"},
    {name: "News", link: "/news"},
    {name: "Music", link: "/music"},
    {name: "Setting", link: "/settings"},
]
const Navbar = () => {
    return (
        <nav className={st.nav}>
            {navbarData.map((item) => (
                createNavlink(item.name, item.link)
            ))}
        </nav>
    )
}

export default Navbar