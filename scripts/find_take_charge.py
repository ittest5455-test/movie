import json
with open('js/movies.js', 'r', encoding='utf-8') as f:
    text = f.read()

import re
m = re.search(r'\{[^{}]*Take Charge of My Heart[^{}]*\}', text)
if m:
    print(m.group(0))
