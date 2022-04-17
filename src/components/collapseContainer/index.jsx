import React from "react";

function CollapseContainer({ label, children, type }) {
    const uniqueId = React.useId().replaceAll(":","");
    console.log("ID",uniqueId, typeof(uniqueId))
    return (
        <React.Fragment>
            <h3 className={`${type} cursor-pointer collapse-arrow collapsed`} data-bs-toggle="collapse" data-bs-target={`#${uniqueId}`} aria-controls={uniqueId}>{label}</h3>
            <div className="collapse" id={uniqueId}>
                {children}
            </div>
        </React.Fragment>
    );
}

export default CollapseContainer;