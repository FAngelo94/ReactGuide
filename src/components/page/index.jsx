import React from "react";
import Navbar from "../navbar";
import Sidebar from "../sidebar";

function Page({ children }) {
    const [sidebarOpen, setSidebarOpen] = React.useState(false);

    return (
        <div className="vh-100 d-flex flex-column bg-dark text-white">
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="d-flex bg-dark pt-5">
                <Sidebar sidebarOpen={sidebarOpen} />
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Page;