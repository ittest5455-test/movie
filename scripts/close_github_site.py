import os
import urllib.request
import urllib.error
import json
import base64
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

# 1. Get index.html sha
url_get = f"https://api.github.com/repos/{REPO}/contents/index.html?ref=main"
req_get = urllib.request.Request(url_get, headers=HEADERS)
try:
    with urllib.request.urlopen(req_get) as res:
        data = json.loads(res.read())
        sha = data["sha"]
        print("Found index.html sha:", sha)
        
        # Replace index.html with 404 message
        blank_html = base64.b64encode(b"<h1>404 Not Found</h1><p>This site has been closed.</p>").decode("utf-8")
        payload = {
            "message": "Close site",
            "content": blank_html,
            "sha": sha,
            "branch": "main"
        }
        url_put = f"https://api.github.com/repos/{REPO}/contents/index.html"
        req_put = urllib.request.Request(url_put, headers=HEADERS, method="PUT")
        req_put.data = json.dumps(payload).encode('utf-8')
        with urllib.request.urlopen(req_put) as res2:
            print("✅ Overwritten index.html with 404 page!")
except Exception as e:
    print("Error:", e)
