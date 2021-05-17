import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./redux/store";
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import {rrfProps} from "./redux/store";
import firebaseData from "./firebaseData/firebaseData";
import {createFirestoreInstance } from 'redux-firestore'
//makes the Redux store available to any nested components that need to access the Redux store
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter> <Provider store={store}>
            <ReactReduxFirebaseProvider firebase={firebaseData} config={rrfProps} dispatch={store.dispatch}
                createFirestoreInstance={createFirestoreInstance}>
                <App/>
            </ReactReduxFirebaseProvider>
        </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
