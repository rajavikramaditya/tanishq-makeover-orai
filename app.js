const FALLBACK_SETTINGS = {
  whatsapp: "918081817807",
  phone_main: "8081817807",
  phone_booking: "8081817807",
  phone_extra: "8081817807",
  email: "sparklemakeover21@gmail.com",
  facebook: "https://facebook.com/101835146093091",
  instagram: "https://www.instagram.com/spar.klemakeover/",
  hours_hi: "सुबह 11 – रात 8 · सभी दिन",
  hours_en: "11 AM – 8 PM · All days",
  address_hi: "हनुमान चबूतरा के पास, राजेन्द्र नगर, ओराई, उत्तर प्रदेश 285001",
  address_en: "Near Hanuman Chabutara, Rajendra Nagar, Orai, Uttar Pradesh 285001",
  directions_hi: "",
  directions_en: "",
  map_lat: 25.990364,
  map_lng: 79.465031,
}

const LOOK_IMAGES = [
  "assets/tanishq-look-bridal.jpg",
  "assets/tanishq-look-glow.jpg",
  "assets/tanishq-look-party.jpg",
  "assets/tanishq-hero-vanity.jpg",
]

const ICONS = {
  wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.3 21.7l4.8-1.3A9.8 9.8 0 1 0 12 2.2z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M8.7 7.4c.3-.5.6-.5.9-.5h.6c.2 0 .5 0 .7.5l.9 2.1c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4-.1.6a6.6 6.6 0 0 0 2.8 2.7c.2.1.4.1.6-.1l.7-.8c.2-.2.4-.3.7-.2l2 .9c.4.2.5.4.5.6 0 .8-.4 1.6-1 2-.7.5-1.6.6-2.5.3a10 10 0 0 1-6.6-6.5c-.3-.9-.2-2.1.5-3z" fill="currentColor"/></svg>',
  ig: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5.2" fill="none" stroke="currentColor" stroke-width="1.9"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.9"/><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor"/></svg>',
  fb: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.6 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.9v3h2.6V21z" fill="currentColor"/></svg>',
  call: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.5h2.6l1.4 4.1-1.9 1.3a12 12 0 0 0 6.4 6.4l1.3-1.9 4.1 1.4v2.6c0 1-.8 1.9-1.9 1.9A16.6 16.6 0 0 1 4.7 5.4c0-1.1.9-1.9 1.9-1.9z" fill="currentColor"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5a7 7 0 0 0-7 7c0 5 7 12 7 12s7-7 7-12a7 7 0 0 0-7-7zm0 9.6a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2z" fill="currentColor"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.6" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M12 7.2V12l3.2 2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>',
  mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.9"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor"/></svg>',
  route: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.6 21.4 12 12 21.4 2.6 12z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/><path d="M9 14v-2.5h5.5M12.5 9.2l2 2.3-2 2.3" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  book: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="3" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M3.5 10h17M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/></svg>',
}

const FALLBACK_SLOTS = [
  { id: "morning", label_hi: "सुबह", label_en: "Morning", starts: "09:00", ends: "12:00", sort_order: 1, active: true },
  { id: "afternoon", label_hi: "दोपहर", label_en: "Afternoon", starts: "12:00", ends: "16:00", sort_order: 2, active: true },
  { id: "evening", label_hi: "संध्या", label_en: "Evening", starts: "16:00", ends: "19:00", sort_order: 3, active: true },
  { id: "night", label_hi: "रात्रि पूर्व", label_en: "Early night", starts: "19:00", ends: "20:30", sort_order: 4, active: true },
]

const FALLBACK_PACKAGES = [
  ["wedding", "विवाह मेकअप", "Wedding makeup", "विवाह-दिवस का पूर्ण रूप, आधार से अंतिम सज्जा तक।", "The full wedding-day look, from base to the final setting.", null, 1],
  ["hd", "एचडी ब्राइडल", "HD bridal", "कैमरे के लिए स्पष्ट और दीर्घस्थायी फिनिश।", "A clear, long-wear finish made for the camera.", null, 2],
  ["airbrush", "एयरब्रश ब्राइडल", "Airbrush bridal", "हल्की परत, समरूप रंग और लंबे समय तक टिकाव।", "A light, even layer with long wear.", null, 3],
  ["engagement", "सगाई", "Engagement", "सगाई के लिए कोमल और चित्र-योग्य रूप।", "A soft look that reads clearly in photographs.", null, 4],
  ["haldi", "हल्दी", "Haldi", "हल्दी और फूलों के साथ हल्की, ताज़ा सज्जा।", "Light and fresh, composed for yellow and flowers.", null, 5],
  ["mehndi", "मेहंदी", "Mehndi", "मेहंदी और पारिवारिक समारोह के लिए मृदु रूप।", "A softer glam for mehndi and family functions.", null, 6],
  ["sangeet", "संगीत", "Sangeet", "संगीत की शाम के लिए चमकदार रूप।", "A brighter look for the sangeet evening.", null, 7],
  ["reception", "रिसेप्शन", "Reception", "रिसेप्शन के लिए संध्या-कालीन रूप।", "An evening look for the reception.", null, 8],
  ["trial", "मेकअप ट्रायल", "Makeup trial", "विवाह से पहले रूप की परीक्षा।", "A trial of the look before the wedding day.", null, 9],
  ["prebridal", "प्री-ब्राइडल केयर", "Pre-bridal care", "विवाह से पहले त्वचा की तैयारी।", "Skin preparation in the days before the wedding.", null, 10],
  ["family", "परिवार ग्लैम", "Family glam", "माता, बहन और अतिथियों की एक साथ सज्जा।", "Mothers, sisters, and guests, prepared together.", null, 11],
  ["shoot", "फोटोशूट", "Photoshoot", "चित्रण के लिए रूप। छायाचित्र अलग से निर्धारित होता है।", "A look built for the camera. Photography is arranged separately.", null, 12],
].map(([id, name_hi, name_en, note_hi, note_en, price_inr, sort_order]) => ({
  id, category: "bridal", group_key: "bridal", name_hi, name_en, note_hi, note_en, price_inr, sort_order, active: true, ref_video_url: "",
}))

const REEL_URL = "https://www.instagram.com/reel/DdlPSdwzWzT/"

const WHO = [
  { id: "self", hi: "स्वयं के लिए", en: "For myself" },
  { id: "bride", hi: "दुल्हन के लिए", en: "For the bride" },
  { id: "family", hi: "परिवार के लिए", en: "For the family" },
]

