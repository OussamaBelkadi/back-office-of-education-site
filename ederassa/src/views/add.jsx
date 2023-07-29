import { Link } from "react-router-dom"
import Pagecomponent from "../Component/pageConponent"


function Add(){

    
    return(
        
            <Pagecomponent title="Cours">
                <div className="container shadow border border-1 border-gray-200 mt-20 flex justify-center gap-[600px] items-center h-36">
                    <p className="ml-6 text-lg font-semibold">Ajouter ton cours Maintenent</p> 
                   <Link to="/create"> <button className="bg-green-700 rounded-sm h-9 mr-6 w-40 text-white font-semibold">Ajouter cour</button></Link>
                </div>
            </Pagecomponent>
        
    )
}
export default Add