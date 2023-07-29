import { Navigate, Outlet } from "react-router-dom";
import Logo from "../assets/image/LOGOEDERASSA.png";
import { useStateContext } from '../contexts/ContextProvider'

function GestLayout(){
    const { currentUser, userToken } = useStateContext();
   if(userToken){
    return <Navigate to="/dashboard"/>
   }
    
   
    return(
        <>
         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                className="mx-auto h-20 w-auto"
                src={Logo}
                alt="Your Company"
                />
            </div>
            <Outlet />
        </div>
        </>
    );
}

export default GestLayout