const COPY = {
  hi: {
    stepsBridal: ["पैकेज", "तिथि", "समय", "विवरण"],
    stepsLehenga: ["लहंगा", "तिथि", "विवरण"],
    months: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"],
    weeks: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
    next: "अगला",
    send: "WhatsApp पर भेजें",
    pickPackage: "एक पैकेज चुनें",
    pickLehenga: "एक लहंगा चुनें",
    pickDate: "एक तिथि चुनें",
    pickSlot: "एक समय चुनें",
    needName: "नाम लिखें",
    needPhone: "दस अंकों का मोबाइल नंबर लिखें",
    quote: "परामर्श पर",
    askPackage: "इस पैकेज की तिथि माँगें",
    askLehenga: "इस तिथि को माँगें",
    refVideo: "संदर्भ वीडियो देखें",
    taken: "भरी",
    free: "खाली",
    packageTitle: "कौन सा पैकेज?",
    packageHint: "कार्ड चुनें। बाद में बदल भी सकते हैं।",
    lehengaTitle: "कौन सा लहंगा?",
    lehengaHint: "टैग नंबर के साथ चुनें। तिथि अगले कदम पर।",
    dateTitle: "कौन सी तिथि उपयुक्त है?",
    dateHintBridal: "यह ब्राइडल पैकेज बुकिंग का कैलेंडर है। आज से साठ दिन के भीतर चुनें — भरी तिथि पर हर समय बंद दिखेगा।",
    dateHintLehenga: "आज से साठ दिन के भीतर। निशान वाली तिथि इस लहंगे के लिए भरी है।",
    slotTitle: "दिन का कौन सा भाग?",
    slotHint: "भरा हुआ समय बंद है। सटीक समय पुष्टि के बाद निश्चित होता है।",
    youTitle: "आपका विवरण",
    youHint: "अनुरोध स्टूडियो तक जाएगा। पुष्टि का उत्तर WhatsApp पर आएगा।",
    name: "नाम",
    phone: "मोबाइल नंबर",
    note: "अतिरिक्त बात (वैकल्पिक)",
    prevMonth: "पिछला महीना",
    nextMonth: "अगला महीना",
    slotTaken: "यह समय अभी भर गया। कोई और समय चुनें।",
    dateTaken: "यह तिथि इस लहंगे के लिए अभी भर गई। कोई और तिथि चुनें।",
    saveFailed: "अनुरोध सहेजा नहीं जा सका। WhatsApp फिर भी खुल रहा है।",
    full: "सभी समय भरे हैं",
    noLehenga: "अभी कोई लहंगा सूची में नहीं है। नया संग्रह जल्द आ रहा है — सीधे कॉल करें।",
    booked: "इस तिथि पर बुक",
    available: "उपलब्ध",
    lehHintPick: "पहले ऊपर से लहंगा चुनें।",
    lehHintFor: "टैग {tag} के लिए भरी तिथियाँ निशान में हैं।",
  },
  en: {
    stepsBridal: ["Package", "Date", "Time", "Details"],
    stepsLehenga: ["Lehenga", "Date", "Details"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    next: "Next",
    send: "Send on WhatsApp",
    pickPackage: "Choose a package",
    pickLehenga: "Choose a lehenga",
    pickDate: "Choose a date",
    pickSlot: "Choose a time",
    needName: "Add your name",
    needPhone: "Add a 10-digit mobile number",
    quote: "On consultation",
    askPackage: "Ask for this package",
    askLehenga: "Ask for this date",
    refVideo: "Watch reference video",
    taken: "Taken",
    free: "Free",
    packageTitle: "Which package?",
    packageHint: "Choose a card. You can change it later.",
    lehengaTitle: "Which lehenga?",
    lehengaHint: "Choose with the tag number. The date comes next.",
    dateTitle: "Which date suits you?",
    dateHintBridal: "This calendar is for bridal package booking. Pick within sixty days — a full date shows every time as taken.",
    dateHintLehenga: "Any day in the next sixty days. A marked date is taken for this lehenga.",
    slotTitle: "Which part of the day?",
    slotHint: "Taken times are closed. The studio confirms the exact hour.",
    youTitle: "Your details",
    youHint: "The request reaches the studio. Confirmation comes back on WhatsApp.",
    name: "Name",
    phone: "Mobile number",
    note: "Anything else (optional)",
    prevMonth: "Previous month",
    nextMonth: "Next month",
    slotTaken: "That time was just taken. Please choose another.",
    dateTaken: "That date was just taken for this lehenga. Please choose another.",
    saveFailed: "The request could not be saved. WhatsApp is opening anyway.",
    full: "Every time is taken",
    noLehenga: "No lehenga is listed yet. A new collection is coming soon — please call directly.",
    booked: "Booked on this date",
    available: "Available",
    lehHintPick: "Choose a lehenga above first.",
    lehHintFor: "Marked dates are taken for tag {tag}.",
  },
}

const state = {
  btype: "bridal",
  step: 0,
  service: null,
  lehenga: null,
  date: null,
  slot: null,
  who: "self",
  name: "",
  phone: "",
  note: "",
  view: startOfMonth(new Date()),
  lehView: startOfMonth(new Date()),
  packages: FALLBACK_PACKAGES,
  slots: FALLBACK_SLOTS,
  lehengas: [],
  occupied: new Set(),
  lehTaken: new Set(),
  settings: FALLBACK_SETTINGS,
}

const $ = (sel) => document.querySelector(sel)
const lang = () => (document.documentElement.lang === "en" ? "en" : "hi")
const t = () => COPY[lang()]
const db = window.supabase && window.STUDIO
  ? window.supabase.createClient(window.STUDIO.url, window.STUDIO.key)
  : null

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}
function sameDay(a, b) {
  return a && b && a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}
function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}
function addDays(date, days) {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}
function iso(date) {
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${date.getFullYear()}-${month}-${day}`
}
function parseDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value || ""))) return null
  const date = new Date(`${value}T00:00:00`)
  return Number.isNaN(date.getTime()) ? null : date
}
function packageById(id) {
  return state.packages.find((item) => item.id === id)
}
function lehengaById(id) {
  return state.lehengas.find((item) => item.id === id)
}
function activeSlots() {
  return state.slots.filter((slot) => slot.active !== false).sort((a, b) => a.sort_order - b.sort_order)
}
function steps() {
  return state.btype === "bridal" ? t().stepsBridal : t().stepsLehenga
}
function lastStep() {
  return steps().length - 1
}
function field(row, key) {
  return row[`${key}_${lang()}`] || row[`${key}_en`] || ""
}
function money(value) {
  if (value == null || value === "") return t().quote
  return `₹${new Intl.NumberFormat("en-IN").format(value)}`
}
function prettyPhone(digits) {
  const local = String(digits || "").replace(/\D/g, "").replace(/^91/, "")
  if (local.length !== 10) return digits
  return `${local.slice(0, 5)} ${local.slice(5)}`
}
function takenKey(date, slotId) {
  const day = date instanceof Date ? iso(date) : String(date).slice(0, 10)
  return `${day}|${slotId}`
}
function isTaken(date, slotId) {
  return state.occupied.has(takenKey(date, slotId))
}
function dayIsFull(date) {
  const slots = activeSlots()
  return slots.length > 0 && slots.every((slot) => isTaken(date, slot.id))
}
function lehKey(lehengaId, date) {
  const day = date instanceof Date ? iso(date) : String(date).slice(0, 10)
  return `${lehengaId}|${day}`
}
function isLehTaken(lehengaId, date) {
  if (!lehengaId) return false
  return state.lehTaken.has(lehKey(lehengaId, date))
}

function applyLang(next) {
  document.documentElement.lang = next
  const label = $("[data-lang-label]")
  if (label) label.textContent = next === "hi" ? "EN" : "HI"
  try { localStorage.setItem("sparkle-lang", next) } catch { /* ignore */ }
  renderAll()
}

function fillIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((node) => {
    if (!node.firstElementChild && ICONS[node.dataset.icon]) node.innerHTML = ICONS[node.dataset.icon]
  })
}

function waDigits() {
  return String(state.settings.whatsapp || "918081817807").replace(/\D/g, "")
}
function localPhone() {
  return String(state.settings.phone_main || "8081817807").replace(/\D/g, "").replace(/^91/, "")
}
function waHello() {
  const text = lang() === "hi"
    ? "नमस्ते, Sparkle Makeover। मुझे ब्राइडल पैकेज / लहंगा के बारे में जानकारी चाहिए।"
    : "Hello Sparkle Makeover. I would like to know about a bridal package / lehenga."
  return `https://wa.me/${waDigits()}?text=${encodeURIComponent(text)}`
}
function waRoute() {
  const text = lang() === "hi"
    ? "नमस्ते, Sparkle Makeover। कृपया पार्लर की लाइव लोकेशन भेज दें।"
    : "Hello Sparkle Makeover. Please send the parlour’s live location."
  return `https://wa.me/${waDigits()}?text=${encodeURIComponent(text)}`
}
function pinCoords() {
  const lat = Number(state.settings.map_lat) || FALLBACK_SETTINGS.map_lat
  const lng = Number(state.settings.map_lng) || FALLBACK_SETTINGS.map_lng
  return `${lat},${lng}`
}

