import React from "react";
import Pagecomponent from "../Component/pageConponent";
import { useStateContext } from "../contexts/ContextProvider";
import SurvayLayout from "../Component/SurvayLayout";
import Tbutt from "../Component/core/TButt";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

function Learn(){
    const { currentUser } = useStateContext();
    const {surveys} = useStateContext();
    console.log(currentUser);
    const onDeleteClick = ()=>{
        console.log('On Delete Click')
    }
    return(
        
        <Pagecomponent title="MEDRASSA PLACE" button={(<Tbutt to="/surveys/create">
            <PlusCircleIcon className="text-white h-4 w-4"/>Add
        </Tbutt>)}>
            
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 w-full mx-auto">
                {surveys.map((survey)=>(
                    <SurvayLayout survey={survey} onDeleteClick={onDeleteClick} key={survey.id}/>
                ))}
            </div>

        </Pagecomponent>
    )
}

export default Learn