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
import UpdateSpot from './components/spots/UpdateSpot.jsx';
import SoloCard from './components/spots/SoloCard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/spot')
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
        element: <MyList></MyList>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path:'/updateSpot/:id',
        element: <UpdateSpot></UpdateSpot>,
        loader: ({params}) => fetch(`http://localhost:5000/spot/${params.id}`)
      },
      {
        path:'/solosSpot/:id',
        element: <SoloCard></SoloCard> ,
        loader: ({params}) => fetch(`http://localhost:5000/spot/${params.id}`)
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
