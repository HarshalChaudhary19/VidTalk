import React from "react";
import ReactDOM from 'react-dom';
import App from './app.js';
import { ContextProvider } from "./SocketContext.js";
import './styles.css';

ReactDOM.render(
    <ContextProvider>
        <App/>
    </ContextProvider>
,document.getElementById('root')
);
  