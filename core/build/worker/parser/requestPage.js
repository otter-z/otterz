"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var services_1 = require("../../services");
var Get = services_1.Request.Get;
exports.default = (function (url) { return Get(url); });
