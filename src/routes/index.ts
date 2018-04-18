/**
    @file   : index.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @date   : 1/23/2018
*/
import { Router }   from 'express';
import * as express from 'express';
import * as path    from 'path'   ;
import * as pug     from 'pug'    ;
import * as fs from 'fs';

// fs = require('fs')


const index: Router = Router();

/**
	serve CV
*/
index.get('/curriculum-vitae', (req, res, next) => { 
	var pdf_path = "/Users/lingxiao/Documents/Career/Resume/CV/resume.pdf"
	fs.readFile( pdf_path, (err, data) =>{
		res.contentType('application/pdf');
		res.send(data)
	})
});


/**
	lingxiaoling.me

	BUG LIST:
		1. Images only load on refresh
		2. navigate back do not load page

*/
index.get('/', (req, res, next) => { 
	res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/index', {});
});

index.get('/art', (req, res, next) => { 
	res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/art', {});
});

index.get('/blog', (req, res, next) => { 
	res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/index-blog', {});
});


index.get('/code', (req, res, next) => { 
	res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/index-code', {});
});

index.get('/about-me', (req, res, next) => { 
	res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/about_me', {});
});


index.get('/drl-dialogue', (req, res, next) => { 
	res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/blog/drl-dialogue.pug', {});
});


export default index;


