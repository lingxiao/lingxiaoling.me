import os
import urllib2
import urllib
import requests
from urlparse import urlparse
import itertools


src      = "/Users/lingxiao/Documents/Career/Homepage/public/python-scripts/load-ie.txt"
out_dir  = "/Users/lingxiao/Documents/Career/Homepage/public/squarespace"
url_base = '//static1.squarespace.com/static/sitecss/'

raw  = open(src, 'r').read()
raws = [ [_x for _x in _r.split('\n') if url_base in _x] for _r in raw.split('href')]
# a = [["a","b"], ["c"]]
raws = list(itertools.chain.from_iterable(raws))

urls = [ _r[4:-2] for _r in raws if _r]


if True:
  [os.system('wget ' + _r) for _r in urls]






