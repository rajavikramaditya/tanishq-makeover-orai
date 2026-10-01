const PHONE = "917355718075"
const SERVICES = [
  { id: "bridal", group: "Look", hi: "Dulhan makeup", en: "Bridal makeup", hiNote: "Shaadi ka poora look — base se set tak.", enNote: "The full wedding look, from base to the last pin." },
  { id: "engagement", group: "Look", hi: "Engagement", en: "Engagement", hiNote: "Ring ceremony ke liye soft, camera-ready glam.", enNote: "Soft glam that reads clearly in photos." },
  { id: "party", group: "Look", hi: "Party makeup", en: "Party makeup", hiNote: "Reception, birthday, ya koi bhi shaam.", enNote: "Reception, a birthday, or any evening." },
  { id: "haldi", group: "Look", hi: "Haldi look", en: "Haldi look", hiNote: "Halki, fresh, haldi ke rang ke saath.", enNote: "Light and fresh, made for yellow and flowers." },
  { id: "mehndi", group: "Look", hi: "Mehndi look", en: "Mehndi look", hiNote: "Mehndi aur ghar ke function ke liye.", enNote: "A softer glam for mehndi and family functions." },
  { id: "shoot", group: "Look", hi: "Photoshoot", en: "Photoshoot", hiNote: "Camera ke liye. Photographer alag se book hota hai.", enNote: "Built for the camera. Photography is booked separately." },
  { id: "family", group: "Look", hi: "Parivar glam", en: "Family glam", hiNote: "Maa, behen, ya guests ek saath.", enNote: "Mothers, sisters, and guests, ready together." },
  { id: "trial", group: "Look", hi: "Makeup trial", en: "Makeup trial", hiNote: "Shaadi se pehle look try karna ho to.", enNote: "Try the look before the wedding day." },
  { id: "glow", group: "Care", hi: "Pre-bridal glow", en: "Pre-bridal glow", hiNote: "Shaadi se pehle skin ki taiyari.", enNote: "Skin prep in the days before the wedding." },
  { id: "hair", group: "Care", hi: "Hair styling", en: "Hair styling", hiNote: "Bun, blowdry, ya open hair.", enNote: "A bun, a blowdry, or open hair." },
  { id: "facial", group: "Care", hi: "Facial aur cleanup", en: "Facial and cleanup", hiNote: "Kaunsa facial chal raha hai, studio batayegi.", enNote: "Ask which facial the studio is running." },
  { id: "thread", group: "Care", hi: "Threading", en: "Threading", hiNote: "Eyebrow aur face threading.", enNote: "Brows and face threading." },
  { id: "wax", group: "Care", hi: "Waxing", en: "Waxing", hiNote: "Studio se confirm karke book karein.", enNote: "Confirm with the studio before you come." },
  { id: "nails", group: "Care", hi: "Haath aur nails", en: "Hands and nails", hiNote: "Manicure, pedicure, ya simple nail care.", enNote: "Manicure, pedicure, or simple nail care." },
  { id: "spa", group: "Care", hi: "Hair spa", en: "Hair spa", hiNote: "Dry hair ke liye. Pehle poochh lein.", enNote: "For dry hair. Ask first." },
  { id: "drape", group: "Care", hi: "Draping", en: "Draping", hiNote: "Saree ya dupatta, makeup ke saath.", enNote: "Saree or dupatta, with the makeup." },
]

const SLOTS = [
  { id: "morning", hi: "Subah", en: "Morning", time: "9–12" },
  { id: "noon", hi: "Dopahar", en: "Afternoon", time: "12–4" },
  { id: "evening", hi: "Shaam", en: "Evening", time: "4–7" },
  { id: "late", hi: "Raat se pehle", en: "Early night", time: "7–8" },
]

const WHO = [
  { id: "self", hi: "Khud ke liye", en: "For myself" },
  { id: "bride", hi: "Dulhan ke liye", en: "For the bride" },
  { id: "family", hi: "Parivar ke liye", en: "For the family" },
]

