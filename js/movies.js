// ฐานข้อมูลภาพยนตร์รวมจาก 2 เว็บไซต์ เฉพาะตัวเล่นวิดีโอสะอาด 100% (พร้อม postId สำหรับ EP switching)
const movies = [
  {
    "titleTh": "Cold War 1994",
    "titleEn": "Cold War 1994",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Cold-War-1994-2026.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Cold-War-1994-2026.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=6aed6c9fbbc3d250cd6aeb05&b=3631",
    "sourceType": "embed",
    "description": "ดูหนัง Cold War 1994   24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40207"
  },
  {
    "titleTh": "Mor Lam Rhythm",
    "titleEn": "Mor Lam Rhythm",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/Mor-Lam-Rhythm-2026-อ้ายต้าวว-เอวหวาน-ระเบียบวาทะศิลป์.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/Mor-Lam-Rhythm-2026-อ้ายต้าวว-เอวหวาน-ระเบียบวาทะศิลป์.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=a6b9bfdd16193b5d10273948&b=5923",
    "sourceType": "embed",
    "description": "ดูหนัง Mor Lam Rhythm  อ้ายต้าวว เอวหวาน ระเบียบวาทะศิลป์  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40293"
  },
  {
    "titleTh": "Omukade",
    "titleEn": "Omukade",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Omukade-2025-โอมุคาเดะ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Omukade-2025-โอมุคาเดะ.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=0b46c8d84c7c152641028d2b&b=8804",
    "sourceType": "embed",
    "description": "ดูหนัง Omukade  โอมุคาเดะ  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39267"
  },
  {
    "titleTh": "Minions &amp; Monsters",
    "titleEn": "Minions &amp; Monsters",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Minions-Monsters-2026-มินเนี่ยน-มอนสเตอร์.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Minions-Monsters-2026-มินเนี่ยน-มอนสเตอร์.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=bcd0eebda13625b174a55abf&b=8583",
    "sourceType": "embed",
    "description": "ดูหนัง Minions &amp; Monsters  มินเนี่ยน &amp; มอนสเตอร์  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39936"
  },
  {
    "titleTh": "Beast Race",
    "titleEn": "Beast Race",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/Beast-Race-2026-เกมนรก-สัตว์เดือด.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/Beast-Race-2026-เกมนรก-สัตว์เดือด.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=d96b9036a3a5a97f0430a0c9&b=5446",
    "sourceType": "embed",
    "description": "ดูหนัง Beast Race  เกมนรก สัตว์เดือด  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40318"
  },
  {
    "titleTh": "Fate The Winx Saga Season 2 (2022) เฟต เดอะ วิงซ์ ซาก้า",
    "titleEn": "Fate The Winx Saga Season 2 (2022) เฟต เดอะ วิงซ์ ซาก้า",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2022/09/Fate-The-Winx-Saga-Season-2-2022.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2022/09/Fate-The-Winx-Saga-Season-2-2022.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=e46ba6cc065b9e2db7df8c56&b=3552",
    "sourceType": "embed",
    "description": "ดูหนัง Fate The Winx Saga Season 2 (2022) เฟต เดอะ วิงซ์ ซาก้า ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-15806"
  },
  {
    "titleTh": "Fast And Furious 6 (2013) เร็วแรงทะลุนรก 6",
    "titleEn": "Fast And Furious 6 (2013) เร็วแรงทะลุนรก 6",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2022/08/Fast-And-Furious-6-2013-เร็วแรงทะลุนรก-6.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2022/08/Fast-And-Furious-6-2013-เร็วแรงทะลุนรก-6.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=1f4b50617d8efe2938306aea&b=1976",
    "sourceType": "embed",
    "description": "ดูหนัง Fast And Furious 6 (2013) เร็วแรงทะลุนรก 6  ฟรี 24- ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-15010"
  },
  {
    "titleTh": "ดูซีรีย์ House of the Dragon Season 3",
    "titleEn": "ดูซีรีย์ House of the Dragon Season 3",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/House-of-the-Dragon-Season-3-2026-ตระกูลแห่งมังกร-ซีซั่น-3.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/House-of-the-Dragon-Season-3-2026-ตระกูลแห่งมังกร-ซีซั่น-3.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=a96cb2709f6f26649de95776&b=6688",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ House of the Dragon Season 3  ตระกูลแห่งมังกร ซีซั่น 3  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39743"
  },
  {
    "titleTh": "Evil Dead Burn",
    "titleEn": "Evil Dead Burn",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Evil-Dead-Burn-2026.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Evil-Dead-Burn-2026.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=50485dc415ac6f1203fac38b&b=2814",
    "sourceType": "embed",
    "description": "ดูหนัง Evil Dead Burn   24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40053"
  },
  {
    "titleTh": "Supergirl",
    "titleEn": "Supergirl",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/tt8814476_poster.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/tt8814476_poster.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=0bb3146b19b0b7c580d68423&b=1049",
    "sourceType": "embed",
    "description": "ดูหนัง Supergirl  ซูเปอร์เกิร์ล  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39917"
  },
  {
    "titleTh": "Toy Story 5",
    "titleEn": "Toy Story 5",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Toy-Story-5-2026-ทอย-สตอรี่-5.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Toy-Story-5-2026-ทอย-สตอรี่-5.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=9c494cc6ef772221f13ca81c&b=3454",
    "sourceType": "embed",
    "description": "ดูหนัง Toy Story 5  ทอย สตอรี่ 5  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39342"
  },
  {
    "titleTh": "The Boss Baby Christmas Bonus (2022) บอสเบบี้ คริสต์มาสโบนัส",
    "titleEn": "The Boss Baby Christmas Bonus (2022) บอสเบบี้ คริสต์มาสโบนัส",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2022/12/The-Boss-Baby-Christmas-Bonus-2022.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2022/12/The-Boss-Baby-Christmas-Bonus-2022.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=1d8f30e1f485c2bd8c5ff263&b=6571",
    "sourceType": "embed",
    "description": "ดูหนัง The Boss Baby Christmas Bonus (2022) บอสเบบี้ คริสต์มาสโบนัส ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-18505"
  },
  {
    "titleTh": "Pinocchio Unstrung",
    "titleEn": "Pinocchio Unstrung",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Pinocchio-Unstrung-2026-พินอคคิโอ-หุ่นไม้สายเชือด.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Pinocchio-Unstrung-2026-พินอคคิโอ-หุ่นไม้สายเชือด.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=6f3f1f9b66d104e7a95f1002&b=2196",
    "sourceType": "embed",
    "description": "ดูหนัง Pinocchio Unstrung  พินอคคิโอ หุ่นไม้สายเชือด  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40210"
  },
  {
    "titleTh": "The Cinderella (2011) หนังผี",
    "titleEn": "The Cinderella (2011) หนังผี",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/The-Cinderella-2011-หนังผี.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/The-Cinderella-2011-หนังผี.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=8cdab1717c6a6361af83a636&b=4879",
    "sourceType": "embed",
    "description": "ดูหนัง The Cinderella (2011) หนังผี  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40413"
  },
  {
    "titleTh": "To The Max",
    "titleEn": "To The Max",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/To-The-Max-2026-ไปให้สุด.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/To-The-Max-2026-ไปให้สุด.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=410ed015e8388a92a23f1ca6&b=7207",
    "sourceType": "embed",
    "description": "ดูหนัง To The Max  ไปให้สุด  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40378"
  },
  {
    "titleTh": "Heretic (2024)",
    "titleEn": "Heretic (2024)",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2024/12/Heretic-2024-1.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2024/12/Heretic-2024-1.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=472f0d5467c54e6dd4142ffe&b=1284",
    "sourceType": "embed",
    "description": "ดูหนัง Heretic (2024)  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-33752"
  },
  {
    "titleTh": "Arnold Is A Model Student (2022) อานนเป็นนักเรียนตัวอย่าง",
    "titleEn": "Arnold Is A Model Student (2022) อานนเป็นนักเรียนตัวอย่าง",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2024/04/Arnold-Is-A-Model-Student-2022-อานนเป็นนักเรียนตัวอย่าง.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2024/04/Arnold-Is-A-Model-Student-2022-อานนเป็นนักเรียนตัวอย่าง.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=3e9f3faa3b2564ef6eb76b1c&b=1968",
    "sourceType": "embed",
    "description": "ดูหนัง Arnold Is A Model Student (2022) อานนเป็นนักเรียนตัวอย่าง  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-30700"
  },
  {
    "titleTh": "Haunted Universities 4",
    "titleEn": "Haunted Universities 4",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Haunted-Universities-4-2026-เทอม-4.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Haunted-Universities-4-2026-เทอม-4.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=0795a41ba3c27b1ab6916f7d&b=4209",
    "sourceType": "embed",
    "description": "ดูหนัง Haunted Universities 4  เทอม 4  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40152"
  },
  {
    "titleTh": "Damsel (2024) ดรุณีผู้พิชิต",
    "titleEn": "Damsel (2024) ดรุณีผู้พิชิต",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2024/03/Damsel-2024-ดรุณีผู้พิชิต-2.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2024/03/Damsel-2024-ดรุณีผู้พิชิต-2.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=f3e2f8db268cdb12f5d1bf0b&b=4185",
    "sourceType": "embed",
    "description": "ดูหนัง Damsel (2024) ดรุณีผู้พิชิต  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-30179"
  },
  {
    "titleTh": "Tha Rae The Exorcist",
    "titleEn": "Tha Rae The Exorcist",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/08/Tha-Rae-The-Exorcist-2025-ท่าแร่.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/08/Tha-Rae-The-Exorcist-2025-ท่าแร่.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=dd7d3db252acca508c9d5c6f&b=8465",
    "sourceType": "embed",
    "description": "ดูหนัง Tha Rae The Exorcist  ท่าแร่  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-36303"
  },
  {
    "titleTh": "LEGO Marvel Avengers Mission Demolition (2024)",
    "titleEn": "LEGO Marvel Avengers Mission Demolition (2024)",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2024/10/LEGO-Marvel-Avengers-Mission-Demolition-2024.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2024/10/LEGO-Marvel-Avengers-Mission-Demolition-2024.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=3f7c890b75c3c8e8c679d92f&b=3669",
    "sourceType": "embed",
    "description": "ดูหนัง LEGO Marvel Avengers Mission Demolition (2024)  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-33283"
  },
  {
    "titleTh": "The Death of Robin Hood",
    "titleEn": "The Death of Robin Hood",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Death-of-Robin-Hood-2026-บันทึกสุดท้ายของจอมโจร.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Death-of-Robin-Hood-2026-บันทึกสุดท้ายของจอมโจร.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=bca243c4022d2db88d10e9fc&b=1548",
    "sourceType": "embed",
    "description": "ดูหนัง The Death of Robin Hood  บันทึกสุดท้ายของจอมโจร  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39933"
  },
  {
    "titleTh": "Dark Nuns",
    "titleEn": "Dark Nuns",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/03/Dark-Nuns-2025-ไล่มันกลับลงหลุม.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/03/Dark-Nuns-2025-ไล่มันกลับลงหลุม.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=37a0f8e995c7f67b4472d9cc&b=5973",
    "sourceType": "embed",
    "description": "ดูหนัง Dark Nuns  ไล่มันกลับลงหลุม  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-34725"
  },
  {
    "titleTh": "A Merry Little Ex-Mas",
    "titleEn": "A Merry Little Ex-Mas",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/11/A-Merry-Little-Ex-Mas-2025-คริสต์มาสป่วนรัก.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/11/A-Merry-Little-Ex-Mas-2025-คริสต์มาสป่วนรัก.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=e86c4eaefb74b3d09c865cf7&b=1903",
    "sourceType": "embed",
    "description": "ดูหนัง A Merry Little Ex-Mas  คริสต์มาสป่วนรัก  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-37078"
  },
  {
    "titleTh": "The End of Oak Street",
    "titleEn": "The End of Oak Street",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/The-End-of-Oak-Street-2026-มหาภัยสุดถนนโอ๊ค.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/The-End-of-Oak-Street-2026-มหาภัยสุดถนนโอ๊ค.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=469b296cef77cd4a9c294525&b=5383",
    "sourceType": "embed",
    "description": "ดูหนัง The End of Oak Street  มหาภัยสุดถนนโอ๊ค  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40398"
  },
  {
    "titleTh": "Spider-Man Brand New Day",
    "titleEn": "Spider-Man Brand New Day",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Spider-Man-Brand-New-Day-2026-สไปเดอร์แมน-แบรนด์-นิว-เดย์.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Spider-Man-Brand-New-Day-2026-สไปเดอร์แมน-แบรนด์-นิว-เดย์.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=157478efe59a1830ede36cf9&b=2964",
    "sourceType": "embed",
    "description": "ดูหนัง Spider-Man Brand New Day  สไปเดอร์แมน แบรนด์ นิว เดย์  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40265"
  },
  {
    "titleTh": "28 Years Later The Bone Temple",
    "titleEn": "28 Years Later The Bone Temple",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/02/28-Years-Later-The-Bone-Temple-2026-28-ปีให้หลัง-เชื้อเขมือบคน-วิหารซากกะโหลก.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/02/28-Years-Later-The-Bone-Temple-2026-28-ปีให้หลัง-เชื้อเขมือบคน-วิหารซากกะโหลก.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=76421d1ff958104d6ffcbefd&b=5093",
    "sourceType": "embed",
    "description": "ดูหนัง 28 Years Later The Bone Temple  28 ปีให้หลัง เชื้อเขมือบคน วิหารซากกะโหลก  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38047"
  },
  {
    "titleTh": "My Best Friend, His Girlfriend and Me",
    "titleEn": "My Best Friend, His Girlfriend and Me",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/My-Best-Friend-His-Girlfriend-and-Me-2026-เพื่อนรัก-แฟนเพื่อน-และตัวผม.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/My-Best-Friend-His-Girlfriend-and-Me-2026-เพื่อนรัก-แฟนเพื่อน-และตัวผม.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=53ae0744b1d99781e2326d29&b=8078",
    "sourceType": "embed",
    "description": "ดูหนัง My Best Friend, His Girlfriend and Me  เพื่อนรัก แฟนเพื่อน และตัวผม  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40381"
  },
  {
    "titleTh": "Interstellar (2014) ทะยานดาวกู้โลก",
    "titleEn": "Interstellar (2014) ทะยานดาวกู้โลก",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2023/02/Interstellar-2014-ทะยานดาวกู้โลก.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2023/02/Interstellar-2014-ทะยานดาวกู้โลก.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=f361b04655f33d2f93e87015&b=6262",
    "sourceType": "embed",
    "description": "ดูหนัง Interstellar (2014) ทะยานดาวกู้โลก  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-20416"
  },
  {
    "titleTh": "Even if This Love Disappears from the World Tonight (2022) คืนฝันก่อนฉันลืมเธอ",
    "titleEn": "Even if This Love Disappears from the World Tonight (2022) คืนฝันก่อนฉันลืมเธอ",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2023/04/Even-if-This-Love-Disappears-from-the-World-Tonight-2022-คืนฝันก่อนฉันลืมเธอ.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2023/04/Even-if-This-Love-Disappears-from-the-World-Tonight-2022-คืนฝันก่อนฉันลืมเธอ.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=3757dbc8ff4b749f96cf8a83&b=6660",
    "sourceType": "embed",
    "description": "ดูหนัง Even if This Love Disappears from the World Tonight (2022) คืนฝันก่อนฉันลืมเธอ  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-22863"
  },
  {
    "titleTh": "Passenger",
    "titleEn": "Passenger",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Passenger-2026-ผู้ร่วมทางตาย.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Passenger-2026-ผู้ร่วมทางตาย.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=68688cf596f8bf46187f315f&b=6857",
    "sourceType": "embed",
    "description": "ดูหนัง Passenger  ผู้ร่วมทางตาย  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39315"
  },
  {
    "titleTh": "Blades of The Guardians",
    "titleEn": "Blades of The Guardians",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/03/Blades-of-The-Guardians-2026-ยอดยุทธ์ดาบพิทักษ์.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/03/Blades-of-The-Guardians-2026-ยอดยุทธ์ดาบพิทักษ์.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=e5e412971be0786b6979ea29&b=1894",
    "sourceType": "embed",
    "description": "ดูหนัง Blades of The Guardians  ยอดยุทธ์ดาบพิทักษ์  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38541"
  },
  {
    "titleTh": "The Odyssey",
    "titleEn": "The Odyssey",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Odyssey-2026-มหากาพย์โอดิสซี.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Odyssey-2026-มหากาพย์โอดิสซี.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=b1ea65a61f5c9514f97fa9da&b=3082",
    "sourceType": "embed",
    "description": "ดูหนัง The Odyssey  มหากาพย์โอดิสซี  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40112"
  },
  {
    "titleTh": "Nando Between Two Worlds",
    "titleEn": "Nando Between Two Worlds",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/Nando-Between-Two-Worlds-2026-ทางสู่ฝันของนานโด.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/Nando-Between-Two-Worlds-2026-ทางสู่ฝันของนานโด.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=fa67af6cc3b3cdfbfce142be&b=2245",
    "sourceType": "embed",
    "description": "ดูหนัง Nando Between Two Worlds  ทางสู่ฝันของนานโด  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40364"
  },
  {
    "titleTh": "The Drunken Prodigy",
    "titleEn": "The Drunken Prodigy",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/The-Drunken-Prodigy-2026-พลังหมัดเมา.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/The-Drunken-Prodigy-2026-พลังหมัดเมา.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=f11552073c6f9a7ffe51a8c2&b=7607",
    "sourceType": "embed",
    "description": "ดูหนัง The Drunken Prodigy  พลังหมัดเมา  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40302"
  },
  {
    "titleTh": "Don&#039;t Say Good Luck",
    "titleEn": "Don&#039;t Say Good Luck",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/Dont-Say-Good-Luck-2026-ถ้าอยากจะปัง-อย่าขอให้โชคช่วย.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/Dont-Say-Good-Luck-2026-ถ้าอยากจะปัง-อย่าขอให้โชคช่วย.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=cb4288fbcd0d4926104f91c9&b=3275",
    "sourceType": "embed",
    "description": "ดูหนัง Don&#039;t Say Good Luck  ถ้าอยากจะปัง อย่าขอให้โชคช่วย  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40375"
  },
  {
    "titleTh": "ดูซีรีย์ A Shop for Killers Season 2",
    "titleEn": "ดูซีรีย์ A Shop for Killers Season 2",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/A-Shop-for-Killers-Season-2-2026-มรดกร้านนักฆ่า-ซีซั่น-2.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/A-Shop-for-Killers-Season-2-2026-มรดกร้านนักฆ่า-ซีซั่น-2.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=f7cc0c60ab7b0b528fb8251f&b=6885",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ A Shop for Killers Season 2  มรดกร้านนักฆ่า ซีซั่น 2  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40139"
  },
  {
    "titleTh": "The Last House",
    "titleEn": "The Last House",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/The-Last-House-2026-บ้านหลังสุดท้าย.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/The-Last-House-2026-บ้านหลังสุดท้าย.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=4ebf521de1e5e53d1b2d1e0e&b=7717",
    "sourceType": "embed",
    "description": "ดูหนัง The Last House  บ้านหลังสุดท้าย  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40321"
  },
  {
    "titleTh": "Ice Cream Man",
    "titleEn": "Ice Cream Man",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/Ice-Cream-Man-2026.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/Ice-Cream-Man-2026.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=bf6b3398a64d3c5ac49be31b&b=1048",
    "sourceType": "embed",
    "description": "ดูหนัง Ice Cream Man   24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40324"
  },
  {
    "titleTh": "Number One",
    "titleEn": "Number One",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/Number-One-2026-นับหนึ่งถึงมื้อแม่.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/Number-One-2026-นับหนึ่งถึงมื้อแม่.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=534e4bd0399c66e6168e38e0&b=4284",
    "sourceType": "embed",
    "description": "ดูหนัง Number One  นับหนึ่งถึงมื้อแม่  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40357"
  },
  {
    "titleTh": "The Ribbon Hero",
    "titleEn": "The Ribbon Hero",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/The-Ribbon-Hero-2026-เดอะริบบิ้นฮีโร่.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/The-Ribbon-Hero-2026-เดอะริบบิ้นฮีโร่.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=9ed5f16067df1b9129723dc5&b=6890",
    "sourceType": "embed",
    "description": "ดูหนัง The Ribbon Hero  เดอะริบบิ้นฮีโร่  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40314"
  },
  {
    "titleTh": "Jujutsu Kaisen Hidden Inventory Premature Death The Movie",
    "titleEn": "Jujutsu Kaisen Hidden Inventory Premature Death The Movie",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/12/Jujutsu-Kaisen-Hidden-Inventory-Premature-Death-The-Movie-2025-มหาเวทย์ผนึกมาร-เดอะมูฟวี-พรสวรรค์เร้น-อกาลมรณะ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/12/Jujutsu-Kaisen-Hidden-Inventory-Premature-Death-The-Movie-2025-มหาเวทย์ผนึกมาร-เดอะมูฟวี-พรสวรรค์เร้น-อกาลมรณะ.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=cd8be8c4ffcc476fa894113d&b=5255",
    "sourceType": "embed",
    "description": "ดูหนัง Jujutsu Kaisen Hidden Inventory Premature Death The Movie  มหาเวทย์ผนึกมาร เดอะมูฟวี พรสวรรค์เร้น อกาลมรณะ  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-37439"
  },
  {
    "titleTh": "Mobile Suit Gundam Hathaway The Sorcery of Nymph Circe",
    "titleEn": "Mobile Suit Gundam Hathaway The Sorcery of Nymph Circe",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Mobile-Suit-Gundam-Hathaway-The-Sorcery-of-Nymph-Circe-2026-โมบิลสูท-กันดั้ม-ฮาธาเวย์-เดอะ-ซอร์เซอรี-ออฟ-นิมฟ์-เซอร์ซี.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Mobile-Suit-Gundam-Hathaway-The-Sorcery-of-Nymph-Circe-2026-โมบิลสูท-กันดั้ม-ฮาธาเวย์-เดอะ-ซอร์เซอรี-ออฟ-นิมฟ์-เซอร์ซี.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=34d60f656f5bf16c7945177e&b=3284",
    "sourceType": "embed",
    "description": "ดูหนัง Mobile Suit Gundam Hathaway The Sorcery of Nymph Circe  โมบิลสูท กันดั้ม ฮาธาเวย์ เดอะ ซอร์เซอรี ออฟ นิมฟ์ เซอร์ซี  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39215"
  },
  {
    "titleTh": "The Mandalorian and Grogu",
    "titleEn": "The Mandalorian and Grogu",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/The-Mandalorian-and-Grogu-2026-แมนดาลอเรี่ยนและโกรกู.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/The-Mandalorian-and-Grogu-2026-แมนดาลอเรี่ยนและโกรกู.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=b3269fff6504b31475ad4459&b=7691",
    "sourceType": "embed",
    "description": "ดูหนัง The Mandalorian and Grogu  แมนดาลอเรี่ยนและโกรกู  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39293"
  },
  {
    "titleTh": "Pegasus 3",
    "titleEn": "Pegasus 3",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Pegasus-3-2026-ซัดสุดแรง-แซงเต็มสปีด-3.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Pegasus-3-2026-ซัดสุดแรง-แซงเต็มสปีด-3.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=67526389b45f87ab4be524ca&b=1620",
    "sourceType": "embed",
    "description": "ดูหนัง Pegasus 3  ซัดสุดแรง แซงเต็มสปีด 3  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39090"
  },
  {
    "titleTh": "Afterburn",
    "titleEn": "Afterburn",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/09/Afterburn-2025.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/09/Afterburn-2025.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=c76f017f76cee4719238473b&b=1274",
    "sourceType": "embed",
    "description": "ดูหนัง Afterburn  ล่าขุมทรัพย์แดนแดดเดือด  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-36642"
  },
  {
    "titleTh": "The Drama",
    "titleEn": "The Drama",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/04/The-Drama-2026-แต่งก็บ้า.ดราม่าเบอร์นี้.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/04/The-Drama-2026-แต่งก็บ้า.ดราม่าเบอร์นี้.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=5f33be35f1a3eef4b1a30424&b=3670",
    "sourceType": "embed",
    "description": "ดูหนัง The Drama  แต่งก็บ้า..ดราม่าเบอร์นี้  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38826"
  },
  {
    "titleTh": "The Legend Hunters",
    "titleEn": "The Legend Hunters",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/The-Legend-Hunters-2026-โมจิน-โคตรคนล่าสุสาน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/The-Legend-Hunters-2026-โมจิน-โคตรคนล่าสุสาน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=fbef11cf2eb876fb7ab1d9ec&b=9138",
    "sourceType": "embed",
    "description": "ดูหนัง The Legend Hunters  โมจิน โคตรคนล่าสุสาน  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39442"
  },
  {
    "titleTh": "Leviticus",
    "titleEn": "Leviticus",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Leviticus-2026-รักร้ายกลายร่าง.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Leviticus-2026-รักร้ายกลายร่าง.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=56042c6f98feaa4fda3e361d&b=9296",
    "sourceType": "embed",
    "description": "ดูหนัง Leviticus  รักร้ายกลายร่าง  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40237"
  },
  {
    "titleTh": "Hokum",
    "titleEn": "Hokum",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Hokum-2026-ห้องกุมวิญญาณ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Hokum-2026-ห้องกุมวิญญาณ.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=b0769fd2ad600c33e1a410e6&b=7575",
    "sourceType": "embed",
    "description": "ดูหนัง Hokum  ห้องกุมวิญญาณ  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39467"
  },
  {
    "titleTh": "The Toxic Avenger Unrated",
    "titleEn": "The Toxic Avenger Unrated",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/09/The-Toxic-Avenger-Unrated-2025-ฮีโร่พันธุ์ท็อกซิก.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/09/The-Toxic-Avenger-Unrated-2025-ฮีโร่พันธุ์ท็อกซิก.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=34fd91428f7d1b7154100aea&b=6731",
    "sourceType": "embed",
    "description": "ดูหนัง The Toxic Avenger Unrated  ฮีโร่พันธุ์ท็อกซิก  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-36555"
  },
  {
    "titleTh": "Disclosure Day",
    "titleEn": "Disclosure Day",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Disclosure-Day-2026-วันเปิดโปง-ไขปริศนาลวงโลก.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Disclosure-Day-2026-วันเปิดโปง-ไขปริศนาลวงโลก.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=e86e47a97d2ef4214a946f23&b=9987",
    "sourceType": "embed",
    "description": "ดูหนัง Disclosure Day  วันเปิดโปง ไขปริศนาลวงโลก  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39640"
  },
  {
    "titleTh": "Assassination Classroom the Movie Our Time",
    "titleEn": "Assassination Classroom the Movie Our Time",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Assassination-Classroom-the-Movie-Our-Time-2026-ห้องเรียนลอบสังหาร-เดอะ-มูฟวี่-ห้วงเวลาของพวกเรา.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Assassination-Classroom-the-Movie-Our-Time-2026-ห้องเรียนลอบสังหาร-เดอะ-มูฟวี่-ห้วงเวลาของพวกเรา.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=543da3ad7d771c97795b64a3&b=8304",
    "sourceType": "embed",
    "description": "ดูหนัง Assassination Classroom the Movie Our Time  ห้องเรียนลอบสังหาร เดอะ มูฟวี่ ห้วงเวลาของพวกเรา  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40250"
  },
  {
    "titleTh": "Scare Out",
    "titleEn": "Scare Out",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Scare-Out-2026-เกมล่าทรชน-คนล่าคน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Scare-Out-2026-เกมล่าทรชน-คนล่าคน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=647a85950e62917970a068c2&b=6652",
    "sourceType": "embed",
    "description": "ดูหนัง Scare Out   24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39385"
  },
  {
    "titleTh": "The Convenience Store",
    "titleEn": "The Convenience Store",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/The-Convenience-Store-2026-มันแอบอยู่ในร้าน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/The-Convenience-Store-2026-มันแอบอยู่ในร้าน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=6f56caebe0ce7109d9be93e7&b=2348",
    "sourceType": "embed",
    "description": "ดูหนัง The Convenience Store  มันแอบอยู่ในร้าน  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39421"
  },
  {
    "titleTh": "Longlegs (2024) ถอดรหัสคลั่งอำมหิต",
    "titleEn": "Longlegs (2024) ถอดรหัสคลั่งอำมหิต",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2024/08/Longlegs-2024-ถอดรหัสคลั่งอำมหิต-1.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2024/08/Longlegs-2024-ถอดรหัสคลั่งอำมหิต-1.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=1e1821b180a4260c06ffb563&b=6484",
    "sourceType": "embed",
    "description": "ดูหนัง Longlegs (2024) ถอดรหัสคลั่งอำมหิต  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-32374"
  },
  {
    "titleTh": "Mother Mary",
    "titleEn": "Mother Mary",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Mother-Mary-2026-มาเธอร์-แมรี่.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Mother-Mary-2026-มาเธอร์-แมรี่.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=b6d67a068cbbdf131c47da64&b=3635",
    "sourceType": "embed",
    "description": "ดูหนัง Mother Mary  มาเธอร์ แมรี่  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39253"
  },
  {
    "titleTh": "The Furious",
    "titleEn": "The Furious",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/The-Furious-2026-คนเดือดระห่ำ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/The-Furious-2026-คนเดือดระห่ำ.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=cbbb1ea59af1bb711e0689d6&b=6656",
    "sourceType": "embed",
    "description": "ดูหนัง The Furious  คนเดือดระห่ำ  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39720"
  },
  {
    "titleTh": "Dollhouse",
    "titleEn": "Dollhouse",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Dollhouse-2025-ดอลล์เฮ้าส์-หลอนซ่อนหุ่น.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Dollhouse-2025-ดอลล์เฮ้าส์-หลอนซ่อนหุ่น.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=4dce09e7d888b8b307e46594&b=3159",
    "sourceType": "embed",
    "description": "ดูหนัง Dollhouse  ดอลล์เฮ้าส์ หลอนซ่อนหุ่น  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39733"
  },
  {
    "titleTh": "Hungry",
    "titleEn": "Hungry",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Hungry-2026-มันเด้งขึ้นมาแดก.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Hungry-2026-มันเด้งขึ้นมาแดก.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=622448539828e15ada31ceb8&b=3585",
    "sourceType": "embed",
    "description": "ดูหนัง Hungry  มันเด้งขึ้นมาแดก  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39789"
  },
  {
    "titleTh": "Ga la (2024) ไลฟ์ติดผี",
    "titleEn": "Ga la (2024) ไลฟ์ติดผี",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/01/Ga-la-2024-ไลฟ์ติดผี.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/01/Ga-la-2024-ไลฟ์ติดผี.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=40db443aab3645bd9c9d8e12&b=7866",
    "sourceType": "embed",
    "description": "ดูหนัง Ga la (2024) ไลฟ์ติดผี  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-37867"
  },
  {
    "titleTh": "Ghost in the Cell",
    "titleEn": "Ghost in the Cell",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Ghost-in-the-Cell-2026-วัยหนุ่มคุกผี.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Ghost-in-the-Cell-2026-วัยหนุ่มคุกผี.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=ba4c8ce8209b7fcfde9a953d&b=7516",
    "sourceType": "embed",
    "description": "ดูหนัง Ghost in the Cell  วัยหนุ่มคุกผี  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40078"
  },
  {
    "titleTh": "Noise (2024) เสียงซ่อนผี",
    "titleEn": "Noise (2024) เสียงซ่อนผี",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/09/Noise-2024-เสียงซ่อนผี.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/09/Noise-2024-เสียงซ่อนผี.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=bd3ec1e6a1354efc62576db6&b=7257",
    "sourceType": "embed",
    "description": "ดูหนัง Noise (2024) เสียงซ่อนผี  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-36673"
  },
  {
    "titleTh": "In the Grey",
    "titleEn": "In the Grey",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/In-the-Grey-2026-เหลี่ยมจารชน-คนเหนือเทา.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/In-the-Grey-2026-เหลี่ยมจารชน-คนเหนือเทา.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=0dfe85e71ad45df2c34786eb&b=8306",
    "sourceType": "embed",
    "description": "ดูหนัง In the Grey  เหลี่ยมจารชน คนเหนือเทา  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39188"
  },
  {
    "titleTh": "That Time I Got Reincarnated as a Slime the Movie Tears of the Azure Sea",
    "titleEn": "That Time I Got Reincarnated as a Slime the Movie Tears of the Azure Sea",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/That-Time-I-Got-Reincarnated-as-a-Slime-the-Movie-Tears-of-the-Azure-Sea-2026.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/That-Time-I-Got-Reincarnated-as-a-Slime-the-Movie-Tears-of-the-Azure-Sea-2026.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=97148a76d72d699c5c99635d&b=4491",
    "sourceType": "embed",
    "description": "ดูหนัง That Time I Got Reincarnated as a Slime the Movie Tears of the Azure Sea  เกิดใหม่ทั้งทีก็เป็นสไลม์ไปซะแล้วเดอะมูฟวี่ ภาคน้ำตาแห่งห้วงทะเลคราม  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39214"
  },
  {
    "titleTh": "Village of the Dead",
    "titleEn": "Village of the Dead",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Village-of-the-Dead-2025-ผีบังตาย.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Village-of-the-Dead-2025-ผีบังตาย.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=e0139517ea676f6beb7f417e&b=1292",
    "sourceType": "embed",
    "description": "ดูหนัง Village of the Dead  ผีบังตาย 4  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39182"
  },
  {
    "titleTh": "Gone",
    "titleEn": "Gone",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Gone-2026-โกน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Gone-2026-โกน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=4a1e1644340b02eb6d4ca114&b=4954",
    "sourceType": "embed",
    "description": "ดูหนัง Gone  โกน  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39424"
  },
  {
    "titleTh": "Pee Nak 5",
    "titleEn": "Pee Nak 5",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Pee-Nak-5-2026-พี่นาค-5.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Pee-Nak-5-2026-พี่นาค-5.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=556f7b765f7cd139422492ae&b=5258",
    "sourceType": "embed",
    "description": "ดูหนัง Pee Nak 5  พี่นาค 5  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39939"
  },
  {
    "titleTh": "Ghost Board",
    "titleEn": "Ghost Board",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Ghost-Board-2026-กล่องผีสุ่มวิญญาณ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Ghost-Board-2026-กล่องผีสุ่มวิญญาณ.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=29de39cbebb87fc6b764c991&b=2030",
    "sourceType": "embed",
    "description": "ดูหนัง Ghost Board  กล่องผีสุ่มวิญญาณ  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40081"
  },
  {
    "titleTh": "My Boo (2024) อนงค์",
    "titleEn": "My Boo (2024) อนงค์",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2024/10/อนงค์-My-Boo-2024.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2024/10/อนงค์-My-Boo-2024.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=6e363837ea8a7bdd61c97cb9&b=3939",
    "sourceType": "embed",
    "description": "ดูหนัง My Boo (2024) อนงค์  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-33116"
  },
  {
    "titleTh": "Our House",
    "titleEn": "Our House",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Our-House-2025-ข้างบ้าน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Our-House-2025-ข้างบ้าน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=e6243ae2f1ae31212e7ec4a7&b=8088",
    "sourceType": "embed",
    "description": "ดูหนัง Our House  ข้างบ้าน  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38871"
  },
  {
    "titleTh": "Khang 8 (1999) ขัง 8",
    "titleEn": "Khang 8 (1999) ขัง 8",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/04/Khang-8-1999-ขัง-8.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/04/Khang-8-1999-ขัง-8.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=69cb29459eb091c0992b6e05&b=8488",
    "sourceType": "embed",
    "description": "ดูหนัง Khang 8 (1999) ขัง 8  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38627"
  },
  {
    "titleTh": "Nancy Boy",
    "titleEn": "Nancy Boy",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/12/Nancy-Boy-2025-เทย-ไทบ้านเดอะซีรีส์.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/12/Nancy-Boy-2025-เทย-ไทบ้านเดอะซีรีส์.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=4d77f3b73ba528477a7ff508&b=6366",
    "sourceType": "embed",
    "description": "ดูหนัง Nancy Boy  เทย ไทบ้านเดอะซีรีส์  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-37458"
  },
  {
    "titleTh": "Last Light",
    "titleEn": "Last Light",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/12/The-Last-Light-2025-ฒ-ผู้เฒ่า.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/12/The-Last-Light-2025-ฒ-ผู้เฒ่า.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=cd0045527e82b3c8b0e825e5&b=8450",
    "sourceType": "embed",
    "description": "ดูหนัง Last Light  ฒ ผู้เฒ่า  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-37494"
  },
  {
    "titleTh": "Art of the Devil Beginning",
    "titleEn": "Art of the Devil Beginning",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/01/Art-of-the-Devil-Beginning-2025-พนอ-1.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/01/Art-of-the-Devil-Beginning-2025-พนอ-1.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=27f2eea731744d8a864e5c5a&b=4311",
    "sourceType": "embed",
    "description": "ดูหนัง Art of the Devil Beginning  พนอ  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-34090"
  },
  {
    "titleTh": "Ta Khon",
    "titleEn": "Ta Khon",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/04/Ta-Khon-2025-ตาโขน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/04/Ta-Khon-2025-ตาโขน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=69bbb08bc2ac255bc71020a2&b=4613",
    "sourceType": "embed",
    "description": "ดูหนัง Ta Khon  ตาโขน  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38710"
  },
  {
    "titleTh": "The Debt Collector",
    "titleEn": "The Debt Collector",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Debt-Collector-2026-คนเดือดทวงแค้น.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Debt-Collector-2026-คนเดือดทวงแค้น.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=96a98ccc33777b8e9a6570ec&b=2241",
    "sourceType": "embed",
    "description": "ดูหนัง The Debt Collector  คนเดือดทวงแค้น  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40147"
  },
  {
    "titleTh": "4 Tigers",
    "titleEn": "4 Tigers",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/11/4-Tigers-2025-เสือ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/11/4-Tigers-2025-เสือ.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=c65f7ad3af13b260f33fc9c6&b=6458",
    "sourceType": "embed",
    "description": "ดูหนัง 4 Tigers  เสือ  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-37104"
  },
  {
    "titleTh": "The Last Shot",
    "titleEn": "The Last Shot",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/04/The-Last-Shot-2025-มือปืน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/04/The-Last-Shot-2025-มือปืน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=ab79e060ee900fefc01095c0&b=4281",
    "sourceType": "embed",
    "description": "ดูหนัง The Last Shot  มือปืน  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38792"
  },
  {
    "titleTh": "Food Truck Stolen Love... and Moo Deng",
    "titleEn": "Food Truck Stolen Love... and Moo Deng",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Food-Truck-Stolen-Love.-and-Moo-Deng-2025-ฟู้ดทรัค-ลัก-รัก-หมูเด้ง.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Food-Truck-Stolen-Love.-and-Moo-Deng-2025-ฟู้ดทรัค-ลัก-รัก-หมูเด้ง.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=42d1d4f1aa26f04952525618&b=8980",
    "sourceType": "embed",
    "description": "ดูหนัง Food Truck Stolen Love... and Moo Deng  ฟู้ดทรัค ลัก (รัก) หมูเด้ง  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39401"
  },
  {
    "titleTh": "Nak Loves Mak Sooo Much!",
    "titleEn": "Nak Loves Mak Sooo Much!",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/01/Nak-Loves-Mak-Sooo-Much-2025-นากรักมาก-ม๊ากมาก.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/01/Nak-Loves-Mak-Sooo-Much-2025-นากรักมาก-ม๊ากมาก.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=6c339de755ba0da8ce2a546b&b=8848",
    "sourceType": "embed",
    "description": "ดูหนัง Nak Loves Mak Sooo Much!  นากรักมาก ม๊ากมาก  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-37695"
  },
  {
    "titleTh": "MY BOO 2",
    "titleEn": "MY BOO 2",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/03/MY-BOO-2-2025-อนงค์-2.สามสี่ชาติ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/03/MY-BOO-2-2025-อนงค์-2.สามสี่ชาติ.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=59e4667d2ccd213a19c8dbb2&b=7066",
    "sourceType": "embed",
    "description": "ดูหนัง MY BOO 2  อนงค์ 2..สามสี่ชาติ  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38301"
  },
  {
    "titleTh": "Panor 2",
    "titleEn": "Panor 2",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Panor-2-2026-พนอ-2.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Panor-2-2026-พนอ-2.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=2ea7d8b80003ab7f82374a66&b=6380",
    "sourceType": "embed",
    "description": "ดูหนัง Panor 2  พนอ 2  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39166"
  },
  {
    "titleTh": "The Undertaker 2 Afterlife",
    "titleEn": "The Undertaker 2 Afterlife",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Undertaker-2-Afterlife-2026-สัปเหร่อ-2.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Undertaker-2-Afterlife-2026-สัปเหร่อ-2.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=3bf54f6a1faad5ab77b6c114&b=3086",
    "sourceType": "embed",
    "description": "ดูหนัง The Undertaker 2 Afterlife  สัปเหร่อ 2  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40046"
  },
  {
    "titleTh": "Suppaleehuan",
    "titleEn": "Suppaleehuan",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/02/Suppaleehuan-2026-สรรพลี้หวน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/02/Suppaleehuan-2026-สรรพลี้หวน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=3323eacd87a5e22ce44c4ff2&b=3728",
    "sourceType": "embed",
    "description": "ดูหนัง Suppaleehuan  สรรพลี้หวน  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38106"
  },
  {
    "titleTh": "Diva La Vie​",
    "titleEn": "Diva La Vie​",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/04/Diva-La-Vie​-2026-ดีว่าราวี.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/04/Diva-La-Vie​-2026-ดีว่าราวี.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=a8bc1188ce154cbbbdae41ac&b=2707",
    "sourceType": "embed",
    "description": "ดูหนัง Diva La Vie​  ดีว่าราวี  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38663"
  },
  {
    "titleTh": "Macabre Case of Prom Pi Ram (2003) คืนบาป พรหมพิราม",
    "titleEn": "Macabre Case of Prom Pi Ram (2003) คืนบาป พรหมพิราม",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/04/Macabre-Case-of-Prom-Pi-Ram-2003-คืนบาป-พรหมพิราม.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/04/Macabre-Case-of-Prom-Pi-Ram-2003-คืนบาป-พรหมพิราม.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=ae1c88c24f564c967abe34f4&b=8656",
    "sourceType": "embed",
    "description": "ดูหนัง Macabre Case of Prom Pi Ram (2003) คืนบาป พรหมพิราม  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38754"
  },
  {
    "titleTh": "The Red Line",
    "titleEn": "The Red Line",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/03/The-Red-Line-2026-เส้นตาย-สายลวง.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/03/The-Red-Line-2026-เส้นตาย-สายลวง.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=afcab5ad181073ee41fc5eba&b=7823",
    "sourceType": "embed",
    "description": "ดูหนัง The Red Line  เส้นตาย สายลวง  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38520"
  },
  {
    "titleTh": "ดูซีรีย์ The Evil Lawyer",
    "titleEn": "ดูซีรีย์ The Evil Lawyer",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/The-Evil-Lawyer-2026-ทนายปีศาจ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/The-Evil-Lawyer-2026-ทนายปีศาจ.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=c9a94f78c568f0c9c137d5b1&b=7915",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ The Evil Lawyer  ทนายปีศาจ  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39576"
  },
  {
    "titleTh": "ZIEN-LANG Best Friends Forever (2023) เซียนหรั่ง เดอะมูฟวี่",
    "titleEn": "ZIEN-LANG Best Friends Forever (2023) เซียนหรั่ง เดอะมูฟวี่",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2023/09/ZIEN-LANG-Best-Friends-Forever-2023-เซียนหรั่ง-เดอะมูฟวี่.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2023/09/ZIEN-LANG-Best-Friends-Forever-2023-เซียนหรั่ง-เดอะมูฟวี่.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=56bc00384787530383851625&b=5238",
    "sourceType": "embed",
    "description": "ดูหนัง ZIEN-LANG Best Friends Forever (2023) เซียนหรั่ง เดอะมูฟวี่  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-26466"
  },
  {
    "titleTh": "Human Resource",
    "titleEn": "Human Resource",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Human-Resource-2025-พนักงานใหม่-โปรดรับไว้พิจารณา.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Human-Resource-2025-พนักงานใหม่-โปรดรับไว้พิจารณา.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=1d6c0199bc7e28567cf99874&b=2254",
    "sourceType": "embed",
    "description": "ดูหนัง Human Resource  พนักงานใหม่ (โปรดรับไว้พิจารณา)  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39478"
  },
  {
    "titleTh": "Hit Man File (2005) ซุ้มมือปืน",
    "titleEn": "Hit Man File (2005) ซุ้มมือปืน",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/04/Hit-Man-File-2005-ซุ้มมือปืน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/04/Hit-Man-File-2005-ซุ้มมือปืน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=49c2e683eb173a45bcfe37c2&b=9554",
    "sourceType": "embed",
    "description": "ดูหนัง Hit Man File (2005) ซุ้มมือปืน  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38752"
  },
  {
    "titleTh": "Deaw Still Alive",
    "titleEn": "Deaw Still Alive",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/01/Deaw-Still-Alive-2026-เดี่ยว-สตีล-อะไลฟ์.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/01/Deaw-Still-Alive-2026-เดี่ยว-สตีล-อะไลฟ์.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=fb24105d68f2b4f428909236&b=8655",
    "sourceType": "embed",
    "description": "ดูหนัง Deaw Still Alive  เดี่ยว สตีล อะไลฟ์  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-37989"
  },
  {
    "titleTh": "Ko Ga Loak Village",
    "titleEn": "Ko Ga Loak Village",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/04/Ko-Ga-Loak-Village-2025-หมู่บ้านโคกะโหลก.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/04/Ko-Ga-Loak-Village-2025-หมู่บ้านโคกะโหลก.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=496b15bea133af915d83e502&b=7483",
    "sourceType": "embed",
    "description": "ดูหนัง Ko Ga Loak Village  หมู่บ้านโคกะโหลก  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38857"
  },
  {
    "titleTh": "ดูซีรีย์ Spider-Noir",
    "titleEn": "ดูซีรีย์ Spider-Noir",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Spider-Noir-2026-สไปเดอร์-นัวร์-ไอ้แมงมุมพันธุ์นรก.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Spider-Noir-2026-สไปเดอร์-นัวร์-ไอ้แมงมุมพันธุ์นรก.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=d0a969a322717d91af9ba870&b=1718",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ Spider-Noir  สไปเดอร์ นัวร์ ไอ้แมงมุมพันธุ์นรก  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39404"
  },
  {
    "titleTh": "ดูซีรีย์ Human Vapor",
    "titleEn": "ดูซีรีย์ Human Vapor",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Human-Vapor-2026-มนุษย์ก๊าซ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Human-Vapor-2026-มนุษย์ก๊าซ.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=a85554457eb1f824d9e12bc3&b=6889",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ Human Vapor  มนุษย์ก๊าซ  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39971"
  },
  {
    "titleTh": "Agent from Above",
    "titleEn": "Agent from Above",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/04/Agent-from-Above-2026-สายลับฟ้าส่ง.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/04/Agent-from-Above-2026-สายลับฟ้าส่ง.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=b41755f1a59baa785a3dac57&b=5892",
    "sourceType": "embed",
    "description": "ดูหนัง Agent from Above  สายลับฟ้าส่ง  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38599"
  },
  {
    "titleTh": "House of the Dragon (2022) ตระกูลแห่งมังกร ฟรี 24-.COM",
    "titleEn": "House of the Dragon (2022) ตระกูลแห่งมังกร ฟรี 24-.COM",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2022/08/House-of-the-Dragon-2022-ตระกูลแห่งมังกร.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2022/08/House-of-the-Dragon-2022-ตระกูลแห่งมังกร.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=ccad53f76b4108b77fa63158&b=8983",
    "sourceType": "embed",
    "description": "ดูหนัง House of the Dragon (2022) ตระกูลแห่งมังกร ฟรี 24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-15133"
  },
  {
    "titleTh": "ดูซีรีย์ Pursuit of Jade",
    "titleEn": "ดูซีรีย์ Pursuit of Jade",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/03/Pursuit-of-Jade-2026-ล่าหยก.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/03/Pursuit-of-Jade-2026-ล่าหยก.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=1963c981bf03472c6cebb383&b=1896",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ Pursuit of Jade  ล่าหยก  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38426"
  },
  {
    "titleTh": "ดูซีรีย์ Viral Hit",
    "titleEn": "ดูซีรีย์ Viral Hit",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Viral-Hit-2026-นักสู้ทูปเบอร์.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Viral-Hit-2026-นักสู้ทูปเบอร์.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=e0fe66bcf57e597917eb7db2&b=4436",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ Viral Hit  นักสู้ทูปเบอร์  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39572"
  },
  {
    "titleTh": "One Piece Season 2",
    "titleEn": "One Piece Season 2",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/03/One-Piece-Season-2-2026-วันพีช-ซีซั่น-2.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/03/One-Piece-Season-2-2026-วันพีช-ซีซั่น-2.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=fd17b6714907f3ec223380da&b=4225",
    "sourceType": "embed",
    "description": "ดูหนัง One Piece Season 2  วันพีช ซีซั่น 2  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38351"
  },
  {
    "titleTh": "ดูซีรี่ย์ The East Palace",
    "titleEn": "ดูซีรี่ย์ The East Palace",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-East-Palace-2026-บูรพาอาถรรพ์.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-East-Palace-2026-บูรพาอาถรรพ์.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=759fae523ddebf02c35dbc6a&b=9082",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรี่ย์ The East Palace  บูรพาอาถรรพ์  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40100"
  },
  {
    "titleTh": "ดูซีรีย์ IT Welcome to Derry",
    "titleEn": "ดูซีรีย์ IT Welcome to Derry",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/12/IT-Welcome-to-Derry-2025-อิท-ยินดีต้อนรับสู่เดอร์รี่.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/12/IT-Welcome-to-Derry-2025-อิท-ยินดีต้อนรับสู่เดอร์รี่.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=b969b278e56854716db95fdb&b=7652",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ IT Welcome to Derry  อิท ยินดีต้อนรับสู่เดอร์รี่  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-37405"
  },
  {
    "titleTh": "Alice in Borderland Season 3",
    "titleEn": "Alice in Borderland Season 3",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/09/Alice-in-Borderland-Season-3-2025-อลิสในแดนมรณะ-ซีซั่น-3.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/09/Alice-in-Borderland-Season-3-2025-อลิสในแดนมรณะ-ซีซั่น-3.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=dd0677b0a71f98cdb3021813&b=7559",
    "sourceType": "embed",
    "description": "ดูหนัง Alice in Borderland Season 3  อลิสในแดนมรณะ ซีซั่น 3  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-36692"
  },
  {
    "titleTh": "ดูซีรีย์ The Boys Season 5",
    "titleEn": "ดูซีรีย์ The Boys Season 5",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/04/The-Boys-Season-4-2024-ก๊วนหนุ่มซ่าล่าซูเปอร์ฮีโร่.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/04/The-Boys-Season-4-2024-ก๊วนหนุ่มซ่าล่าซูเปอร์ฮีโร่.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=663723f2f8f5726d4a2eddfd&b=1440",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ The Boys Season 5  ก๊วนหนุ่มซ่าล่าซูเปอร์ฮีโร่ ซีซั่น 5  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38724"
  },
  {
    "titleTh": "ดูซีรีย์ Avatar The Last Airbender (2024) เณรน้อยเจ้าอภินิหาร Ep 1-8",
    "titleEn": "ดูซีรีย์ Avatar The Last Airbender (2024) เณรน้อยเจ้าอภินิหาร Ep 1-8",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2024/02/Avatar-The-Last-Airbender-2024-เณรน้อยเจ้าอภินิหาร.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2024/02/Avatar-The-Last-Airbender-2024-เณรน้อยเจ้าอภินิหาร.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=74e01ef1cf7c5834caba8b28&b=9654",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ Avatar The Last Airbender (2024) เณรน้อยเจ้าอภินิหาร Ep 1-8  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-29859"
  },
  {
    "titleTh": "ดูซีรีย์ Avatar The Last Airbender Season 2",
    "titleEn": "ดูซีรีย์ Avatar The Last Airbender Season 2",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/new-poster-for-avatar-the-last-airbender-season-2-v0-nexeqr1fpdsg1.webp",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/new-poster-for-avatar-the-last-airbender-season-2-v0-nexeqr1fpdsg1.webp",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=e6283aa67cf9802ed9c1a2b6&b=4658",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ Avatar The Last Airbender Season 2  เณรน้อยเจ้าอภินิหาร ซีซั่น 2 Ep 1-7  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39873"
  },
  {
    "titleTh": "ดูซีรีย์ Bloodhounds 2",
    "titleEn": "ดูซีรีย์ Bloodhounds 2",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/04/Bloodhounds-2-2026.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/04/Bloodhounds-2-2026.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=503d5f04030c6bf50d10ec93&b=3949",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ Bloodhounds 2   24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38620"
  },
  {
    "titleTh": "ดูซีรีย์ The WONDERfools",
    "titleEn": "ดูซีรีย์ The WONDERfools",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/The-WONDERfools-2026-คนมหัศจรรย์พลังรั่ว.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/The-WONDERfools-2026-คนมหัศจรรย์พลังรั่ว.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=963a991126109eb752207d9e&b=1075",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ The WONDERfools  คนมหัศจรรย์พลังรั่ว  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39175"
  },
  {
    "titleTh": "Detective Hole",
    "titleEn": "Detective Hole",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/04/Detective-Hole-2026-ยอดนักสืบแฮร์รี-โฮล.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/04/Detective-Hole-2026-ยอดนักสืบแฮร์รี-โฮล.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=4e91b69674162b122dd9448d&b=9322",
    "sourceType": "embed",
    "description": "ดูหนัง Detective Hole  ยอดนักสืบแฮร์รี โฮล  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38600"
  },
  {
    "titleTh": "ดูซีรีย์ House of the Dragon Season 2 (2024) ตระกูลแห่งมังกร ซีซั่น 2",
    "titleEn": "ดูซีรีย์ House of the Dragon Season 2 (2024) ตระกูลแห่งมังกร ซีซั่น 2",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/House-of-the-Dragon-Season-2-2024.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/House-of-the-Dragon-Season-2-2024.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=c2e0601ec12c4d9841c867ba&b=5759",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ House of the Dragon Season 2 (2024) ตระกูลแห่งมังกร ซีซั่น 2  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39739"
  },
  {
    "titleTh": "ดูซีรีย์ The Believers (2024) สาธุ EP 1-9",
    "titleEn": "ดูซีรีย์ The Believers (2024) สาธุ EP 1-9",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2024/03/The-Believers-2024-สาธุ.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2024/03/The-Believers-2024-สาธุ.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=b9c3ae9b01e1b7038fd10158&b=9899",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ The Believers (2024) สาธุ EP 1-9  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-30573"
  },
  {
    "titleTh": "ดูซีรีย์ Perfect Crown",
    "titleEn": "ดูซีรีย์ Perfect Crown",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Perfect-Crown-2026.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Perfect-Crown-2026.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=eba3f19d018ebf41cdd45305&b=2488",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ Perfect Crown   24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39271"
  },
  {
    "titleTh": "ดูซีรีย์ Alien Earth",
    "titleEn": "ดูซีรีย์ Alien Earth",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/08/Alien-Earth-2025.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/08/Alien-Earth-2025.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=8b260274429af6e30a3c3cdf&b=5862",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ Alien Earth   24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-36294"
  },
  {
    "titleTh": "ดูซีรีย์ Bloodhounds (2023) EP 1-8",
    "titleEn": "ดูซีรีย์ Bloodhounds (2023) EP 1-8",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2023/06/Bloodhounds-2023.jpg",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2023/06/Bloodhounds-2023.jpg",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=e933211482484221cc340354&b=7761",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ Bloodhounds (2023) EP 1-8  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-23950"
  },
  {
    "titleTh": "ดูซีรีย์ Teach You a Lesson",
    "titleEn": "ดูซีรีย์ Teach You a Lesson",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Teach-You-a-Lesson-2026-อย่างนี้ต้องโดนสั่งสอน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Teach-You-a-Lesson-2026-อย่างนี้ต้องโดนสั่งสอน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=ba6684fcbbf4033e00afc09e&b=3464",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ Teach You a Lesson  อย่างนี้ต้องโดนสั่งสอน  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39512"
  },
  {
    "titleTh": "ดูซีรีย์ A Shop for Killers (2024) มรดกร้านนักฆ่า",
    "titleEn": "ดูซีรีย์ A Shop for Killers (2024) มรดกร้านนักฆ่า",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/A-Shop-for-Killers-2024-มรดกร้านนักฆ่า.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/A-Shop-for-Killers-2024-มรดกร้านนักฆ่า.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=881f99f17263f1c06be00d49&b=7263",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ A Shop for Killers (2024) มรดกร้านนักฆ่า  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40142"
  },
  {
    "titleTh": "ดูซีรีย์ Boyfriend on Demand",
    "titleEn": "ดูซีรีย์ Boyfriend on Demand",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/03/Boyfriend-on-Demand-2026-แฟนสมมติสะดุดรัก.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/03/Boyfriend-on-Demand-2026-แฟนสมมติสะดุดรัก.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=dc193663d1c96c921bd520ee&b=3343",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ Boyfriend on Demand  แฟนสมมติสะดุดรัก  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38403"
  },
  {
    "titleTh": "ดูซีรีย์ Ironheart",
    "titleEn": "ดูซีรีย์ Ironheart",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/06/Ironheart-2025-ไอรอน-ฮาท.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/06/Ironheart-2025-ไอรอน-ฮาท.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=8de850be4856aa6eb0c15fe2&b=1075",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ Ironheart  ไอรอน ฮาท  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-35887"
  },
  {
    "titleTh": "ดูซีรีย์ Squid Game The Challenge Season 2",
    "titleEn": "ดูซีรีย์ Squid Game The Challenge Season 2",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/11/Squid-Game-The-Challenge-Season-2-2025-สควิดเกม-เดอะ-ชาเลนจ์-ซีซั่น-2.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/11/Squid-Game-The-Challenge-Season-2-2025-สควิดเกม-เดอะ-ชาเลนจ์-ซีซั่น-2.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=27b4eee9034069169f0e9645&b=4683",
    "sourceType": "embed",
    "description": "ดูหนัง ดูซีรีย์ Squid Game The Challenge Season 2  สควิดเกม เดอะ ชาเลนจ์ ซีซั่น 2  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-37035"
  },
  {
    "titleTh": "Elize Shadow Of a Women",
    "titleEn": "Elize Shadow Of a Women",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Elize-Shadow-Of-a-Women-2026-เอลีซ-หญิงสาวในเงาโศก.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Elize-Shadow-Of-a-Women-2026-เอลีซ-หญิงสาวในเงาโศก.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=45102931d59c612996de5da2&b=7627",
    "sourceType": "embed",
    "description": "ดูหนัง Elize Shadow Of a Women  เอลีซ หญิงสาวในเงาโศก  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40136"
  },
  {
    "titleTh": "IKKA",
    "titleEn": "IKKA",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/IKKA-2026-ไพ่ตาย-ทนายเหนือคน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/IKKA-2026-ไพ่ตาย-ทนายเหนือคน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=205144190f5c3790e075315a&b=1777",
    "sourceType": "embed",
    "description": "ดูหนัง IKKA  ไพ่ตาย ทนายเหนือคน  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40023"
  },
  {
    "titleTh": "The Secret Agent",
    "titleEn": "The Secret Agent",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Secret-Agent-2026-ประเทศนี้-อยู่เฉย-ๆ-ก็ผิดได้.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Secret-Agent-2026-ประเทศนี้-อยู่เฉย-ๆ-ก็ผิดได้.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=7fe914b5e69534157a43cf0d&b=3479",
    "sourceType": "embed",
    "description": "ดูหนัง The Secret Agent  ประเทศนี้ อยู่เฉย ๆ ก็ผิดได้  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40224"
  },
  {
    "titleTh": "Golden Kamuy Assault on Abashiri Prison",
    "titleEn": "Golden Kamuy Assault on Abashiri Prison",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Golden-Kamuy-Assault-on-Abashiri-Prison-2026-โกลเดนคามุย-การจู่โจมคุกอะบาชิริ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Golden-Kamuy-Assault-on-Abashiri-Prison-2026-โกลเดนคามุย-การจู่โจมคุกอะบาชิริ.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=5f0c15608bb9943f186b711f&b=2191",
    "sourceType": "embed",
    "description": "ดูหนัง Golden Kamuy Assault on Abashiri Prison  โกลเดนคามุย การจู่โจมคุกอะบาชิริ  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40060"
  },
  {
    "titleTh": "Me Before Me",
    "titleEn": "Me Before Me",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Me-Before-Me-2026-ฉันก่อนเป็นฉัน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Me-Before-Me-2026-ฉันก่อนเป็นฉัน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=380acab296764bd24cc5dbb8&b=4376",
    "sourceType": "embed",
    "description": "ดูหนัง Me Before Me  ฉันก่อนเป็นฉัน  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40090"
  },
  {
    "titleTh": "Demon Slayer Kimetsu no Yaiba Infinity Castle",
    "titleEn": "Demon Slayer Kimetsu no Yaiba Infinity Castle",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/08/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle-2025-ดาบพิฆาตอสูร-ภาคปราสาทไร้ขอบเขต.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/08/Demon-Slayer-Kimetsu-no-Yaiba-Infinity-Castle-2025-ดาบพิฆาตอสูร-ภาคปราสาทไร้ขอบเขต.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=9443cac429205c686f798ffb&b=6608",
    "sourceType": "embed",
    "description": "ดูหนัง Demon Slayer Kimetsu no Yaiba Infinity Castle  ดาบพิฆาตอสูร ภาคปราสาทไร้ขอบเขต  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-36373"
  },
  {
    "titleTh": "Love in Slow Motion",
    "titleEn": "Love in Slow Motion",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Love-in-Slow-Motion-2026-รักช้าๆ-แต่มาชัวร์.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Love-in-Slow-Motion-2026-รักช้าๆ-แต่มาชัวร์.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=97d7fcaa182ef743c884318f&b=2663",
    "sourceType": "embed",
    "description": "ดูหนัง Love in Slow Motion  รักช้าๆ แต่มาชัวร์  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40162"
  },
  {
    "titleTh": "Sesame Street",
    "titleEn": "Sesame Street",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/Sesame-Street-2026-เมื่อพายุมาเยือน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/Sesame-Street-2026-เมื่อพายุมาเยือน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=85d3bf8cce7125546e09104c&b=9388",
    "sourceType": "embed",
    "description": "ดูหนัง Sesame Street  เมื่อพายุมาเยือน  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40272"
  },
  {
    "titleTh": "Raakaasa",
    "titleEn": "Raakaasa",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Raakaasa-2026-รักหลอนซ่อนอสูร.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Raakaasa-2026-รักหลอนซ่อนอสูร.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=aa24385473dab99cf446fea4&b=1752",
    "sourceType": "embed",
    "description": "ดูหนัง Raakaasa  รักหลอนซ่อนอสูร  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39314"
  },
  {
    "titleTh": "The Truthers",
    "titleEn": "The Truthers",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Truthers-2026-ผู้แสวงหาความจริง.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Truthers-2026-ผู้แสวงหาความจริง.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=cfb412e3e0f6467ce473e05c&b=8795",
    "sourceType": "embed",
    "description": "ดูหนัง The Truthers  ผู้แสวงหาความจริง  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40155"
  },
  {
    "titleTh": "Big Chicken A Fast Food Conspiracy",
    "titleEn": "Big Chicken A Fast Food Conspiracy",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/08/Big-Chicken-A-Fast-Food-Conspiracy-2026-ธุรกิจฟาร์มไก่-แผนสมคบคิดวงการฟาสต์ฟู้ด.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/08/Big-Chicken-A-Fast-Food-Conspiracy-2026-ธุรกิจฟาร์มไก่-แผนสมคบคิดวงการฟาสต์ฟู้ด.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=8d34519c32fc239095e80ffa&b=6078",
    "sourceType": "embed",
    "description": "ดูหนัง Big Chicken A Fast Food Conspiracy  ธุรกิจฟาร์มไก่ แผนสมคบคิดวงการฟาสต์ฟู้ด  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40290"
  },
  {
    "titleTh": "Shipwrecked Nightmare at Sea",
    "titleEn": "Shipwrecked Nightmare at Sea",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Shipwrecked-Nightmare-at-Sea-2026-คดีลักพาตัวมิเกล-อังเฮล-บลังโก-48-ชั่วโมงที่เปลี่ยนสเปน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Shipwrecked-Nightmare-at-Sea-2026-คดีลักพาตัวมิเกล-อังเฮล-บลังโก-48-ชั่วโมงที่เปลี่ยนสเปน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=d3a413e68cb4c2e41f641246&b=7980",
    "sourceType": "embed",
    "description": "ดูหนัง Shipwrecked Nightmare at Sea  เรืออับปาง ฝันร้ายกลางทะเล  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40019"
  },
  {
    "titleTh": "72 Hours",
    "titleEn": "72 Hours",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/72-Hours-2026-72-ชั่วโมงในไมแอมี.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/72-Hours-2026-72-ชั่วโมงในไมแอมี.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=a5201ce21370b948dd00bda9&b=1608",
    "sourceType": "embed",
    "description": "ดูหนัง 72 Hours  72 ชั่วโมงในไมแอมี  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40165"
  },
  {
    "titleTh": "23000 Lives",
    "titleEn": "23000 Lives",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/23000-Lives-2026-23000-ชีวิต.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/23000-Lives-2026-23000-ชีวิต.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=8bd6a473a5571012b175e539&b=9589",
    "sourceType": "embed",
    "description": "ดูหนัง 23000 Lives  23000 ชีวิต  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40093"
  },
  {
    "titleTh": "Desire",
    "titleEn": "Desire",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Desire-2026-ปรารถนาต้องห้าม.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Desire-2026-ปรารถนาต้องห้าม.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=31a94ad04e9a1fcf488e1431&b=4835",
    "sourceType": "embed",
    "description": "ดูหนัง Desire  ปรารถนาต้องห้าม  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40097"
  },
  {
    "titleTh": "A Pale View of Hills",
    "titleEn": "A Pale View of Hills",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/A-Pale-View-of-Hills-ลางรักที่กลางเขา-2025.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/A-Pale-View-of-Hills-ลางรักที่กลางเขา-2025.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=482237f52907df6af3783190&b=7124",
    "sourceType": "embed",
    "description": "ดูหนัง A Pale View of Hills  ลางรักที่กลางเขา  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39535"
  },
  {
    "titleTh": "Avatar Fire and Ash",
    "titleEn": "Avatar Fire and Ash",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/12/Avatar-Fire-and-Ash-2025-อวตาร-อัคนีและธุลีดิน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/12/Avatar-Fire-and-Ash-2025-อวตาร-อัคนีและธุลีดิน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=5e7b8487a8df19cf3465a40c&b=1996",
    "sourceType": "embed",
    "description": "ดูหนัง Avatar Fire and Ash  อวตาร อัคนีและธุลีดิน  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-37435"
  },
  {
    "titleTh": "Double Happiness",
    "titleEn": "Double Happiness",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Double-Happiness-2025-วิวาห์สุขสันต์คูณสอง.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Double-Happiness-2025-วิวาห์สุขสันต์คูณสอง.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=1e620250d0a94402142ca659&b=3083",
    "sourceType": "embed",
    "description": "ดูหนัง Double Happiness  วิวาห์สุขสันต์คูณสอง  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39671"
  },
  {
    "titleTh": "Oh My Ghost Becoming Li Hu",
    "titleEn": "Oh My Ghost Becoming Li Hu",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Oh-My-Ghost-Becoming-Li-Hu-2025-หอแต๋วแตกแหกหลีหู.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Oh-My-Ghost-Becoming-Li-Hu-2025-หอแต๋วแตกแหกหลีหู.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=4f41fa5740c7f2216c49fa7c&b=1246",
    "sourceType": "embed",
    "description": "ดูหนัง Oh My Ghost Becoming Li Hu  หอแต๋วแตกแหกหลีหู  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39633"
  },
  {
    "titleTh": "Love on Trial",
    "titleEn": "Love on Trial",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Love-on-Trial-2025-สู้เพื่อรัก-สู้เพื่อฝัน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Love-on-Trial-2025-สู้เพื่อรัก-สู้เพื่อฝัน.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=74744f86c9da25ea436dc8e6&b=3471",
    "sourceType": "embed",
    "description": "ดูหนัง Love on Trial  สู้เพื่อรัก สู้เพื่อฝัน  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39732"
  },
  {
    "titleTh": "Song Sung Blue",
    "titleEn": "Song Sung Blue",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Song-Sung-Blue-2025-บทเพลงสีเศร้า.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Song-Sung-Blue-2025-บทเพลงสีเศร้า.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=0cf5a335be91e7e0431287af&b=7143",
    "sourceType": "embed",
    "description": "ดูหนัง Song Sung Blue  บทเพลงสีเศร้า  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39965"
  },
  {
    "titleTh": "Per Aspera Ad Astra",
    "titleEn": "Per Aspera Ad Astra",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Per-Aspera-Ad-Astra-2026-ฝ่าห้วงฝันสู่ดวงดาว.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Per-Aspera-Ad-Astra-2026-ฝ่าห้วงฝันสู่ดวงดาว.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=3ce26578a21ba53704a66843&b=7645",
    "sourceType": "embed",
    "description": "ดูหนัง Per Aspera Ad Astra  ฝ่าห้วงฝันสู่ดวงดาว  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39668"
  },
  {
    "titleTh": "Folk Soul Ferryman",
    "titleEn": "Folk Soul Ferryman",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/09/Folk-Soul-Ferryman-2025-นักสืบสื่อวิญญาณ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/09/Folk-Soul-Ferryman-2025-นักสืบสื่อวิญญาณ.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=0d0295d1d53937b4be7f1712&b=6997",
    "sourceType": "embed",
    "description": "ดูหนัง Folk Soul Ferryman  นักสืบสื่อวิญญาณ  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-36578"
  },
  {
    "titleTh": "Devil River",
    "titleEn": "Devil River",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2025/08/Devil-River-2025-ผีพรายน้ำ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2025/08/Devil-River-2025-ผีพรายน้ำ.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=f7cde7f73d2cfaff65ebc557&b=2275",
    "sourceType": "embed",
    "description": "ดูหนัง Devil River  ผีพรายน้ำ  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-36421"
  },
  {
    "titleTh": "Hamnet",
    "titleEn": "Hamnet",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/03/Hamnet-2025-แฮมเน็ต.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/03/Hamnet-2025-แฮมเน็ต.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=f167d41b27fb2da4999a24b2&b=4619",
    "sourceType": "embed",
    "description": "ดูหนัง Hamnet  แฮมเน็ต  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38342"
  },
  {
    "titleTh": "Sentimental Value",
    "titleEn": "Sentimental Value",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Sentimental-Value-2025-ถ้าตอนนั้นยังมีเรา.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Sentimental-Value-2025-ถ้าตอนนั้นยังมีเรา.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=573599d593f95839e9053a20&b=7830",
    "sourceType": "embed",
    "description": "ดูหนัง Sentimental Value  ถ้าตอนนั้นยังมีเรา  24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-40064"
  },
  {
    "titleTh": "About a Place in the Kinki Region",
    "titleEn": "About a Place in the Kinki Region",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/03/About-a-Place-in-the-Kinki-Region-2025-อาถรรพ์คิงคิ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/03/About-a-Place-in-the-Kinki-Region-2025-อาถรรพ์คิงคิ.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=f2d2c033d4fb0f329af08333&b=5072",
    "sourceType": "embed",
    "description": "ดูหนัง About a Place in the Kinki Region  อาถรรพ์คิงคิ  24-.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-38283"
  },
  {
    "titleTh": "Anemone",
    "titleEn": "Anemone",
    "year": 2025,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Anemone-2025-อะนีโมนี.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Anemone-2025-อะนีโมนี.png",
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=df8ca85b0a06eec230a7431d&b=5696",
    "sourceType": "embed",
    "description": "ดูหนัง Anemone   24-S.COM ภาพคมชัดระดับ Full HD มาสเตอร์ อัปเดตใหม่ล่าสุดจาก 24-HDX ไม่มีโฆษณากวนใจ",
    "rating": 8.7,
    "genres": [
      "แอคชั่น",
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "1 ชม. 48 นาที",
    "trailerUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "24hdx-39439"
  },
  {
    "titleTh": "Toy Story 5",
    "titleEn": "Toy Story 5",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Toy-Story-5-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Toy-Story-5-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=3cgBsLr3L5",
    "sourceType": "embed",
    "description": "Toy Story 5 (2026) ทอย สตอรี่ 5.",
    "rating": 7.4,
    "genres": [
      "การ์ตูน"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-toy-story-5-5-2026"
  },
  {
    "titleTh": "Moana",
    "titleEn": "Moana",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Moana-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Moana-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=NKOEqeUUfI",
    "sourceType": "embed",
    "description": "Moana (2026) โมอาน่า.",
    "rating": 5.7,
    "genres": [
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-moana-2026"
  },
  {
    "titleTh": "Evil Dead Burn",
    "titleEn": "Evil Dead Burn",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Evil-Dead-Burn-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Evil-Dead-Burn-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=winkTbLYF4",
    "sourceType": "embed",
    "description": "Evil Dead Burn (2026) ผีอมตะแผดเผา.",
    "rating": 6.7,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-evil-dead-burn-2026"
  },
  {
    "titleTh": "Backrooms",
    "titleEn": "Backrooms",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Backrooms-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Backrooms-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=PLzYlzdPs1",
    "sourceType": "embed",
    "description": "Backrooms (2026) นรกห้องลับ.",
    "rating": 7.1,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-backrooms-2026"
  },
  {
    "titleTh": "Panda Plan 2 The Magical Tribe",
    "titleEn": "Panda Plan 2 The Magical Tribe",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Panda-Plan-2-The-Magical-Tribe-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Panda-Plan-2-The-Magical-Tribe-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=z_RcnXGweB",
    "sourceType": "embed",
    "description": "Panda Plan 2 The Magical Tribe (2026) แพนด้าเด้ง ยกกำลังฟัด.",
    "rating": 6.4,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-panda-plan-2-the-magical-tribe-2026"
  },
  {
    "titleTh": "Ikka",
    "titleEn": "Ikka",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Ikka-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Ikka-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=GzwRkjGedX",
    "sourceType": "embed",
    "description": "Ikka (2026) ไพ่ตาย ทนายเหนือคน.",
    "rating": 6.3,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-ikka-2026"
  },
  {
    "titleTh": "Nothing to Lose",
    "titleEn": "Nothing to Lose",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Nothing-to-Lose-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Nothing-to-Lose-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=Y1HAilPq6P",
    "sourceType": "embed",
    "description": "Nothing to Lose (2026) เมื่อไม่มีอะไรจะเสีย.",
    "rating": 5.5,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-nothing-to-lose-2026"
  },
  {
    "titleTh": "Shipwrecked Nightmare at Sea",
    "titleEn": "Shipwrecked Nightmare at Sea",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Shipwrecked-Nightmare-at-Sea-2026-1.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Shipwrecked-Nightmare-at-Sea-2026-1.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=zaNqv5Wajd",
    "sourceType": "embed",
    "description": "Shipwrecked Nightmare at Sea (2026) เรืออับปาง ฝันร้ายกลางทะเล.",
    "rating": 6.5,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-shipwrecked-nightmare-at-sea-2026"
  },
  {
    "titleTh": "Passenger",
    "titleEn": "Passenger",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Passenger-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Passenger-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=nND2VHUjDI",
    "sourceType": "embed",
    "description": "Passenger (2026) ผู้ร่วมทางตาย.",
    "rating": 5.6,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-passenger-2026"
  },
  {
    "titleTh": "Lee Cronin’s The Mummy",
    "titleEn": "Lee Cronin’s The Mummy",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Lee-Cronins-The-Mummy-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Lee-Cronins-The-Mummy-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=eqSJRXIWnB",
    "sourceType": "embed",
    "description": "Lee Cronin’s The Mummy (2026) ลี โครนิน เดอะ มัมมี่.",
    "rating": 6.3,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-lee-cronin-s-the-mummy-2026"
  },
  {
    "titleTh": "Minions & Monsters",
    "titleEn": "Minions & Monsters",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Minions-Monsters-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Minions-Monsters-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=akryU7YUC3",
    "sourceType": "embed",
    "description": "Minions & Monsters (2026) มินเนี่ยน & มอนสเตอร์.",
    "rating": 6.6,
    "genres": [
      "การ์ตูน"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-minions-monsters-2026"
  },
  {
    "titleTh": "พี่นาค",
    "titleEn": "พี่นาค",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Pee-Nak-5-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Pee-Nak-5-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=0BbM_N3N1L",
    "sourceType": "embed",
    "description": "พี่นาค 5 (2026) Pee Nak 5.",
    "rating": 6.1,
    "genres": [
      "ตลกคอมเมดี้",
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-5-pee-nak-5-2026"
  },
  {
    "titleTh": "Supergirl",
    "titleEn": "Supergirl",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Supergirl-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Supergirl-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=59V0KgRpRr",
    "sourceType": "embed",
    "description": "Supergirl (2026) ซูเปอร์เกิร์ล.",
    "rating": 6.1,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-supergirl-2026"
  },
  {
    "titleTh": "Enola Holmes 3",
    "titleEn": "Enola Holmes 3",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Enola-Holmes-3-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Enola-Holmes-3-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=A4iNBRzc1i",
    "sourceType": "embed",
    "description": "Enola Holmes 3 (2026) เอโนลา โฮล์มส์ 3.",
    "rating": 5.9,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-enola-holmes-3-3-2026"
  },
  {
    "titleTh": "Ready Or Not 2 Here I Come",
    "titleEn": "Ready Or Not 2 Here I Come",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Ready-Or-Not-2-Here-I-Come-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Ready-Or-Not-2-Here-I-Come-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=SLbLCaiWVG",
    "sourceType": "embed",
    "description": "Ready Or Not 2 Here I Come (2026) เกมพร้อมตาย 2.",
    "rating": 6.7,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-ready-or-not-2-here-i-come-2-2026"
  },
  {
    "titleTh": "The Death of Robin Hood",
    "titleEn": "The Death of Robin Hood",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/07/The-Death-of-Robin-Hood-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/07/The-Death-of-Robin-Hood-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=3gB6FJej8N",
    "sourceType": "embed",
    "description": "The Death of Robin Hood (2026) บันทึกสุดท้ายของจอมโจร.",
    "rating": 6.4,
    "genres": [
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-death-of-robin-hood-2026"
  },
  {
    "titleTh": "Hungry",
    "titleEn": "Hungry",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Hungry-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Hungry-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=bUuOP6TdoK",
    "sourceType": "embed",
    "description": "Hungry (2026) มันเด้งขึ้นมาแดก.",
    "rating": 5.0,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-hungry-2026"
  },
  {
    "titleTh": "Little Brother",
    "titleEn": "Little Brother",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Little-Brother-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/07/Little-Brother-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=6blnQFly6y",
    "sourceType": "embed",
    "description": "Little Brother (2026) บทเรียนจากรุ่นน้อง.",
    "rating": 5.4,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-little-brother-2026"
  },
  {
    "titleTh": "The Sheep Detectives",
    "titleEn": "The Sheep Detectives",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/The-Sheep-Detectives-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/The-Sheep-Detectives-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=yVIjjT6mxt",
    "sourceType": "embed",
    "description": "The Sheep Detectives (2026) แก๊งแกะรอยยอดนักสืบ.",
    "rating": 7.6,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-sheep-detectives-2026"
  },
  {
    "titleTh": "กิ่งแก้ว",
    "titleEn": "กิ่งแก้ว",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/King-Kaew-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/King-Kaew-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=nVexffz41P",
    "sourceType": "embed",
    "description": "กิ่งแก้ว (2026) King Kaew.",
    "rating": 6.3,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-king-kaew-2026"
  },
  {
    "titleTh": "The Furious",
    "titleEn": "The Furious",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/The-Furious-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/The-Furious-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=pCEeRbwh5l",
    "sourceType": "embed",
    "description": "The Furious (2026) คนเดือดระห่ำ.",
    "rating": 7.4,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-furious-2026"
  },
  {
    "titleTh": "Mortal Kombat II",
    "titleEn": "Mortal Kombat II",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Mortal-Kombat-II-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Mortal-Kombat-II-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=XDIakN0Jwx",
    "sourceType": "embed",
    "description": "Mortal Kombat II (2026) มอร์ทัล คอมแบท 2.",
    "rating": 7.0,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-mortal-kombat-ii-2-2026"
  },
  {
    "titleTh": "Swords of Legends Soul and Blade",
    "titleEn": "Swords of Legends Soul and Blade",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Swords-of-Legends-Soul-and-Blade-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Swords-of-Legends-Soul-and-Blade-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=RtRuiRaMX0",
    "sourceType": "embed",
    "description": "Swords of Legends Soul and Blade (2026) กระบี่แห่งตำนาน จิตวิญญาณและคมดาบ.",
    "rating": 7.1,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-swords-of-legends-soul-and-blade-2026"
  },
  {
    "titleTh": "Detective Dee Buddhas Wrath",
    "titleEn": "Detective Dee Buddhas Wrath",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Detective-Dee-Buddhas-Wrath-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Detective-Dee-Buddhas-Wrath-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=12ymmZsWZV",
    "sourceType": "embed",
    "description": "Detective Dee Buddhas Wrath (2026) ตี๋เหรินเจี๋ย เจดีย์สู่สวรรค์.",
    "rating": 6.3,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-detective-dee-buddhas-wrath-2026"
  },
  {
    "titleTh": "Husbands in Action",
    "titleEn": "Husbands in Action",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Husbands-in-Action-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Husbands-in-Action-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=i7AVTqPHX0",
    "sourceType": "embed",
    "description": "Husbands in Action (2026) คุณสามีส์ช่วยด้วย!.",
    "rating": 6.5,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-husbands-in-action-2026"
  },
  {
    "titleTh": "Voicemails for Isabelle",
    "titleEn": "Voicemails for Isabelle",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Voicemails-for-Isabelle-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Voicemails-for-Isabelle-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=8ysgYVWXtM",
    "sourceType": "embed",
    "description": "Voicemails for Isabelle (2026) ข้อความเสียงแด่อิซาเบล.",
    "rating": 5.6,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-voicemails-for-isabelle-2026"
  },
  {
    "titleTh": "Per Aspera Ad Astra",
    "titleEn": "Per Aspera Ad Astra",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Per-Aspera-Ad-Astra-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Per-Aspera-Ad-Astra-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=ItCIv_Sgzn",
    "sourceType": "embed",
    "description": "Per Aspera Ad Astra (2026) ฝ่าห้วงฝันสู่ดวงดาว.",
    "rating": 6.5,
    "genres": [
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-per-aspera-ad-astra-2026"
  },
  {
    "titleTh": "Your Fault London",
    "titleEn": "Your Fault London",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Your-Fault-London-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Your-Fault-London-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=nybQHmFzb_",
    "sourceType": "embed",
    "description": "Your Fault London (2026) คำขอโทษ ลอนดอน 2.",
    "rating": 6.3,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-your-fault-london-2-2026"
  },
  {
    "titleTh": "Never Change",
    "titleEn": "Never Change",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Never-Change-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Never-Change-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=FCmB1YfPSI",
    "sourceType": "embed",
    "description": "Never Change (2026).",
    "rating": 7.8,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-never-change-2026"
  },
  {
    "titleTh": "Star Wars The Mandalorian and Grogu",
    "titleEn": "Star Wars The Mandalorian and Grogu",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Star-Wars-The-Mandalorian-and-Grogu-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Star-Wars-The-Mandalorian-and-Grogu-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=nbJkcB4dt1",
    "sourceType": "embed",
    "description": "Star Wars The Mandalorian and Grogu (2026) แมนดาลอเรี่ยนและโกรกู.",
    "rating": 7.1,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-star-wars-the-mandalorian-and-grogu-2026"
  },
  {
    "titleTh": "Blades Of The Guardians Wind Rises In The Desert",
    "titleEn": "Blades Of The Guardians Wind Rises In The Desert",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Blades-Of-The-Guardians-Wind-Rises-In-The-Desert-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Blades-Of-The-Guardians-Wind-Rises-In-The-Desert-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=YjcvJ8Obso",
    "sourceType": "embed",
    "description": "Blades Of The Guardians Wind Rises In The Desert (2026) ยอดยุทธดาบไร้พ่าย.",
    "rating": 7.1,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-blades-of-the-guardians-wind-rises-in-the-desert-2026"
  },
  {
    "titleTh": "Disclosure Day",
    "titleEn": "Disclosure Day",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Disclosure-Day-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Disclosure-Day-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=3WgTo5u2Ta",
    "sourceType": "embed",
    "description": "Disclosure Day (2026) วันเปิดโปง ไขปริศนาลวงโลก.",
    "rating": 6.8,
    "genres": [
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-disclosure-day-2026"
  },
  {
    "titleTh": "Over Your Dead Body",
    "titleEn": "Over Your Dead Body",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Over-Your-Dead-Body-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Over-Your-Dead-Body-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=6bYi2NOFq8",
    "sourceType": "embed",
    "description": "Over Your Dead Body (2026) ร่วมหอ…ลงโลง.",
    "rating": 6.3,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-over-your-dead-body-2026"
  },
  {
    "titleTh": "Maternal Instinct Taylor Parker",
    "titleEn": "Maternal Instinct Taylor Parker",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Maternal-Instinct-Taylor-Parker-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Maternal-Instinct-Taylor-Parker-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=NQFBxzMl_V",
    "sourceType": "embed",
    "description": "Maternal Instinct Taylor Parker (2026) สัญชาตญาณของแม่ ปริศนาคดีเทย์เลอร์ พาร์เกอร์.",
    "rating": 7.4,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-maternal-instinct-taylor-parker-2026"
  },
  {
    "titleTh": "Double Happiness",
    "titleEn": "Double Happiness",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Double-Happiness-2025.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Double-Happiness-2025.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=wmhEc5RGzl",
    "sourceType": "embed",
    "description": "Double Happiness (2026) วิวาห์สุขสันต์คูณสอง.",
    "rating": 5.6,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-double-happiness-2026"
  },
  {
    "titleTh": "Scary Movie",
    "titleEn": "Scary Movie",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Scary-Movie-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Scary-Movie-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=fsqNT9Veb8",
    "sourceType": "embed",
    "description": "Scary Movie (2026) ยำหนังจี้.",
    "rating": 5.5,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-scary-movie-2026"
  },
  {
    "titleTh": "The Amazing Digital Circus The Last Act",
    "titleEn": "The Amazing Digital Circus The Last Act",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/The-Amazing-Digital-Circus-The-Last-Act-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/The-Amazing-Digital-Circus-The-Last-Act-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=blfKIyDs61",
    "sourceType": "embed",
    "description": "The Amazing Digital Circus The Last Act (2026).",
    "rating": 8.1,
    "genres": [
      "การ์ตูน"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-amazing-digital-circus-the-last-act-2026"
  },
  {
    "titleTh": "Masters of the Universe",
    "titleEn": "Masters of the Universe",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Masters-of-the-Universe-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Masters-of-the-Universe-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=JNe_0jJlds",
    "sourceType": "embed",
    "description": "Masters of the Universe (2026) นักรบเจ้าจักรวาล.",
    "rating": 7.1,
    "genres": [
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-masters-of-the-universe-2026"
  },
  {
    "titleTh": "Office Romance",
    "titleEn": "Office Romance",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Office-Romance-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Office-Romance-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=M8Mw1BN3r6",
    "sourceType": "embed",
    "description": "Office Romance (2026) ปิ๊งรักในออฟฟิศ.",
    "rating": 6.0,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-office-romance-2026"
  },
  {
    "titleTh": "Maa Behen",
    "titleEn": "Maa Behen",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Maa-Behen-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Maa-Behen-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=XO9qMw_ZCd",
    "sourceType": "embed",
    "description": "Maa Behen (2026) เรื่องวุ่นๆ คุณแม่กับลูกสาว.",
    "rating": 5.6,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-maa-behen-2026"
  },
  {
    "titleTh": "The Marked Woman",
    "titleEn": "The Marked Woman",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/The-Marked-Woman-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/The-Marked-Woman-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=zJos4LwBU6",
    "sourceType": "embed",
    "description": "The Marked Woman (2026) หญิงนิรนามกับมลทินปริศนา.",
    "rating": 5.6,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-marked-woman-2026"
  },
  {
    "titleTh": "Mexico 86",
    "titleEn": "Mexico 86",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Mexico-86-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Mexico-86-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=GAjcjHKaUp",
    "sourceType": "embed",
    "description": "Mexico 86 (2026) เม็กซิโก 1986.",
    "rating": 6.4,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-1986-2026"
  },
  {
    "titleTh": "Hoppers",
    "titleEn": "Hoppers",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Hoppers-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Hoppers-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=4grMqzibBP",
    "sourceType": "embed",
    "description": "Hoppers (2026) เด้งโดด เปลี่ยนโหมดเป็นบีเวอร์.",
    "rating": 5.6,
    "genres": [
      "การ์ตูน"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-hoppers-2026"
  },
  {
    "titleTh": "In The Grey",
    "titleEn": "In The Grey",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/In-The-Grey-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/In-The-Grey-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=tQipUw38kJ",
    "sourceType": "embed",
    "description": "In The Grey (2026) เหลี่ยมจารชน คนเหนือเทา.",
    "rating": 6.4,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-in-the-grey-2026"
  },
  {
    "titleTh": "พนักงานใหม่ (โปรดรับไว้พิจารณา)",
    "titleEn": "พนักงานใหม่ (โปรดรับไว้พิจารณา)",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Human-Resource-2025.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/Human-Resource-2025.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=AS3Zg7M2_a",
    "sourceType": "embed",
    "description": "พนักงานใหม่ (โปรดรับไว้พิจารณา) (2026) Human Resource.",
    "rating": 6.8,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-human-resource-2026"
  },
  {
    "titleTh": "The Legend Hunters",
    "titleEn": "The Legend Hunters",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/The-Legend-Hunters-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/The-Legend-Hunters-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=HgfVvLDUCT",
    "sourceType": "embed",
    "description": "The Legend Hunters (2026).",
    "rating": 5.1,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-legend-hunters-2026"
  },
  {
    "titleTh": "The Convenience Store",
    "titleEn": "The Convenience Store",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/06/The-Convenience-Store-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/06/The-Convenience-Store-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=JtMtPa0VlU",
    "sourceType": "embed",
    "description": "The Convenience Store (2026) มันแอบอยู่ในร้าน.",
    "rating": 5.4,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-convenience-store-2026"
  },
  {
    "titleTh": "Scare Out",
    "titleEn": "Scare Out",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Scare-Out-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Scare-Out-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=U_EcNE6lQB",
    "sourceType": "embed",
    "description": "Scare Out (2026) เกมล่าทรชน คนล่าคน.",
    "rating": 5.5,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-scare-out-2026"
  },
  {
    "titleTh": "Project Hail Mary",
    "titleEn": "Project Hail Mary",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Project-Hail-Mary-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Project-Hail-Mary-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=OS8krUFSmH",
    "sourceType": "embed",
    "description": "Project Hail Mary (2026) ภารกิจกู้สุริยะ.",
    "rating": 5.6,
    "genres": [
      "แฟนตาซี Sci-Fi"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-project-hail-mary-2026"
  },
  {
    "titleTh": "They Will Kill You",
    "titleEn": "They Will Kill You",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/They-Will-Kill-You-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/They-Will-Kill-You-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=KXEWrWNyOg",
    "sourceType": "embed",
    "description": "They Will Kill You (2026) พวกมันจะฆ่าแก.",
    "rating": 6.5,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-they-will-kill-you-2026"
  },
  {
    "titleTh": "The Mandalorian and Grogu",
    "titleEn": "The Mandalorian and Grogu",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/The-Mandalorian-and-Grogu-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/The-Mandalorian-and-Grogu-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=W6LpiX1eHM",
    "sourceType": "embed",
    "description": "The Mandalorian and Grogu (2026) แมนดาลอเรี่ยนและโกรกู.",
    "rating": 7.1,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-mandalorian-and-grogu-2026"
  },
  {
    "titleTh": "Ladies First",
    "titleEn": "Ladies First",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Ladies-First-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Ladies-First-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=FCZxj0ZYwV",
    "sourceType": "embed",
    "description": "Ladies First (2026) ตื่นมาอีกที โลกนี้ผู้หญิงใหญ่.",
    "rating": 5.8,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-ladies-first-2026"
  },
  {
    "titleTh": "The Bride",
    "titleEn": "The Bride",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/The-Bride-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/The-Bride-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=2XwVX18S3c",
    "sourceType": "embed",
    "description": "The Bride (2026) เจ้าสาว!.",
    "rating": 6.9,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-bride-2026"
  },
  {
    "titleTh": "Ustaad Bhagat Singh",
    "titleEn": "Ustaad Bhagat Singh",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Ustaad-Bhagat-Singh-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Ustaad-Bhagat-Singh-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=e_niqRli3K",
    "sourceType": "embed",
    "description": "Ustaad Bhagat Singh (2026) ภคัต สิงห์ ยอดคนผดุงความยุติธรรม.",
    "rating": 5.6,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-ustaad-bhagat-singh-2026"
  },
  {
    "titleTh": "Tom Clancy's Jack Ryan Ghost War",
    "titleEn": "Tom Clancy's Jack Ryan Ghost War",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Tom-Clancys-Jack-Ryan-Ghost-War-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Tom-Clancys-Jack-Ryan-Ghost-War-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=YjpB6hPz_o",
    "sourceType": "embed",
    "description": "Tom Clancy's Jack Ryan Ghost War (2026) ทอม แคลนซีส์ สายลับ แจ็ค ไรอัน: ยุทธการเงาจารชน.",
    "rating": 5.9,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-tom-clancy-s-jack-ryan-ghost-war-2026"
  },
  {
    "titleTh": "Mother Mary",
    "titleEn": "Mother Mary",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Mother-Mary-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Mother-Mary-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=DiekwP33Gi",
    "sourceType": "embed",
    "description": "Mother Mary (2026) มาเธอร์ แมรี่.",
    "rating": 5.9,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-mother-mary-2026"
  },
  {
    "titleTh": "โอมุคาเดะ",
    "titleEn": "โอมุคาเดะ",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Omukade-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Omukade-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=XJVbXthLMX",
    "sourceType": "embed",
    "description": "โอมุคาเดะ (2026) Omukade.",
    "rating": 6.1,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-omukade-2026"
  },
  {
    "titleTh": "พนอ",
    "titleEn": "พนอ",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Panor-2-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Panor-2-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=eLenIBqWrE",
    "sourceType": "embed",
    "description": "พนอ 2 (2026) Panor 2.",
    "rating": 6.6,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-2-panor-2-2026"
  },
  {
    "titleTh": "Kartavya",
    "titleEn": "Kartavya",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Kartavya-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Kartavya-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=il58OPPPiw",
    "sourceType": "embed",
    "description": "Kartavya (2026) หน้าที่เหนือชีวิต.",
    "rating": 6.2,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-kartavya-2026"
  },
  {
    "titleTh": "Pegasus 3",
    "titleEn": "Pegasus 3",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Pegasus-3-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Pegasus-3-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=3_F7FVhxds",
    "sourceType": "embed",
    "description": "Pegasus 3 (2026).",
    "rating": 6.3,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-pegasus-3-2026"
  },
  {
    "titleTh": "No Place to Be Single",
    "titleEn": "No Place to Be Single",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/No-Place-to-Be-Single-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/No-Place-to-Be-Single-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=eKz_2jMAtw",
    "sourceType": "embed",
    "description": "No Place to Be Single (2026) เมืองนี้ไม่มีที่ให้คนโสด.",
    "rating": 5.1,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-no-place-to-be-single-2026"
  },
  {
    "titleTh": "Do Deewane Seher Mein",
    "titleEn": "Do Deewane Seher Mein",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Do-Deewane-Seher-Mein-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Do-Deewane-Seher-Mein-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=Xa2vWRQfU7",
    "sourceType": "embed",
    "description": "Do Deewane Seher Mein (2026) สองหัวใจในเมืองใหญ่.",
    "rating": 5.6,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-do-deewane-seher-mein-2026"
  },
  {
    "titleTh": "The Punisher One Last Kill",
    "titleEn": "The Punisher One Last Kill",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/The-Punisher-One-Last-Kill-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/The-Punisher-One-Last-Kill-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=H_jDETfS4_",
    "sourceType": "embed",
    "description": "The Punisher One Last Kill (2026) เดอะ พันนิชเชอร์: ฆ่าทิ้งทวน.",
    "rating": 7.6,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-punisher-one-last-kill-2026"
  },
  {
    "titleTh": "Remarkably Bright Creatures",
    "titleEn": "Remarkably Bright Creatures",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Remarkably-Bright-Creatures-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Remarkably-Bright-Creatures-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=dVJCQdWmTh",
    "sourceType": "embed",
    "description": "Remarkably Bright Creatures (2026) อควาเรียมสำหรับคน หมึก และสิ่งของ.",
    "rating": 7.9,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-remarkably-bright-creatures-2026"
  },
  {
    "titleTh": "เลือดรักนักฆ่า",
    "titleEn": "เลือดรักนักฆ่า",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/My-Dearest-Assassin-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/My-Dearest-Assassin-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=Iy5ynxq34u",
    "sourceType": "embed",
    "description": "เลือดรักนักฆ่า (2026) My Dearest Assassin.",
    "rating": 5.9,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-my-dearest-assassin-2026"
  },
  {
    "titleTh": "Evil’s Return",
    "titleEn": "Evil’s Return",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Evils-Return-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Evils-Return-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=wBgx1yVSzf",
    "sourceType": "embed",
    "description": "Evil’s Return (2026) การกลับมาของปีศาจร้าย.",
    "rating": 9.2,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-evil-s-return-2026"
  },
  {
    "titleTh": "Swapped",
    "titleEn": "Swapped",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Swapped-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Swapped-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=ySkZSzPwBe",
    "sourceType": "embed",
    "description": "Swapped (2026) สลับร่างผจญภัย.",
    "rating": 6.2,
    "genres": [
      "การ์ตูน"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-swapped-2026"
  },
  {
    "titleTh": "The Devil Wears Prada 2",
    "titleEn": "The Devil Wears Prada 2",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/The-Devil-Wears-Prada-2-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/The-Devil-Wears-Prada-2-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=t8THX5q4xK",
    "sourceType": "embed",
    "description": "The Devil Wears Prada 2 (2026) นางมารสวมปราด้า 2.",
    "rating": 6.8,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-devil-wears-prada-2-2-2026"
  },
  {
    "titleTh": "Je m’appelle Agneta",
    "titleEn": "Je m’appelle Agneta",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Je-mappelle-Agneta-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/05/Je-mappelle-Agneta-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=TXT1ULwN0T",
    "sourceType": "embed",
    "description": "Je m’appelle Agneta (2026) ฉันชื่ออักเนียต้า.",
    "rating": 6.3,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-je-m-appelle-agneta-2026"
  },
  {
    "titleTh": "The Drama",
    "titleEn": "The Drama",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/The-Drama-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/The-Drama-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=ECPdAC_u_Q",
    "sourceType": "embed",
    "description": "The Drama (2026) แต่งก็บ้า..ดราม่าเบอร์นี้.",
    "rating": 5.6,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-drama-2026"
  },
  {
    "titleTh": "Normal",
    "titleEn": "Normal",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Normal-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Normal-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=OgEs4CyK_g",
    "sourceType": "embed",
    "description": "Normal (2026) เมืองธรรมดานรกเรียกพ่อ.",
    "rating": 6.7,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-normal-2026"
  },
  {
    "titleTh": "GOAT",
    "titleEn": "GOAT",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/GOAT-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/GOAT-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=BNrnF_rQsd",
    "sourceType": "embed",
    "description": "GOAT (2026) คุณแพะหัวใจไม่แพ้.",
    "rating": 6.2,
    "genres": [
      "การ์ตูน"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-goat-2026"
  },
  {
    "titleTh": "Apex",
    "titleEn": "Apex",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Apex-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Apex-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=roFpCwzUxT",
    "sourceType": "embed",
    "description": "Apex (2026) ห่วงโซ่สังหาร.",
    "rating": 6.2,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-apex-2026"
  },
  {
    "titleTh": "Vengeance",
    "titleEn": "Vengeance",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Vengeance-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Vengeance-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=_TPyMdfjd0",
    "sourceType": "embed",
    "description": "Vengeance (2026) ปฏิบัติการเดือดเลือดล้างเลือด.",
    "rating": 5.3,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-vengeance-2026"
  },
  {
    "titleTh": "180",
    "titleEn": "180",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/180-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/180-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=n2wgArnNea",
    "sourceType": "embed",
    "description": "180 (2026).",
    "rating": 5.6,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-180-2026"
  },
  {
    "titleTh": "Scream 7",
    "titleEn": "Scream 7",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/03/Scream-7-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/03/Scream-7-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=DrfMqG2eGb",
    "sourceType": "embed",
    "description": "Scream 7 (2026) หวีดสุดขีด 7.",
    "rating": 5.9,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-scream-7-7-2026"
  },
  {
    "titleTh": "Thrash",
    "titleEn": "Thrash",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Thrash-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Thrash-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=GN_zMWgJEE",
    "sourceType": "embed",
    "description": "Thrash (2026) ฉลามคลั่ง ทะเลเดือด.",
    "rating": 5.1,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-thrash-2026"
  },
  {
    "titleTh": "Toaster",
    "titleEn": "Toaster",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Toaster-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Toaster-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=54Dyn8Il5v",
    "sourceType": "embed",
    "description": "Toaster (2026) ปิง ปิ่ง ปิ้ง.",
    "rating": 6.7,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-toaster-2026"
  },
  {
    "titleTh": "Tu Yaa Main",
    "titleEn": "Tu Yaa Main",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Tu-Yaa-Main-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Tu-Yaa-Main-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=lc2fv9NKgE",
    "sourceType": "embed",
    "description": "Tu Yaa Main (2026) ไม่เธอ… ก็ฉัน.",
    "rating": 6.9,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-tu-yaa-main-2026"
  },
  {
    "titleTh": "18th Rose",
    "titleEn": "18th Rose",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/18th-Rose-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/18th-Rose-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=M4xTEFs0EU",
    "sourceType": "embed",
    "description": "18th Rose (2026) กุหลาบแรกแย้ม.",
    "rating": 6.5,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-18th-rose-2026"
  },
  {
    "titleTh": "The Super Mario Galaxy Movie",
    "titleEn": "The Super Mario Galaxy Movie",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/The-Super-Mario-Galaxy-Movie-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/The-Super-Mario-Galaxy-Movie-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=4cfWr9dMeM",
    "sourceType": "embed",
    "description": "The Super Mario Galaxy Movie (2026) เดอะ ซูเปอร์ มาริโอ กาแล็คซี่ มูฟวี่.",
    "rating": 6.5,
    "genres": [
      "การ์ตูน"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-super-mario-galaxy-movie-2026"
  },
  {
    "titleTh": "Pizza Movie",
    "titleEn": "Pizza Movie",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Pizza-Movie-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Pizza-Movie-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=Mfnnzv6awy",
    "sourceType": "embed",
    "description": "Pizza Movie (2026).",
    "rating": 5.8,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-pizza-movie-2026"
  },
  {
    "titleTh": "Vadh 2",
    "titleEn": "Vadh 2",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Vadh-2-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Vadh-2-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=8HqxZyya3h",
    "sourceType": "embed",
    "description": "Vadh 2 (2026) ประหาร 2.",
    "rating": 7.4,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-vadh-2-2-2026"
  },
  {
    "titleTh": "Feel My Voice",
    "titleEn": "Feel My Voice",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Feel-My-Voice-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Feel-My-Voice-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=tCV9ch78cs",
    "sourceType": "embed",
    "description": "Feel My Voice (2026) สัมผัสแห่งเสียง.",
    "rating": 5.6,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-feel-my-voice-2026"
  },
  {
    "titleTh": "Crime 101",
    "titleEn": "Crime 101",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Crime-101-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Crime-101-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=tTGYw5mRky",
    "sourceType": "embed",
    "description": "Crime 101 (2026) เส้นทางปล้นโคตรระห่ำ.",
    "rating": 7.1,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-crime-101-2026"
  },
  {
    "titleTh": "The Giant Falls",
    "titleEn": "The Giant Falls",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/The-Giant-Falls-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/The-Giant-Falls-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=Xq3_I1oNko",
    "sourceType": "embed",
    "description": "The Giant Falls (2026) พ่อยักษ์สั่งลา.",
    "rating": 5.6,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-giant-falls-2026"
  },
  {
    "titleTh": "Humint",
    "titleEn": "Humint",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Humint-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Humint-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=Rq9jQp4nyZ",
    "sourceType": "embed",
    "description": "Humint (2026) เกมจารชนคนในเงา.",
    "rating": 6.6,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-humint-2026"
  },
  {
    "titleTh": "Eat Pray Bark",
    "titleEn": "Eat Pray Bark",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Eat-Pray-Bark-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Eat-Pray-Bark-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=WNIiwL9yv6",
    "sourceType": "embed",
    "description": "Eat Pray Bark (2026) เมื่อน้องหมาพาไปฮีลใจ.",
    "rating": 5.6,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-eat-pray-bark-2026"
  },
  {
    "titleTh": "Blades of The Guardians",
    "titleEn": "Blades of The Guardians",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Blades-of-The-Guardians-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/Blades-of-The-Guardians-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=433HY8WK_i",
    "sourceType": "embed",
    "description": "Blades of The Guardians (2026) ยอดยุทธดาบไร้พ่าย.",
    "rating": 7.3,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-blades-of-the-guardians-2026"
  },
  {
    "titleTh": "53 Sundays",
    "titleEn": "53 Sundays",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/04/53-Sundays-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/04/53-Sundays-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=BRzcap2PyI",
    "sourceType": "embed",
    "description": "53 Sundays (2026) 53 อาทิตย์คิดเพื่อพ่อ.",
    "rating": 5.7,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-53-sundays-53-2026"
  },
  {
    "titleTh": "เส้นตาย สายลวง",
    "titleEn": "เส้นตาย สายลวง",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/03/The-Red-Line-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/03/The-Red-Line-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=fxza0Rd4t4",
    "sourceType": "embed",
    "description": "เส้นตาย สายลวง (2026) The Red Line.",
    "rating": 6.2,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-red-line-2026"
  },
  {
    "titleTh": "Mercy",
    "titleEn": "Mercy",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/01/Mercy-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/01/Mercy-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=rG0hTuH0J9",
    "sourceType": "embed",
    "description": "Mercy (2026) 90 นาทีสั่งตาย.",
    "rating": 6.2,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-mercy-90-2026"
  },
  {
    "titleTh": "Agent Zeta",
    "titleEn": "Agent Zeta",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/03/Agent-Zeta-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/03/Agent-Zeta-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=nZUR58E_8z",
    "sourceType": "embed",
    "description": "Agent Zeta (2026) เซต้า ปริศนาจารชน.",
    "rating": 5.7,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-agent-zeta-2026"
  },
  {
    "titleTh": "Peaky Blinders The Immortal Man",
    "titleEn": "Peaky Blinders The Immortal Man",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/03/Peaky-Blinders-The-Immortal-Man-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/03/Peaky-Blinders-The-Immortal-Man-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=yktXLGJoBk",
    "sourceType": "embed",
    "description": "Peaky Blinders The Immortal Man (2026) พีกี้ ไบลน์เดอร์ส ชายผู้เป็นอมตะ.",
    "rating": 6.8,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-peaky-blinders-the-immortal-man-2026"
  },
  {
    "titleTh": "Made in Korea",
    "titleEn": "Made in Korea",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/03/Made-in-Korea-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/03/Made-in-Korea-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=bivZAVf4qp",
    "sourceType": "embed",
    "description": "Made in Korea (2026) สร้างฝันในเกาหลี.",
    "rating": 7.3,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-made-in-korea-2026"
  },
  {
    "titleTh": "Primate",
    "titleEn": "Primate",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/01/Primate-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/01/Primate-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=S8MEGCgOjN",
    "sourceType": "embed",
    "description": "Primate (2026) ลิงคลั่งพันธุ์ดิบ.",
    "rating": 6.2,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-primate-2026"
  },
  {
    "titleTh": "War Machine",
    "titleEn": "War Machine",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/03/War-Machine-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/03/War-Machine-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=NXfImxzwEm",
    "sourceType": "embed",
    "description": "War Machine (2026) สงครามจักรกลถล่มโลก.",
    "rating": 6.6,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-war-machine-2026"
  },
  {
    "titleTh": "28 Years Later The Bone Temple",
    "titleEn": "28 Years Later The Bone Temple",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/02/28-Years-Later-The-Bone-Temple-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/02/28-Years-Later-The-Bone-Temple-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=YlJnRo54wt",
    "sourceType": "embed",
    "description": "28 Years Later The Bone Temple (2026) 28 ปีให้หลัง เชื้อเขมือบคน วิหารซากกะโหลก.",
    "rating": 7.7,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-28-years-later-the-bone-temple-28-2026"
  },
  {
    "titleTh": "The Bluff",
    "titleEn": "The Bluff",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/03/The-Bluff-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/03/The-Bluff-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=6pRL10Asva",
    "sourceType": "embed",
    "description": "The Bluff (2026) เดอะบลัฟ ชำระแค้นราชินีโจรสลัด.",
    "rating": 5.8,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-bluff-2026"
  },
  {
    "titleTh": "Shelter",
    "titleEn": "Shelter",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Shelter-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Shelter-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=QnXvzbzf5C",
    "sourceType": "embed",
    "description": "Shelter (2026) คลั่งนรก หลบตาย.",
    "rating": 7.7,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-shelter-2026"
  },
  {
    "titleTh": "Whistle",
    "titleEn": "Whistle",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Whistle-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Whistle-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=99ErX7fS80",
    "sourceType": "embed",
    "description": "Whistle (2026) หวีดเรียกผี.",
    "rating": 5.6,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-whistle-2026"
  },
  {
    "titleTh": "Pavane",
    "titleEn": "Pavane",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Pavane-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Pavane-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=gvVRQfSSYF",
    "sourceType": "embed",
    "description": "Pavane (2026) เมื่อใจบ่มรัก.",
    "rating": 5.6,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-pavane-2026"
  },
  {
    "titleTh": "Firebreak",
    "titleEn": "Firebreak",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Firebreak-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Firebreak-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=HuflTr3yVc",
    "sourceType": "embed",
    "description": "Firebreak (2026) ดับไฟอารมณ์.",
    "rating": 5.6,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-firebreak-2026"
  },
  {
    "titleTh": "The Swedish Connection",
    "titleEn": "The Swedish Connection",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/02/The-Swedish-Connection-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/02/The-Swedish-Connection-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=KLnkRBbWFJ",
    "sourceType": "embed",
    "description": "The Swedish Connection (2026) ใต้เงาสวีเดน.",
    "rating": 6.8,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-swedish-connection-2026"
  },
  {
    "titleTh": "สรรพลี้หวน",
    "titleEn": "สรรพลี้หวน",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Suppaleehuan-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Suppaleehuan-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=uskFsJ6RgC",
    "sourceType": "embed",
    "description": "สรรพลี้หวน (2026) Suppaleehuan.",
    "rating": 6.6,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-suppaleehuan-2026"
  },
  {
    "titleTh": "Joe’s College Road Trip",
    "titleEn": "Joe’s College Road Trip",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Joes-College-Road-Trip-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Joes-College-Road-Trip-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=Xc_c4ijMxr",
    "sourceType": "embed",
    "description": "Joe’s College Road Trip (2026) โร้ดทริปป่วนกับคุณปู่โจ.",
    "rating": 5.6,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-joe-s-college-road-trip-2026"
  },
  {
    "titleTh": "Queen of Chess",
    "titleEn": "Queen of Chess",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Queen-of-Chess-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/02/Queen-of-Chess-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=DjNs7HOJ4I",
    "sourceType": "embed",
    "description": "Queen of Chess (2026) ราชินีหมากรุก.",
    "rating": 7.7,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-queen-of-chess-2026"
  },
  {
    "titleTh": "The Investigation of Lucy Letby",
    "titleEn": "The Investigation of Lucy Letby",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/02/The-Investigation-of-Lucy-Letby-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/02/The-Investigation-of-Lucy-Letby-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=ObMBhpK5Fy",
    "sourceType": "embed",
    "description": "The Investigation of Lucy Letby (2026).",
    "rating": 5.7,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-investigation-of-lucy-letby-2026"
  },
  {
    "titleTh": "Send Help",
    "titleEn": "Send Help",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/01/Send-Help-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/01/Send-Help-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=OoN3Uqrd5b",
    "sourceType": "embed",
    "description": "Send Help (2026) โปรดส่งใครมาช่วยฉันที.",
    "rating": 6.3,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-send-help-2026"
  },
  {
    "titleTh": "Greenland 2 Migration",
    "titleEn": "Greenland 2 Migration",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/01/Greenland-2-Migration-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/01/Greenland-2-Migration-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=TcYDE25H9x",
    "sourceType": "embed",
    "description": "Greenland 2 Migration (2026) ฝ่าชะตา โลกาวินาศ.",
    "rating": 5.8,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-greenland-2-migration-2026"
  },
  {
    "titleTh": "เดี่ยว สตีล อะไลฟ์",
    "titleEn": "เดี่ยว สตีล อะไลฟ์",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/01/Deaw-Still-Alive-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/01/Deaw-Still-Alive-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=dLwHqs1TgL",
    "sourceType": "embed",
    "description": "เดี่ยว สตีล อะไลฟ์ (2026) Deaw Still Alive.",
    "rating": 6.6,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-deaw-still-alive-2026"
  },
  {
    "titleTh": "The Wrecking Crew",
    "titleEn": "The Wrecking Crew",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/01/The-Wrecking-Crew-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/01/The-Wrecking-Crew-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=c8xr_GGJr6",
    "sourceType": "embed",
    "description": "The Wrecking Crew (2026) คู่พยัคฆ์เดือด เชือดเจ้าพ่อฮาวาย.",
    "rating": 6.6,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-wrecking-crew-2026"
  },
  {
    "titleTh": "The Big Fake",
    "titleEn": "The Big Fake",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/01/The-Big-Fake-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/01/The-Big-Fake-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=qqzjOFvSaq",
    "sourceType": "embed",
    "description": "The Big Fake (2026) จอมปลอม.",
    "rating": 6.7,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-big-fake-2026"
  },
  {
    "titleTh": "From the Ashes The Pit",
    "titleEn": "From the Ashes The Pit",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/01/From-the-Ashes-The-Pit-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/01/From-the-Ashes-The-Pit-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=BFqYiVJ91o",
    "sourceType": "embed",
    "description": "From the Ashes The Pit (2026) จากเถ้าถ่าน นรกใต้ดิน.",
    "rating": 5.6,
    "genres": [
      "สยองขวัญ"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-from-the-ashes-the-pit-2026"
  },
  {
    "titleTh": "Kidnapped Elizabeth Smart",
    "titleEn": "Kidnapped Elizabeth Smart",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/01/Kidnapped-Elizabeth-Smart-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/01/Kidnapped-Elizabeth-Smart-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=NGhfDOmcPm",
    "sourceType": "embed",
    "description": "Kidnapped Elizabeth Smart (2026) คดีลักพาตัว เอลิซาเบธ สมาร์ท.",
    "rating": 6.8,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-kidnapped-elizabeth-smart-2026"
  },
  {
    "titleTh": "The Rip",
    "titleEn": "The Rip",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/01/The-Rip-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/01/The-Rip-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=sF8qugO74n",
    "sourceType": "embed",
    "description": "The Rip (2026) เงินบาปกระชากคน.",
    "rating": 6.9,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-rip-2026"
  },
  {
    "titleTh": "People We Meet on Vacation",
    "titleEn": "People We Meet on Vacation",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/01/People-We-Meet-on-Vacation-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/01/People-We-Meet-on-Vacation-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=P6X8yB0UMw",
    "sourceType": "embed",
    "description": "People We Meet on Vacation (2026) เราพบกัน ณ วันพักใจ.",
    "rating": 6.9,
    "genres": [
      "ตลกคอมเมดี้"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-people-we-meet-on-vacation-2026"
  },
  {
    "titleTh": "The Tank",
    "titleEn": "The Tank",
    "year": 2026,
    "poster": "https://www.037hddmovies.com/wp-content/uploads/2026/01/The-Tank-2026.jpg",
    "backdrop": "https://www.037hddmovies.com/wp-content/uploads/2026/01/The-Tank-2026.jpg",
    "videoUrl": "https://www.leoplayer7.com/watch?v=3FP9loNDgM",
    "sourceType": "embed",
    "description": "The Tank (2026) รถถังเจ้าพยัคฆ์.",
    "rating": 6.7,
    "genres": [
      "ทั่วไป"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "037HDD",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "037-the-tank-2026"
  },
  {
    "titleTh": "Thunder Rescue",
    "titleEn": "Thunder Rescue",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/01/Thunder-Rescue-2026-ภารกิจช่วยเหลือเหนือสายฟ้า.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/01/Thunder-Rescue-2026-ภารกิจช่วยเหลือเหนือสายฟ้า.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=460eacf446ccd68904cfcabd&b=2301",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Thunder Rescue (2026) ภารกิจช่วยเหลือเหนือสายฟ้า เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-thunder-rescue-2026",
    "postId": "37686",
    "sourcePageUrl": "https://www.24-hdx.com/thunder-rescue-2026/"
  },
  {
    "titleTh": "Me Before Me",
    "titleEn": "Me Before Me",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Me-Before-Me-2026-ฉันก่อนเป็นฉัน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Me-Before-Me-2026-ฉันก่อนเป็นฉัน.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=380acab296764bd24cc5dbb8&b=8882",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Me Before Me (2026) ฉันก่อนเป็นฉัน เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-me-before-me-2026",
    "postId": "40090",
    "sourcePageUrl": "https://www.24-hdx.com/me-before-me/"
  },
  {
    "titleTh": "Is God Is",
    "titleEn": "Is God Is",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Is-God-Is-2026.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Is-God-Is-2026.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=f1f2c18a1a23cae84ea8654a&b=4153",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Is God Is (2026) เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี รองรับมือถือและ Smart TV ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-is-god-is-2026",
    "postId": "40072",
    "sourcePageUrl": "https://www.24-hdx.com/is-god-is/"
  },
  {
    "titleTh": "Desire",
    "titleEn": "Desire",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Desire-2026-ปรารถนาต้องห้าม.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Desire-2026-ปรารถนาต้องห้าม.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=31a94ad04e9a1fcf488e1431&b=7146",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Desire (2026) ปรารถนาต้องห้าม เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-desire-2026",
    "postId": "40097",
    "sourcePageUrl": "https://www.24-hdx.com/desire/"
  },
  {
    "titleTh": "The Odyssey",
    "titleEn": "The Odyssey",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Odyssey-2026-มหากาพย์โอดิสซี.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Odyssey-2026-มหากาพย์โอดิสซี.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=e872eb95f1893ef29f5f86bc&b=3204",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ The Odyssey (2026) มหากาพย์โอดิสซี เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-the-odyssey-2026",
    "postId": "40112",
    "sourcePageUrl": "https://www.24-hdx.com/the-odyssey/"
  },
  {
    "titleTh": "The East Palace",
    "titleEn": "The East Palace",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-East-Palace-2026-บูรพาอาถรรพ์.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-East-Palace-2026-บูรพาอาถรรพ์.png",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=759fae523ddebf02c35dbc6a&b=1349",
    "sourceType": "embed",
    "description": "ดูซีรี่ย์ออนไลน์ The East Palace (2026) บูรพาอาถรรพ์ เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "9 ตอน",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-the-east-palace-2026",
    "postId": "40100",
    "sourcePageUrl": "https://www.24-hdx.com/the-east-palace/",
    "episodeUrls": {
      "1": "https://main.24playerhd.com/index_th.php?id=759fae523ddebf02c35dbc6a&b=9753",
      "2": "https://main.24playerhd.com/index_th.php?id=0af6188c08e2fc7ac696d632&b=4430",
      "3": "https://main.24playerhd.com/index_th.php?id=bbb218e5e595ba8f22835484&b=4351",
      "4": "https://main.24playerhd.com/index_th.php?id=84baa6fff696f416762cec35&b=5336",
      "5": "https://main.24playerhd.com/index_th.php?id=9bff83d1aa24e27aff6461a0&b=9213",
      "6": "https://main.24playerhd.com/index_th.php?id=e8fbd07ccee2761cdfa0a115&b=9451",
      "7": "https://main.24playerhd.com/index_th.php?id=02ad91b1e31da5d31a0cb064&b=7807",
      "8": "https://main.24playerhd.com/index_th.php?id=2f243092fd5deb12d1ce75d0&b=7383",
      "9": "https://main.24playerhd.com/index_th.php?id=759fae523ddebf02c35dbc6a&b=1349"
    }
  },
  {
    "titleTh": "Moana",
    "titleEn": "Moana",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Moana-2026.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Moana-2026.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=31ef3d76ce3f29db46aea3c9&b=7180",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Moana (2026) เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี รองรับมือถือและ Smart TV ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-moana-2026",
    "postId": "40049",
    "sourcePageUrl": "https://www.24-hdx.com/moana-2026/"
  },
  {
    "titleTh": "The Undertaker 2 Afterlife",
    "titleEn": "The Undertaker 2 Afterlife",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Undertaker-2-Afterlife-2026-สัปเหร่อ-2.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/The-Undertaker-2-Afterlife-2026-สัปเหร่อ-2.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=55da83b20a818e1b7ec3c165&b=2967",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ The Undertaker 2 Afterlife (2026) สัปเหร่อ 2 เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-the-undertaker-2-afterlife-2-2026",
    "postId": "40046",
    "sourcePageUrl": "https://www.24-hdx.com/the-undertaker-2-afterlife/"
  },
  {
    "titleTh": "The Real Monkey King",
    "titleEn": "The Real Monkey King",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/01/The-Real-Monkey-King-2026-คาถารัตเกล้าแห่งภูผาไร้อารยะ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/01/The-Real-Monkey-King-2026-คาถารัตเกล้าแห่งภูผาไร้อารยะ.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=b149cadc6fc9668fe7e229d3&b=2289",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ The Real Monkey King (2026) คาถารัตเกล้าแห่งภูผาไร้อารยะ พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-the-real-monkey-king-2026",
    "postId": "37986",
    "sourcePageUrl": "https://www.24-hdx.com/the-real-monkey-king/"
  },
  {
    "titleTh": "23000 Lives",
    "titleEn": "23000 Lives",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/23000-Lives-2026-23000-ชีวิต.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/23000-Lives-2026-23000-ชีวิต.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=8bd6a473a5571012b175e539&b=2888",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ 23000 Lives (2026) 23000 ชีวิต พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี รองรับมือถือและ Smart TV ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-23000-lives-23000-2026",
    "postId": "40093",
    "sourcePageUrl": "https://www.24-hdx.com/23000-lives/"
  },
  {
    "titleTh": "House of the Dragon Season 3",
    "titleEn": "House of the Dragon Season 3",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/House-of-the-Dragon-Season-3-2026-ตระกูลแห่งมังกร-ซีซั่น-3.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/House-of-the-Dragon-Season-3-2026-ตระกูลแห่งมังกร-ซีซั่น-3.png",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=a96cb2709f6f26649de95776&b=3926",
    "sourceType": "embed",
    "description": "ดูซีรีย์ออนไลน์ House of the Dragon Season 3 (2026) ตระกูลแห่งมังกร ซีซั่น 3 EP 1-8 หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "7 ตอน",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-house-of-the-dragon-season-3-3-2026",
    "postId": "39743",
    "sourcePageUrl": "https://www.24-hdx.com/house-of-the-dragon-season-3/",
    "episodeUrls": {
      "1": "https://main.24playerhd.com/index_th.php?id=a96cb2709f6f26649de95776&b=9541",
      "2": "https://main.24playerhd.com/index_th.php?id=e635f266c10a50e6657360c3&b=8763",
      "3": "https://main.24playerhd.com/index_th.php?id=e372fca70006f22c0d308cc1&b=7664",
      "4": "https://main.24playerhd.com/index_th.php?id=6b21d17d88500cbe2a80b1d4&b=7551",
      "5": "https://main.24playerhd.com/index_th.php?id=a5653348016e50ed2ab02a99&b=1551",
      "6": "https://main.24playerhd.com/index_th.php?id=365de04b9b188ddbaed4f981&b=3157",
      "7": "https://main.24playerhd.com/index_th.php?id=8c5548306f8eea425de5b9b5&b=5051"
    }
  },
  {
    "titleTh": "Golden Kamuy Assault on Abashiri Prison",
    "titleEn": "Golden Kamuy Assault on Abashiri Prison",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Golden-Kamuy-Assault-on-Abashiri-Prison-2026-โกลเดนคามุย-การจู่โจมคุกอะบาชิริ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Golden-Kamuy-Assault-on-Abashiri-Prison-2026-โกลเดนคามุย-การจู่โจมคุกอะบาชิริ.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=5f0c15608bb9943f186b711f&b=5591",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Golden Kamuy Assault on Abashiri Prison (2026) โกลเดนคามุย การจู่โจมคุกอะบาชิริ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-golden-kamuy-assault-on-abashiri-prison-2026",
    "postId": "40060",
    "sourcePageUrl": "https://www.24-hdx.com/golden-kamuy-assault-on-abashiri-prison/"
  },
  {
    "titleTh": "Evil Dead Burn",
    "titleEn": "Evil Dead Burn",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Evil-Dead-Burn-2026.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Evil-Dead-Burn-2026.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=b68056ab7b295d0f9ba545e0&b=6562",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Evil Dead Burn (2026) เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี รองรับมือถือและ Smart TV ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-evil-dead-burn-2026",
    "postId": "40053",
    "sourcePageUrl": "https://www.24-hdx.com/evil-dead-burn/"
  },
  {
    "titleTh": "Ghost Board",
    "titleEn": "Ghost Board",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Ghost-Board-2026-กล่องผีสุ่มวิญญาณ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Ghost-Board-2026-กล่องผีสุ่มวิญญาณ.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=29de39cbebb87fc6b764c991&b=7578",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Ghost Board (2026) กล่องผีสุ่มวิญญาณ เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-ghost-board-2026",
    "postId": "40081",
    "sourcePageUrl": "https://www.24-hdx.com/ghost-board/"
  },
  {
    "titleTh": "King Kaew",
    "titleEn": "King Kaew",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/King-Kaew-2026-กิ่งแก้ว.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/King-Kaew-2026-กิ่งแก้ว.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=cd71dbd16d46093e0a87f295&b=4800",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ King Kaew (2026) กิ่งแก้ว เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-king-kaew-2026",
    "postId": "39795",
    "sourcePageUrl": "https://www.24-hdx.com/king-kaew-2026-%e0%b8%81%e0%b8%b4%e0%b9%88%e0%b8%87%e0%b9%81%e0%b8%81%e0%b9%89%e0%b8%a7/"
  },
  {
    "titleTh": "Scary Movie 6",
    "titleEn": "Scary Movie 6",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Scary-Movie-6-2026-ยำหนังจี้-6.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Scary-Movie-6-2026-ยำหนังจี้-6.png",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=6d34ee60331693529dce34f4&b=2561",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Scary Movie 6 (2026) ยำหนังจี้ 6 เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "6 ตอน",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-scary-movie-6-6-2026",
    "postId": "39506",
    "sourcePageUrl": "https://www.24-hdx.com/scary-movie-6/",
    "episodeUrls": {
      "1": "https://main.24playerhd.com/index_th.php?id=6d34ee60331693529dce34f4&b=5038",
      "2": "https://main.24playerhd.com/index_th.php?id=6d34ee60331693529dce34f4&b=2561",
      "3": "https://main.24playerhd.com/index_th.php?id=6d34ee60331693529dce34f4&b=2561",
      "4": "https://main.24playerhd.com/index_th.php?id=6d34ee60331693529dce34f4&b=2561",
      "5": "https://main.24playerhd.com/index_th.php?id=6d34ee60331693529dce34f4&b=2561",
      "6": "https://main.24playerhd.com/index_th.php?id=6d34ee60331693529dce34f4&b=2561"
    }
  },
  {
    "titleTh": "In the Hand of Dante",
    "titleEn": "In the Hand of Dante",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/In-the-Hand-of-Dante-2026-ดันเต้ลิขิต.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/In-the-Hand-of-Dante-2026-ดันเต้ลิขิต.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=03a34a6e4ba0554c6e526052&b=1184",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ In the Hand of Dante (2026) ดันเต้ลิขิต เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-in-the-hand-of-dante-2026",
    "postId": "39792",
    "sourcePageUrl": "https://www.24-hdx.com/in-the-hand-of-dante/"
  },
  {
    "titleTh": "Ready or Not 2 Here I Come",
    "titleEn": "Ready or Not 2 Here I Come",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/03/Ready-or-Not-2-Here-I-Come-2026-เกมพร้อมตาย-ภาค-2.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/03/Ready-or-Not-2-Here-I-Come-2026-เกมพร้อมตาย-ภาค-2.png",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=1b510d32e27311a5e2f8f83c&b=8950",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Ready or Not 2 Here I Come (2026) เกมพร้อมตาย ภาค 2 พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ตอน",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-ready-or-not-2-here-i-come-2-2026",
    "postId": "38512",
    "sourcePageUrl": "https://www.24-hdx.com/ready-or-not-2-here-i-come/",
    "episodeUrls": {
      "1": "https://main.24playerhd.com/index_th.php?id=1b510d32e27311a5e2f8f83c&b=1721",
      "2": "https://main.24playerhd.com/index_th.php?id=1b510d32e27311a5e2f8f83c&b=8950"
    }
  },
  {
    "titleTh": "Colony",
    "titleEn": "Colony",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Colony-2026-ยึดร่างคลั่ง.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Colony-2026-ยึดร่างคลั่ง.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=eded5de9785d301e6fd7f76a&b=5345",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Colony (2026) ยึดร่างคลั่ง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี รองรับมือถือและ Smart TV ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-colony-2026",
    "postId": "39336",
    "sourcePageUrl": "https://www.24-hdx.com/colony/"
  },
  {
    "titleTh": "Pee Nak 5",
    "titleEn": "Pee Nak 5",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Pee-Nak-5-2026-พี่นาค-5.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Pee-Nak-5-2026-พี่นาค-5.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=556f7b765f7cd139422492ae&b=3342",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Pee Nak 5 (2026) พี่นาค 5 เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี รองรับมือถือและ Smart TV ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-pee-nak-5-5-2026",
    "postId": "39939",
    "sourcePageUrl": "https://www.24-hdx.com/pee-nak-5/"
  },
  {
    "titleTh": "Avatar The Last Airbender Season 2",
    "titleEn": "Avatar The Last Airbender Season 2",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/new-poster-for-avatar-the-last-airbender-season-2-v0-nexeqr1fpdsg1.webp",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/new-poster-for-avatar-the-last-airbender-season-2-v0-nexeqr1fpdsg1.webp",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=e6283aa67cf9802ed9c1a2b6&b=5571",
    "sourceType": "embed",
    "description": "ดูซีรีย์ออนไลน์ Avatar The Last Airbender Season 2 (2026) เณรน้อยเจ้าอภินิหาร ซีซั่น 2 หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "8 ตอน",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-avatar-the-last-airbender-season-2-2-2026",
    "postId": "39873",
    "sourcePageUrl": "https://www.24-hdx.com/avatar-the-last-airbender-season-2/",
    "episodeUrls": {
      "1": "https://main.24playerhd.com/index_th.php?id=e6283aa67cf9802ed9c1a2b6&b=5441",
      "2": "https://main.24playerhd.com/index_th.php?id=730564856268626051267659&b=6409",
      "3": "https://main.24playerhd.com/index_th.php?id=3e65068923aba84695d2625a&b=3174",
      "4": "https://main.24playerhd.com/index_th.php?id=71227626f42bc4e82388a269&b=5977",
      "5": "https://main.24playerhd.com/index_th.php?id=2daef95bc77837083c0514ba&b=2052",
      "6": "https://main.24playerhd.com/index_th.php?id=2b55df69b4af933bc6e4a27c&b=5719",
      "7": "https://main.24playerhd.com/index_th.php?id=03fb4eda75f3ae7bfbac11d2&b=3812",
      "8": "https://main.24playerhd.com/index_th.php?id=e6283aa67cf9802ed9c1a2b6&b=5571"
    }
  },
  {
    "titleTh": "Strange Tales of Huangquan Village",
    "titleEn": "Strange Tales of Huangquan Village",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Strange-Tales-of-Huangquan-Village-2026-เรื่องพิศวงแห่งหมู่บ้านหวงเฉวียน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Strange-Tales-of-Huangquan-Village-2026-เรื่องพิศวงแห่งหมู่บ้านหวงเฉวียน.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=23af89bc393a3ce766bfb0eb&b=9954",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Strange Tales of Huangquan Village (2026) เรื่องพิศวงแห่งหมู่บ้านหวงเฉวียน หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-strange-tales-of-huangquan-village-2026",
    "postId": "39968",
    "sourcePageUrl": "https://www.24-hdx.com/strange-tales-of-huangquan-village/"
  },
  {
    "titleTh": "Voicemails for Isabelle",
    "titleEn": "Voicemails for Isabelle",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Voicemails-for-Isabelle-2026-ข้อความเสียงแด่อิชาเบล.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Voicemails-for-Isabelle-2026-ข้อความเสียงแด่อิชาเบล.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=bfd01402936471883f3ccdef&b=4239",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Voicemails for Isabelle (2026) ข้อความเสียงแด่อิชาเบล พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-voicemails-for-isabelle-2026",
    "postId": "39707",
    "sourcePageUrl": "https://www.24-hdx.com/voicemails-for-isabelle/"
  },
  {
    "titleTh": "Human Vapor",
    "titleEn": "Human Vapor",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/07/Human-Vapor-2026-มนุษย์ก๊าซ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/07/Human-Vapor-2026-มนุษย์ก๊าซ.png",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=a85554457eb1f824d9e12bc3&b=3128",
    "sourceType": "embed",
    "description": "ดูซีรีย์ออนไลน์ Human Vapor (2026) มนุษย์ก๊าซ เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "9 ตอน",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-human-vapor-2026",
    "postId": "39971",
    "sourcePageUrl": "https://www.24-hdx.com/human-vapor/",
    "episodeUrls": {
      "1": "https://main.24playerhd.com/index_th.php?id=a85554457eb1f824d9e12bc3&b=7284",
      "2": "https://main.24playerhd.com/index_th.php?id=01900fe4f60988db5161c8ed&b=5761",
      "3": "https://main.24playerhd.com/index_th.php?id=484338d86375bf5dbea1fbcd&b=1639",
      "4": "https://main.24playerhd.com/index_th.php?id=16db9038deaa55cc43040a35&b=4906",
      "5": "https://main.24playerhd.com/index_th.php?id=1cef6b09bf8038302df4ff0b&b=4439",
      "6": "https://main.24playerhd.com/index_th.php?id=2577e200fb07e8bc1df5fdb1&b=9983",
      "7": "https://main.24playerhd.com/index_th.php?id=a8330b552ca500d44a17c2c3&b=2580",
      "8": "https://main.24playerhd.com/index_th.php?id=1fa7b801bb69f0d8400656db&b=5576",
      "9": "https://main.24playerhd.com/index_th.php?id=a85554457eb1f824d9e12bc3&b=3128"
    }
  },
  {
    "titleTh": "Poldi",
    "titleEn": "Poldi",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Poldi-2026-พรินซ์โพลดี้แห่งโคโลญ-เส้นทางชีวิตนักเตะ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Poldi-2026-พรินซ์โพลดี้แห่งโคโลญ-เส้นทางชีวิตนักเตะ.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=9a6648944130defe85cdcb84&b=5008",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Poldi (2026) พรินซ์โพลดี้แห่งโคโลญ เส้นทางชีวิตนักเตะ พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-poldi-2026",
    "postId": "39480",
    "sourcePageUrl": "https://www.24-hdx.com/poldi/"
  },
  {
    "titleTh": "Tom Clancys Jack Ryan Ghost War",
    "titleEn": "Tom Clancys Jack Ryan Ghost War",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Tom-Clancys-Jack-Ryan-Ghost-War-2026.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Tom-Clancys-Jack-Ryan-Ghost-War-2026.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=a5590420cae4b11254ce5a3f&b=1428",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Tom Clancys Jack Ryan Ghost War (2026) เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-tom-clancys-jack-ryan-ghost-war-2026",
    "postId": "39256",
    "sourcePageUrl": "https://www.24-hdx.com/tom-clancys-jack-ryan-ghost-war/"
  },
  {
    "titleTh": "Milky Subway The Galactic Limited Express to the Theater",
    "titleEn": "Milky Subway The Galactic Limited Express to the Theater",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Milky-Subway-The-Galactic-Limited-Express-to-the-Theater-2026-มิลกี้-ซับเวย์-รถไฟด่วนทะลุกาแล็กซี-เดอะ-มูฟวี่.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Milky-Subway-The-Galactic-Limited-Express-to-the-Theater-2026-มิลกี้-ซับเวย์-รถไฟด่วนทะลุกาแล็กซี-เดอะ-มูฟวี่.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=f02dae7c6a90e354b30edb84&b=9168",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Milky Subway The Galactic Limited Express to the Theater (2026) พากย์ไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-milky-subway-the-galactic-limited-express-to-the-theater-2026",
    "postId": "39516",
    "sourcePageUrl": "https://www.24-hdx.com/milky-subway-the-galactic-limited-express-to-the-theater/"
  },
  {
    "titleTh": "Hokum",
    "titleEn": "Hokum",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Hokum-2026-ห้องกุมวิญญาณ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Hokum-2026-ห้องกุมวิญญาณ.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=b0769fd2ad600c33e1a410e6&b=8982",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Hokum (2026) ห้องกุมวิญญาณ พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี รองรับมือถือและ Smart TV ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-hokum-2026",
    "postId": "39467",
    "sourcePageUrl": "https://www.24-hdx.com/hokum/"
  },
  {
    "titleTh": "Teach You a Lesson",
    "titleEn": "Teach You a Lesson",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Teach-You-a-Lesson-2026-อย่างนี้ต้องโดนสั่งสอน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Teach-You-a-Lesson-2026-อย่างนี้ต้องโดนสั่งสอน.png",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=ba6684fcbbf4033e00afc09e&b=7563",
    "sourceType": "embed",
    "description": "ดูซีรีย์ออนไลน์ Teach You a Lesson (2026) อย่างนี้ต้องโดนสั่งสอน เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "11 ตอน",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-teach-you-a-lesson-2026",
    "postId": "39512",
    "sourcePageUrl": "https://www.24-hdx.com/teach-you-a-lesson/",
    "episodeUrls": {
      "1": "https://main.24playerhd.com/index_th.php?id=ba6684fcbbf4033e00afc09e&b=8192",
      "2": "https://main.24playerhd.com/index_th.php?id=cc0421b717608d9a6546aae7&b=1333",
      "3": "https://main.24playerhd.com/index_th.php?id=b5545ce5b4615a66dd70b6ae&b=7364",
      "4": "https://main.24playerhd.com/index_th.php?id=fae097b85201b34e882af4e9&b=2304",
      "5": "https://main.24playerhd.com/index_th.php?id=f695a6d1707670d93528785c&b=3832",
      "6": "https://main.24playerhd.com/index_th.php?id=6ff8371d9fe02ab3b6ff61d2&b=9689",
      "7": "https://main.24playerhd.com/index_th.php?id=5f689b875b878512b2ffe3de&b=3824",
      "8": "https://main.24playerhd.com/index_th.php?id=48d3f00f0e3a99e54c35db0e&b=6079",
      "9": "https://main.24playerhd.com/index_th.php?id=0fad9c246167ba27b17919b0&b=4126",
      "10": "https://main.24playerhd.com/index_th.php?id=3777e97967ce05056b8f1149&b=6354",
      "11": "https://main.24playerhd.com/index_th.php?id=ba6684fcbbf4033e00afc09e&b=7563"
    }
  },
  {
    "titleTh": "The Murder of Rachel Nickell",
    "titleEn": "The Murder of Rachel Nickell",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/The-Murder-of-Rachel-Nickell-2026-คดีฆาตกรรมเรเชล-นิกเคลล์.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/The-Murder-of-Rachel-Nickell-2026-คดีฆาตกรรมเรเชล-นิกเคลล์.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=2226386d36e05786a35cfc37&b=8208",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ The Murder of Rachel Nickell (2026) คดีฆาตกรรมเรเชล นิกเคลล์ พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-the-murder-of-rachel-nickell-2026",
    "postId": "39479",
    "sourcePageUrl": "https://www.24-hdx.com/the-murder-of-rachel-nickell/"
  },
  {
    "titleTh": "Viral Hit",
    "titleEn": "Viral Hit",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Viral-Hit-2026-นักสู้ทูปเบอร์.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Viral-Hit-2026-นักสู้ทูปเบอร์.png",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=e0fe66bcf57e597917eb7db2&b=6070",
    "sourceType": "embed",
    "description": "ดูซีรีย์ออนไลน์ Viral Hit (2026) นักสู้ทูปเบอร์ พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี รองรับมือถือและ Smart TV ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "7 ตอน",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-viral-hit-2026",
    "postId": "39572",
    "sourcePageUrl": "https://www.24-hdx.com/viral-hit/",
    "episodeUrls": {
      "1": "https://main.24playerhd.com/index_th.php?id=e0fe66bcf57e597917eb7db2&b=2979",
      "2": "https://main.24playerhd.com/index_th.php?id=a874e5ef65071329a036d277&b=4653",
      "3": "https://main.24playerhd.com/index_th.php?id=b9fb0200c41606361b30b544&b=3327",
      "4": "https://main.24playerhd.com/index_th.php?id=9451be74f9ebc0747683d835&b=9003",
      "5": "https://main.24playerhd.com/index_th.php?id=16e7aed634cbebf0c05ea512&b=5212",
      "6": "https://main.24playerhd.com/index_th.php?id=eeeb8144675b4aac6ec88355&b=1909",
      "7": "https://main.24playerhd.com/index_th.php?id=e0fe66bcf57e597917eb7db2&b=6070"
    }
  },
  {
    "titleTh": "Maternal Instinct",
    "titleEn": "Maternal Instinct",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/Maternal-Instinct-2026-สัญชาตญาณของแม่-ปริศนาคดีเทย์เลอร์-พาร์เกอร์.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/Maternal-Instinct-2026-สัญชาตญาณของแม่-ปริศนาคดีเทย์เลอร์-พาร์เกอร์.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=ff4d918b1c74a6b802cbe47d&b=5949",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Maternal Instinct (2026) สัญชาตญาณของแม่ ปริศนาคดีเทย์เลอร์ พาร์เกอร์ หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-maternal-instinct-2026",
    "postId": "39579",
    "sourcePageUrl": "https://www.24-hdx.com/maternal-instinct/"
  },
  {
    "titleTh": "The Evil Lawyer",
    "titleEn": "The Evil Lawyer",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/06/The-Evil-Lawyer-2026-ทนายปีศาจ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/06/The-Evil-Lawyer-2026-ทนายปีศาจ.png",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=c9a94f78c568f0c9c137d5b1&b=6699",
    "sourceType": "embed",
    "description": "ดูซีรีย์ออนไลน์ The Evil Lawyer (2026) ทนายปีศาจ เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "9 ตอน",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-the-evil-lawyer-2026",
    "postId": "39576",
    "sourcePageUrl": "https://www.24-hdx.com/the-evil-lawyer/",
    "episodeUrls": {
      "1": "https://main.24playerhd.com/index_th.php?id=c9a94f78c568f0c9c137d5b1&b=8059",
      "2": "https://main.24playerhd.com/index_th.php?id=1ed914adea1c0b0efdf2d7e3&b=8779",
      "3": "https://main.24playerhd.com/index_th.php?id=c560f2f0ae3efa60dbead1e8&b=7309",
      "4": "https://main.24playerhd.com/index_th.php?id=b9403c1410a8cfddf37fedc4&b=4763",
      "5": "https://main.24playerhd.com/index_th.php?id=b82e207ede12c1c0a83dbabe&b=7680",
      "6": "https://main.24playerhd.com/index_th.php?id=c3047d98043a5fa995127498&b=4309",
      "7": "https://main.24playerhd.com/index_th.php?id=2de2b27c3076bf6451df6c81&b=4892",
      "8": "https://main.24playerhd.com/index_th.php?id=c4edafb2a1180a9883c86c2a&b=9622",
      "9": "https://main.24playerhd.com/index_th.php?id=c9a94f78c568f0c9c137d5b1&b=6699"
    }
  },
  {
    "titleTh": "That Time I Got Reincarnated as a Slime the Movie Tears of the Azure Sea",
    "titleEn": "That Time I Got Reincarnated as a Slime the Movie Tears of the Azure Sea",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/That-Time-I-Got-Reincarnated-as-a-Slime-the-Movie-Tears-of-the-Azure-Sea-2026.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/That-Time-I-Got-Reincarnated-as-a-Slime-the-Movie-Tears-of-the-Azure-Sea-2026.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=97148a76d72d699c5c99635d&b=4854",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ That Time I Got Reincarnated as a Slime the Movie Tears of the Azure Sea (2026)ภาคน้ำตาแห่งห้วงทะเลคราม ดูหนังฟรี 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-that-time-i-got-reincarnated-as-a-slime-the-movie-tears-of-the-azure-sea-2026",
    "postId": "39214",
    "sourcePageUrl": "https://www.24-hdx.com/that-time-i-got-reincarnated-as-a-slime-the-movie-tears-of-the-azure-sea/"
  },
  {
    "titleTh": "The WONDERfools",
    "titleEn": "The WONDERfools",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/The-WONDERfools-2026-คนมหัศจรรย์พลังรั่ว.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/The-WONDERfools-2026-คนมหัศจรรย์พลังรั่ว.png",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=963a991126109eb752207d9e&b=4068",
    "sourceType": "embed",
    "description": "ดูซีรีย์ออนไลน์ The WONDERfools (2026) คนมหัศจรรย์พลังรั่ว เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูซีรีย์ฟรี ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "9 ตอน",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-the-wonderfools-2026",
    "postId": "39175",
    "sourcePageUrl": "https://www.24-hdx.com/the-wonderfools/",
    "episodeUrls": {
      "1": "https://main.24playerhd.com/index_th.php?id=963a991126109eb752207d9e&b=2039",
      "2": "https://main.24playerhd.com/index_th.php?id=12e7e91af91bd8d5cf9df6aa&b=6620",
      "3": "https://main.24playerhd.com/index_th.php?id=fa01ef915f1e426297539f1d&b=2791",
      "4": "https://main.24playerhd.com/index_th.php?id=eba6eb142d9aadaa5a06e8bb&b=6097",
      "5": "https://main.24playerhd.com/index_th.php?id=6b96bf7b7aefbec2e04acdef&b=3529",
      "6": "https://main.24playerhd.com/index_th.php?id=96893717211287b5616c0e8b&b=5911",
      "7": "https://main.24playerhd.com/index_th.php?id=a45e74da1a829393efdd3210&b=7467",
      "8": "https://main.24playerhd.com/index_th.php?id=0af7ea48d6120e44c0aabd06&b=8639",
      "9": "https://main.24playerhd.com/index_th.php?id=963a991126109eb752207d9e&b=4068"
    }
  },
  {
    "titleTh": "Mobile Suit Gundam Hathaway The Sorcery of Nymph Circe",
    "titleEn": "Mobile Suit Gundam Hathaway The Sorcery of Nymph Circe",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Mobile-Suit-Gundam-Hathaway-The-Sorcery-of-Nymph-Circe-2026-โมบิลสูท-กันดั้ม-ฮาธาเวย์-เดอะ-ซอร์เซอรี-ออฟ-นิมฟ์-เซอร์ซี.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Mobile-Suit-Gundam-Hathaway-The-Sorcery-of-Nymph-Circe-2026-โมบิลสูท-กันดั้ม-ฮาธาเวย์-เดอะ-ซอร์เซอรี-ออฟ-นิมฟ์-เซอร์ซี.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=34d60f656f5bf16c7945177e&b=1580",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Mobile Suit Gundam Hathaway The Sorcery of Nymph Circe (2026) โมบิลสูท กันดั้ม ฮาธาเวย์ ออฟ นิมฟ์ เซอร์ซี 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-mobile-suit-gundam-hathaway-the-sorcery-of-nymph-circe-2026",
    "postId": "39215",
    "sourcePageUrl": "https://www.24-hdx.com/mobile-suit-gundam-hathaway-the-sorcery-of-nymph-circe/"
  },
  {
    "titleTh": "Gone",
    "titleEn": "Gone",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Gone-2026-โกน.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Gone-2026-โกน.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=4a1e1644340b02eb6d4ca114&b=3648",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Gone (2026) โกน เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี รองรับมือถือและ Smart TV ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-gone-2026",
    "postId": "39424",
    "sourcePageUrl": "https://www.24-hdx.com/gone/"
  },
  {
    "titleTh": "Falcon Assault",
    "titleEn": "Falcon Assault",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Falcon-Assault-2026-เหยี่ยวล่าบุกระห่ำ.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Falcon-Assault-2026-เหยี่ยวล่าบุกระห่ำ.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=abc620f4784fc250e9bf6c56&b=2652",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Falcon Assault (2026) เหยี่ยวล่าบุกระห่ำ เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-falcon-assault-2026",
    "postId": "39220",
    "sourcePageUrl": "https://www.24-hdx.com/falcon-assault/"
  },
  {
    "titleTh": "Spider-Noir",
    "titleEn": "Spider-Noir",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Spider-Noir-2026-สไปเดอร์-นัวร์-ไอ้แมงมุมพันธุ์นรก.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Spider-Noir-2026-สไปเดอร์-นัวร์-ไอ้แมงมุมพันธุ์นรก.png",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=d0a969a322717d91af9ba870&b=7444",
    "sourceType": "embed",
    "description": "ดูซีรีย์ออนไลน์ Spider-Noir (2026) สไปเดอร์ นัวร์ ไอ้แมงมุมพันธุ์นรก พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HDS.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "9 ตอน",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-spider-noir-2026",
    "postId": "39404",
    "sourcePageUrl": "https://www.24-hdx.com/spider-noir/",
    "episodeUrls": {
      "1": "https://main.24playerhd.com/index_th.php?id=d0a969a322717d91af9ba870&b=3017",
      "2": "https://main.24playerhd.com/index_th.php?id=ba5e28287d9fe3ee339dc056&b=5466",
      "3": "https://main.24playerhd.com/index_th.php?id=55220e5bad47f59577944974&b=5050",
      "4": "https://main.24playerhd.com/index_th.php?id=3bf6c022ed86b6b53bd53013&b=1963",
      "5": "https://main.24playerhd.com/index_th.php?id=3a3e707937fb03cf4c7d67fd&b=8404",
      "6": "https://main.24playerhd.com/index_th.php?id=d6989a599e60cfb24d456c38&b=8683",
      "7": "https://main.24playerhd.com/index_th.php?id=4cdf1b30288c6fe9660e2582&b=6331",
      "8": "https://main.24playerhd.com/index_th.php?id=93c9ce4d6f4c1de15c2446f2&b=6836",
      "9": "https://main.24playerhd.com/index_th.php?id=d0a969a322717d91af9ba870&b=7444"
    }
  },
  {
    "titleTh": "Crazy Beggar SuQiEr",
    "titleEn": "Crazy Beggar SuQiEr",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Crazy-Beggar-SuQiEr-2026-ยาจกซู-หมัดเมาสะท้านฟ้า.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Crazy-Beggar-SuQiEr-2026-ยาจกซู-หมัดเมาสะท้านฟ้า.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=e037cf7238980a97174f63b0&b=9833",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Crazy Beggar SuQiEr (2026) ยาจกซู หมัดเมาสะท้านฟ้า เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-crazy-beggar-suqier-2026"
  },
  {
    "titleTh": "The Crash",
    "titleEn": "The Crash",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/The-Crash-2026-ชนยับ-อุบัติเหตุหรือฆาตกรรม.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/The-Crash-2026-ชนยับ-อุบัติเหตุหรือฆาตกรรม.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=b50c96c7c822402fef9fce44&b=7106",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ The Crash (2026) ชนยับ อุบัติเหตุหรือฆาตกรรม เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-the-crash-2026",
    "postId": "39139",
    "sourcePageUrl": "https://www.24-hdx.com/the-crash/"
  },
  {
    "titleTh": "Wuthering Heights",
    "titleEn": "Wuthering Heights",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Wuthering-Heights-2026-วัทเตอริ่ง-ไฮต์ส.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Wuthering-Heights-2026-วัทเตอริ่ง-ไฮต์ส.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=865455fe1ba5148a53938918&b=7918",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Wuthering Heights (2026) วัทเตอริ่ง ไฮต์ส เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-wuthering-heights-2026",
    "postId": "39225",
    "sourcePageUrl": "https://www.24-hdx.com/wuthering-heights/"
  },
  {
    "titleTh": "Swat Angels In Mission",
    "titleEn": "Swat Angels In Mission",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Swat-Angels-In-Mission-2026-ภารกิจนางฟ้าหน่วยสวาท.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Swat-Angels-In-Mission-2026-ภารกิจนางฟ้าหน่วยสวาท.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=1ce323d1cf333bc3d0a29bef&b=6027",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Swat Angels In Mission (2026) ภารกิจนางฟ้าหน่วยสวาท พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-swat-angels-in-mission-2026",
    "postId": "39290",
    "sourcePageUrl": "https://www.24-hdx.com/swat-angels-in-mission/"
  },
  {
    "titleTh": "Pegasus 3",
    "titleEn": "Pegasus 3",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Pegasus-3-2026-ซัดสุดแรง-แซงเต็มสปีด-3.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Pegasus-3-2026-ซัดสุดแรง-แซงเต็มสปีด-3.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=67526389b45f87ab4be524ca&b=2634",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Pegasus 3 (2026) ซัดสุดแรง แซงเต็มสปีด 3 เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-pegasus-3-3-2026",
    "postId": "39090",
    "sourcePageUrl": "https://www.24-hdx.com/pegasus-3/"
  },
  {
    "titleTh": "The Boys Season 5",
    "titleEn": "The Boys Season 5",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/04/The-Boys-Season-4-2024-ก๊วนหนุ่มซ่าล่าซูเปอร์ฮีโร่.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/04/The-Boys-Season-4-2024-ก๊วนหนุ่มซ่าล่าซูเปอร์ฮีโร่.png",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=663723f2f8f5726d4a2eddfd&b=7166",
    "sourceType": "embed",
    "description": "ดูซีรีย์ออนไลน์ The Boys Season 5 (2026) ก๊วนหนุ่มซ่าล่าซูเปอร์ฮีโร่ ซีซั่น 5 พากย์ไทย หนังใหม่ ดูหนังฟรี ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "8 ตอน",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-the-boys-season-5-5-2026",
    "postId": "38724",
    "sourcePageUrl": "https://www.24-hdx.com/the-boys-season-5/",
    "episodeUrls": {
      "1": "https://main.24playerhd.com/index_th.php?id=663723f2f8f5726d4a2eddfd&b=6418",
      "2": "https://main.24playerhd.com/index_th.php?id=49b61c77c9b38988ae796d21&b=2362",
      "3": "https://main.24playerhd.com/index_th.php?id=882a3ecc52f0e1ca3cf2550f&b=6838",
      "4": "https://main.24playerhd.com/index_th.php?id=27caebf2109f93f93a55a8dd&b=3262",
      "5": "https://main.24playerhd.com/index_th.php?id=cde1b474a2120356c38a7332&b=1122",
      "6": "https://main.24playerhd.com/index_th.php?id=1056802a305feeae419e0adf&b=5463",
      "7": "https://main.24playerhd.com/index_th.php?id=a344b068ff3d2f3df26ac863&b=8907",
      "8": "https://main.24playerhd.com/index_th.php?id=9624842b2190a9b0582f26f0&b=5578"
    }
  },
  {
    "titleTh": "Perfect Crown",
    "titleEn": "Perfect Crown",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Perfect-Crown-2026.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Perfect-Crown-2026.png",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=eba3f19d018ebf41cdd45305&b=6192",
    "sourceType": "embed",
    "description": "ดูซีรีย์ออนไลน์ Perfect Crown (2026) เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูซีรีย์ฟรี รองรับมือถือและ Smart TV ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "13 ตอน",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-perfect-crown-2026",
    "postId": "39271",
    "sourcePageUrl": "https://www.24-hdx.com/perfect-crown/",
    "episodeUrls": {
      "1": "https://main.24playerhd.com/index_th.php?id=eba3f19d018ebf41cdd45305&b=3526",
      "2": "https://main.24playerhd.com/index_th.php?id=ee20196ebe9cdfd6692eada2&b=7755",
      "3": "https://main.24playerhd.com/index_th.php?id=760ea050c20edae0a4c2aa7b&b=7099",
      "4": "https://main.24playerhd.com/index_th.php?id=582361311b8b7bc567d1dc35&b=7146",
      "5": "https://main.24playerhd.com/index_th.php?id=61c117d9b41fb3d6fd174e49&b=8174",
      "6": "https://main.24playerhd.com/index_th.php?id=817a0397c682444095fc00ec&b=7934",
      "7": "https://main.24playerhd.com/index_th.php?id=25536df0b134485d197476cf&b=3674",
      "8": "https://main.24playerhd.com/index_th.php?id=a6fab293274aab34795fc213&b=9683",
      "9": "https://main.24playerhd.com/index_th.php?id=6e048a146100395438485f26&b=2052",
      "10": "https://main.24playerhd.com/index_th.php?id=7ffa08dead0f8f6affa98c8a&b=3525",
      "11": "https://main.24playerhd.com/index_th.php?id=3e42513a9ec649d096825901&b=2921",
      "12": "https://main.24playerhd.com/index_th.php?id=c219e3fbb2bdef86dedd3a42&b=2478",
      "13": "https://main.24playerhd.com/index_th.php?id=eba3f19d018ebf41cdd45305&b=6192"
    }
  },
  {
    "titleTh": "Thief Female Hero",
    "titleEn": "Thief Female Hero",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Thief-Female-Hero-2026.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Thief-Female-Hero-2026.png",
    "episodes": [
      "ตอนที่ 1"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=7c046c22462f39e257cafb6f&b=4773",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Thief Female Hero (2026) เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี รองรับมือถือและ Smart TV ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "2 ชม. 0 นาที",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-thief-female-hero-2026",
    "postId": "39303",
    "sourcePageUrl": "https://www.24-hdx.com/thief-female-hero/"
  },
  {
    "titleTh": "Panor 2",
    "titleEn": "Panor 2",
    "year": 2026,
    "poster": "https://www.24-hdx.com/wp-content/uploads/2026/05/Panor-2-2026-พนอ-2.png",
    "backdrop": "https://www.24-hdx.com/wp-content/uploads/2026/05/Panor-2-2026-พนอ-2.png",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "videoUrl": "https://main.24playerhd.com/index_th.php?id=2ea7d8b80003ab7f82374a66&b=6215",
    "sourceType": "embed",
    "description": "ดูหนังออนไลน์ Panor 2 (2026) พนอ 2 เต็มเรื่อง พากย์ไทย ซับไทย หนังใหม่ ดูหนังฟรี รองรับมือถือและ Smart TV ไม่มีโฆณากวนใจได้ที่ 24-HD.COM",
    "rating": 6.5,
    "genres": [
      "สยองขวัญ",
      "ตลกคอมเมดี้",
      "การ์ตูน",
      "แฟนตาซี Sci-Fi",
      "แอคชั่น"
    ],
    "duration": "5 ตอน",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "24HDX",
    "id": "24hdx-panor-2-2-2026",
    "postId": "39166",
    "sourcePageUrl": "https://www.24-hdx.com/panor-2/",
    "episodeUrls": {
      "1": "https://main.24playerhd.com/index_th.php?id=2ea7d8b80003ab7f82374a66&b=9728",
      "2": "https://main.24playerhd.com/index_th.php?id=2ea7d8b80003ab7f82374a66&b=6215",
      "3": "https://main.24playerhd.com/index_th.php?id=2ea7d8b80003ab7f82374a66&b=6215",
      "4": "https://main.24playerhd.com/index_th.php?id=2ea7d8b80003ab7f82374a66&b=6215",
      "5": "https://main.24playerhd.com/index_th.php?id=2ea7d8b80003ab7f82374a66&b=6215"
    }
  },
  {
    "titleTh": "Tale of the Nine Tailed 2020 ตำนานรักจิ้งจอกเก้าหาง",
    "titleEn": "Tale of the Nine Tailed 2020 ตำนานรักจิ้งจอกเก้าหาง",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2020/10/Tale-of-the-Nine-Tailed.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2020/10/Tale-of-the-Nine-Tailed.jpg",
    "videoUrl": "https://torbo007.com/embed/ceb3c83bd540e8ccce41fda1bd272e3c",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Tale of the Nine Tailed 2020 ตำนานรักจิ้งจอกเก้าหาง ตอนที่1-16(จบ) พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "16 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-1",
    "sourcePageUrl": "https://goseries4k.com/tale-of-the-nine-tailed-2020-%e0%b8%95%e0%b8%b3%e0%b8%99%e0%b8%b2%e0%b8%99%e0%b8%a3%e0%b8%b1%e0%b8%81%e0%b8%88%e0%b8%b4%e0%b9%89%e0%b8%87%e0%b8%88%e0%b8%ad%e0%b8%81%e0%b9%80%e0%b8%81%e0%b9%89%e0%b8%b2/",
    "postId": "25163",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/ceb3c83bd540e8ccce41fda1bd272e3c",
      "2": "https://torbo007.com/embed/f3ce2e5ea3b48c8032fbaa6904e619e7",
      "3": "https://torbo007.com/embed/114655cf3d7a698efff907103257e64e",
      "4": "https://torbo007.com/embed/9b318670e3dcd350ead04473abfffc02",
      "5": "https://torbo007.com/embed/4d9c5bf30d20422c451f28bbea022ebb",
      "6": "https://torbo007.com/embed/8e878fc7a52a9aa107672a8c63abac03",
      "7": "https://torbo007.com/embed/1d03f6b8ae345aeff9fa1b464b672b7a",
      "8": "https://torbo007.com/embed/f11eafb4894dd11b0130620fa30a951a",
      "9": "https://torbo007.com/embed/016f4192968792b32a4677b2ed6198c0",
      "10": "https://torbo007.com/embed/51d9113b247799cd4349e9437a54c624",
      "11": "https://torbo007.com/embed/d72e1d29c7c8d1e214dc71791905b141",
      "12": "https://torbo007.com/embed/11498d384055e0dbaf2eae015740ff95",
      "13": "https://torbo007.com/embed/d4231e9f5530aed4fe75f8ac26606558",
      "14": "https://torbo007.com/embed/e62fdd59d9e163fb8b472319487b47ee",
      "15": "https://torbo007.com/embed/a0f057059444ce53e4d395271ebd1220",
      "16": "https://torbo007.com/embed/aed7a27d6791c578d61d06c3215be181"
    }
  },
  {
    "titleTh": "Detective Duo: Maiden and Horseman คู่นักสืบม้าศึก (2026)",
    "titleEn": "Detective Duo: Maiden and Horseman คู่นักสืบม้าศึก (2026)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/03/99-3.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/03/99-3.jpg",
    "videoUrl": "https://torbo007.com/embed/e04071f05c4df5c77b5121ef4b3fd90a",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Detective Duo: Maiden and Horseman คู่นักสืบม้าศึก (2026) พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "24 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20",
      "ตอนที่ 21",
      "ตอนที่ 22",
      "ตอนที่ 23",
      "ตอนที่ 24"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-2",
    "sourcePageUrl": "https://goseries4k.com/detective-duo-maiden-and-horseman/",
    "postId": "121864",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/e04071f05c4df5c77b5121ef4b3fd90a",
      "2": "https://torbo007.com/embed/4c64d4d99b6a690c33a3894eb4b71db5",
      "3": "https://torbo007.com/embed/ed01fe066cd8e18fb31e5cf9eadb333c",
      "4": "https://torbo007.com/embed/34fe6a8fcbe98f43ac0b46d91754d375",
      "5": "https://torbo007.com/embed/5f416ea0f510f3323f2324b29e759377",
      "6": "https://torbo007.com/embed/d3133a6ad3e9968e9d7921dd44ed1ff4",
      "7": "https://torbo007.com/embed/16df6c5a6f6b4983664fb20f471dc86f",
      "8": "https://torbo007.com/embed/caf41f3b4f21874930a3009d7f04f3aa",
      "9": "https://torbo007.com/embed/3b1ee2f7a13586b9b2f42792a22316d3",
      "10": "https://torbo007.com/embed/6fcfef057ed9cedec43f69e945093499",
      "11": "https://torbo007.com/embed/2c4cb766dd2df7c4f9ac8f9f7f699c0c",
      "12": "https://torbo007.com/embed/e1bfab076da410ccbd9e071b8f19b0f2",
      "13": "https://torbo007.com/embed/013dbe83dc7dcb8d51e058203f6f90da",
      "14": "https://torbo007.com/embed/3b9a6dfcda19a3c3727d77acfdd8cb29",
      "15": "https://torbo007.com/embed/3d6b42a889f7124559c39d03329bfa88",
      "16": "https://torbo007.com/embed/d2b25c9a93713facb309a323f2f8544a",
      "17": "https://torbo007.com/embed/8e0d43aa6963880e8eaac00c5e2fb095",
      "18": "https://torbo007.com/embed/93f2b657c5ecd7ee5f86f46d00552559",
      "19": "https://torbo007.com/embed/3529376cc952b11d0a73d0ffdf8e5e27",
      "20": "https://torbo007.com/embed/62f48a1c76fc80c59713bcd8614d0218",
      "21": "https://torbo007.com/embed/afb43e9691fe81333563b7af929e90a0",
      "22": "https://torbo007.com/embed/23f62cbbd09e6020480f2a4361fac581",
      "23": "https://torbo007.com/embed/016ffba72a0f0d35191f14ac85e83d07",
      "24": "https://torbo007.com/embed/e2fece6427d898b03b3e1a5263e5e250"
    }
  },
  {
    "titleTh": "The Practical Guide to Love เปิดนิยามรักคนโสดยุคใหม่",
    "titleEn": "The Practical Guide to Love เปิดนิยามรักคนโสดยุคใหม่",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/02/885.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/02/885.jpg",
    "videoUrl": "https://torbo007.com/embed/7abaa2cc68d069e5dec009e0cb6c0ded",
    "sourceType": "embed",
    "description": "ดูซีรีส์ The Practical Guide to Love เปิดนิยามรักคนโสดยุคใหม่ พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "12 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-3",
    "sourcePageUrl": "https://goseries4k.com/the-practical-guide-to-love/",
    "postId": "121389",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/7abaa2cc68d069e5dec009e0cb6c0ded",
      "2": "https://torbo007.com/embed/e7c1360c2fff1c9cd8633a7b07e4dfd9",
      "3": "https://torbo007.com/embed/ef6cde8072640fb27615fbfc24eaf3cf",
      "4": "https://torbo007.com/embed/0bf4cd5cbf790c3e9d451b30e73d603c",
      "5": "https://torbo007.com/embed/dc57c93ddc8cc6a3e7ceffdd83929a4d",
      "6": "https://torbo007.com/embed/818f1791b685a7e56b4ae5883e87a1a7",
      "7": "https://torbo007.com/embed/82dcf4493a2940be285a766e0749d146",
      "8": "https://torbo007.com/embed/3c5840c83f06a6b47f884b1a71322c55",
      "9": "https://torbo007.com/embed/11a4f291492e37df65d5df806434e5c7",
      "10": "https://torbo007.com/embed/d12a59ce8ed14a4a155e5d19bb7e62d1",
      "11": "https://torbo007.com/embed/fcb00abf056bb3a58579f29bd4ea3da3",
      "12": "https://torbo007.com/embed/c4b28170ab2f72373150e7dec5ad65eb"
    }
  },
  {
    "titleTh": "See You at Work Tomorrow! เจอกันที่ออฟฟิศพรุ่งนี้นะ!",
    "titleEn": "See You at Work Tomorrow! เจอกันที่ออฟฟิศพรุ่งนี้นะ!",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/06/99-7.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/06/99-7.jpg",
    "videoUrl": "https://torbo007.com/embed/e963f04ecfa7cf397bdb6768f74ce448",
    "sourceType": "embed",
    "description": "ดูซีรีส์ See You at Work Tomorrow! เจอกันที่ออฟฟิศพรุ่งนี้นะ! พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "12 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-4",
    "sourcePageUrl": "https://goseries4k.com/see-you-at-work-tomorrow/",
    "postId": "126426",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/e963f04ecfa7cf397bdb6768f74ce448",
      "2": "https://torbo007.com/embed/4ea64e01373499eb00d440a8d432c3d8",
      "3": "https://torbo007.com/embed/2656a4a0dbda98e2f411789816772c4c",
      "4": "https://torbo007.com/embed/fab3b1bf7e25aeccd911b1dee1607fb3",
      "5": "https://torbo007.com/embed/100e285aaadef01c73e0a884bd659a0d",
      "6": "https://torbo007.com/embed/4e3313c77a1528afb77679543e15f57f",
      "7": "https://torbo007.com/embed/3cf2d0b1feda3c07c6724ee7f06486ec",
      "8": "https://torbo007.com/embed/414339d8cc322ead629f269451824227",
      "9": "https://torbo007.com/embed/74a7d94436ed6e1d5ccbe0adfe146690",
      "10": "https://torbo007.com/embed/595637cd42616013418f4e456b98d403",
      "11": "https://torbo007.com/embed/fdec21c170b76a08520fe44e0136684f",
      "12": "https://torbo007.com/embed/949882d93d7a2794fd1af50a2ef861bd"
    }
  },
  {
    "titleTh": "ออนไลน์ Fallout season 2 (2025)",
    "titleEn": "ออนไลน์ Fallout season 2 (2025)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2025/12/9-5.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2025/12/9-5.jpg",
    "videoUrl": "https://torbo007.com/embed/388afdd9e07e8d956b7398c3ab151729",
    "sourceType": "embed",
    "description": "ดูซีรีส์ ออนไลน์ Fallout season 2 (2025)  -8 จบ G4 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "8 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-5",
    "sourcePageUrl": "https://goseries4k.com/fallout/",
    "postId": "116967",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/388afdd9e07e8d956b7398c3ab151729",
      "2": "https://torbo007.com/embed/ac3363c1495cd45e43582a9bdf064659",
      "3": "https://torbo007.com/embed/771fb63c3477708003398afbf058049a",
      "4": "https://torbo007.com/embed/7eb3b4faea2094b4c5ec30a8fe3e4b1c",
      "5": "https://torbo007.com/embed/b96fbed781ff863f4c8a82b6d2db4d48",
      "6": "https://torbo007.com/embed/5d2cb57a53c430cd4d5b43a3bd99444d",
      "7": "https://torbo007.com/embed/2b469f2029704edc26340b32b196cba0",
      "8": "https://torbo007.com/embed/b953e628288ca7f061d6e3748fb9f9b3"
    }
  },
  {
    "titleTh": "Blossom of Power บุหงาซ่อนคม (2026) /ซับไท G4",
    "titleEn": "Blossom of Power บุหงาซ่อนคม (2026) /ซับไท G4",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/06/9-15.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/06/9-15.jpg",
    "videoUrl": "https://torbo007.com/embed/f82faf9929cb98959bc1042f36bc7a28",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Blossom of Power บุหงาซ่อนคม (2026) /ซับไท G4 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "22 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20",
      "ตอนที่ 21",
      "ตอนที่ 22"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-6",
    "sourcePageUrl": "https://goseries4k.com/blossom-of-power/",
    "postId": "127741",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/3262a63db7e8b6f928c3415275edf8ff",
      "2": "https://torbo007.com/embed/6d835932f22c9f6535b4f04fd19ec43a",
      "3": "https://torbo007.com/embed/70530fc821dd1695d12c5f96c37c4404",
      "4": "https://torbo007.com/embed/d10b23aa6851f5ae7ec2af681ee290bc",
      "5": "https://torbo007.com/embed/c1917a6a4065d38db7496ac7fa190e65",
      "6": "https://torbo007.com/embed/1840fc0cdec38ce4c23b19f8b40cc597",
      "7": "https://torbo007.com/embed/f9b2590c4ced887f86863372acf81956",
      "8": "https://torbo007.com/embed/4f3501533c17244b0d4ef3530f590ed7",
      "9": "https://torbo007.com/embed/f125f4c53fd8eb745bb8fa270072f986",
      "10": "https://torbo007.com/embed/15afe12503639fd9831c73da69ba9376",
      "11": "https://torbo007.com/embed/1e28b058f3c579516f158e746beb844e",
      "12": "https://torbo007.com/embed/d7de79619214c85a2f240b37aefad7af",
      "13": "https://torbo007.com/embed/50684afa18e2179616c82844fe2ab67e",
      "14": "https://torbo007.com/embed/5640b9d528fa61aeac68dbee9b90b231",
      "15": "https://torbo007.com/embed/a6077c2e969301958e88d935dd6d8f8c",
      "16": "https://torbo007.com/embed/958f71b0811fc5f7ea1dddc5ddcb594f",
      "17": "https://torbo007.com/embed/b7a09cbc4f37b0e23c2e42b745374068",
      "18": "https://torbo007.com/embed/128633a2de8ef41d82ac71920d64eca5",
      "19": "https://torbo007.com/embed/82e3ef11419b65ad657796974fa00747",
      "20": "https://torbo007.com/embed/9357563ea9a9f2474e9525319c26226e",
      "21": "https://torbo007.com/embed/88b2603ad9b2ecd3f3c7d467d9c77f3f",
      "22": "https://torbo007.com/embed/5bb28cc6e4e936bda4b97a5061200a77"
    }
  },
  {
    "titleTh": "ออนไลน์ Man Vs Baby (2025)",
    "titleEn": "ออนไลน์ Man Vs Baby (2025)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2025/12/55.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2025/12/55.jpg",
    "videoUrl": "https://torbo007.com/embed/5084add82f28f4bc6364f8c45138c1d0",
    "sourceType": "embed",
    "description": "ดูซีรีส์ ออนไลน์ Man Vs Baby (2025)  -4 จบ G4 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "4 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-7",
    "sourcePageUrl": "https://goseries4k.com/man-vs-baby/",
    "postId": "116637",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/5084add82f28f4bc6364f8c45138c1d0",
      "2": "https://torbo007.com/embed/418c19b92180784a65079cb004f07c70",
      "3": "https://torbo007.com/embed/186dcf4cfc305d2d72465ae77aae5288",
      "4": "https://torbo007.com/embed/7c28076bd387252132580b825544d0fb"
    }
  },
  {
    "titleTh": "Monster: The Ed Gein Story ปีศาจ เรื่องราวของเอ็ด กีน",
    "titleEn": "Monster: The Ed Gein Story ปีศาจ เรื่องราวของเอ็ด กีน",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2025/10/3.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2025/10/3.jpg",
    "videoUrl": "https://torbo007.com/embed/02ca3b3fc87ff6af6066f9265a21c060",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Monster: The Ed Gein Story ปีศาจ เรื่องราวของเอ็ด กีน พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "8 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-8",
    "sourcePageUrl": "https://goseries4k.com/monster-the-ed-gein-story-v2/",
    "postId": "112022",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/02ca3b3fc87ff6af6066f9265a21c060",
      "2": "https://torbo007.com/embed/879548c15724d07a1f78dedc41d6bede",
      "3": "https://torbo007.com/embed/73db48f6c85df85d180279575bd8bce4",
      "4": "https://torbo007.com/embed/e637ab3719d73d510e88355662aee263",
      "5": "https://torbo007.com/embed/9fcf90d5efa5bb86dae4f81ceee64e6e",
      "6": "https://torbo007.com/embed/4aadb38de254bdfaff96e118852467ad",
      "7": "https://torbo007.com/embed/1f05fc28f70950a0d8754ea808c2c1bc",
      "8": "https://torbo007.com/embed/c91f0cfbc9ab2a323f223375f14803bc"
    }
  },
  {
    "titleTh": "The Husband (2026)",
    "titleEn": "The Husband (2026)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/06/9-14.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/06/9-14.jpg",
    "videoUrl": "https://mycdn-hd.xyz/player/index.php?data=670fb2f689bec017e618ab7ec99c2308",
    "sourceType": "embed",
    "description": "ดูซีรีส์ The Husband (2026)  -12 จบ G4 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "6 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-9",
    "sourcePageUrl": "https://goseries4k.com/the-husband/",
    "postId": "127008",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/9ba064da76515108752a29b2a08cc7d9",
      "2": "https://torbo007.com/embed/99f0cd50ed1558df83620e811bed66e7",
      "3": "https://torbo007.com/embed/0f589854cfc32f429e6642bca8393d4b",
      "4": "https://torbo007.com/embed/f8a139ac8e45afde26b4e0ff33a9048e",
      "5": "https://torbo007.com/embed/82db0a18ac0ccd14822dfcba3a824dc1",
      "6": "https://torbo007.com/embed/2f4a07487a97d56e62b1cfdf194b04fa"
    }
  },
  {
    "titleTh": "ซีรี่ย์จีน Kill My Sins (2025) ล้างบ่วงบาป / EP1-30",
    "titleEn": "ซีรี่ย์จีน Kill My Sins (2025) ล้างบ่วงบาป / EP1-30",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2025/03/ซีรี่ย์จีน-Kill-My-Sins-2025-ล้างบ่วงบาป.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2025/03/ซีรี่ย์จีน-Kill-My-Sins-2025-ล้างบ่วงบาป.jpg",
    "videoUrl": "https://torbo007.com/embed/53f3eeaec83a2219c0fc076ec299dbbe",
    "sourceType": "embed",
    "description": "ดูซีรีส์ ซีรี่ย์จีน Kill My Sins (2025) ล้างบ่วงบาป / EP1-30 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์จีน",
      "พากย์ไทย"
    ],
    "duration": "30 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20",
      "ตอนที่ 21",
      "ตอนที่ 22",
      "ตอนที่ 23",
      "ตอนที่ 24",
      "ตอนที่ 25",
      "ตอนที่ 26",
      "ตอนที่ 27",
      "ตอนที่ 28",
      "ตอนที่ 29",
      "ตอนที่ 30"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-10",
    "sourcePageUrl": "https://goseries4k.com/kill-my-sins/",
    "postId": "94931",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/53f3eeaec83a2219c0fc076ec299dbbe",
      "2": "https://torbo007.com/embed/4e287033d685445be97c8131be0c2853",
      "3": "https://torbo007.com/embed/5242e10ce781840f7fbab02f966a6edf",
      "4": "https://torbo007.com/embed/3e94aeced2fe3eb57bfda2c311d60337",
      "5": "https://torbo007.com/embed/cdc53a932dda80b30c68a50b29ff3e55",
      "6": "https://torbo007.com/embed/28d54e921a6baddf283eab82a32be575",
      "7": "https://torbo007.com/embed/9afca596cdb3ce96502527b38bf33110",
      "8": "https://torbo007.com/embed/c8a83c731bbc25bdacb8a578dd4c73ef",
      "9": "https://torbo007.com/embed/c4f83d744906b0635b35f15513c55330",
      "10": "https://torbo007.com/embed/ad325eecca3cb633e3831e201a5003f9",
      "11": "https://torbo007.com/embed/f1bf1ac4be7ea74f3227bd9f843436af",
      "12": "https://torbo007.com/embed/ed06ea7d9bfab2098995822093329c44",
      "13": "https://torbo007.com/embed/ace1fbc527961f80ca41de627f74de94",
      "14": "https://torbo007.com/embed/dd122a024e7374c2cc6cdb0baf1ae74b",
      "15": "https://torbo007.com/embed/4aad54e229a1b889714ded444935a1a8",
      "16": "https://torbo007.com/embed/fcd212bb46a2efaa75ed59447733a1b5",
      "17": "https://torbo007.com/embed/681ca7e714968bce643c2181a1fb6b61",
      "18": "https://torbo007.com/embed/23844fc89496f54bbe276b7d2f334156",
      "19": "https://torbo007.com/embed/bdf7c9cf5e345a4ce1675c6f4d260b60",
      "20": "https://torbo007.com/embed/c3fe4a8323065d973992c5cee7b5cfd7",
      "21": "https://torbo007.com/embed/8322e5a3b44ff21467c76b5f79d2bf98",
      "22": "https://torbo007.com/embed/47f158f8093b5dd6bf1a413ab5713e54",
      "23": "https://torbo007.com/embed/e0b8f53ae992257670b47af04a2a9aff",
      "24": "https://torbo007.com/embed/32bfaa0204bd1105c673c86eab65dff1",
      "25": "https://torbo007.com/embed/0c309c28c412f7095f1657ee690c4468",
      "26": "https://torbo007.com/embed/60e0df7d43716a0d0c97ae69e88ec088",
      "27": "https://torbo007.com/embed/d2c169cdec2df92c0dc24d3442405689",
      "28": "https://torbo007.com/embed/4566431069e326377c80525dc7cf7e9f",
      "29": "https://torbo007.com/embed/8bb39029b55c2edb3f4ced27a8462543",
      "30": "https://torbo007.com/embed/f1f96e2e63b393f0b8bb193376e034be"
    }
  },
  {
    "titleTh": "เมื่อรักเลือนจาก () What Comes After Love -6",
    "titleEn": "เมื่อรักเลือนจาก () What Comes After Love -6",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2024/12/1-9.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2024/12/1-9.jpg",
    "videoUrl": "https://torbo007.com/embed/bcb3710840da88cb35c145370559229c",
    "sourceType": "embed",
    "description": "ดูซีรีส์ เมื่อรักเลือนจาก () What Comes After Love -6 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "6 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-11",
    "sourcePageUrl": "https://goseries4k.com/what-comes-after-love/",
    "postId": "90995",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/bcb3710840da88cb35c145370559229c",
      "2": "https://torbo007.com/embed/52f5c59c0bdfbaad0e38838b04029dbe",
      "3": "https://torbo007.com/embed/2bbbbe8206750ffb9d04acf6a97bc572",
      "4": "https://torbo007.com/embed/d12134fb904eb02847087dbe60f46270",
      "5": "https://torbo007.com/embed/0135e60ef2b0028b92826139ffa8eee7",
      "6": "https://torbo007.com/embed/46931e4d376212340469ebdb9b1d7c84"
    }
  },
  {
    "titleTh": "My Lovely Wife (2023) ภรรยาใบ้ผู้น่ารัก",
    "titleEn": "My Lovely Wife (2023) ภรรยาใบ้ผู้น่ารัก",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2023/11/ภรรยาใบ้ผู้น่ารัก.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2023/11/ภรรยาใบ้ผู้น่ารัก.jpg",
    "videoUrl": "https://torbo007.com/embed/493381ac9e9f6e474dcc63fde0d1bd43",
    "sourceType": "embed",
    "description": "ดูซีรีส์ My Lovely Wife (2023) ภรรยาใบ้ผู้น่ารัก  ตอนที่1-22 (End) - Goseries4k พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "22 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20",
      "ตอนที่ 21",
      "ตอนที่ 22"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-12",
    "sourcePageUrl": "https://goseries4k.com/my-lovely-wife-2023-%e0%b8%a0%e0%b8%a3%e0%b8%a3%e0%b8%a2%e0%b8%b2%e0%b9%83%e0%b8%9a%e0%b9%89%e0%b8%9c%e0%b8%b9%e0%b9%89%e0%b8%99%e0%b9%88%e0%b8%b2%e0%b8%a3%e0%b8%b1%e0%b8%81-%e0%b8%9e%e0%b8%b2/",
    "postId": "72086",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/493381ac9e9f6e474dcc63fde0d1bd43",
      "2": "https://torbo007.com/embed/543ccf277ac26b10080f5c014fed050c",
      "3": "https://torbo007.com/embed/404efbdd5041760cff360fc98c3d513a",
      "4": "https://torbo007.com/embed/a5a09c3a58926fd44412ff895ec37668",
      "5": "https://torbo007.com/embed/78a907da69f6264666d86d17d1773c85",
      "6": "https://torbo007.com/embed/88463b5e3282d18da740795ed51a1398",
      "7": "https://torbo007.com/embed/2577fa5d703c3a954fc8271ddfa0c07c",
      "8": "https://torbo007.com/embed/ad96a790b6e642ba9a52ffe367bdc3c0",
      "9": "https://torbo007.com/embed/357595b02e9235076f8433ab4b1ff83f",
      "10": "https://torbo007.com/embed/fa07f90a5ddf2d3fe12d83f0029d01d4",
      "11": "https://torbo007.com/embed/931427770d8ca2c8a802149cc229656a",
      "12": "https://torbo007.com/embed/8bbb4607f7b9990a85cf52ac330e3964",
      "13": "https://torbo007.com/embed/f58d23265bc8fdcef888e9aa5710750d",
      "14": "https://torbo007.com/embed/e91f50334c3458fcb4336df6451f7f68",
      "15": "https://torbo007.com/embed/a0a6d673ac2bcea854f0869b3da63a91",
      "16": "https://torbo007.com/embed/f7274cbcadc7a615fd7beb1b847b78b3",
      "17": "https://torbo007.com/embed/39ee282b4098ce7777885de3ec4896dd",
      "18": "https://torbo007.com/embed/fe3d2cd6d7f416a96d053fa653382874",
      "19": "https://torbo007.com/embed/8d1e33dbd6575601ea3909df5c528c3a",
      "20": "https://torbo007.com/embed/2e741785f3b2c75d001f30c647b733a5",
      "21": "https://torbo007.com/embed/71af4885dee7117e083717a81b56629b",
      "22": "https://torbo007.com/embed/d0e0ae51adf069431dc4646ce0a4b42a"
    }
  },
  {
    "titleTh": "My Girlfriend สะกดใจให้เจอเธอ",
    "titleEn": "My Girlfriend สะกดใจให้เจอเธอ",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2020/10/สะกดใจให้เจอเธอ.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2020/10/สะกดใจให้เจอเธอ.jpg",
    "videoUrl": "https://torbo007.com/embed/d5f4daf001a27970f1b439b1283cfaa6",
    "sourceType": "embed",
    "description": "ดูซีรีส์ My Girlfriend สะกดใจให้เจอเธอ ตอนที่ 1-28 (จบ) พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "28 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20",
      "ตอนที่ 21",
      "ตอนที่ 22",
      "ตอนที่ 23",
      "ตอนที่ 24",
      "ตอนที่ 25",
      "ตอนที่ 26",
      "ตอนที่ 27",
      "ตอนที่ 28"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-13",
    "sourcePageUrl": "https://goseries4k.com/%e0%b8%aa%e0%b8%b0%e0%b8%81%e0%b8%94%e0%b9%83%e0%b8%88%e0%b9%83%e0%b8%ab%e0%b9%89%e0%b9%80%e0%b8%88%e0%b8%ad%e0%b9%80%e0%b8%98%e0%b8%ad/",
    "postId": "18807",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/d5f4daf001a27970f1b439b1283cfaa6",
      "2": "https://torbo007.com/embed/b8a353a413c2770b1fda0532833d81c8",
      "3": "https://torbo007.com/embed/ebabd87efd7ecd58fa8fca5d333fbc3b",
      "4": "https://torbo007.com/embed/f2648e9df9775737c266d02bf041a0e0",
      "5": "https://torbo007.com/embed/8306bb6a061639d49a51735e32200d53",
      "6": "https://torbo007.com/embed/82fc5a040e8b9a0b4603b07532588dc4",
      "7": "https://torbo007.com/embed/25a972308e0c1b2870121f0cc7fd6811",
      "8": "https://torbo007.com/embed/7ba8d3bef6d8a0138a3387d66e30be2c",
      "9": "https://torbo007.com/embed/74e1947fb7a96244bc34066a952a27a3",
      "10": "https://torbo007.com/embed/4b4a972883e44a5aaaf13a3610273f1e",
      "11": "https://torbo007.com/embed/af272248b57d4d70110879421fa22183",
      "12": "https://torbo007.com/embed/c172ce769ffb630d473ea9bcef4391d2",
      "13": "https://torbo007.com/embed/c4f60eda1a7956a7517361c731c44712",
      "14": "https://torbo007.com/embed/bfdd7cc99fb40edc6f7e87862d97fbc1",
      "15": "https://torbo007.com/embed/22a9500855bfd35490d7e3ddc2edc624",
      "16": "https://torbo007.com/embed/8d95f53767b7d51c4d3c035df13c8807",
      "17": "https://torbo007.com/embed/58c5a4086f15a6d36c538936b1a3d34c",
      "18": "https://torbo007.com/embed/7d32007e5e26efbb90470553f9593376",
      "19": "https://torbo007.com/embed/75bbe33ea27085c1767f9fec39329ba1",
      "20": "https://torbo007.com/embed/a2a35d05bf1cdfa1b824d793f6f39229",
      "21": "https://torbo007.com/embed/feae23f5a601174116d6e461c3387ac1",
      "22": "https://torbo007.com/embed/70a27390f62947a18da4134c629dbe09",
      "23": "https://torbo007.com/embed/65bebc90ad252c5e08ceb15f89da18d0",
      "24": "https://torbo007.com/embed/96525272ba2dc94dd04a29cf0ece93ee",
      "25": "https://torbo007.com/embed/56d202107da0fea482a085d4a2212cb8",
      "26": "https://torbo007.com/embed/8a86182c51d2f27041b11c3e7df2c523",
      "27": "https://torbo007.com/embed/ddd005bb7f86585125a57e774b15cd78",
      "28": "https://torbo007.com/embed/ceca7638cb396b5c4f258719788248a8"
    }
  },
  {
    "titleTh": "Daily Dose of Sunshine (2023) รับแดดอุ่น กรุ่นไอรัก",
    "titleEn": "Daily Dose of Sunshine (2023) รับแดดอุ่น กรุ่นไอรัก",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2023/11/รับแดดอุ่น-กรุ่นไอรัก.webp",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2023/11/รับแดดอุ่น-กรุ่นไอรัก.webp",
    "videoUrl": "https://torbo007.com/embed/ec55712ebd2c56eff1854b37d65ca5c8",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Daily Dose of Sunshine (2023) รับแดดอุ่น กรุ่นไอรัก  ตอนที่1-12 (End) - Goseries4k พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "12 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-14",
    "sourcePageUrl": "https://goseries4k.com/daily-dose-of-sunshine-2023-%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b9%81%e0%b8%94%e0%b8%94%e0%b8%ad%e0%b8%b8%e0%b9%88%e0%b8%99-%e0%b8%81%e0%b8%a3%e0%b8%b8%e0%b9%88%e0%b8%99%e0%b9%84%e0%b8%ad%e0%b8%a3/",
    "postId": "71789",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/ec55712ebd2c56eff1854b37d65ca5c8",
      "2": "https://torbo007.com/embed/02c935879b58a6353d20c0e8ae1daaa8",
      "3": "https://torbo007.com/embed/4467dc7f2d32898632935121fba7ffc7",
      "4": "https://torbo007.com/embed/e2cf4212aa7d0196e9039c8e6592db98",
      "5": "https://torbo007.com/embed/88e2404e5696394f69ae9d4447a07a96",
      "6": "https://torbo007.com/embed/75a838574796d38bfe09f3d5db0797b2",
      "7": "https://torbo007.com/embed/0e79578ffd6f14262051b624a6c63972",
      "8": "https://torbo007.com/embed/d63f4b45928cfcb604ceada8254b66a3",
      "9": "https://torbo007.com/embed/8596790dfa11cae7420e99d527cc0570",
      "10": "https://torbo007.com/embed/bf7ea2c2cbc3a66ff5e91035962c0f69",
      "11": "https://torbo007.com/embed/22fde0176abf81197d5d69363295ae56",
      "12": "https://torbo007.com/embed/dfc80a87b7ad78ad783af41dfe37e56b"
    }
  },
  {
    "titleTh": "The Night Manager 2 สายลับสองหน้าผ่าองค์กรเถื่อน 2 (2026)",
    "titleEn": "The Night Manager 2 สายลับสองหน้าผ่าองค์กรเถื่อน 2 (2026)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/01/9-5.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/01/9-5.jpg",
    "videoUrl": "https://torbo007.com/embed/8987bac996c9ffce01e9526597064eac",
    "sourceType": "embed",
    "description": "ดูซีรีส์ The Night Manager 2 สายลับสองหน้าผ่าองค์กรเถื่อน 2 (2026) พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "6 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-15",
    "sourcePageUrl": "https://goseries4k.com/the-night-manager/",
    "postId": "118833",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/8987bac996c9ffce01e9526597064eac",
      "2": "https://torbo007.com/embed/8b203a948f6ad94907c55f5793821163",
      "3": "https://torbo007.com/embed/cb2f0183a69702991014d35cf6094803",
      "4": "https://torbo007.com/embed/c6e1af5544fcf1ee84f818356df39fb1",
      "5": "https://torbo007.com/embed/61318303846cc0c84a027f25ace9a3bf",
      "6": "https://torbo007.com/embed/2c9f6a4ac171a9f2fc2d877bbb7ddcee"
    }
  },
  {
    "titleTh": "The Bionic Life (2023) ไขคดีปริศนามนุษย์ไบโอนิค",
    "titleEn": "The Bionic Life (2023) ไขคดีปริศนามนุษย์ไบโอนิค",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2023/11/ไขคดีปริศนามนุษย์ไบโอนิค.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2023/11/ไขคดีปริศนามนุษย์ไบโอนิค.jpg",
    "videoUrl": "https://torbo007.com/embed/c32bfa62fe540f5ac6aa3e40a38f9b89",
    "sourceType": "embed",
    "description": "ดูซีรีส์ The Bionic Life (2023) ไขคดีปริศนามนุษย์ไบโอนิค  ตอนที่1-12 (จบ) - Goseries4k พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "12 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-16",
    "sourcePageUrl": "https://goseries4k.com/the-bionic-life-2023-%e0%b9%84%e0%b8%82%e0%b8%84%e0%b8%94%e0%b8%b5%e0%b8%9b%e0%b8%a3%e0%b8%b4%e0%b8%a8%e0%b8%99%e0%b8%b2%e0%b8%a1%e0%b8%99%e0%b8%b8%e0%b8%a9%e0%b8%a2%e0%b9%8c%e0%b9%84%e0%b8%9a-2/",
    "postId": "71855",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/c32bfa62fe540f5ac6aa3e40a38f9b89",
      "2": "https://torbo007.com/embed/2c5d4b139d2a5ed599d2efc7c63db497",
      "3": "https://torbo007.com/embed/be920b0f55f9048588fc02eee8366873",
      "4": "https://torbo007.com/embed/ac8284090a33f72c1774c73558c36150",
      "5": "https://torbo007.com/embed/3f236f92227e76d109c95288f559fdf9",
      "6": "https://torbo007.com/embed/d10b0c1bb2ed3e0c044f616b1cfaff04",
      "7": "https://torbo007.com/embed/bccd7d1d8e303b37356817484b89a66b",
      "8": "https://torbo007.com/embed/1eb7b01c4a9075f4fa7d23ae73e5e710",
      "9": "https://torbo007.com/embed/a6f18ffe57aeff710d01ff14b945705f",
      "10": "https://torbo007.com/embed/8b27eb5dc039fca5ea914c747a8b5936",
      "11": "https://torbo007.com/embed/79c8cceb955d1613108b3bd988ef4bd7",
      "12": "https://torbo007.com/embed/83fab0018e175c33896aa507684f9d38"
    }
  },
  {
    "titleTh": "ภารกิจซ่อนเงา THE ASSET (2025)",
    "titleEn": "ภารกิจซ่อนเงา THE ASSET (2025)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2025/10/8522.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2025/10/8522.jpg",
    "videoUrl": "https://torbo007.com/embed/42a5c290dc9d98823129bb16fad4cf29",
    "sourceType": "embed",
    "description": "ดูซีรีส์ ภารกิจซ่อนเงา THE ASSET (2025)  -6 จบ G4. พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "6 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-17",
    "sourcePageUrl": "https://goseries4k.com/the-asset/",
    "postId": "113330",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/42a5c290dc9d98823129bb16fad4cf29",
      "2": "https://torbo007.com/embed/1aea33e473c4834e35c6642ffacdf442",
      "3": "https://torbo007.com/embed/d71543b6e827b47a74c2ac55490f19f8",
      "4": "https://torbo007.com/embed/82db0743ead5078fccf627743bbdfb48",
      "5": "https://torbo007.com/embed/9400a20cb6dad8c03ecb0676825fca51",
      "6": "https://torbo007.com/embed/67843aca9e65490097caa3543a827194"
    }
  },
  {
    "titleTh": "The MonsterOfFlorence ปีศาจแห่งฟลอเรนซ์ (2025)",
    "titleEn": "The MonsterOfFlorence ปีศาจแห่งฟลอเรนซ์ (2025)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2025/10/2222.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2025/10/2222.jpg",
    "videoUrl": "https://torbo007.com/embed/36e90463e087093889fff49f75ef5ea4",
    "sourceType": "embed",
    "description": "ดูซีรีส์ The MonsterOfFlorence ปีศาจแห่งฟลอเรนซ์ (2025) พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "4 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-18",
    "sourcePageUrl": "https://goseries4k.com/themonsterofflorence/",
    "postId": "113057",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/36e90463e087093889fff49f75ef5ea4",
      "2": "https://torbo007.com/embed/4c03a3e26bcea7a3d59e8df70da28c4e",
      "3": "https://torbo007.com/embed/04d1fdf8337e52bb71765bbc29d020a4",
      "4": "https://torbo007.com/embed/33e4e2a3d2f05aa1abdc32b8cdc3721d"
    }
  },
  {
    "titleTh": "house of the dragon season 3",
    "titleEn": "house of the dragon season 3",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/06/9-6.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/06/9-6.jpg",
    "videoUrl": "https://torbo007.com/embed/e153fc21a20445e88949dd1846394d03",
    "sourceType": "embed",
    "description": "ดูซีรีส์ house of the dragon season 3 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "8 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-19",
    "sourcePageUrl": "https://goseries4k.com/house-of-the-dragon/",
    "postId": "126374",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/e153fc21a20445e88949dd1846394d03",
      "2": "https://torbo007.com/embed/a88184725c2bd153c9db82deee76979d",
      "3": "https://torbo007.com/embed/f23ed4b4128c45a35ef43c8a683aa95c",
      "4": "https://torbo007.com/embed/c44b7ed12d7ee47afe0e706d64d5a27e",
      "5": "https://torbo007.com/embed/acb5df1f4bd72b0c93aad84cbc91a88a",
      "6": "https://torbo007.com/embed/86a89825e5d1f0b33cec0502cb0507e5",
      "7": "https://torbo007.com/embed/e436ddb3d198702234be2a8456850e52",
      "8": "https://torbo007.com/embed/003ec0ddf94bbb66671e05da13c44325"
    }
  },
  {
    "titleTh": "The Night Agent: Season 3",
    "titleEn": "The Night Agent: Season 3",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/02/9-9.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/02/9-9.jpg",
    "videoUrl": "https://torbo007.com/embed/bcdf356fc32b37e312c851f6b24afa0d",
    "sourceType": "embed",
    "description": "ดูซีรีส์ The Night Agent: Season 3  -10 จบ G4 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "10 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-20",
    "sourcePageUrl": "https://goseries4k.com/the-night-agent-season-3/",
    "postId": "120886",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/bcdf356fc32b37e312c851f6b24afa0d",
      "2": "https://torbo007.com/embed/d34eed0bbbed4e79d5151e0bffb73ca9",
      "3": "https://torbo007.com/embed/1a439b0f7bea73f550fdc3b9c8ebd2ae",
      "4": "https://torbo007.com/embed/7f05acb63fa5d4ffb2cdb5df9184907a",
      "5": "https://torbo007.com/embed/df6086501b27449cc120b0493204dc46",
      "6": "https://torbo007.com/embed/46864d0d5063159bd9de384227d1c2da",
      "7": "https://torbo007.com/embed/92e9512ea144c100aa8cd90a5c1ba031",
      "8": "https://torbo007.com/embed/9bce267463c909ae97847a3e9ade27a7",
      "9": "https://torbo007.com/embed/3da2f191347455f7cfc1f13ff10b44f6",
      "10": "https://torbo007.com/embed/ab19bb93aefecf7de3e4223af3dbc060"
    }
  },
  {
    "titleTh": "ซีรี่ย์จีน เมื่อหัวใจห่างไกลรัก",
    "titleEn": "ซีรี่ย์จีน เมื่อหัวใจห่างไกลรัก",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2025/03/ซีรี่ย์จีน-เมื่อหัวใจห่างไกลรัก.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2025/03/ซีรี่ย์จีน-เมื่อหัวใจห่างไกลรัก.jpg",
    "videoUrl": "https://torbo007.com/embed/32c52a89726ce316942c025d3f6b64ab",
    "sourceType": "embed",
    "description": "ดูซีรีส์ ซีรี่ย์จีน เมื่อหัวใจห่างไกลรัก พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์จีน",
      "พากย์ไทย"
    ],
    "duration": "31 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20",
      "ตอนที่ 21",
      "ตอนที่ 22",
      "ตอนที่ 23",
      "ตอนที่ 24",
      "ตอนที่ 25",
      "ตอนที่ 26",
      "ตอนที่ 27",
      "ตอนที่ 28",
      "ตอนที่ 29",
      "ตอนที่ 30",
      "ตอนที่ 31"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-21",
    "sourcePageUrl": "https://goseries4k.com/love-in-the-edge-of-divorce/",
    "postId": "129827",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/4ccd74429baddf35736345070728da49",
      "2": "https://torbo007.com/embed/4ec56720699261e9d929d3bcd8a5b920",
      "3": "https://torbo007.com/embed/24d3188c4c403f243abc5f8c1653b172",
      "4": "https://torbo007.com/embed/f7a46265c742b915fe0f9decafd11a96",
      "5": "https://torbo007.com/embed/89db5b59ac6b587ecb8783591d6b3326",
      "6": "https://torbo007.com/embed/ec9ee0dd2bbbe65213f73fc2c20ca41d",
      "7": "https://torbo007.com/embed/3c952d26c0ae2da3ed9fd0d045a22aec",
      "8": "https://torbo007.com/embed/ef81b505d5c045bc08b795c3793074b6",
      "9": "https://torbo007.com/embed/18bf8ec128b82fbc906414d00f9f0e3b",
      "10": "https://torbo007.com/embed/a89e9aba1a63cc01b8c13b34ea1e9d68",
      "11": "https://torbo007.com/embed/5895d103cc6fbfc121fbfd70d01592e2",
      "12": "https://torbo007.com/embed/6b5275aaabced4109e7212a0df27a146",
      "13": "https://torbo007.com/embed/fe2f7618c87b8daddc1bb42c7d1f2b21",
      "14": "https://torbo007.com/embed/b74cda9b38106abc9b069bf64addf061",
      "15": "https://torbo007.com/embed/7daef83c5cb35ff4693daf42f313248d",
      "16": "https://torbo007.com/embed/1d9b185de4bc3e4d90d89bf945359970",
      "17": "https://torbo007.com/embed/2f57049cd4a297f1d02ef27fa03d09c4",
      "18": "https://torbo007.com/embed/fd2ff0d3aa4db3fdd8bd4f00f82db675",
      "19": "https://torbo007.com/embed/f23f68521f48f4ab9a698d70d43845b3",
      "20": "https://torbo007.com/embed/92c6ae2aaa5db95d6671a7662a4eec81",
      "21": "https://torbo007.com/embed/042ccd0d4ca9039896c34db377ce5ff2",
      "22": "https://torbo007.com/embed/033cc2aa39ae747175d5e7cd0c2ca922",
      "23": "https://torbo007.com/embed/4ccbbe0414afe71e1bb9f94fe6ceefef",
      "24": "https://torbo007.com/embed/0324b0627be19ba416981e2fe0f2fdaf",
      "25": "https://torbo007.com/embed/8ecaf0744f574cf99e321cc23a66cbb4",
      "26": "https://torbo007.com/embed/1dc8ebed7b70fd5b40406f98521713c7",
      "27": "https://torbo007.com/embed/23aa7ee3c2593106a4e1d85972ab6a84",
      "28": "https://torbo007.com/embed/25a40a45e8d5d797d459999797c249c7",
      "29": "https://torbo007.com/embed/9422c0080f73ddf9b3a42e5105ce7a2c",
      "30": "https://torbo007.com/embed/b56c400d8be82a43860b1978c5389faf",
      "31": "https://torbo007.com/embed/9e04f6f0724ebf441df8910272c0725b"
    }
  },
  {
    "titleTh": "Bridgerton Season 4 บริดเจอร์ตัน: วังวนรัก เกมไฮโซ 4 G4",
    "titleEn": "Bridgerton Season 4 บริดเจอร์ตัน: วังวนรัก เกมไฮโซ 4 G4",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/01/99-6.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/01/99-6.jpg",
    "videoUrl": "https://torbo007.com/embed/13d36d0fd20caf4c9745321d23f97ecd",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Bridgerton Season 4 บริดเจอร์ตัน: วังวนรัก เกมไฮโซ 4 G4 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "8 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-22",
    "sourcePageUrl": "https://goseries4k.com/bridgerton-season/",
    "postId": "119675",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/13d36d0fd20caf4c9745321d23f97ecd",
      "2": "https://torbo007.com/embed/b98d613ec7c251abb7088a2a69804e5f",
      "3": "https://torbo007.com/embed/75a9929df57f834e61a59591b6d87020",
      "4": "https://torbo007.com/embed/d7d088d685eb369b329657161930a5be",
      "5": "https://torbo007.com/embed/a09c5cf4a971e3801882117b40521409",
      "6": "https://torbo007.com/embed/5d05ea4c7b59edec19a00bc9a5edbc06",
      "7": "https://torbo007.com/embed/39ec872a0ea6c6e369e2d69d0cd9b08c",
      "8": "https://torbo007.com/embed/dc0dc75c0f8b192e7462e397a67a692d"
    }
  },
  {
    "titleTh": "สจ๊วตล่มแผนกู้จักรวาล Stuart Fails to Save the Universe",
    "titleEn": "สจ๊วตล่มแผนกู้จักรวาล Stuart Fails to Save the Universe",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/07/1-5.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/07/1-5.jpg",
    "videoUrl": "https://torbo007.com/embed/58cd723c5b2e210f66b62ec4e66e6fd2",
    "sourceType": "embed",
    "description": "ดูซีรีส์ สจ๊วตล่มแผนกู้จักรวาล Stuart Fails to Save the Universe พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "3 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-23",
    "sourcePageUrl": "https://goseries4k.com/stuart-fails-to-save-the-universe/",
    "postId": "129073",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/58cd723c5b2e210f66b62ec4e66e6fd2",
      "2": "https://torbo007.com/embed/ab8a6770274700613debba16ff05977c",
      "3": "https://torbo007.com/embed/fb688dbdff301648e66a911bd5b31471"
    }
  },
  {
    "titleTh": "Returning Pearl พลิกชะตาองค์หญิงกำมะลอ -30 จบ G4",
    "titleEn": "Returning Pearl พลิกชะตาองค์หญิงกำมะลอ -30 จบ G4",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/01/9-11.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/01/9-11.jpg",
    "videoUrl": "https://torbo007.com/embed/38fca96fe10d54633f027de6a6b0c0b8",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Returning Pearl พลิกชะตาองค์หญิงกำมะลอ -30 จบ G4 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "30 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20",
      "ตอนที่ 21",
      "ตอนที่ 22",
      "ตอนที่ 23",
      "ตอนที่ 24",
      "ตอนที่ 25",
      "ตอนที่ 26",
      "ตอนที่ 27",
      "ตอนที่ 28",
      "ตอนที่ 29",
      "ตอนที่ 30"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-24",
    "sourcePageUrl": "https://goseries4k.com/returning-pearl/",
    "postId": "119550",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/38fca96fe10d54633f027de6a6b0c0b8",
      "2": "https://torbo007.com/embed/088a6a02c6593203d701102cdc549116",
      "3": "https://torbo007.com/embed/be6f518b6f0cdb0b9cb9535589544879",
      "4": "https://torbo007.com/embed/fc7682d099eb8a614ea01cd9f374f48e",
      "5": "https://torbo007.com/embed/54568652933777949264b0df9c36d754",
      "6": "https://torbo007.com/embed/ab53207604b4efcd9f0ac1577eb842e5",
      "7": "https://torbo007.com/embed/044d82232acdfe50da4df0c07969a444",
      "8": "https://torbo007.com/embed/a8bedbb74aee2b748317776992bb46e4",
      "9": "https://torbo007.com/embed/b553ddfbd0deda2fc4c12ac1faf44f62",
      "10": "https://torbo007.com/embed/d3155404aa2abf86ecfd38c250408656",
      "11": "https://torbo007.com/embed/1ff8dcab3d97be736c6bda1a49fd5b93",
      "12": "https://torbo007.com/embed/3936fc566d50f9233938311441aff0e1",
      "13": "https://torbo007.com/embed/05810e10cbb72f8b7c7fd48dbde8517e",
      "14": "https://torbo007.com/embed/465ce1c1aaa72bd50935945d47c0ba1b",
      "15": "https://torbo007.com/embed/0058de281ebdf2bb786c6952360289aa",
      "16": "https://torbo007.com/embed/91450b6e349363767ec25571a8b08e0f",
      "17": "https://torbo007.com/embed/0b97e7c483fa414aeef87e113d3a1c72",
      "18": "https://torbo007.com/embed/0e7694ea508e923e56f9c6f2d06953ce",
      "19": "https://torbo007.com/embed/54a7de42f86f6f6ee37e7ae681530864",
      "20": "https://torbo007.com/embed/0239290b1bcff7361b3dec42f74c8a87",
      "21": "https://torbo007.com/embed/3170663ae287414f6451c89a5a3fba5e",
      "22": "https://torbo007.com/embed/ea630f722eb075aab7d20f7c4763b28e",
      "23": "https://torbo007.com/embed/84807f6d00b43586fdc6d2a89929c4b1",
      "24": "https://torbo007.com/embed/de87918ce19d12c0e4b0834cb6e1955e",
      "25": "https://torbo007.com/embed/6803a10db95c246bbe5ce5bc4f6f40af",
      "26": "https://torbo007.com/embed/1384de352568ac9277b6629ddb57c231",
      "27": "https://torbo007.com/embed/29f5a46859baa58ccf6681042089aa46",
      "28": "https://torbo007.com/embed/fd0c2ea81a2cff220421b1eabc012fa6",
      "29": "https://torbo007.com/embed/98e10075d81ae8f1c7af15d38f9adf54",
      "30": "https://torbo007.com/embed/6cf5adc210aadb1a5e59073fdb21f4b5"
    }
  },
  {
    "titleTh": "Alchemy of Souls Season 2 (2022) เล่นแร่แปรวิญญาณ ภาค 2",
    "titleEn": "Alchemy of Souls Season 2 (2022) เล่นแร่แปรวิญญาณ ภาค 2",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2023/02/Alchemy-of-Souls-Season-2.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2023/02/Alchemy-of-Souls-Season-2.jpg",
    "videoUrl": "https://torbo007.com/embed/27205119da139359602a4e5d7a4936a2",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Alchemy of Souls Season 2 (2022) เล่นแร่แปรวิญญาณ ภาค 2 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "10 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-25",
    "sourcePageUrl": "https://goseries4k.com/alchemy-of-souls-season-2-2022-%e0%b9%80%e0%b8%a5%e0%b9%88%e0%b8%99%e0%b9%81%e0%b8%a3%e0%b9%88%e0%b9%81%e0%b8%9b%e0%b8%a3%e0%b8%a7%e0%b8%b4%e0%b8%8d%e0%b8%8d%e0%b8%b2%e0%b8%93-%e0%b8%a0%e0%b8%b2-2/",
    "postId": "58512",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/27205119da139359602a4e5d7a4936a2",
      "2": "https://torbo007.com/embed/a659216da0104a403f69f977cd8f2c5f",
      "3": "https://torbo007.com/embed/a5003206bb2b06a7a3d43d6d2601fd82",
      "4": "https://torbo007.com/embed/449d25fb57bc32066bd8bfb116ea12ca",
      "5": "https://torbo007.com/embed/96457339ac314dac8efbdde4d6e8fe77",
      "6": "https://torbo007.com/embed/9329eb9fa0cd65c77b585261cf4d9240",
      "7": "https://torbo007.com/embed/4950f917d596c48f03bfba59699f7fc4",
      "8": "https://torbo007.com/embed/005b1050bf8a71421039181ed77468d2",
      "9": "https://torbo007.com/embed/75805c285f4f169a3795914928b7c58d",
      "10": "https://torbo007.com/embed/f1ee199d20aa84c08b77b5c6cf2b7cc5"
    }
  },
  {
    "titleTh": "Overdo รักเกินแค้น-หากวินาทีนั้นไม่พบเธอ EP1-33 จบ G4",
    "titleEn": "Overdo รักเกินแค้น-หากวินาทีนั้นไม่พบเธอ EP1-33 จบ G4",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/07/1784439703765.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/07/1784439703765.jpg",
    "videoUrl": "https://torbo007.com/embed/da5e4eebd97056e93134445258a3ce1c",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Overdo รักเกินแค้น-หากวินาทีนั้นไม่พบเธอ EP1-33 จบ G4 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "33 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20",
      "ตอนที่ 21",
      "ตอนที่ 22",
      "ตอนที่ 23",
      "ตอนที่ 24",
      "ตอนที่ 25",
      "ตอนที่ 26",
      "ตอนที่ 27",
      "ตอนที่ 28",
      "ตอนที่ 29",
      "ตอนที่ 30",
      "ตอนที่ 31",
      "ตอนที่ 32",
      "ตอนที่ 33"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-26",
    "sourcePageUrl": "https://goseries4k.com/overdo/",
    "postId": "128620",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/da5e4eebd97056e93134445258a3ce1c",
      "2": "https://torbo007.com/embed/dc41d6b93c6798279a689d8a66369414",
      "3": "https://torbo007.com/embed/b2e77542c1fe19246ad3ed09f6dd9cae",
      "4": "https://torbo007.com/embed/2cf44477e205d6e0ac1572b99e294635",
      "5": "https://torbo007.com/embed/5197351ac6ace1f1468415f056b3a208",
      "6": "https://torbo007.com/embed/4894471db6e1ce48039fbb703dfc168f",
      "7": "https://torbo007.com/embed/7c1e314ed1f2147ff6bde1afe9aab3da",
      "8": "https://torbo007.com/embed/08f0e4ee01e30e70263cb0afbbea8dd2",
      "9": "https://torbo007.com/embed/56f41b3549d49ed4c5ae59bc0f359157",
      "10": "https://torbo007.com/embed/fc3b89d77069c0756f3bbdec749b402e",
      "11": "https://torbo007.com/embed/a633abf7f08735cff11fe0c3158c7016",
      "12": "https://torbo007.com/embed/121d30352c666aad29d8d3e5aabd8e02",
      "13": "https://torbo007.com/embed/57aab48ec06b5cc1ef4fc2218907d289",
      "14": "https://torbo007.com/embed/6f80b2a3124995fdedcf5ca99d721ddd",
      "15": "https://torbo007.com/embed/0e7041b5ffcd0b3b293ea03460fe947c",
      "16": "https://torbo007.com/embed/1abb1676e8bf08851303b026751977f4",
      "17": "https://torbo007.com/embed/59dc48501e406c5fda1dd95bb8e11392",
      "18": "https://torbo007.com/embed/be5f0bca58e6e683efb410adf32d84a4",
      "19": "https://torbo007.com/embed/7f97d39e5176f32b9f092d9f06e83f5e",
      "20": "https://torbo007.com/embed/c54a5551b2fa10f79ef16d7b350ea09e",
      "21": "https://torbo007.com/embed/c1d22e3cec44363aeaafbf15abdb12fe",
      "22": "https://torbo007.com/embed/afce30c379bfe6b4be3bfa7379fb6090",
      "23": "https://torbo007.com/embed/5b81b072b2192a39f0e6d6d9e27d755c",
      "24": "https://torbo007.com/embed/c8465333f9bbde85a36b7a03c152f021",
      "25": "https://torbo007.com/embed/9a0d7ad0c56bab5dbd257a4bc6a600d5",
      "26": "https://torbo007.com/embed/d0fde145e6da16827e7862159d5cf57b",
      "27": "https://torbo007.com/embed/9bda9f43f71bf6365f480269ff429427",
      "28": "https://torbo007.com/embed/11a0628a277917d7e6f69297fe999911",
      "29": "https://torbo007.com/embed/0c77229cdfb229d2fdd0cbab80a443e8",
      "30": "https://torbo007.com/embed/3067e09566fa3375e2b2c750d65563c7",
      "31": "https://torbo007.com/embed/1930d244c129c75ee96f64417f4b9a26",
      "32": "https://torbo007.com/embed/c981810068a33bf309964f8f81c4d751",
      "33": "https://torbo007.com/embed/63462470575c98c47e26a03fa06a7e2c"
    }
  },
  {
    "titleTh": "จีน Follow My Dear General ปล่อยใจไปตามท่านแม่ทัพ",
    "titleEn": "จีน Follow My Dear General ปล่อยใจไปตามท่านแม่ทัพ",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/01/9-13.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/01/9-13.jpg",
    "videoUrl": "https://torbo007.com/embed/9e0f58ecbf78ac4fd2b02e5e630554bd",
    "sourceType": "embed",
    "description": "ดูซีรีส์ จีน Follow My Dear General ปล่อยใจไปตามท่านแม่ทัพ พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์จีน",
      "พากย์ไทย"
    ],
    "duration": "31 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20",
      "ตอนที่ 21",
      "ตอนที่ 22",
      "ตอนที่ 23",
      "ตอนที่ 24",
      "ตอนที่ 25",
      "ตอนที่ 26",
      "ตอนที่ 27",
      "ตอนที่ 28",
      "ตอนที่ 29",
      "ตอนที่ 30",
      "ตอนที่ 31"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-27",
    "sourcePageUrl": "https://goseries4k.com/follow-my-dear-general/",
    "postId": "119701",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/9e0f58ecbf78ac4fd2b02e5e630554bd",
      "2": "https://torbo007.com/embed/bf8a85a9b39e22c88daaa53d1743626a",
      "3": "https://torbo007.com/embed/82df60375be20ffc443a507032547111",
      "4": "https://torbo007.com/embed/450a6eeb3e2aa47eabf474a0ce07c289",
      "5": "https://torbo007.com/embed/4ff0b6ae405c7f852e4ef554b46216dc",
      "6": "https://torbo007.com/embed/24bde855cd43fcf0fbe79ab534cf827d",
      "7": "https://torbo007.com/embed/ebcf186b5a91de2a63ba25f8237e5527",
      "8": "https://torbo007.com/embed/e64e6162102b4d3fb09b7e34c16a75a3",
      "9": "https://torbo007.com/embed/d6045dc8892f5a3b73e82289d98dc224",
      "10": "https://torbo007.com/embed/900d6d266d9ad0a2bab68fba21f97253",
      "11": "https://torbo007.com/embed/0ec44b3b53508b52c3e8fe0368bbf8c4",
      "12": "https://torbo007.com/embed/8d77bbbd95897429d4b73802269bb79f",
      "13": "https://torbo007.com/embed/92274a9f07c01d15bf9aae2f0ca84396",
      "14": "https://torbo007.com/embed/3d5a52c9a45db78c392ce098de82b48a",
      "15": "https://torbo007.com/embed/23457b4f1dd717bc4347a4f5f38fb9d2",
      "16": "https://torbo007.com/embed/06e985684d532a019b841efa6f681d9b",
      "17": "https://torbo007.com/embed/e52a590ebdc36935c3719cc4e5c24c74",
      "18": "https://torbo007.com/embed/83b01446c7b79c98c781621091918b5f",
      "19": "https://torbo007.com/embed/eb4a4e9d11ce0f116f4ce5cba47ed9be",
      "20": "https://torbo007.com/embed/6f220475309b8af14c033a2bbae77945",
      "21": "https://torbo007.com/embed/e80aa97bd6fb0f827b06f20e55cd4b1f",
      "22": "https://torbo007.com/embed/d7c9121a5791b81b2d21a1a23e29e9f0",
      "23": "https://torbo007.com/embed/b771aba22cad1f998a35349c08971a9b",
      "24": "https://torbo007.com/embed/75a1c93d70ac21dfe2c70bb45e1dd4a1",
      "25": "https://torbo007.com/embed/fa7e4f50b5110105819e81afbe0f6b7c",
      "26": "https://torbo007.com/embed/19438f0f3582f96fcac441825e6694e3",
      "27": "https://torbo007.com/embed/3c8804e89e4dfc7dbdecbd00d7a5a92b",
      "28": "https://torbo007.com/embed/048bd28e1a7a00712bb3600921f5afc2",
      "29": "https://torbo007.com/embed/ed25c3a7403931180b3733acae7b732a",
      "30": "https://torbo007.com/embed/59cd6848a46b54ae7168cf24fbf9bbef",
      "31": "https://torbo007.com/embed/8f1de96908b3e0462e55e51f1ad777b2"
    }
  },
  {
    "titleTh": "His & Hers สองฟากของความจริง",
    "titleEn": "His & Hers สองฟากของความจริง",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/01/999.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/01/999.jpg",
    "videoUrl": "https://torbo007.com/embed/25952103a3746803f5ee1f4f8e53467a",
    "sourceType": "embed",
    "description": "ดูซีรีส์ His & Hers สองฟากของความจริง  -6 จบ G4 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "6 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-28",
    "sourcePageUrl": "https://goseries4k.com/his-hers/",
    "postId": "118565",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/25952103a3746803f5ee1f4f8e53467a",
      "2": "https://torbo007.com/embed/f915dcd8ff82370f291afd23db6e0e14",
      "3": "https://torbo007.com/embed/9e21619f2bcf3b334a7f55b1c9e4af2f",
      "4": "https://torbo007.com/embed/cecf73b58af18c907d800e310c2549c8",
      "5": "https://torbo007.com/embed/de4ee44a5299a52d9044d353c689aba8",
      "6": "https://torbo007.com/embed/24cb5a4e6fff069b3bd41de812ec6fe9"
    }
  },
  {
    "titleTh": "จีน Mystic Nine เก้าสกุล (2026)",
    "titleEn": "จีน Mystic Nine เก้าสกุล (2026)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/07/1-7.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/07/1-7.jpg",
    "videoUrl": "https://torbo007.com/embed/ae2c319eb66867bc1a3e575ed468500e",
    "sourceType": "embed",
    "description": "ดูซีรีส์ จีน Mystic Nine เก้าสกุล (2026)  -36จบ พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์จีน",
      "พากย์ไทย"
    ],
    "duration": "15 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-29",
    "sourcePageUrl": "https://goseries4k.com/mystic-nine-2/",
    "postId": "129665",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/46c669bc24f11907d0167cfa8bae90a5",
      "2": "https://torbo007.com/embed/fad0d900847e10ca27f3036615d49247",
      "3": "https://torbo007.com/embed/e42750278f4efc56ca9c28eef9704e7f",
      "4": "https://torbo007.com/embed/998ca4b8e199f8f226905b69820fddac",
      "5": "https://torbo007.com/embed/be1abd1d45b27d78d6069e1790db0977",
      "6": "https://torbo007.com/embed/69395216483d2e5ba9805b6b42c521b2",
      "7": "https://torbo007.com/embed/3e304fc9c67a295df6b90c306e78af62",
      "8": "https://torbo007.com/embed/44391d38ea5e7febce35d52fcfc4a4ac",
      "9": "https://torbo007.com/embed/b431c911d1a9ec0631734a36818adddb",
      "10": "https://torbo007.com/embed/4e60bc69a827b12671b2aa5983dbb308",
      "11": "https://torbo007.com/embed/ef43a087693648a73a6cfc1a102a4223",
      "12": "https://torbo007.com/embed/e46934b7a22918f7c55839a8f4499c0c",
      "13": "https://torbo007.com/embed/997722e86b56468c15a7e9408b295611",
      "14": "https://torbo007.com/embed/28924a92b4e4bb4ba2325dd8c710682a",
      "15": "https://torbo007.com/embed/ab433512835a29a4c1745ddfd4a3fbee"
    }
  },
  {
    "titleTh": "สายลับพี่เลี้ยง",
    "titleEn": "สายลับพี่เลี้ยง",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2020/08/16.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2020/08/16.jpg",
    "videoUrl": "https://torbo007.com/embed/cc7af2db276c385c34d41ff214e20626",
    "sourceType": "embed",
    "description": "ดูซีรีส์ สายลับพี่เลี้ยง ตอนที่ 1-16 (จบ) พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "16 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-30",
    "sourcePageUrl": "https://goseries4k.com/%e0%b8%aa%e0%b8%b2%e0%b8%a2%e0%b8%a5%e0%b8%b1%e0%b8%9a%e0%b8%9e%e0%b8%b5%e0%b9%88%e0%b9%80%e0%b8%a5%e0%b8%b5%e0%b9%89%e0%b8%a2%e0%b8%87/",
    "postId": "11623",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/cc7af2db276c385c34d41ff214e20626",
      "2": "https://torbo007.com/embed/ed2d901558e046931d790942fb8030e6",
      "3": "https://torbo007.com/embed/53ba77db7646b6d3887fa4ab037d9e0d",
      "4": "https://torbo007.com/embed/865fbea0981197933c4776b58bcdb160",
      "5": "https://torbo007.com/embed/d7ce370c8431ad8359a71bba2f93e1e4",
      "6": "https://torbo007.com/embed/a264ec014243ddaa057168b3973fd866",
      "7": "https://torbo007.com/embed/7e3c5f86fa57605eeedd337a5a243ace",
      "8": "https://torbo007.com/embed/a670b7057fbceb3e83d75e711b307f7c",
      "9": "https://torbo007.com/embed/65cbe34ba652db2a3cf3c8a118bd7635",
      "10": "https://torbo007.com/embed/b334a3b6657b665ac6bb20b39af6dff7",
      "11": "https://torbo007.com/embed/babfb3e54b13b6a1b8ced3079d5015a2",
      "12": "https://torbo007.com/embed/38892a1822eeafc378dd0ee6c16e5c4a",
      "13": "https://torbo007.com/embed/cf5b0b046ba0842263b17732f3838af8",
      "14": "https://torbo007.com/embed/9286ccc1a24c8bfa9f129118a801d06c",
      "15": "https://torbo007.com/embed/c353ba2a80dbf4ca12fbbdaff1314e10",
      "16": "https://torbo007.com/embed/bf2db92757d69a3c58b66e274edff242"
    }
  },
  {
    "titleTh": "NEMESIS คู่คนชนเดือด",
    "titleEn": "NEMESIS คู่คนชนเดือด",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/05/99-8.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/05/99-8.jpg",
    "videoUrl": "https://torbo007.com/embed/7773a8a5918fdd1db6e83fb61a7c7a1c",
    "sourceType": "embed",
    "description": "ดูซีรีส์ NEMESIS คู่คนชนเดือด พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "8 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-31",
    "sourcePageUrl": "https://goseries4k.com/nemesis/",
    "postId": "124698",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/7773a8a5918fdd1db6e83fb61a7c7a1c",
      "2": "https://torbo007.com/embed/dff90eed1c59ff7c3dc0ccb9739643fe",
      "3": "https://torbo007.com/embed/719c12db93d3d190ff1f18f559d9a954",
      "4": "https://torbo007.com/embed/fbe5ee1ab30dc6ee50372a2081829047",
      "5": "https://torbo007.com/embed/6ce3f378bcfd8cf41400abcdbf8026c6",
      "6": "https://torbo007.com/embed/356469908751ec3f4c410e8edb3d2aab",
      "7": "https://torbo007.com/embed/daeed89a6e7084c6f4048bbf5270cd28",
      "8": "https://torbo007.com/embed/e7135f3e00249763e1c250f8191227bd"
    }
  },
  {
    "titleTh": "ผีดิบคลั่ง บัลลังก์เดือด ภาค2",
    "titleEn": "ผีดิบคลั่ง บัลลังก์เดือด ภาค2",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2020/08/14-2.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2020/08/14-2.jpg",
    "videoUrl": "https://torbo007.com/embed/234a8d99094d16fb08706f09312886bb",
    "sourceType": "embed",
    "description": "ดูซีรีส์ ผีดิบคลั่ง บัลลังก์เดือด ภาค2 ตอนที่1-6 (จบ) พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "6 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-32",
    "sourcePageUrl": "https://goseries4k.com/%e0%b8%9c%e0%b8%b5%e0%b8%94%e0%b8%b4%e0%b8%9a%e0%b8%84%e0%b8%a5%e0%b8%b1%e0%b9%88%e0%b8%87-%e0%b8%9a%e0%b8%b1%e0%b8%a5%e0%b8%a5%e0%b8%b1%e0%b8%87%e0%b8%81%e0%b9%8c%e0%b9%80%e0%b8%94%e0%b8%b7-2/",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/234a8d99094d16fb08706f09312886bb",
      "2": "https://torbo007.com/embed/4c697fd424d2758e47898051bdd97a7d",
      "3": "https://torbo007.com/embed/9a0daa837e33195f7ee39f14de000a6f",
      "4": "https://torbo007.com/embed/e7afb4277b37bb41e62557797d3c2153",
      "5": "https://torbo007.com/embed/51487816c7dbb782062764c62b06cfdd",
      "6": "https://torbo007.com/embed/498dde1b93e295947fc30f0d9d9e5be6"
    }
  },
  {
    "titleTh": "The Double Game เกมสองหน้า (2026)",
    "titleEn": "The Double Game เกมสองหน้า (2026)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/05/99-1.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/05/99-1.jpg",
    "videoUrl": "https://torbo007.com/embed/b2d21623c29ce4361d2c25cfa3d3e057",
    "sourceType": "embed",
    "description": "ดูซีรีส์ The Double Game เกมสองหน้า (2026)  -20 จบ พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "20 ตอน (ซับไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-33",
    "sourcePageUrl": "https://goseries4k.com/the-double-game/",
    "postId": "124315",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/b2d21623c29ce4361d2c25cfa3d3e057",
      "2": "https://torbo007.com/embed/128f00719de1ec9773327292ef778101",
      "3": "https://torbo007.com/embed/bbb51c7c5899ad278840fa6f6c600c21",
      "4": "https://torbo007.com/embed/c70bd264fb0d5bbc84606a637b87d8d9",
      "5": "https://torbo007.com/embed/df1c8c3de7318f0b6b6c64d70359719b",
      "6": "https://torbo007.com/embed/48b4e9291a207ba7e37b3fd926d10784",
      "7": "https://torbo007.com/embed/0c570c5b08681685b77b468026979771",
      "8": "https://torbo007.com/embed/d1b390e2d8d6201371fc55a9af9fdc55",
      "9": "https://torbo007.com/embed/4671a9ad6116b8a2db2773ce3816fad9",
      "10": "https://torbo007.com/embed/ae56d6a5cb741499ee52d05f56bec13e",
      "11": "https://torbo007.com/embed/d27a32762ead4d14813746015290fe8b",
      "12": "https://torbo007.com/embed/cb2390bb50af9b72fee908791ff12248",
      "13": "https://torbo007.com/embed/5409067e99afc038212bfd22cd875a6e",
      "14": "https://torbo007.com/embed/37edb1818f8ec5d7538f567e099f2c2b",
      "15": "https://torbo007.com/embed/37edb1818f8ec5d7538f567e099f2c2b",
      "16": "https://torbo007.com/embed/fe96130bdf36c35f19eb482f0cfcd0b2",
      "17": "https://torbo007.com/embed/9474cc62a1f592cd9c1ae4ba8fcef3ad",
      "18": "https://torbo007.com/embed/806df6f53c1c6925b7c7c29f87459f0c",
      "19": "https://torbo007.com/embed/b7a5954a8a43f83508721bb6401a2a23",
      "20": "https://torbo007.com/embed/5f552a6811c6712aaf4e72f10086b4f3"
    }
  },
  {
    "titleTh": "Castle in the Time (2023) ละลายหัวใจด้วยไออุ่นรัก",
    "titleEn": "Castle in the Time (2023) ละลายหัวใจด้วยไออุ่นรัก",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2024/01/ละลายหัวใจด้วยไออุ่นรัก.webp",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2024/01/ละลายหัวใจด้วยไออุ่นรัก.webp",
    "videoUrl": "https://torbo007.com/embed/dcfbc2c492711718e2f01a79b3f899ad",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Castle in the Time (2023) ละลายหัวใจด้วยไออุ่นรัก  1-38 (จบ) - Goseries4k พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "38 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20",
      "ตอนที่ 21",
      "ตอนที่ 22",
      "ตอนที่ 23",
      "ตอนที่ 24",
      "ตอนที่ 25",
      "ตอนที่ 26",
      "ตอนที่ 27",
      "ตอนที่ 28",
      "ตอนที่ 29",
      "ตอนที่ 30",
      "ตอนที่ 31",
      "ตอนที่ 32",
      "ตอนที่ 33",
      "ตอนที่ 34",
      "ตอนที่ 35",
      "ตอนที่ 36",
      "ตอนที่ 37",
      "ตอนที่ 38"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-34",
    "sourcePageUrl": "https://goseries4k.com/castle-in-the-time-2023-%e0%b8%a5%e0%b8%b0%e0%b8%a5%e0%b8%b2%e0%b8%a2%e0%b8%ab%e0%b8%b1%e0%b8%a7%e0%b9%83%e0%b8%88%e0%b8%94%e0%b9%89%e0%b8%a7%e0%b8%a2%e0%b9%84%e0%b8%ad%e0%b8%ad%e0%b8%b8%e0%b9%88/",
    "postId": "76181",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/dcfbc2c492711718e2f01a79b3f899ad",
      "2": "https://torbo007.com/embed/a208b98b30c7d57981c717068ea439c3",
      "3": "https://torbo007.com/embed/1ad7bb0b5ef2a58a50460da2eaf7b9e4",
      "4": "https://torbo007.com/embed/148fed6b7a6ab6f559e854aca6f7c968",
      "5": "https://torbo007.com/embed/2d83791f2288496d25f8d3351de6fd59",
      "6": "https://torbo007.com/embed/bf403f9e2b14301236bac869487d8071",
      "7": "https://torbo007.com/embed/6a14b4c34d196d1bd1232a089f517187",
      "8": "https://torbo007.com/embed/e5ea2a56d7613b9b1362a73aab40e17e",
      "9": "https://torbo007.com/embed/870f1b6ef4a194233133017f337e1e4f",
      "10": "https://torbo007.com/embed/dbc6cc437653099c04827b1be2090879",
      "11": "https://torbo007.com/embed/b5d21394a51bab55e269e9aa3295dfbd",
      "12": "https://torbo007.com/embed/073fd8e4fdae2f604e4ce6f50baa780a",
      "13": "https://torbo007.com/embed/ed31c93e8e146ee033649a58e0ace88c",
      "14": "https://torbo007.com/embed/52fac91b071e0f6d1c49e862f4a2fe05",
      "15": "https://torbo007.com/embed/0891db3cba19fb8f80f9a6f601178ac5",
      "16": "https://torbo007.com/embed/cb8952fda603eba5ea5e671988e86844",
      "17": "https://torbo007.com/embed/952094478f81edb41db2acbe2cee26b8",
      "18": "https://torbo007.com/embed/4db6ff53f7860b6beb1c5d9fad91a769",
      "19": "https://torbo007.com/embed/caac2a6f0ab9f749db7428aa07d38f26",
      "20": "https://torbo007.com/embed/cb46e00ca92638923fbfc52d59aa5e6c",
      "21": "https://torbo007.com/embed/990e0f254862c28876a7f997c106f733",
      "22": "https://torbo007.com/embed/ec9f2e8ab52c7c0dc43d333321aaf2a5",
      "23": "https://torbo007.com/embed/33abedc6d2869c173d1d83c85784b3fd",
      "24": "https://torbo007.com/embed/78bfbf318c77e99ba35d347ef5e39bb3",
      "25": "https://torbo007.com/embed/1c3ee40955db904314a544e2c104f676",
      "26": "https://torbo007.com/embed/306ac252753f8226abef3d851d494f83",
      "27": "https://torbo007.com/embed/f1157c3238f5715397873c3fed1f2b96",
      "28": "https://torbo007.com/embed/23ce81017a16a3411d4bc46050579b3c",
      "29": "https://torbo007.com/embed/f3428a0dd437d25df6e0688fc0ba30db",
      "30": "https://torbo007.com/embed/beb5342a1876fec4bfa16da9e00178fd",
      "31": "https://torbo007.com/embed/ed0b17bb2917a50ff40d086e820d84ea",
      "32": "https://torbo007.com/embed/034b4ac758d0f583b95e568695b2f79e",
      "33": "https://torbo007.com/embed/bfaaa0753d3963b8a15210f8fb37a818",
      "34": "https://torbo007.com/embed/960b5e4a0d9e80b7c96f81072a728914",
      "35": "https://torbo007.com/embed/d8a69ea282061c407a6a7ef23b8100ba",
      "36": "https://torbo007.com/embed/ae48771aa0f10c7b1e01a94c6f4156cb",
      "37": "https://torbo007.com/embed/3f41e30408ed9f9150298c304247970b",
      "38": "https://torbo007.com/embed/9a86751f998597595d5169a9505a9cc7"
    }
  },
  {
    "titleTh": "The Blue Whisper (2022) ทาสปีศาจ",
    "titleEn": "The Blue Whisper (2022) ทาสปีศาจ",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2022/06/ทาสปีศาจ.webp",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2022/06/ทาสปีศาจ.webp",
    "videoUrl": "https://torbo007.com/embed/d88befb58d7fd3c0eb921fbb84b9ed62",
    "sourceType": "embed",
    "description": "ดูซีรีส์ The Blue Whisper (2022) ทาสปีศาจ พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "42 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20",
      "ตอนที่ 21",
      "ตอนที่ 22",
      "ตอนที่ 23",
      "ตอนที่ 24",
      "ตอนที่ 25",
      "ตอนที่ 26",
      "ตอนที่ 27",
      "ตอนที่ 28",
      "ตอนที่ 29",
      "ตอนที่ 30",
      "ตอนที่ 31",
      "ตอนที่ 32",
      "ตอนที่ 33",
      "ตอนที่ 34",
      "ตอนที่ 35",
      "ตอนที่ 36",
      "ตอนที่ 37",
      "ตอนที่ 38",
      "ตอนที่ 39",
      "ตอนที่ 40",
      "ตอนที่ 41",
      "ตอนที่ 42"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-35",
    "sourcePageUrl": "https://goseries4k.com/the-blue-whisper-2022-%e0%b8%97%e0%b8%b2%e0%b8%aa%e0%b8%9b%e0%b8%b5%e0%b8%a8%e0%b8%b2%e0%b8%88/",
    "postId": "46278",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/d88befb58d7fd3c0eb921fbb84b9ed62",
      "2": "https://torbo007.com/embed/92ee10622032655ab1aea318dfb388f4",
      "3": "https://torbo007.com/embed/3d3431d44303f712028f3e46c908130d",
      "4": "https://torbo007.com/embed/28f3a7407eaaeedc4cb09c4adbb89f25",
      "5": "https://torbo007.com/embed/296fffe595f5a3a1858ae18009f8afed",
      "6": "https://torbo007.com/embed/0ed0539618dcfdf2521386ef49ee9443",
      "7": "https://torbo007.com/embed/606ff3bbe56555296b61c9012775bb3d",
      "8": "https://torbo007.com/embed/bcae3f2cad080f3e80722ce9fb686c07",
      "9": "https://torbo007.com/embed/86682894d7c9a5deef02c122c7bb7c46",
      "10": "https://torbo007.com/embed/957d49b01026c4d34da54e001e715874",
      "11": "https://torbo007.com/embed/8b68382ced430a36d2ea883749eb02d7",
      "12": "https://torbo007.com/embed/f5293fe735ee42883d732dc9ca60ba80",
      "13": "https://torbo007.com/embed/eb8920fc0e15cc2b011ab08eb5098b6d",
      "14": "https://torbo007.com/embed/f87a4efa2b9bc3c71674a6666874c2ca",
      "15": "https://torbo007.com/embed/9b9a6547b4b03baaaafa70cf6154cbdd",
      "16": "https://torbo007.com/embed/aea59735860391fe8f277cde3d225ad6",
      "17": "https://torbo007.com/embed/5049dc32d7fec2d3884b1290dedb3708",
      "18": "https://torbo007.com/embed/20b7ebdfc32fcb5fdcd26921a1c77fca",
      "19": "https://torbo007.com/embed/2610d947f7fadbaa1b083b78e51f8a44",
      "20": "https://torbo007.com/embed/4f9453b6aea80aa9bec21772036826f1",
      "21": "https://torbo007.com/embed/a85486067815b8985c034a5536c511ef",
      "22": "https://torbo007.com/embed/a85486067815b8985c034a5536c511ef",
      "23": "https://torbo007.com/embed/76880f0a0a0a3652aaaa3110faea585e",
      "24": "https://torbo007.com/embed/573eae3a997ded09895395d1d288fcb6",
      "25": "https://torbo007.com/embed/80997e7e1f769fa82a57edb59e4249fe",
      "26": "https://torbo007.com/embed/e1d96c6aaf47717e60827da8d34091ea",
      "27": "https://torbo007.com/embed/1904b4eb3711188f7cafdc888edfcf15",
      "28": "https://torbo007.com/embed/f5da445e79f0cb3117bd6a9f3f3e1124",
      "29": "https://torbo007.com/embed/0aea8687e6d81e41b95ec3bedca9ebff",
      "30": "https://torbo007.com/embed/7c768461c3742a6d99cff81781b6261b",
      "31": "https://torbo007.com/embed/d9aa3c4d5df6d290fce5b1e43634cd63",
      "32": "https://torbo007.com/embed/f5c9ccb65ea3f941a24c3a80d46d6213",
      "33": "https://torbo007.com/embed/5550dbb9d9295aa1c1d648170cb018e5",
      "34": "https://torbo007.com/embed/059ffd5e440bb4d651a50831c382cdf4",
      "35": "https://torbo007.com/embed/6b81d9eeeaeb4cae635a918a73197127",
      "36": "https://torbo007.com/embed/db24bc9a5c93b29e5c5804ca668402f7",
      "37": "https://torbo007.com/embed/1dabfa39ec32259588ae798faeb45e82",
      "38": "https://torbo007.com/embed/5074de9f683ea91848c1ddb80e28958d",
      "39": "https://torbo007.com/embed/94b0b9916aaccb81028741ce619b5bee",
      "40": "https://torbo007.com/embed/317bc651c80869483ea70dd397929ea8",
      "41": "https://torbo007.com/embed/ab6e2a78c6d4dd72c3a10e284819311d",
      "42": "https://torbo007.com/embed/191387cb77d39cc408e2bfd31ecb6445"
    }
  },
  {
    "titleTh": "ออนไลน์ Bloodhounds Season 2 (2026)",
    "titleEn": "ออนไลน์ Bloodhounds Season 2 (2026)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/03/99-8.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/03/99-8.jpg",
    "videoUrl": "https://torbo007.com/embed/a6f79eab0e53c375432a55e5077a252e",
    "sourceType": "embed",
    "description": "ดูซีรีส์ ออนไลน์ Bloodhounds Season 2 (2026)  -7 จบ พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "7 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-36",
    "sourcePageUrl": "https://goseries4k.com/bloodhounds-season-2/",
    "postId": "122860",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/a6f79eab0e53c375432a55e5077a252e",
      "2": "https://torbo007.com/embed/50d3842fd38b9fdb82a46b1a69f41e74",
      "3": "https://torbo007.com/embed/4cb3caf257c62c718afed0c95c7845fb",
      "4": "https://torbo007.com/embed/6590ee2eec313c39c6ab519bb6dc1d9b",
      "5": "https://torbo007.com/embed/bfc2ff806cb6cb5efe6861cbb8c5e1c8",
      "6": "https://torbo007.com/embed/5bb6bb58e2ce259b45277d524ae7ff3b",
      "7": "https://torbo007.com/embed/2b159ba8324b319080f1db1a4ef29768"
    }
  },
  {
    "titleTh": "Radioactive Emergency มหันตภัยกัมมันตภาพรังสี -5 จบ G4",
    "titleEn": "Radioactive Emergency มหันตภัยกัมมันตภาพรังสี -5 จบ G4",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/03/555555.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/03/555555.jpg",
    "videoUrl": "https://torbo007.com/embed/963bcf142dbc99ab09715ff4ed4a8937",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Radioactive Emergency มหันตภัยกัมมันตภาพรังสี -5 จบ G4 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "5 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-37",
    "sourcePageUrl": "https://goseries4k.com/radioactive-emergency/",
    "postId": "122199",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/963bcf142dbc99ab09715ff4ed4a8937",
      "2": "https://torbo007.com/embed/9b0d49a41f83ebfe946edb672a58c43a",
      "3": "https://torbo007.com/embed/890433fa8b0f8b873139ce5729922d0a",
      "4": "https://torbo007.com/embed/74b7c769c7fd4575ba92a7fed58f9438",
      "5": "https://torbo007.com/embed/f05a0efc89980082615a6545bd1c8c0b"
    }
  },
  {
    "titleTh": "Pulse (2025) ชีพจรสื่อใจ",
    "titleEn": "Pulse (2025) ชีพจรสื่อใจ",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2025/03/3-4.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2025/03/3-4.jpg",
    "videoUrl": "https://torbo007.com/embed/9a7ff1a81c06b4318a97a25980a98681",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Pulse (2025) ชีพจรสื่อใจ  EP1-10 End. - Goseries4k พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "10 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-38",
    "sourcePageUrl": "https://goseries4k.com/pulse-%e0%b8%8a%e0%b8%b5%e0%b8%9e%e0%b8%88%e0%b8%a3%e0%b8%aa%e0%b8%b7%e0%b9%88%e0%b8%ad%e0%b9%83%e0%b8%88/",
    "postId": "98810",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/9a7ff1a81c06b4318a97a25980a98681",
      "2": "https://torbo007.com/embed/5f1427fa7e0f287eaf3cba9c31a216b4",
      "3": "https://torbo007.com/embed/1edbfdb68f4f1d405ad3e9eda64c3b9a",
      "4": "https://torbo007.com/embed/4addafecd2e7ddc121f510918abad124",
      "5": "https://torbo007.com/embed/5414ffcfefa6e7a643a5b673903571c3",
      "6": "https://torbo007.com/embed/49ce71af45c06b6c573a5490bcbea145",
      "7": "https://torbo007.com/embed/2a17b7f06f57c3524924c1f281353856",
      "8": "https://torbo007.com/embed/96f7d542b18822def8e59903f123504c",
      "9": "https://torbo007.com/embed/48b3e739a7773be7a9d9ed91587722b9",
      "10": "https://torbo007.com/embed/54340a4868a05c4d6250a61b21abd4d4"
    }
  },
  {
    "titleTh": "The Princess’s Gambit ลวงเล่ห์เสน่ห์ดอกท้อ 2025",
    "titleEn": "The Princess’s Gambit ลวงเล่ห์เสน่ห์ดอกท้อ 2025",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2025/07/6-2.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2025/07/6-2.jpg",
    "videoUrl": "https://torbo007.com/embed/97c15e5eba62e6b4abfa80cd7e2368cf?v=go4k",
    "sourceType": "embed",
    "description": "ดูซีรีส์ The Princess’s Gambit ลวงเล่ห์เสน่ห์ดอกท้อ 2025 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "36 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20",
      "ตอนที่ 21",
      "ตอนที่ 22",
      "ตอนที่ 23",
      "ตอนที่ 24",
      "ตอนที่ 25",
      "ตอนที่ 26",
      "ตอนที่ 27",
      "ตอนที่ 28",
      "ตอนที่ 29",
      "ตอนที่ 30",
      "ตอนที่ 31",
      "ตอนที่ 32",
      "ตอนที่ 33",
      "ตอนที่ 34",
      "ตอนที่ 35",
      "ตอนที่ 36"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-39",
    "sourcePageUrl": "https://goseries4k.com/%e0%b8%94%e0%b8%b9%e0%b8%8b%e0%b8%b5%e0%b8%a3%e0%b8%b5%e0%b9%88%e0%b8%a2%e0%b9%8c-the-princesss-gambit/",
    "postId": "105206",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/9e5160cabacb94b50ac03435bb456f71",
      "2": "https://torbo007.com/embed/3f72a639a7803c45c3c6203f6c960859",
      "3": "https://torbo007.com/embed/45c12fcd268bea1e23fd30ea6c61a771",
      "4": "https://torbo007.com/embed/a87923bd4df187bca89bc76a321acf5c",
      "5": "https://torbo007.com/embed/aabba75b0a18742243892fd77e305151",
      "6": "https://torbo007.com/embed/10eaa0d082df6c147548ed7f7bd7f64a",
      "7": "https://torbo007.com/embed/42b38b8fb794f6459a5096ae513cefeb",
      "8": "https://torbo007.com/embed/6fb5ccb7fcb2b3c2b667f0b074e9d96c",
      "9": "https://torbo007.com/embed/51ac98ad9ab9e0d58204964a4dd0357c",
      "10": "https://torbo007.com/embed/8cd60bffad56dac4b5878db5bd46e054",
      "11": "https://torbo007.com/embed/c6c367465bbaade9592f0c299023f75a",
      "12": "https://torbo007.com/embed/f7c03136f404ce0ef850743659d9e02d",
      "13": "https://torbo007.com/embed/cb823d7d8d0cf68e8391ac31af3e2136",
      "14": "https://torbo007.com/embed/ccafdc4b5db739e3ba785cacbb824de2",
      "15": "https://torbo007.com/embed/fbf96989ef24982e96c824ac435de9e4",
      "16": "https://torbo007.com/embed/d82e1066db3ac0cba31e361547e206dd",
      "17": "https://torbo007.com/embed/b2ad5d2ff7fd1382d9b72110aa97ecf7",
      "18": "https://torbo007.com/embed/6e13837cd3ec517a5144b74b772895bf",
      "19": "https://torbo007.com/embed/b96caa4734bedcff7842f198435b98dc",
      "20": "https://torbo007.com/embed/bf4db4296adc0ebcfb2ce16eda6ca0ee",
      "21": "https://torbo007.com/embed/a2bae019bb79866cd341758d91db6aae",
      "22": "https://torbo007.com/embed/91f9c746c1330d4e5f315e54757c9488",
      "23": "https://torbo007.com/embed/b1dd04d9e09385e9d4d9d15396f8b930",
      "24": "https://torbo007.com/embed/fdb6d434e989a42d1ee8561d9374ca36",
      "25": "https://torbo007.com/embed/b567fe5e7026823873dc53ab2f9393c6",
      "26": "https://torbo007.com/embed/a14a975782640496c0c70f3b61823106",
      "27": "https://torbo007.com/embed/a2753c6bb43ad99ff8524a71be42c190",
      "28": "https://torbo007.com/embed/a697be2204c0e8a0635e71427f2c4a6b",
      "29": "https://torbo007.com/embed/f6ef4e67b7c7661704e451296d41b2df",
      "30": "https://torbo007.com/embed/9e93c677d5c2b797b704ec8dcb171226",
      "31": "https://torbo007.com/embed/0dc4054a1fdf580fb4269eff6d05e211",
      "32": "https://torbo007.com/embed/4b4214a865300a92da8a6d612a5a2536",
      "33": "https://torbo007.com/embed/ed8e394f8bbd348d91a74a3710d5041a",
      "34": "https://torbo007.com/embed/c1f3d7854921118c14a560fa1b0efdef",
      "35": "https://torbo007.com/embed/003ab4e29d8412ad0a064c8c5150c4e1",
      "36": "https://torbo007.com/embed/95ac3ef7bcf395fb1297a34cde38d6ac"
    }
  },
  {
    "titleTh": "Unfamiliar สายลับซ่อนเร้น (2026)",
    "titleEn": "Unfamiliar สายลับซ่อนเร้น (2026)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/02/999.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/02/999.jpg",
    "videoUrl": "https://torbo007.com/embed/b9304b35bc92d25bbe2f8fbdf2761751",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Unfamiliar สายลับซ่อนเร้น (2026)  -6 จบ G พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "6 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-40",
    "sourcePageUrl": "https://goseries4k.com/unfamiliar/",
    "postId": "120140",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/b9304b35bc92d25bbe2f8fbdf2761751",
      "2": "https://torbo007.com/embed/b4850634c41794d4aab716b9aa6cc3d1",
      "3": "https://torbo007.com/embed/cbe91017f047d3db189639bfb18d5d51",
      "4": "https://torbo007.com/embed/9c92ef4db390037cc23e765b9d3d5dd7",
      "5": "https://torbo007.com/embed/3bdf60e41db84f1535135c7f2a690f37",
      "6": "https://torbo007.com/embed/172d37e4ed2cb15895b904e43cf1531f"
    }
  },
  {
    "titleTh": "A Journey to Love (2023) ข้ามภูผาหาญท้าลิขิตรัก",
    "titleEn": "A Journey to Love (2023) ข้ามภูผาหาญท้าลิขิตรัก",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2023/11/ข้ามภูผาหาญท้าลิขิตรัก1.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2023/11/ข้ามภูผาหาญท้าลิขิตรัก1.jpg",
    "videoUrl": "https://torbo007.com/embed/26e75b1b804f84297f78d5df14f5be64",
    "sourceType": "embed",
    "description": "ดูซีรีส์ A Journey to Love (2023) ข้ามภูผาหาญท้าลิขิตรัก  ตอนที่1-40 (END) - Goseries4k พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "40 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20",
      "ตอนที่ 21",
      "ตอนที่ 22",
      "ตอนที่ 23",
      "ตอนที่ 24",
      "ตอนที่ 25",
      "ตอนที่ 26",
      "ตอนที่ 27",
      "ตอนที่ 28",
      "ตอนที่ 29",
      "ตอนที่ 30",
      "ตอนที่ 31",
      "ตอนที่ 32",
      "ตอนที่ 33",
      "ตอนที่ 34",
      "ตอนที่ 35",
      "ตอนที่ 36",
      "ตอนที่ 37",
      "ตอนที่ 38",
      "ตอนที่ 39",
      "ตอนที่ 40"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-41",
    "sourcePageUrl": "https://goseries4k.com/a-journey-to-love-2023-%e0%b8%82%e0%b9%89%e0%b8%b2%e0%b8%a1%e0%b8%a0%e0%b8%b9%e0%b8%9c%e0%b8%b2%e0%b8%ab%e0%b8%b2%e0%b8%8d%e0%b8%97%e0%b9%89%e0%b8%b2%e0%b8%a5%e0%b8%b4%e0%b8%82%e0%b8%b4%e0%b8%95-2/",
    "postId": "73020",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/26e75b1b804f84297f78d5df14f5be64",
      "2": "https://torbo007.com/embed/610c116c0dc1d640fb628bf8de661fd5",
      "3": "https://torbo007.com/embed/0ca1854c5b7e2c1ac7fcd97da5ffa158",
      "4": "https://torbo007.com/embed/1ab053b2352ff00312fa8e09ea062756",
      "5": "https://torbo007.com/embed/671e6c390920fa667c7e996a13fb0674",
      "6": "https://torbo007.com/embed/fea84f2fb61cccd3d4bf35a295675b68",
      "7": "https://torbo007.com/embed/766d8c4089f88f6e958c2279bda64878",
      "8": "https://torbo007.com/embed/191828491bf38ca750889acce8bbee71",
      "9": "https://torbo007.com/embed/6d07367f8a4eb638babf256f0bc6efb5",
      "10": "https://torbo007.com/embed/88fcac41f4a131ffe6eab6ccfc144c3d",
      "11": "https://torbo007.com/embed/9faae157f7b66f17cce3633740a1f384",
      "12": "https://torbo007.com/embed/362908b01b914b44b1705d1c8313c975",
      "13": "https://torbo007.com/embed/ffb612646ad0dc53934443821cda3e92",
      "14": "https://torbo007.com/embed/e73f8cb11e261586aac0a496fd165094",
      "15": "https://torbo007.com/embed/9c190257b51d05458524808531374b5d",
      "16": "https://torbo007.com/embed/800f79637f8766f7dd6b0c59a11b61df",
      "17": "https://torbo007.com/embed/76dec5b3155b6dd1d262ee8385419db3",
      "18": "https://torbo007.com/embed/362339261554e16429f863db51aa2c8d",
      "19": "https://torbo007.com/embed/9164cc73c3eb0634d93016e77d11efb7",
      "20": "https://torbo007.com/embed/6ae243e517e418cb8c23f2fdb963cbd6",
      "21": "https://torbo007.com/embed/947e5611595134cd0b01fe09c4e7a536",
      "22": "https://torbo007.com/embed/9e9dedb0dda082b8df14dd8223466143",
      "23": "https://torbo007.com/embed/2286038ce55c2a28df08dd20ef1fefb6",
      "24": "https://torbo007.com/embed/17f4896fe673fa363fe8e978165eb569",
      "25": "https://torbo007.com/embed/74137079dbfa43a949f94238514b51b4",
      "26": "https://torbo007.com/embed/88e82a476e56ec2d978d4814af34bcc6",
      "27": "https://torbo007.com/embed/c681c5a8ab26842c9226bafa5643fe40",
      "28": "https://torbo007.com/embed/e5d375dc3165308d82d5628e13c8b8e7",
      "29": "https://torbo007.com/embed/3265c65bfd46f5d6ee3efef1c5c9d2ba",
      "30": "https://torbo007.com/embed/8cd65971812c60602234b63ace0c6707",
      "31": "https://torbo007.com/embed/dc508b51e54db714e0eb88bf1d50c6de",
      "32": "https://torbo007.com/embed/b2c57119d6414698061bb957db9208dd",
      "33": "https://torbo007.com/embed/5316ac4bfd94b0892ceabd9041973af3",
      "34": "https://torbo007.com/embed/a01e203d2372f6e81ccf4afdb818f745",
      "35": "https://torbo007.com/embed/76f86622add704853972a91580cc1391",
      "36": "https://torbo007.com/embed/23a26bb901e0ddf25a463ca129f59799",
      "37": "https://torbo007.com/embed/386e117c11eca79aeeb3fce45b9cf90a",
      "38": "https://torbo007.com/embed/ca5a15323bbbf8b392281ba84f3051f8",
      "39": "https://torbo007.com/embed/3e7ff89147284b09f6e7476add32e9d5",
      "40": "https://torbo007.com/embed/cb51a100af290ca445d669bbceece9da"
    }
  },
  {
    "titleTh": "A Shop for Killers (ร้านลับนักฆ่า) ซีซัน 2 (2026)",
    "titleEn": "A Shop for Killers (ร้านลับนักฆ่า) ซีซัน 2 (2026)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/07/2-1.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/07/2-1.jpg",
    "videoUrl": "https://torbo007.com/embed/ffcd8b69cfbbf7dc029ee5b3892516d2",
    "sourceType": "embed",
    "description": "ดูซีรีส์ A Shop for Killers (ร้านลับนักฆ่า) ซีซัน 2 (2026) พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "8 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-42",
    "sourcePageUrl": "https://goseries4k.com/a-shop-for-killers-2/",
    "postId": "128929",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/dc9df6854ac7b82f693527105f2a2282",
      "2": "https://torbo007.com/embed/975969ee9cdcc6afd290aadcda9793bd",
      "3": "https://torbo007.com/embed/21b9641509cf467adf67f510d2d1e5c5",
      "4": "https://torbo007.com/embed/20dbce89407b97c81b1f9a2cc3c9b3c3",
      "5": "https://torbo007.com/embed/8a56344614f2086b547bfe2617ed3f96",
      "6": "https://torbo007.com/embed/cb766b5e561e8ec7ac850409aee99184",
      "7": "https://torbo007.com/embed/020cc10a70404bb228a914665e31d958",
      "8": "https://torbo007.com/embed/5adf320fa6f9ada3187d88389860cc90"
    }
  },
  {
    "titleTh": "The Apartment Job ท่านประธานกำมะลอ (2026) พากย์ไท G4",
    "titleEn": "The Apartment Job ท่านประธานกำมะลอ (2026) พากย์ไท G4",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/07/7-1.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/07/7-1.jpg",
    "videoUrl": "https://torbo007.com/embed/8786aae7788d60a74e6c3cbc278bcef2",
    "sourceType": "embed",
    "description": "ดูซีรีส์ The Apartment Job ท่านประธานกำมะลอ (2026) พากย์ไท G4 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "10 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-43",
    "sourcePageUrl": "https://goseries4k.com/the-apartment-job/",
    "postId": "127916",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/8786aae7788d60a74e6c3cbc278bcef2",
      "2": "https://torbo007.com/embed/3faedb409075fed8ac60f5e3fe0c78a6",
      "3": "https://torbo007.com/embed/a1aaf7f9b647fe5d0a9c39711779ccf4",
      "4": "https://torbo007.com/embed/e74293db5a7bc00f7a7a9d41c74fc99d",
      "5": "https://torbo007.com/embed/fe4d536a9bb1f03759473ec2dca0627e",
      "6": "https://torbo007.com/embed/0eb952c1762e7d7ba0f03d24f6a46b26",
      "7": "https://torbo007.com/embed/78c6a4328ba89200ec291ca4859275c2",
      "8": "https://torbo007.com/embed/f142fc85c82df3d3c13a9e25950bc142",
      "9": "https://torbo007.com/embed/31ef238abcec1e00932774f1fba7056b",
      "10": "https://torbo007.com/embed/62d8502936796bd9a6e0b6c3db40ec66"
    }
  },
  {
    "titleTh": "The Abandons คนโลกลืม สู้ลืมโลก (2025)",
    "titleEn": "The Abandons คนโลกลืม สู้ลืมโลก (2025)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2025/12/4-1.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2025/12/4-1.jpg",
    "videoUrl": "https://torbo007.com/embed/282839c96a8f679a2077e046a98616d0",
    "sourceType": "embed",
    "description": "ดูซีรีส์ The Abandons คนโลกลืม สู้ลืมโลก (2025)  G4 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "7 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-44",
    "sourcePageUrl": "https://goseries4k.com/the-abandons/",
    "postId": "116589",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/282839c96a8f679a2077e046a98616d0",
      "2": "https://torbo007.com/embed/7ab30d476a56d51e666c361b4fa10fbf",
      "3": "https://torbo007.com/embed/d59a6ed34eeb23d7805130f1eb5c0ab2",
      "4": "https://torbo007.com/embed/85e5effbca9ed1dac86be93a252a0383",
      "5": "https://torbo007.com/embed/04e0242066c17a46755b2a7cff9f93f7",
      "6": "https://torbo007.com/embed/cf30e2e3f026c2178703e8e9212cf198",
      "7": "https://torbo007.com/embed/a3401b058a52cb54ca905f21c351e3c0"
    }
  },
  {
    "titleTh": "Connect (2022)",
    "titleEn": "Connect (2022)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2022/12/Connect.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2022/12/Connect.jpg",
    "videoUrl": "https://torbo007.com/embed/4bbd4194efd0afabc0a11690237b1947",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Connect (2022)  Ep.1-6 (จบ) - Goseries4k พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "6 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-45",
    "sourcePageUrl": "https://goseries4k.com/connect-2/",
    "postId": "54690",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/4bbd4194efd0afabc0a11690237b1947",
      "2": "https://torbo007.com/embed/3dc6aff9558caa397265ce2f4fe91063",
      "3": "https://torbo007.com/embed/f696b041cd40b836d097b526c748ecc2",
      "4": "https://torbo007.com/embed/ec3d6444fdc9f6a9a482dc8cffce250e",
      "5": "https://torbo007.com/embed/c9e023a4e27cc363014d56bd54a25ac4",
      "6": "https://torbo007.com/embed/5f39c38891ea4cb5379ee810f0009439"
    }
  },
  {
    "titleTh": "Moonshine (2021)",
    "titleEn": "Moonshine (2021)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2022/09/Moonshine1.webp",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2022/09/Moonshine1.webp",
    "videoUrl": "https://torbo007.com/embed/78118a4c369e4c160140721dc042e78c",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Moonshine (2021) ตอนที่1-16 (จบ)  - Goseries4k พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "16 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-46",
    "sourcePageUrl": "https://goseries4k.com/moonshine-2021/",
    "postId": "50131",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/78118a4c369e4c160140721dc042e78c",
      "2": "https://torbo007.com/embed/5b06ef3e4c9ff025ec6f58a915d101ae",
      "3": "https://torbo007.com/embed/23aae8c16e0cbdb3c191dc08514aacb3",
      "4": "https://torbo007.com/embed/a8633b27a98cfdf46aae0afc7f24fa77",
      "5": "https://torbo007.com/embed/dec201e63200091f2748ac4479fa57a3",
      "6": "https://torbo007.com/embed/6b752fb3d673df87a5848299770fa1a3",
      "7": "https://torbo007.com/embed/b03141e141aab47e06f15fd5d41a9121",
      "8": "https://torbo007.com/embed/c8a07f8a210e733be6b9826e5b8e5acc",
      "9": "https://torbo007.com/embed/1acf602c511e2dbe80964710cecd06d6",
      "10": "https://torbo007.com/embed/5bc2230c03bb9ede0058f3281a5ab27a",
      "11": "https://torbo007.com/embed/32f719328ae8e8f06a3f5538c333fc32",
      "12": "https://torbo007.com/embed/04867f4eb37a8bb17aa14734d318afd6",
      "13": "https://torbo007.com/embed/91c930ad89e1294fd7c73675b863ae8e",
      "14": "https://torbo007.com/embed/13d5475ece7975aaa9b053d9046dd80c",
      "15": "https://torbo007.com/embed/de45f6270140b659371f3b6e5ff1476a",
      "16": "https://torbo007.com/embed/bd0ccbbc355b31fdd3826aad0ea687f1"
    }
  },
  {
    "titleTh": "Doctor Lawyer (2022)",
    "titleEn": "Doctor Lawyer (2022)",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2022/12/doctor-lawyer.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2022/12/doctor-lawyer.jpg",
    "videoUrl": "https://torbo007.com/embed/3181e0e0e09d099e1fb195240215b671",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Doctor Lawyer (2022)  ตอนที่1-16 (จบ) - Goseries4k พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "16 ตอน (พากย์ไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-47",
    "sourcePageUrl": "https://goseries4k.com/doctor-lawyer/",
    "postId": "54666",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/3181e0e0e09d099e1fb195240215b671",
      "2": "https://torbo007.com/embed/ce3ba6eb9703f976ff35d709ee6514b9?v=go4k",
      "3": "https://torbo007.com/embed/9b7af129970f8e5b2dfa1e86a155615f?v=go4k",
      "4": "https://torbo007.com/embed/c9a0fc9a64a3f31768324a5f9c9c9721?v=go4k",
      "5": "https://torbo007.com/embed/b2c323495568cd4a628958fa3a3d53fd?v=go4k",
      "6": "https://torbo007.com/embed/6da9fe9b9c7da8c4960a5c69e7cd70d1?v=go4k",
      "7": "https://torbo007.com/embed/b7c4ab1434413cbc18e01e8ec918b7c8?v=go4k",
      "8": "https://torbo007.com/embed/c6d41bb92b7f8cee7db6a9a0ddc2ec80?v=go4k",
      "9": "https://torbo007.com/embed/9a41518d3ea46b7bda953b898850ab94?v=go4k",
      "10": "https://torbo007.com/embed/92a8d620c56e266be5b247b4aa4b159b?v=go4k",
      "11": "https://torbo007.com/embed/994e158286c720e4f9b4272ceff651d4?v=go4k",
      "12": "https://torbo007.com/embed/113f2d49290d0013ad8b075a91c1162c?v=go4k",
      "13": "https://torbo007.com/embed/84c29c928fad3b23c9625d7bcae90563?v=go4k",
      "14": "https://torbo007.com/embed/3811680a3f62db4f3a250a592d173e20?v=go4k",
      "15": "https://torbo007.com/embed/db870c8e62e506faed86906c07a58b83?v=go4k",
      "16": "https://torbo007.com/embed/488fd6636801e103b77759f8668f0371?v=go4k"
    }
  },
  {
    "titleTh": "Princess Zhaoyang องค์หญิงเจาหยาง (2026) จบ G4",
    "titleEn": "Princess Zhaoyang องค์หญิงเจาหยาง (2026) จบ G4",
    "year": 2026,
    "poster": "https://goseries4k.com/wp-content/uploads/2026/07/2-4.jpg",
    "backdrop": "https://goseries4k.com/wp-content/uploads/2026/07/2-4.jpg",
    "videoUrl": "https://torbo007.com/embed/6c589e454161a918c340dd5ce316756e",
    "sourceType": "embed",
    "description": "ดูซีรีส์ Princess Zhaoyang องค์หญิงเจาหยาง (2026) จบ G4 พากย์ไทย ครบทุกตอน คมชัดระดับ HD",
    "rating": 8.0,
    "genres": [
      "ซีรีส์พากย์ไทย",
      "พากย์ไทย"
    ],
    "duration": "28 ตอน (ซับไทย)",
    "trailerUrl": "https://www.youtube.com/embed/M23g_Gf8b14",
    "cast": [
      "นักแสดงนำคุณภาพ"
    ],
    "source": "GOSERIES4K",
    "episodes": [
      "ตอนที่ 1",
      "ตอนที่ 2",
      "ตอนที่ 3",
      "ตอนที่ 4",
      "ตอนที่ 5",
      "ตอนที่ 6",
      "ตอนที่ 7",
      "ตอนที่ 8",
      "ตอนที่ 9",
      "ตอนที่ 10",
      "ตอนที่ 11",
      "ตอนที่ 12",
      "ตอนที่ 13",
      "ตอนที่ 14",
      "ตอนที่ 15",
      "ตอนที่ 16",
      "ตอนที่ 17",
      "ตอนที่ 18",
      "ตอนที่ 19",
      "ตอนที่ 20",
      "ตอนที่ 21",
      "ตอนที่ 22",
      "ตอนที่ 23",
      "ตอนที่ 24",
      "ตอนที่ 25",
      "ตอนที่ 26",
      "ตอนที่ 27",
      "ตอนที่ 28"
    ],
    "languages": [
      "Thai (พากย์ไทย)",
      "Soundtrack (ซับไทย)"
    ],
    "id": "goseries-48",
    "sourcePageUrl": "https://goseries4k.com/princess-zhaoyang/",
    "postId": "129267",
    "episodeUrls": {
      "1": "https://torbo007.com/embed/6c589e454161a918c340dd5ce316756e",
      "2": "https://torbo007.com/embed/1ad3e38059675f70857542ff088a312b",
      "3": "https://torbo007.com/embed/55d2f52490e29862bdb60da0ae4bafed",
      "4": "https://torbo007.com/embed/a48da9ef71b0d1a9121c36eea2db5240",
      "5": "https://torbo007.com/embed/ed61f401690b3536c4224bc8e8dc2de2",
      "6": "https://torbo007.com/embed/72f691fe9db411a74554072c9417db9d",
      "7": "https://torbo007.com/embed/e96e0753ebf81887350124531192b96d",
      "8": "https://torbo007.com/embed/e0198ada1e3221c76477faff28ee22fd",
      "9": "https://torbo007.com/embed/62eb1bfda37f5bfbc238270d0c870f5c",
      "10": "https://torbo007.com/embed/e32df2e184f1ba5d8b54958899c5c333",
      "11": "https://torbo007.com/embed/a2d90e21157cb39abab1355b293bd95a",
      "12": "https://torbo007.com/embed/680f3799a3f4890b844f3a123f380a44",
      "13": "https://torbo007.com/embed/bc1bf7114b68016716d0b15af7c7a07d",
      "14": "https://torbo007.com/embed/9bb1761a7c194aad6812ff5c00bab434",
      "15": "https://torbo007.com/embed/1c502e3d688374b368f1ba14df259321",
      "16": "https://torbo007.com/embed/ea2bda5da237ae08767807e41995302f",
      "17": "https://torbo007.com/embed/acbd16430403efea5c2ecf67af5aa888",
      "18": "https://torbo007.com/embed/4904721941ced24f1ee4be64ec279a86",
      "19": "https://torbo007.com/embed/0b061a280032a52e97caf206ed1f09c5",
      "20": "https://torbo007.com/embed/cbe15f0ae85394838c684a3f065a3ed9",
      "21": "https://torbo007.com/embed/a9f03966ba064745e765fed704218b83",
      "22": "https://torbo007.com/embed/35a730d4f24d09e4e4849d7a1da8130a",
      "23": "https://torbo007.com/embed/13c1f1e5619af7ec7a025cec056be5cf",
      "24": "https://torbo007.com/embed/ba9b4a1d23734624e5a782b2a165aa1c",
      "25": "https://torbo007.com/embed/1ebb85fa9b7dd2cbbda0d6062665e873",
      "26": "https://torbo007.com/embed/7adc949bb71fb39701f2b8aef45969bb",
      "27": "https://torbo007.com/embed/f2d98c7423df0227a3a1e947505f8eb8",
      "28": "https://torbo007.com/embed/949a729b9d467aa5d60d21845266902d"
    }
  }
];
