import json

with open('temp_posters/updated_paths.json', 'r', encoding='utf-8') as f:
    mapping = json.load(f)

with open('js/movies.js', 'r', encoding='utf-8') as f:
    content = f.read()

total_replaced = 0
for url, local_path in mapping.items():
    # Replace exact quoted URL: "https://goseries4k..." with "images/clean_posters/..."
    target = f'"{url}"'
    replacement = f'"{local_path}"'
    count = content.count(target)
    if count > 0:
        content = content.replace(target, replacement)
        total_replaced += count
        print(f"Replaced {count} occurrences of {url} -> {local_path}")
    else:
        print(f"WARNING: 0 occurrences of {url}")

with open('js/movies.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"\nDone! Successfully replaced {total_replaced} occurrences in js/movies.js.")
