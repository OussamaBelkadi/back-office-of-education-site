import { useEffect, useState } from "react"
import axiosClient from "../../views/axios"
import { data } from "autoprefixer";
import PageComponent from "../pageConponent";
import IngMatiere from "./createCour/ImgMatiere";
import ImageDisplay from "./createCour/ImgMatiere";
import axios from "axios";
import { Link } from "react-router-dom";

export default function MatiereCour(){
    const Imag = null
    const [title, setTitle] = useState([]);
    const [niveau_id, setNiveau] = useState(localStorage.getItem('niveau'));
    const [branche_id, setBranche] = useState(localStorage.getItem('branche'));
    const [imgLink, setLinkimg] = useState('');
    const [mat, setMatieres] = useState([]);
    useEffect(()=>{
        
      const donne = {niveau_id, branche_id}
      console.log(data)
        axiosClient.post('/matiere', donne).then(({data})=>{
            setMatieres(data);
            console.log(niveau_id, branche_id)
        })
    }, []);
    
    
    return(
        <>
            <PageComponent title={title}>
                
                <div className="grid grid-cols-4 gap-y-5">
                {mat.map((item, index) => (
                    <Link to="/surveys/create">
                        <div key={index} className="flex flex-col  items-center  hover:cursor-pointer bg-gray-100 w-48 p-4">
                        <ImageDisplay  imageName={item.matiere} />
                        <h3 className="font-bold text-green-700">{item.matiere}</h3>
                        <h3>{item.niveau.niveaux}</h3>
                        </div>
                    </Link>
                ))}
                </div>
   
              
            </PageComponent>
        </>
    )
}