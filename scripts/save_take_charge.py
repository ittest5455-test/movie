import cv2

img = cv2.imread('images/clean_posters/take_charge_of_my_heart_______.jpg')
cv2.imwrite('temp_posters/take_charge_crop.jpg', img[400:520, :])
