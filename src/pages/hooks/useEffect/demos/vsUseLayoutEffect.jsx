//https://codepen.io/zachnagatani/pen/RwNpVPG?editors=1010

import React from "react";
function VsUseLayoutEffect() {
    const [value, setValue] = React.useState(0);
    const [value2, setValue2] = React.useState(0);
    const boxRef = React.useRef(null);
    const boxRef2 = React.useRef(null);
    const inputRef = React.useRef(null);
    const inputRef2 = React.useRef(null);
    console.log("Rendering...");

    React.useLayoutEffect(() => {
        console.log("useLayoutEffect");
        if (value > 0) {
            let c = 0
            for (let i = 0; i < 5000000000; i++)
                c++;
            boxRef.current.style.transform = "rotate(" + (value * 3) + "deg)";
        }
    }, [value]);

    React.useEffect(() => {
        console.log("useEffect");
        if (value2 > 0) {
            let c = 0
            for (let i = 0; i < 5000000000; i++)
                c++;
            boxRef2.current.style.transform = "rotate(" + (value2 * 3) + "deg)";
        }
    }, [value2]);

    return (
        <div className="row">
            <div className="col p-3 d-flex flex-column justify-content-between align-items-center w-100" style={{ height: "270px", background: "grey" }}>
                <p className="m-1 fw-bold">Usando useLayoutEffect</p>
                <div ref={boxRef} style={{ transform: "rotate(" + value + "deg)", width: "100px", height: "100px", background: "white" }}>
                    <div style={{ width: "25px", height: "25px", background: "red" }}>
                    </div>

                </div>
                <input type="number" ref={inputRef} defaultValue={value} />
                <button className="btn btn-secondary w-100 btn-sm mt-2" onClick={() => setValue(inputRef.current.value)}>Rotate</button>
            </div>
            <div className="col p-3 d-flex flex-column justify-content-between align-items-center w-100" style={{ height: "270px", background: "grey" }}>
                <p className="m-1 fw-bold">Usando useEffect</p>

                <div ref={boxRef2} style={{ transform: "rotate(" + value2 + "deg)", width: "100px", height: "100px", background: "white" }}>
                    <div style={{ width: "25px", height: "25px", background: "red" }}>
                    </div>
                </div>
                <input type="number" ref={inputRef2} defaultValue={value2} />
                <button className="btn btn-secondary w-100 btn-sm mt-2" onClick={() => setValue2(inputRef2.current.value)}>Rotate</button>
            </div>
        </div>
    );
}

export default VsUseLayoutEffect;