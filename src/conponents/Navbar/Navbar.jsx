import st from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom";

const createNavLink = (name, link, i) => {
    return (
        <NavLink to={link} key={i}
                 className={({isActive}) => isActive ? (st.active_link + " " + st.nav_link) : st.nav_link}>
            {name}
        </NavLink>
    )
}
const navbarData = [
    {name: "Profile", link: "/profile"},
    {name: "Dialogs", link: "/dialogs"},
    {name: "Users", link: "/users"},
    // {name: "Login", link: "/login"},
    // {name: "Music", link: "/music"},
    {name: "Setting", link: "/settings"},
]
const Navbar = () => {
    return (
        <nav className={st.nav}>
            {navbarData.map((item, i) => (
                createNavLink(item.name, item.link, i)
            ))}
        </nav>
    )
}

export default Navbar