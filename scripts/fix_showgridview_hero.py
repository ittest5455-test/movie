with open('js/app.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
in_hero_check = False
skip_until = -1

for idx, line in enumerate(lines):
    if idx <= skip_until:
        continue
    if 'if (heroSection) {' in line and idx > 660 and idx < 700:
        new_lines.append('    if (heroSection) {\n')
        new_lines.append('      // แนะนำหนังให้ขึ้นเฉพาะเมื่อเลือกหมวด "อัปเดตล่าสุด" เท่านั้น\n')
        new_lines.append('      if (title.includes("อัปเดต") || title.includes("today")) {\n')
        new_lines.append('        heroSection.style.display = "flex";\n')
        new_lines.append('      } else {\n')
        new_lines.append('        heroSection.style.display = "none";\n')
        new_lines.append('      }\n')
        new_lines.append('    }\n')
        # Skip the old block until 'gridView.style.display'
        for k in range(idx + 1, idx + 10):
            if 'gridView.style.display' in lines[k]:
                skip_until = k - 1
                break
    else:
        new_lines.append(line)

with open('js/app.js', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Updated showGridView hero check in js/app.js!")