function mountChrome() {
  const end = $("#site-end")
  if (!end) return
  end.className = "site-end"
  end.innerHTML = `
    <section class="visit" id="visit" aria-labelledby="visit-title">
      <div class="section-head reveal">
        <span class="script">Visit us</span>
        <h2 id="visit-title"><span class="t-hi">पार्लर तक कैसे पहुँचें</span><span class="t-en">How to reach the parlour</span></h2>
        <span class="ornament"><i></i></span>
        <p><span class="t-hi">पार्लर राजेन्द्र नगर की गली के अंदर है — मैप का पिन सीधे Sparkle पर लगा है।</span><span class="t-en">The parlour is inside a Rajendra Nagar lane — the map pin sits right on Sparkle.</span></p>
      </div>
      <div class="visit-grid">
        <div class="map-wrap reveal">
          <iframe data-map title="Sparkle Makeover and Beauty Salon on the map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="visit-card reveal">
          <div>
            <h3>Sparkle Makeover <span class="t-hi">और ब्यूटी सैलून</span><span class="t-en">and Beauty Salon</span></h3>
            <p class="addr"><span class="t-hi" data-s="addr-hi"></span><span class="t-en" data-s="addr-en"></span></p>
          </div>
          <ol class="route">
            <li><b>1</b><span><strong class="t-hi">हनुमान चबूतरा, ओराई पहुँचें</strong><strong class="t-en">Reach Hanuman Chabutara, Orai</strong><span class="t-hi">ऑटो/रिक्शा वाले को यही नाम बताएँ।</span><span class="t-en">Tell the auto driver this landmark.</span></span></li>
            <li><b>2</b><span><strong class="t-hi">गोस्वामी मंदिर वाली गली पकड़ें</strong><strong class="t-en">Take the lane towards Goshwami Mandir</strong><span class="t-hi">चबूतरा से Old Bypass Road की तरफ़ से उत्तर-पश्चिम, गोस्वामी मंदिर की दिशा में चलें।</span><span class="t-en">From the Chabutra, walk north-west towards Goshwami Mandir.</span></span></li>
            <li><b>✦</b><span><strong>Sparkle Makeover</strong><span class="t-hi">लगभग 100 मीटर पर, गोस्वामी मंदिर से पहले। रास्ता न मिले तो कॉल करें — हम लाइव लोकेशन भेज देंगे।</span><span class="t-en">About 100 m in, before Goshwami Mandir. Lost? Call us — we will send a live location.</span></span></li>
          </ol>
          <p class="route-note" data-s="route-note" hidden><span class="t-hi" data-s="dir-hi"></span><span class="t-en" data-s="dir-en"></span></p>
          <div class="btn-row">
            <a class="btn btn-gold" data-s="dir" target="_blank" rel="noopener"><span class="ico" data-icon="route"></span><span class="t-hi">दिशा देखें</span><span class="t-en">Directions</span></a>
            <a class="btn btn-wa" data-s="wa-route" target="_blank" rel="noopener"><span class="ico" data-icon="wa"></span><span class="t-hi">लोकेशन माँगें</span><span class="t-en">Ask location</span></a>
          </div>
          <ul class="contact-list">
            <li><a data-s="tel"><span class="ico" data-icon="call"></span><span data-s="phone-text"></span></a></li>
            <li><span><span class="ico" data-icon="clock"></span><span class="t-hi" data-s="hours-hi"></span><span class="t-en" data-s="hours-en"></span></span></li>
            <li><a data-s="mail"><span class="ico" data-icon="mail"></span><span data-s="mail-text"></span></a></li>
          </ul>
        </div>
      </div>
    </section>
    <footer class="footer">
      <div class="footer-inner">
        <a class="brand" href="index.html"><img src="assets/logo.svg?v=20261009c" alt="" width="42" height="42" /><span><strong>Sparkle</strong><small>Makeover · Orai</small></span></a>
        <nav class="foot-links" aria-label="Footer">
          <a href="packages.html"><span class="t-hi">ब्राइडल पैकेज</span><span class="t-en">Bridal packages</span></a>
          <a href="lehenga.html"><span class="t-hi">लहंगा</span><span class="t-en">Lehenga</span></a>
          <a href="book.html"><span class="t-hi">बुकिंग</span><span class="t-en">Booking</span></a>
        </nav>
        <div class="socials">
          <a data-s="wa" target="_blank" rel="noopener" aria-label="WhatsApp"><span class="ico" data-icon="wa"></span></a>
          <a data-s="ig" target="_blank" rel="noopener" aria-label="Instagram"><span class="ico" data-icon="ig"></span></a>
          <a data-s="fb" target="_blank" rel="noopener" aria-label="Facebook"><span class="ico" data-icon="fb"></span></a>
          <a data-s="tel" aria-label="Call"><span class="ico" data-icon="call"></span></a>
        </div>
        <p class="credit">Designed by <b>OrbitCore</b></p>
        <a class="foot-login" href="admin.html"><span class="t-hi">स्टूडियो लॉगिन</span><span class="t-en">Studio login</span></a>
      </div>
    </footer>
    <div class="fab">
      <a class="fab-wa" data-s="wa" target="_blank" rel="noopener" aria-label="WhatsApp"><span class="ico" data-icon="wa"></span><span class="tip t-hi">WhatsApp पर बात करें</span><span class="tip t-en">Chat on WhatsApp</span></a>
      <a class="fab-ig" data-s="ig" target="_blank" rel="noopener" aria-label="Instagram"><span class="ico" data-icon="ig"></span><span class="tip">@spar.klemakeover</span></a>
    </div>
    <nav class="dock" aria-label="Quick contact">
      <a class="d-call" data-s="tel"><span class="ico" data-icon="call"></span><span class="t-hi">कॉल</span><span class="t-en">Call</span></a>
      <a class="d-wa" data-s="wa" target="_blank" rel="noopener"><span class="ico" data-icon="wa"></span>WhatsApp</a>
      <a class="d-ig" data-s="ig" target="_blank" rel="noopener"><span class="ico" data-icon="ig"></span>Instagram</a>
      <a class="d-book" href="${$("#wizard") ? "#main" : "book.html"}"><span class="ico" data-icon="book"></span><span class="t-hi">बुक करें</span><span class="t-en">Book now</span></a>
    </nav>
  `
}

