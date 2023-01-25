import React from "react";
import { useRouteError, Link } from "react-router-dom";

export const NotFound = (): JSX.Element => {
    const error = useRouteError() as Error;

    return (
        <React.Fragment>
            <section id="error">
                <h1>That Page doesn't Exist! 😨</h1>
                <pre>{error.message}</pre>
                <Link to="/"><button>Home</button></Link>
            </section>
        </React.Fragment>
    );
};


