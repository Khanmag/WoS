import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addNewMessage} from "../../redux/dialogsReducer";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import developingPhoto from '../../localImage/sites-responsivos.png'
import st from './Dialogs.module.css'


const DialogsFake = () => {
    return <div className={st.developing_page}>
        <h3>Page in developing...</h3>
    </div>
}
export default DialogsFake

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

// export default compose(connect(mapStateToProps, {addNewMessage}), withAuthRedirect)(Dialogs)


