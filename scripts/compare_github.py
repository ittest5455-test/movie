import sys
sys.stdout.reconfigure(encoding='utf-8')

github_app = open(r'C:\Users\IT\.gemini\antigravity\brain\5d74e699-690e-4972-8ccf-a1cbd41fa447\.system_generated\steps\602\content.md', encoding='utf-8').read()
local_app = open('js/app.js', encoding='utf-8').read()

checks = {
    'loadEpisode function': 'loadEpisode',
    'player-top-bar': 'player-top-bar',
    'serverMainOldBtn': 'serverMainOldBtn',
    'episodeSelectBtn handler': 'episodeSelectBtn',
    '24-hdx API fetch': 'api.24-hdx.com',
}

print(f"{'':=<55}")
print(f"{'Feature':<30} {'GitHub':>12} {'Local':>12}")
print(f"{'':=<55}")
for label, keyword in checks.items():
    g = 'YES' if keyword in github_app else 'NO'
    l = 'YES' if keyword in local_app else 'NO'
    status = '' if g == l else ' ❌'
    print(f"{label:<30} {g:>12} {l:>12}{status}")
print(f"{'':=<55}")
