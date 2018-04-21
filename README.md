# lingxiaoling.me source code #

The following set of instructions allow you to set a node.js minimal app
with typescript

## Node set up ##

1. set up node: https://medium.com/@adnanrahic/hello-world-app-with-node-js-and-express-c1eb7cfa8a30

2. set up typescript : http://brianflove.com/2016/11/08/typescript-2-express-node/
basic types: https://www.typescriptlang.org/docs/handbook/basic-types.html


## Feature requests ##

1. make header non transparent        [DONE]
2. Twitter and Facebook integration   []
3. Native upvote integration          []
4. fail whale page                    []

## TODOs #

0. right now if you reload static context on each navigation, then all your problem will be solved

1. center date on blog content    [DONE]
2. implement like and share
4. refactor blog content so that it can be autmoatically generated.
5. figure out how to insert images into it with caption
6. write python script that take .md file and create blog file






## Bug list ##

note: 0, 1, and 2 are connect by the fact that scripts don't run when navigate to page

0.  when navigate back to home page, links do not work unless refresh home page first , but this only happens sometimes
[web: FIXED HACK, changed line 637 of site-bundle.js to f = true]
[mobile: STILL BROKEN]

1. Images only load on refresh, [Reason: static-context.js do not reload on navigation]

2. [FIXED] Navigate to home page do not load when clicking from any child pages, prob has something to do w/ the default scroll features

3. [FIXED] home page is wonkey
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
[FIXED] 2. font is too big. space between fonts is too big: find way to 


## Plan ##









