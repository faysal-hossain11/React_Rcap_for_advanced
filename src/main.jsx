import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from './components/Dashboard.jsx';
import Home from './components/Home.jsx';
import Settings from './components/Settings.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Friends from './components/Friends.jsx';
import CounterApp from './components/CounterApp.jsx';
// import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello World</div>
  },
  {
    path: 'about',
    element: <div>about page</div>
  },
  {
    path: '/',
    Component: Home,
    children: [
      { index: true, Component: Home },
      { path: 'settings', Component: Settings },
      {
        path: '/productgrid',
        Component: ProductGrid
      },
      {
        path: '/friends',
        Component: Friends
      },
      {
        path: '/settings',
        Component: Settings
      },
      {
        path: '/counter',
        Component: CounterApp
      }
    ]
  },



])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
