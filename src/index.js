import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';//provides the app state information from redux to the application
import {createStore} from 'redux';
import rootReducer from './reducers';

import App from './components/app';

const store = createStore(rootReducer);

//wrap the app component in the provider component, put the store prop on the provider component
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
