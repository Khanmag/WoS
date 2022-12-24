import st from "./Messages.module.css";
import React from "react";
import {addNewMessageAC, changeNewMessageTextAC} from "../../redux/dialogsReducer";


const Message = ({text}) => {
    return (
        <div>
            <div className={st.message}>{text}</div>
        </div>

    )
}


const Messages = ({messages, newMessageText, addNewMessage, changeNewMessageText}) => {

    return (
        <div className={st.messageswrapper}>
            <div className={st.allmessages}>
                {
                    messages.map( ({text}, i) => {
                        return <Message text={text} key={i}/>
                    })
                }
            </div>
            <div className={st.newmessagecreator}>
                <textarea onChange={(e) => changeNewMessageText(e.target.value)} value={newMessageText}/>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    )
}
export default Messages