import st from "./Messages.module.css";
import React from "react";
import {Field, Form} from 'react-final-form'
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
                    messages.map(({text}, i) => {
                        return <Message text={text} key={i}/>
                    })
                }
            </div>
            <NewMessageForm addNewMessage={addNewMessage}/>
            {/*<div className={st.newmessagecreator}>*/}
            {/*    <textarea onChange={(e) => changeNewMessageText(e.target.value)} value={newMessageText}/>*/}
            {/*    <button onClick={addNewMessage}>Send</button>*/}
            {/*</div>*/}
        </div>
    )
}

const NewMessageForm = ({addNewMessage}) => {
    return (
        <Form onSubmit={formObj => {
            console.log(formObj);
            addNewMessage(formObj.message)
        }}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit} className={st.new_message_creator}>
                    <Field name='message' type="text" placeholder="mess" component={'input'}/>
                    <button type="submit">Submit</button>
                </form>
            )}
        </Form>
    )
}


export default Messages

