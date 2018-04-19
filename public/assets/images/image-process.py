############################################################
# Module  : Image processing scripts
# Author  : Xiao Ling
# Date    : April 17th, 2018
############################################################

from PIL import Image
import PIL.ImageOps    
import numpy as np
from skimage.io import imsave
import cv2


in_path  = 'rand-walk-2.png'
out_path = 'rand-walk-trial.png'


Image = cv2.imread(in_path)
Image2 = np.array(Image, copy=True)

white_px = np.asarray([255, 255, 255])
black_px = np.asarray([0  , 0  , 0  ])

(row, col, _) = Image.shape

for r in xrange(row):
	for c in xrange(col):
		px = Image[r][c]
		if all(px == white_px):
			Image2[r][c] = black_px

imsave(out_path, Image2)




# image = Image.open(in_path)
# px    = np.array(image)
# px1   = np.array(px, copy=True)

# ws = np.zeros((10,10,4))

# (w,h,d) = px.shape


# white_px = np.asarray([255, 255, 255, 0])
# black_px = np.asarray([0  , 0  , 0  , 255])

# for r in xrange(w):
# 	for c in xrange(h):
# 		pixel = px1[r][c]
# 		if all(pixel == white_px):
# 			px1[r][c] = black_px


# imsave(out_path, px1)



def invert_color(in_path, out_path):

	image = Image.open(in_path)

	if image.mode == 'RGBA':
	    r,g,b,a = image.split()
	    rgb_image = Image.merge('RGB', (r,g,b))

	    inverted_image = PIL.ImageOps.invert(rgb_image)

	    r2,g2,b2 = inverted_image.split()

	    final_transparent_image = Image.merge('RGBA', (r2,g2,b2,a))

	    final_transparent_image.save(out_path)

	else:
	    inverted_image = PIL.ImageOps.invert(image)
	    inverted_image.save(out_path)
