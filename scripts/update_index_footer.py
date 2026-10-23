with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

target = """  <!-- Footer -->
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-brand">
        <a href="#" class="logo"><span>Movie</span>Stream</a>
        <p>เว็บดูหนังออนไลน์ฟรี คมชัดระดับ HD หนังใหม่ 2026 ไม่มีโฆษณากวนใจ</p>
      </div>
      <div class="footer-links-group">
        <div class="footer-col">
          <h4>หมวดหมู่</h4>
          <ul>
            <li><a href="#" class="footer-filter-link" data-genre="แอคชั่น">หนังแอคชั่น</a></li>
            <li><a href="#" class="footer-filter-link" data-genre="ตลกคอมเมดี้">หนังตลก</a></li>
            <li><a href="#" class="footer-filter-link" data-genre="สยองขวัญ">หนังสยองขวัญ</a></li>
            <li><a href="#" class="footer-filter-link" data-genre="แฟนตาซี Sci-Fi">หนังไซไฟ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>ข้อมูล & บริการ</h4>
          <ul>
            <li><a href="#" id="privacyPolicyBtn">นโยบายความเป็นส่วนตัว (Privacy Policy)</a></li>
            <li><a href="#" id="dmcaBtn">แจ้งลบเนื้อหา (DMCA)</a></li>
            <li><a href="#" id="contactBtn">ติดต่อเรา (Contact Us)</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2026 MovieStream. All rights reserved. ดูหนังออนไลน์ฟรี คุณภาพมาสเตอร์</p>
    </div>
  </footer>"""

replacement = """  <!-- Footer -->
  <footer class="footer">
    <div class="footer-bottom">
      <p class="footer-signature">By Pennueng</p>
    </div>
  </footer>"""

content_norm = content.replace('\r\n', '\n')
target_norm = target.replace('\r\n', '\n')
replacement_norm = replacement.replace('\r\n', '\n')

if target_norm in content_norm:
    content_norm = content_norm.replace(target_norm, replacement_norm)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content_norm)
    print("Successfully replaced footer in index.html!")
else:
    print("Target not found in index.html")
