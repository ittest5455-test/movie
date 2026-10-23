import cv2

img1 = cv2.imread('images/clean_posters/the_affair_was_just_the_beginn.jpg')
cv2.imwrite('temp_posters/affair_crop.jpg', img1[350:480, 250:400])

img2 = cv2.imread('images/clean_posters/the_trap_________2026.jpg')
cv2.imwrite('temp_posters/trap_crop.jpg', img2[190:270, 300:400])

orig1 = cv2.imread('temp_posters/orig/the_affair_was_just_the_beginn.jpg')
cv2.imwrite('temp_posters/orig_affair_crop.jpg', orig1[350:480, 250:400])

orig2 = cv2.imread('temp_posters/orig/the_trap_________2026.jpg')
cv2.imwrite('temp_posters/orig_trap_crop.jpg', orig2[190:270, 300:400])

print("Crops saved!")
