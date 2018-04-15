

from PIL import Image as Im
import cv2
import numpy as np
from skimage.io import imsave


# make white image
(w,h,d) = (1280, 1920, 3)
white   = np.zeros((w,h,d), dtype=np.uint8)
white.fill(255)
imsave('/Users/lingxiao/Desktop/white.jpg', white)



