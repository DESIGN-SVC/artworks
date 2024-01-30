import { createBrowserRouter } from "react-router-dom"
import { Home, loader as LoaderHome } from "./routes/Home"
import { NotFound } from "./routes/NotFound"
import { loader as LoaderPlayer, Player } from "./routes/Player.$id"
import { loader as LoaderLogin, Login, action as LoginAction } from "./routes/login"
import { Root } from "./routes/root"
import { ServicesChannels } from "./routes/serviceChannels"

export const router = createBrowserRouter([
    {
        id: "root",
        path: "/",
        element: <Root />,
    children: [
            {
                index: true,
                element: <Login />,
        action: LoginAction,
                loader: LoaderLogin,
            },
            {
                path: "contato",
                element: <ServicesChannels />,
            },
            {
                path: "home",
                element: <Home />,
        loader: LoaderHome,
            },
            { path: "player/:id", element: <Player />, loader: LoaderPlayer },
      {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
])
