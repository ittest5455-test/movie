// ----------------------------------------------------
// MovieStream JavaScript Application Logic
// ----------------------------------------------------

function initMovieStreamApp() {
  // --- DOM Selectors ---
  const headerNav = document.getElementById("headerNav");
  const logoLink = document.getElementById("logoLink");
  const navHome = document.getElementById("navHome");
  const navWatchlist = document.getElementById("navWatchlist");
  const watchlistCount = document.getElementById("watchlistCount");
  const searchInput = document.getElementById("searchInput");
  
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
  const playingMovieTitle = document.getElementById("playingMovieTitle");
  const html5VideoPlayer = document.getElementById("html5VideoPlayer");
  const iframeVideoPlayer = document.getElementById("iframeVideoPlayer");
  const customPlayerControls = document.getElementById("customPlayerControls");
  
  // Player Bottom Bar Selectors
  const audioSelectBtn = document.getElementById("audioSelectBtn");
  const episodeSelectBtn = document.getElementById("episodeSelectBtn");

  // Custom Controls Selectors
  const playPauseBtn = document.getElementById("playPauseBtn");
  const playIcon = document.getElementById("playIcon");
  const currentTimeLabel = document.getElementById("currentTime");
  const totalDurationLabel = document.getElementById("totalDuration");
  const progressBarContainer = document.getElementById("progressBarContainer");
  const progressBarFilled = document.getElementById("progressBarFilled");
  const muteBtn = document.getElementById("muteBtn");
  const volumeSlider = document.getElementById("volumeSlider");
  const volumeFilled = document.getElementById("volumeFilled");
  const fullscreenBtn = document.getElementById("fullscreenBtn");
  const videoScreenWrapper = document.getElementById("videoScreenWrapper");

  const toastContainer = document.getElementById("toastContainer");

  // --- State Variables ---
  const movieList = window.movies || (typeof movies !== "undefined" ? movies : []);
  let watchlist = [];
  try {
    const stored = localStorage.getItem("moviestream_watchlist");
    if (stored) watchlist = JSON.parse(stored);
    if (!Array.isArray(watchlist)) watchlist = [];
  } catch (e) {
    console.warn("Watchlist parse error:", e);
    watchlist = [];
  }
  let currentActiveMovie = null;

  try {
    initVisitorCounter();
    showHomeView();
    updateWatchlistUI();
    setupEventListeners();
  } catch (err) {
    console.error("Initialization error:", err);
  }

  // --- Functions ---

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

  // Scroll Header Effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      headerNav.classList.add("scrolled");
    } else {
      headerNav.classList.remove("scrolled");
    }
  });



  

  // Create single movie card structure
  function createMovieCardMarkup(movie) {
    const isSaved = watchlist.includes(movie.id);
    const placeholderSvg = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22300%22%20height%3D%22450%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20450%22%3E%3Crect%20fill%3D%22%231e293b%22%20width%3D%22300%22%20height%3D%22450%22%2F%3E%3Ctext%20fill%3D%22%2394a3b8%22%20font-family%3D%22sans-serif%22%20font-size%3D%2218%22%20dy%3D%2210.5%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%3EMovieStream%20HD%3C%2Ftext%3E%3C%2Fsvg%3E";
    return `
      <div class="movie-card" data-id="${movie.id}" tabindex="0" role="button" aria-label="${movie.titleTh}">
        <div class="movie-poster-wrapper">
          <img src="${movie.poster}" alt="เนเธเธชเน€เธ•เธญเธฃเนเน€เธฃเธทเนเธญเธ ${movie.titleTh}" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${placeholderSvg}'">
          <span class="movie-rating-badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
            ${movie.rating}
          </span>
          <span class="movie-year-badge">${movie.year}</span>
          
          <button class="movie-fav-btn" style="position: absolute; top: 10px; right: 10px; z-index: 10; background: rgba(0,0,0,0.7); border: 1px solid rgba(255,255,255,0.1); border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: ${isSaved ? '#22c55e' : '#ffffff'}; transition: 0.3s;" aria-label="Toggle Favorite">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>

          <div class="movie-card-overlay">
            <button class="movie-play-btn" aria-label="เน€เธฅเนเธเธซเธเธฑเธ ${movie.titleTh}">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
            </button>
            <div class="movie-card-info-top">
              <div class="movie-card-genres">${movie.genres.join(" / ")}</div>
              <h3 class="movie-card-title">${movie.titleTh}</h3>
              <div class="movie-card-title-en">${movie.titleEn}</div>
            </div>
            <div class="movie-card-details">
              <span>${movie.duration}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // --- View Swappers ---

  function showHomeView() {
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

    const sortedAll = [...movieList].sort((a, b) => {
      const yearA = parseInt(a.year) || 0;
      const yearB = parseInt(b.year) || 0;
      return yearB - yearA;
    });
    showGridView("๐ฌ เธ เธฒเธเธขเธเธ•เธฃเนเธ—เธฑเนเธเธซเธกเธ” (เน€เธฃเธตเธขเธเธ•เธฒเธกเธเธตเธฅเนเธฒเธชเธธเธ”)", sortedAll);
  }

  function showGridView(title, filteredMovies) {
    gridView.style.display = "block";
    gridTitle.textContent = title;
    
    gridMoviesList.innerHTML = "";
    
    if (filteredMovies.length === 0) {
      gridMoviesList.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>
          <h3>เนเธกเนเธเธเธ เธฒเธเธขเธเธ•เธฃเน</h3>
          <p>เธฅเธญเธเธเธฃเธฑเธเธเนเธเธซเธฒเนเธซเธกเน เธซเธฃเธทเธญเธเธฅเธฑเธเนเธเธ—เธตเนเธซเธเนเธฒเธซเธฅเธฑเธ</p>
        </div>
      `;
      return;
    }
    
    gridMoviesList.innerHTML = filteredMovies.map(movie => createMovieCardMarkup(movie)).join("");
    
    // Add Click Listeners for grid movies to play directly
    gridMoviesList.querySelectorAll(".movie-card").forEach(card => {
      card.addEventListener("click", (e) => {
        // If they clicked the fav button, handle it separately
        if (e.target.closest(".movie-fav-btn")) {
          e.stopPropagation();
          const movieId = card.getAttribute("data-id");
          toggleWatchlist(movieId);
          return;
        }
        
        const movieId = card.getAttribute("data-id");
        const found = movieList.find(m => m.id === movieId);
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
    const movie = movieList.find(m => m.id === movieId);
    if (!movie) return;

    const index = watchlist.indexOf(movieId);
    if (index === -1) {
      watchlist.push(movieId);
      showToast(`เน€เธเธดเนเธก "${movie.titleTh}" เนเธเธขเธฑเธเธฃเธฒเธขเธเธฒเธฃเนเธเธฃเธ”เนเธฅเนเธง`, "success");
    } else {
      watchlist.splice(index, 1);
      showToast(`เธฅเธ "${movie.titleTh}" เธญเธญเธเธเธฒเธเธฃเธฒเธขเธเธฒเธฃเนเธเธฃเธ”เนเธฅเนเธง`, "info");
    }
    
    updateWatchlistUI();

    // Update SVG in Grid View if present
    const cardSvg = document.querySelector(`.movie-card[data-id="${movieId}"] .movie-fav-btn svg`);
    if (cardSvg) {
      const isNowSaved = watchlist.includes(movieId);
      cardSvg.setAttribute("fill", isNowSaved ? "currentColor" : "none");
      cardSvg.parentElement.style.color = isNowSaved ? "#22c55e" : "#ffffff";
    }

    // If currently on watchlist page, refresh grid view
    if (navWatchlist.classList.contains("active")) {
      displayWatchlistView();
    }

    // Auto-sync Watchlist to Google Sheet if logged in
    const savedUser = localStorage.getItem("moviestream_user");
    if (savedUser && GOOGLE_SCRIPT_URL) {
      try {
        const user = JSON.parse(savedUser);
        fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            action: "sync_watchlist",
            phone: user.phone,
            watchlist: JSON.stringify(watchlist)
          })
        }).catch(() => {});
      } catch (e) {}
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
    const favs = movieList.filter(m => watchlist.includes(m.id));
    showGridView("เธฃเธฒเธขเธเธฒเธฃเนเธเธฃเธ”เธเธญเธเธเธฑเธ", favs);
  }

  // --- Details Modal Actions ---

  function openDetailsModal(movie) {
    currentActiveMovie = movie;
    
    if (modalHeroBanner) modalHeroBanner.style.backgroundImage = `url('${movie.backdrop || movie.poster}')`;
    if (modalPoster) {
      modalPoster.src = movie.poster;
      modalPoster.alt = `เธเธเธซเธเธฑเธ ${movie.titleTh}`;
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
    
    updateModalWatchlistBtnState(movie.id);
    
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
          showToast("เนเธกเนเธเธเธ•เธฑเธงเธญเธขเนเธฒเธเธ เธฒเธเธขเธเธ•เธฃเนเน€เธฃเธทเนเธญเธเธเธตเน", "info");
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
    // เธ•เธฃเธงเธเธชเธญเธเธชเธดเธ—เธเธดเนเธชเธกเธฒเธเธดเธเธเนเธญเธเน€เธเธดเธ”เน€เธฅเนเธเธซเธเธฑเธ
    const savedUser = localStorage.getItem("moviestream_user");
    if (!savedUser) {
      showToast("๐”’ เธเธฃเธธเธ“เธฒเน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธเธชเธกเธฒเธเธดเธเธเนเธญเธเธฃเธฑเธเธเธกเธ เธฒเธเธขเธเธ•เธฃเน", "info");
      openAuthModal();
      return;
    }

    if (playingMovieTitle) {
      playingMovieTitle.textContent = movie.titleTh;
    }
    
    playerModal.classList.add("active");
    document.body.style.overflow = "hidden";
    currentActiveMovie = movie;

    // Populate Episodes Select Box dynamically
    if (episodeSelectBtn && movie.episodes && movie.episodes.length > 0) {
      episodeSelectBtn.innerHTML = movie.episodes.map((ep, idx) => 
        `<option value="${idx + 1}">${ep}</option>`
      ).join("");
    } else if (episodeSelectBtn) {
      episodeSelectBtn.innerHTML = `<option value="1">เธ•เธญเธเธ—เธตเน 1 (เธเธเนเธเธ•เธญเธ)</option>`;
    }

    // Populate Languages Select Box dynamically
    if (audioSelectBtn && movie.languages && movie.languages.length > 0) {
      audioSelectBtn.innerHTML = movie.languages.map(lang => 
        `<option value="${lang}">${lang}</option>`
      ).join("");
    } else if (audioSelectBtn) {
      audioSelectBtn.innerHTML = `<option value="Thai">Thai (เธเธฒเธเธขเนเนเธ—เธข)</option>`;
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
        
      showToast(`เธเธณเธฅเธฑเธเนเธซเธฅเธ”เน€เธฅเนเธเธงเธดเธ”เธตเนเธญเนเธเธ Direct: ${movie.titleTh}`, "success");
    } 
    // 2. Embedded IFrame Video Player
    else if (movie.sourceType === "embed") {
      html5VideoPlayer.style.display = "none";
      html5VideoPlayer.pause();
      html5VideoPlayer.src = "";
      customPlayerControls.style.display = "none";
      iframeVideoPlayer.style.display = "block";
      
      // Safe player setup: Never apply sandbox on iPhone/iOS/Mobile to prevent 403 stream token block
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const isGOSeries = (typeof movie !== "undefined" && movie && movie.source === "GOSERIES4K") || (typeof currentActiveMovie !== "undefined" && currentActiveMovie && currentActiveMovie.source === "GOSERIES4K");
      
      if (!isMobileDevice && isGOSeries) {
        iframeVideoPlayer.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-presentation allow-downloads");
      } else {
        iframeVideoPlayer.removeAttribute("sandbox");
      }
      
      iframeVideoPlayer.setAttribute("referrerpolicy", "no-referrer");
      iframeVideoPlayer.setAttribute("allow", "autoplay *; fullscreen *; picture-in-picture *; encrypted-media *; media-src *; webkit-playsinline; playsinline; accelerometer; gyroscope");
      iframeVideoPlayer.setAttribute("playsinline", "true");
      iframeVideoPlayer.setAttribute("webkit-playsinline", "true");
      iframeVideoPlayer.setAttribute("x5-playsinline", "true");
      iframeVideoPlayer.src = movie.videoUrl;
      
      showToast(`เธเธณเธฅเธฑเธเน€เธเธดเธ”เน€เธเธฃเธทเนเธญเธเน€เธฅเนเธเธงเธดเธ”เธตเนเธญ: ${movie.titleTh}`, "success");
    }
  }

  // Load specific episode directly from pre-built episodeUrls pool
  function loadEpisode(postId, episode, lang, title) {
    showToast(`เธเธณเธฅเธฑเธเนเธซเธฅเธ” เธ•เธญเธเธ—เธตเน ${episode}...`, "success");
    
    if (currentActiveMovie && currentActiveMovie.episodeUrls && currentActiveMovie.episodeUrls[episode]) {
      const epVideoUrl = currentActiveMovie.episodeUrls[episode];
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const isGOSeries = (typeof currentActiveMovie !== "undefined" && currentActiveMovie && currentActiveMovie.source === "GOSERIES4K");
      
      html5VideoPlayer.style.display = "none";
      html5VideoPlayer.pause();
      customPlayerControls.style.display = "none";
      iframeVideoPlayer.style.display = "block";
      
      if (!isMobileDevice && isGOSeries) {
        iframeVideoPlayer.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-presentation allow-downloads");
      } else {
        iframeVideoPlayer.removeAttribute("sandbox");
      }
      
      iframeVideoPlayer.setAttribute("referrerpolicy", "no-referrer");
      iframeVideoPlayer.setAttribute("allow", "autoplay *; fullscreen *; picture-in-picture *; encrypted-media *; media-src *; webkit-playsinline; playsinline");
      iframeVideoPlayer.setAttribute("playsinline", "true");
      iframeVideoPlayer.setAttribute("webkit-playsinline", "true");
      iframeVideoPlayer.setAttribute("x5-playsinline", "true");
      iframeVideoPlayer.src = epVideoUrl;
      showToast(`เน€เธเธดเธ”เน€เธฅเนเธ เธ•เธญเธเธ—เธตเน ${episode} เน€เธฃเธตเธขเธเธฃเนเธญเธข`, "success");
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
        showToast(`เน€เธเธดเธ”เน€เธฅเนเธ เธ•เธญเธเธ—เธตเน ${episode} เน€เธฃเธตเธขเธเธฃเนเธญเธข`, "success");
      } else {
        showToast(`เธชเธฅเธฑเธเน€เธเธดเธ”เน€เธฅเนเธ เธ•เธญเธเธ—เธตเน ${episode}`, "success");
      }
    })
    .catch(() => {
      showToast(`เธชเธฅเธฑเธเน€เธเธดเธ”เน€เธฅเนเธ เธ•เธญเธเธ—เธตเน ${episode}`, "success");
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
  if (html5VideoPlayer) {
    html5VideoPlayer.addEventListener("timeupdate", () => {
      const curTime = html5VideoPlayer.currentTime;
      const durTime = html5VideoPlayer.duration;
      
      if (durTime > 0 && progressBarFilled) {
        const percentage = (curTime / durTime) * 100;
        progressBarFilled.style.width = `${percentage}%`;
      }
      
      if (currentTimeLabel) currentTimeLabel.textContent = formatTime(curTime);
    });

    html5VideoPlayer.addEventListener("loadedmetadata", () => {
      if (totalDurationLabel) totalDurationLabel.textContent = formatTime(html5VideoPlayer.duration);
    });
  }

  // Seeking on Progress Bar Click
  if (progressBarContainer) {
    progressBarContainer.addEventListener("click", (e) => {
      const rect = progressBarContainer.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      html5VideoPlayer.currentTime = pos * html5VideoPlayer.duration;
    });
  }

  // Fullscreen Action
  function toggleFullscreen() {
    const targetWrap = videoScreenWrapper || html5VideoPlayer;
    if (!document.fullscreenElement) {
      if (targetWrap.requestFullscreen) targetWrap.requestFullscreen();
      else if (targetWrap.webkitRequestFullscreen) targetWrap.webkitRequestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", toggleFullscreen);
  }
  const tvFullscreenBtn = document.getElementById("tvFullscreenBtn");
  if (tvFullscreenBtn) {
    tvFullscreenBtn.addEventListener("click", toggleFullscreen);
  }

  // Volume Slider Logic
  function updateVolumeBarUI() {
    if (!html5VideoPlayer) return;
    const vol = html5VideoPlayer.volume;
    if (volumeFilled) volumeFilled.style.width = `${vol * 100}%`;
  }

  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      html5VideoPlayer.muted = !html5VideoPlayer.muted;
      updateVolumeBarUI();
    });
  }

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

  // Listeners for HTML5 Video playback triggers
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
    if (navHome) {
      navHome.addEventListener("click", (e) => {
        e.preventDefault();
        showHomeView();
      });
    }

    if (logoLink) {
      logoLink.addEventListener("click", (e) => {
        e.preventDefault();
        showHomeView();
      });
    }

    // Nav Watchlist Click
    if (navWatchlist) {
      navWatchlist.addEventListener("click", (e) => {
        e.preventDefault();
        displayWatchlistView();
      });
    }

    // --- Member Auth Modal Controller ---
    const authModal = document.getElementById("authModal");
    const navAuthBtn = document.getElementById("navAuthBtn");
    const headerAuthBtn = document.getElementById("headerAuthBtn");
    const authModalCloseBtn = document.getElementById("authModalCloseBtn");
    const authForm = document.getElementById("authForm");
    const authPhone = document.getElementById("authPhone");
    const authPassword = document.getElementById("authPassword");
    const authSubmitBtn = document.getElementById("authSubmitBtn");
    const authModalTitle = document.getElementById("authModalTitle");
    const authModalDesc = document.getElementById("authModalDesc");
    const authToggleText = document.getElementById("authToggleText");
    const authToggleBtn = document.getElementById("authToggleBtn");
    const authProfileView = document.getElementById("authProfileView");
    const profileStatus = document.getElementById("profileStatus");
    const profilePhone = document.getElementById("profilePhone");
    const authLogoutBtn = document.getElementById("authLogoutBtn");

    let isRegisterMode = false;
    // URL Google Apps Script Web App (เน€เธเธทเนเธญเธกเธ•เนเธญ Google Sheet เน€เธฃเธตเธขเธเธฃเนเธญเธข)
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyKnLnnu7iJ3uPSV3tdpLO5HL6pZMGy5qzHSLu8Y4RoQq5MIYj1QVFXgZ3miynuNjPX/exec"; 

    function updateAuthUI() {
      const savedUser = localStorage.getItem("moviestream_user");
      if (savedUser) {
        try {
          const user = JSON.parse(savedUser);
          if (navAuthBtn) navAuthBtn.innerHTML = `๐‘‘ ${user.phone.substring(0, 3)}*** (${user.status || 'VIP'})`;
          if (headerAuthBtn) headerAuthBtn.innerHTML = `๐‘‘ VIP`;
        } catch (e) {}
      } else {
        if (navAuthBtn) navAuthBtn.innerHTML = `๐‘ค เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธ / เธชเธกเธฒเธเธดเธ`;
        if (headerAuthBtn) headerAuthBtn.innerHTML = `๐‘ค เธชเธกเธฒเธเธดเธ`;
      }
    }
    updateAuthUI();

    function openAuthModal() {
      const savedUser = localStorage.getItem("moviestream_user");
      if (savedUser) {
        const user = JSON.parse(savedUser);
        if (authForm) authForm.style.display = "none";
        if (authProfileView) authProfileView.style.display = "block";
        if (profilePhone) profilePhone.textContent = `เน€เธเธญเธฃเน: ${user.phone}`;
        if (profileStatus) profileStatus.textContent = `${user.status || 'VIP Member'} ๐‘‘`;
        if (authModalTitle) authModalTitle.textContent = "เธเนเธญเธกเธนเธฅเธชเธกเธฒเธเธดเธเธเธญเธเธเธธเธ“";
        if (authModalDesc) authModalDesc.textContent = "เธเธฑเธเธเธตเน€เธเธทเนเธญเธกเธ•เนเธญเน€เธฃเธตเธขเธเธฃเนเธญเธขเนเธฅเนเธง";
      } else {
        if (authForm) authForm.style.display = "block";
        if (authProfileView) authProfileView.style.display = "none";
        setAuthMode(false);
      }
      if (authModal) authModal.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeAuthModal() {
      if (authModal) authModal.classList.remove("active");
      document.body.style.overflow = "";
    }

    function setAuthMode(register) {
      isRegisterMode = register;
      if (register) {
        if (authModalTitle) authModalTitle.textContent = "เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธเนเธซเธกเน (เธเธฃเธต)";
        if (authModalDesc) authModalDesc.textContent = "เธชเธกเธฑเธเธฃเน€เธเธตเธขเธเธเธฃเธฑเนเธเน€เธ”เธตเธขเธง เธเธฑเธเธ—เธถเธเธฃเธฒเธขเธเธฒเธฃเนเธเธฃเธ”เนเธ”เนเธ•เธฅเธญเธ”เนเธ";
        if (authSubmitBtn) authSubmitBtn.textContent = "เธขเธทเธเธขเธฑเธเธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธ ๐€";
        if (authToggleText) authToggleText.textContent = "เธกเธตเธเธฑเธเธเธตเธญเธขเธนเนเนเธฅเนเธง?";
        if (authToggleBtn) authToggleBtn.textContent = "เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธเธ—เธตเนเธเธตเน";
      } else {
        if (authModalTitle) authModalTitle.textContent = "เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธเธชเธกเธฒเธเธดเธ";
        if (authModalDesc) authModalDesc.textContent = "เธเธฑเธเธ—เธถเธเธฃเธฒเธขเธเธฒเธฃเนเธเธฃเธ”เนเธฅเธฐเธเธฃเธฐเธงเธฑเธ•เธดเธเธฒเธฃเธ”เธนเธเนเธฒเธกเธญเธธเธเธเธฃเธ“เน";
        if (authSubmitBtn) authSubmitBtn.textContent = "เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธ ๐ฌ";
        if (authToggleText) authToggleText.textContent = "เธขเธฑเธเนเธกเนเธกเธตเธเธฑเธเธเธตเธชเธกเธฒเธเธดเธ?";
        if (authToggleBtn) authToggleBtn.textContent = "เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธเธเธฃเธต";
      }
    }

    if (navAuthBtn) navAuthBtn.addEventListener("click", (e) => { e.preventDefault(); openAuthModal(); });
    if (headerAuthBtn) headerAuthBtn.addEventListener("click", (e) => { e.preventDefault(); openAuthModal(); });
    if (authModalCloseBtn) authModalCloseBtn.addEventListener("click", closeAuthModal);
    if (authModal) {
      authModal.addEventListener("click", (e) => {
        if (e.target === authModal) closeAuthModal();
      });
    }

    if (authToggleBtn) {
      authToggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        setAuthMode(!isRegisterMode);
      });
    }

    if (authSubmitBtn) {
      authSubmitBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const phone = authPhone ? authPhone.value.trim() : "";
        const password = authPassword ? authPassword.value.trim() : "";

        if (!phone || phone.length < 9) {
          showToast("เธเธฃเธธเธ“เธฒเธเธฃเธญเธเน€เธเธญเธฃเนเนเธ—เธฃเธจเธฑเธเธ—เนเนเธซเนเธ–เธนเธเธ•เนเธญเธ", "info");
          return;
        }
        if (!password || password.length < 4) {
          showToast("เธฃเธซเธฑเธชเธเนเธฒเธเธ•เนเธญเธเธกเธตเธญเธขเนเธฒเธเธเนเธญเธข 4 เธซเธฅเธฑเธ", "info");
          return;
        }

        authSubmitBtn.disabled = true;
        authSubmitBtn.textContent = "เธเธณเธฅเธฑเธเธ”เธณเน€เธเธดเธเธเธฒเธฃ...";

        // เธ–เนเธฒเธกเธต Google Script URL เนเธซเนเธขเธดเธ API
        if (GOOGLE_SCRIPT_URL) {
          // เธ–เนเธฒเน€เธเนเธเนเธซเธกเธ” "เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธ" เนเธซเนเธ•เธญเธเธชเธเธญเธเธซเธเนเธฒเน€เธงเนเธเธ—เธฑเธเธ—เธต 0.1 เธงเธด (Instant Feedback) เนเธฅเนเธงเธชเนเธเธเนเธญเธกเธนเธฅเน€เธเธทเนเธญเธเธซเธฅเธฑเธ
          if (isRegisterMode) {
            showToast("เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธเธชเธณเน€เธฃเนเธ! เธเธฃเธธเธ“เธฒเธฃเธญเนเธญเธ”เธกเธดเธเธญเธเธธเธกเธฑเธ•เธด โณ", "info");
            closeAuthModal();
            authSubmitBtn.disabled = false;
            authSubmitBtn.textContent = "เธขเธทเธเธขเธฑเธเธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธ ๐€";
            
            // เธชเนเธเธเนเธญเธกเธนเธฅเธเธถเนเธ Google Sheet เน€เธเธทเนเธญเธเธซเธฅเธฑเธเนเธเธ Asynchronous
            fetch(GOOGLE_SCRIPT_URL, {
              method: "POST",
              headers: { "Content-Type": "text/plain;charset=utf-8" },
              body: JSON.stringify({
                action: "register",
                phone: phone,
                password: password,
                watchlist: JSON.stringify(watchlist)
              })
            }).catch(e => console.warn("Background register sync:", e));
            return;
          }

          // เธ–เนเธฒเน€เธเนเธเนเธซเธกเธ” "เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธ" เนเธซเนเน€เธเนเธเธชเธดเธ—เธเธดเนเนเธเธเธเธเธ•เธด
          try {
            const res = await fetch(GOOGLE_SCRIPT_URL, {
              method: "POST",
              headers: { "Content-Type": "text/plain;charset=utf-8" },
              body: JSON.stringify({
                action: "login",
                phone: phone,
                password: password,
                watchlist: JSON.stringify(watchlist)
              })
            });
            const text = await res.text();
            let result;
            try {
              result = JSON.parse(text);
            } catch(e) {
              console.error("Response not JSON:", text);
              showToast("เธชเนเธเธเนเธญเธกเธนเธฅเธชเธณเน€เธฃเนเธ เธฃเธญเธฃเธฐเธเธเธเธฑเธเธ—เธถเธเธชเธฑเธเธเธฃเธนเน", "info");
              closeAuthModal();
              authSubmitBtn.disabled = false;
              setAuthMode(isRegisterMode);
              return;
            }

            if (result.success) {
              localStorage.setItem("moviestream_user", JSON.stringify(result.user));
              
              // เนเธซเธฅเธ”เธฃเธฒเธขเธเธฒเธฃเนเธเธฃเธ”เธเธญเธเธชเธกเธฒเธเธดเธเธเธฒเธ Google Sheet เธกเธฒเนเธเนเธเธฒเธเธ—เธฑเธเธ—เธต
              if (result.user && result.user.watchlist) {
                try {
                  const cloudFavs = typeof result.user.watchlist === "string" ? JSON.parse(result.user.watchlist) : result.user.watchlist;
                  if (Array.isArray(cloudFavs)) {
                    // เธฃเธงเธกเธฃเธฒเธขเธเธฒเธฃเนเธเธฃเธ”เน€เธ”เธดเธกเนเธเน€เธเธฃเธทเนเธญเธเธเธฑเธเธเธเธเธฅเธฒเธงเธ”เนเน€เธเนเธฒเธ”เนเธงเธขเธเธฑเธ
                    watchlist = Array.from(new Set([...watchlist, ...cloudFavs]));
                    updateWatchlistUI();
                    showHomeView();
                  }
                } catch(e) {
                  console.warn("Error parsing user cloud watchlist:", e);
                }
              }

              showToast(result.message || "เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธเธชเธณเน€เธฃเนเธ! ๐‘‘", "success");
              updateAuthUI();
              closeAuthModal();
            } else {
              if (result.isPending) {
                showToast("โณ เธเธฑเธเธเธตเธเธญเธเธเธธเธ“เธญเธขเธนเนเธฃเธฐเธซเธงเนเธฒเธเธฃเธญเนเธญเธ”เธกเธดเธเธญเธเธธเธกเธฑเธ•เธด", "info");
              } else {
                showToast(result.message || "เน€เธเธดเธ”เธเนเธญเธเธดเธ”เธเธฅเธฒเธ”", "info");
              }
            }
          } catch (err) {
            console.error("Auth fetch error:", err);
            showToast("เน€เธเธทเนเธญเธกเธ•เนเธญเธเธฒเธเธเนเธญเธกเธนเธฅเธฅเนเธกเน€เธซเธฅเธง เธ•เธฃเธงเธเธชเธญเธเธญเธดเธเน€เธ—เธญเธฃเนเน€เธเนเธ•", "info");
          }
        } else {
          // เนเธซเธกเธ”เธเธณเธฅเธญเธเนเธเน€เธเธฃเธทเนเธญเธ (Local Storage Offline Mode)
          const mockUser = {
            userId: "VIP-" + Math.floor(1000 + Math.random() * 9000),
            phone: phone,
            status: "VIP Member",
            watchlist: JSON.stringify(watchlist)
          };
          localStorage.setItem("moviestream_user", JSON.stringify(mockUser));
          showToast(isRegisterMode ? "เธชเธกเธฑเธเธฃเธชเธกเธฒเธเธดเธเนเธฅเธฐเน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธเธชเธณเน€เธฃเนเธ! (เนเธซเธกเธ”เธ—เธ”เธชเธญเธ)" : "เน€เธเนเธฒเธชเธนเนเธฃเธฐเธเธเธชเธณเน€เธฃเนเธ! ๐‘‘", "success");
          updateAuthUI();
          closeAuthModal();
        }

        authSubmitBtn.disabled = false;
        setAuthMode(isRegisterMode);
      });
    }

    if (authLogoutBtn) {
      authLogoutBtn.addEventListener("click", () => {
        localStorage.removeItem("moviestream_user");
        showToast("เธญเธญเธเธเธฒเธเธฃเธฐเธเธเน€เธฃเธตเธขเธเธฃเนเธญเธขเนเธฅเนเธง", "info");
        updateAuthUI();
        closeAuthModal();
      });
    }

    // Close Modals
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeDetailsModal);
    if (detailsModal) {
      detailsModal.addEventListener("click", (e) => {
        if (e.target === detailsModal) closeDetailsModal();
      });
    }

    // Audio & Episode Selection Listeners

    if (audioSelectBtn) {
      audioSelectBtn.addEventListener("change", (e) => {
        const lang = e.target.value.toLowerCase().includes("thai") ? "Thai" : "Sound Track";
        const epVal = episodeSelectBtn ? episodeSelectBtn.value : "1";
        if (currentActiveMovie && currentActiveMovie.postId) {
          loadEpisode(currentActiveMovie.postId, epVal, lang, currentActiveMovie.titleEn || "");
        } else {
          showToast(`เน€เธเธฅเธตเนเธขเธเธฃเธฐเธเธเน€เธชเธตเธขเธ: ${e.target.options[e.target.selectedIndex].text}`, "success");
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
        const todayMovies = movieList.slice(0, 16);
        showGridView("๐”ฅ เธ เธฒเธเธขเธเธ•เธฃเน & เธเธตเธฃเธตเธชเนเธญเธฑเธเน€เธ”เธ•เธงเธฑเธเธเธตเน", todayMovies);
      } else if (genre === "recommended-series") {
        const recMovies = movieList.filter(m => (m.genres && (m.genres.includes("เธเธตเธฃเธตเธชเนเนเธเธฐเธเธณเนเธซเธกเน 2026") || m.genres.includes("เธเธตเธฃเธตเธชเนเนเธซเธกเน 2026") || m.genres.includes("เธเธตเธฃเธตเธชเนเนเธเธฐเธเธณ"))) || m.source === "GOSERIES4K" || m.source === "SERIEDAYS");
        showGridView(`๐”ฅ เธเธตเธฃเธตเธชเนเนเธเธฐเธเธณเนเธซเธกเน 2026 (${recMovies.length} เน€เธฃเธทเนเธญเธ)`, recMovies);
      } else if (genre === "year-2026") {
        const y2026Movies = movieList.filter(m => String(m.year) === "2026" || m.titleTh.includes("2026"));
        showGridView(`๐“… เธฃเธงเธกเธ เธฒเธเธขเธเธ•เธฃเน & เธเธตเธฃเธตเธชเนเนเธซเธกเนเธเธต 2026 (${y2026Movies.length} เน€เธฃเธทเนเธญเธ)`, y2026Movies);
      } else if (genre === "year-2025") {
        const y2025Movies = movieList.filter(m => String(m.year) === "2025" || m.titleTh.includes("2025"));
        showGridView(`๐“… เธฃเธงเธกเธ เธฒเธเธขเธเธ•เธฃเน & เธเธตเธฃเธตเธชเนเธเธต 2025 (${y2025Movies.length} เน€เธฃเธทเนเธญเธ)`, y2025Movies);
      } else if (genre === "year-2024") {
        const y2024Movies = movieList.filter(m => String(m.year) === "2024" || m.titleTh.includes("2024"));
        showGridView(`๐“… เธฃเธงเธกเธ เธฒเธเธขเธเธ•เธฃเน & เธเธตเธฃเธตเธชเนเธเธต 2024 (${y2024Movies.length} เน€เธฃเธทเนเธญเธ)`, y2024Movies);
      } else if (genre === "SERIEDAYS") {
        const sdMovies = movieList.filter(m => m.source === "SERIEDAYS" || (m.genres && (m.genres.includes("เธเธตเธฃเธตเธชเนเนเธซเธกเน 2026") || m.genres.includes("เธเธฒเธเธขเนเนเธ—เธข"))));
        showGridView(`๐“ เธฃเธงเธกเธเธตเธฃเธตเธชเนเธเธฒเธเธขเนเนเธ—เธขเธขเธญเธ”เธเธดเธขเธก (${sdMovies.length} เน€เธฃเธทเนเธญเธ)`, sdMovies);
      } else if (genre === "24HDX" || genre === "GOSERIES4K") {
        const sourceMovies = movieList.filter(m => m.source === genre);
        showGridView(`๐“ เธฃเธงเธกเธ เธฒเธเธขเธเธ•เธฃเน & เธเธตเธฃเธตเธชเนเธเธฒเธ ${genre} (${sourceMovies.length} เน€เธฃเธทเนเธญเธ)`, sourceMovies);
      } else {
        const filtered = movieList.filter(m => m.genres && (m.genres.includes(genre) || m.genres.some(g => g.includes(genre))));
        showGridView(`เธซเธกเธงเธ”เธซเธกเธนเนเธ เธฒเธเธขเธเธ•เธฃเน: ${genre}`, filtered);
      }
    }

    if (genreFilterContainer) {
      genreFilterContainer.addEventListener("click", handleGenreClick);
    }

    // Live Search input filter
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        if (query === "") {
          showHomeView();
        } else {
          const results = movieList.filter(
            m => (m.titleTh && m.titleTh.toLowerCase().includes(query)) || 
                 (m.titleEn && m.titleEn.toLowerCase().includes(query)) ||
                 (m.genres && m.genres.some(g => g.toLowerCase().includes(query)))
          );
          showGridView(`เธเธฅเธเธฒเธฃเธเนเธเธซเธฒเธชเธณเธซเธฃเธฑเธ: "${query}"`, results);
        }
      });
    }

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

        const filtered = movieList.filter(m => m.genres && m.genres.includes(genre));
        showGridView(`เธซเธกเธงเธ”เธซเธกเธนเนเธ เธฒเธเธขเธเธ•เธฃเน: ${genre}`, filtered);
      });
    });

    // Privacy & DMCA & Contact Modals/Alerts
    const privacyBtn = document.getElementById("privacyPolicyBtn");
    if (privacyBtn) {
      privacyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("เธเนเธขเธเธฒเธขเธเธงเธฒเธกเน€เธเนเธเธชเนเธงเธเธ•เธฑเธง: เน€เธงเนเธเนเธเธ•เนเนเธกเนเธกเธตเธเธฒเธฃเน€เธเนเธเธเนเธญเธกเธนเธฅเธชเนเธงเธเธเธธเธเธเธฅเธเธญเธเธเธนเนเนเธเน", "info");
      });
    }
    const dmcaBtn = document.getElementById("dmcaBtn");
    if (dmcaBtn) {
      dmcaBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("DMCA: เน€เธงเนเธเนเธเธ•เนเธเธตเนเน€เธเนเธเน€เธเธตเธขเธเธชเธทเนเธญเธเธฅเธฒเธเนเธเธเธฒเธฃเธฃเธงเธเธฃเธงเธกเธฅเธดเธเธเนเธเธฒเธเธญเธดเธเน€เธ—เธญเธฃเนเน€เธเนเธ•", "info");
      });
    }
    const contactBtn = document.getElementById("contactBtn");
    if (contactBtn) {
      contactBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("เธ•เธดเธ”เธ•เนเธญเธเธนเนเธ”เธนเนเธฅเธฃเธฐเธเธ: เธเนเธฒเธเธเนเธญเธเธ—เธฒเธเธฃเธฐเธเธ Cloudflare Stream", "info");
      });
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMovieStreamApp);
} else {
  initMovieStreamApp();
}

