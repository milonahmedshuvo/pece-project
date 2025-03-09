import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import Content from "../components/content/Content";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children : [
            {
                path : '',
                element : <Content/>
            }
        ]
    }
])