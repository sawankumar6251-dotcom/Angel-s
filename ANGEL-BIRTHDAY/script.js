/* =========================================================
   ANGEL BIRTHDAY WEBSITE — PERSONAL CONTENT
   You can edit the messages in this section safely.
   Replace photo files in assets/photos/ using the exact names
   shown in README.md. No personal memories are invented.
========================================================= */
const CONTENT = {
  gifts: [
    { title: "A wish", icon: "🎀", message: "Happy Birthday, meri Angel! I hope your day is as lovely, warm and wonderful as your smile. ❤️" },
    { title: "A compliment", icon: "🌷", message: "Tumhari smile mein kuch toh magic hai. Ek baar dekh loon toh mood automatically better ho jaata hai." },
    { title: "A giggle", icon: "🍓", message: "Official notice: Aaj ke din extra cute lagna strictly allowed hai. Waise tumhare liye toh har din allowed hai. 😂" },
    { title: "A little flirt", icon: "💌", message: "Tum Wi-Fi ho kya? Kyunki tum paas hoti ho toh connection automatically strong feel hota hai. ♡" },
    { title: "A secret", icon: "✨", message: "Meri favourite notification, favourite smile aur favourite person — teeno ka answer ek hi hai: YOU." }
  ],
  balloons: [
    "Tumhari smile meri favourite view hai. ♡",
    "You make ordinary moments feel special.",
    "Tumhari khushi mere liye bahut मायने rakhti hai.",
    "You are more magical than you realise.",
    "Tum jaisi ho, bilkul waise hi wonderful ho.",
    "I hope life always gives you reasons to smile.",
    "Aaj ka spotlight sirf meri Angel ke naam! ❤️"
  ],
  pickupLines: [
    "Tum Google ho kya? Meri har search tum par aakar khatam hoti hai. ❤️",
    "Agar cuteness ka tax lagta, toh tum duniya ki sabse expensive person hoti. 😂",
    "Tum meri favourite notification ho — jiska wait bina kisi reason ke rehta hai.",
    "Ek baat batao, tum itni cute ho ya meri nazron ka hi magic hai?",
    "Agar stars ko count karna easy hota, tab bhi tumhari khoobsurati explain nahi hoti.",
    "Tum chai ho kya? Kyunki tumhare bina din thoda incomplete lagta hai. ☕",
    "Mujhe Google Maps ki zaroorat nahi, mera dil hamesha tumhari taraf direction de deta hai.",
    "Tumhari smile ka screenshot mil sakta hai? Jab mood off ho toh dekh liya karunga. 🥹",
    "Agar happiness ka naam hota, toh shayad uska naam Anjali hota.",
    "Tum meri favourite habit ban rahi ho — aur honestly, I don't want to quit.",
    "Kya tum magic karti ho? Tum aati ho aur boring sa din bhi special ban jaata hai.",
    "Tum moon ho kya? Door hokar bhi mere khayalon mein sabse bright rehti ho.",
    "Meri playlist mein favourite song badal sakta hai, par favourite person nahi. ❤️",
    "Agar dobara choose karne ka chance mile, toh meri choice phir tum hi hogi.",
    "Ek complaint hai tumse: itni adorable hone ki permission kisne di? 😌"
  ],
  reasons: [
    "Your smile can make a difficult day feel lighter.",
    "Tumhari baatein sunna kabhi boring nahi lagta.",
    "You have your own beautiful way of making things special.",
    "Tumhari chhoti-chhoti khushiyan bhi mujhe yaad rehti hain.",
    "You are someone I feel lucky to have in my life.",
    "Tumhari presence se moments aur bhi achhe lagte hain.",
    "I love how you are uniquely you.",
    "Tumhare saath aur memories banana chahta hoon.",
    "You deserve kindness, happiness and all good things.",
    "Because you're my Angel — simple as that. ❤️"
  ],
  photoCaptions: [
    "A favourite little moment ♡", "One for the memory book", "My favourite smile",
    "A moment I'd keep forever", "Us, in a little frame", "A happy little memory",
    "This one makes me smile", "More memories to come ♡"
  ],
  letter: null, // Letter is written in index.html. Edit the letter-paper section there.
  signature: "Forever your Sawan ❤️"
};

const screens = [...document.querySelectorAll(".screen")];
let currentScreen = 0;
let giftsOpened = new Set();
let balloonsPopped = new Set();
let pickupIndex = 0;
let candlesOut = 0;

