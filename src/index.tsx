import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContinentContextProvider from './context/ContinentContext'


ReactDOM.render(
  <React.StrictMode>
    <ContinentContextProvider>
        <App />
    </ContinentContextProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


