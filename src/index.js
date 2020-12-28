import "./main.css"
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import {browserHistory,Router,Route} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import Layout from "./Containers/Layout";
import Items from "./Containers/Items";
import Basket from "./Containers/Basket";
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './utils/keycloakConfig';
import * as serviceWorker from './utils/serviceWorker'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory,store);
const jsx = (
    <ReactKeycloakProvider authClient={keycloak}>
    <Provider store={store}>
       <Router history={history}>
            <Route component={Layout}>
                <Route path="/" component={Items}></Route>
                <Route path="/categories/:id" component={Items} />
            </Route>
            <Route path="/basket" component={Basket} />
       </Router>
    </Provider>
    </ReactKeycloakProvider>
);
//serviceWorker.register()

ReactDOM.render(jsx,document.getElementById("root"));

