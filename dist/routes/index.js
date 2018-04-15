"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index = express_1.Router();
index.get('/', (req, res, next) => {
    res.render('/Users/lingxiao/Documents/Career/Homepage/public/site/index', {});
});
index.get('/tech', (req, res, next) => {
    res.render('/Users/lingxiao/Documents/Career/Homepage/public/site/index-tech', {});
});
exports.default = index;
