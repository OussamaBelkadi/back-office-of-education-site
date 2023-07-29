
import axiosClient from "../views/axios"
import Logo from  "../assets/image/LOGOEDERASSA.png"
import { useState } from "react";
import { Link, Navigate, 
 } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider";


function Login() {
  const {setCurrentUser, setUserToken} = useStateContext();
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [error, setError] = useState('');
 

  function onSubmit(e){
      
    e.preventDefault();
    let data = { email, password };
    
   
     setError({__html: ''});
    axiosClient.post('/login', data).then(({data})=>{
               
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

 return (
 
   <>
   
   <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
       Sign in to your account
     </h2>
     {error && (<div className="bg-red-600 rounded py-2 px-3 text-white" dangerouslySetInnerHTML={error}></div>)}
   <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
     <form className="space-y-6" onSubmit={onSubmit} method="POST">
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
             placeholder='Email'
             required
             className="block w-full rounded-md border-0 px-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           />
         </div>
       </div>

       <div>
         <div className="flex items-center justify-between">
           <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
             Password
           </label>
           <div className="text-sm">
             <a href="#" className="font-semibold text-gray-600 hover:text-gray-500">
               Forgot password?
             </a>
           </div>
         </div>
         <div className="mt-2">
           <input
             id="password"
             name="password"
             type="password"
             onChange={(e)=>{setPass(e.target.value)}}
            placeholder='Password'
             required
             className="block w-full rounded-md border-0 px-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           />
         </div>
       </div>

       <div>
         <button 
           type="submit"
           className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
         >
           Sign in
         </button>
       </div>
     </form>

     <p className="mt-10 text-center text-sm text-gray-500">
       Not a member?{' '}
       <Link to="/signup"  className="font-semibold leading-6 text-green-600 hover:text-green-500">
         Register now if don't have a count 
       </Link>

     </p>
   </div>
   </>
   
 )
}

export default Login
