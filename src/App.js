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
        <Route exact path="/" element={<Home />} />
        <Route path="/UseState" element={<UseState />} />
        <Route path="/UseEffect" element={<UseEffect />} />
        <Route path="/UseCallback" element={<UseCallback />} />
        <Route path="/UseMemo" element={<UseMemo />} />
        <Route path="/UseRef" element={<UseRef />} />
        <Route path="/UseContext" element={<UseContext />} />
        <Route path="/UseReducer" element={<UseReducer />} />
        <Route path="/UseDebugValue" element={<UseDebugValue />} />
        <Route path="/UseDeferredValue" element={<UseDeferredValue />} />
        <Route path="/useId" element={<UseId />} />
        <Route path="/useImperativeHandle" element={<UseImperativeHandle />} />
        <Route path="/useInsertionEffect" element={<UseInsertionEffect />} />
        <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="/useSyncExternalStore" element={<UseSyncExternalStore />} />
        <Route path="/useTransition" element={<UseTransition />} /> 
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
