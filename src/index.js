import React from "react";
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import Router from './routes'

import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);

