import st from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom";

const createNavlink = (name, link, i) => {
    return (
        <NavLink to={link} key={i}
                 className={({isActive}) => isActive ? (st.activelink + " " + st.navlink) : st.navlink}>
            {name}
        </NavLink>
    )
}
const navbarData = [
    {name: "Profile", link: "/profile"},
    {name: "Dialogs", link: "/dialogs"},
    {name: "Users", link: "/users"},
    {name: "Music", link: "/music"},
    {name: "Setting", link: "/settings"},
]
const Navbar = () => {
    return (
        <nav className={st.nav}>
            {navbarData.map((item, i) => (
                createNavlink(item.name, item.link, i)
            ))}
        </nav>
    )
}

export default Navbar