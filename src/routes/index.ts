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

const index: Router = Router();

/**
	serve CV
	this one doens'tn work w/o hardcoded paths
	maybe do later
*/
index.get('/curriculum-vitae', (req, res, next) => { 

	// var pdf_path = "site/resume.pdf"
	var pdf_path = "/Users/lingxiao/Documents/Career/Resume/CV/resume.pdf"	

	fs.readFile( pdf_path, (err, data) =>{
		res.contentType('application/pdf');
		res.send(data)
	})
});


index.get('/evans', (req, res, next) => { 
	res.render('site/blog/evans', {});
});


/**
	lingxiaoling.me
*/
index.get('/', (req, res, next) => { 
	res.render('site/index', {});
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


export default index;



