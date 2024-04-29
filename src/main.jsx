import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Home from './components/home/Home.jsx';
import Login from './components/page/Login.jsx';
import Register from './components/page/Register.jsx';
import AllSpot from './components/spots/AllSpot.jsx';
import AddSpots from './components/spots/AddSpots.jsx';
import MyList from './components/spots/MyList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/allSpots",
        element: <AllSpot></AllSpot>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path:"/addSpots",
        element:<AddSpots></AddSpots>
      },
      {
        path:"/myList",
        element: <MyList></MyList>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
