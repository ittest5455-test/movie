import os
# -*- coding: utf-8 -*-
import urllib.request
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

TOKEN = os.environ.get("GITHUB_TOKEN", "")
req = urllib.request.Request('https://api.github.com/repos/ittest5455-test/movie/actions/runs', headers={'Authorization': f'token {TOKEN}', 'User-Agent': 'Python'})
try:
    res = urllib.request.urlopen(req)
    data = json.loads(res.read().decode('utf-8'))
    print('Total workflow runs:', data.get('total_count', 0))
    for r in data.get('workflow_runs', [])[:5]:
        print(f"- Run {r['id']}: {r.get('name')} | Status: {r.get('status')} | Conclusion: {r.get('conclusion')}")
except Exception as e:
    print('Error:', e)
