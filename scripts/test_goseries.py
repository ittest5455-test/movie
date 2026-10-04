# -*- coding: utf-8 -*-
import urllib.request
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

url = "https://goseries4k.com/"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

try:
    req = urllib.request.Request(url, headers=headers)
    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
    print("Page fetched successfully. Length:", len(html))
    
    # Check for thai dubbed keyword or links
    thai_dubbed = re.findall(r'<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)</a>', html)
    print(f"Total links found: {len(thai_dubbed)}")
    
    # Print sample links
    sample = [l for l in thai_dubbed if 'พากย์ไทย' in l[1] or 'พากย์ไทย' in l[0]][:10]
    print("\nSample Thai Dubbed Movies/Series:")
    for s in sample:
        print("URL:", s[0])
        print("Text:", re.sub(r'<[^>]+>', '', s[1]).strip()[:60])
        print("-" * 40)

except Exception as e:
    print("Error fetching goseries4k:", e)
