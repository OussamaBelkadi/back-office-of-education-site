import { ArrowTopRightOnSquareIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

import Tbutt from "./core/TButt"
 
export default function SurvayLayout({survey, onDeleteClick})
{

    return(
        <div className="flex flex-col py-4 px-4 shadow bg-white h-[500px]">
            <img src={survey.image} alt={survey.text} className="object-cover h-48 w-full"/>
            <h3 className="text-lg font-bold">{survey.title}</h3>
            <p className="my-3 rounded-md border-2 w-[90px] text-center text-gray-400">{survey.slug}</p>
            <p className="">{survey.description}</p>
            <div dangerouslySetInnerHTML={ {__html:survey.description}} className="overflow-hidden flex-1"></div>
            <div className="flex justify-between items-center">
                <Tbutt to={`/survey/${survey.id}`}>
                    <PencilIcon className="h-4 w-4"/><p>Edit</p>   
                </Tbutt>
                <div className="flex items-center">
                    <Tbutt href={`view/survey/${survey.slug}`} circle link>
                        <ArrowTopRightOnSquareIcon className="h-4 w-4"/>
                    </Tbutt> 
                    <Tbutt circle color="red" onClick={onDeleteClick} link>
                        <TrashIcon className="w-4 h-4"/>
                    </Tbutt>
                </div>
                

            </div>
            
        </div>
    )
}
