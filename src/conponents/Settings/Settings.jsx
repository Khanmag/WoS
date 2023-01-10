import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Settings = () => {
    const {page} = useParams()
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(page || 1)
    useEffect(() => {
        fetch(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${30}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data.items)
            })
    }, [currentPage])
    return (
        <div>
            <NavLink to={`/settings/${(+currentPage + 1)}`} onClick={() => {setCurrentPage(+currentPage + 1)}}>next</NavLink>
            {
                users.map(item => <div>{item.name}</div>)
            }
        </div>
    )
}
export default Settings