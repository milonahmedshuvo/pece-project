import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import Content from "../components/content/Content";
import Categoris from "../components/dashboard/dinamicPage/Categoris";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>, // have sidebar menu 
        children : [
            {
                path : '',
                element : <Content/>
            },
            {
                path: 'category/:name',
                element : <Categoris/>
            }
        ]
    }
])