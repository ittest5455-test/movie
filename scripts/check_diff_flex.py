import cv2
import numpy as np

orig = cv2.imread('temp_posters/orig_flex.jpg')
clean = cv2.imread('images/clean_posters/flex_x_cop_2__________________.jpg')

diff = cv2.absdiff(orig, clean)
print(f"Total diff between orig_flex and clean_posters/flex: {np.sum(diff)}")

# Where was diff?
gray_diff = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
cnts, _ = cv2.findContours(gray_diff, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
for c in cnts:
    if cv2.contourArea(c) > 50:
        print(f"Diff box: {cv2.boundingRect(c)}")
