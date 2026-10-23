import json

with open('temp_posters/updated_paths.json', 'r', encoding='utf-8') as f:
    mapping = json.load(f)

with open('js/movies.js', 'r', encoding='utf-8') as f:
    text = f.read()

count_poster = 0
count_backdrop = 0

for url in mapping.keys():
    # count how many times url appears in poster or backdrop
    c = text.count(f'"{url}"')
    if c > 0:
        print(f"URL: {url} -> appears {c} times")

print("Check done.")
