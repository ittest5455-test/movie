import sys
import re

for filename in ['index.html', 'js/app.js', 'js/movies.js']:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        for idx, line in enumerate(lines):
            if 'ซับไทย' in line:
                # print line number and strip
                sys.stdout.buffer.write(f"[{filename}:{idx+1}] {line.strip()[:140]}\n".encode('utf-8'))
    except Exception as e:
        sys.stdout.buffer.write(f"Error {filename}: {e}\n".encode('utf-8'))
