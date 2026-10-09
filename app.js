const FALLBACK_SETTINGS = {
  whatsapp: "918081817807",
  phone_main: "8081817807",
  phone_booking: "8081817807",
  phone_extra: "8081817807",
  email: "sparklemakeover21@gmail.com",
  facebook: "https://facebook.com/101835146093091",
  instagram: "https://facebook.com/101835146093091",
  hours_hi: "सुबह 11 – रात 8 · सभी दिन",
  hours_en: "11 AM – 8 PM · All days",
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
  id, category: "bridal", group_key: "bridal", name_hi, name_en, note_hi, note_en, price_inr, sort_order, active: true,
}))

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
    taken: "भरी",
    free: "खाली",
    packageTitle: "कौन सा पैकेज?",
    packageHint: "कार्ड चुनें। बाद में बदल भी सकते हैं।",
    lehengaTitle: "कौन सा लहंगा?",
    lehengaHint: "टैग नंबर के साथ चुनें। तिथि अगले कदम पर।",
    dateTitle: "कौन सी तिथि उपयुक्त है?",
    dateHintBridal: "आज से साठ दिन के भीतर। भरी हुई तिथि पर हर समय बंद दिखेगा।",
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
    taken: "Taken",
    free: "Free",
    packageTitle: "Which package?",
    packageHint: "Choose a card. You can change it later.",
    lehengaTitle: "Which lehenga?",
    lehengaHint: "Choose with the tag number. The date comes next.",
    dateTitle: "Which date suits you?",
    dateHintBridal: "Any day in the next sixty days. A full date shows every time as taken.",
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
  try { localStorage.setItem("tanishq-lang", next) } catch { /* ignore */ }
  renderAll()
}

function goBook() {
  const book = $(".book")
  if (book) book.classList.remove("is-done")
  const success = $("#success")
  if (success) success.hidden = true
  renderAll()
  $("#book").scrollIntoView({ behavior: "smooth", block: "start" })
}

function choosePackage(item) {
  state.btype = "bridal"
  state.service = item.id
  state.step = 1
  goBook()
}

function chooseLehenga(id) {
  state.btype = "lehenga"
  state.lehenga = id
  state.step = 1
  goBook()
}

function renderAll() {
  renderPackages()
  renderLehenga()
  renderWizard()
  paintContact()
}

function renderPackages() {
  const list = $("#package-list")
  if (!list) return
  const copy = t()
  list.replaceChildren()
  state.packages
    .filter((item) => item.active !== false)
    .sort((a, b) => a.sort_order - b.sort_order)
    .forEach((item, index) => {
      const plate = document.createElement("article")
      plate.className = "plate reveal" + (state.btype === "bridal" && state.service === item.id ? " is-on" : "")
      plate.style.animationDelay = `${Math.min(index, 8) * 60}ms`
      const number = document.createElement("span")
      number.className = "plate-no"
      number.textContent = String(index + 1).padStart(2, "0")
      const copyBlock = document.createElement("div")
      const title = document.createElement("h3")
      title.textContent = field(item, "name")
      const note = document.createElement("p")
      note.textContent = field(item, "note")
      copyBlock.append(title, note)
      const end = document.createElement("div")
      end.className = "plate-end"
      const price = document.createElement("em")
      price.textContent = money(item.price_inr)
      const button = document.createElement("button")
      button.type = "button"
      button.className = "btn btn-gold btn-small"
      button.textContent = copy.askPackage
      button.addEventListener("click", () => choosePackage(item))
      end.append(price, button)
      plate.append(number, copyBlock, end)
      list.append(plate)
    })
  const bridalTab = $("#mode-bridal")
  const lehengaTab = $("#mode-lehenga")
  if (bridalTab) bridalTab.classList.toggle("is-on", state.btype === "bridal")
  if (lehengaTab) lehengaTab.classList.toggle("is-on", state.btype === "lehenga")
}

function lehMedia(item) {
  if (item.video_url) return { kind: "video", src: item.video_url }
  if (item.photo) return { kind: "image", src: item.photo }
  return null
}

function renderLehenga() {
  const grid = $("#lehenga-grid")
  if (!grid) return
  const copy = t()
  grid.replaceChildren()
  if (!state.lehengas.length) {
    const empty = document.createElement("p")
    empty.className = "muted"
    empty.textContent = copy.noLehenga
    grid.append(empty)
  }
  state.lehengas.forEach((item, index) => {
    const card = document.createElement("article")
    card.className = "plate leh-card reveal" + (state.btype === "lehenga" && state.lehenga === item.id ? " is-on" : "")
    card.style.animationDelay = `${Math.min(index, 8) * 60}ms`
    const media = lehMedia(item)
    const frame = document.createElement("div")
    frame.className = "leh-frame"
    if (media && media.kind === "video") {
      const video = document.createElement("video")
      video.src = media.src
      video.controls = true
      video.preload = "metadata"
      video.playsInline = true
      frame.append(video)
    } else if (media) {
      const img = document.createElement("img")
      img.src = media.src
      img.alt = item.title || item.tag_no
      img.loading = "lazy"
      frame.append(img)
    } else {
      frame.className += " leh-empty"
      frame.textContent = `#${item.tag_no}`
    }
    const body = document.createElement("div")
    const tag = document.createElement("span")
    tag.className = "plate-no"
    tag.textContent = `#${item.tag_no}`
    const title = document.createElement("h3")
    title.textContent = item.title || (lang() === "hi" ? "लहंगा" : "Lehenga")
    const badge = document.createElement("p")
    badge.className = "chip"
    const bookedHere = state.date && isLehTaken(item.id, state.date)
    badge.textContent = bookedHere
      ? `${copy.booked}`
      : (item.status === "available" ? copy.available : copy.taken)
    const button = document.createElement("button")
    button.type = "button"
    button.className = "btn btn-gold btn-small"
    button.textContent = copy.askLehenga
    button.addEventListener("click", () => chooseLehenga(item.id))
    body.append(tag, title, badge, button)
    card.append(frame, body)
    grid.append(card)
  })
  renderLehCalendar()
}