let mapSrc = ""
function paintContact() {
  const s = state.settings
  const digits = localPhone()
  const set = (key, fn) => document.querySelectorAll(`[data-s="${key}"]`).forEach(fn)
  set("tel", (node) => { node.href = `tel:+91${digits}` })
  set("phone-text", (node) => { node.textContent = `+91 ${prettyPhone(digits)}` })
  set("wa", (node) => { node.href = waHello() })
  set("wa-route", (node) => { node.href = waRoute() })
  set("ig", (node) => { node.href = s.instagram || FALLBACK_SETTINGS.instagram })
  set("fb", (node) => {
    node.href = s.facebook || FALLBACK_SETTINGS.facebook
  })
  set("mail", (node) => { node.href = `mailto:${s.email || FALLBACK_SETTINGS.email}` })
  set("mail-text", (node) => { node.textContent = s.email || FALLBACK_SETTINGS.email })
  set("hours-hi", (node) => { node.textContent = s.hours_hi || FALLBACK_SETTINGS.hours_hi })
  set("hours-en", (node) => { node.textContent = s.hours_en || FALLBACK_SETTINGS.hours_en })
  set("addr-hi", (node) => { node.textContent = s.address_hi || FALLBACK_SETTINGS.address_hi })
  set("addr-en", (node) => { node.textContent = s.address_en || FALLBACK_SETTINGS.address_en })
  set("dir-hi", (node) => { node.textContent = s.directions_hi || "" })
  set("dir-en", (node) => { node.textContent = s.directions_en || s.directions_hi || "" })
  set("route-note", (node) => { node.hidden = !(s.directions_hi || s.directions_en) })
  const coords = pinCoords()
  const place = encodeURIComponent("Sparkle Makeover and Beauty Salon, Orai")
  set("dir", (node) => { node.href = `https://www.google.com/maps/dir/?api=1&destination=${place}&travelmode=driving` })
  const frame = $("[data-map]")
  if (frame && mapSrc !== coords) {
    mapSrc = coords
    frame.src = `https://maps.google.com/maps?q=${place}&ll=${coords}&z=17&output=embed`
  }
}

function countUp(node) {
  if (node.dataset.done) return
  node.dataset.done = "1"
  const target = Number(node.dataset.count)
  const decimals = Number(node.dataset.decimals || 0)
  const suffix = node.dataset.suffix || ""
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
  const start = performance.now()
  const step = (now) => {
    const p = Math.min(1, (now - start) / 1600)
    const eased = 1 - Math.pow(1 - p, 3)
    node.textContent = `${(target * eased).toFixed(decimals)}${suffix}`
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

let revealer = null
function observeReveals() {
  const nodes = document.querySelectorAll(".reveal:not(.is-in)")
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-in"))
    return
  }
  if (!revealer) {
    revealer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in")
          entry.target.querySelectorAll("[data-count]").forEach(countUp)
          revealer.unobserve(entry.target)
        }
      })
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 })
  }
  nodes.forEach((node) => revealer.observe(node))
}

function videoEmbed(url) {
  const raw = String(url || "").trim()
  const ig = raw.match(/instagram\.com\/(?:[\w.]+\/)?(reel|p|tv)\/([\w-]+)/)
  if (ig) return { kind: "frame", src: `https://www.instagram.com/${ig[1]}/${ig[2]}/embed`, tall: true }
  const yt = raw.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{6,})/)
  if (yt) return { kind: "frame", src: `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0`, tall: raw.includes("/shorts/") }
  if (/\.(mp4|webm|mov|m4v)(\?|$)/i.test(raw) || raw.includes("/storage/v1/object/")) return { kind: "video", src: raw, tall: true }
  return null
}

function openVideo(url) {
  const media = videoEmbed(url)
  if (!media) {
    window.open(url, "_blank", "noopener,noreferrer")
    return
  }
  const modal = document.createElement("div")
  modal.className = "vmodal"
  modal.setAttribute("role", "dialog")
  modal.setAttribute("aria-modal", "true")
  const box = document.createElement("div")
  box.className = "vmodal-box" + (media.tall ? "" : " is-wide")
  let player
  if (media.kind === "video") {
    player = document.createElement("video")
    player.src = media.src
    player.controls = true
    player.autoplay = true
    player.playsInline = true
  } else {
    player = document.createElement("iframe")
    player.src = media.src
    player.allow = "autoplay; encrypted-media; picture-in-picture"
    player.allowFullscreen = true
    player.title = "Video"
  }
  const close = document.createElement("button")
  close.type = "button"
  close.className = "vmodal-close"
  close.setAttribute("aria-label", lang() === "hi" ? "बंद करें" : "Close")
  close.textContent = "×"
  const out = document.createElement("a")
  out.className = "vmodal-out"
  out.href = url
  out.target = "_blank"
  out.rel = "noopener noreferrer"
  out.textContent = lang() === "hi" ? "ऐप में खोलें ›" : "Open in the app ›"
  box.append(close, player, out)
  modal.append(box)
  const shut = () => {
    modal.remove()
    document.removeEventListener("keydown", onKey)
  }
  const onKey = (event) => { if (event.key === "Escape") shut() }
  close.addEventListener("click", shut)
  modal.addEventListener("click", (event) => { if (event.target === modal) shut() })
  document.addEventListener("keydown", onKey)
  document.body.append(modal)
  close.focus()
}

function bookUrl(params) {
  return `book.html?${new URLSearchParams(params).toString()}`
}

function renderAll() {
  renderPackages()
  renderLehenga()
  renderWizard()
  paintContact()
  fillIcons()
  observeReveals()
}

function packageCard(item, index) {
  const copy = t()
  const card = document.createElement("article")
  card.className = "glass pkg reveal"
  card.id = `pkg-${item.id}`
  const thumb = document.createElement("div")
  thumb.className = "pkg-thumb"
  const img = document.createElement("img")
  img.src = LOOK_IMAGES[index % LOOK_IMAGES.length]
  img.alt = ""
  img.loading = "lazy"
  const no = document.createElement("span")
  no.className = "pkg-no"
  no.textContent = String(index + 1).padStart(2, "0")
  thumb.append(img, no)
  const body = document.createElement("div")
  body.className = "pkg-body"
  const title = document.createElement("h3")
  title.textContent = field(item, "name")
  const note = document.createElement("p")
  note.textContent = field(item, "note")
  const price = document.createElement("span")
  price.className = "pkg-price"
  price.textContent = money(item.price_inr)
  if (item.price_inr != null && item.price_inr !== "") {
    const small = document.createElement("small")
    small.textContent = lang() === "hi" ? "से शुरू" : "onwards"
    price.append(small)
  }
  body.append(title, note, price)
  const actions = document.createElement("div")
  actions.className = "pkg-actions"
  const video = document.createElement("button")
  video.type = "button"
  video.className = "btn btn-line btn-small"
  video.dataset.video = item.ref_video_url || REEL_URL
  video.innerHTML = `<span class="ico">${ICONS.play}</span>`
  video.append(lang() === "hi" ? "वीडियो" : "Video")
  const button = document.createElement("a")
  button.className = "btn btn-gold btn-small"
  button.href = bookUrl({ type: "bridal", service: item.id })
  button.textContent = copy.askPackage
  actions.append(video, button)
  card.append(thumb, body, actions)
  return card
}

function renderPackages() {
  const list = state.packages
    .filter((item) => item.active !== false)
    .sort((a, b) => a.sort_order - b.sort_order)
  const full = $("#package-list")
  if (full) {
    full.replaceChildren(...list.map((item, index) => packageCard(item, index)))
    const focus = new URLSearchParams(location.search).get("p")
    const target = focus && document.getElementById(`pkg-${focus}`)
    if (target) {
      target.classList.add("is-focus", "is-in")
      if (!renderPackages.scrolled) {
        renderPackages.scrolled = true
        setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "center" }), 200)
      }
    }
  }
  const preview = $("#package-preview")
  if (preview) preview.replaceChildren(...list.slice(0, 3).map((item, index) => packageCard(item, index)))
  const bridalTab = $("#mode-bridal")
  const lehengaTab = $("#mode-lehenga")
  if (bridalTab) bridalTab.classList.toggle("is-on", state.btype === "bridal")
  if (lehengaTab) lehengaTab.classList.toggle("is-on", state.btype === "lehenga")
  observeReveals()
}

