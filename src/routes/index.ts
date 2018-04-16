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
	Template under development
*/
index.get('/', (req, res, next) => { 
	res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/index', {});
});


index.get('/tech', (req, res, next) => { 
	res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/index-tech', {});
});

index.get('/image', (req, res, next) => { 
	res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/article.pug', {});
});


index.get('/alt', (req, res, next) => { 
	res.sendFile('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/alt.html');
});

index.get('/alt-1', (req, res, next) => { 
	res.sendFile('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/alt-1.html');
});


export default index;


// case number:  155 - 362 - 60


