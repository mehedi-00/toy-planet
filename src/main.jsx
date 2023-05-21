import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@smastrom/react-rating/style.css'
import {
  RouterProvider
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    <Toaster/>
    </div>
  </React.StrictMode>,
);
