import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { Navbar } from "./Navbar";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import { Create } from "../pages/Create";
import { Update } from "../pages/Update";

const ReactRouter = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <NotFound />
            },
            {
                path: "/create",
                element: <Create />,
                errorElement: <NotFound />
            },
            {
                path: "/:id",
                element: <Update />,
                errorElement: <NotFound />
            }
        ]
    }
]);

export const Main = (): JSX.Element => {
    return (
        <React.Fragment>
            <RouterProvider router={ReactRouter} />
        </React.Fragment>
    );
};


