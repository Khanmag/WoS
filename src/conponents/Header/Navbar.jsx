import {NavLink} from "react-router-dom";
import st from './Header.module.css'


const navbarData = [
    {name: "Profile", link: "/profile"},
    {name: "Dialogs", link: "/dialogs"},
    {name: "Users", link: "/users"},
    // {name: "Login", link: "/login"},
    {name: "Music", link: "/music"},
    {name: "Setting", link: "/settings"},
]
const Navbar = () => {
    return <nav className={st.nav}>
            {navbarData.map((item) => (
                <CreateNavLink name={item.name} link={item.link} key={item.name} />
            ))}
        </nav>
}
export default Navbar


const CreateNavLink = ({name, link}) => {
    return <NavLink to={link}
                 className={({isActive}) => isActive ? (st.active_link + " " + st.nav_link) : st.nav_link}
        >
            {name}
        </NavLink>
}