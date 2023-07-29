import React from "react";
import axiosClient from "../views/axios"
import { useState } from "react";
import { Link, Navigate, 
 } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider";

function Signup(){
    const {setCurrentUser, setUserToken} = useStateContext();
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState();
    const [role, setRole] = useState('fromateur');
    const [error, setError] = useState('');

    
    function onSubmit(e){
      
        e.preventDefault();
        let data = {name, email, password, passwordConfirmation, role};
        
       
         setError({__html: ''});
        axiosClient.post('/signup', data).then(({data})=>{
                   
            setCurrentUser(data.user);
            setUserToken(data.token);
           
        }).catch((error) => {
            if(error.response){
                const finalErrors = Object.values(error.response.data.errors).reduce((accum, next)=> [...next, ...accum], [])
                console.log(finalErrors);
                setError({__html: finalErrors.join('<br/>')})
            }
            console.error(error);
        });
    }
    return(
        <>
   
        
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up  account
            </h2>
            {error && (<div className="bg-red-400 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error}></div>)}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            
            <form className="space-y-6" onSubmit={onSubmit} method="POST">
            <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
                </label>
                <div className="mt-2">
                <input
                    id="name"
                    
                    onChange={(e)=>{setName(e.target.value)}}
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your email"
                 
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
                </label>
                <div className="mt-2">
                <input
                    id="email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Email"
                    required
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
           

            <div>
                <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                </label>
                
                </div>
                <div className="mt-2">
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={(e)=>{setPass(e.target.value)}}
                    placeholder="Password "
                    required
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between">
                <label htmlFor="password_confirmation" className="block text-sm font-medium leading-6 text-gray-900">
                    Password Confirmation
                </label>
                
                </div>
                <div className="mt-2">
                <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    onChange={(e)=>{setPasswordConfirmation(e.target.value)}}
                    placeholder="Password confirm"
                    required
                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
                <Link to="/login" className="text-sky-500 ">
                    Login with your account
                </Link>
            </div>

            <div>
                
                <button 
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                Sign up                </button>
            </div>
            </form>

        </div>
 
        </>
    )
}

export default Signup;