function lehMedia(item) {
  if (item.video_url) return { kind: "video", src: item.video_url }
  if (item.photo) return { kind: "image", src: item.photo }
  return null
}

function lehFocusId() {
  return new URLSearchParams(location.search).get("id")
}

function lehAvailable(item) {
  return item.status === "available" || item.status === "returned"
}

function renderLehenga() {
  const grid = $("#lehenga-grid")
  if (!grid) return
  const copy = t()
  const L = lang()
  const focusId = lehFocusId()
  const focusItem = focusId && lehengaById(focusId)
  const note = $("#focus-note")
  if (note) {
    note.hidden = !focusItem
    if (focusItem) note.textContent = L === "hi" ? `आपको भेजा गया लहंगा — टैग #${focusItem.tag_no}` : `The lehenga shared with you — tag #${focusItem.tag_no}`
  }
  grid.replaceChildren()
  if (!state.lehengas.length) {
    const empty = document.createElement("p")
    empty.className = "hint"
    empty.textContent = copy.noLehenga
    grid.append(empty)
  }
  const ordered = focusItem ? [focusItem, ...state.lehengas.filter((item) => item.id !== focusItem.id)] : state.lehengas
  ordered.forEach((item) => {
    const card = document.createElement("article")
    card.className = "glass leh-card reveal" + (focusItem && item.id === focusItem.id ? " is-focus is-in" : "")
    card.id = `leh-${item.id}`
    const media = lehMedia(item)
    const frame = document.createElement("div")
    frame.className = "leh-frame"
    if (media && media.kind === "video") {
      const video = document.createElement("video")
      video.src = media.src
      video.controls = true
      video.preload = "metadata"
      video.playsInline = true
      if (item.photo) video.poster = item.photo
      frame.append(video)
    } else if (media) {
      const img = document.createElement("img")
      img.src = media.src
      img.alt = item.title || `Lehenga ${item.tag_no}`
      img.loading = "lazy"
      frame.append(img)
    } else {
      frame.classList.add("leh-empty")
      const span = document.createElement("span")
      span.textContent = "✦"
      frame.append(span)
    }
    const tag = document.createElement("span")
    tag.className = "tagpill"
    tag.textContent = `#${item.tag_no}`
    frame.append(tag)
    const body = document.createElement("div")
    body.className = "leh-body"
    const title = document.createElement("h3")
    title.textContent = item.title || (L === "hi" ? "ब्राइडल लहंगा" : "Bridal lehenga")
    const badge = document.createElement("span")
    badge.className = "status" + (lehAvailable(item) ? "" : " is-busy")
    badge.textContent = lehAvailable(item) ? copy.available : (L === "hi" ? "अभी बुक — दूसरी तिथि देखें" : "Booked now — see other dates")
    const row = document.createElement("div")
    row.className = "btn-row"
    const see = document.createElement("button")
    see.type = "button"
    see.className = "btn btn-line btn-small"
    see.textContent = L === "hi" ? "तिथि देखें" : "See dates"
    see.addEventListener("click", () => {
      state.lehenga = item.id
      renderLehCalendar()
      const cal = $("#leh-cal")
      if (cal) cal.scrollIntoView({ behavior: "smooth", block: "start" })
    })
    const button = document.createElement("a")
    button.className = "btn btn-gold btn-small"
    button.href = bookUrl({ type: "lehenga", lehenga: item.id })
    button.textContent = L === "hi" ? "बुक करें" : "Book"
    row.append(see, button)
    body.append(title, badge, row)
    card.append(frame, body)
    grid.append(card)
  })
  if (focusItem && !renderLehenga.scrolled) {
    renderLehenga.scrolled = true
    state.lehenga = focusItem.id
    setTimeout(() => document.getElementById(`leh-${focusItem.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" }), 250)
  }
  renderLehCalendar()
  observeReveals()
}

function renderLehCalendar() {
  const days = $("#leh-days")
  const week = $("#leh-week")
  const label = $("#leh-label")
  const hint = $("#leh-hint")
  if (!days || !week || !label) return
  const copy = t()
  label.textContent = `${copy.months[state.lehView.getMonth()]} ${state.lehView.getFullYear()}`
  week.replaceChildren(...copy.weeks.map((day) => {
    const span = document.createElement("span")
    span.textContent = day
    return span
  }))
  const current = lehengaById(state.lehenga) || state.lehengas[0]
  if (hint) hint.textContent = current ? copy.lehHintFor.replace("{tag}", current.tag_no) : copy.lehHintPick
  const pick = $("#leh-pick")
  if (pick) {
    pick.replaceChildren(...state.lehengas.map((item) => {
      const chip = document.createElement("button")
      chip.type = "button"
      chip.className = "pick" + (current && current.id === item.id ? " is-on" : "")
      chip.textContent = `#${item.tag_no}${item.title ? ` · ${item.title}` : ""}`
      chip.addEventListener("click", () => {
        state.lehenga = item.id
        renderLehCalendar()
      })
      return chip
    }))
  }
  const today = startOfDay(new Date())
  const max = addDays(today, 60)
  const prev = $("#leh-prev")
  const next = $("#leh-next")
  if (prev) prev.disabled = state.lehView <= startOfMonth(today)
  if (next) next.disabled = addDays(state.lehView, 32) > max
  days.replaceChildren()
  const first = state.lehView
  const pad = first.getDay()
  const count = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate()
  for (let i = 0; i < pad; i += 1) days.append(document.createElement("span"))
  for (let day = 1; day <= count; day += 1) {
    const date = new Date(first.getFullYear(), first.getMonth(), day)
    const button = document.createElement("a")
    button.className = "day"
    button.textContent = String(day)
    const off = startOfDay(date) < today || startOfDay(date) > max
    if (sameDay(date, today)) button.classList.add("is-today")
    if (off) {
      button.classList.add("is-off")
    } else if (current && isLehTaken(current.id, date)) {
      button.classList.add("is-busy")
      button.title = copy.taken
    } else {
      button.classList.add("is-free")
      if (current) button.href = bookUrl({ type: "lehenga", lehenga: current.id, date: iso(date) })
    }
    days.append(button)
  }
}

function captureGuest() {
  const name = $("#guest-name")
  if (!name) return
  state.name = name.value
  state.phone = $("#guest-phone").value
  state.note = $("#guest-note").value
}

function renderWizard() {
  const wizard = $("#wizard")
  if (!wizard) return
  captureGuest()
  const rail = $("#rail")
  const book = $(".book")
  const next = $("#next-btn")
  const back = $("#back-btn")
  if (!book || book.classList.contains("is-done")) return
  const copy = t()
  const L = lang()
  rail.replaceChildren()
  steps().forEach((label, index) => {
    const item = document.createElement("li")
    const button = document.createElement("button")
    button.type = "button"
    button.innerHTML = `<strong>0${index + 1}</strong>${label}`
    if (index === state.step) button.classList.add("is-on")
    button.disabled = index > state.step
    button.addEventListener("click", () => {
      state.step = index
      renderWizard()
    })
    item.append(button)
    rail.append(item)
  })

  wizard.replaceChildren()
  const panel = document.createElement("div")
  panel.className = "panel"
  if (state.btype === "bridal") {
    if (state.step === 0) panel.append(packageStep(copy))
    if (state.step === 1) panel.append(dateStep(copy, false))
    if (state.step === 2) panel.append(slotStep(copy))
    if (state.step === 3) panel.append(youStep(L, copy))
  } else {
    if (state.step === 0) panel.append(lehengaPickStep(copy))
    if (state.step === 1) panel.append(dateStep(copy, true))
    if (state.step === 2) panel.append(youStep(L, copy))
  }
  wizard.append(panel)

  back.hidden = state.step === 0
  const hi = next.querySelector(".t-hi")
  const en = next.querySelector(".t-en")
  if (state.step === lastStep()) {
    hi.textContent = COPY.hi.send
    en.textContent = COPY.en.send
  } else {
    hi.textContent = COPY.hi.next
    en.textContent = COPY.en.next
  }
  $("#form-error").textContent = ""
}

