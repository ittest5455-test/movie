# 1. Update css/style.css: Restore .hero-section
with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

target_css = """.hero-section {
  display: none !important;
}"""

replacement_css = """.hero-section {
  position: relative;
  width: 100%;
  min-height: 560px;
  max-height: 680px;
  padding: 120px 5% 60px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #05060f;
}"""

css_norm = css.replace('\r\n', '\n')
target_css_norm = target_css.replace('\r\n', '\n')
replacement_css_norm = replacement_css.replace('\r\n', '\n')

if target_css_norm in css_norm:
    css_norm = css_norm.replace(target_css_norm, replacement_css_norm)
    with open('css/style.css', 'w', encoding='utf-8') as f:
        f.write(css_norm)
    print("Updated css/style.css: restored .hero-section style!")
else:
    print("Target CSS not found in style.css!")

# 2. Update index.html: Remove style="display: none !important;" from heroSection
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace(
    '<section class="hero-section" id="heroSection" style="display: none !important;">',
    '<section class="hero-section" id="heroSection">'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html: restored heroSection markup!")

# 3. Update js/app.js: Restore initHeroSpotlight & show heroSection only on "today" (อัปเดตล่าสุด)
with open('js/app.js', 'r', encoding='utf-8') as f:
    app = f.read()

# Restore initHeroSpotlight
old_init_hero = """  function initHeroSpotlight() {
    if (heroSection) heroSection.style.display = "none";
    return;"""

new_init_hero = """  function initHeroSpotlight() {
    if (!heroSection) return;"""

app_norm = app.replace('\r\n', '\n')
old_init_hero_norm = old_init_hero.replace('\r\n', '\n')
new_init_hero_norm = new_init_hero.replace('\r\n', '\n')

if old_init_hero_norm in app_norm:
    app_norm = app_norm.replace(old_init_hero_norm, new_init_hero_norm)

# In showHomeView, heroSection should be flex
old_home_hero = """    if (navWatchlist) navWatchlist.classList.remove("active");
    if (searchInput) searchInput.value = "";
    if (heroSection) heroSection.style.display = "none";"""

new_home_hero = """    if (navWatchlist) navWatchlist.classList.remove("active");
    if (searchInput) searchInput.value = "";
    // แสดงแบนเนอร์แนะนำหนังเมื่ออยู่ในหมวด "⚡ อัปเดตล่าสุด"
    if (heroSection) heroSection.style.display = "flex";"""

app_norm = app_norm.replace(old_home_hero.replace('\r\n', '\n'), new_home_hero.replace('\r\n', '\n'))

# In showGridView, only show heroSection if title includes "อัปเดตล่าสุด"
old_grid_hero = """    if (heroSection) {
      heroSection.style.display = "none";
    }"""

# Look for the heroSection block inside showGridView
old_grid_hero_context = """    if (heroSection) {
      heroSection.style.display = "none";
    }

    gridView.style.display = "block";"""

new_grid_hero_context = """    if (heroSection) {
      // แนะนำหนังให้ขึ้นเฉพาะเมื่อเลือกหมวด "อัปเดตล่าสุด" เท่านั้น
      if (title.includes("อัปเดตล่าสุด") || title.includes("today")) {
        heroSection.style.display = "flex";
      } else {
        heroSection.style.display = "none";
      }
    }

    gridView.style.display = "block";"""

app_norm = app_norm.replace(old_grid_hero_context.replace('\r\n', '\n'), new_grid_hero_context.replace('\r\n', '\n'))

with open('js/app.js', 'w', encoding='utf-8') as f:
    f.write(app_norm)
print("Updated js/app.js: heroSection displays conditionally only for 'อัปเดตล่าสุด'!")
