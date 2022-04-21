import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home';
import UseState from './pages/hooks/useState';
import UseEffect from './pages/hooks/useEffect';
import UseCallback from './pages/hooks/useCallback';
import UseMemo from './pages/hooks/useMemo';
import UseRef from './pages/hooks/useRef';
import UseContext from './pages/hooks/useContext';
import UseReducer from './pages/hooks/useReducer';
import UseDebugValue from './pages/hooks/useDebugValue';
import UseDeferredValue from './pages/hooks/useDeferredValue';
import UseId from './pages/hooks/useId';
import UseImperativeHandle from './pages/hooks/useImperativeHandle';
import UseInsertionEffect from './pages/hooks/useInsertionEffect';
import UseLayoutEffect from './pages/hooks/useLayoutEffect';
import UseSyncExternalStore from './pages/hooks/useSyncExternalStore';
import UseTransition from './pages/hooks/useTransition';
import PageNotFound from './pages/pageNotFound';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/ReactGuide/" element={<Home />} />
        <Route path="/ReactGuide/UseState" element={<UseState />} />
        <Route path="/ReactGuide/UseEffect" element={<UseEffect />} />
        <Route path="/ReactGuide/UseCallback" element={<UseCallback />} />
        <Route path="/ReactGuide/UseMemo" element={<UseMemo />} />
        <Route path="/ReactGuide/UseRef" element={<UseRef />} />
        <Route path="/ReactGuide/UseContext" element={<UseContext />} />
        <Route path="/ReactGuide/UseReducer" element={<UseReducer />} />
        <Route path="/ReactGuide/UseDebugValue" element={<UseDebugValue />} />
        <Route path="/ReactGuide/UseDeferredValue" element={<UseDeferredValue />} />
        <Route path="/ReactGuide/useId" element={<UseId />} />
        <Route path="/ReactGuide/useImperativeHandle" element={<UseImperativeHandle />} />
        <Route path="/ReactGuide/useInsertionEffect" element={<UseInsertionEffect />} />
        <Route path="/ReactGuide/useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="/ReactGuide/useSyncExternalStore" element={<UseSyncExternalStore />} />
        <Route path="/ReactGuide/useTransition" element={<UseTransition />} /> 
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
