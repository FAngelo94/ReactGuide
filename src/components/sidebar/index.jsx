import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ sidebarOpen }) {
    const open = sidebarOpen ? { marginLeft: "0px" } : { marginLeft: "-280px" };
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100" style={{ ...open, width: "280px", transition: "all 0.3s linear" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Index</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto ms-2">
                <li className="mb-1 ">
                    <button className="btn btn-toggle align-items-center collapsed text-white position-relative" data-bs-toggle="collapse" data-bs-target="#hooks-collapse" aria-expanded="true">
                        Hooks
                    </button>
                    <div className="collapse show" id="hooks-collapse">
                        <ul className="btn-toggle-nav list-group-numbered fw-normal pb-1 small">
                            <h6>Basic</h6>
                            <li><NavLink className="link-warning" to="/">
                                UseState
                            </NavLink>
                            </li>
                            <li><NavLink className="link-light" to="/">
                                UseEffect
                            </NavLink></li>
                        </ul>
                    </div>
                </li>

            </ul>
        </div>
    );
}

export default Sidebar;