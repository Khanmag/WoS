import st from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";
import Messages from "./Messages";


const Dialog = ({name, id, avatar}) => {
    return(
        <div className={st.singledialogwrapper}>
            <img src={avatar}/>
            <NavLink to={'/dialogs/' + id}
                     className={({isActive}) => isActive ? (st.dialogactive + " " + st.dialog) : st.dialog}>
                {name}
            </NavLink>
        </div>

    )
}


const Dialogs = ({store}) => {
    return (
        <div className={st.dialogswrapper}>
            <div className={st.alldialogs}>
                {
                    store.state.dialogsPage.dialogs.map( ({name,id, avatar}) => {
                        return <Dialog name={name} id={id} key={id} avatar={avatar} />
                    })
                }
            </div>
            <Messages newMessageText={store.state.dialogsPage.newMessageText}
                      newMessageTextChanger={store.newMessageTextChanger}
                      addNewMessage={store.addNewMessage}
                      messages={store.state.messages}/>
        </div>
    )
}
export default Dialogs