# -*- coding: utf-8 -*-
import json
import re
import datetime

raw = open("js/movies.js", encoding='utf-8').read()
m = json.loads(re.search(r'const movies = (\[.*\]);', raw, re.DOTALL).group(1))

today = datetime.datetime.now().strftime("%Y-%m-%d")

xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
xml += '  <url>\n'
xml += '    <loc>./</loc>\n'
xml += f'    <lastmod>{today}</lastmod>\n'
xml += '    <changefreq>daily</changefreq>\n'
xml += '    <priority>1.0</priority>\n'
xml += '  </url>\n'

for movie in m:
    xml += '  <url>\n'
    xml += f'    <loc>./#play-{movie["id"]}</loc>\n'
    xml += f'    <lastmod>{today}</lastmod>\n'
    xml += '    <changefreq>weekly</changefreq>\n'
    xml += '    <priority>0.8</priority>\n'
    xml += '  </url>\n'

xml += '</urlset>\n'

with open("sitemap.xml", "w", encoding="utf-8") as f:
    f.write(xml)

print(f"Generated sitemap.xml with {len(m)} movies.")
