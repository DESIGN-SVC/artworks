import { createBrowserRouter } from "react-router-dom";
import { Home, Login, Root } from "./pages";

export const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <Root/>,
        children: [
            {
                index: true,
                id: "login",
                path: "/",
                element: <Login/>
            },
            {
                id: "home",
                path: "/home",
                element: <Home/>
            }
        ]
    }
])