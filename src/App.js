import Header from "./conponents/Header/Header";
import st from './App.module.css'
import Navbar from "./conponents/Navbar/Navbar";
import Profile from "./conponents/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import React from 'react'
import News from "./conponents/News/News";
import Settings from "./conponents/Settings/Settings";
import Music from "./conponents/Music/Music";
import DialogsContainer from "./conponents/Dialogs/DialogsContainer";
import Users from "./conponents/Users/Users";
import UsersContainer from "./conponents/Users/UsersContainer";
import ProfileContainer from "./conponents/Profile/ProfileContainer";
import HeaderContainer from "./conponents/Header/HeaderContainer";


const App = ({state, dispatch}) => {
    return (
        <div className={st.wrapper}>
            <HeaderContainer/>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<ProfileContainer profilePage={state.profilePage}
                                                    dispatch={dispatch}/>}/>
                <Route path={'/profile/:id?'} element={<ProfileContainer profilePage={state.profilePage}
                                                           dispatch={dispatch}/>}/>
                <Route path={'/dialogs/*'} element={<DialogsContainer />}/>
                <Route path={'/users'} element={<UsersContainer />}/>
                <Route path={'*'} element={<News/>}/>
            </Routes>
        </div>
    );
}


export default App;
