import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addNewMessageAC, changeNewMessageTextAC} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        changeNewMessageText: (text) => dispatch(changeNewMessageTextAC(text)),
        addNewMessage: () => dispatch(addNewMessageAC()),
        }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
