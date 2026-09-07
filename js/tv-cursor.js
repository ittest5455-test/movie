/**
 * TV Virtual Mouse Cursor (เมาส์เสมือนสำหรับ Android TV)
 * ช่วยให้ใช้รีโมททีวี (ปุ่ม ขึ้น/ลง/ซ้าย/ขวา/ตกลง) เลื่อนเมาส์และคลิกเมนูต่างๆ ได้ง่าย
 * เมื่อเข้าสู่หน้าเครื่องเล่นหนัง จะสลับไปใช้โหมดรีโมททีวีปกติทันที เพื่อให้กดเล่น/หยุด/ขยายจอได้ 100%
 */

(function () {
  'use strict';

  let isEnabled = true;
  let isVisible = false;
  let cursorX = window.innerWidth / 2;
  let cursorY = window.innerHeight / 2;
  const keysPressed = {};
  let animFrameId = null;
  let holdDuration = 0;
  let lastTimestamp = 0;
  let toggleBtnTimeout = null;

  // ตรวจสอบว่ากำลังเปิดหน้าต่างเล่นหนังอยู่หรือไม่
  function isPlayerActive() {
    const playerModal = document.getElementById('playerModal');
    return Boolean(playerModal && playerModal.classList.contains('active'));
  }

  // Injected CSS
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    #tv-virtual-cursor {
      position: fixed;
      top: 0;
      left: 0;
      width: 32px;
      height: 32px;
      pointer-events: none !important;
      z-index: 9999999;
      transform: translate(-4px, -4px);
      transition: transform 0.04s linear;
      display: none;
      will-change: left, top, transform;
    }
    #tv-virtual-cursor svg {
      width: 100%;
      height: 100%;
      display: block;
      transition: transform 0.1s ease;
    }
    #tv-virtual-cursor.clicking svg {
      transform: scale(0.75);
    }
    .tv-cursor-ripple {
      position: fixed;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999998;
      border: 3px solid #22c55e;
      animation: tvRippleAnim 0.35s ease-out forwards;
      transform: translate(-50%, -50%);
    }
    @keyframes tvRippleAnim {
      0% { width: 0; height: 0; opacity: 1; }
      100% { width: 65px; height: 65px; opacity: 0; }
    }
    .tv-virtual-hover {
      outline: 2px solid #38bdf8 !important;
      outline-offset: 3px !important;
      box-shadow: 0 0 12px rgba(56, 189, 248, 0.6) !important;
    }
    /* ป้ายบอกสถานะและปุ่มสลับโหมดเมาส์ที่มุมจอ (ซ่อนอัตโนมัติ ไม่บังจอ) */
    #tv-mouse-toggle-btn {
      position: fixed;
      bottom: 18px;
      left: 18px;
      z-index: 999990;
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #cbd5e1;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.82rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 7px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.5);
      transition: opacity 0.4s ease, transform 0.4s ease;
      user-select: none;
      opacity: 0;
      pointer-events: none;
      transform: translateY(10px);
    }
    #tv-mouse-toggle-btn.visible {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
    #tv-mouse-toggle-btn:hover {
      background: rgba(30, 41, 59, 0.95);
      color: #fff;
      border-color: #38bdf8;
    }
    #tv-mouse-toggle-btn .status-dot {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 8px #22c55e;
    }
    #tv-mouse-toggle-btn.disabled .status-dot {
      background: #94a3b8;
      box-shadow: none;
    }
  `;
  document.head.appendChild(styleEl);

  // สร้าง Cursor Element โดยใช้ Inline SVG 100% (ไม่มีแท็ก <img> และไม่มี alt ป้องกันข้อความต่อท้าย)
  const cursorEl = document.createElement('div');
  cursorEl.id = 'tv-virtual-cursor';
  cursorEl.innerHTML = `
    <svg id="tv-cursor-arrow" width="30" height="30" viewBox="0 0 24 24" fill="#22c55e" stroke="#000000" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 3px 6px rgba(0,0,0,0.85)); display: block;">
      <polygon points="3 3 10 22 13 13 22 10 3 3"></polygon>
    </svg>
    <svg id="tv-cursor-hand" width="32" height="32" viewBox="0 0 24 24" fill="#38bdf8" stroke="#000000" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 3px 6px rgba(0,0,0,0.9)); display: none;">
      <path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v3"></path>
      <path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v6"></path>
      <path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8"></path>
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
    </svg>
  `;
  document.body.appendChild(cursorEl);
  const arrowIcon = cursorEl.querySelector('#tv-cursor-arrow');
  const handIcon = cursorEl.querySelector('#tv-cursor-hand');

  // สร้างปุ่ม Toggle โหมดเมาส์
  const toggleBtn = document.createElement('div');
  toggleBtn.id = 'tv-mouse-toggle-btn';
  toggleBtn.innerHTML = `
    <span class="status-dot"></span>
    <span id="tv-mouse-text">เมาส์รีโมท: เปิด</span>
  `;
  document.body.appendChild(toggleBtn);

  function showToggleBtnBriefly(duration = 3500) {
    toggleBtn.classList.add('visible');
    clearTimeout(toggleBtnTimeout);
    toggleBtnTimeout = setTimeout(() => {
      toggleBtn.classList.remove('visible');
    }, duration);
  }

  toggleBtn.addEventListener('click', function () {
    setMouseEnabled(!isEnabled);
  });

  function setMouseEnabled(enable) {
    isEnabled = enable;
    const text = toggleBtn.querySelector('#tv-mouse-text');
    if (isEnabled) {
      toggleBtn.classList.remove('disabled');
      text.textContent = 'เมาส์รีโมท: เปิด';
      if (!isPlayerActive()) {
        showCursor();
      }
    } else {
      toggleBtn.classList.add('disabled');
      text.textContent = 'เมาส์รีโมท: ปิด';
      hideCursor();
    }
    showToggleBtnBriefly(3000);
  }

  function showCursor() {
    if (!isEnabled || isPlayerActive()) return;
    isVisible = true;
    cursorEl.style.display = 'block';
    updateCursorPos();
  }

  function hideCursor() {
    isVisible = false;
    cursorEl.style.display = 'none';
    removeHoverEffect();
    // ล้างสถานะปุ่มกดค้าง
    for (const k in keysPressed) delete keysPressed[k];
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }
    holdDuration = 0;
    lastTimestamp = 0;
  }

  function updateCursorPos() {
    cursorEl.style.left = cursorX + 'px';
    cursorEl.style.top = cursorY + 'px';
    checkHover();
  }

  let currentHoveredEl = null;

  function checkHover() {
    if (!isVisible) return;
    const target = document.elementFromPoint(cursorX, cursorY);
    if (!target) return;

    const clickable = target.closest('button, a, select, input, textarea, .movie-card, .category-pill, [role="button"]');
    if (clickable) {
      if (currentHoveredEl !== clickable) {
        removeHoverEffect();
        currentHoveredEl = clickable;
        currentHoveredEl.classList.add('tv-virtual-hover');
        if (arrowIcon) arrowIcon.style.display = 'none';
        if (handIcon) handIcon.style.display = 'block';
      }
    } else {
      removeHoverEffect();
      if (arrowIcon) arrowIcon.style.display = 'block';
      if (handIcon) handIcon.style.display = 'none';
    }
  }

  function removeHoverEffect() {
    if (currentHoveredEl) {
      currentHoveredEl.classList.remove('tv-virtual-hover');
      currentHoveredEl = null;
    }
  }

  // วงคลื่นเมื่อกด OK
  function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.className = 'tv-cursor-ripple';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    document.body.appendChild(ripple);
    setTimeout(() => {
      if (ripple && ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, 400);
  }

  // ฟังก์ชันคลิก ณ ตำแหน่งเมาส์
  function triggerClick() {
    if (!isVisible) return;

    cursorEl.classList.add('clicking');
    createRipple(cursorX, cursorY);

    setTimeout(() => {
      cursorEl.classList.remove('clicking');
    }, 150);

    const target = document.elementFromPoint(cursorX, cursorY);
    if (!target) return;

    // ถ้ากดคลิกโดนพื้นที่เครื่องเล่นหนัง ให้สลับไปโหมดรีโมททันทีและโฟกัสที่ตัวเล่น
    if (target.closest('#playerModal') || target.id === 'playerModal' || target.id === 'iframeVideoPlayer') {
      hideCursor();
      const iframe = document.getElementById('iframeVideoPlayer');
      const video = document.getElementById('html5VideoPlayer');
      if (iframe && iframe.style.display !== 'none') iframe.focus();
      else if (video && video.style.display !== 'none') video.focus();
      return;
    }

    const clickable = target.closest('button, a, select, input, textarea, .movie-card, .category-pill, [role="button"], [tabindex]') || target;

    const opts = {
      bubbles: true,
      cancelable: true,
      view: window,
      clientX: cursorX,
      clientY: cursorY,
      screenX: cursorX,
      screenY: cursorY
    };

    clickable.dispatchEvent(new MouseEvent('pointerdown', opts));
    clickable.dispatchEvent(new MouseEvent('mousedown', opts));
    clickable.dispatchEvent(new MouseEvent('pointerup', opts));
    clickable.dispatchEvent(new MouseEvent('mouseup', opts));

    if (typeof clickable.click === 'function') {
      clickable.click();
    }

    if (clickable.tagName === 'INPUT' || clickable.tagName === 'TEXTAREA' || clickable.tagName === 'SELECT') {
      clickable.focus();
    }
  }

  // Animation Loop สำหรับเคลื่อนที่อย่างนุ่มนวล
  function processMovement(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const delta = Math.min((timestamp - lastTimestamp) / 1000, 0.1);
    lastTimestamp = timestamp;

    let dx = 0;
    let dy = 0;

    if (keysPressed['ArrowUp']) dy -= 1;
    if (keysPressed['ArrowDown']) dy += 1;
    if (keysPressed['ArrowLeft']) dx -= 1;
    if (keysPressed['ArrowRight']) dx += 1;

    if (dx !== 0 || dy !== 0) {
      holdDuration += delta;
      const speed = Math.min(420 + holdDuration * 1150, 1350);

      cursorX += dx * speed * delta;
      cursorY += dy * speed * delta;

      cursorX = Math.max(10, Math.min(window.innerWidth - 15, cursorX));
      cursorY = Math.max(10, Math.min(window.innerHeight - 15, cursorY));

      updateCursorPos();

      // Auto-scroll เมื่อเมาส์ชนขอบบนหรือล่าง
      const scrollThreshold = 110;
      if (cursorY < scrollThreshold) {
        const scrollFactor = (scrollThreshold - cursorY) / scrollThreshold;
        window.scrollBy({ top: -scrollFactor * 26, behavior: 'auto' });
      } else if (cursorY > window.innerHeight - scrollThreshold) {
        const scrollFactor = (cursorY - (window.innerHeight - scrollThreshold)) / scrollThreshold;
        window.scrollBy({ top: scrollFactor * 26, behavior: 'auto' });
      }

      animFrameId = requestAnimationFrame(processMovement);
    } else {
      holdDuration = 0;
      animFrameId = null;
      lastTimestamp = 0;
    }
  }

  function startMovementLoop() {
    if (!animFrameId) {
      lastTimestamp = performance.now();
      animFrameId = requestAnimationFrame(processMovement);
    }
  }

  // ดักจับการกดปุ่มจากรีโมททีวี
  window.addEventListener('keydown', function (e) {
    const code = e.keyCode || e.which;
    const key = e.key;

    // ถ้าเปิดหน้าต่างเครื่องเล่นหนัง ให้ผ่านไปให้รีโมทควบคุมเครื่องเล่นตามปกติ 100%
    if (isPlayerActive()) {
      return;
    }

    const isArrow = (
      key === 'ArrowUp' || key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowRight' ||
      code === 19 || code === 20 || code === 21 || code === 22 ||
      code === 38 || code === 40 || code === 37 || code === 39
    );

    const isOk = (
      key === 'Enter' || code === 13 || code === 23 || code === 66
    );

    if (isEnabled && isArrow) {
      e.preventDefault();
      if (!isVisible) showCursor();

      const normalizedKey =
        (key === 'ArrowUp' || code === 19 || code === 38) ? 'ArrowUp' :
        (key === 'ArrowDown' || code === 20 || code === 40) ? 'ArrowDown' :
        (key === 'ArrowLeft' || code === 21 || code === 37) ? 'ArrowLeft' : 'ArrowRight';

      keysPressed[normalizedKey] = true;
      startMovementLoop();
    } else if (isEnabled && isOk && isVisible) {
      e.preventDefault();
      triggerClick();
    }
  }, { passive: false });

  window.addEventListener('keyup', function (e) {
    if (isPlayerActive()) return;

    const code = e.keyCode || e.which;
    const key = e.key;

    if (key === 'ArrowUp' || code === 19 || code === 38) delete keysPressed['ArrowUp'];
    if (key === 'ArrowDown' || code === 20 || code === 40) delete keysPressed['ArrowDown'];
    if (key === 'ArrowLeft' || code === 21 || code === 37) delete keysPressed['ArrowLeft'];
    if (key === 'ArrowRight' || code === 22 || code === 39) delete keysPressed['ArrowRight'];
  });

  // ซ่อนเมาส์เสมือนเมื่อผู้ใช้ขยับเมาส์จริง (ถ้าต่อเมาส์ USB หรือ Bluetooth)
  window.addEventListener('mousemove', function (e) {
    if (e.isTrusted && !keysPressed['ArrowUp'] && !keysPressed['ArrowDown'] && !keysPressed['ArrowLeft'] && !keysPressed['ArrowRight']) {
      cursorX = e.clientX;
      cursorY = e.clientY;
      hideCursor();
    }
  }, { passive: true });

  // ติดตามการเปิด-ปิด playerModal อัตโนมัติ
  function setupPlayerModalWatcher() {
    const playerModalEl = document.getElementById('playerModal');
    if (!playerModalEl) return;

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          if (playerModalEl.classList.contains('active')) {
            // เมื่อเข้าเล่นหนัง ซ่อนเมาส์และส่งโฟกัสไปที่เครื่องเล่นหนัง
            hideCursor();
            setTimeout(() => {
              const iframe = document.getElementById('iframeVideoPlayer');
              const video = document.getElementById('html5VideoPlayer');
              if (iframe && iframe.style.display !== 'none') {
                iframe.focus();
              } else if (video && video.style.display !== 'none') {
                video.focus();
              }
            }, 300);
          } else {
            // เมื่อออกจากหน้าเล่นหนัง คืนค่าเมาส์เสมือนให้เลือกดูหนังเรื่องอื่นต่อได้ทันที
            if (isEnabled) {
              setTimeout(showCursor, 150);
            }
          }
        }
      }
    });

    observer.observe(playerModalEl, { attributes: true, attributeFilter: ['class'] });
  }

  // โชว์เมาส์ทันทีเมื่อเปิดเข้าแอป
  function initOnStart() {
    setupPlayerModalWatcher();
    showCursor();
    showToggleBtnBriefly(3500);
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', initOnStart);
  } else {
    initOnStart();
  }

  // Expose API
  window.tvCursor = {
    show: showCursor,
    hide: hideCursor,
    enable: () => setMouseEnabled(true),
    disable: () => setMouseEnabled(false),
    isEnabled: () => isEnabled,
    isVisible: () => isVisible
  };

})();
