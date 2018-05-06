import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import store from './create_store'
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ContactPage from './contact_page'

ReactDOM.render(
  <Provider store={store}>
    <ContactPage />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
