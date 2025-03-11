import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import Content from "../components/content/Content";
import Categoris from "../components/dashboard/dinamicPage/Categoris";
import Attendance from "../components/dashboard/admin/attendance/Attendance";
import NotFoundPage from "../layout/NotFound";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>, // have sidebar menu 
        errorElement: <NotFoundPage/>, // if not found page 
        children : [
            {
                path : '',
                element : <Content/>
            },
            {
                path: '/category/:name',
                element : <Categoris/>
            },
            {
                path: '/admin/Attendance',
                element : <Attendance/>
            }
        ]
    }
])