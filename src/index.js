import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import app from "./Store/app";

const stores = {
    app
}

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>
    , document.getElementById('root')
);

serviceWorker.unregister();
