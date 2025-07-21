import React, { useEffect, useState } from 'react'
import style from "./Register.module.css";
import { UNSAFE_getTurboStreamSingleFetchDataStrategy } from 'react-router-dom'
import { Formik, useFormik } from 'formik';
import axios from 'axios';


async function submitForm(val) {
  let {data} = await axios.post("https://linked-posts.routemisr.com/users/signup",val)
  console.log(data)
  
}
export default function Register() {
    const [counter, setCounter] = useState(0); 
let formik = useFormik({
  initialValues: {    
    name: "",    
    email: "",    
    password: "", 
    rePassword: "",
     phone: "",   
  },
  onSubmit: (values) => {
    console.log(values);
  },
})
    useEffect
  return <>
 <div className="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
  <div className="w-full max-w-md space-y-8">
    <div className="bg-white shadow-md rounded-md p-6">
      <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="Workflow" />
      <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
        Register Now
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-6 " method="POST">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 ">Username</label>
          <div className="mt-1">
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} id="name" name="name" type="name"  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <div className="mt-1">
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} id ="email" name="email" type="email" autoComplete="email-address" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <div className="mt-1">
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} id="password" name="password" type="password" autoComplete="password" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
          </div>
        </div>
        <div>
          <label htmlFor="rePassword" className="block text-sm font-medium text-gray-700">rePassword</label>
          <div className="mt-1">
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} id="rePassword" name="rePassword" type="Password" autoComplete="confirm-password" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
          </div>
        </div>
                <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">phone</label>
          <div className="mt-1">
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} id="phone" name="phone" type="phone" autoComplete="confirm-password" required className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
          </div>
        </div>
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
            Account
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

   </>
}
