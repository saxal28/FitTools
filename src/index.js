import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider }  from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers"
//react-router
import { Router, browserHistory } from 'react-router'; // react-router
import routes from "./routes";
//  stylesheets
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
// for animations
import "./styles/animate.css";
//=============================
//jquery plugins
//=============================
import "./jQueryPlugins/main.js"
//fittext
import "./jQueryPlugins/jquery.fittext.js"


const createStoreWithMiddleWare = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,

  document.getElementById('root')
);
