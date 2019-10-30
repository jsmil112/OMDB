// el inicio de la app
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RouteHook from 'react-route-hook';
import { Provider } from 'react-redux';
import Main from './components/Main';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <RouteHook path="/" component={Main} />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);