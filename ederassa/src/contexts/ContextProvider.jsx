import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    surveys: {},
    setCurrentUser: ()=> {},
    setUserToken: ()=>{},
});

const tmpSurveys = [
    {
        "id": 1,
        "image": "https://ederassa.ma/wp-content/uploads/2023/04/%D9%84%D8%AD%D8%B3%D9%86-%D8%A7%D9%8A%D8%AA-%D8%B9%D9%84%D8%A7-1.jpg",
        "title": "التربية الاسلامية -المستوى الثالثة اعدادي",
        "slug": "Dasw",
        "status": true,
        "description":"تلائم مستواكما العقلي, وتراعي نموكما العاطفي والجسمي وأن يما على",
            "question":[
            {
                "id": 15,
                "type": "text",
                "question": "from which contry are you?",
                "description": null
            },
            {
                "id": 16,
                "type": "text",
                "question": "Do you have different color?",
                "description": null
            },
            {
                "id": 16,
                "type": "text",
                "question": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ab a ex temporibus",
                "description": "null to replayu the last view",
                "data":{
                    "option":[
                        {
                            "uuid": "80eee8950ki30230949",
                            "text": "Javascript"
                        },
                        {
                            "uuid": "6752412oeoiw988332jd",
                            "text": "php"
                        },
                        {
                            "uuid": "6752412oeoiw988332jd",
                            "text": "Html + Css"
                        }
                    ]
                }
            },
            {
                "id": 18,
                "type": "text",
                "question": "NAdi Canadi Das",
                "description": "null to replayu the last view",
                "data":[]
            }
        ]
    },
    {
        "id": 2,
        "image": "https://ederassa.ma/wp-content/uploads/2023/05/%D8%A7%D8%B3%D9%85%D8%A7%D8%B9%D9%8A%D9%84-%D9%85%D9%88%D9%85%D9%86-1-2.jpg",
        "title": "الفيزياء و الكيمياء- السنة الثالثة اعدادي ",
        "slug": "Dasw",
        "status": true,
        "description": "يتوقع في نهاية السنة أن يكون المتعلم قادر على حل وضعيات مشكلة ودالة لتوظيف مكتسباتها المرتبطة",
            "question":[
            {
                "id": 15,
                "type": "text",
                "question": "from which contry are you?",
                "description": null
            },
            {
                "id": 16,
                "type": "text",
                "question": "Do you have different color?",
                "description": null
            },
            {
                "id": 16,
                "type": "text",
                "question": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ab a ex temporibus",
                "description": "null to replayu the last view",
                "data":{
                    "option":[
                        {
                            "uuid": "80eee8950ki30230949",
                            "text": "Javascript"
                        },
                        {
                            "uuid": "6752412oeoiw988332jd",
                            "text": "php"
                        },
                        {
                            "uuid": "6752412oeoiw988332jd",
                            "text": "Html + Css"
                        }
                    ]
                }
            },
            {
                "id": 18,
                "type": "text",
                "question": "NAdi Canadi Das",
                "description": "null to replayu the last view",
                "data":[]
            }
        ]
    },
    {
        "id": 3,
        "image": "https://ederassa.ma/wp-content/uploads/2023/03/%D9%82%D8%AF%D9%88%D8%B1%D9%8A-%D9%85%D8%AD%D9%85%D8%AF.jpg",
        "title": "التربية الاسلامية -المستوى الثالثة اعدادي",
        "slug": "Dasw",
        "status": true,
        "description": "تلائم مستواكما العقلي, وتراعي نموكما العاطفي والجسمي وأن يما على",
            "question":[
            {
                "id": 15,
                "type": "text",
                "question": "from which contry are you?",
                "description": null
            },
            {
                "id": 16,
                "type": "text",
                "question": "Do you have different color?",
                "description": null
            },
            {
                "id": 16,
                "type": "text",
                "question": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ab a ex temporibus",
                "description": "null to replayu the last view",
                "data":{
                    "option":[
                        {
                            "uuid": "80eee8950ki30230949",
                            "text": "Javascript"
                        },
                        {
                            "uuid": "6752412oeoiw988332jd",
                            "text": "php"
                        },
                        {
                            "uuid": "6752412oeoiw988332jd",
                            "text": "Html + Css"
                        }
                    ]
                }
            },
            {
                "id": 18,
                "type": "text",
                "question": "NAdi Canadi Das",
                "description": "null to replayu the last view",
                "data":[]
            }
        ]
    }
];



export const ContextProvider = ({children})=>{
    
    const [currentUser, setCurrentUser]= useState({});
    const [userToken, _setUserToken] = useState(localStorage.getItem('Token') || '');
    const [surveys, setSurveys] = useState(tmpSurveys);

    const setUserToken = (token)=>{
        if(token){
            localStorage.setItem('Token', token)
        }else{
            localStorage.removeItem('Token')
        }
        _setUserToken(token)
    }
    return(
        <StateContext.Provider value={{
            currentUser, 
            setCurrentUser,
            userToken,
            setUserToken,
            surveys,
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = ()=> useContext(StateContext)