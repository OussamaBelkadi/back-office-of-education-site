
import {Link} from "react-router-dom";

function TButton ({
                            color='indigo',
                            to='', 
                            circle=false, 
                            href='',
                            link= false, 
                            target = "_blank", 
                            children}){
    let classes = [ 
    "flex", 
    "text-sm", 
    "border", 
    "border-2", 
    "border-transparent", 
    "whitespace-nowrap"
    ]

    if(link){

        classes=[
            ...classes,
            'transition-colors',
        ];
        switch(color){
            case "indigo":
            
                classes =[
                    ...classes, 
                    "text-indigo-500",
                    "focus: border-indigo-500"
                ];break;
            case "red":
            
                classes =[
                    ...classes, 
                    "text-red-500",
                    "focus: border-red-500"
                ]
            ;break;
        }
    }
    else{
        classes= [
            ...classes,
            "text-white",
            "focus:ring-2",
            "focus:ring-offset-2"
        ];
        switch(color){
            case "indigo":
            
                classes =[
                    ...classes, 
                    "bg-indigo-500",
                    "focus: ring-indigo-500"
                
            ];break;
            case "red":
            
                classes =[
                    ...classes, 
                    "bg-red-500",
                    "focus: ring-red-500"
                ];break;
            case "green":
                classes = [
                    ...classes,
                    "bg-emerald-500",
                    "hover: bg-emerald-600",
                    "focus: ring-emerald-400"
                ];break;
            
        }
    }


    if(circle){
        classes = [
            ...classes,
            "h-8",
            "w-8",
            "items-center",
            "justify-center",
            "rounded-full",
            "text-sm"
        ];
    }else{
        classes = [
            ...classes,
            "p-0",
            "px-4",
            "py-2",
            "rounded-md"
        ];
    }
    return
    (
        <>
            <a href="">bresak</a>
            {href && (<a href={href} className={classes.join("")} target={target}>{children}</a>)}
            {to && (<Link to={to} className={classes.join("")}>{children}</Link>)}
            {!to && !href && (<button className={classes.join("")}>{children}</button>)}
        </>
            
        
    )
}

export default TButton;