############################################################
# Module  : Image processing scripts
# Author  : Xiao Ling
# Date    : April 17th, 2018
############################################################

from PIL import Image
import PIL.ImageOps    

in_path  = 'rand-walk-1.png'
out_path = 'rand-walk-2.png'

m = Image.open(in_path)

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
