with open('js/movies.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('g4-487')
print(text[idx-200:idx+200])
