import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-7gf0jvryed604gz4.us.auth0.com"
        clientId="mJnJAVOxJRqV30ICLGNG3U6s74zrheDk"
        redirectUri={window.location.origin}
      >
         <Provider store={store}></Provider>
        <App />
      </Auth0Provider>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
