import st from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";


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


const Message = ({text}) => {
    return (
        <div className={st.message}>{text}</div>
    )
}

const Dialogs = ({dialogsPage, messages}) => {
    return (
        <div className={st.dialogswrapper}>
            <div className={st.alldialogs}>
                {
                    dialogsPage.map( ({name,id, avatar}) => {
                        return <Dialog name={name} id={id} avatar={avatar} />
                    })
                }
            </div>
            <div className={st.allmessages}>
                {
                    messages.map( ({text}) => {
                        return <Message text={text} />
                    })
                }
            </div>
        </div>
    )
}
export default Dialogs