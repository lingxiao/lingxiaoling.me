"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index = express_1.Router();
index.get('/', (req, res, next) => {
    res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/index', {});
});
index.get('/tech', (req, res, next) => {
    res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/index-tech', {});
});
index.get('/alt', (req, res, next) => {
    res.sendFile('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/alt.html');
});
index.get('/alt-1', (req, res, next) => {
    res.sendFile('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/alt-1.html');
});
exports.default = index;
