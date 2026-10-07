
import sys
from playwright.sync_api import sync_playwright
def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.on('console', lambda msg: print('CONSOLE [' + msg.type + ']: ' + msg.text))
        page.on('pageerror', lambda exc: print('PAGE ERROR: ' + str(exc)))
        page.goto('file:///' + 'c:/Users/IT/Desktop/AI 2026/เว็บดูหนัง/index.html', wait_until='networkidle')
        page.click('#gridView .movie-card', timeout=3000)
        page.wait_for_selector('.modal-overlay.active', timeout=3000)
        page.click('#modalBookmarkBtn', timeout=3000)
        browser.close()
run()
