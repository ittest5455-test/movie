# -*- coding: utf-8 -*-
# อัปเดตไฟล์หลักขึ้น GitHub (index.html, style.css, app.js, movies.js, sitemap.xml)
import subprocess
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

FILES = [
    "index.html",
    "css/style.css",
    "js/app.js",
    "js/movies.js",
    "sitemap.xml",
    "robots.txt"
]

def try_git_push():
    """พยายาม Push ผ่านคำสั่ง Git ในเครื่องโดยตรง (ใช้ Git Credential Manager)"""
    try:
        # Check if git is available
        check_git = subprocess.run(["git", "status"], capture_output=True, text=True)
        if check_git.returncode != 0:
            return False
            
        # Add files
        subprocess.run(["git", "add", "js/movies.js", "js/app.js", "css/style.css", "sitemap.xml", "scripts/", "index.html"], check=True)
        
        status = subprocess.run(["git", "status", "--porcelain"], capture_output=True, text=True).stdout
        has_relevant_changes = any(f in status for f in ["js/movies.js", "js/app.js", "css/style.css", "sitemap.xml", "scripts/"])
        
        if has_relevant_changes:
            subprocess.run(["git", "commit", "-m", "Auto update movies database & sitemap"], check=True)
            push_res = subprocess.run(["git", "push", "origin", BRANCH], capture_output=True, text=True)
            if push_res.returncode == 0:
                print("✅ [Git] อัปโหลดข้อมูลภาพยนตร์ขึ้น GitHub สำเร็จ (Cloudflare Pages จะอัปเดตให้อัตโนมัติ)")
                return True
            else:
                print(f"[-] [Git] เกิดข้อผิดพลาดในการ push: {push_res.stderr.strip()}")
                return False
        else:
            print("ℹ️ [Git] ไม่มีไฟล์เปลี่ยนแปลงที่ต้องอัปโหลดขึ้น GitHub (ข้อมูลเป็นเวอร์ชันล่าสุดแล้ว)")
            return True
    except Exception as e:
        print(f"[-] [Git] ไม่สามารถใช้งานคำสั่ง git ได้: {e}")
        return False

def push_file_api(filepath):
    if not os.path.exists(filepath):
        return
        
    with open(filepath, "rb") as f:
        content = f.read()
    
    b64_content = base64.b64encode(content).decode("utf-8")
    url = f"https://api.github.com/repos/{REPO}/contents/{filepath}"
    
    headers = {
        "Authorization": f"token {TOKEN}",
        "Accept": "application/vnd.github.v3+json",
        "Content-Type": "application/json",
        "User-Agent": "Python-GitHub-Pusher"
    }
    
    sha = None
    req_get = urllib.request.Request(url, headers=headers)
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
        
    req_put = urllib.request.Request(url, headers=headers, method="PUT")
    req_put.data = json.dumps(payload).encode("utf-8")
    
    try:
        with urllib.request.urlopen(req_put) as res:
            print(f"✅ Successfully pushed {filepath} to GitHub via API!")
    except Exception as e:
        print(f"❌ Error pushing {filepath} via API: {e}")

def main():
    # 1. พยายามใช้ Git ในเครื่องก่อน
    if try_git_push():
        return
        
    # 2. ถ้า Git ไม่สำเร็จ และมี GITHUB_TOKEN ให้ใช้ GitHub API Fallback
    if TOKEN:
        print("กำลังอัปโหลดผ่าน GitHub API...")
        for filepath in FILES:
            push_file_api(filepath)
    else:
        print("⚠️ ไม่สามารถ Push ผ่าน Git และไม่มี GITHUB_TOKEN (ข้อมูลอัปเดตลงเครื่องเรียบร้อยแล้ว)")

if __name__ == "__main__":
    main()
