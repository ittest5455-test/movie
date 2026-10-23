import cv2

img = cv2.imread('images/clean_posters/the_trap_________2026.jpg')
cv2.imwrite('temp_posters/trap_clean_bottom.jpg', img[480:, :])
