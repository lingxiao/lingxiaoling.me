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
	res.render('/Users/lingxiao/Documents/Career/Homepage/public/site/index', {});
});


index.get('/tech', (req, res, next) => { 
	res.render('/Users/lingxiao/Documents/Career/Homepage/public/site/index-tech', {});
});


export default index;


