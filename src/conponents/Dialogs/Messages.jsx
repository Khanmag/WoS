import st from "./Messages.module.css";
import React from "react";


const Message = ({text}) => {
    return (
        <div>
            <div className={st.message}>{text}</div>
        </div>

    )
}


// const addNewMessage = () => {
//     let text = newMessageText.current.value
//     alert(text)
// }

const Messages = ({messages, addNewMessage, newMessageText, newMessageTextChanger}) => {
    const newMessageTextRef = React.createRef()

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
                <textarea onChange={() => {newMessageTextChanger(newMessageTextRef.current.value)}}
                          ref={newMessageTextRef} value={newMessageText}/>
                <button onClick={addNewMessage}>Send</button>
            </div>
        </div>
    )
}
export default Messages