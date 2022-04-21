import React from "react";
import { NavLink } from "react-router-dom";
import House from "../icons/house.svg";
import ArrowRight from "../icons/arrow-right-square.svg";

const openStyleButton = {
    transform: "rotate(180deg)",
}

function Navbar({ sidebarOpen, setSidebarOpen }) {
    const manageSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    }
    const openStyle = sidebarOpen ? openStyleButton : {};
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary position-fixed w-100">
            <div className="container-fluid">
                <button type="button" className="btn btn-secondary" onClick={manageSidebar} style={{...openStyle, transition: "all 0.3s linear"}}>
                <img src={ArrowRight} alt="Home" />
            </button>
            <NavLink className="navbar-brand" to="/ReactGuide/">
                <img src={House} alt="Home" />
            </NavLink>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarColor01">

            </div>
        </div>
            </nav >
    );
}

export default Navbar;