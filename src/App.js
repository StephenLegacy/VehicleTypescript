var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import CarList from './components/CarList';
var App = function () {
    return (_jsxs("div", __assign({ className: "app" }, { children: [_jsx("header", __assign({ className: "app-header" }, { children: _jsx("h1", { children: "Vehicle Manager" }) })), _jsx("main", { children: _jsx(CarList, {}) })] })));
};
export default App;
