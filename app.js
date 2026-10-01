const FALLBACK_SETTINGS = {
  whatsapp: "917355718075",
  phone_main: "7355718075",
  phone_booking: "7080849084",
  phone_extra: "9936575872",
  instagram: "https://www.instagram.com/tanishqmakeoverorai/",
}

const FALLBACK_SLOTS = [
  { id: "morning", label_hi: "सुबह", label_en: "Morning", starts: "09:00", ends: "12:00", sort_order: 1, active: true },
  { id: "afternoon", label_hi: "दोपहर", label_en: "Afternoon", starts: "12:00", ends: "16:00", sort_order: 2, active: true },
  { id: "evening", label_hi: "संध्या", label_en: "Evening", starts: "16:00", ends: "19:00", sort_order: 3, active: true },
  { id: "night", label_hi: "रात्रि पूर्व", label_en: "Early night", starts: "19:00", ends: "20:30", sort_order: 4, active: true },
]

const FALLBACK_SERVICES = [
  ["wedding", "bridal", "bridal", "विवाह मेकअप", "Wedding makeup", "विवाह-दिवस का पूर्ण रूप, आधार से अंतिम सज्जा तक।", "The full wedding-day look, from base to the final setting.", null, 1],
  ["hd", "bridal", "bridal", "एचडी ब्राइडल", "HD bridal", "कैमरे के लिए स्पष्ट और दीर्घस्थायी फिनिश।", "A clear, long-wear finish made for the camera.", null, 2],
  ["airbrush", "bridal", "bridal", "एयरब्रश ब्राइडल", "Airbrush bridal", "हल्की परत, समरूप रंग और लंबे समय तक टिकाव।", "A light, even layer with long wear.", null, 3],
  ["engagement", "bridal", "bridal", "सगाई", "Engagement", "सगाई के लिए कोमल और चित्र-योग्य रूप।", "A soft look that reads clearly in photographs.", null, 4],
  ["haldi", "bridal", "bridal", "हल्दी", "Haldi", "हल्दी और फूलों के साथ हल्की, ताज़ा सज्जा।", "Light and fresh, composed for yellow and flowers.", null, 5],
  ["mehndi", "bridal", "bridal", "मेहंदी", "Mehndi", "मेहंदी और पारिवारिक समारोह के लिए मृदु रूप।", "A softer glam for mehndi and family functions.", null, 6],
  ["sangeet", "bridal", "bridal", "संगीत", "Sangeet", "संगीत की शाम के लिए चमकदार रूप।", "A brighter look for the sangeet evening.", null, 7],
  ["reception", "bridal", "bridal", "रिसेप्शन", "Reception", "रिसेप्शन के लिए संध्या-कालीन रूप।", "An evening look for the reception.", null, 8],
  ["trial", "bridal", "bridal", "मेकअप ट्रायल", "Makeup trial", "विवाह से पहले रूप की परीक्षा।", "A trial of the look before the wedding day.", null, 9],
  ["prebridal", "bridal", "bridal", "प्री-ब्राइडल केयर", "Pre-bridal care", "विवाह से पहले त्वचा की तैयारी।", "Skin preparation in the days before the wedding.", null, 10],
  ["family", "bridal", "bridal", "परिवार ग्लैम", "Family glam", "माता, बहन और अतिथियों की एक साथ सज्जा।", "Mothers, sisters, and guests, prepared together.", null, 11],
  ["shoot", "bridal", "bridal", "फोटोशूट", "Photoshoot", "चित्रण के लिए रूप। छायाचित्र अलग से निर्धारित होता है।", "A look built for the camera. Photography is arranged separately.", null, 12],
  ["thread-brow", "salon", "thread", "भौंह सूत्रण", "Eyebrow threading", "भौंहों का आकार।", "Brow shaping.", 50, 101],
  ["thread-lip", "salon", "thread", "ऊपरी ओष्ठ सूत्रण", "Upper lip threading", "ऊपरी ओष्ठ।", "Upper lip.", 40, 102],
  ["thread-forehead", "salon", "thread", "ललाट सूत्रण", "Forehead threading", "ललाट की रेखा।", "Forehead.", 40, 103],
  ["thread-face", "salon", "thread", "पूर्ण मुख सूत्रण", "Full face threading", "भौंह, ललाट और ओष्ठ।", "Brows, forehead, and lip.", 120, 104],
  ["wax-underarm", "salon", "wax", "काँख वैक्स", "Underarm wax", "दोनों काँख।", "Both underarms.", 100, 201],
  ["wax-half-arm", "salon", "wax", "अर्ध बाहु वैक्स", "Half arms wax", "कोहनी तक।", "To the elbow.", 200, 202],
  ["wax-full-arm", "salon", "wax", "पूर्ण बाहु वैक्स", "Full arms wax", "पूर्ण बाहु।", "Full arms.", 350, 203],
  ["wax-arm-under", "salon", "wax", "बाहु तथा काँख", "Arms and underarms", "पूर्ण बाहु के साथ काँख।", "Full arms with underarms.", 400, 204],
  ["wax-half-leg", "salon", "wax", "अर्ध पाद वैक्स", "Half legs wax", "घुटने तक।", "To the knee.", 300, 205],
  ["wax-full-leg", "salon", "wax", "पूर्ण पाद वैक्स", "Full legs wax", "पूर्ण पाद।", "Full legs.", 550, 206],
  ["wax-body", "salon", "wax", "पूर्ण शरीर वैक्स", "Full body wax", "बाहु, पाद और काँख।", "Arms, legs, and underarms.", 1800, 207],
  ["skin-cleanup", "salon", "skin", "क्लीनअप", "Cleanup", "त्वचा की सफाई।", "A skin cleanup.", 600, 301],
  ["skin-fruit", "salon", "skin", "फल फेशियल", "Fruit facial", "सामान्य त्वचा के लिए।", "For regular skin care.", 800, 302],
  ["skin-gold", "salon", "skin", "गोल्ड फेशियल", "Gold facial", "उज्ज्वल फिनिश।", "A brighter finish.", 1200, 303],
  ["skin-detan", "salon", "skin", "डी-टैन", "De-tan", "धूप के प्रभाव को हल्का करना।", "Softens the look of sun exposure.", 700, 304],
  ["skin-bridal", "salon", "skin", "ब्राइडल ग्लो फेशियल", "Bridal glow facial", "विवाह से पहले की त्वचा।", "Skin care before the wedding.", 1600, 305],
  ["hair-wash", "salon", "hair", "केश प्रक्षालन", "Hair wash", "धोकर सुखाना।", "Wash and dry.", 200, 401],
  ["hair-blow", "salon", "hair", "ब्लो ड्राई", "Blow dry", "सेट करके सुखाना।", "A styled blow dry.", 400, 402],
  ["hair-spa", "salon", "hair", "हेयर स्पा", "Hair spa", "रूखे केशों के लिए पोषण।", "Nourishment for dry hair.", 1000, 403],
  ["hair-bun", "salon", "hair", "जूड़ा / हेयर स्टाइल", "Bun and hair styling", "समारोह के लिए केश-रचना।", "Hair setting for a function.", 700, 404],
  ["hands-mani", "salon", "hands", "मैनीक्योर", "Manicure", "हस्त और नख।", "Hands and nails.", 450, 501],
  ["hands-pedi", "salon", "hands", "पेडीक्योर", "Pedicure", "पाद और नख।", "Feet and nails.", 550, 502],
  ["hands-combo", "salon", "hands", "मैनीक्योर और पेडीक्योर", "Manicure and pedicure", "हस्त तथा पाद, दोनों।", "Hands and feet together.", 900, 503],
  ["style-drape", "salon", "style", "साड़ी ड्रेपिंग", "Saree draping", "मेकअप के साथ या अलग।", "With the makeup, or on its own.", 500, 601],
  ["style-light", "salon", "style", "हल्का मेकअप", "Light makeup", "दैनिक समारोह के लिए।", "For a smaller gathering.", 1500, 602],
  ["style-party", "salon", "style", "पार्टी मेकअप", "Party makeup", "जन्मदिन या संध्या। विवाह-रूप अलग है।", "A birthday or an evening. Bridal looks are separate.", 2500, 603],
].map(([id, category, group_key, name_hi, name_en, note_hi, note_en, price_inr, sort_order]) => ({
  id, category, group_key, name_hi, name_en, note_hi, note_en, price_inr, sort_order, active: true,
}))

