import React from "react";
function FormCase() {
    const [state, setState] = React.useState({
        name: "",
        surname: "",
        email: "",
        password: "",
    });

    return (
        <React.Fragment>
            <p className="text-center">Stato={JSON.stringify(state)}</p>
            <div className="d-flex">
                <div className="input-group input-group-sm mb-3 gap-3">
                    {Object.keys(state).map((item, index) =>
                        <input key={index} type="text" className="form-control w-25" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" value={state[item]} placeholder={item}
                            onChange={(event) => setState(prev => {
                                return { ...prev, [item]: event.target.value }
                            })} />
                    )}

                </div>
            </div>
        </React.Fragment >
    );
}

export default FormCase;