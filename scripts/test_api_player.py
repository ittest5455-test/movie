# -*- coding: utf-8 -*-
import urllib.request
import urllib.parse
import re

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://www.24-hdx.com/'
}

url = "https://www.24-hdx.com/avatar-the-last-airbender-season-2/"
req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')

# Extract postid and nonce
postid_m = re.search(r'data-post-id="(\d+)"', html) or re.search(r'post_id\s*:\s*["\']?(\d+)', html)
postid = postid_m.group(1) if postid_m else "36687"

nonce_m = re.search(r'nonce\s*:\s*["\']([a-f0-9]+)["\']', html) or re.search(r'"nonce":"([a-f0-9]+)"', html)
nonce = nonce_m.group(1) if nonce_m else ""

print("Post ID:", postid)
print("Nonce:", nonce)

# Test POST request to api.24-hdx.com/get.php
api_url = "https://api.24-hdx.com/get.php"
data = urllib.parse.urlencode({
    'action': 'halim_ajax_player',
    'nonce': nonce,
    'episode': '1',
    'server': '1',
    'postid': postid,
    'lang': 'Thai',
    'title': 'Avatar'
}).encode('utf-8')

try:
    req_api = urllib.request.Request(api_url, data=data, headers=HEADERS)
    res_api = urllib.request.urlopen(req_api).read().decode('utf-8', errors='ignore')
    print("\n=== API RESPONSE ===")
    print(res_api)
except Exception as e:
    print("API Error:", e)
