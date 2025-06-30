import React from 'react';
import { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Componant/Layout/Layout';
import Home from './Componant/Home/Home';
import About from './Componant/About/About';
import Brands from './Componant/Brands/Brands';
import Login from './Componant/Login/Login';
import Cart from './Componant/Cart/Cart';
import Register from './Componant/Register/Register';
import Product from './Componant/Products/Products';
import ProductDetails from './Componant/ProductDetails/ProductDetails';
import Catogries from './Componant/Catogries/Catogries';
import Portfolio from './Componant/Portfolio/Portfolio';
import Contact from './Componant/Contact/Contact';
import Notfound from './Componant/Notfound/Notfound';

function App() {
  const [count, setCount] = useState(0);
  
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "Login", element: <Login /> },
        { path: "cart", element: <Cart /> },
        { path: "about", element: <About /> },
        { path: "brands", element: <Brands /> },
        { path: "login", element: <Login /> },
        { path: "Catogries", element: <Catogries /> },
        { path: "register", element: <Register /> },
        { path: "portfolio", element: <Portfolio /> }, 
        { path: "contact", element: <Contact /> },
        { path: "*", element: <Notfound /> }
      ]
    }
  ]);

  return (
    <RouterProvider router={myRouter} />
  );
}

export default App;
