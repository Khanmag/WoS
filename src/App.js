import st from './App.module.css'
import {
    createBrowserRouter,
    createHashRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider,
    Routes
} from "react-router-dom";
import React, {useEffect, useState} from 'react'
import News from "./conponents/News/News";
import DialogsContainer from "./conponents/Dialogs/DialogsContainer";
import UsersContainer from "./conponents/Users/UsersContainer";
import HeaderContainer from "./conponents/Header/HeaderContainer";
import LoginContainer from "./conponents/LoginPage/LoginContainer";
import {connect} from "react-redux";
import {appInitialize} from "./redux/appReducer";
import Preloader from "./conponents/common/Preloader";
import Settings from "./conponents/Settings/Settings";
import ProfileContainer from "./conponents/Profile/ProfileContainer";
import Music from './conponents/Music/Music';
import {Layout} from "./Layout";
import UsersError from "./conponents/Errors/UsersError";
import {usersLoader} from "./conponents/Users/Users";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<Layout/>}>
        <Route path={''} element={<Navigate to={'profile/'} replace/>}/>
        <Route path={'profile/:userId?'} element={<ProfileContainer/>}/>
        <Route path={'dialogs/*'} element={<DialogsContainer/>}/>
        <Route path={'users'} element={<Navigate to={'1'} replace/>}/>
        <Route path={'users/:page'} element={<UsersContainer/>} errorElement={<UsersError/>}/>
        <Route path={'login'} element={<LoginContainer/>}/>
        <Route path={'music'} element={<Music/>}/>
        <Route path={'settings/:page?'} element={<Settings/>}/>
        <Route path={'*'} element={<News/>}/>
    </Route>
))


const App = ({initialized, appInitialize, isModalOpen}) => {
    // const styles = isModalOpen ? {position: 'fixed'} : {}
    useEffect(() => {
        appInitialize()
    }, [])
    if (!initialized) return <Preloader/>

    return <RouterProvider router={router} />
}


let mapStateToProps = (
    state
) =>
    ({
        initialized: state.app.initialized,
        isModalOpen: state.app.isModalOpen,
    })

export default connect(mapStateToProps, {appInitialize})(App);
