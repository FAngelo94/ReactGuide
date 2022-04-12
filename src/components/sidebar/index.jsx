import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const buildList = (page, list) => {
    return list.map((hook, index) => {
        return (<li key={React.useId()}>
            <NavLink className={page!==hook ? `link-light` : `link-warning`} to={`/${hook}`}>
                {hook}
            </NavLink>
        </li>);
    });
}

function Sidebar({ sidebarOpen }) {
    const open = sidebarOpen ? { marginLeft: "0px" } : { marginLeft: "-280px" };

    const location = useLocation();
    const page = location.pathname.split("/")[1];

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-secondary h-100" style={{ ...open, width: "280px", transition: "all 0.3s linear" }}>
                <span className="fs-4 w-100 text-center">Index</span>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto ms-2">
                <li className="mb-1 ">
                    <button className="btn btn-toggle align-items-center collapsed text-white position-relative" data-bs-toggle="collapse" data-bs-target="#hooks-collapse" aria-expanded="true">
                        Hooks
                    </button>
                    <div className="collapse show" id="hooks-collapse">
                        <ul className="btn-toggle-nav list-group-numbered fw-normal pb-1 small">
                            <h6>Basic</h6>
                            {buildList(page, ["useState", "useEffect", "useContext"])}
                        </ul>
                        <ul className="btn-toggle-nav list-group-numbered fw-normal pb-1 small">
                            <h6>Additional Hooks</h6>
                            {buildList(page, ["useReducer", "useCallback", "useMemo", "useRef", "useImperativeHandle", "useLayoutEffect", "useDebugValue", "useDeferredValue", "useTransition", "useId"])}
                        </ul>
                        <ul className="btn-toggle-nav list-group-numbered fw-normal pb-1 small">
                            <h6>Library Hooks</h6>
                            {buildList(page, ["useSyncExternalStore", "useInsertionEffect"])
                            }
                        </ul>
                    </div>
                </li>

            </ul>
        </div>
    );
}

export default Sidebar;