import os
import urllib.request
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

TOKEN = os.environ.get("GITHUB_TOKEN", "")

HEADERS = {
    "Authorization": f"token {TOKEN}",
    "Accept": "application/vnd.github.v3+json"
}

url = "https://api.github.com/user/repos"
req = urllib.request.Request(url, headers=HEADERS)
with urllib.request.urlopen(req) as res:
    repos = json.loads(res.read())
    print("All repos:")
    for r in repos:
        print("-", r["full_name"])
