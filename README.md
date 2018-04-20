# lingxiaoling.me source code #

The following set of instructions allow you to set a node.js minimal app
with typescript

## Node set up ##

1. set up node: https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30

2. set up typescript : http://brianflove.com/2016/11/08/typescript-2-express-node/
basic types: https://www.typescriptlang.org/docs/handbook/basic-types.html


## Feature requests ##

1. Twitter and Facebook integration
2. Native upvote integration
3. fail whale page

## Bug list ##

1. Images only load on refresh

2. Navigate back do not load page when navigate to dead link

3. home page is wonkey
[FIXED]		1. on browser: the font is off.           
		problem is font is not delivered:

			 * The Typekit service used to deliver this font or fonts for use on websites
			 * is provided by Adobe and is subject to these Terms of Use
			 * http://www.adobe.com/products/eulas/tou_typekit. For font license
			 * information, see the list below.
			 		
[FIXED]	2. on mobile: the home page nav menu disappears. it's not centered. it disappears because of animation 

<!-- the plan here is to completly rip out the existing blog template and replace it w/ ben-evans, because we know it looks ok on mobile -->
[FIXED]	2. blog page completely unreadable on mobile: 
		1. too much space to the left and right: find way to flood the whole page on mobile. the whole thing is fatter 	
			- the problem is that its' very hard to diagnose this
[NOT FIXED] 2. font is too big. space between fonts is too big: find way to 


## Plan ##

1. fix home page on mobile: it's possible that a different template is loaded on mobile by squarespace,
   but if that's the case. or maybe something is not loaded on remote server
2. may have to dramatically simplify the templates to see what's going on.
3. also may have to consider a ground up rewrite of everything, now that you know how the thing works roughly.


## where you left off ##

1. accidentally recreated the bug locally by changing stuff in .css and .js files. but now list it

<!-- right now when you change adobe-... to georia, sans, you reproduce the error locally -->









