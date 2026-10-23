with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Update active tag in index.html
old_tags = """        <div class="genre-tags" id="genreFilterContainer">
          <button class="genre-tag tag-red" data-genre="today">⚡ อัปเดตล่าสุด</button>
          <button class="genre-tag active" data-genre="all">🎬 ทั้งหมด</button>"""

new_tags = """        <div class="genre-tags" id="genreFilterContainer">
          <button class="genre-tag tag-red active" data-genre="today">⚡ อัปเดตล่าสุด</button>
          <button class="genre-tag" data-genre="all">🎬 ทั้งหมด</button>"""

html = html.replace(old_tags, new_tags)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html active tag!")

# Update js/app.js
with open('js/app.js', 'r', encoding='utf-8') as f:
    app = f.read()

# 1. Update showHomeView genre active reset
old_home_reset = """    // Reset active genres tag
    document.querySelectorAll(".genre-tag").forEach(tag => {
      if (tag.getAttribute("data-genre") === "all") {
        tag.classList.add("active");
      } else {
        tag.classList.remove("active");
      }
    });"""

new_home_reset = """    // Reset active genres tag - ให้ "⚡ อัปเดตล่าสุด" เป็นอันดับแรกและ Active เป็นค่าเริ่มต้น
    document.querySelectorAll(".genre-tag").forEach(tag => {
      const g = tag.getAttribute("data-genre");
      if (g === "today") {
        tag.classList.add("active");
      } else {
        tag.classList.remove("active");
      }
    });"""

app = app.replace(old_home_reset, new_home_reset)

# 2. Update showGridView heroSection display logic
old_hero_check = """    if (heroSection) {
      if (title.includes("")) {
        heroSection.style.display = "flex";
      } else {
        heroSection.style.display = "none";
      }
    }"""

new_hero_check = """    if (heroSection) {
      if (title.includes("อัปเดต") || title.includes("ทั้งหมด") || title.includes("today") || title.includes("all")) {
        heroSection.style.display = "flex";
      } else {
        heroSection.style.display = "none";
      }
    }"""

app = app.replace(old_hero_check, new_hero_check)

# 3. Update genre clicks in app.js
old_genre_click = """      const genre = btn.getAttribute("data-genre");
      if (genre === "all") {
        showHomeView();
      } else if (genre === "popular") {
        const popMovies = movieList.filter(m => (m.genres && (m.genres.includes("ยอดนิยม") || m.genres.includes("ยอดนิยม 2026"))) || (m.rating && m.rating >= 7.8));
        popMovies.sort((a, b) => {
          const aTop = (a.genres && (a.genres.includes("ยอดนิยม 2026") || a.genres.includes("ยอดนิยม"))) ? 1 : 0;
          const bTop = (b.genres && (b.genres.includes("ยอดนิยม 2026") || b.genres.includes("ยอดนิยม"))) ? 1 : 0;
          if (bTop !== aTop) return bTop - aTop;
          return (b.rating || 0) - (a.rating || 0);
        });
        showGridView(`⭐ รวมภาพยนตร์ยอดนิยมทั้งหมด (${popMovies.length} เรื่อง)`, popMovies);
      } else if (genre === "popular-2026") {
        const popMovies = movieList.filter(m => (m.genres && m.genres.includes("ยอดนิยม 2026")) || (m.rating && m.rating >= 7.0 && (m.year === 2026 || String(m.year) === "2026")));
        popMovies.sort((a, b) => {
          const aTop = (a.genres && a.genres.includes("ยอดนิยม 2026")) ? 1 : 0;
          const bTop = (b.genres && b.genres.includes("ยอดนิยม 2026")) ? 1 : 0;
          if (bTop !== aTop) return bTop - aTop;
          return (b.rating || 0) - (a.rating || 0);
        });
        showGridView(`⭐ รวมภาพยนตร์ยอดนิยม 2026 (TOP & HOT) (${popMovies.length} เรื่อง)`, popMovies);
      } else if (genre === "continue-watching") {
        displayContinueWatchingGridView();
      } else if (genre === "today") {
        const todayMovies = movieList.slice(0, 48);
        showGridView(`⚡ รวมภาพยนตร์ & ซีรีส์อัปเดตล่าสุด (${todayMovies.length} เรื่อง)`, todayMovies);
      }"""

new_genre_click = """      const genre = btn.getAttribute("data-genre");
      if (genre === "today") {
        // เมื่อกด "⚡ อัปเดตล่าสุด" ให้แสดงหน้าแรกพร้อม Hero Spotlight Banner เหมือนหน้าแรก
        showHomeView();
      } else if (genre === "all") {
        document.querySelectorAll(".genre-tag").forEach(tag => {
          if (tag.getAttribute("data-genre") === "all") tag.classList.add("active");
          else tag.classList.remove("active");
        });
        if (heroSection) heroSection.style.display = "flex";
        showGridView("🎬 รวมภาพยนตร์และซีรีส์ทั้งหมด", movieList);
      } else if (genre === "popular") {
        const popMovies = movieList.filter(m => (m.genres && (m.genres.includes("ยอดนิยม") || m.genres.includes("ยอดนิยม 2026"))) || (m.rating && m.rating >= 7.8));
        popMovies.sort((a, b) => {
          const aTop = (a.genres && (a.genres.includes("ยอดนิยม 2026") || a.genres.includes("ยอดนิยม"))) ? 1 : 0;
          const bTop = (b.genres && (b.genres.includes("ยอดนิยม 2026") || b.genres.includes("ยอดนิยม"))) ? 1 : 0;
          if (bTop !== aTop) return bTop - aTop;
          return (b.rating || 0) - (a.rating || 0);
        });
        showGridView(`⭐ รวมภาพยนตร์ยอดนิยมทั้งหมด (${popMovies.length} เรื่อง)`, popMovies);
      } else if (genre === "popular-2026") {
        const popMovies = movieList.filter(m => (m.genres && m.genres.includes("ยอดนิยม 2026")) || (m.rating && m.rating >= 7.0 && (m.year === 2026 || String(m.year) === "2026")));
        popMovies.sort((a, b) => {
          const aTop = (a.genres && a.genres.includes("ยอดนิยม 2026")) ? 1 : 0;
          const bTop = (b.genres && b.genres.includes("ยอดนิยม 2026")) ? 1 : 0;
          if (bTop !== aTop) return bTop - aTop;
          return (b.rating || 0) - (a.rating || 0);
        });
        showGridView(`⭐ รวมภาพยนตร์ยอดนิยม 2026 (TOP & HOT) (${popMovies.length} เรื่อง)`, popMovies);
      } else if (genre === "continue-watching") {
        displayContinueWatchingGridView();
      }"""

app = app.replace(old_genre_click, new_genre_click)

with open('js/app.js', 'w', encoding='utf-8') as f:
    f.write(app)
print("Updated js/app.js!")
