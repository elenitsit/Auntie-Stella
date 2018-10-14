import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from "redux-thunk";
import reducer from "./reducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";


const rootReducer = combineReducers({
    reducer

});

ReactDOM.render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <Router>

           <App />

        </Router>
    </Provider>,

    document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
