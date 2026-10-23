import cv2
img = cv2.imread('images/clean_posters/flex_x_cop_2__________________.jpg')
cv2.imwrite('temp_posters/flex_clean_top.jpg', img[:150, :])
print("Saved flex_clean_top.jpg")
