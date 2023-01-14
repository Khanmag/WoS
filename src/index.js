import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux-store'
import {Provider} from "react-redux";

window.store = store

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);




