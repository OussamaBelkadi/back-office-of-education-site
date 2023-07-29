import { useEffect, useState } from "react"
import PageComponent from "../pageConponent";
import axiosClient from "../../views/axios";
import primaireImage from "../../assets/image/Pusel.png";
import collegeImage from "../../assets/image/backbag.png";
import truncomun from "../../assets/image/pincel.png";
import bac from "../../assets/image/Troncommun.png";
import bac2 from "../../assets/image/Bac.png"
import Sup from "../../assets/image/grad.png"
import { Link } from "react-router-dom";


export default function CreateCours(){
    const [idniveau, setIdNiveau] = useState(localStorage.getItem("niveau"));
    const [niveau, setNiveau] = useState('');
    const [branches, setBranche] =useState([]);
    
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axiosClient.get(`/branche/${idniveau}`);
        setItems(response.data.branches);
        setNiveau(response.data.niveau);
         // Set the items directly from the response data
         console.log(response.data.branches)
      } catch (error) {
        console.log(error);
      }
    };
  
    const chunkArray = (array, size) => {
      const result = [];
      for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
      }
      return result;
    };
  
    const columns = chunkArray(items, 3);

    function selectNiveau(id){
        localStorage.setItem('branche', id)
    }
  
    return (
        <PageComponent title={niveau.niveaux}>
      <div className="mt-10 min-h-56 container-full shadow-xl flex justify-center">
        <div>
            {niveau.niveaux === "Primaire" && ( <img src={primaireImage} className="h-36" alt={niveau.name} />)}
             {niveau.niveaux === "College" && ( <img src={collegeImage} className="h-36" alt={niveau.name} />)}
             {niveau.niveaux === "Tronc Commun" && ( <img src={truncomun} className="h-36" alt={niveau.name} />)}
             {niveau.niveaux === "Etude Supereur" && ( <img src={Sup} className="h-36" alt={niveau.name} />)}
             {niveau.niveaux === "1er année Bac" && ( <img src={bac} className="h-36" alt={niveau.name} />)}
             {niveau.niveaux === "2éme année Bac" && ( <img src={bac2} className="h-36" alt={niveau.name} />)}
        </div>
        <div>
        {columns.map((column, columnIndex) => (
             
          <div className="min-w-[960px] flex justify-center" key={columnIndex}>
            
            {column.map((item, index) => (
              <div className= "p-6 w-[280px] h-17 hover:text-green-600 relative " key={index}>
                {/* Display your item content here */}
                <Link to='/cour'>
                    <p onClick={() => selectNiveau(item.id)} className="h-10 before:content-['>>']"> {item.branche}</p>
                </Link>
                    
                
                {/* Add other properties from the item object */}
              </div>
            ))}
          </div>
        ))}
        </div>
      </div>
      </PageComponent>
    );
        
}