const GROUPS = {
  hi: { thread: "सूत्रण", wax: "वैक्स", skin: "त्वचा", hair: "केश", hands: "हस्त और पाद", style: "सज्जा" },
  en: { thread: "Threading", wax: "Waxing", skin: "Skin", hair: "Hair", hands: "Hands and feet", style: "Styling" },
}

const WHO = [
  { id: "self", hi: "स्वयं के लिए", en: "For myself" },
  { id: "bride", hi: "दुल्हन के लिए", en: "For the bride" },
  { id: "family", hi: "परिवार के लिए", en: "For the family" },
]

const COPY = {
  hi: {
    steps: ["रूप", "तिथि", "समय", "विवरण"],
    months: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"],
    weeks: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
    next: "अगला",
    send: "व्हाट्सऐप पर भेजें",
    pickLook: "एक रूप चुनें",
    pickDate: "एक तिथि चुनें",
    pickSlot: "एक समय चुनें",
    needName: "नाम लिखें",
    needPhone: "दस अंकों का मोबाइल नंबर लिखें",
    quote: "परामर्श पर",
    ask: "इस रूप का समय माँगें",
    bookFee: "यह सेवा बुक करें",
    taken: "भरा हुआ",
    lookTitle: "कौन सा रूप?",
    lookHint: "कार्ड चुनें। बाद में बदल भी सकते हैं।",
    dateTitle: "कौन सी तिथि उपयुक्त है?",
    dateHint: "आज से साठ दिन के भीतर। भरी हुई तिथि पर हर समय बंद दिखेगा।",
    slotTitle: "दिन का कौन सा भाग?",
    slotHint: "भरा हुआ समय बंद है। सटीक समय पुष्टि के बाद निश्चित होता है।",
    youTitle: "आपका विवरण",
    youHint: "अनुरोध स्टूडियो तक जाएगा। पुष्टि का उत्तर व्हाट्सऐप पर आएगा।",
    name: "नाम",
    phone: "मोबाइल नंबर",
    note: "अतिरिक्त बात (वैकल्पिक)",
    prevMonth: "पिछला महीना",
    nextMonth: "अगला महीना",
    slotTaken: "यह समय अभी भर गया। कोई और समय चुनें।",
    saveFailed: "अनुरोध सहेजा नहीं जा सका। व्हाट्सऐप फिर भी खुल रहा है।",
    full: "सभी समय भरे हैं",
  },
  en: {
    steps: ["Look", "Date", "Time", "Details"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    next: "Next",
    send: "Send on WhatsApp",
    pickLook: "Choose a look",
    pickDate: "Choose a date",
    pickSlot: "Choose a time",
    needName: "Add your name",
    needPhone: "Add a 10-digit mobile number",
    quote: "On consultation",
    ask: "Request this look",
    bookFee: "Book this service",
    taken: "Taken",
    lookTitle: "Which look?",
    lookHint: "Choose a card. You can change it later.",
    dateTitle: "Which date suits you?",
    dateHint: "Any day in the next sixty days. A full date shows every time as taken.",
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
    saveFailed: "The request could not be saved. WhatsApp is opening anyway.",
    full: "Every time is taken",
  },
}

const state = {
  category: "bridal",
  step: 0,
  service: null,
  date: null,
  slot: null,
  who: "self",
  name: "",
  phone: "",
  note: "",
  view: startOfMonth(new Date()),
  services: FALLBACK_SERVICES,
  slots: FALLBACK_SLOTS,
  occupied: new Set(),
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
function serviceById(id) {
  return state.services.find((item) => item.id === id)
}
function activeSlots() {
  return state.slots.filter((slot) => slot.active !== false).sort((a, b) => a.sort_order - b.sort_order)
}
function servicesIn(category) {
  return state.services
    .filter((item) => item.category === category && item.active !== false)
    .sort((a, b) => a.sort_order - b.sort_order)
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

function applyLang(next) {
  document.documentElement.lang = next
  const label = $("[data-lang-label]")
  if (label) label.textContent = next === "hi" ? "EN" : "HI"
  try { localStorage.setItem("tanishq-lang", next) } catch { /* ignore */ }
  renderCatalogue()
  renderWizard()
  paintPlaque(currentLook())
}

function chooseService(service) {
  state.category = service.category
  state.service = service.id
  state.step = 1
  const book = $(".book")
  if (book) book.classList.remove("is-done")
  const success = $("#success")
  if (success) success.hidden = true
  renderCatalogue()
  renderWizard()
  $("#book").scrollIntoView({ behavior: "smooth", block: "start" })
}

function renderCatalogue() {
  const bridal = $("#bridal-list")
  const salon = $("#salon-list")
  if (!bridal || !salon) return
  const copy = t()
  bridal.replaceChildren()
  servicesIn("bridal").forEach((service, index) => {
    const plate = document.createElement("article")
    plate.className = "plate" + (state.service === service.id ? " is-on" : "")
    const number = document.createElement("span")
    number.className = "plate-no"
    number.textContent = String(index + 1).padStart(2, "0")
    const copyBlock = document.createElement("div")
    const title = document.createElement("h3")
    title.textContent = field(service, "name")
    const note = document.createElement("p")
    note.textContent = field(service, "note")
    copyBlock.append(title, note)
    const end = document.createElement("div")
    end.className = "plate-end"
    const price = document.createElement("em")
    price.textContent = money(service.price_inr)
    const button = document.createElement("button")
    button.type = "button"
    button.className = "btn btn-gold btn-small"
    button.textContent = copy.ask
    button.addEventListener("click", () => chooseService(service))
    end.append(price, button)
    plate.append(number, copyBlock, end)
    bridal.append(plate)
  })

  salon.replaceChildren()
  const groups = []
  servicesIn("salon").forEach((service) => {
    if (!groups.includes(service.group_key)) groups.push(service.group_key)
  })
  groups.forEach((key) => {
    const group = document.createElement("section")
    group.className = "tariff-group"
    const heading = document.createElement("h3")
    heading.textContent = (GROUPS[lang()] && GROUPS[lang()][key]) || key
    group.append(heading)
    servicesIn("salon").filter((service) => service.group_key === key).forEach((service) => {
      const row = document.createElement("button")
      row.type = "button"
      row.className = "tariff-row" + (state.service === service.id ? " is-on" : "")
      const text = document.createElement("span")
      const name = document.createElement("strong")
      name.textContent = field(service, "name")
      const note = document.createElement("small")
      note.textContent = field(service, "note")
      text.append(name, note)
      const price = document.createElement("b")
      price.textContent = money(service.price_inr)
      row.append(text, price)
      row.addEventListener("click", () => chooseService(service))
      group.append(row)
    })
    salon.append(group)
  })

  const bridalTab = $("#mode-bridal")
  const salonTab = $("#mode-salon")
  if (bridalTab) bridalTab.classList.toggle("is-on", state.category === "bridal")
  if (salonTab) salonTab.classList.toggle("is-on", state.category === "salon")
  paintPhones()
}

function paintPhones() {
  const map = [
    ["#phone-main", state.settings.phone_main],
    ["#phone-booking", state.settings.phone_booking],
    ["#phone-extra", state.settings.phone_extra],
  ]
  map.forEach(([sel, digits]) => {
    const link = $(sel)
    if (!link || !digits) return
    const local = String(digits).replace(/\D/g, "").replace(/^91/, "")
    link.textContent = prettyPhone(local)
    link.href = `tel:+91${local}`
  })
}

function captureGuest() {
  const name = $("#guest-name")
  if (!name) return
  state.name = name.value
  state.phone = $("#guest-phone").value
  state.note = $("#guest-note").value
}

function renderWizard() {
  captureGuest()
  const wizard = $("#wizard")
  const rail = $("#rail")
  const book = $(".book")
  const next = $("#next-btn")
  const back = $("#back-btn")
  if (!wizard || !book || book.classList.contains("is-done")) return
  const copy = t()
  const L = lang()
  rail.replaceChildren()
  copy.steps.forEach((label, index) => {
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
  if (state.step === 0) panel.append(lookStep(copy))
  if (state.step === 1) panel.append(dateStep(copy))
  if (state.step === 2) panel.append(slotStep(copy))
  if (state.step === 3) panel.append(youStep(L, copy))
  wizard.append(panel)

  back.hidden = state.step === 0
  const hi = next.querySelector(".t-hi")
  const en = next.querySelector(".t-en")
  if (state.step === 3) {
    hi.textContent = COPY.hi.send
    en.textContent = COPY.en.send
  } else {
    hi.textContent = COPY.hi.next
    en.textContent = COPY.en.next
  }
  $("#form-error").textContent = ""
  renderCatalogue()
}

function lookStep(copy) {
  const wrap = document.createElement("div")
  const title = document.createElement("h3")
  title.textContent = copy.lookTitle
  const hint = document.createElement("p")
  hint.className = "hint"
  hint.textContent = copy.lookHint
  const picks = document.createElement("div")
  picks.className = "picks"
  servicesIn(state.category).forEach((service) => {
    const button = document.createElement("button")
    button.type = "button"
    button.className = "pick" + (state.service === service.id ? " is-on" : "")
    button.textContent = field(service, "name")
    button.addEventListener("click", () => {
      state.service = service.id
      renderWizard()
    })
    picks.append(button)
  })
  wrap.append(title, hint, picks)
  return wrap
}

function dateStep(copy) {
  const wrap = document.createElement("div")
  const title = document.createElement("h3")
  title.textContent = copy.dateTitle
  const hint = document.createElement("p")
  hint.className = "hint"
  hint.textContent = copy.dateHint
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
    if (!off && dayIsFull(date)) {
      button.classList.add("is-full")
      button.title = copy.full
    }
    button.addEventListener("click", () => {
      state.date = date
      if (state.slot && isTaken(date, state.slot)) state.slot = null
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

function youStep(L, copy) {
  const wrap = document.createElement("div")
  const title = document.createElement("h3")
  title.textContent = copy.youTitle
  const hint = document.createElement("p")
  hint.className = "hint"
  hint.textContent = copy.youHint
  const chosen = serviceById(state.service)
  if (chosen) {
    const chip = document.createElement("p")
    chip.className = "chip"
    const when = state.date
      ? new Intl.DateTimeFormat(L === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "long" }).format(state.date)
      : ""
    const slot = activeSlots().find((item) => item.id === state.slot)
    chip.textContent = [field(chosen, "name"), when, slot ? `${field(slot, "label")} ${slot.starts}–${slot.ends}` : "", money(chosen.price_inr)]
      .filter(Boolean)
      .join(" · ")
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
  if (state.step === 0 && !state.service) return copy.pickLook
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

function whatsAppUrl() {
  const service = serviceById(state.service)
  const slot = activeSlots().find((item) => item.id === state.slot)
  const who = WHO.find((item) => item.id === state.who)
  const name = $("#guest-name").value.trim()
  const phone = $("#guest-phone").value.replace(/\D/g, "")
  const note = $("#guest-note").value.trim()
  const date = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(state.date)
  const lines = lang() === "hi"
    ? [
      "नमस्ते।",
      "Tanishq Makeover, ओराई",
      "",
      "नियुक्ति का अनुरोध",
      `सेवा: ${service.name_hi}`,
      `तिथि: ${date}`,
      `समय: ${slot.label_hi} (${slot.starts}–${slot.ends})`,
      `किसके लिए: ${who.hi}`,
      `नाम: ${name}`,
      `मोबाइल: ${phone}`,
    ]
    : [
      "Hello,",
      "Tanishq Makeover, Orai",
      "",
      "Appointment request",
      `Service: ${service.name_en}`,
      `Date: ${date}`,
      `Time: ${slot.label_en} (${slot.starts}–${slot.ends})`,
      `For: ${who.en}`,
      `Name: ${name}`,
      `Mobile: ${phone}`,
    ]
  if (service.price_inr != null) lines.push(lang() === "hi" ? `निर्धारित शुल्क: ₹${service.price_inr}` : `Set fee: ₹${service.price_inr}`)
  if (note) lines.push(lang() === "hi" ? `टिप्पणी: ${note}` : `Note: ${note}`)
  lines.push("", lang() === "hi" ? "कृपया पुष्टि करें। समय पुष्टि के बाद ही निश्चित होगा।" : "Please confirm. The time is fixed only after your confirmation.")
  const number = String(state.settings.whatsapp || "917355718075").replace(/\D/g, "")
  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`
}

async function sendRequest() {
  const name = $("#guest-name").value.trim()
  const phone = $("#guest-phone").value.replace(/\D/g, "")
  const note = $("#guest-note").value.trim()
  let saved = true
  if (db) {
    const { error } = await db.rpc("request_appointment", {
      p_category: state.category,
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
  const url = whatsAppUrl()
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
  state.step = 0
  state.service = null
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
  const book = $(".book")
  if (book && !book.classList.contains("is-done") && (state.step === 1 || state.step === 2)) renderWizard()
}

async function loadStudio() {
  if (!db) return
  const [services, slots, settings] = await Promise.all([
    db.from("services").select("id,category,group_key,name_hi,name_en,note_hi,note_en,price_inr,sort_order,active").eq("active", true).order("sort_order"),
    db.from("time_slots").select("id,label_hi,label_en,starts,ends,sort_order,active").eq("active", true).order("sort_order"),
    db.from("studio_settings").select("whatsapp,phone_main,phone_booking,phone_extra,instagram").limit(1),
  ])
  if (services.data?.length) state.services = services.data
  if (slots.data?.length) state.slots = slots.data
  if (settings.data?.[0]) state.settings = { ...state.settings, ...settings.data[0] }
  renderCatalogue()
  renderWizard()
  refreshOccupied()
}

function currentLook() {
  return Number($("[data-showroom]")?.dataset.index || 0)
}

function paintPlaque(index) {
  const root = $("[data-showroom]")
  if (!root) return
  const looks = [...root.querySelectorAll("[data-look]")]
  const look = looks[index]
  if (!look) return
  const L = lang()
  const title = $("[data-plaque-title]")
  const note = $("[data-plaque-note]")
  const mark = $("[data-plaque-index]")
  if (title) title.textContent = look.dataset[L === "hi" ? "titleHi" : "titleEn"]
  if (note) note.textContent = look.dataset[L === "hi" ? "hi" : "en"]
  if (mark) mark.textContent = String(index + 1).padStart(2, "0")
  root.dataset.index = String(index)
  root.querySelectorAll("[data-chapter]").forEach((button, buttonIndex) => {
    button.classList.toggle("is-on", buttonIndex === index)
  })
}

function mountShowroom() {
  const root = $("[data-showroom]")
  if (!root) return
  const canvas = root.querySelector("canvas")
  const ctx = canvas.getContext("2d", { alpha: true })
  const looks = [...root.querySelectorAll("[data-look]")]
  const reflects = [...root.querySelectorAll("[data-reflect]")]
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const motes = Array.from({ length: 42 }, () => ({
    a: Math.random() * Math.PI * 2,
    r: 0.08 + Math.random() * 0.5,
    s: 0.25 + Math.random() * 0.9,
    o: 0.2 + Math.random() * 0.7,
    w: 0.6 + Math.random() * 1.8,
  }))
  let progress = 0
  let pointer = 0.5
  let running = false
  let lastIndex = -1

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.6)
    const width = canvas.clientWidth || 1
    const height = canvas.clientHeight || 1
    canvas.width = Math.round(width * dpr)
    canvas.height = Math.round(height * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  function draw(now) {
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    ctx.clearRect(0, 0, width, height)
    const spotX = width * (0.22 + progress * 0.56 + (pointer - 0.5) * 0.08)
    const floor = ctx.createLinearGradient(0, height * 0.62, 0, height)
    floor.addColorStop(0, "rgba(231,201,138,0)")
    floor.addColorStop(1, "rgba(231,201,138,0.08)")
    ctx.fillStyle = floor
    ctx.fillRect(0, height * 0.62, width, height * 0.38)

    const vanishX = width * (0.5 + (pointer - 0.5) * 0.12)
    const vanishY = height * 0.58
    ctx.beginPath()
    for (let i = 0; i <= 12; i += 1) {
      ctx.moveTo(vanishX, vanishY)
      ctx.lineTo((width / 12) * i, height)
    }
    for (let i = 1; i <= 7; i += 1) {
      const y = vanishY + (height - vanishY) * (i / 7) ** 1.35
      const spread = ((y - vanishY) / (height - vanishY)) * width * 0.72
      ctx.moveTo(vanishX - spread, y)
      ctx.lineTo(vanishX + spread, y)
    }
    ctx.strokeStyle = "rgba(231,201,138,0.22)"
    ctx.lineWidth = 1
    ctx.stroke()

    const glow = ctx.createRadialGradient(spotX, height * 0.34, 10, spotX, height * 0.4, width * 0.42)
    glow.addColorStop(0, "rgba(255, 244, 224, 0.34)")
    glow.addColorStop(0.35, "rgba(231, 183, 170, 0.1)")
    glow.addColorStop(1, "rgba(0,0,0,0)")
    ctx.fillStyle = glow
    ctx.fillRect(0, 0, width, height)

    const time = now / 1000
    motes.forEach((mote) => {
      const angle = mote.a + time * 0.18 * mote.s
      const x = spotX + Math.cos(angle) * mote.r * width * 0.2
      const y = height * 0.38 + Math.sin(angle * 1.4 + mote.w) * mote.r * height * 0.16
      ctx.beginPath()
      ctx.fillStyle = `rgba(246,228,194,${0.12 + mote.o * 0.5})`
      ctx.arc(x, y, mote.w, 0, Math.PI * 2)
      ctx.fill()
    })
  }

  function apply(indexFloat) {
    const index = Math.max(0, Math.min(looks.length - 1, Math.round(indexFloat)))
    looks.forEach((look, lookIndex) => {
      const distance = Math.abs(indexFloat - lookIndex)
      look.style.opacity = String(Math.max(0, 1 - distance * 1.25))
      look.style.transform = `translate3d(${(lookIndex - indexFloat) * 10}%, 0, 0) scale(${1 - Math.min(distance, 1) * 0.05})`
      look.classList.toggle("is-on", lookIndex === index)
    })
    reflects.forEach((image, imageIndex) => {
      const distance = Math.abs(indexFloat - imageIndex)
      image.style.opacity = String(Math.max(0, 0.85 - distance * 1.2))
    })
    if (index !== lastIndex) {
      lastIndex = index
      paintPlaque(index)
    }
  }

  function frame(now) {
    if (!running) return
    const rect = root.getBoundingClientRect()
    const scrollable = Math.max(1, root.offsetHeight - window.innerHeight)
    const target = Math.min(1, Math.max(0, -rect.top / scrollable))
    progress += (target - progress) * 0.14
    draw(now)
    apply(progress * (looks.length - 1))
    requestAnimationFrame(frame)
  }

  function goTo(index) {
    const sticky = root.querySelector(".showroom-sticky")
    const top = root.offsetTop + (index / Math.max(1, looks.length - 1)) * (root.offsetHeight - window.innerHeight)
    window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" })
  }

  resize()
  window.addEventListener("resize", resize)
  root.querySelectorAll("[data-chapter]").forEach((button) => {
    button.addEventListener("click", () => goTo(Number(button.dataset.chapter)))
  })
  root.addEventListener("pointermove", (event) => {
    const rect = root.getBoundingClientRect()
    pointer = (event.clientX - rect.left) / rect.width
  })

  if (reduce) {
    apply(0)
    paintPlaque(0)
    return
  }
  const observer = new IntersectionObserver((entries) => {
    running = entries.some((entry) => entry.isIntersecting)
    if (running) requestAnimationFrame(frame)
  }, { rootMargin: "200px" })
  observer.observe(root)
  apply(0)
}

function mountDust() {
  const canvas = $(".dust")
  if (!canvas) return
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (reduce) return
  const ctx = canvas.getContext("2d", { alpha: true })
  const specks = Array.from({ length: 56 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: 0.4 + Math.random() * 1.6,
    v: 0.015 + Math.random() * 0.04,
    o: 0.15 + Math.random() * 0.45,
    drift: Math.random() * Math.PI * 2,
  }))
  let pointerX = 0.5
  let pointerY = 0.4
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
      const x = speck.x * width + Math.sin(now / 900 + speck.drift) * 10 + (pointerX - 0.5) * 16
      const y = speck.y * height + (pointerY - 0.5) * 10
      ctx.beginPath()
      ctx.fillStyle = `rgba(231,201,138,${speck.o})`
      ctx.arc(x, y, speck.r, 0, Math.PI * 2)
      ctx.fill()
    })
    requestAnimationFrame(frame)
  }
  resize()
  window.addEventListener("resize", resize)
  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX / window.innerWidth
    pointerY = event.clientY / window.innerHeight
  })
  document.addEventListener("visibilitychange", () => {
    const was = running
    running = document.visibilityState === "visible"
    if (running && !was) requestAnimationFrame(frame)
  })
  requestAnimationFrame(frame)
}

function bindChrome() {
  const saved = (() => {
    try { return localStorage.getItem("tanishq-lang") } catch { return null }
  })()
  applyLang(saved === "en" ? "en" : "hi")

  $("[data-lang-toggle]").addEventListener("click", () => {
    applyLang(lang() === "hi" ? "en" : "hi")
  })
  $("#mode-bridal").addEventListener("click", () => {
    state.category = "bridal"
    if (serviceById(state.service)?.category !== "bridal") {
      state.service = null
      state.step = 0
    }
    renderWizard()
  })
  $("#mode-salon").addEventListener("click", () => {
    state.category = "salon"
    if (serviceById(state.service)?.category !== "salon") {
      state.service = null
      state.step = 0
    }
    renderWizard()
  })

  const sheet = $("#sheet")
  const menu = $("[data-menu-btn]")
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

  const nav = $("[data-nav]")
  const line = $(".scroll-line")
  const onScroll = () => {
    nav.classList.toggle("is-stuck", window.scrollY > 8)
    const height = document.documentElement.scrollHeight - window.innerHeight
    if (line && height > 0) line.style.transform = `scaleX(${window.scrollY / height})`
  }
  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })

  const glow = $(".cursor-glow")
  const fine = window.matchMedia("(pointer: fine)").matches
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  if (fine && !reduce) {
    document.body.classList.add("has-pointer")
    window.addEventListener("pointermove", (event) => {
      glow.style.left = `${event.clientX}px`
      glow.style.top = `${event.clientY}px`
    })
    const stage = $("[data-slab]")
    stage.addEventListener("pointermove", (event) => {
      const rect = stage.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      stage.style.setProperty("--ry", `${x * -18}deg`)
      stage.style.setProperty("--rx", `${8 + y * -12}deg`)
    })
    stage.addEventListener("pointerleave", () => {
      stage.style.removeProperty("--ry")
      stage.style.removeProperty("--rx")
    })
    document.querySelectorAll(".btn-gold").forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const rect = button.getBoundingClientRect()
        const x = event.clientX - (rect.left + rect.width / 2)
        const y = event.clientY - (rect.top + rect.height / 2)
        button.style.transform = `translate(${x * 0.12}px, ${y * 0.18}px)`
      })
      button.addEventListener("pointerleave", () => {
        button.style.transform = ""
      })
    })
  }

  $("#back-btn").addEventListener("click", () => {
    state.step = Math.max(0, state.step - 1)
    renderWizard()
  })
  $("#next-btn").addEventListener("click", () => {
    const error = validate()
    if (error) {
      showError(error)
      return
    }
    if (state.step < 3) {
      state.step += 1
      renderWizard()
      return
    }
    sendRequest()
  })
  $("#reset-btn").addEventListener("click", resetBooking)

  mountShowroom()
  mountDust()
  loadStudio()
  setInterval(refreshOccupied, 20000)
}

bindChrome()
