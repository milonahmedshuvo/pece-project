import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import Content from "../components/content/Content";
import Categoris from "../components/dashboard/dinamicPage/Categoris";
import NotFoundPage from "../layout/NotFound";
import Attendance from "../components/dashboard/admin/Class/Attendance/Attendance";
import TimeTable from "../components/dashboard/admin/Class/TimeTable/TimeTable";


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
            },
            {
                path: '/admin/Timetable',
                element: <TimeTable/>
            }
        ]
    }
])