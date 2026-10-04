# -*- coding: utf-8 -*-
# อัปเดตไฟล์หลักขึ้น GitHub (index.html, style.css, app.js, movies.js, daily_update.yml)
import urllib.request
import urllib.error
import json
import base64
import sys
import os

sys.stdout.reconfigure(encoding='utf-8')

TOKEN = os.environ.get("GITHUB_TOKEN", "")
REPO = "ittest5455-test/movie"
BRANCH = "main"

HEADERS = {
    "Authorization": f"token {TOKEN}",
    "Accept": "application/vnd.github.v3+json",
    "Content-Type": "application/json",
    "User-Agent": "Python-GitHub-Pusher"
}

FILES = [
    "index.html",
    "css/style.css",
    "js/app.js",
    "js/movies.js",
    "sitemap.xml",
    "robots.txt",
    ".github/workflows/daily_update.yml"
]

def push_file(filepath):
    if not os.path.exists(filepath):
        print(f"Skipping {filepath} (file not found)")
        return
        
    with open(filepath, "rb") as f:
        content = f.read()
    
    b64_content = base64.b64encode(content).decode("utf-8")
    
    url = f"https://api.github.com/repos/{REPO}/contents/{filepath}"
    
    # Check if file exists to get SHA
    sha = None
    req_get = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req_get) as res:
            data = json.loads(res.read().decode("utf-8"))
            sha = data["sha"]
    except urllib.error.HTTPError as e:
        if e.code != 404:
            print(f"Error checking {filepath}: {e}")
            return
            
    payload = {
        "message": f"Update {filepath} for auto daily deployment",
        "content": b64_content,
        "branch": BRANCH
    }
    if sha:
        payload["sha"] = sha
        
    req_put = urllib.request.Request(url, headers=HEADERS, method="PUT")
    req_put.data = json.dumps(payload).encode("utf-8")
    
    try:
        with urllib.request.urlopen(req_put) as res:
            print(f"✅ Successfully pushed {filepath} to GitHub!")
    except Exception as e:
        print(f"❌ Error pushing {filepath}: {e}")

for filepath in FILES:
    push_file(filepath)
