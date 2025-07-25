import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <> 
  <div>
  <nav className="bg-white shadow-lg">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center">
            <img className="block h-8 w-auto" src="https://tailwindflex.com/images/logo.svg" alt="Logo" />
            <span className="ml-2 text-xl font-bold text-gray-800">Navbar</span>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <NavLink to='/Home'  className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Home</NavLink >
              {/* Products Dropdown Trigger */}
              <div className="relative group">
                <button className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium flex items-center bg-transparent">
                  Products
                  <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Mega Menu */}
                <div className="absolute left-0 mt-2 w-screen max-w-6xl bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform -translate-x-1/4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Software</h3>
                      <ul className="space-y-3">
                        <li><NavLink to='/' href="#" className="text-gray-600 hover:text-indigo-600">Web Development</NavLink ></li>
                        <li><NavLink  href="#" className="text-gray-600 hover:text-indigo-600">Mobile Apps</NavLink ></li>
                        <li><NavLink href="#" className="text-gray-600 hover:text-indigo-600">Desktop Software</NavLink ></li>
                        <li><NavLink href="#" className="text-gray-600 hover:text-indigo-600">Enterprise Solutions</NavLink ></li>
                        <li><NavLink  href="#" className="text-gray-600 hover:text-indigo-600">API Services</NavLink ></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Hardware</h3>
                      <ul className="space-y-3">
                        <li><NavLink  href="#" className="text-gray-600 hover:text-indigo-600">Laptops</NavLink ></li>
                        <li><NavLink href="#" className="text-gray-600 hover:text-indigo-600">Desktops</NavLink ></li>
                        <li><NavLink  href="#" className="text-gray-600 hover:text-indigo-600">Tablets</NavLink ></li>
                        <li><NavLink  href="#" className="text-gray-600 hover:text-indigo-600">Accessories</NavLink ></li>
                        <li><NavLink  href="#" className="text-gray-600 hover:text-indigo-600">Networking</NavLink ></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured</h3>
                      <div className="bg-gray-100 p-4 rounded-lg">
                        <img src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Featured Product" className="rounded-lg mb-3" />
                        <h4 className="font-medium text-gray-900">New Release</h4>
                        <p className="text-sm text-gray-600 mb-2">Check out our latest product offering with advanced
                          features.</p>
                        <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Learn more →</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <NavLink to='/Brands' href="#" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Brands</NavLink >
              <NavLink to='/Cart' href="#" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Cart</NavLink >
              <NavLink to='/Catogries' href="#" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Catogries</NavLink >
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="hidden sm:flex sm:items-center">
            <NavLink to='/Login' href="#" className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">Login</NavLink >
            <NavLink to='/Register' href="#" className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">Sign
              Up</NavLink >
          </div>
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false" id="mobile-menu-button">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* Mobile menu, show/hide based on menu state */}
    <div className="sm:hidden hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <NavLink to='/Home' href="#" className="bg-gray-100 text-gray-900 block px-3 py-2 rounded-md text-base font-medium">Home</NavLink >
        {/* Mobile Products Dropdown */}
        <div className="relative">
          <button className="w-full text-left text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center justify-between mobile-dropdown-trigger">
            Products
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="hidden px-4 py-2 mobile-dropdown-content">
            <div className="border-l-2 border-indigo-500 pl-2 mb-4">
              <h4 className="font-medium text-gray-900 mb-2">Software</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Web Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Mobile Apps</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Desktop Software</a></li>
              </ul>
            </div>
            <div className="border-l-2 border-indigo-500 pl-2">
              <h4 className="font-medium text-gray-900 mb-2">Hardware</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Laptops</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Desktops</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600 block">Accessories</a></li>
              </ul>
            </div>
          </div>
        </div>
        <NavLink to='/Brands' href="#" className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Brands</NavLink >
        <NavLink to='/Cart' href="#" className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Cart</NavLink >
        <NavLink to='/Catogries' href="#" className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">Categorises</NavLink >
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-3 space-y-2 flex-col">
            <a href="#" className="block w-full text-center text-gray-900 bg-gray-100 px-3 py-2 rounded-md text-base font-medium">
              Login
            </a>
            <NavLink to='/Login' href="#" className="block w-full text-center bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium">
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
  {/* Page content */}
  {/* <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div className="px-4 py-6 sm:px-0">
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
        <p className="text-gray-500 text-xl">Page Content Goes Here</p>
      </div>
    </div>
  </div> */}
</div>



   </>
  )
}
