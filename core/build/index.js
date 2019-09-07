"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var queue_1 = require("./utils/queue");
var path_1 = __importDefault(require("path"));
var scrapQueue = queue_1.getQueue('scrap');
scrapQueue.process('PARSE', 1, path_1.default.resolve(__dirname, './worker/parser/staticParser/index.js'));
scrapQueue.process('URL', 1, path_1.default.resolve(__dirname, './worker/url/index.js'));
scrapQueue.add('PARSE', {
    projectId: 1,
    task: {
        url: 'https://wikipedia.org',
        deep: 1
    }
});
