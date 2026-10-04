# -*- coding: utf-8 -*-
import urllib.request
import urllib.parse
import re

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://www.24-hdx.com/'
}

def get_clean_player_url(movie_url):
    try:
        req = urllib.request.Request(movie_url, headers=HEADERS)
        html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
        
        postid_m = re.search(r'data-post-id="(\d+)"', html) or re.search(r'post_id\s*:\s*["\']?(\d+)', html)
        if not postid_m:
            return None
        postid = postid_m.group(1)
        
        api_url = "https://api.24-hdx.com/get.php"
        data = urllib.parse.urlencode({
            'action': 'halim_ajax_player',
            'nonce': '',
            'episode': '1',
            'server': '1',
            'postid': postid,
            'lang': 'Thai',
            'title': 'Movie'
        }).encode('utf-8')
        
        req_api = urllib.request.Request(api_url, data=data, headers=HEADERS)
        res_api = urllib.request.urlopen(req_api).read().decode('utf-8', errors='ignore')
        
        iframe_m = re.search(r'src="([^"]+)"', res_api)
        if iframe_m:
            return iframe_m.group(1)
    except Exception as e:
        print(f"Error getting player for {movie_url}: {e}")
    return None

print("=== TESTING CLEAN PLAYER EXTRACTION ===")
print("Avatar:", get_clean_player_url("https://www.24-hdx.com/avatar-the-last-airbender-season-2/"))
print("Pee Nak 5:", get_clean_player_url("https://www.24-hdx.com/pee-nak-5-2026-pee-nak-5/"))
print("The Boys 5:", get_clean_player_url("https://www.24-hdx.com/the-boys-season-5/"))
