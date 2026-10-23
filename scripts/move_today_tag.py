with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

target = """        <div class="genre-tags" id="genreFilterContainer">
          <button class="genre-tag active" data-genre="all">🎬 ทั้งหมด</button>
          <button class="genre-tag tag-gold" data-genre="popular">⭐ หนังยอดนิยม</button>
          <button class="genre-tag tag-blue" data-genre="popular-2026">🔥 ยอดนิยม 2026</button>
          <button class="genre-tag tag-red" data-genre="today">⚡ อัปเดตล่าสุด</button>
          <button class="genre-tag tag-green" data-genre="พากย์ไทย">🔊 รวมพากย์ไทย</button>"""

replacement = """        <div class="genre-tags" id="genreFilterContainer">
          <button class="genre-tag tag-red" data-genre="today">⚡ อัปเดตล่าสุด</button>
          <button class="genre-tag active" data-genre="all">🎬 ทั้งหมด</button>
          <button class="genre-tag tag-gold" data-genre="popular">⭐ หนังยอดนิยม</button>
          <button class="genre-tag tag-blue" data-genre="popular-2026">🔥 ยอดนิยม 2026</button>
          <button class="genre-tag tag-green" data-genre="พากย์ไทย">🔊 รวมพากย์ไทย</button>"""

content_norm = content.replace('\r\n', '\n')
target_norm = target.replace('\r\n', '\n')
replacement_norm = replacement.replace('\r\n', '\n')

if target_norm in content_norm:
    content_norm = content_norm.replace(target_norm, replacement_norm)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content_norm)
    print("Successfully moved 'อัปเดตล่าสุด' to the first position in index.html!")
else:
    print("Target not found in index.html")