function renderLehCalendar() {
  const days = $("#leh-days")
  const week = $("#leh-week")
  const label = $("#leh-label")
  const hint = $("#leh-hint")
  if (!days || !week || !label) return
  const copy = t()
  label.textContent = `${copy.months[state.lehView.getMonth()]} ${state.lehView.getFullYear()}`
  week.replaceChildren()
  copy.weeks.forEach((day) => {
    const span = document.createElement("span")
    span.textContent = day
    week.append(span)
  })
  const current = lehengaById(state.lehenga) || state.lehengas[0]
  if (hint) hint.textContent = current ? copy.lehHintFor.replace("{tag}", current.tag_no) : copy.lehHintPick
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
    const button = document.createElement("button")
    button.type = "button"
    button.className = "day"
    button.textContent = String(day)
    const off = startOfDay(date) < today || startOfDay(date) > max
    button.disabled = off
    if (sameDay(date, today)) button.classList.add("is-today")
    if (sameDay(date, state.date) && state.btype === "lehenga") button.classList.add("is-on")
    const busy = current && !off && isLehTaken(current.id, date)
    if (busy) {
      button.classList.add("is-busy")
      button.title = copy.taken
    } else if (!off) {
      button.classList.add("is-free")
    }
    button.addEventListener("click", () => {
      state.btype = "lehenga"
      if (current) state.lehenga = current.id
      state.date = date
      state.step = 2
      goBook()
    })
    days.append(button)
  }
}

function paintContact() {
  const main = $("#phone-main")
  const digits = String(state.settings.phone_main || "").replace(/\D/g, "").replace(/^91/, "")
  if (main && digits.length === 10) {
    main.textContent = prettyPhone(digits)
    main.href = `tel:+91${digits}`
  }
  const mail = $("#mail-link")
  if (mail && state.settings.email) {
    mail.textContent = state.settings.email
    mail.href = `mailto:${state.settings.email}`
  }
  const hours = $("#hours-block")
  if (hours && state.settings.hours_hi) {
    hours.querySelector(".t-hi").textContent = state.settings.hours_hi
    hours.querySelector(".t-en").textContent = state.settings.hours_en || state.settings.hours_hi
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
  renderPackages()
  renderLehenga()
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
      renderLehenga()
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
  if (book && !book.classList.contains("is-done") && state.btype === "bridal" && (state.step === 1 || state.step === 2)) renderWizard()
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
  const book = $(".book")
  if (book && !book.classList.contains("is-done") && state.btype === "lehenga" && state.step === 1) renderWizard()
}

async function loadStudio() {
  if (!db) {
    renderAll()
    return
  }
  const [services, slots, settings] = await Promise.all([
    db.from("services").select("id,category,group_key,name_hi,name_en,note_hi,note_en,price_inr,sort_order,active").eq("category", "bridal").eq("active", true).order("sort_order"),
    db.from("time_slots").select("id,label_hi,label_en,starts,ends,sort_order,active").eq("active", true).order("sort_order"),
    db.from("studio_settings").select("whatsapp,phone_main,email,facebook,instagram,hours_hi,hours_en").limit(1),
  ])
  if (services.data?.length) state.packages = services.data
  if (slots.data?.length) state.slots = slots.data
  if (settings.data?.[0]) state.settings = { ...state.settings, ...settings.data[0] }
  renderAll()
  refreshOccupied()
  refreshLehenga()
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
    state.btype = "bridal"
    if (!packageById(state.service)) state.service = null
    state.step = 0
    renderWizard()
  })
  $("#mode-lehenga").addEventListener("click", () => {
    state.btype = "lehenga"
    if (!lehengaById(state.lehenga)) state.lehenga = state.lehengas[0]?.id || null
    state.step = 0
    renderWizard()
  })
  $("#leh-prev").addEventListener("click", () => {
    state.lehView = new Date(state.lehView.getFullYear(), state.lehView.getMonth() - 1, 1)
    renderLehCalendar()
  })
  $("#leh-next").addEventListener("click", () => {
    state.lehView = new Date(state.lehView.getFullYear(), state.lehView.getMonth() + 1, 1)
    renderLehCalendar()
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
    if (stage) {
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
    }
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
    if (state.step < lastStep()) {
      state.step += 1
      renderWizard()
      return
    }
    sendRequest()
  })
  $("#reset-btn").addEventListener("click", resetBooking)

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
  const specks = Array.from({ length: 64 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: 0.4 + Math.random() * 1.8,
    v: 0.015 + Math.random() * 0.04,
    o: 0.15 + Math.random() * 0.5,
    drift: Math.random() * Math.PI * 2,
    tw: 0.4 + Math.random() * 1.2,
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
      const sparkle = 0.55 + 0.45 * Math.sin(now / 700 * speck.tw + speck.drift)
      const x = speck.x * width + Math.sin(now / 900 + speck.drift) * 10 + (pointerX - 0.5) * 16
      const y = speck.y * height + (pointerY - 0.5) * 10
      ctx.beginPath()
      ctx.fillStyle = `rgba(246,228,194,${speck.o * sparkle})`
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

bindChrome()
