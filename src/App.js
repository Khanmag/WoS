import st from './App.module.css'
import Navbar from "./conponents/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import React from 'react'
import News from "./conponents/News/News";
import DialogsContainer from "./conponents/Dialogs/DialogsContainer";
import UsersContainer from "./conponents/Users/UsersContainer";
import ProfileContainer from "./conponents/Profile/ProfileContainer";
import HeaderContainer from "./conponents/Header/HeaderContainer";
import LoginContainer from "./conponents/LoginPage/LoginContainer";
import {connect} from "react-redux";
import {appInitialize} from "./redux/appReducer";
import Preloader from "./conponents/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.appInitialize()
    }

    render () {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className={st.wrapper}>
                <HeaderContainer/>
                <Navbar/>
                <Routes>
                    <Route path={'/'} element={<ProfileContainer/>}/>
                    <Route path={'/profile/:id?'} element={<ProfileContainer/>}/>
                    <Route path={'/dialogs/*'} element={<DialogsContainer/>}/>
                    <Route path={'/users'} element={<UsersContainer/>}/>
                    <Route path={'/login'} element={<LoginContainer/>}/>
                    <Route path={'*'} element={<News/>}/>
                </Routes>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {appInitialize})(App);