function packageStep(copy) {
  const wrap = document.createElement("div")
  const title = document.createElement("h3")
  title.textContent = copy.packageTitle
  const hint = document.createElement("p")
  hint.className = "hint"
  hint.textContent = copy.packageHint
  const picks = document.createElement("div")
  picks.className = "picks"
  state.packages.filter((item) => item.active !== false).forEach((item) => {
    const button = document.createElement("button")
    button.type = "button"
    button.className = "pick" + (state.service === item.id ? " is-on" : "")
    button.textContent = field(item, "name")
    button.addEventListener("click", () => {
      state.service = item.id
      renderWizard()
    })
    picks.append(button)
  })
  wrap.append(title, hint, picks)
  return wrap
}

function lehengaPickStep(copy) {
  const wrap = document.createElement("div")
  const title = document.createElement("h3")
  title.textContent = copy.lehengaTitle
  const hint = document.createElement("p")
  hint.className = "hint"
  hint.textContent = copy.lehengaHint
  const picks = document.createElement("div")
  picks.className = "picks"
  state.lehengas.forEach((item) => {
    const button = document.createElement("button")
    button.type = "button"
    button.className = "pick" + (state.lehenga === item.id ? " is-on" : "")
    button.textContent = `#${item.tag_no}${item.title ? ` · ${item.title}` : ""}`
    button.addEventListener("click", () => {
      state.lehenga = item.id
      renderWizard()
    })
    picks.append(button)
  })
  wrap.append(title, hint, picks)
  return wrap
}

function dateStep(copy, forLehenga) {
  const wrap = document.createElement("div")
  const title = document.createElement("h3")
  title.textContent = copy.dateTitle
  const hint = document.createElement("p")
  hint.className = "hint"
  hint.textContent = forLehenga ? copy.dateHintLehenga : copy.dateHintBridal
  const head = document.createElement("div")
  head.className = "cal-head"
  const prev = document.createElement("button")
  prev.type = "button"
  prev.className = "btn btn-glass btn-small"
  prev.textContent = "‹"
  prev.setAttribute("aria-label", copy.prevMonth)
  const label = document.createElement("strong")
  label.textContent = `${copy.months[state.view.getMonth()]} ${state.view.getFullYear()}`
  const next = document.createElement("button")
  next.type = "button"
  next.className = "btn btn-glass btn-small"
  next.textContent = "›"
  next.setAttribute("aria-label", copy.nextMonth)
  const today = startOfDay(new Date())
  const max = addDays(today, 60)
  prev.disabled = state.view <= startOfMonth(today)
  next.disabled = addDays(state.view, 32) > max
  prev.addEventListener("click", () => {
    state.view = new Date(state.view.getFullYear(), state.view.getMonth() - 1, 1)
    renderWizard()
  })
  next.addEventListener("click", () => {
    state.view = new Date(state.view.getFullYear(), state.view.getMonth() + 1, 1)
    renderWizard()
  })
  head.append(prev, label, next)

  const week = document.createElement("div")
  week.className = "week"
  copy.weeks.forEach((day) => {
    const span = document.createElement("span")
    span.textContent = day
    week.append(span)
  })

  const days = document.createElement("div")
  days.className = "days"
  const first = state.view
  const pad = first.getDay()
  const count = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate()
  for (let i = 0; i < pad; i += 1) days.append(document.createElement("span"))
  for (let day = 1; day <= count; day += 1) {
    const date = new Date(first.getFullYear(), first.getMonth(), day)
    const button = document.createElement("button")
    button.type = "button"
    button.className = "day"
    button.textContent = String(day)
    const off = startOfDay(date) < today || startOfDay(date) > max
    button.disabled = off
    if (sameDay(date, today)) button.classList.add("is-today")
    if (sameDay(date, state.date)) button.classList.add("is-on")
    if (!off) {
      if (forLehenga) {
        if (state.lehenga && isLehTaken(state.lehenga, date)) {
          button.classList.add("is-busy")
          button.title = copy.taken
        } else {
          button.classList.add("is-free")
        }
      } else if (dayIsFull(date)) {
        button.classList.add("is-full")
        button.title = copy.full
      }
    }
    button.addEventListener("click", () => {
      state.date = date
      if (!forLehenga && state.slot && isTaken(date, state.slot)) state.slot = null
      renderWizard()
    })
    days.append(button)
  }
  wrap.append(title, hint, head, week, days)
  return wrap
}

function slotStep(copy) {
  const wrap = document.createElement("div")
  const title = document.createElement("h3")
  title.textContent = copy.slotTitle
  const hint = document.createElement("p")
  hint.className = "hint"
  hint.textContent = copy.slotHint
  const row = document.createElement("div")
  row.className = "slots"
  activeSlots().forEach((slot) => {
    const button = document.createElement("button")
    button.type = "button"
    const taken = state.date && isTaken(state.date, slot.id)
    button.className = "pick" + (state.slot === slot.id ? " is-on" : "")
    button.disabled = taken
    const name = document.createElement("span")
    name.textContent = field(slot, "label")
    const time = document.createElement("small")
    time.textContent = taken ? copy.taken : `${slot.starts}–${slot.ends}`
    button.append(name, time)
    button.addEventListener("click", () => {
      state.slot = slot.id
      renderWizard()
    })
    row.append(button)
  })
  wrap.append(title, hint, row)
  return wrap
}

function summaryLine(L) {
  if (state.btype === "bridal") {
    const chosen = packageById(state.service)
    if (!chosen) return ""
    const when = state.date
      ? new Intl.DateTimeFormat(L === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "long" }).format(state.date)
      : ""
    const slot = activeSlots().find((item) => item.id === state.slot)
    return [field(chosen, "name"), when, slot ? `${field(slot, "label")} ${slot.starts}–${slot.ends}` : "", money(chosen.price_inr)]
      .filter(Boolean)
      .join(" · ")
  }
  const chosen = lehengaById(state.lehenga)
  if (!chosen) return ""
  const when = state.date
    ? new Intl.DateTimeFormat(L === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "long", year: "numeric" }).format(state.date)
    : ""
  return [`#${chosen.tag_no}${chosen.title ? ` · ${chosen.title}` : ""}`, when].filter(Boolean).join(" · ")
}

function youStep(L, copy) {
  const wrap = document.createElement("div")
  const title = document.createElement("h3")
  title.textContent = copy.youTitle
  const hint = document.createElement("p")
  hint.className = "hint"
  hint.textContent = copy.youHint
  const line = summaryLine(L)
  if (line) {
    const chip = document.createElement("p")
    chip.className = "chip"
    chip.textContent = line
    wrap.append(title, hint, chip)
  } else {
    wrap.append(title, hint)
  }
  const who = document.createElement("div")
  who.className = "picks"
  WHO.forEach((item) => {
    const button = document.createElement("button")
    button.type = "button"
    button.className = "pick" + (state.who === item.id ? " is-on" : "")
    button.textContent = item[L]
    button.addEventListener("click", () => {
      state.who = item.id
      renderWizard()
      const name = $("#guest-name")
      if (name) name.focus()
    })
    who.append(button)
  })
  const fields = document.createElement("div")
  fields.className = "fields"
  fields.innerHTML = `
    <label>${copy.name}<input id="guest-name" name="name" autocomplete="name" required maxlength="80" /></label>
    <label>${copy.phone}<input id="guest-phone" name="tel" inputmode="numeric" autocomplete="tel" maxlength="10" required /></label>
    <label>${copy.note}<textarea id="guest-note" maxlength="280"></textarea></label>
  `
  fields.querySelector("#guest-name").value = state.name
  fields.querySelector("#guest-phone").value = state.phone
  fields.querySelector("#guest-note").value = state.note
  wrap.append(who, fields)
  return wrap
}

