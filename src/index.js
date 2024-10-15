import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './components/sidebar/Sidebar';
import '../src/components/sidebar/sidebar.css';
import Main from '../src/components/main/Main'
import '../src/components/main/mani.css';
import ContextProvider from './components/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <Sidebar />
    <Main/>
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

