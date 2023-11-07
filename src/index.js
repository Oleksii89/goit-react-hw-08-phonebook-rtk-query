import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'App';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
