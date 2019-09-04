"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var defaultConfig = {
    REDIS_CONNECTION: 'redis://127.0.0.1:6379',
    QUEUE_PROJECTS: 'PROJECTS',
    QUEUE_PARSE: 'PROJECTS'
};
var Config = Object.entries(defaultConfig).reduce(function (config, _a) {
    var _b;
    var key = _a[0], value = _a[1];
    return (__assign(__assign({}, config), (_b = {}, _b[key] = process.env[key] || value, _b)));
}, {});
exports.default = Config;
