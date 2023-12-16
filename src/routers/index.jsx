import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Content from "../components/Content";
import Timer from "../components/Timer";
import Complete from "../components/Complete";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Content />,
            },
            {
                path: "/timer",
                element: <Timer />,
            },
            {
                path: "/complete",
                element: <Complete />,
            },
        ]
    }
])