import sys

with open('js/app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'subthai' in l or 'continue-watching' in l or 'tagContinueWatching' in l:
        sys.stdout.buffer.write(f"{i+1}: {l.strip()[:140]}\n".encode('utf-8'))
