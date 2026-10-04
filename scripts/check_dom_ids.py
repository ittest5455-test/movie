# -*- coding: utf-8 -*-
import re

with open('js/app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

with open('index.html', 'r', encoding='utf-8') as f:
    index_html = f.read()

app_ids = set(re.findall(r'getElementById\(["\']([^"\']+)["\']\)', app_js))
html_ids = set(re.findall(r'id=["\']([^"\']+)["\']', index_html))

print("=== IDs used in app.js but MISSING in index.html ===")
for aid in sorted(app_ids):
    if aid not in html_ids:
        print(f"MISSING: {aid}")

print("\n=== IDs in index.html ===")
for hid in sorted(html_ids):
    print(f"FOUND: {hid}")
