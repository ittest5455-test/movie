# -*- coding: utf-8 -*-
import urllib.request
import re

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
url = "https://www.24-hdx.com/"

req = urllib.request.Request(url, headers=HEADERS)
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

# Print sample <a> tags with href
links = re.findall(r'<a[^>]+href="([^"]+)"[^>]*>', html)
print(f"Total href links: {len(links)}")
sample_links = [l for l in links if '24-hdx.com/' in l and l != 'https://www.24-hdx.com/']
print("Sample post links:")
for l in sample_links[:20]:
    print("  Link:", l)
