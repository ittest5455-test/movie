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
    "Content-Type": "application/json",
    "User-Agent": "Python-GitHub-Disabler"
}

# 1. Disable Pages via API
url_pages = f"https://api.github.com/repos/{REPO}/pages"
req_del = urllib.request.Request(url_pages, headers=HEADERS, method="DELETE")
try:
    with urllib.request.urlopen(req_del) as res:
        print("✅ Disabled GitHub Pages successfully!")
except urllib.error.HTTPError as e:
    print(f"Pages Delete Status: {e.code} - {e.reason}")

# 2. Clear index.html content to a blank page just in case
url_index = f"https://api.github.com/repos/{REPO}/contents/index.html"
req_get = urllib.request.Request(url_index, headers=HEADERS)
try:
    with urllib.request.urlopen(req_get) as res:
        data = json.loads(res.read())
        sha = data["sha"]
        
        # Overwrite with empty 404 text
        payload = {
            "message": "Remove website content",
            "content": "", # empty
            "sha": sha,
            "branch": "main"
        }
        req_put = urllib.request.Request(url_index, headers=HEADERS, method="PUT")
        req_put.data = json.dumps(payload).encode('utf-8')
        with urllib.request.urlopen(req_put) as res2:
            print("✅ Overwritten index.html with blank content!")
except Exception as e:
    print(f"File clear status: {e}")
