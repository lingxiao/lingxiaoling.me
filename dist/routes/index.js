"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index = express_1.Router();
index.get('/curriculum-vitae', (req, res, next) => {
    var external = "https://static1.squarespace.com/static/59bfff0151a5849dcf7b03ce/t/5ad558a2562fa7b58d9307fb/1523931298159/cv.pdf";
    var pdf_path = "/Users/lingxiao/Documents/Career/Resume/CV/resume.pdf";
    res.redirect(external);
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
index.get('/corpus-mt', (req, res, next) => {
    res.render('site/code/corpus-mt.pug', {});
});
index.get('/multi-mt', (req, res, next) => {
    res.render('site/code/multi-mt.pug', {});
});
exports.default = index;
