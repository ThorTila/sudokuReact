import React from 'react';
import {render} from 'react-dom';
import App from './containers/AppContainer';
import store from './store';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
