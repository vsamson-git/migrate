import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import App from './components/App';
import store from './store/store'
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)