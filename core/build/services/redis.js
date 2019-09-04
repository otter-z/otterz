"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ioredis_1 = __importDefault(require("ioredis"));
var config_1 = __importDefault(require("../config"));
var redis = new ioredis_1.default(config_1.default.REDIS_CONNECTION);
exports.default = redis;
