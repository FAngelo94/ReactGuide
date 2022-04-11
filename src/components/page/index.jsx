import React from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";

function Page({ children }) {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <div className="vh-100 d-flex flex-column">
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <div className="d-flex h-100">
            <Sidebar sidebarOpen={sidebarOpen} />                
            <div className="container">
                {children}
            </div>
            </div>
        </div>
    );
}

export default Page;