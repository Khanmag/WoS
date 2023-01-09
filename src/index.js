import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import store from './redux/redux-store'
import {Provider} from "react-redux";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     // <React.StrictMode>
//     <BrowserRouter>
//         <App state={state}/>
//     </BrowserRouter>
//     // </React.StrictMode>
// );
// window.state=state
window.store = store

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    );
}

rerenderEntireTree(store.getState())

store.subscribe( () => {
    rerenderEntireTree(store.getState())
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
