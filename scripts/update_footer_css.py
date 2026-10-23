with open('css/style.css', 'r', encoding='utf-8') as f:
    content = f.read()

target = """/* Footer Section */
footer {
  background-color: #030308;
  border-top: 1px solid var(--color-border);
  padding: 3rem 4% 1.5rem;
  margin-top: 4rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-brand {
  max-width: 320px;
}

.footer-brand p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-top: 0.8rem;
}

.footer-links-group {
  display: flex;
  gap: 3rem;
}

.footer-links {
  list-style: none;
}

.footer-links h4 {
  font-family: var(--font-title);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.footer-links li {
  margin-bottom: 0.6rem;
}

.footer-links a {
  color: var(--color-text-muted);
  font-size: 0.85rem;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: var(--color-primary);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}"""

replacement = """/* Footer Section */
footer {
  background-color: #030308;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2.2rem 4% 2rem;
  margin-top: 4rem;
  text-align: center;
}

.footer-content {
  display: none;
}

.footer-bottom {
  border-top: none;
  padding-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.footer-signature {
  font-family: 'Great Vibes', 'Dancing Script', 'Brush Script MT', cursive;
  font-size: 2.5rem;
  font-weight: 500;
  letter-spacing: 2.5px;
  color: #f1f5f9;
  text-shadow: 0 0 15px rgba(255, 255, 255, 0.25), 0 0 30px rgba(139, 92, 246, 0.35);
  margin: 0;
  line-height: 1.2;
  user-select: none;
  transition: transform 0.3s ease, text-shadow 0.3s ease, color 0.3s ease;
}

.footer-signature:hover {
  transform: scale(1.06);
  color: #ffffff;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(139, 92, 246, 0.6);
}

@media (max-width: 768px) {
  footer {
    padding: 1.8rem 4% 1.6rem;
  }
  .footer-signature {
    font-size: 2rem;
  }
}"""

# Normalize newlines for matching
content_norm = content.replace('\r\n', '\n')
target_norm = target.replace('\r\n', '\n')
replacement_norm = replacement.replace('\r\n', '\n')

if target_norm in content_norm:
    content_norm = content_norm.replace(target_norm, replacement_norm)
    with open('css/style.css', 'w', encoding='utf-8') as f:
        f.write(content_norm)
    print("Successfully replaced footer CSS in style.css!")
else:
    print("Target not found in style.css")
