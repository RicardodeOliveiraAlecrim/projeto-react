import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyle';



createRoot(document.getElementById('root')).render(
    <React.StrictMode> <>
    <App /> <GlobalStyle /> </>,document.getElementById("root")
    </React.StrictMode> );

