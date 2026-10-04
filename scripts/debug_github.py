import os
import urllib.request
import urllib.error
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

TOKEN = os.environ.get("GITHUB_TOKEN", "")
REPO = "ittest5455-test/movie"

HEADERS = {
    "Authorization": f"token {TOKEN}",
    "Accept": "application/vnd.github.v3+json",
    "User-Agent": "Python-GitHub-Debug"
}

# List all files in repo root
url = f"https://api.github.com/repos/{REPO}/contents/"
req = urllib.request.Request(url, headers=HEADERS)
try:
    res = urllib.request.urlopen(req)
    files = json.loads(res.read())
    print("Files in repo root:")
    for f in files:
        print(f"  [{f['type']}] {f['name']} (sha: {f['sha'][:8]})")
except urllib.error.HTTPError as e:
    print(f"Error: {e.code} - {e.read().decode()}")

# Check scopes on token
req2 = urllib.request.Request("https://api.github.com/rate_limit", headers=HEADERS)
res2 = urllib.request.urlopen(req2)
scope_header = res2.headers.get("X-OAuth-Scopes", "none")
print(f"\nToken scopes: {scope_header}")
