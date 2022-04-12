import React, { useEffect } from 'react';
import { CodeBlock, dracula } from "react-code-blocks";

function CustomCodeBlock({ text }) {

    return (
        <div className="mb-3">
            <CodeBlock
                text={text}
                language={"js"}
                showLineNumbers={false}
                theme={dracula}
            />
        </div>
    );
}

export default CustomCodeBlock;
