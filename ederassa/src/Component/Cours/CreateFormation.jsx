import { useEffect, useState } from "react";

import { Link, Navigate } from "react-router-dom";
import axiosClient from "../../views/axios";
import primaireImage from "../../assets/image/Pusel.png";
import collegeImage from "../../assets/image/backbag.png";
import truncomun from "../../assets/image/pincel.png";
import bac from "../../assets/image/Troncommun.png";
import bac2 from "../../assets/image/Bac.png"
import Sup from "../../assets/image/grad.png"

function CreateFormation(){
        const [idniveau, setIdNiveau] = useState('');
        const [subjects, setSubject] = useState([]);
        
        
            useEffect(()=>{
                setIdNiveau(localStorage.getItem('NIVEAU'));
                axiosClient.get('/niveau').then(({data})=>{
                    setSubject(data);
                    console.log(data);
                    
                })
            });

            function selectNiveau(niveaux){
                localStorage.setItem("NIVEAU", niveaux);
            }
           
            function selectNiveau(id){
                localStorage.setItem('niveau', id);
               
            }
           

  return (
    
    
        <div className=" w-[950px] mx-auto  grid grid-cols-2 gap-4 mt-20">
        {subjects.map((subject) => (
            <Link to='/createCours'>
            <div onClick={() => selectNiveau(subject.id)}  key={subject.id}  className="p-4 h-40 bg-white flex gap-2 rounded shadow">
               
                {subject.niveaux === "Primaire" && ( <img src={primaireImage} alt={subject.name} />)}
                {subject.niveaux === "College" && ( <img src={collegeImage} alt={subject.name} />)}
                {subject.niveaux === "Tronc Commun" && ( <img src={truncomun} alt={subject.name} />)}
                {subject.niveaux === "Etude Supereur" && ( <img src={Sup} alt={subject.name} />)}
                {subject.niveaux === "1er année Bac" && ( <img src={bac} alt={subject.name} />)}
                {subject.niveaux === "2éme année Bac" && ( <img src={bac2} alt={subject.name} />)}

                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{subject.niveaux}</h3>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem pariatur, quam aliquid enim perspiciatis magni dolor alias </p>
                </div>
            
            </div>
            </Link>
        ))}
        </div>
    
  );
};
export default CreateFormation;