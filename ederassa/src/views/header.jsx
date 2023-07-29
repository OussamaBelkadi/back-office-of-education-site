import React from "react";
import Logo from "../assets/image/LOGOEDERASSA.png";
import {Link} from 'react-router-dom'

function Header(){
    return(
        <div className="2xl:container bg-dark-100 flex justify-between shadow h-14">
            <img className="w-0.4 h-10 mx-2 my-auto" src={Logo} alt="Logo of company"/>
            
                <ul className="flex w-30 mx-2 my-auto gap-4">
                        <li className="text-green-500 border-b-4 border-green-500 cursor-pointer hover:rounded-lg">Accueil</li>
                        <li className="hover:text-green-500 hover:border-b-4 hover:border-green-500">Cours</li>
                        <li className="hover:text-green-500 hover:border-b-4 hover:border-green-500">Endirect</li>
                </ul>
                <Link className="no-underline my-auto mr-2" to="/login"><button className="rounded-full w-34 h-10  border-2 border-green-500 text-green-500 px-10"> Connection </button></Link>
            
        </div>
    );
}

export default Header