import React from "react";
import "./App.css";
import { QueryClient, 
    QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Main } from "../routes/Main";

const QClient = new QueryClient();

export const App = () => {
    return (
        <QueryClientProvider client={QClient}>
            <React.Fragment>
                <Main />
                <ReactQueryDevtools initialIsOpen={false} />
            </React.Fragment>
        </QueryClientProvider>
    );
};


