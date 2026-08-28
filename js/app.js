// ----------------------------------------------------
// MovieStream JavaScript Application Logic
// ----------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Selectors ---
  const headerNav = document.getElementById("headerNav");
  const logoLink = document.getElementById("logoLink");
  const navHome = document.getElementById("navHome");
  const navWatchlist = document.getElementById("navWatchlist");
  const watchlistCount = document.getElementById("watchlistCount");
  const searchInput = document.getElementById("searchInput");
  
  // Views
  const homeView = document.getElementById("homeView");
  const gridView = document.getElementById("gridView");
  const gridTitle = document.getElementById("gridTitle");
  const gridMoviesList = document.getElementById("gridMoviesList");
  

  
  // Genre Filter
  const genreFilterContainer = document.getElementById("genreFilterContainer");
  const movieShelvesContainer = document.getElementById("movieShelvesContainer");
  
  // Details Modal
  const detailsModal = document.getElementById("detailsModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalHeroBanner = document.getElementById("modalHeroBanner");
  const modalPoster = document.getElementById("modalPoster");
  const modalTitleTh = document.getElementById("modalTitleTh");
  const modalTitleEn = document.getElementById("modalTitleEn");
  const modalRatingVal = document.getElementById("modalRatingVal");
  const modalYear = document.getElementById("modalYear");
  const modalDuration = document.getElementById("modalDuration");
  const modalGenres = document.getElementById("modalGenres");
  const modalDescription = document.getElementById("modalDescription");
  const modalCast = document.getElementById("modalCast");
  const modalWatchNowBtn = document.getElementById("modalWatchNowBtn");
  const modalTrailerBtn = document.getElementById("modalTrailerBtn");
  const modalBookmarkBtn = document.getElementById("modalBookmarkBtn");
  
  // Video Player Modal
  const playerModal = document.getElementById("playerModal");
  const playerCloseBtn = document.getElementById("playerCloseBtn");
  const html5VideoPlayer = document.getElementById("html5VideoPlayer");
  const iframeVideoPlayer = document.getElementById("iframeVideoPlayer");
  const customPlayerControls = document.getElementById("customPlayerControls");
  const playerBlockerOverlay = document.getElementById("playerBlockerOverlay");
  
  // Player Top & Bottom Bar Selectors
  const serverMainOldBtn = document.getElementById("serverMainOldBtn");
  const serverMainNewBtn = document.getElementById("serverMainNewBtn");
  const serverBackupBtn = document.getElementById("serverBackupBtn");
  const audioSelectBtn = document.getElementById("audioSelectBtn");
  const episodeSelectBtn = document.getElementById("episodeSelectBtn");

  // Custom Controls Selectors
  const playPauseBtn = document.getElementById("playPauseBtn");
  const playIcon = document.getElementById("playIcon");
  const skipBackBtn = document.getElementById("skipBackBtn");
  const skipForwardBtn = document.getElementById("skipForwardBtn");
  const currentTimeLabel = document.getElementById("currentTime");
  const totalDurationLabel = document.getElementById("totalDuration");
  const progressBar = document.getElementById("progressBar");
  const progressFilled = document.getElementById("progressFilled");
  const muteBtn = document.getElementById("muteBtn");
  const volumeIcon = document.getElementById("volumeIcon");
  const volumeSlider = document.getElementById("volumeSlider");
  const volumeFilled = document.getElementById("volumeFilled");
  const fullscreenBtn = document.getElementById("fullscreenBtn");
  const videoWrapper = document.getElementById("videoWrapper");

  const toastContainer = document.getElementById("toastContainer");

  // --- State Variables ---
  let watchlist = JSON.parse(localStorage.getItem("moviestream_watchlist")) || [];
  let currentActiveMovie = null;

  try {
    setupEventListeners();
    updateWatchlistUI();
    renderMovieShelves();
  } catch (err) {
    console.error("Initialization error:", err);
  }

  // --- Functions ---

  // Scroll Header Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      headerNav.classList.add("scrolled");
    } else {
      headerNav.classList.remove("scrolled");
    }
  });



  // Render Horizontal Movie Slides by Categories
  function renderMovieShelves() {
    movieShelvesContainer.innerHTML = "";
    
    // 1. Shelf หนังใหม่อัปเดตวันนี้ (คัดเลือกหนังใหม่ล่าสุดจาก 3 เว็บ 037HDD + 24-HDX + GOSERIES4K)
    const todayMovies = movies.slice(0, 16);
    createShelf("🔥 หนังใหม่อัปเดตวันนี้ (Today's Updates)", todayMovies);

    // 2. Shelf หนังใหม่อัปเดตสัปดาห์นี้ (สัปดาห์นี้)
    const thisWeekMovies = movies.slice(0, 32);
    createShelf("⭐ หนังใหม่อัปเดตสัปดาห์นี้ (This Week)", thisWeekMovies);

    // 3. Trending Now Shelf
    const trendingMovies = [...movies].sort((a, b) => b.rating - a.rating);
    createShelf("🏆 ภาพยนตร์ยอดนิยม (Trending Now)", trendingMovies);
    
    // 4. Shelf for each category/genre
    const genres = ["ตลกคอมเมดี้", "สยองขวัญ", "แฟนตาซี Sci-Fi", "แอคชั่น", "การ์ตูน"];
    genres.forEach(genre => {
      const filtered = movies.filter(m => m.genres.includes(genre));
      if (filtered.length > 0) {
        createShelf(`หมวดหมู่: ${genre}`, filtered);
      }
    });
  }

  // Create individual horizontal shelf markup
  function createShelf(title, moviesList) {
    const section = document.createElement("section");
    section.className = "movies-shelf-section";
    
    section.innerHTML = `
      <div class="section-header">
        <h2 class="section-title">${title}</h2>
        <div class="slider-nav-btns">
          <button class="slider-arrow slider-prev" aria-label="เลื่อนซ้าย"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
          <button class="slider-arrow slider-next" aria-label="เลื่อนขวา"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
        </div>
      </div>
      <div class="movies-slider-container">
        <div class="movies-slider">
          ${moviesList.map(movie => createMovieCardMarkup(movie)).join("")}
        </div>
      </div>
    `;
    
    const slider = section.querySelector(".movies-slider");
    const prevBtn = section.querySelector(".slider-prev");
    const nextBtn = section.querySelector(".slider-next");

    if (prevBtn && nextBtn && slider) {
      prevBtn.addEventListener("click", () => {
        slider.scrollBy({ left: -400, behavior: "smooth" });
      });
      nextBtn.addEventListener("click", () => {
        slider.scrollBy({ left: 400, behavior: "smooth" });
      });
    }

    // Add Click & Keydown listener to all cards within this shelf
    section.querySelectorAll(".movie-card").forEach(card => {
      card.addEventListener("click", () => {
        const movieId = card.getAttribute("data-id");
        const found = movies.find(m => m.id === movieId);
        if (found) playMovie(found);
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const movieId = card.getAttribute("data-id");
          const found = movies.find(m => m.id === movieId);
          if (found) playMovie(found);
        }
      });
    });

    movieShelvesContainer.appendChild(section);
  }

  // Create single movie card structure
  function createMovieCardMarkup(movie) {
    const isSaved = watchlist.includes(movie.id);
    const placeholderSvg = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22450%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20450%22%3E%3Crect%20fill%3D%22%231e293b%22%20width%3D%22300%22%20height%3D%22450%22%2F%3E%3Ctext%20fill%3D%22%2394a3b8%22%20font-family%3D%22sans-serif%22%20font-size%3D%2218%22%20dy%3D%2210.5%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3EMovieStream%20HD%3C%2Ftext%3E%3C%2Fsvg%3E";
    return `
      <div class="movie-card" data-id="${movie.id}" tabindex="0" role="button" aria-label="${movie.titleTh}">
        <div class="movie-poster-wrapper">
          <img src="${movie.poster}" alt="โปสเตอร์เรื่อง ${movie.titleTh}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${placeholderSvg}'">
          <span class="movie-rating-badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            ${movie.rating}
          </span>
          <span class="movie-year-badge">${movie.year}</span>
          <div class="movie-card-overlay">
            <button class="movie-play-btn" aria-label="เล่นหนัง ${movie.titleTh}">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
            </button>
            <div class="movie-card-info-top">
              <div class="movie-card-genres">${movie.genres.join(" / ")}</div>
              <h3 class="movie-card-title">${movie.titleTh}</h3>
              <div class="movie-card-title-en">${movie.titleEn}</div>
            </div>
            <div class="movie-card-details">
              <span>${movie.duration}</span>
              <span style="color: ${isSaved ? '#22c55e' : '#94a3b8'}">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --- View Swappers ---

  function showHomeView() {
    homeView.style.display = "block";
    gridView.style.display = "none";
    navHome.classList.add("active");
    navWatchlist.classList.remove("active");
    searchInput.value = "";
    
    // Reset active genres tag
    document.querySelectorAll(".genre-tag").forEach(tag => {
      if (tag.getAttribute("data-genre") === "all") {
        tag.classList.add("active");
      } else {
        tag.classList.remove("active");
      }
    });
  }

  function showGridView(title, filteredMovies) {
    homeView.style.display = "none";
    gridView.style.display = "block";
    gridTitle.textContent = title;
    
    gridMoviesList.innerHTML = "";
    
    if (filteredMovies.length === 0) {
      gridMoviesList.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <h3>ไม่พบภาพยนตร์</h3>
          <p>ลองปรับค้นหาใหม่ หรือกลับไปที่หน้าหลัก</p>
        </div>
      `;
      return;
    }
    
    gridMoviesList.innerHTML = filteredMovies.map(movie => createMovieCardMarkup(movie)).join("");
    
    // Add Click Listeners for grid movies to play directly
    gridMoviesList.querySelectorAll(".movie-card").forEach(card => {
      card.addEventListener("click", () => {
        const movieId = card.getAttribute("data-id");
        const found = movies.find(m => m.id === movieId);
        if (found) playMovie(found);
      });
    });
  }

  // --- Watchlist Handling ---

  function updateWatchlistUI() {
    watchlistCount.textContent = watchlist.length;
    localStorage.setItem("moviestream_watchlist", JSON.stringify(watchlist));
  }

  function toggleWatchlist(movieId) {
    const movie = movies.find(m => m.id === movieId);
    if (!movie) return;

    const index = watchlist.indexOf(movieId);
    if (index === -1) {
      watchlist.push(movieId);
      showToast(`เพิ่ม "${movie.titleTh}" ไปยังรายการโปรดแล้ว`, "success");
    } else {
      watchlist.splice(index, 1);
      showToast(`ลบ "${movie.titleTh}" ออกจากรายการโปรดแล้ว`, "info");
    }
    
    updateWatchlistUI();
    renderMovieShelves(); // Update saved heart icon indicators on sliders
    
    // If currently on watchlist page, refresh grid view
    if (navWatchlist.classList.contains("active")) {
      displayWatchlistView();
    }
    
    // Update Modal Button State if modal is open
    if (currentActiveMovie && currentActiveMovie.id === movieId) {
      updateModalWatchlistBtnState(movieId);
    }
  }

  function updateModalWatchlistBtnState(movieId) {
    const isSaved = watchlist.includes(movieId);
    if (modalBookmarkBtn) {
      if (isSaved) {
        modalBookmarkBtn.classList.add("btn-primary");
        modalBookmarkBtn.classList.remove("btn-secondary");
        modalBookmarkBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`;
      } else {
        modalBookmarkBtn.classList.add("btn-secondary");
        modalBookmarkBtn.classList.remove("btn-primary");
        modalBookmarkBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>`;
      }
    }
  }

  function displayWatchlistView() {
    navWatchlist.classList.add("active");
    navHome.classList.remove("active");
    const favs = movies.filter(m => watchlist.includes(m.id));
    showGridView("รายการโปรดของฉัน", favs);
  }

  // --- Details Modal Actions ---

  function openDetailsModal(movie) {
    currentActiveMovie = movie;
    
    if (modalHeroBanner) modalHeroBanner.style.backgroundImage = `url('${movie.backdrop || movie.poster}')`;
    if (modalPoster) {
      modalPoster.src = movie.poster;
      modalPoster.alt = `ปกหนัง ${movie.titleTh}`;
    }
    if (modalTitleTh) modalTitleTh.textContent = movie.titleTh;
    if (modalTitleEn) modalTitleEn.textContent = `${movie.titleEn} (${movie.year})`;
    if (modalRatingVal) modalRatingVal.textContent = movie.rating;
    if (modalYear) modalYear.textContent = movie.year;
    if (modalDuration) modalDuration.textContent = movie.duration;
    if (modalDescription) modalDescription.textContent = movie.description;
    if (modalCast) modalCast.textContent = movie.cast ? movie.cast.join(", ") : "-";
    
    if (modalGenres && movie.genres) {
      modalGenres.innerHTML = movie.genres.map(g => `<span class="meta-tag">${g}</span>`).join("");
    }
    
    // Set Play Button Click
    if (modalWatchNowBtn) {
      modalWatchNowBtn.onclick = () => {
        closeDetailsModal();
        playMovie(movie);
      };
    }
    
    // Set Watchlist Button Click
    if (modalBookmarkBtn) {
      modalBookmarkBtn.onclick = () => {
        toggleWatchlist(movie.id);
      };
    }
    
    if (modalTrailerBtn) {
      modalTrailerBtn.onclick = () => {
        if (movie.trailerUrl) {
          window.open(movie.trailerUrl, "_blank");
        } else {
          showToast("ไม่พบตัวอย่างภาพยนตร์เรื่องนี้", "info");
        }
      };
    }
    
    if (detailsModal) {
      detailsModal.classList.add("active");
      detailsModal.setAttribute("aria-hidden", "false");
    }
    document.body.style.overflow = "hidden";
  }

  function closeDetailsModal() {
    if (detailsModal) {
      detailsModal.classList.remove("active");
      detailsModal.setAttribute("aria-hidden", "true");
    }
    document.body.style.overflow = "";
    currentActiveMovie = null;
  }

  // --- Video Player Modal Actions ---

  function playMovie(movie) {
    playerModal.classList.add("active");
    document.body.style.overflow = "hidden";
    currentActiveMovie = movie;

    // Populate Episodes Select Box dynamically
    if (episodeSelectBtn && movie.episodes && movie.episodes.length > 0) {
      episodeSelectBtn.innerHTML = movie.episodes.map((ep, idx) => 
        `<option value="${idx + 1}">${ep}</option>`
      ).join("");
    } else if (episodeSelectBtn) {
      episodeSelectBtn.innerHTML = `<option value="1">ตอนที่ 1 (จบในตอน)</option>`;
    }

    // Populate Languages Select Box dynamically
    if (audioSelectBtn && movie.languages && movie.languages.length > 0) {
      audioSelectBtn.innerHTML = movie.languages.map(lang => 
        `<option value="${lang}">${lang}</option>`
      ).join("");
    } else if (audioSelectBtn) {
      audioSelectBtn.innerHTML = `<option value="Thai">Thai (พากย์ไทย)</option>`;
    }
    
    // 1. Direct MP4 Streaming Player
    if (movie.sourceType === "direct") {
      iframeVideoPlayer.style.display = "none";
      iframeVideoPlayer.src = "";
      
      html5VideoPlayer.style.display = "block";
      html5VideoPlayer.src = movie.videoUrl;
      customPlayerControls.style.display = "flex";
      playerBlockerOverlay.style.display = "none";
      
      // Set volume back to default or saved volume
      html5VideoPlayer.volume = 0.8;
      updateVolumeBarUI();
      
      // Auto Play
      html5VideoPlayer.play()
        .then(() => updatePlayPauseUI(true))
        .catch(() => updatePlayPauseUI(false));
        
      showToast(`กำลังโหลดเล่นวิดีโอแบบ Direct: ${movie.titleTh}`, "success");
    } 
    // 2. Embedded IFrame Video Player
    else if (movie.sourceType === "embed") {
      html5VideoPlayer.style.display = "none";
      html5VideoPlayer.pause();
      html5VideoPlayer.src = "";
      customPlayerControls.style.display = "none";
      
      iframeVideoPlayer.style.display = "block";
      iframeVideoPlayer.removeAttribute("sandbox");
      iframeVideoPlayer.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      iframeVideoPlayer.setAttribute("allow", "autoplay *; fullscreen *; picture-in-picture *; encrypted-media *; media-src *; webkit-playsinline; playsinline");
      iframeVideoPlayer.setAttribute("playsinline", "");
      iframeVideoPlayer.setAttribute("webkit-playsinline", "");
      iframeVideoPlayer.src = movie.videoUrl;
      
      playerBlockerOverlay.style.display = "none";
      
      showToast(`กำลังเปิดเครื่องเล่นวิดีโอ: ${movie.titleTh}`, "success");
    }
  }

  // Load specific episode directly from pre-built episodeUrls pool
  function loadEpisode(postId, episode, lang, title) {
    showToast(`กำลังโหลด ตอนที่ ${episode}...`, "success");
    
    if (currentActiveMovie && currentActiveMovie.episodeUrls && currentActiveMovie.episodeUrls[episode]) {
      const epVideoUrl = currentActiveMovie.episodeUrls[episode];
      iframeVideoPlayer.removeAttribute("sandbox");
      iframeVideoPlayer.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
      iframeVideoPlayer.setAttribute("allow", "autoplay *; fullscreen *; picture-in-picture *; encrypted-media *; media-src *; webkit-playsinline; playsinline");
      iframeVideoPlayer.setAttribute("playsinline", "");
      iframeVideoPlayer.setAttribute("webkit-playsinline", "");
      iframeVideoPlayer.src = epVideoUrl;
      showToast(`เปิดเล่น ตอนที่ ${episode} เรียบร้อย`, "success");
      return;
    }

    // Backup fetch via API
    const formData = new FormData();
    formData.append("action", "halim_ajax_player");
    formData.append("nonce", "");
    formData.append("episode", episode);
    formData.append("server", "1");
    formData.append("postid", postId);
    formData.append("lang", lang || "Thai");
    formData.append("title", title || "Movie");
    
    fetch("https://api.24-hdx.com/get.php", {
      method: "POST",
      body: formData
    })
    .then(res => res.text())
    .then(html => {
      const srcMatch = html.match(/src="([^"]+)"/);
      if (srcMatch && srcMatch[1]) {
        iframeVideoPlayer.src = srcMatch[1];
        showToast(`เปิดเล่น ตอนที่ ${episode} เรียบร้อย`, "success");
      } else {
        showToast(`สลับเปิดเล่น ตอนที่ ${episode}`, "success");
      }
    })
    .catch(() => {
      showToast(`สลับเปิดเล่น ตอนที่ ${episode}`, "success");
    });
  }

  function closePlayer() {
    playerModal.classList.remove("active");
    document.body.style.overflow = "";
    
    // Stop all media playback
    html5VideoPlayer.pause();
    html5VideoPlayer.removeAttribute('src');
    html5VideoPlayer.load();
    
    iframeVideoPlayer.src = "";
  }

  // --- Custom Player Controls System ---

  // Play/Pause Action
  function togglePlayPause() {
    if (html5VideoPlayer.paused) {
      html5VideoPlayer.play();
      updatePlayPauseUI(true);
    } else {
      html5VideoPlayer.pause();
      updatePlayPauseUI(false);
    }
  }

  function updatePlayPauseUI(isPlaying) {
    if (isPlaying) {
      playIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>`; // Pause icon
    } else {
      playIcon.innerHTML = `<path d="M8 5v14l11-7z"></path>`; // Play icon
    }
  }

  // Skip time (seconds)
  function skipTime(amount) {
    html5VideoPlayer.currentTime += amount;
  }

  // Format time (seconds -> hh:mm:ss / mm:ss)
  function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    let result = "";
    if (hrs > 0) {
      result += (hrs < 10 ? "0" : "") + hrs + ":";
    }
    result += (mins < 10 ? "0" : "") + mins + ":";
    result += (secs < 10 ? "0" : "") + secs;
    return result;
  }

  // Update progress bar as video plays
  html5VideoPlayer.addEventListener("timeupdate", () => {
    const curTime = html5VideoPlayer.currentTime;
    const durTime = html5VideoPlayer.duration;
    
    if (durTime > 0) {
      const percentage = (curTime / durTime) * 100;
      progressFilled.style.width = `${percentage}%`;
    }
    
    currentTimeLabel.textContent = formatTime(curTime);
  });

  // Set total duration once metadata is loaded
  html5VideoPlayer.addEventListener("loadedmetadata", () => {
    totalDurationLabel.textContent = formatTime(html5VideoPlayer.duration);
  });

  // Seeking on Progress Bar Click
  const progressBarContainer = document.getElementById("progressBarContainer");
  if (progressBarContainer) {
    progressBarContainer.addEventListener("click", (e) => {
      const rect = progressBarContainer.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      html5VideoPlayer.currentTime = pos * html5VideoPlayer.duration;
    });
  }

  // Volume Slider Logic
  function updateVolumeBarUI() {
    if (!html5VideoPlayer) return;
    const vol = html5VideoPlayer.volume;
    const volumeFilled = document.getElementById("volumeFilled");
    if (volumeFilled) volumeFilled.style.width = `${vol * 100}%`;
  }

  const muteBtn = document.getElementById("muteBtn");
  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      html5VideoPlayer.muted = !html5VideoPlayer.muted;
      updateVolumeBarUI();
    });
  }

  const volumeSlider = document.getElementById("volumeSlider");
  if (volumeSlider) {
    volumeSlider.addEventListener("click", (e) => {
      const rect = volumeSlider.getBoundingClientRect();
      let vol = (e.clientX - rect.left) / rect.width;
      vol = Math.max(0, Math.min(1, vol));
      html5VideoPlayer.volume = vol;
      html5VideoPlayer.muted = false;
      updateVolumeBarUI();
    });
  }

  // Fullscreen Action
  const fullscreenBtn = document.getElementById("fullscreenBtn");
  const videoScreenWrapper = document.getElementById("videoScreenWrapper");
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", () => {
      const targetWrap = videoScreenWrapper || html5VideoPlayer;
      if (!document.fullscreenElement) {
        if (targetWrap.requestFullscreen) targetWrap.requestFullscreen();
        else if (targetWrap.webkitRequestFullscreen) targetWrap.webkitRequestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    });
  }

  // Listeners for HTML5 Video playback triggers
  const playPauseBtn = document.getElementById("playPauseBtn");
  if (playPauseBtn) playPauseBtn.addEventListener("click", togglePlayPause);
  if (html5VideoPlayer) {
    html5VideoPlayer.addEventListener("click", togglePlayPause);
    html5VideoPlayer.addEventListener("ended", () => {
      updatePlayPauseUI(false);
    });
  }

  // --- Toast System ---
  function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast`;
    
    const icon = type === "success" 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="toast-success-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--color-primary)"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;

    toast.innerHTML = `${icon}<span>${message}</span>`;
    toastContainer.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add("show"), 50);
    
    // Dismiss toast
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // --- Event Listeners Setup ---
  function setupEventListeners() {
    // Nav Home Click
    navHome.addEventListener("click", (e) => {
      e.preventDefault();
      showHomeView();
    });

    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      showHomeView();
    });

    // Nav Watchlist Click
    navWatchlist.addEventListener("click", (e) => {
      e.preventDefault();
      displayWatchlistView();
    });

    // Close Modals
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeDetailsModal);
    if (detailsModal) {
      detailsModal.addEventListener("click", (e) => {
        if (e.target === detailsModal) closeDetailsModal();
      });
    }

    // Player Server Buttons & Selectors (UI as requested)
    if (serverMainOldBtn) {
      serverMainOldBtn.addEventListener("click", () => {
        serverMainOldBtn.classList.add("active");
        serverMainNewBtn.classList.remove("active");
        serverBackupBtn.classList.remove("active");
        showToast("สลับไปใช้ ตัวเล่นหลัก (เก่า) เรียบร้อยแล้ว", "success");
      });
    }

    if (serverMainNewBtn) {
      serverMainNewBtn.addEventListener("click", () => {
        serverMainNewBtn.classList.add("active");
        serverMainOldBtn.classList.remove("active");
        serverBackupBtn.classList.remove("active");
        showToast("สลับไปใช้ ตัวเล่นหลัก (ใหม่) เรียบร้อยแล้ว", "success");
      });
    }

    if (serverBackupBtn) {
      serverBackupBtn.addEventListener("click", () => {
        serverBackupBtn.classList.add("active");
        serverMainOldBtn.classList.remove("active");
        serverMainNewBtn.classList.remove("active");
        showToast("สลับไปใช้ ตัวเล่นสำรอง เรียบร้อยแล้ว", "success");
      });
    }

    if (audioSelectBtn) {
      audioSelectBtn.addEventListener("change", (e) => {
        const lang = e.target.value.toLowerCase().includes("thai") ? "Thai" : "Sound Track";
        const epVal = episodeSelectBtn ? episodeSelectBtn.value : "1";
        if (currentActiveMovie && currentActiveMovie.postId) {
          loadEpisode(currentActiveMovie.postId, epVal, lang, currentActiveMovie.titleEn || "");
        } else {
          showToast(`เปลี่ยนระบบเสียง: ${e.target.options[e.target.selectedIndex].text}`, "success");
        }
      });
    }

    if (episodeSelectBtn) {
      episodeSelectBtn.addEventListener("change", (e) => {
        const epNum = e.target.value;
        const lang = audioSelectBtn && audioSelectBtn.value.toLowerCase().includes("thai") ? "Thai" : "Sound Track";
        if (currentActiveMovie) {
          loadEpisode(currentActiveMovie.postId || "", epNum, lang, currentActiveMovie.titleEn || "");
        }
      });
    }

    if (playerCloseBtn) playerCloseBtn.addEventListener("click", closePlayer);
    if (playerModal) {
      playerModal.addEventListener("click", (e) => {
        if (e.target === playerModal) closePlayer();
      });
    }

    // --- Fail-safe Visitor Count Tracker ---
    function initVisitorCounter() {
      const visitorCountDisplay = document.getElementById("visitorCountDisplay");
      if (!visitorCountDisplay) return;

      let count = localStorage.getItem("moviestream_visitor_count");
      if (!count) {
        count = Math.floor(Math.random() * 80) + 168; // Base realistic starting visitors
      } else {
        count = parseInt(count, 10) + 1;
      }
      localStorage.setItem("moviestream_visitor_count", count);
      visitorCountDisplay.textContent = Number(count).toLocaleString();
    }

    // Initialize Visitor Counter
    initVisitorCounter();

    // Key Escape to close active modals
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeDetailsModal();
        closePlayer();
      }
    });

    // Genre Filters Buttons (Support Click and Touch)
    function handleGenreClick(e) {
      const btn = e.target.closest(".genre-tag");
      if (!btn) return;
      
      // Update active tag class
      document.querySelectorAll(".genre-tag").forEach(tag => tag.classList.remove("active"));
      btn.classList.add("active");
      
      const genre = btn.getAttribute("data-genre");
      if (genre === "all") {
        showHomeView();
      } else if (genre === "today") {
        const todayMovies = movies.slice(0, 16);
        showGridView("🔥 ภาพยนตร์ & ซีรีส์อัปเดตวันนี้ (จาก 24-HDX, GOSERIES4K)", todayMovies);
      } else if (genre === "this-week") {
        const thisWeekMovies = movies.slice(0, 36);
        showGridView("⭐ ภาพยนตร์ & ซีรีส์อัปเดตสัปดาห์นี้ (จาก 24-HDX, GOSERIES4K)", thisWeekMovies);
      } else if (genre === "year-2026") {
        const y2026Movies = movies.filter(m => String(m.year) === "2026" || m.titleTh.includes("2026"));
        showGridView(`📅 รวมภาพยนตร์ & ซีรีส์ใหม่ปี 2026 (${y2026Movies.length} เรื่อง)`, y2026Movies);
      } else if (genre === "year-2025") {
        const y2025Movies = movies.filter(m => String(m.year) === "2025" || m.titleTh.includes("2025"));
        showGridView(`📅 รวมภาพยนตร์ & ซีรีส์ปี 2025 (${y2025Movies.length} เรื่อง)`, y2025Movies);
      } else if (genre === "year-2024") {
        const y2024Movies = movies.filter(m => String(m.year) === "2024" || m.titleTh.includes("2024"));
        showGridView(`📅 รวมภาพยนตร์ & ซีรีส์ปี 2024 (${y2024Movies.length} เรื่อง)`, y2024Movies);
      } else if (genre === "24HDX" || genre === "GOSERIES4K") {
        const sourceMovies = movies.filter(m => m.source === genre);
        showGridView(`📌 รวมภาพยนตร์ & ซีรีส์จาก ${genre} (${sourceMovies.length} เรื่อง)`, sourceMovies);
      } else {
        const filtered = movies.filter(m => m.genres && m.genres.includes(genre));
        showGridView(`หมวดหมู่ภาพยนตร์: ${genre}`, filtered);
      }
    }

    if (genreFilterContainer) {
      genreFilterContainer.addEventListener("click", handleGenreClick);
    }

    // Live Search input filter
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      if (query === "") {
        showHomeView();
      } else {
        const results = movies.filter(
          m => m.titleTh.toLowerCase().includes(query) || 
               m.titleEn.toLowerCase().includes(query) ||
               m.genres.some(g => g.toLowerCase().includes(query))
        );
        showGridView(`ผลการค้นหาสำหรับ: "${query}"`, results);
      }
    });

    // Footer Genre Links
    document.querySelectorAll(".footer-filter-link").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const genre = link.getAttribute("data-genre");
        
        // Update Filter tags state
        document.querySelectorAll(".genre-tag").forEach(tag => {
          if (tag.getAttribute("data-genre") === genre) {
            tag.classList.add("active");
          } else {
            tag.classList.remove("active");
          }
        });

        const filtered = movies.filter(m => m.genres && m.genres.includes(genre));
        showGridView(`หมวดหมู่ภาพยนตร์: ${genre}`, filtered);
      });
    });

    // Privacy & DMCA & Contact Modals/Alerts
    const privacyBtn = document.getElementById("privacyPolicyBtn");
    if (privacyBtn) {
      privacyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("นโยบายความเป็นส่วนตัว: เว็บไซต์ไม่มีการเก็บข้อมูลส่วนบุคคลของผู้ใช้", "info");
      });
    }
    const dmcaBtn = document.getElementById("dmcaBtn");
    if (dmcaBtn) {
      dmcaBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("DMCA: เว็บไซต์นี้เป็นเพียงสื่อกลางในการรวบรวมลิงก์จากอินเทอร์เน็ต", "info");
      });
    }
    const contactBtn = document.getElementById("contactBtn");
    if (contactBtn) {
      contactBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("ติดต่อผู้ดูแลระบบ: ผ่านช่องทางระบบ Cloudflare Stream", "info");
      });
    }
  }
});
