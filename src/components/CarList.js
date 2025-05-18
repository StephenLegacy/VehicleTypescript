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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
var CarList = function () {
    var _a = useState([]), cars = _a[0], setCars = _a[1];
    var _b = useState({ make: '', model: '', year: new Date().getFullYear() }), newCar = _b[0], setNewCar = _b[1];
    useEffect(function () {
        fetch('/api/cars')
            .then(function (res) { return res.json(); })
            .then(function (data) { return setCars(data); });
    }, []);
    var handleAddCar = function () {
        fetch('/api/cars', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCar)
        })
            .then(function (res) { return res.json(); })
            .then(function (data) { return setCars(__spreadArray(__spreadArray([], cars, true), [data], false)); });
    };
    var startEngine = function (id) {
        fetch("/api/cars/".concat(id, "/start"), { method: 'POST' })
            .then(function (res) { return res.json(); })
            .then(function (data) { return alert(data.message); });
    };
    return (_jsxs("div", __assign({ className: "car-list" }, { children: [_jsx("h2", { children: "Legacy Garage By Oloo" }), _jsxs("div", __assign({ className: "add-car-form" }, { children: [_jsx("input", { type: "text", placeholder: "Make", value: newCar.make, onChange: function (e) { return setNewCar(__assign(__assign({}, newCar), { make: e.target.value })); } }), _jsx("input", { type: "text", placeholder: "Model", value: newCar.model, onChange: function (e) { return setNewCar(__assign(__assign({}, newCar), { model: e.target.value })); } }), _jsx("input", { type: "number", placeholder: "Year", value: newCar.year, onChange: function (e) { return setNewCar(__assign(__assign({}, newCar), { year: parseInt(e.target.value) || newCar.year })); } }), _jsx("button", __assign({ onClick: handleAddCar }, { children: "Add Car" }))] })), _jsx("ul", { children: cars.map(function (car, index) { return (_jsxs("li", __assign({ className: "car-item" }, { children: [_jsxs("span", { children: [car.year, " ", car.make, " ", car.model] }), _jsx("button", __assign({ onClick: function () { return startEngine(index); } }, { children: "Start Engine" }))] }), index)); }) })] })));
};
export default CarList;
