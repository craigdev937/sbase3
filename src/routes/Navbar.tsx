import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar = (): JSX.Element => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <h1 className="navbar__title">Super</h1>
                <Link to="/" 
                    className="navbar__link"
                    >Home
                </Link>
                <Link to="/create" 
                    className="navbar__link"
                    >Create
                </Link>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};


