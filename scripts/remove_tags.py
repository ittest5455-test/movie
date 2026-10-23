with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

target = """        <div class="genre-tags" id="genreFilterContainer">
          <button class="genre-tag active" data-genre="all">🎬 ทั้งหมด</button>
          <button class="genre-tag tag-gold" data-genre="popular">⭐ หนังยอดนิยม</button>
          <button class="genre-tag tag-blue" data-genre="popular-2026">🔥 ยอดนิยม 2026</button>
          <button class="genre-tag tag-purple cw-tag" data-genre="continue-watching" id="tagContinueWatching">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="vertical-align: -2px; margin-right: 4px;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            รับชมต่อ
          </button>
          <button class="genre-tag tag-red" data-genre="today">⚡ อัปเดตล่าสุด</button>
          <button class="genre-tag tag-green" data-genre="พากย์ไทย">🔊 รวมพากย์ไทย</button>
          <button class="genre-tag tag-orange" data-genre="action">💥 แอคชั่น</button>
          <button class="genre-tag tag-cyan" data-genre="scifi">🚀 แฟนตาซี Sci-Fi</button>
          <button class="genre-tag tag-pink" data-genre="ละครไทย">🎭 ดูละครไทย ย้อนหลัง</button>
          <button class="genre-tag tag-indigo" data-genre="korean-series">🥢 ซีรีส์เกาหลี</button>
          <button class="genre-tag tag-red" data-genre="chinese-series">🏮 ซีรีส์จีน</button>
          <button class="genre-tag tag-purple" data-genre="japanese-series">🌸 ซีรีส์ญี่ปุ่น</button>
          <button class="genre-tag tag-gold" data-genre="dramax">💖 ดราม่า</button>
          <button class="genre-tag tag-blue" data-genre="subthai">💬 รวมซับไทย</button>
        </div>"""

replacement = """        <div class="genre-tags" id="genreFilterContainer">
          <button class="genre-tag active" data-genre="all">🎬 ทั้งหมด</button>
          <button class="genre-tag tag-gold" data-genre="popular">⭐ หนังยอดนิยม</button>
          <button class="genre-tag tag-blue" data-genre="popular-2026">🔥 ยอดนิยม 2026</button>
          <button class="genre-tag tag-red" data-genre="today">⚡ อัปเดตล่าสุด</button>
          <button class="genre-tag tag-green" data-genre="พากย์ไทย">🔊 รวมพากย์ไทย</button>
          <button class="genre-tag tag-orange" data-genre="action">💥 แอคชั่น</button>
          <button class="genre-tag tag-cyan" data-genre="scifi">🚀 แฟนตาซี Sci-Fi</button>
          <button class="genre-tag tag-pink" data-genre="ละครไทย">🎭 ดูละครไทย ย้อนหลัง</button>
          <button class="genre-tag tag-indigo" data-genre="korean-series">🥢 ซีรีส์เกาหลี</button>
          <button class="genre-tag tag-red" data-genre="chinese-series">🏮 ซีรีส์จีน</button>
          <button class="genre-tag tag-purple" data-genre="japanese-series">🌸 ซีรีส์ญี่ปุ่น</button>
          <button class="genre-tag tag-gold" data-genre="dramax">💖 ดราม่า</button>
        </div>"""

content_norm = content.replace('\r\n', '\n')
target_norm = target.replace('\r\n', '\n')
replacement_norm = replacement.replace('\r\n', '\n')

if target_norm in content_norm:
    content_norm = content_norm.replace(target_norm, replacement_norm)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content_norm)
    print("Successfully removed subthai and continue-watching buttons from index.html!")
else:
    print("Target not found in index.html")
