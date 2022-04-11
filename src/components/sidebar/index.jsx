import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({sidebarOpen}) {
    const open = sidebarOpen ? {marginLeft: "0px"}:{marginLeft: "-280px"};
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100" style={{...open, width: "280px", transition: "all 0.3s linear" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="page">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link text-white">
                        Customers
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;