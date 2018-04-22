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
index.get('/art', (req, res, next) => {
    res.sendFile('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/art.html');
});
index.get('/about-me', (req, res, next) => {
    res.sendFile('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/about-me.html');
});
index.get('/evans', (req, res, next) => {
    res.render('site/blog/evans', {});
});
index.get('/', (req, res, next) => {
    res.render('site/', {});
});
index.get('/art', (req, res, next) => {
    res.render('site/index-art', {});
});
index.get('/blog', (req, res, next) => {
    res.render('site/index-blog', {});
});
index.get('/code', (req, res, next) => {
    res.render('site/index-code', {});
});
index.get('/about-me', (req, res, next) => {
    res.render('site/about_me', {});
});
index.get('/drl-dialogue', (req, res, next) => {
    res.render('site/blog/drl-dialogue.pug', {});
});
exports.default = index;
