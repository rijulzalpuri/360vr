import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'


import ItemList from './components/ItemList';




const store = configureStore();

render(
    <Provider store={store}>
        <Router  history={browserHistory}>
            <Route path="/" component ={ItemList}>
            <IndexRoute component={ItemList}></IndexRoute>
        </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
