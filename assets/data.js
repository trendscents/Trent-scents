/* ==========================================================
   TREND SCENTS – edit this file to change the website.
   Prices are in LKR. Leave p10 as null if there is no 10 ml.
   To add a perfume: put its image in assets/img/ and copy a
   product block below. Save, commit on GitHub, done.
   ========================================================== */
window.TS = {
  whatsapp: "94782527427",          // country code + number, no + or 0
  phoneShow: "078 252 7427",
  instagram: "trend_sents",
  sold: { bottles: 30, decants: 60 },

  // Scrolling strip under the hero. Add new trends / announcements here.
  ticker: [
    "Khamrah + Hawas Ice 10 ml duo, LKR 4,000",
    "New: Afnan Stardust now in stock",
    "9pm Night Out, the evening favourite",
    "Order any scent on WhatsApp"
  ],

  // Special offer block
  offer: {
    title: "Two icons, one choice",
    text: "Lattafa Khamrah 10 ml and Rasasi Hawas Ice 10 ml together.",
    was: 4300, price: 4000,
    img: "assets/img/duo-offer.webp",
    msg: "Hi Trend Scents, I'd like the Khamrah 10 ml + Hawas Ice 10 ml duo offer (LKR 4,000)."
  },

  products: [
    { brand: "Lattafa", name: "Badee Al Oud", sub: "Oud for Glory", img: "badee-al-oud", p10: 2100, p100: 12000, mood: "Dark oud, rich and smoky", glow: "#8a4a26" },
    { brand: "Rayhaan", name: "Lion", sub: "", img: "lion", p10: 1800, p100: 8500, mood: "Bold, golden, made for a statement", glow: "#b8902f" },
    { brand: "Afnan", name: "9pm Night Out", sub: "", img: "9pm-night-out", p10: 3000, p100: 19500, mood: "Sweet, warm, built for the evening", glow: "#7a7a7a" },
    { brand: "Afnan", name: "Supremacy", sub: "Collector's Edition", img: "supremacy", p10: 3100, p100: 19500, mood: "Clean, sharp, collector's bottle", glow: "#8d8d98" },
    { brand: "Lattafa", name: "Khamrah", sub: "", img: "khamrah", p10: 2300, p100: 13000, mood: "Warm, spicy, sweet", glow: "#d6a024" },
    { brand: "Rasasi", name: "Hawas Ice", sub: "", img: "hawas-ice", p10: 2000, p100: 11500, mood: "Fresh, aquatic, fruity", glow: "#1f74c0" },
    { brand: "Azzaro", name: "The Most Wanted", sub: "Intense", img: "most-wanted", p10: 3200, p100: 25000, mood: "Dark, warm, magnetic", glow: "#c4571a" },
    { brand: "Afnan", name: "Stardust", sub: "", img: "stardust", p10: null, p100: 27500, mood: "Amber, spice and citrus glow", glow: "#d98a1f" },
    // No image yet: appears in the price list only
    { brand: "Rayhaan", name: "Elixir", sub: "", img: null, p10: null, p100: 9000, mood: "", glow: "#555" }
  ],

  // Replace these with real customer messages when you have them
  reviews: [
    { q: "Khamrah 10 ml lasted me the whole day at work. Ordered the full bottle a week later.", n: "Dilshan, Colombo" },
    { q: "Got the duo offer to test both. Hawas Ice is my daily now, Khamrah is for nights.", n: "Ashen, Kandy" },
    { q: "Fast replies on WhatsApp and the bottle arrived sealed and packed well.", n: "Nimesh, Negombo" },
    { q: "Badee Al Oud for glory is exactly what I was after. People keep asking what I wear.", n: "Farhan, Colombo" },
    { q: "Tried 9pm Night Out as a 10 ml first. Worth it, the full bottle is on my list.", n: "Kavindu, Galle" }
  ]
};
