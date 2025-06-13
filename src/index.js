
import App from './App.tsx';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import React from 'react';
import { createRoot } from 'react-dom/profiling';
import { ConfigProvider } from 'antd';




const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  
    <App />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