function showError(message) {
  $("#form-error").textContent = message
}

function validate() {
  const copy = t()
  if (state.btype === "bridal") {
    if (state.step === 0 && !state.service) return copy.pickPackage
    if (state.step === 1 && !state.date) return copy.pickDate
    if (state.step === 2 && !state.slot) return copy.pickSlot
    if (state.step === 2 && state.date && isTaken(state.date, state.slot)) return copy.slotTaken
    if (state.step === 3) {
      const name = $("#guest-name").value.trim()
      const phone = $("#guest-phone").value.replace(/\D/g, "")
      if (name.length < 2) return copy.needName
      if (!/^[6-9]\d{9}$/.test(phone)) return copy.needPhone
    }
    return ""
  }
  if (state.step === 0 && !state.lehenga) return copy.pickLehenga
  if (state.step === 1 && !state.date) return copy.pickDate
  if (state.step === 1 && state.lehenga && state.date && isLehTaken(state.lehenga, state.date)) return copy.dateTaken
  if (state.step === 2) {
    const name = $("#guest-name").value.trim()
    const phone = $("#guest-phone").value.replace(/\D/g, "")
    if (name.length < 2) return copy.needName
    if (!/^[6-9]\d{9}$/.test(phone)) return copy.needPhone
  }
  return ""
}

