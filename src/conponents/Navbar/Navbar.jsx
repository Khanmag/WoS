import st from './Navbar.module.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={st.nav}>
            <Link activeClassName={st.active} to="/profile">Profile</Link>
            <Link to="/dialogs">Dialogs</Link>
            <Link to="/news">News</Link>
            <Link to="/music">Music</Link>
            <Link to="/settings">Setting</Link>
        </nav>
    )
}

export default Navbar