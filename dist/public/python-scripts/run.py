import os
import urllib2
import urllib
import requests
from urlparse import urlparse


src = "/Users/lingxiao/Documents/Career/Homepage/public/includes/load-css-old.pug"

raw = open(src, 'r').read()

comma_delin = raw.split(',')

css_src = [_xs.split(':')[-1][3:-1] for _xs in comma_delin if ".css" in _xs]
js_src  = [_js.split(':')[-1][3:-2] for _js in comma_delin if ".js" in _js ] 



# wget all css and css

if False:
	[os.system('wget ' + _css) for _css in css_src]

if False:
	[os.system('wget ' + _js) for _js in js_src]


# manually move file to appropriate dir in bash
key   = 'Static.SQUARESPACE_CONTEXT ='
value = raw.split(key)


# replace all css with local source


# replace all css with local source
_split = 'static.squarespace.com/'
remote_source = raw.split(_split)

# assert this is true
assert_roundtrip = reconstruct == _split.join(remote_source)
print("assert assert_roundtrip: ", assert_roundtrip)

# css and js extensions
css_ext  = '-min.css'
js_ext   = 'min.en-US.js'
css_root = '../css/'
js_root  = '../js/'


# replace remote source with local source
local_sources = [new_path(_s) for _s in remote_source]
local_source  = _split.join(local_sources)

out_path = '../includes/load-css.pug'

# with open(out_path, 'w') as h:
	# h.write(local_source)

# # # # # # # # # # # # 
#  utility functions
# # # # # # # # # # # # 

def new_path(xs):
	css = replace_path_css(parse_css(xs))
	js  = replace_path_js(parse_js(xs))
	if css: return css
	elif js: return js
	else:  return xs


def parse_css(xs):
	return parse_path(xs, css_ext)

def parse_js(xs):
	return parse_path(xs, js_ext)

def parse_path(xs, ext):

	if ext in xs:
		o = urlparse(xs).path
		os = [_o for _o in o.split(',') if ext in _o]

		if len(os):
			return os[0]

	else:
		return ""

def replace_path_css(xs):
	return replace_path(xs, css_ext, css_root)

def replace_path_js(xs):
	return replace_path(xs, js_ext, js_root)

def replace_path(xs, ext, root):

	if xs:
		paths = [_p for _p in xs.split('/') if ext in _p]
		if paths:
			return os.path.join(root, paths[0])
		else:
			return xs
	else:
		return xs








