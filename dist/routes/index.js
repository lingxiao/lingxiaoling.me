"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs = require("fs");
const index = express_1.Router();
index.get('/curriculum-vitae', (req, res, next) => {
    var pdf_path = "/Users/lingxiao/Documents/Career/Resume/CV/resume.pdf";
    fs.readFile(pdf_path, (err, data) => {
        res.contentType('application/pdf');
        res.send(data);
    });
});
index.get('/', (req, res, next) => {
    res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/index', {});
});
index.get('/blog', (req, res, next) => {
    res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/index-blog', {});
});
index.get('/code', (req, res, next) => {
    res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/index-code', {});
});
index.get('/image', (req, res, next) => {
    res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/article.pug', {});
});
index.get('/drl-dialogue', (req, res, next) => {
    res.sendFile('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/blog.html');
});
exports.default = index;
