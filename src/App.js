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

const App = ({state}) => {
    return (
        <div className={st.wrapper}>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Profile posts={state.posts} />}/>
                <Route path={'/profile'} element={<Profile posts={state.posts} />}/>
                <Route path={'/dialogs/*'} element={<Dialogs dialogsPage={state.dialogsPage} messages={state.messages}/>}/>
                {/*<Route path={'*'} element={<News/>}/>*/}
            </Routes>
            {/*<div className={st.content}>*/}
            {/*        <Route path="/profile" render={() => <Profile/>}/>*/}
            {/*        <Route path="/" render={() => <Dialogs/>}/>*/}
            {/*</div>*/}
        </div>
    );
}


export default App;
