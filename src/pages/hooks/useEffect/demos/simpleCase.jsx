import React from "react";
function SimpleCase() {

    const [count, setCount] = React.useState(0);
    const [countPower, setCountPower] = React.useState(0);

    React.useEffect(() => {
        setCountPower(count ** 2);
    }, [count])

    return (
        <React.Fragment>
            <div className="d-flex justify-content-around">
                <p className="text-center">Count={count}</p>
                <p className="text-center">Count power={countPower}</p>
            </div>
            <button type="button" className="btn btn-secondary btn-sm w-100" onClick={() => setCount(prevState => prevState + 1)}>+</button>
        </React.Fragment>
    );
}

export default SimpleCase;