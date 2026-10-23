# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace(
    '<section class="hero-section" id="heroSection">',
    '<section class="hero-section" id="heroSection" style="display: none !important;">'
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html: heroSection hidden!")

# 2. Update css/style.css
with open('css/style.css', 'r', encoding='utf-8') as f:
    css = f.read()

target_css = """.hero-section {
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

replacement_css = """.hero-section {
  display: none !important;
}"""

target_css_norm = target_css.replace('\r\n', '\n')
replacement_css_norm = replacement_css.replace('\r\n', '\n')
css_norm = css.replace('\r\n', '\n')

if target_css_norm in css_norm:
    css_norm = css_norm.replace(target_css_norm, replacement_css_norm)
    with open('css/style.css', 'w', encoding='utf-8') as f:
        f.write(css_norm)
    print("Updated css/style.css: .hero-section display: none !important!")
else:
    print("Target CSS not found!")

# 3. Update js/app.js
with open('js/app.js', 'r', encoding='utf-8') as f:
    app = f.read()

# Make sure heroSection is never displayed
app = app.replace(
    'if (heroSection) heroSection.style.display = "flex";',
    'if (heroSection) heroSection.style.display = "none";'
)

old_init_hero = """  function initHeroSpotlight() {
    if (!heroSection) return;"""

new_init_hero = """  function initHeroSpotlight() {
    if (heroSection) heroSection.style.display = "none";
    return;"""

old_init_hero_norm = old_init_hero.replace('\r\n', '\n')
new_init_hero_norm = new_init_hero.replace('\r\n', '\n')
app_norm = app.replace('\r\n', '\n')

if old_init_hero_norm in app_norm:
    app_norm = app_norm.replace(old_init_hero_norm, new_init_hero_norm)

with open('js/app.js', 'w', encoding='utf-8') as f:
    f.write(app_norm)
print("Updated js/app.js: heroSection completely disabled and hidden!")
