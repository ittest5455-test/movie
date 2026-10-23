with open('js/app.js', 'r', encoding='utf-8') as f:
    content = f.read()

target = """      } else if (genre === "today") {
        const todayMovies = movieList.slice(0, 16);
        showGridView("🔥 ภาพยนตร์ & ซีรีส์อัปเดตวันนี้", todayMovies);"""

replacement = """      } else if (genre === "today") {
        const todayMovies = movieList.slice(0, 48);
        showGridView(`⚡ รวมภาพยนตร์ & ซีรีส์อัปเดตล่าสุด (${todayMovies.length} เรื่อง)`, todayMovies);"""

content_norm = content.replace('\r\n', '\n')
target_norm = target.replace('\r\n', '\n')
replacement_norm = replacement.replace('\r\n', '\n')

if target_norm in content_norm:
    content_norm = content_norm.replace(target_norm, replacement_norm)
    with open('js/app.js', 'w', encoding='utf-8') as f:
        f.write(content_norm)
    print("Successfully updated today genre in js/app.js!")
else:
    print("Target not found in js/app.js")
