import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setAuthUser} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true
            })
            .then(response => {
                // let {id, login, email} = {...response.data.data}
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    // let id = response.data.data.id
                    // let login = response.data.data.login
                    // let email = response.data.data.email
                    this.props.setAuthUser(id, login, email)
                }
            })
    }

    render() {
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}
        />
    }
}


let mapStateToProps = (state) => {
    return {
        id: state.authData.id,
        login: state.authData.login,
        email: state.authData.email,
        isAuth: state.authData.isAuth,
    }
}


export default connect(mapStateToProps, {setAuthUser})(HeaderContainer)