const $ = (selector) => document.querySelector(selector);
const toast = (message) => {
  const el = $("#toast"); el.textContent = message; el.classList.add("show");
  clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
};
function showScreen(index) {
  currentScreen = Math.max(0, Math.min(index, screens.length - 1));
  screens.forEach((screen, i) => screen.classList.toggle("active", i === currentScreen));
  $("#progressText").textContent = currentScreen === 10 ? "Your little world · complete" : `A little surprise · ${currentScreen + 1} / 10`;
  $("#progressBar").style.width = `${Math.min(100, ((currentScreen + 1) / 10) * 100)}%`;
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (currentScreen === 10) burstHearts(24);
}
document.querySelectorAll(".next-btn").forEach(btn => btn.addEventListener("click", () => showScreen(currentScreen + 1)));
$("#beginBtn").addEventListener("click", () => showScreen(1));

function openModal(message, icon = "♡") {
  $("#modalMessage").textContent = message; $("#modalIcon").textContent = icon;
  $("#messageModal").classList.add("show"); $("#messageModal").setAttribute("aria-hidden", "false");
}
function closeModal() {
  $("#messageModal").classList.remove("show"); $("#messageModal").setAttribute("aria-hidden", "true");
}
document.querySelectorAll("[data-close='true']").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeModal(); closeLightbox(); } });

function burstHearts(amount = 10) {
  const layer = $("#floaties");
  for (let i = 0; i < amount; i++) {
    const item = document.createElement("span"); item.className = "floaty";
    item.textContent = ["♡", "✦", "♥", "✧"][Math.floor(Math.random() * 4)];
    item.style.left = `${Math.random() * 100}%`; item.style.setProperty("--duration", `${5 + Math.random() * 5}s`);
    item.style.setProperty("--size", `${12 + Math.random() * 17}px`); layer.appendChild(item);
    setTimeout(() => item.remove(), 10500);
  }
}
setInterval(() => { if (document.visibilityState === "visible") burstHearts(1); }, 1800);

// Gifts
const giftGrid = $("#giftGrid");
CONTENT.gifts.forEach((gift, index) => {
  const button = document.createElement("button"); button.className = "gift-card"; button.type = "button";
  button.innerHTML = `<span class="gift-emoji">🎁</span><strong>Gift ${index + 1}</strong><small>Tap to open</small>`;
  button.addEventListener("click", () => {
    if (giftsOpened.has(index)) { openModal(gift.message, gift.icon); return; }
    giftsOpened.add(index); button.classList.add("opened"); button.querySelector(".gift-emoji").textContent = gift.icon;
    button.querySelector("small").textContent = "Opened ♡"; openModal(gift.message, gift.icon); burstHearts(8);
    $("#giftStatus").textContent = `${giftsOpened.size} of 5 gifts opened. ${giftsOpened.size === 5 ? "All yours, Angel! ♡" : "A few more little surprises are waiting."}`;
    if (giftsOpened.size === 5) $("#giftNext").disabled = false;
  });
  giftGrid.appendChild(button);
});

// Balloons
const balloonField = $("#balloonField");
const balloonColors = ["#e9a9c4", "#cbb8e5", "#f0bda9", "#d6a9c5", "#e9c6d5", "#b9c5e5", "#e8aeb7"];
CONTENT.balloons.forEach((message, index) => {
  const button = document.createElement("button"); button.className = "pop-balloon"; button.type = "button";
  button.style.background = `linear-gradient(145deg, #fff9fc, ${balloonColors[index]})`; button.textContent = "♡";
  button.setAttribute("aria-label", `Pop balloon ${index + 1}`);
  button.addEventListener("click", () => {
    if (balloonsPopped.has(index)) return;
    balloonsPopped.add(index); button.classList.add("popped"); openModal(message, "🎈"); burstHearts(7);
    $("#balloonStatus").textContent = `${balloonsPopped.size} of 7 popped · ${balloonsPopped.size === 7 ? "You found every little message! ♡" : "Keep going, Angel!"}`;
    if (balloonsPopped.size === 7) $("#balloonNext").disabled = false;
  });
  balloonField.appendChild(button);
});

// Pickup lines
function renderPickupLine() {
  $("#pickupLine").textContent = CONTENT.pickupLines[pickupIndex];
  $("#pickupCount").textContent = `${String(pickupIndex + 1).padStart(2, "0")} / ${CONTENT.pickupLines.length}`;
}
$("#newLineBtn").addEventListener("click", () => {
  pickupIndex = (pickupIndex + 1) % CONTENT.pickupLines.length;
  renderPickupLine(); burstHearts(4);
});
renderPickupLine();

