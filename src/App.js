import { jsx as _jsx } from "react/jsx-runtime";
import { Dashboard } from './components/Dashboard';
import './App.css';
const App = () => {
    return (_jsx("div", { className: 'happy', children: _jsx(Dashboard, {}) }));
};
export default App;
