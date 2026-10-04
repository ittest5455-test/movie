# -*- coding: utf-8 -*-
import urllib.request
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

url = "https://goseries4k.com/overdo/"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

try:
    req = urllib.request.Request(url, headers=headers)
    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
    
    postid = re.search(r'data-post-id="(\d+)"', html)
    print("Post ID:", postid.group(1) if postid else "Not found")
    
    iframes = re.findall(r'<iframe[^>]*src="([^"]+)"', html)
    print("Iframes in page:", iframes)
    
    # Check player options or select elements
    options = re.findall(r'<option[^>]*value="([^"]+)"[^>]*>([\s\S]*?)</option>', html)
    print(f"Total options found: {len(options)}")
    for opt in options[:10]:
        print("  Value:", opt[0], "| Text:", opt[1].strip())
        
except Exception as e:
    print("Error:", e)
