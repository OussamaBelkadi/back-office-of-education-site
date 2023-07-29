import { Link } from "react-router-dom";

function Tbutt ({
    color='green',
    to='', 
    circle=false, 
    href='',
    link= false, 
    target = "_blank", 
    onClick = () => {},
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
        case "green":

        classes =[
        ...classes, 
        "text-indigo-500",
        "focus: border-indigo-500"
        ];break;
        case "red":

        classes =[
        ...classes, 
        "ml-1",
        "text-red-500",
        "focus: border-red-500"
        ]
        ;break;
        }
    }
    else if(to){
        classes = [
            ...classes
        ]
        switch(color){
            case "green":
                classes= [...classes,
                    "w-18",
                    "h-10",
                    "my-auto",
                    "flex",
                    "gap-1",
                    "text-white",
                    "bg-green-500"
                ];break;
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
            case "green":

            classes =[
            ...classes, 
            "bg-green-800",
            "focus: ring-green-00"

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

  return(
    <>
        {href && (<a className={classes.join(" ")} href={href} target={target}>{children}</a>)}
        {to && (<Link className={classes.join(" ")} to={to}>{children}</Link>)}
        {!to && !href && (<button onClick={onClick} type="submit" className={classes.join(" ")}>{children}</button>)}
    </>
    )

}

export default Tbutt        