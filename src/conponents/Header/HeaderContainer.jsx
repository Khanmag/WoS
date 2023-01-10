import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserInfo, setAuthUser, userLogout} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    render() {
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}
                       photo={this.props.photo}
                       userLogout={this.props.userLogout}/>
    }
}


let mapStateToProps = (state) => {
    return {
        id: state.authData.id,
        login: state.authData.login,
        email: state.authData.email,
        isAuth: state.authData.isAuth,
        photo: state.authData.photos.small,
    }
}

export default connect(mapStateToProps, {getAuthUserInfo, userLogout})(HeaderContainer)