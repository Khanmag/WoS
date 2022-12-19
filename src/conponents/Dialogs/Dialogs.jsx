import st from './Dialogs.module.css'
import {Link, Route, Routes} from "react-router-dom";
import Profile from "../Profile/Profile";
import News from "../News/News";
import React from "react";


const Dialog = ({name, id}) => {
    return(
        <Link className={st.dialog} activeClassName={st.dialogactive}
              to={'/dialogs/' + id} className={st.dialog}>{name}</Link>
    )
}


const Message = ({text}) => {
    return (
        <div className={st.message}>{text}</div>
    )
}
const dialogsData = [
    {name: 'Solo', id: 'solo'},
    {name: 'Khan', id: 'khan'},
    {name: 'Mag', id: 'mag'},
    {name: 'Eva', id: 'eva'},
]

const messagesData = [
    {text: 'Hi', id: 'asd'},
    {text: 'Meraba', id: 'asd'},
    {text: 'Salam', id: 'asd'},
]

const Dialogs = () => {
    return (
        <div className={st.dialogswrapper}>
            <div className={st.alldialogs}>
                {
                    dialogsData.map( ({name,id}) => {
                        return <Dialog name={name} id={id} />
                    })
                }
            </div>
            <div className={st.allmessages}>
                {
                    messagesData.map( ({text}) => {
                        return <Message text={text} />
                    })
                }
            </div>
        </div>
    )
}
export default Dialogs