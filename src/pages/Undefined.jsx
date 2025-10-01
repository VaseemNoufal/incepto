import React from "react";
import { Link } from "react-router-dom";

export default function Undefined(){
    return(
        <>
            <div className="flex items-center justify-center h-screen flex-col">
                <h1 className="mb-4">404, Not Found</h1>
                <Link to="/">Click me to Go to Home Page</Link>
            </div>
        </>
    )
}