// Reasons
const reasonGrid = $("#reasonGrid");
CONTENT.reasons.forEach((reason, index) => {
  const button = document.createElement("button"); button.className = "reason-heart"; button.type = "button";
  button.textContent = "♡"; button.setAttribute("aria-label", `Reveal reason ${index + 1}`);
  button.addEventListener("click", () => { button.textContent = "♥"; button.style.background = "#fff1f6"; openModal(reason, "💗"); });
  reasonGrid.appendChild(button);
});

// Photos — file names are intentionally fixed for easy replacement.
const photoGrid = $("#photoGrid");
const photoNames = Array.from({ length: 8 }, (_, i) => `photo${i + 1}.jpg`);
photoNames.forEach((name, index) => {
  const figure = document.createElement("figure"); figure.className = "photo-card"; figure.style.setProperty("--tilt", `${[-2, 1.5, -1, 2][index % 4]}deg`);
  const img = document.createElement("img"); img.src = `assets/photos/${name}`; img.alt = `Memory ${index + 1}`; img.loading = "lazy";
  img.onerror = () => { img.onerror = null; img.src = `assets/images/photo-placeholder.svg`; };
  const caption = document.createElement("figcaption"); caption.textContent = CONTENT.photoCaptions[index];
  figure.append(img, caption); figure.addEventListener("click", () => { if (!img.src.endsWith("photo-placeholder.svg")) openLightbox(img.src); });
  photoGrid.appendChild(figure);
});

function openLightbox(src) { $("#lightboxImg").src = src; $("#lightbox").classList.add("show"); $("#lightbox").setAttribute("aria-hidden", "false"); }
function closeLightbox() { $("#lightbox").classList.remove("show"); $("#lightbox").setAttribute("aria-hidden", "true"); }
$("#lightboxClose").addEventListener("click", closeLightbox);
$("#lightbox").addEventListener("click", e => { if (e.target.id === "lightbox") closeLightbox(); });

// Letter
$("#envelopeBtn").addEventListener("click", () => {
  $("#envelopeBtn").classList.add("opened"); $("#letterPaper").classList.remove("hidden");
  $("#envelopeBtn").classList.add("hidden"); burstHearts(10);
});
$("#letterNext").addEventListener("click", () => {
  if ($("#letterPaper").classList.contains("hidden")) { toast("Pehle apna letter open karo, Angel ke liye. 💌"); return; }
  showScreen(9);
});

// Candles
document.querySelectorAll(".flame").forEach((flame, index) => flame.addEventListener("click", () => {
  if (flame.classList.contains("out")) return;
  flame.classList.add("out"); flame.textContent = "✧"; candlesOut++; burstHearts(5);
  $("#candleStatus").textContent = `${3 - candlesOut} little ${3 - candlesOut === 1 ? "wish" : "wishes"} left...`;
  if (candlesOut === 3) {
    $("#candleStatus").textContent = "Wish made! May it come true. ❤️";
    $("#finalMessage").classList.remove("hidden"); burstHearts(22);
  }
}));
$("#finishBtn").addEventListener("click", () => showScreen(10));
$("#replayBtn").addEventListener("click", () => {
  giftsOpened.clear(); balloonsPopped.clear(); pickupIndex = 0; candlesOut = 0;
  document.querySelectorAll(".gift-card").forEach((b, i) => { b.classList.remove("opened"); b.querySelector(".gift-emoji").textContent = "🎁"; b.querySelector("small").textContent = "Tap to open"; });
  document.querySelectorAll(".pop-balloon").forEach(b => b.classList.remove("popped"));
  document.querySelectorAll(".reason-heart").forEach(b => { b.textContent = "♡"; b.style.background = ""; });
  document.querySelectorAll(".flame").forEach(b => { b.classList.remove("out"); b.textContent = "🔥"; });
  $("#giftNext").disabled = true; $("#balloonNext").disabled = true;
  $("#giftStatus").textContent = "Open all five gifts to unlock the next surprise.";
  $("#balloonStatus").textContent = "0 of 7 popped · you're doing great, Angel!";
  $("#candleStatus").textContent = "3 little wishes waiting to be made...";
  $("#finalMessage").classList.add("hidden"); $("#letterPaper").classList.add("hidden"); $("#envelopeBtn").classList.remove("hidden", "opened");
  pickupIndex = 0; renderPickupLine(); showScreen(0);
});
