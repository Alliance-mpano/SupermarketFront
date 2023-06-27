import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import ErrorPage from './components/common/ErrorPage.jsx'
import New from './models/AddEmployee/New'
import Add from './components/employees/Add';
import Signup from './pages/signup/Signup';
import LandPage from './pages/landpage/LandPage';
import Products from './pages/products/Products';
import Login from './pages/Login/Login.jsx'
import Cart from './pages/mycart/Cart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandPage/>,
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Signup/>
  },  
  {
    path: "/app",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Cart/>},
      {
        path: "/app/products",
        element: <Products/>,
      },
      // {
      //   path: "/app/orders",
      //   element: <Users/>
      // },
      // {
      //   path: "/admin/payments",
      //   element: <Payments />
      // }
    ]
  },
  {
    // path: "/table",
    // element: <MyTable />
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)