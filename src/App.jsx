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
import Categories from './Componant/Categories/Categories'; // تم تصحيح اسم المكون
import Portfolio from './Componant/Portfolio/Portfolio';
import Contact from './Componant/Contact/Contact';
import Notfound from './Componant/Notfound/Notfound';


function App() {
  const [count, setCount] = useState(0);
  
  const myRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          { index: true, element: <Home /> }, // الصفحة الرئيسية الافتراضية
          { path: "home", element: <Home /> }, // يمكن حذفها إذا لم تكن ضرورية
          { path: "login", element: <Login /> }, // توحيد المسارات بحروف صغيرة
          { path: "cart", element: <Cart /> },
          { path: "about", element: <About /> },
          { path: "brands", element: <Brands /> },
          { path: "categories", element: <Categories /> }, // مسار معدل
          { path: "register", element: <Register /> },
          { path: "portfolio", element: <Portfolio /> },
          { path: "contact", element: <Contact /> },
          { path: "products", element: <Product /> }, // إضافة مسار Products إذا كان مستخدمًا
          { path: "products/:id", element: <ProductDetails /> }, // مثال لمسار تفاصيل المنتج
          { path: "*", element: <Notfound /> } // الصفحة غير موجودة
        ]
      }
    ],
    {
      basename: "/my-react-app" // إضافة basename إذا كان المشروع في مسار فرعي
    }
  );

  return (
    <RouterProvider router={myRouter} />
  );
}

export default App;
