import React from 'react';
import CodeBlock from "../../../components/codeBlock";

import PageHook from "../../../components/pageHook"

function UseDebugValue() {

  return (
    <PageHook
      title={"useDebugValue"}
      theory={
        <React.Fragment>
          <p>Questo hook si utilizza all'interno di qualche custom hook in modo da poterlo visualizzare, con il rispettivo valore, all'interno della DevTools di React.</p>
          <p>Non posso scrivere esempi su Codepen di questo hook perché il codice compilato genera un iframe e per ciò non sarebbe visualizzabile nella DevTools di React. Dovrete accontentarvi soltanto dell'esempio di codice:</p>
          <CodeBlock
            text={
              `function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);
    // ...
    // Verrà mostrato nella DevTools di React questo hook:
    // e.g. "FriendStatus: Online"
    useDebugValue(isOnline ? 'Online' : 'Offline');
    return isOnline;
}`} />
        </React.Fragment>
      }
      demos={
        <React.Fragment>

        </React.Fragment>
      }
      errors={
        <React.Fragment>

        </React.Fragment>
      }
    />
  );
}

export default UseDebugValue;
