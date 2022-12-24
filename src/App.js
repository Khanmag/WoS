import Header from "./conponents/Header/Header";
import st from './App.module.css'
import Navbar from "./conponents/Navbar/Navbar";
import Profile from "./conponents/Profile/Profile";
import Dialogs from "./conponents/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from 'react'
import News from "./conponents/News/News";
import Settings from "./conponents/Settings/Settings";
import Music from "./conponents/Music/Music";
import DialogsContainer from "./conponents/Dialogs/DialogsContainer";


const App = ({state, dispatch}) => {
    for (let i = 1; i < 10; ++i) {
        let x = i++
        console.log('x = ' + x + ', i = ' + i)
    }
    for (let i = 1; i < 10; ++i) {
        let x = ++i
        console.log('x = ' + x + ', i = ' + i)
    }
    return (
        <div className={st.wrapper}>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Profile profileData={state.profilePage}
                                                    dispatch={dispatch}/>}/>
                <Route path={'/profile'} element={<Profile profileData={state.profilePage}
                                                           dispatch={dispatch}/>}/>
                {/*<Route path={'/dialogs/*'} element={<Dialogs dialogsPage={state.dialogsPage}*/}
                {/*                                             dispatch={dispatch}/>}/>*/}
                <Route path={'/dialogs/*'} element={<DialogsContainer />}/>
                <Route path={'*'} element={<News/>}/>
            </Routes>
        </div>
    );
}


export default App;
