# -*- coding: utf-8 -*-
import urllib.request

def check_headers(url, name):
    print(f"=== CHECKING HEADERS FOR: {name} ({url}) ===")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, timeout=10)
        headers = dict(res.info())
        print("Status Code:", res.getcode())
        print("X-Frame-Options:", headers.get('x-frame-options', 'Not set (Allowed)'))
        print("Content-Security-Policy:", headers.get('content-security-policy', 'Not set'))
        print("Access-Control-Allow-Origin:", headers.get('access-control-allow-origin', 'Not set'))
    except Exception as e:
        print(f"Error checking {name}: {e}")
    print("----------------------------------------------------\n")

# 1. Check 037 Player (leoplayer7)
check_headers("https://www.leoplayer7.com/watch?v=0BbM_N3N1L", "037 Player (leoplayer7)")

# 2. Check 24-HDX Player / Page
check_headers("https://www.24-hdx.com/evil-dead-burn/", "24-HDX Page")
check_headers("https://www.24-hdx.com/face.php?ver=https://www.24-hdx.com/evil-dead-burn//", "24-HDX Embed / Face.php")
