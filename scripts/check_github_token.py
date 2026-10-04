import os
import urllib.request
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

TOKEN = os.environ.get("GITHUB_TOKEN", "")

HEADERS = {
    "Authorization": f"token {TOKEN}",
    "Accept": "application/vnd.github.v3+json",
    "User-Agent": "Python-GitHub-Checker"
}

# Check user info
req = urllib.request.Request("https://api.github.com/user", headers=HEADERS)
res = urllib.request.urlopen(req)
user = json.loads(res.read())
print("Logged in as:", user.get("login"))

# List repos
req2 = urllib.request.Request("https://api.github.com/user/repos?per_page=10", headers=HEADERS)
res2 = urllib.request.urlopen(req2)
repos = json.loads(res2.read())
print("Repos:")
for r in repos:
    print(" -", r["full_name"])
