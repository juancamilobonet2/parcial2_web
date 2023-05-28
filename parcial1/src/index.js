import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {IntlProvider} from 'react-intl';

import localeEnMessages from './locales/en.json';
import localeEsMessages from './locales/es.json';


const root = ReactDOM.createRoot(document.getElementById('root'));

const locale = navigator.language;
let messages = localeEnMessages;

if (locale === 'en-US') {
  messages = localeEnMessages;
} else {
  messages = localeEsMessages;
}


root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
