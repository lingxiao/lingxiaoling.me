/**
    @file   : index.ts
    @author : Xiao Ling <lingxiao@seas.upenn.edu>
    @date   : 1/23/2018
*/
import { Router }   from 'express';
import * as express from 'express';
import * as path    from 'path'   ;
import * as pug     from 'pug'    ;
import * as fs      from 'fs'     ;
import * as url     from 'url'    ;

const index: Router = Router();



/**
	@Use: Given  path : <String> to pdf and res : <Response Object>,
	      render pdf 
*/
function serve_pdf(path, res){

	var pdf_path = url.resolve(__dirname, path)

	fs.readFile( pdf_path, (err, data) =>{
		res.contentType('application/pdf');
		res.send(data)
	})
}


index.get('/curriculum-vitae', (req, res, next) => { 

	return serve_pdf('../public/curriculum-vitae/resume.pdf',res)

});

index.get('/final_hj_ling', (req, res, next) => { 

	return serve_pdf('../public/assets/pdf/final_hj_ling.pdf', res)

});

/**
	lingxiaoling.us index
*/
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

index.get('/art-1', (req, res, next) => { 
	res.render('site/art.pug', {});
});


/**
	blog
*/
index.get('/on-cv-tech', (req, res, next) => { 
	res.render('site/blog/on-cv-tech.pug', {});
});


index.get('/on-cv-commerical', (req, res, next) => { 
	res.render('site/blog/on-cv-commerical.pug', {});
});



index.get('/on-nlp', (req, res, next) => { 
	res.render('site/blog/on-nlp.pug', {});
});


/**
	code
*/
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


export default index;

