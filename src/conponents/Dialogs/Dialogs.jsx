import st from './Dialogs.module.css'
import {Navigate, NavLink} from "react-router-dom";
import React from "react";
import Messages from "./Messages";


const Dialog = ({name, id, avatar}) => {
    return(
        <div className={st.singledialogwrapper}>
            <img src={avatar} alt='...'/>
            <NavLink to={'/dialogs/' + id}
                     className={({isActive}) => isActive ? (st.dialogactive + " " + st.dialog) : st.dialog}>
                {name}
            </NavLink>
        </div>

    )
}


const Dialogs = ({dialogs, messages, newMessageText, addNewMessage, changeNewMessageText, isAuth}) => {

    return (
        <div className={st.dialogswrapper}>

            <div className={st.alldialogs}>
                {
                    dialogs.map( ({name,id, avatar}) => {
                        return <Dialog name={name} id={id} key={id} avatar={avatar} />
                    })
                }
            </div>

            <Messages newMessageText={newMessageText}
                      addNewMessage={addNewMessage} changeNewMessageText={changeNewMessageText}
                      messages={messages}/>
        </div>
    )
}
export default Dialogs