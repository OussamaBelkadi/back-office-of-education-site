import { PhotoIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import Tbutt from "../Component/core/TButt";
import PageComponent from "../Component/pageConponent";
import { useState } from "react";



export default function AjoutFormation(){
    const [survey, setSurvey] = useState({
        title : "",
        slug : "",
        status : false,
        description : "",
        image : null,
        image_url : null,
        expire_date : "",
        questions : [],
     });


    const onSubmit = (ev)=> {
        ev.preventDefault();
        console.log('Contat')
    }
    const onImageChoose = (ev)=>{
        const file = ev.target.files[0];

        const reader = new FileReader;

        reader.onload = ()=>{
           setSurvey({ 
                ...survey, 
                image: file,
                image_url: reader.result
            });

            ev.target.value = "";

        }
        reader.readAsDataURL(file);

    }
    return(
        <>
            <PageComponent title="Create new cours" >
                <form action="#" method="POST" onSubmit={onSubmit}>
                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                        <div className="splace-y-6 bg-white px-6 sm:p-6">
                            {/* Image */}
                                <div>
                                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                        Photo
                                    </label>
                                    <div>
                                        <div className="mt-3 flex items-center">
                                            {survey.image_url && (<img src={survey.image_url} alt="image of user" className="w-92 h-52 object-cover" id="image"/>)}
                                            {!survey.image_url && (<span className="flex justify-center items-center text-gray-400 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                                <PhotoIcon className="w-8 h-8 " />
                                            </span>)}
                                            <button
                                                type="button"
                                                className="relative rounded-md ml-4 bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                    <input type="file" className="absolute left-0 top-0 bottom-0 right-0 opacity-0" onChange={onImageChoose}/>
                                                Change
                                            </button>
                                        </div>

                
                                    </div>
                                     {/* Title */}
                                    <div className="col-span-6 sm:col-span-3 mt-4">
                                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                                Survey Title
                                            </label>
                                            <input type="text" name="title" id="title" value={survey.title} placeholder="Survey Title" onChange={(ev)=> setSurvey({ ...survey, title: ev.target.value})}  className="block w-full rounded-md border-0 py-1.5 pl-2 mt-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                    </div>
                                    {/* Title */}
                                    {/* Description */}
                                    <div className="col-span-6 sm:col-span-3 mt-4">
                                        <label htmlFor="description" className="block text-sm font-medium">
                                            Description
                                        </label>
                                        <textarea
                                            id="description"
                                            name="description"
                                            value={survey.description}
                                            placeholder="Description of survey"
                                            rows={3}
                                            onChange={(ev)=>setSurvey({...survey, description:ev.target.value})}
                                            className="mt-3 block w-full rounded-md border-0 pl-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            defaultValue={''}
                                            />

                                    </div>
                                    {/* Description */}
                                </div>
                                <div className="col-span-6 sm:col-span-3 mt-4">
                                    <label htmlFor="" className="block text-sm font-medium">
                                        Expire Date 
                                    </label>
                                    <input type="date" className="mt-3 w-full rounded-md  bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        name="expire_date"
                                        id="expired_date"
                                        value={survey.expire_date}
                                        onChange={ (ev)=>setSurvey({...survey, expire_date: ev.target.value})}
                                        placeholder="Expire Date"
                                    />
                                     
                                </div>

                            {/* expired date */}
                               <div className="flex items-start mt-4">
                                <div className="flex items-center h-5">
                                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        checked={survey.status}
                                        onChange={ (ev)=> setSurvey({...survey, status: ev.target.chicked   })}
                                    />
                                </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="" className="font-medium text-gray-600">
                                                Active
                                            </label>
                                            <p className="text-gray-500">
                                                Wheter to make survey publicly available
                                            </p>
                                        </div>
                               </div>
                                <div className=" col-span-6 sm:col-span-2 mt-4">
                                    <label className="block text-sm font-medium" htmlFor="prix">Prix</label>
                                    <div className="mt-1">
                                        <input type="checkbox" className="mr-1 ml-3" value='Gratuit'/><label className="mr-3 text-xs font-medium" htmlFor="">Gratuit</label><input type="checkbox" className="mr-1" value=''/><label className=" mr-3 text-xs font-medium" htmlFor="">Payent</label>
                                    </div>
                                    
                                </div>
                                
                               <div className="px-4 py-3 text-right sm:px-6">
                                    <Tbutt>Save</Tbutt>
                               </div>


                           
                        </div>

                    </div>
                </form>
            </PageComponent>
        </>
    )
}