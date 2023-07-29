import {createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Login from './views/login'
import Learn from './views/Learn'
import Signup from './views/signup'
import Add from './views/add'
import GestLayout from './Component/GestLayout';
import { Children } from 'react';
import DefaultLayout from './Component/DefaultLayout';
import AjoutFormation from './views/surveyView';
import CreateFormation from './Component/Cours/CreateFormation';
import CreateCours from './Component/Cours/createCours';
import MatiereCour from './Component/Cours/matiereCour';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />
        },
        {
            path: '/',
            element: <DefaultLayout />,
            children:[
                
                {
                    path: '/dashboard',
                    element: <Learn/>
                },
                {
                    path: '/add',
                    element: <Add/>
                },
                {
                    path: '/create',
                    element: <CreateFormation/>
                },
                {
                    path: '/surveys/create',
                    element: <AjoutFormation/>
                },
                {
                    path: '/createCours',
                    element: <CreateCours/>
                },
                {
                    path: '/cour',
                    element: <MatiereCour/>
                }
            ]
        }
        ,
        {
            path:'/',
            element: <GestLayout/>,
            children: [
                {
                    path: '/signup',
                    element: <Signup/>
                },
                {
                    path: '/login',
                    element: <Login />
                }
                
            ] 
        }
        
    ]
)

export default router