"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs = require("fs");
const index = express_1.Router();
index.get('/curriculum-vitae', (req, res, next) => {
    var pdf_path = __dirname + '/../public/curriculum-vitae/resume.pdf';
    console.log('pdf_path: ', pdf_path);
    fs.readFile(pdf_path, (err, data) => {
        res.contentType('application/pdf');
        res.send(data);
    });
});
index.get('/', (req, res, next) => {
    res.render('site/index-home', {});
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
index.get('/on-cv-tech', (req, res, next) => {
    res.render('site/blog/on-cv-tech.pug', {});
});
index.get('/on-cv-commerical', (req, res, next) => {
    res.render('site/blog/on-cv-commerical.pug', {});
});
index.get('/on-nlp', (req, res, next) => {
    res.render('site/blog/on-nlp.pug', {});
});
index.get('/drl-dialogue', (req, res, next) => {
    res.render('site/code/drl-dialogue.pug', {});
});
index.get('/sent-analysis', (req, res, next) => {
    res.render('site/code/sent-analysis.pug', {});
});
index.get('/multi-mt', (req, res, next) => {
    res.render('site/code/multi-mt.pug', {});
});
exports.default = index;
