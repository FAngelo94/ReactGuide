import React from "react";
function CleanCase() {
    const [state, setState] = React.useState(0);
    const [effectWithClean, setEffectWithClean] = React.useState(0);
    const [effectWithoutClean, setEffectWithoutClean] = React.useState(0);

    React.useEffect(()=>{
        setEffectWithClean(s=>s+1);
        return () => {
            setEffectWithClean(0)
        }
    }, [state]);

    React.useEffect(()=>{
        setEffectWithoutClean(s=>s+1);
    }, [state]);

    return (
        <React.Fragment>
            <p>effectWithClean={effectWithClean}</p>
            <p>effectWithoutClean={effectWithoutClean}</p>
            <button type="button" className="btn btn-secondary btn-sm w-100" onClick={() => setState(prevState => prevState + 1)}>Trigger new render</button>
        </React.Fragment>
    );
}

export default CleanCase;