const COPY = {
  hi: {
    steps: ["Look", "Din", "Samay", "Aap"],
    months: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"],
    weeks: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
    next: "Aage",
    send: "WhatsApp par bhejein",
    pickLook: "Ek look chuniye",
    pickDate: "Ek din chuniye",
    pickSlot: "Ek samay chuniye",
    needName: "Naam likhiye",
    needPhone: "10 ank ka mobile number likhiye",
    rate: "Rate WhatsApp par",
    lookTitle: "Kaunsa look?",
    lookHint: "Card dabayein. Aap baad mein badal bhi sakte hain.",
    dateTitle: "Kaunsa din theek rahega?",
    dateHint: "Aaj se 45 din ke andar. Yeh pasand hai, pakka slot nahi.",
    slotTitle: "Din ka kaunsa hissa?",
    slotHint: "Studio reply karke exact time lock karti hai.",
    youTitle: "Aap kaun hain?",
    youHint: "Yeh message studio ke WhatsApp par jaayega. Website isse save nahi karti.",
    name: "Naam",
    phone: "Mobile number",
    note: "Kuch aur batana ho (optional)",
    prevMonth: "Pichhla mahina",
    nextMonth: "Agla mahina",
  },
  en: {
    steps: ["Look", "Day", "Time", "You"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    next: "Next",
    send: "Send on WhatsApp",
    pickLook: "Choose a look",
    pickDate: "Choose a day",
    pickSlot: "Choose a time of day",
    needName: "Add your name",
    needPhone: "Add a 10-digit mobile number",
    rate: "Price on WhatsApp",
    lookTitle: "Which look?",
    lookHint: "Tap a card. You can change it later.",
    dateTitle: "Which day suits you?",
    dateHint: "Any day in the next 45 days. This is a preference, not a locked slot.",
    slotTitle: "Which part of the day?",
    slotHint: "The studio replies with the exact time.",
    youTitle: "Who is this for?",
    youHint: "This message goes to the studio on WhatsApp. The website does not save it.",
    name: "Name",
    phone: "Mobile number",
    note: "Anything else (optional)",
    prevMonth: "Previous month",
    nextMonth: "Next month",
  },
}

const state = {
  step: 0,
  service: null,
  date: null,
  slot: null,
  who: "self",
  name: "",
  phone: "",
  note: "",
  view: startOfMonth(new Date()),
}

const $ = (sel) => document.querySelector(sel)
const lang = () => (document.documentElement.lang === "en" ? "en" : "hi")
const t = () => COPY[lang()]

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
function serviceById(id) {
  return SERVICES.find((item) => item.id === id)
}

function applyLang(next) {
  document.documentElement.lang = next
  const label = $("[data-lang-label]")
  if (label) label.textContent = next === "hi" ? "EN" : "HI"
  try { localStorage.setItem("tanishq-lang", next) } catch { /* ignore */ }
  renderServices()
  renderWizard()
}

function renderServices() {
  const root = $("#service-grid")
  if (!root) return
  const L = lang()
  root.replaceChildren()
  SERVICES.forEach((service, index) => {
    const button = document.createElement("button")
    button.type = "button"
    button.className = "service-card" + (index === 0 ? " service-card--feature" : "")
    button.innerHTML = `<small>${service.group}</small><div><h3>${service[L]}</h3><p>${service[L + "Note"]}</p></div><em>${t().rate}</em>`
    button.addEventListener("click", () => {
      state.service = service.id
      state.step = 1
      renderWizard()
      $("#book").scrollIntoView({ behavior: "smooth", block: "start" })
    })
    root.append(button)
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
  if (!wizard || book.classList.contains("is-done")) return
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
  if (state.step === 0) panel.append(lookStep(L, copy))
  if (state.step === 1) panel.append(dateStep(copy))
  if (state.step === 2) panel.append(slotStep(L, copy))
  if (state.step === 3) panel.append(youStep(L, copy))
  wizard.append(panel)

  back.hidden = state.step === 0
  const nextLabel = state.step === 3 ? copy.send : copy.next
  next.querySelector(".t-hi").textContent = nextLabel
  next.querySelector(".t-en").textContent = nextLabel
  $("#form-error").textContent = ""
}

function lookStep(L, copy) {
  const wrap = document.createElement("div")
  wrap.innerHTML = `<h3>${copy.lookTitle}</h3><p class="hint">${copy.lookHint}</p>`
  const picks = document.createElement("div")
  picks.className = "picks"
  SERVICES.forEach((service) => {
    const button = document.createElement("button")
    button.type = "button"
    button.className = "pick" + (state.service === service.id ? " is-on" : "")
    button.textContent = service[L]
    button.addEventListener("click", () => {
      state.service = service.id
      renderWizard()
    })
    picks.append(button)
  })
  wrap.append(picks)
  return wrap
}

function dateStep(copy) {
  const wrap = document.createElement("div")
  wrap.innerHTML = `<h3>${copy.dateTitle}</h3><p class="hint">${copy.dateHint}</p>`
  const head = document.createElement("div")
  head.className = "cal-head"
  const prev = document.createElement("button")
  prev.type = "button"
  prev.className = "btn btn-glass btn-small"
  prev.textContent = "‹"
  prev.setAttribute("aria-label", copy.prevMonth)
  const title = document.createElement("strong")
  title.textContent = `${copy.months[state.view.getMonth()]} ${state.view.getFullYear()}`
  const next = document.createElement("button")
  next.type = "button"
  next.className = "btn btn-glass btn-small"
  next.textContent = "›"
  next.setAttribute("aria-label", copy.nextMonth)
  const today = startOfDay(new Date())
  const max = addDays(today, 45)
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
  head.append(prev, title, next)

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
    button.addEventListener("click", () => {
      state.date = date
      renderWizard()
    })
    days.append(button)
  }
  wrap.append(head, week, days)
  return wrap
}

function slotStep(L, copy) {
  const wrap = document.createElement("div")
  wrap.innerHTML = `<h3>${copy.slotTitle}</h3><p class="hint">${copy.slotHint}</p>`
  const row = document.createElement("div")
  row.className = "slots"
  SLOTS.forEach((slot) => {
    const button = document.createElement("button")
    button.type = "button"
    button.className = "pick" + (state.slot === slot.id ? " is-on" : "")
    button.innerHTML = `${slot[L]}<small>${slot.time}</small>`
    button.addEventListener("click", () => {
      state.slot = slot.id
      renderWizard()
    })
    row.append(button)
  })
  wrap.append(row)
  return wrap
}

function youStep(L, copy) {
  const wrap = document.createElement("div")
  wrap.innerHTML = `<h3>${copy.youTitle}</h3><p class="hint">${copy.youHint}</p>`
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
  if (state.step === 3) {
    const name = $("#guest-name").value.trim()
    const phone = $("#guest-phone").value.replace(/\D/g, "")
    if (name.length < 2) return copy.needName
    if (!/^[6-9]\d{9}$/.test(phone)) return copy.needPhone
  }
  return ""
}

function sendWhatsApp() {
  const service = serviceById(state.service)
  const slot = SLOTS.find((item) => item.id === state.slot)
  const who = WHO.find((item) => item.id === state.who)
  const name = $("#guest-name").value.trim()
  const phone = $("#guest-phone").value.replace(/\D/g, "")
  const note = $("#guest-note").value.trim()
  const date = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(state.date)
  const lines = [
    "Namaste Tanishq Makeover Orai,",
    "",
    "Appointment request — abhi confirm nahi hai.",
    `Look: ${service.en}`,
    `Din: ${date}`,
    `Samay: ${slot.en} (${slot.time})`,
    `Kis ke liye: ${who.en}`,
    `Naam: ${name}`,
    `Phone: ${phone}`,
  ]
  if (note) lines.push(`Note: ${note}`)
  lines.push("", "Kripya WhatsApp par haan likh kar slot confirm kar den.")
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(lines.join("\n"))}`
  $("#wa-fallback").href = url
  window.open(url, "_blank", "noopener,noreferrer")
  $(".book").classList.add("is-done")
  const success = $("#success")
  success.hidden = false
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
  $("#success").hidden = true
  renderWizard()
}

function bindChrome() {
  const saved = (() => {
    try { return localStorage.getItem("tanishq-lang") } catch { return null }
  })()
  applyLang(saved === "en" ? "en" : "hi")

  $("[data-lang-toggle]").addEventListener("click", () => {
    applyLang(lang() === "hi" ? "en" : "hi")
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
  const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 8)
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
    sendWhatsApp()
  })
  $("#reset-btn").addEventListener("click", resetBooking)
}

bindChrome()
