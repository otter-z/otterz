"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var https_1 = __importDefault(require("https"));
var instance = axios_1.default.create({
    httpsAgent: new https_1.default.Agent({
        rejectUnauthorized: false
    })
});
exports.Get = function (url) { return instance.get(url); };
