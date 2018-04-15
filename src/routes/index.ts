/**
    @file   : index.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @date   : 1/23/2018
*/
import { Router }   from 'express';
import * as express from 'express';
import * as path    from 'path'   ;
import * as pug     from 'pug'    ;

const index: Router = Router();

/**
	Template under development
*/
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
	res.render('/Users/lingxiao/Documents/Career/lingxiaoling.me/public/site/alt-1.pug', {});
});



export default index;


