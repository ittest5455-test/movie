import urllib.request
import cv2
import numpy as np

urls = {
    'farm': 'https://goseries4k.com/wp-content/uploads/2026/09/9-1-1.png',
    'flex': 'https://goseries4k.com/wp-content/uploads/2026/09/%E0%B8%81%E0%B8%A3%E0%B8%AD%E0%B8%9A.png',
    'my_name': 'https://goseries4k.com/wp-content/uploads/2021/10/my-name.jpg',
    'shadow': 'https://goseries4k.com/wp-content/uploads/2026/09/8.png'
}

for name, url in urls.items():
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as r:
            data = r.read()
        img = cv2.imdecode(np.frombuffer(data, np.uint8), cv2.IMREAD_COLOR)
        cv2.imwrite(f'temp_posters/orig_{name}.jpg', img)
        print(f"Saved orig_{name}.jpg: shape={img.shape}")
    except Exception as e:
        print(f"Error {name}: {e}")
