import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore, compose } from 'redux';
import allReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store1 = createStore(
  allReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);


store1.subscribe(function(){
  console.log(JSON.stringify(store1.getState()));
})

ReactDOM.render(<Provider store={store1}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();