function whatsAppUrl(kind) {
  const name = $("#guest-name").value.trim()
  const phone = $("#guest-phone").value.replace(/\D/g, "")
  const note = $("#guest-note").value.trim()
  const who = WHO.find((item) => item.id === state.who)
  const date = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(state.date)
  let lines
  if (kind === "bridal") {
    const service = packageById(state.service)
    const slot = activeSlots().find((item) => item.id === state.slot)
    lines = lang() === "hi"
      ? ["नमस्ते।", "Sparkle Makeover, ओराई", "", "ब्राइडल पैकेज का अनुरोध", `पैकेज: ${service.name_hi}`, `तिथि: ${date}`, `समय: ${slot.label_hi} (${slot.starts}–${slot.ends})`, `किसके लिए: ${who.hi}`, `नाम: ${name}`, `मोबाइल: ${phone}`]
      : ["Hello,", "Sparkle Makeover, Orai", "", "Bridal package request", `Package: ${service.name_en}`, `Date: ${date}`, `Time: ${slot.label_en} (${slot.starts}–${slot.ends})`, `For: ${who.en}`, `Name: ${name}`, `Mobile: ${phone}`]
    if (service.price_inr != null) lines.push(lang() === "hi" ? `शुल्क: ₹${service.price_inr}` : `Fee: ₹${service.price_inr}`)
  } else {
    const item = lehengaById(state.lehenga)
    lines = lang() === "hi"
      ? ["नमस्ते।", "Sparkle Makeover, ओराई", "", "लहंगा बुकिंग का अनुरोध", `टैग: ${item.tag_no}${item.title ? ` (${item.title})` : ""}`, `तिथि: ${date}`, `किसके लिए: ${who.hi}`, `नाम: ${name}`, `मोबाइल: ${phone}`]
      : ["Hello,", "Sparkle Makeover, Orai", "", "Lehenga booking request", `Tag: ${item.tag_no}${item.title ? ` (${item.title})` : ""}`, `Date: ${date}`, `For: ${who.en}`, `Name: ${name}`, `Mobile: ${phone}`]
  }
  if (note) lines.push(lang() === "hi" ? `टिप्पणी: ${note}` : `Note: ${note}`)
  lines.push("", lang() === "hi" ? "कृपया पुष्टि करें। तिथि पुष्टि के बाद ही निश्चित होगी।" : "Please confirm. The date is fixed only after your confirmation.")
  const number = String(state.settings.whatsapp || "918081817807").replace(/\D/g, "")
  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`
}

async function sendRequest() {
  const name = $("#guest-name").value.trim()
  const phone = $("#guest-phone").value.replace(/\D/g, "")
  const note = $("#guest-note").value.trim()
  let saved = true
  if (db && state.btype === "bridal") {
    const { error } = await db.rpc("request_appointment", {
      p_category: "bridal",
      p_service_id: state.service,
      p_event_date: iso(state.date),
      p_slot: state.slot,
      p_customer_name: name,
      p_phone: phone,
      p_guest_for: state.who,
      p_note: note,
    })
    if (error) {
      if (String(error.message || "").includes("slot_taken")) {
        state.occupied.add(takenKey(state.date, state.slot))
        state.slot = null
        state.step = 2
        renderWizard()
        showError(t().slotTaken)
        return
      }
      saved = false
    } else {
      state.occupied.add(takenKey(state.date, state.slot))
    }
  }
  if (db && state.btype === "lehenga") {
    const { error } = await db.rpc("request_lehenga", {
      p_lehenga_id: state.lehenga,
      p_event_date: iso(state.date),
      p_customer_name: name,
      p_phone: phone,
      p_note: note,
    })
    if (error) {
      if (String(error.message || "").includes("slot_taken")) {
        state.lehTaken.add(lehKey(state.lehenga, state.date))
        state.step = 1
        renderWizard()
        showError(t().dateTaken)
        return
      }
      saved = false
    } else {
      state.lehTaken.add(lehKey(state.lehenga, state.date))
    }
  }
  const url = whatsAppUrl(state.btype)
  $("#wa-fallback").href = url
  window.open(url, "_blank", "noopener,noreferrer")
  $(".book").classList.add("is-done")
  const success = $("#success")
  success.hidden = false
  if (!saved) {
    const extra = document.createElement("p")
    extra.textContent = t().saveFailed
    success.insertBefore(extra, success.querySelector(".btn"))
  }
  success.focus()
}

function resetBooking() {
  state.step = state.btype === "bridal" ? (state.service ? 1 : 0) : (state.lehenga ? 1 : 0)
  state.date = null
  state.slot = null
  state.who = "self"
  state.name = ""
  state.phone = ""
  state.note = ""
  $(".book").classList.remove("is-done")
  const success = $("#success")
  success.hidden = true
  success.querySelectorAll("p").forEach((node, index) => {
    if (index > 0) node.remove()
  })
  renderWizard()
}

async function refreshOccupied() {
  if (!db) return
  const today = startOfDay(new Date())
  const { data, error } = await db.rpc("occupied_slots", {
    from_date: iso(today),
    to_date: iso(addDays(today, 60)),
  })
  if (error || !data) return
  state.occupied = new Set(data.map((row) => `${String(row.day).slice(0, 10)}|${row.slot}`))
  if ($("#wizard") && state.btype === "bridal" && (state.step === 1 || state.step === 2)) {
    const book = $(".book")
    if (book && !book.classList.contains("is-done")) renderWizard()
  }
}

async function refreshLehenga() {
  if (!db) return
  const today = startOfDay(new Date())
  const [show, cal] = await Promise.all([
    db.rpc("lehenga_showcase"),
    db.rpc("lehenga_calendar", { from_date: iso(today), to_date: iso(addDays(today, 60)) }),
  ])
  if (show.data) {
    state.lehengas = show.data
    if (!state.lehenga && show.data[0]) state.lehenga = show.data[0].id
  }
  if (cal.data) {
    state.lehTaken = new Set(cal.data.map((row) => `${row.lehenga_id}|${String(row.day).slice(0, 10)}`))
  }
  renderLehenga()
  if ($("#wizard") && state.btype === "lehenga" && state.step === 1) {
    const book = $(".book")
    if (book && !book.classList.contains("is-done")) renderWizard()
  }
}

async function loadStudio() {
  if (!db) {
    renderAll()
    return
  }
  const [services, slots, settings] = await Promise.all([
    db.from("services").select("id,category,group_key,name_hi,name_en,note_hi,note_en,price_inr,sort_order,active,ref_video_url").eq("category", "bridal").eq("active", true).order("sort_order"),
    db.from("time_slots").select("id,label_hi,label_en,starts,ends,sort_order,active").eq("active", true).order("sort_order"),
    db.from("studio_settings").select("whatsapp,phone_main,email,facebook,instagram,hours_hi,hours_en,address_hi,address_en,directions_hi,directions_en,map_lat,map_lng").limit(1),
  ])
  if (services.data?.length) state.packages = services.data
  if (slots.data?.length) state.slots = slots.data
  if (settings.data?.[0]) state.settings = { ...state.settings, ...settings.data[0] }
  applyBookParams()
  renderAll()
  refreshOccupied()
  refreshLehenga()
}

function applyBookParams() {
  if (!$("#wizard") || !window.URLSearchParams) return
  const params = new URLSearchParams(location.search)
  const type = params.get("type")
  if (type === "lehenga") state.btype = "lehenga"
  else if (type === "bridal") state.btype = "bridal"
  const service = params.get("service")
  if (service && packageById(service)) {
    state.service = service
    state.step = 1
  }
  const lehenga = params.get("lehenga")
  if (lehenga) {
    state.lehenga = lehenga
    state.step = 1
  }
  const date = parseDate(params.get("date"))
  if (date) {
    const today = startOfDay(new Date())
    if (startOfDay(date) >= today && startOfDay(date) <= addDays(today, 60)) {
      state.date = date
      state.view = startOfMonth(date)
      state.lehView = startOfMonth(date)
      state.step = state.btype === "bridal" ? 2 : 2
      if (state.btype === "bridal" && !state.service) state.step = 1
      if (state.btype === "lehenga" && !lehengaById(state.lehenga)) state.step = 0
    }
  }
}

function bindChrome() {
  const saved = (() => {
    try { return localStorage.getItem("sparkle-lang") } catch { return null }
  })()
  mountChrome()
  applyLang(saved === "en" ? "en" : "hi")

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-video]")
    if (!trigger) return
    event.preventDefault()
    openVideo(trigger.dataset.video)
  })

  const toggle = $("[data-lang-toggle]")
  if (toggle) toggle.addEventListener("click", () => {
    applyLang(lang() === "hi" ? "en" : "hi")
  })

  const modeBridal = $("#mode-bridal")
  if (modeBridal) modeBridal.addEventListener("click", () => {
    state.btype = "bridal"
    if (!packageById(state.service)) state.service = null
    state.step = state.service ? 1 : 0
    renderWizard()
  })
  const modeLehenga = $("#mode-lehenga")
  if (modeLehenga) modeLehenga.addEventListener("click", () => {
    state.btype = "lehenga"
    if (!lehengaById(state.lehenga)) state.lehenga = state.lehengas[0]?.id || null
    state.step = state.lehenga ? 1 : 0
    renderWizard()
  })
  const lehPrev = $("#leh-prev")
  if (lehPrev) lehPrev.addEventListener("click", () => {
    state.lehView = new Date(state.lehView.getFullYear(), state.lehView.getMonth() - 1, 1)
    renderLehCalendar()
  })
  const lehNext = $("#leh-next")
  if (lehNext) lehNext.addEventListener("click", () => {
    state.lehView = new Date(state.lehView.getFullYear(), state.lehView.getMonth() + 1, 1)
    renderLehCalendar()
  })

  const sheet = $("#sheet")
  const menu = $("[data-menu-btn]")
  if (sheet && menu) {
    menu.addEventListener("click", () => {
      const open = sheet.hasAttribute("hidden")
      sheet.toggleAttribute("hidden", !open)
      menu.setAttribute("aria-expanded", open ? "true" : "false")
    })
    document.querySelectorAll("[data-sheet-link]").forEach((link) => {
      link.addEventListener("click", () => {
        sheet.hidden = true
        menu.setAttribute("aria-expanded", "false")
      })
    })
  }

  const fine = window.matchMedia("(pointer: fine)").matches
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const stage = $("[data-slab]")
  if (fine && !reduce && stage) {
    stage.addEventListener("pointermove", (event) => {
      const rect = stage.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      stage.style.setProperty("--ry", `${x * -18}deg`)
      stage.style.setProperty("--rx", `${5 + y * -10}deg`)
    })
    stage.addEventListener("pointerleave", () => {
      stage.style.removeProperty("--ry")
      stage.style.removeProperty("--rx")
    })
  }

  const backBtn = $("#back-btn")
  if (backBtn) backBtn.addEventListener("click", () => {
    state.step = Math.max(0, state.step - 1)
    renderWizard()
  })
  const nextBtn = $("#next-btn")
  if (nextBtn) nextBtn.addEventListener("click", () => {
    const error = validate()
    if (error) {
      showError(error)
      return
    }
    if (state.step < lastStep()) {
      state.step += 1
      renderWizard()
      return
    }
    sendRequest()
  })
  const resetBtn = $("#reset-btn")
  if (resetBtn) resetBtn.addEventListener("click", resetBooking)

  mountDust()
  loadStudio()
  setInterval(refreshOccupied, 20000)
  setInterval(refreshLehenga, 30000)
}

function mountDust() {
  const canvas = $(".dust")
  if (!canvas) return
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (reduce) return
  const ctx = canvas.getContext("2d", { alpha: true })
  const specks = Array.from({ length: 44 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: 0.6 + Math.random() * 2,
    v: 0.01 + Math.random() * 0.03,
    o: 0.12 + Math.random() * 0.3,
    drift: Math.random() * Math.PI * 2,
    tw: 0.4 + Math.random() * 1.2,
  }))
  let running = true

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    canvas.width = Math.round(window.innerWidth * dpr)
    canvas.height = Math.round(window.innerHeight * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }
  function frame(now) {
    if (!running) return
    const width = window.innerWidth
    const height = window.innerHeight
    ctx.clearRect(0, 0, width, height)
    specks.forEach((speck) => {
      speck.y -= speck.v / 100
      if (speck.y < -0.02) speck.y = 1.02
      const sparkle = 0.55 + 0.45 * Math.sin(now / 700 * speck.tw + speck.drift)
      const x = speck.x * width + Math.sin(now / 900 + speck.drift) * 10
      const y = speck.y * height
      ctx.beginPath()
      ctx.fillStyle = `rgba(201,161,78,${speck.o * sparkle})`
      ctx.arc(x, y, speck.r, 0, Math.PI * 2)
      ctx.fill()
    })
    requestAnimationFrame(frame)
  }
  resize()
  window.addEventListener("resize", resize)
  document.addEventListener("visibilitychange", () => {
    const was = running
    running = document.visibilityState === "visible"
    if (running && !was) requestAnimationFrame(frame)
  })
  requestAnimationFrame(frame)
}

bindChrome()
