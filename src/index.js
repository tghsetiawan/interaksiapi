import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home/Home';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './redux/reducer/globalReducer'

// Store
const storeRedux = createStore(rootReducer);

ReactDOM.render(<Provider store={storeRedux}><Home /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
