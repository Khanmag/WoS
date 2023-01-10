import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addNewMessage} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

export default compose(connect(mapStateToProps, {addNewMessage}), withAuthRedirect)(Dialogs)


