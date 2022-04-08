import React from "react";
import Navbar from "../navbar";

function Page({ children }) {

    return (
        <div>
            <Navbar />
            <div className="container">
                {children}
            </div>
        </div>
    );
}

export default Page;