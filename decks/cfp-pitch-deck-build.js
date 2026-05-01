// RetireMore CFP Pitch Deck
// 15 slides, 16:9 widescreen
// Built with pptxgenjs

const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333" x 7.5"
pres.author = "Eddie Appell, RetireMore";
pres.title = "RetireMore — The Retirement Platform Your Clients Are Missing";
pres.subject = "CFP Partnership Pitch";

// ============================================================
// BRAND PALETTE
// ============================================================
const C = {
  // Primary darks
  navyDeep: "1F2A45",      // dark card / premium dark
  navy: "293757",          // dark mode background
  navyHeading: "2A354A",

  // Brand blue
  blue: "0B5394",
  blueHover: "094170",
  blueLight: "2D7DD2",

  // Gold
  gold: "C8973A",
  goldLight: "E6B55A",
  goldPale: "F4E4BC",

  // Light / cream
  cream: "F9F8F6",
  white: "FFFFFF",
  offWhite: "FEFCFD",

  // Text
  textWarm: "6B5E62",
  textDarkOnLight: "2A354A",
  textOnDark: "FEFCFD",
  textMutedOnDark: "9CA8C2",

  // Section pastels (matching dashboard)
  finBg: "DBEAFE",
  finAccent: "0B5394",
  lifeBg: "FED7AA",
  lifeAccent: "EA580C",
  legacyBg: "D1FAE5",
  legacyAccent: "059669",

  // Utility
  green: "10B981",
  red: "DC2626",
  borderLight: "E5E7EB",
  borderDark: "334155",
};

const FONT_HEAD = "Georgia";
const FONT_BODY = "Calibri";

const LOGO_WHITE = "/Users/eddie/Projects/RetireWise/Retire-Portal/apps/portal/public/images/RetireMore-Logo-White-tag.png";
const LOGO_BLACK = "/Users/eddie/Projects/RetireWise/Retire-Portal/apps/portal/public/images/RetireMore-Logo-Black-tag.png";
const LOGO_ICON = "/Users/eddie/Projects/RetireWise/Retire-Portal/apps/portal/public/images/RetireMore-Icon-HiRes.png";

// Slide dims
const SW = 13.333;
const SH = 7.5;

// ============================================================
// HELPERS
// ============================================================

// Page footer for content slides (light)
function addFooterLight(slide, pageNum) {
  slide.addShape(pres.shapes.LINE, {
    x: 0.6, y: 7.05, w: 12.13, h: 0,
    line: { color: C.borderLight, width: 0.75 }
  });
  slide.addText("RetireMore  /  Confidential — For CFP Partner Review", {
    x: 0.6, y: 7.12, w: 8, h: 0.3,
    fontSize: 9, fontFace: FONT_BODY, color: C.textWarm, margin: 0
  });
  slide.addText(String(pageNum), {
    x: 12.43, y: 7.12, w: 0.3, h: 0.3,
    fontSize: 9, fontFace: FONT_BODY, color: C.textWarm, align: "right", margin: 0
  });
}

// Page footer for dark slides
function addFooterDark(slide, pageNum) {
  slide.addShape(pres.shapes.LINE, {
    x: 0.6, y: 7.05, w: 12.13, h: 0,
    line: { color: C.borderDark, width: 0.75 }
  });
  slide.addText("RetireMore  /  Confidential — For CFP Partner Review", {
    x: 0.6, y: 7.12, w: 8, h: 0.3,
    fontSize: 9, fontFace: FONT_BODY, color: C.textMutedOnDark, margin: 0
  });
  slide.addText(String(pageNum), {
    x: 12.43, y: 7.12, w: 0.3, h: 0.3,
    fontSize: 9, fontFace: FONT_BODY, color: C.textMutedOnDark, align: "right", margin: 0
  });
}

// Section eyebrow
function addEyebrow(slide, text, x, y, color = C.gold) {
  slide.addText(text.toUpperCase(), {
    x, y, w: 8, h: 0.3,
    fontSize: 11, fontFace: FONT_BODY, color, bold: true,
    charSpacing: 6, margin: 0
  });
}

// ============================================================
// SLIDE 1 — TITLE / COVER
// ============================================================
function slide1_Title() {
  const s = pres.addSlide();
  s.background = { color: C.navyDeep };

  // Decorative gold bar top-left
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.4, h: 7.5, fill: { color: C.gold }, line: { type: "none" }
  });

  // Subtle gold corner accent (small triangle/square only)
  s.addShape(pres.shapes.RECTANGLE, {
    x: 12.7, y: 6.7, w: 0.55, h: 0.05,
    fill: { color: C.gold }, line: { type: "none" }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 13.2, y: 6.7, w: 0.05, h: 0.55,
    fill: { color: C.gold }, line: { type: "none" }
  });

  // Logo
  s.addImage({
    path: LOGO_WHITE,
    x: 1.2, y: 0.9, w: 4.5, h: 0.9,
    sizing: { type: "contain", w: 4.5, h: 0.9 }
  });

  // Eyebrow
  s.addText("A NEW PARTNERSHIP FOR FIDUCIARY ADVISORS", {
    x: 1.2, y: 2.4, w: 11, h: 0.4,
    fontSize: 12, fontFace: FONT_BODY, color: C.gold, bold: true,
    charSpacing: 8, margin: 0
  });

  // Title
  s.addText("The retirement platform", {
    x: 1.2, y: 2.9, w: 11, h: 0.95,
    fontSize: 54, fontFace: FONT_HEAD, color: C.white, bold: true, margin: 0
  });
  s.addText([
    { text: "your clients are ", options: { color: C.white } },
    { text: "missing", options: { color: C.gold, italic: true } },
    { text: ".", options: { color: C.white } }
  ], {
    x: 1.2, y: 3.85, w: 11.5, h: 0.95,
    fontSize: 54, fontFace: FONT_HEAD, bold: true, margin: 0
  });

  // Tagline
  s.addText("More income.  More purpose.  More clarity.", {
    x: 1.2, y: 5.05, w: 11, h: 0.5,
    fontSize: 20, fontFace: FONT_BODY, color: C.goldLight, italic: true, margin: 0
  });

  // Speaker block
  s.addShape(pres.shapes.LINE, {
    x: 1.2, y: 6.3, w: 1.2, h: 0,
    line: { color: C.gold, width: 2 }
  });
  s.addText("EDDIE APPELL", {
    x: 1.2, y: 6.42, w: 6, h: 0.3,
    fontSize: 13, fontFace: FONT_BODY, color: C.white, bold: true, charSpacing: 4, margin: 0
  });
  s.addText("Founder & CEO, RetireMore", {
    x: 1.2, y: 6.74, w: 6, h: 0.3,
    fontSize: 12, fontFace: FONT_BODY, color: C.textMutedOnDark, italic: true, margin: 0
  });
}

// ============================================================
// SLIDE 2 — THE CONVERSATION YOU KEEP HAVING
// ============================================================
function slide2_Conversation() {
  const s = pres.addSlide();
  s.background = { color: C.cream };

  addEyebrow(s, "The Problem", 0.6, 0.55, C.gold);
  s.addText("The conversation you keep having.", {
    x: 0.6, y: 0.9, w: 12.13, h: 0.85,
    fontSize: 36, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, margin: 0
  });
  s.addText("Your clients trust you to handle the money. But they keep asking you questions that aren't really about the money.", {
    x: 0.6, y: 1.75, w: 12, h: 0.5,
    fontSize: 14, fontFace: FONT_BODY, color: C.textWarm, italic: true, margin: 0
  });

  // Quote cards
  const quotes = [
    { q: "Where should we actually retire?", t: "Tax planning + lifestyle fit + healthcare access" },
    { q: "Should we move abroad?", t: "Visas, healthcare, cost of living, currency risk" },
    { q: "What am I going to do all day?", t: "Identity, purpose, social structure" },
    { q: "How do I leave a legacy beyond money?", t: "Volunteering, mentorship, family values" },
    { q: "What happens to my digital life?", t: "Passwords, accounts, photos, crypto" },
    { q: "How do I give while I'm still alive?", t: "Lifetime gifting + estate optimization" },
  ];

  const cardW = 3.93;
  const cardH = 1.7;
  const startX = 0.6;
  const startY = 2.55;
  const gapX = 0.15;
  const gapY = 0.22;

  quotes.forEach((q, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = startX + col * (cardW + gapX);
    const y = startY + row * (cardH + gapY);

    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: cardW, h: cardH,
      fill: { color: C.white }, line: { color: C.borderLight, width: 0.75 },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 1, angle: 90, opacity: 0.05 }
    });
    // Gold left accent
    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: 0.07, h: cardH,
      fill: { color: C.gold }, line: { type: "none" }
    });
    // Big quote mark
    s.addText("“", {
      x: x + 0.18, y: y + 0.0, w: 0.5, h: 0.6,
      fontSize: 36, fontFace: FONT_HEAD, color: C.gold, bold: true, margin: 0
    });
    // Question
    s.addText(q.q, {
      x: x + 0.55, y: y + 0.25, w: cardW - 0.7, h: 0.7,
      fontSize: 14, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, italic: true, margin: 0
    });
    // Topic
    s.addText(q.t, {
      x: x + 0.55, y: y + 1.05, w: cardW - 0.7, h: 0.55,
      fontSize: 11, fontFace: FONT_BODY, color: C.textWarm, margin: 0
    });
  });

  // Footer note
  s.addText([
    { text: "Your planning software answers the first half of one question. ", options: { color: C.textWarm } },
    { text: "RetireMore answers all of them.", options: { color: C.blue, bold: true } },
  ], {
    x: 0.6, y: 6.5, w: 12, h: 0.4,
    fontSize: 15, fontFace: FONT_BODY, italic: true, margin: 0
  });

  addFooterLight(s, 2);
}

// ============================================================
// SLIDE 3 — THE GAP (BIG STAT)
// ============================================================
function slide3_Gap() {
  const s = pres.addSlide();
  s.background = { color: C.navy };

  // Decorative gold bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 13.333, h: 0.18, fill: { color: C.gold }, line: { type: "none" }
  });

  addEyebrow(s, "The Retirement Gap", 0.7, 0.85, C.goldLight);
  s.addText("You're solving one third of the picture.", {
    x: 0.7, y: 1.2, w: 12, h: 0.85,
    fontSize: 32, fontFace: FONT_HEAD, color: C.white, bold: true, margin: 0
  });
  s.addText("So is everyone else.", {
    x: 0.7, y: 2.05, w: 12, h: 0.6,
    fontSize: 26, fontFace: FONT_HEAD, color: C.goldPale, italic: true, margin: 0
  });

  // Big stat — left
  s.addText("73%", {
    x: 0.7, y: 3.0, w: 5.5, h: 2.5,
    fontSize: 150, fontFace: FONT_HEAD, color: C.gold, bold: true, margin: 0, valign: "top"
  });
  s.addText("of pre-retirees say their biggest fears\nabout retirement are NOT financial.", {
    x: 0.7, y: 5.85, w: 5.7, h: 0.85,
    fontSize: 15, fontFace: FONT_BODY, color: C.white, italic: true, margin: 0
  });

  // Right column — three pillars
  const pillars = [
    { num: "1/3", lbl: "Financial Security", desc: "What planning software solves." },
    { num: "1/3", lbl: "Lifestyle & Purpose", desc: "Where will I live, who will I be, how will I spend my time?" },
    { num: "1/3", lbl: "Legacy & Impact", desc: "How will I be remembered, what will I leave behind?" },
  ];
  const pillarX = 7.0;
  const pillarW = 5.5;
  pillars.forEach((p, i) => {
    const py = 3.0 + i * 1.25;
    s.addShape(pres.shapes.RECTANGLE, {
      x: pillarX, y: py, w: pillarW, h: 1.05,
      fill: { color: C.navyDeep }, line: { color: C.borderDark, width: 0.75 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: pillarX, y: py, w: 0.08, h: 1.05,
      fill: { color: i === 0 ? C.blueLight : i === 1 ? C.goldLight : C.green }, line: { type: "none" }
    });
    s.addText(p.num, {
      x: pillarX + 0.25, y: py + 0.12, w: 1.0, h: 0.85,
      fontSize: 36, fontFace: FONT_HEAD, color: C.white, bold: true, margin: 0
    });
    s.addText(p.lbl, {
      x: pillarX + 1.4, y: py + 0.12, w: pillarW - 1.5, h: 0.4,
      fontSize: 16, fontFace: FONT_HEAD, color: C.white, bold: true, margin: 0
    });
    s.addText(p.desc, {
      x: pillarX + 1.4, y: py + 0.52, w: pillarW - 1.5, h: 0.5,
      fontSize: 11, fontFace: FONT_BODY, color: C.textMutedOnDark, italic: true, margin: 0
    });
  });

  s.addText("Source: EBRI Retirement Confidence Survey; Age Wave / Edward Jones “Four Pillars of the New Retirement.”", {
    x: 0.7, y: 6.65, w: 12, h: 0.3,
    fontSize: 9, fontFace: FONT_BODY, color: C.textMutedOnDark, italic: true, margin: 0
  });

  addFooterDark(s, 3);
}

// ============================================================
// SLIDE 4 — INTRODUCING RETIREMORE
// ============================================================
function slide4_Introducing() {
  const s = pres.addSlide();
  s.background = { color: C.cream };

  addEyebrow(s, "Introducing", 0.6, 0.55, C.gold);

  // Logo
  s.addImage({
    path: LOGO_BLACK,
    x: 0.6, y: 0.95, w: 5.0, h: 1.0,
    sizing: { type: "contain", w: 5.0, h: 1.0 }
  });

  s.addText("The engagement layer for fiduciary advisors.", {
    x: 0.6, y: 2.15, w: 12, h: 0.55,
    fontSize: 22, fontFace: FONT_HEAD, color: C.navyHeading, italic: true, margin: 0
  });

  // Three-column "what RetireMore is"
  const cols = [
    {
      eyebrow: "WHAT IT'S NOT",
      title: "A planning software replacement.",
      body: "Keep eMoney, RightCapital, MoneyGuidePro. RetireMore complements the planning you already do — it doesn't compete with it.",
      color: C.textWarm,
      accent: C.textWarm,
    },
    {
      eyebrow: "WHAT IT IS",
      title: "An always-on engagement layer.",
      body: "12 retirement tools — financial, lifestyle, legacy — that your clients use between meetings to build a complete retirement plan, not just a financial one.",
      color: C.blue,
      accent: C.blue,
    },
    {
      eyebrow: "WHY IT MATTERS",
      title: "The questions you can't bill for.",
      body: "Your clients want answers about identity, purpose, location, legacy, and digital life. RetireMore lets you answer them — and get credit for it.",
      color: C.gold,
      accent: C.gold,
    },
  ];

  const colW = 4.05;
  const colH = 4.0;
  const colStartX = 0.6;
  const colY = 2.85;
  const colGap = 0.15;

  cols.forEach((c, i) => {
    const x = colStartX + i * (colW + colGap);
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: colY, w: colW, h: colH,
      fill: { color: C.white }, line: { color: C.borderLight, width: 0.75 },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 90, opacity: 0.06 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: colY, w: colW, h: 0.12,
      fill: { color: c.accent }, line: { type: "none" }
    });

    s.addText(c.eyebrow, {
      x: x + 0.35, y: colY + 0.4, w: colW - 0.7, h: 0.3,
      fontSize: 11, fontFace: FONT_BODY, color: c.color, bold: true, charSpacing: 6, margin: 0
    });
    s.addText(c.title, {
      x: x + 0.35, y: colY + 0.85, w: colW - 0.7, h: 1.2,
      fontSize: 22, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, margin: 0
    });
    s.addText(c.body, {
      x: x + 0.35, y: colY + 2.2, w: colW - 0.7, h: 1.6,
      fontSize: 13, fontFace: FONT_BODY, color: C.textWarm, margin: 0
    });
  });

  addFooterLight(s, 4);
}

// ============================================================
// SLIDE 5 — 12 TOOLS, 3 DIMENSIONS
// ============================================================
function slide5_Tools() {
  const s = pres.addSlide();
  s.background = { color: C.cream };

  addEyebrow(s, "The Platform", 0.6, 0.55, C.gold);
  s.addText("Twelve tools. Three dimensions of retirement.", {
    x: 0.6, y: 0.9, w: 12.13, h: 0.85,
    fontSize: 32, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, margin: 0
  });
  s.addText("Every client gets full access to every tool. You decide which ones to enable per client.", {
    x: 0.6, y: 1.75, w: 12, h: 0.4,
    fontSize: 13, fontFace: FONT_BODY, color: C.textWarm, italic: true, margin: 0
  });

  const sections = [
    {
      title: "FINANCIAL SECURITY",
      sub: "Income, taxes, Social Security, healthcare, withdrawal strategies",
      bg: C.finBg, accent: C.finAccent,
      tools: [
        { n: "Monthly Income Planner", t: "~15 min" },
        { n: "Social Security Optimization", t: "~5 min" },
        { n: "Tax Impact Analyzer", t: "~10 min" },
        { n: "Longevity & Drawdown", t: "~8 min" },
        { n: "Healthcare Cost Calculator", t: "~8 min" },
      ],
    },
    {
      title: "LIFESTYLE & PURPOSE",
      sub: "Where you'll live, who you'll be, how you'll spend your time",
      bg: C.lifeBg, accent: C.lifeAccent,
      tools: [
        { n: "Retire Abroad AI", t: "~3 min" },
        { n: "State Relocate Selector", t: "~5 min" },
        { n: "Identity Builder", t: "~20 min" },
        { n: "Volunteer Purpose Matchmaker", t: "~5 min" },
      ],
    },
    {
      title: "LEGACY & IMPACT",
      sub: "Estate distribution, lifetime giving, your digital footprint",
      bg: C.legacyBg, accent: C.legacyAccent,
      tools: [
        { n: "Legacy Flow Visualizer", t: "~10 min" },
        { n: "Gifting Strategy Planner", t: "~10 min" },
        { n: "Digital Estate Manager", t: "~15 min" },
      ],
    },
  ];

  const colW = 4.05;
  const colY = 2.3;
  const colH = 4.6;
  const startX = 0.6;
  const gap = 0.15;

  sections.forEach((sec, i) => {
    const x = startX + i * (colW + gap);

    // Card background
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: colY, w: colW, h: colH,
      fill: { color: C.white }, line: { color: C.borderLight, width: 0.75 },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 90, opacity: 0.06 }
    });

    // Pastel header band
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: colY, w: colW, h: 1.0,
      fill: { color: sec.bg }, line: { type: "none" }
    });

    // Accent left bar
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: colY, w: 0.08, h: colH,
      fill: { color: sec.accent }, line: { type: "none" }
    });

    // Section title
    s.addText(sec.title, {
      x: x + 0.3, y: colY + 0.18, w: colW - 0.45, h: 0.4,
      fontSize: 13, fontFace: FONT_BODY, color: sec.accent, bold: true, charSpacing: 4, margin: 0
    });
    s.addText(sec.sub, {
      x: x + 0.3, y: colY + 0.55, w: colW - 0.45, h: 0.4,
      fontSize: 10, fontFace: FONT_BODY, color: C.navyHeading, italic: true, margin: 0
    });

    // Tools list — distribute evenly across available card height
    const listTop = 1.15;
    const listBottom = 0.3;
    const listAvailable = colH - listTop - listBottom;
    const itemH = 0.4;
    const itemSpan = (listAvailable - itemH) / Math.max(sec.tools.length - 1, 1);
    sec.tools.forEach((t, j) => {
      const ty = colY + listTop + j * itemSpan;
      s.addShape(pres.shapes.OVAL, {
        x: x + 0.3, y: ty + 0.13, w: 0.18, h: 0.18,
        fill: { color: sec.accent }, line: { type: "none" }
      });
      s.addText(t.n, {
        x: x + 0.6, y: ty, w: colW - 1.4, h: itemH,
        fontSize: 13, fontFace: FONT_BODY, color: C.navyHeading, bold: true, margin: 0
      });
      s.addText(t.t, {
        x: x + colW - 0.95, y: ty, w: 0.75, h: itemH,
        fontSize: 10, fontFace: FONT_BODY, color: C.textWarm, italic: true, align: "right", margin: 0
      });
    });
  });

  // Bottom strip — count callout
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 7.0, w: 0, h: 0,
    fill: { color: C.gold }, line: { type: "none" }
  });

  addFooterLight(s, 5);
}

// ============================================================
// SLIDE 6 — THE AI UNIFIED PLAN
// ============================================================
function slide6_AIPlan() {
  const s = pres.addSlide();
  s.background = { color: C.navyDeep };

  // gold top bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 13.333, h: 0.18, fill: { color: C.gold }, line: { type: "none" }
  });

  addEyebrow(s, "The Unified Plan", 0.7, 0.5, C.goldLight);
  s.addText("One score. One narrative. One action plan.", {
    x: 0.7, y: 0.85, w: 12.13, h: 0.75,
    fontSize: 30, fontFace: FONT_HEAD, color: C.white, bold: true, margin: 0
  });
  s.addText("RetireMore's AI Orchestrator pulls every client's data across all 12 tools and generates a unified retirement plan — for free, on every account.", {
    x: 0.7, y: 1.65, w: 12, h: 0.55,
    fontSize: 13, fontFace: FONT_BODY, color: C.textMutedOnDark, italic: true, margin: 0
  });

  // ----- Mock plan card (matching the orchestrator UI) -----
  const cx = 0.7;
  const cy = 2.4;
  const cw = 12;
  const ch = 4.15;

  s.addShape(pres.shapes.RECTANGLE, {
    x: cx, y: cy, w: cw, h: ch,
    fill: { color: C.offWhite }, line: { color: C.borderDark, width: 0.5 },
    shadow: { type: "outer", color: "000000", blur: 12, offset: 4, angle: 90, opacity: 0.3 }
  });

  // Score block
  s.addShape(pres.shapes.RECTANGLE, {
    x: cx + 0.3, y: cy + 0.3, w: 1.5, h: 1.6,
    fill: { color: C.blue }, line: { type: "none" }
  });
  s.addText("78", {
    x: cx + 0.3, y: cy + 0.4, w: 1.5, h: 1.0,
    fontSize: 60, fontFace: FONT_HEAD, color: C.white, bold: true, align: "center", margin: 0
  });
  s.addText("READINESS\nSCORE", {
    x: cx + 0.3, y: cy + 1.45, w: 1.5, h: 0.4,
    fontSize: 9, fontFace: FONT_BODY, color: C.white, bold: true, align: "center", charSpacing: 3, margin: 0
  });

  // Executive summary
  s.addText("EXECUTIVE SUMMARY", {
    x: cx + 2.0, y: cy + 0.3, w: 7, h: 0.3,
    fontSize: 11, fontFace: FONT_BODY, color: C.navyHeading, bold: true, charSpacing: 4, margin: 0
  });
  s.addText("Eddie & Lara are well-positioned with $2.2M in assets, multiple pensions, and expenses covered through age 92. Key opportunities: relocating to Washington for $20K annual tax savings and optimizing estate planning with strategic gifting.", {
    x: cx + 2.0, y: cy + 0.65, w: 7.0, h: 1.1,
    fontSize: 11, fontFace: FONT_BODY, color: C.textWarm, margin: 0
  });

  // Top priorities (chips)
  s.addText("TOP PRIORITIES", {
    x: cx + 2.0, y: cy + 1.85, w: 7, h: 0.3,
    fontSize: 9, fontFace: FONT_BODY, color: C.navyHeading, bold: true, charSpacing: 4, margin: 0
  });
  const chips = [
    "Resolve state residence",
    "Tax-advantaged gifting",
    "Develop identity plan",
  ];
  let chipX = cx + 2.0;
  chips.forEach((label) => {
    const cw2 = label.length * 0.085 + 0.3;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: chipX, y: cy + 2.15, w: cw2, h: 0.32,
      fill: { color: C.blue }, line: { type: "none" }, rectRadius: 0.16
    });
    s.addText(label, {
      x: chipX, y: cy + 2.15, w: cw2, h: 0.32,
      fontSize: 9, fontFace: FONT_BODY, color: C.white, bold: true, align: "center", margin: 0
    });
    chipX += cw2 + 0.1;
  });

  // Right side — coverage block
  s.addShape(pres.shapes.RECTANGLE, {
    x: cx + 9.4, y: cy + 0.3, w: 2.3, h: 1.4,
    fill: { color: C.finBg }, line: { color: C.blueLight, width: 1 }
  });
  s.addText("100%", {
    x: cx + 9.4, y: cy + 0.35, w: 2.3, h: 0.55,
    fontSize: 30, fontFace: FONT_HEAD, color: C.green, bold: true, align: "center", margin: 0
  });
  s.addText("DATA COVERAGE", {
    x: cx + 9.4, y: cy + 0.92, w: 2.3, h: 0.25,
    fontSize: 9, fontFace: FONT_BODY, color: C.navyHeading, bold: true, align: "center", charSpacing: 3, margin: 0
  });
  s.addText("12 tools analyzed", {
    x: cx + 9.4, y: cy + 1.18, w: 2.3, h: 0.3,
    fontSize: 10, fontFace: FONT_BODY, color: C.navyHeading, italic: true, align: "center", margin: 0
  });

  // Cross-tool synergies header
  s.addShape(pres.shapes.RECTANGLE, {
    x: cx + 0.3, y: cy + 2.85, w: cw - 0.6, h: 0,
    line: { color: C.borderLight, width: 0.5 }
  });
  s.addText("⚡  CROSS-TOOL SYNERGIES", {
    x: cx + 0.3, y: cy + 2.95, w: 6, h: 0.3,
    fontSize: 11, fontFace: FONT_BODY, color: C.gold, bold: true, charSpacing: 3, margin: 0
  });

  const synergies = [
    { title: "Tax-Optimized Relocation", val: "$399K over 20 yrs" },
    { title: "Estate Tax Reduction via Gifting", val: "$540K tax-free" },
    { title: "International Lifestyle Integration", val: "Healthcare + culture aligned" },
  ];
  synergies.forEach((sy, i) => {
    const sx = cx + 0.3 + i * 3.85;
    s.addText(sy.title, {
      x: sx, y: cy + 3.3, w: 3.7, h: 0.35,
      fontSize: 12, fontFace: FONT_BODY, color: C.navyHeading, bold: true, margin: 0
    });
    s.addText(sy.val, {
      x: sx, y: cy + 3.65, w: 3.7, h: 0.32,
      fontSize: 11, fontFace: FONT_BODY, color: C.green, bold: true, margin: 0
    });
  });

  // Bottom strap line
  s.addText([
    { text: "Your clients walk into your meetings ", options: { color: C.textMutedOnDark } },
    { text: "already prepared", options: { color: C.gold, bold: true } },
    { text: " — every time.", options: { color: C.textMutedOnDark } }
  ], {
    x: 0.7, y: 6.7, w: 12, h: 0.3,
    fontSize: 13, fontFace: FONT_BODY, italic: true, margin: 0
  });

  addFooterDark(s, 6);
}

// ============================================================
// SLIDE 7 — YOUR CO-BRANDED PORTAL
// ============================================================
function slide7_CoBranded() {
  const s = pres.addSlide();
  s.background = { color: C.cream };

  addEyebrow(s, "For You", 0.6, 0.55, C.gold);
  s.addText("Your name. Your logo. Your URL.", {
    x: 0.6, y: 0.9, w: 12.13, h: 0.85,
    fontSize: 32, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, margin: 0
  });
  s.addText("Every client sees you front and center. RetireMore stays in the background.", {
    x: 0.6, y: 1.75, w: 12, h: 0.4,
    fontSize: 13, fontFace: FONT_BODY, color: C.textWarm, italic: true, margin: 0
  });

  // Browser mockup on left
  const bx = 0.6;
  const by = 2.4;
  const bw = 7.3;
  const bh = 4.4;
  s.addShape(pres.shapes.RECTANGLE, {
    x: bx, y: by, w: bw, h: bh,
    fill: { color: C.white }, line: { color: C.borderLight, width: 1 },
    shadow: { type: "outer", color: "000000", blur: 14, offset: 4, angle: 90, opacity: 0.12 }
  });
  // Browser bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: bx, y: by, w: bw, h: 0.35,
    fill: { color: "F1F5F9" }, line: { type: "none" }
  });
  // Traffic lights
  ["EF4444", "FBBF24", "10B981"].forEach((col, i) => {
    s.addShape(pres.shapes.OVAL, {
      x: bx + 0.12 + i * 0.22, y: by + 0.1, w: 0.15, h: 0.15,
      fill: { color: col }, line: { type: "none" }
    });
  });
  // URL bar
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: bx + 1.0, y: by + 0.07, w: bw - 1.2, h: 0.22,
    fill: { color: C.white }, line: { color: C.borderLight, width: 0.5 }, rectRadius: 0.05
  });
  s.addText("🔒  jane-thompson.retiremore.com", {
    x: bx + 1.1, y: by + 0.07, w: bw - 1.4, h: 0.22,
    fontSize: 9, fontFace: FONT_BODY, color: C.textWarm, margin: 0
  });

  // Advisor header band (white background)
  const hY = by + 0.45;
  s.addShape(pres.shapes.RECTANGLE, {
    x: bx + 0.15, y: hY, w: bw - 0.3, h: 1.0,
    fill: { color: C.white }, line: { color: C.borderLight, width: 0.5 }
  });
  // Photo placeholder
  s.addShape(pres.shapes.OVAL, {
    x: bx + 0.3, y: hY + 0.12, w: 0.75, h: 0.75,
    fill: { color: C.blueLight }, line: { type: "none" }
  });
  s.addText("JT", {
    x: bx + 0.3, y: hY + 0.12, w: 0.75, h: 0.75,
    fontSize: 22, fontFace: FONT_HEAD, color: C.white, bold: true, align: "center", valign: "middle", margin: 0
  });
  // Advisor name
  s.addText("Jane Thompson, CFP®", {
    x: bx + 1.2, y: hY + 0.13, w: 4, h: 0.35,
    fontSize: 16, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, margin: 0
  });
  s.addText("Thompson Wealth Advisors", {
    x: bx + 1.2, y: hY + 0.5, w: 4, h: 0.3,
    fontSize: 11, fontFace: FONT_BODY, color: C.textWarm, italic: true, margin: 0
  });
  // Mock firm logo on right
  s.addShape(pres.shapes.RECTANGLE, {
    x: bx + bw - 1.5, y: hY + 0.2, w: 1.2, h: 0.6,
    fill: { color: C.cream }, line: { color: C.borderLight, width: 0.5 }
  });
  s.addText("YOUR LOGO", {
    x: bx + bw - 1.5, y: hY + 0.2, w: 1.2, h: 0.6,
    fontSize: 9, fontFace: FONT_BODY, color: C.textWarm, bold: true, align: "center", valign: "middle", charSpacing: 3, margin: 0
  });

  // Welcome heading
  s.addText("Welcome back, Robert.", {
    x: bx + 0.2, y: hY + 1.2, w: bw - 0.4, h: 0.4,
    fontSize: 16, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, margin: 0
  });
  s.addText("Your retirement readiness, organized by Jane.", {
    x: bx + 0.2, y: hY + 1.55, w: bw - 0.4, h: 0.3,
    fontSize: 11, fontFace: FONT_BODY, color: C.textWarm, italic: true, margin: 0
  });

  // 4 mock app tiles
  const tileY = hY + 2.0;
  const tileColors = [C.finAccent, C.lifeAccent, C.legacyAccent, C.blue];
  const tileLabels = ["Income", "Lifestyle", "Legacy", "AI Plan"];
  for (let i = 0; i < 4; i++) {
    const tx = bx + 0.2 + i * 1.7;
    s.addShape(pres.shapes.RECTANGLE, {
      x: tx, y: tileY, w: 1.55, h: 0.85,
      fill: { color: C.cream }, line: { color: C.borderLight, width: 0.5 }
    });
    s.addShape(pres.shapes.OVAL, {
      x: tx + 0.15, y: tileY + 0.18, w: 0.5, h: 0.5,
      fill: { color: tileColors[i] }, line: { type: "none" }
    });
    s.addText(tileLabels[i], {
      x: tx + 0.7, y: tileY + 0.27, w: 0.85, h: 0.32,
      fontSize: 10, fontFace: FONT_BODY, color: C.navyHeading, bold: true, margin: 0
    });
  }

  // Right side — features list
  const fx = 8.3;
  const fy = 2.35;
  s.addText("Customize everything.", {
    x: fx, y: fy, w: 4.7, h: 0.5,
    fontSize: 22, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, margin: 0
  });

  const features = [
    { t: "Custom subdomain", d: "advisor-name.retiremore.com" },
    { t: "Your photo, name, title, firm", d: "Visible on every client dashboard" },
    { t: "Branded PDF reports", d: "Your colors, logo, ADV link, custom disclaimers" },
    { t: "Disable apps per client", d: "Show only the tools relevant to each client" },
    { t: "Private advisor notes", d: "On every client — never visible to them" },
  ];
  features.forEach((f, i) => {
    const fY = fy + 0.7 + i * 0.78;
    s.addShape(pres.shapes.RECTANGLE, {
      x: fx, y: fY + 0.1, w: 0.18, h: 0.18,
      fill: { color: C.gold }, line: { type: "none" }
    });
    s.addText(f.t, {
      x: fx + 0.35, y: fY, w: 4.4, h: 0.35,
      fontSize: 13, fontFace: FONT_BODY, color: C.navyHeading, bold: true, margin: 0
    });
    s.addText(f.d, {
      x: fx + 0.35, y: fY + 0.32, w: 4.4, h: 0.35,
      fontSize: 11, fontFace: FONT_BODY, color: C.textWarm, italic: true, margin: 0
    });
  });

  addFooterLight(s, 7);
}

// ============================================================
// SLIDE 8 — YOUR ADVISOR DASHBOARD
// ============================================================
function slide8_Dashboard() {
  const s = pres.addSlide();
  s.background = { color: C.cream };

  addEyebrow(s, "Advisor Dashboard", 0.6, 0.55, C.gold);
  s.addText("Every client. Every score. One screen.", {
    x: 0.6, y: 0.9, w: 12.13, h: 0.85,
    fontSize: 32, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, margin: 0
  });
  s.addText("See readiness scores, gaps, and progress at a glance — and act on them.", {
    x: 0.6, y: 1.75, w: 12, h: 0.4,
    fontSize: 13, fontFace: FONT_BODY, color: C.textWarm, italic: true, margin: 0
  });

  // Dashboard mock — left
  const dx = 0.6;
  const dy = 2.4;
  const dw = 7.5;
  const dh = 4.4;
  s.addShape(pres.shapes.RECTANGLE, {
    x: dx, y: dy, w: dw, h: dh,
    fill: { color: C.white }, line: { color: C.borderLight, width: 1 },
    shadow: { type: "outer", color: "000000", blur: 14, offset: 4, angle: 90, opacity: 0.1 }
  });

  // Title bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: dx, y: dy, w: dw, h: 0.5,
    fill: { color: C.navyHeading }, line: { type: "none" }
  });
  s.addText("Your Clients (28 of 45)", {
    x: dx + 0.25, y: dy + 0.08, w: 4, h: 0.35,
    fontSize: 13, fontFace: FONT_BODY, color: C.white, bold: true, margin: 0
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: dx + dw - 1.85, y: dy + 0.08, w: 1.6, h: 0.32,
    fill: { color: C.gold }, line: { type: "none" }, rectRadius: 0.05
  });
  s.addText("+ Invite Client", {
    x: dx + dw - 1.85, y: dy + 0.08, w: 1.6, h: 0.32,
    fontSize: 10, fontFace: FONT_BODY, color: C.navyHeading, bold: true, align: "center", margin: 0
  });

  // Column headers
  s.addShape(pres.shapes.RECTANGLE, {
    x: dx, y: dy + 0.5, w: dw, h: 0.32,
    fill: { color: C.cream }, line: { type: "none" }
  });
  ["CLIENT", "SCORE", "STATUS", "LAST ACTIVE", "GAPS"].forEach((h, i) => {
    const xs = [0.2, 2.6, 3.5, 4.7, 6.0];
    s.addText(h, {
      x: dx + xs[i], y: dy + 0.55, w: 1.5, h: 0.25,
      fontSize: 9, fontFace: FONT_BODY, color: C.textWarm, bold: true, charSpacing: 2, margin: 0
    });
  });

  // Sample rows
  const rows = [
    { name: "Robert & Marie L.", score: 78, st: "On track", stCol: C.green, last: "2 days ago", gaps: "1 incomplete" },
    { name: "Susan Patel", score: 64, st: "Needs review", stCol: C.gold, last: "Today", gaps: "3 incomplete" },
    { name: "James & Diana W.", score: 91, st: "Excellent", stCol: C.green, last: "1 week ago", gaps: "0 incomplete" },
    { name: "Carl Jensen", score: 52, st: "Action needed", stCol: C.red, last: "5 days ago", gaps: "5 incomplete" },
    { name: "Elena Marchetti", score: 83, st: "On track", stCol: C.green, last: "Today", gaps: "0 incomplete" },
  ];
  rows.forEach((r, i) => {
    const ry = dy + 0.85 + i * 0.65;
    if (i % 2 === 1) {
      s.addShape(pres.shapes.RECTANGLE, {
        x: dx, y: ry - 0.05, w: dw, h: 0.65,
        fill: { color: C.cream }, line: { type: "none" }
      });
    }
    // Name
    s.addText(r.name, {
      x: dx + 0.2, y: ry, w: 2.4, h: 0.55,
      fontSize: 11, fontFace: FONT_BODY, color: C.navyHeading, bold: true, margin: 0, valign: "middle"
    });
    // Score circle
    const scoreCol = r.score >= 80 ? C.green : r.score >= 65 ? C.gold : C.red;
    s.addShape(pres.shapes.OVAL, {
      x: dx + 2.6, y: ry + 0.05, w: 0.5, h: 0.5,
      fill: { color: scoreCol }, line: { type: "none" }
    });
    s.addText(String(r.score), {
      x: dx + 2.6, y: ry + 0.05, w: 0.5, h: 0.5,
      fontSize: 13, fontFace: FONT_BODY, color: C.white, bold: true, align: "center", valign: "middle", margin: 0
    });
    // Status pill
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: dx + 3.4, y: ry + 0.13, w: 1.2, h: 0.32,
      fill: { color: r.stCol, transparency: 80 }, line: { type: "none" }, rectRadius: 0.05
    });
    s.addText(r.st, {
      x: dx + 3.4, y: ry + 0.13, w: 1.2, h: 0.32,
      fontSize: 9, fontFace: FONT_BODY, color: r.stCol, bold: true, align: "center", margin: 0
    });
    // Last active
    s.addText(r.last, {
      x: dx + 4.7, y: ry, w: 1.3, h: 0.55,
      fontSize: 10, fontFace: FONT_BODY, color: C.textWarm, italic: true, margin: 0, valign: "middle"
    });
    // Gaps
    s.addText(r.gaps, {
      x: dx + 6.0, y: ry, w: 1.3, h: 0.55,
      fontSize: 10, fontFace: FONT_BODY, color: C.textWarm, margin: 0, valign: "middle"
    });
  });

  // Right side — features
  const fx = 8.5;
  const fy = 2.35;
  s.addText("Built for advisors,\nnot consumers.", {
    x: fx, y: fy, w: 4.5, h: 1.0,
    fontSize: 22, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, margin: 0
  });
  const feats = [
    { t: "Bulk CSV import", d: "Upload your roster in 60 seconds" },
    { t: "Readiness scores", d: "AI-driven, refreshed daily" },
    { t: "Reports & exports", d: "Branded PDFs and meeting prep packets" },
    { t: "Compliance audit trail", d: "Every client interaction logged" },
    { t: "Team seats", d: "Invite associates and analysts" },
  ];
  feats.forEach((f, i) => {
    const fY = fy + 1.45 + i * 0.65;
    s.addShape(pres.shapes.OVAL, {
      x: fx, y: fY + 0.07, w: 0.22, h: 0.22,
      fill: { color: C.gold }, line: { type: "none" }
    });
    s.addText("✓", {
      x: fx, y: fY + 0.07, w: 0.22, h: 0.22,
      fontSize: 11, fontFace: FONT_BODY, color: C.white, bold: true, align: "center", valign: "middle", margin: 0
    });
    s.addText(f.t, {
      x: fx + 0.35, y: fY, w: 4.2, h: 0.32,
      fontSize: 13, fontFace: FONT_BODY, color: C.navyHeading, bold: true, margin: 0
    });
    s.addText(f.d, {
      x: fx + 0.35, y: fY + 0.3, w: 4.2, h: 0.3,
      fontSize: 11, fontFace: FONT_BODY, color: C.textWarm, italic: true, margin: 0
    });
  });

  addFooterLight(s, 8);
}

// ============================================================
// SLIDE 9 — ONBOARDING IN MINUTES
// ============================================================
function slide9_Onboarding() {
  const s = pres.addSlide();
  s.background = { color: C.cream };

  addEyebrow(s, "Onboarding", 0.6, 0.55, C.gold);
  s.addText("From signed up to fully onboarded — in under an hour.", {
    x: 0.6, y: 0.9, w: 12.13, h: 0.85,
    fontSize: 30, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, margin: 0
  });
  s.addText("No engineering, no IT ticket, no integration — just your CSV and 20 minutes.", {
    x: 0.6, y: 1.75, w: 12, h: 0.4,
    fontSize: 13, fontFace: FONT_BODY, color: C.textWarm, italic: true, margin: 0
  });

  // Steps timeline
  const steps = [
    { n: "1", t: "Sign up free", d: "Create your account. No credit card.", time: "2 min" },
    { n: "2", t: "Brand your portal", d: "Upload logo, photo, ADV link, custom subdomain.", time: "10 min" },
    { n: "3", t: "Upload your CSV", d: "Use our template. Map fields. Confirm.", time: "5 min" },
    { n: "4", t: "Invites go out", d: "Clients land on your co-branded portal — already on Premium.", time: "Automatic" },
  ];

  const sw2 = 2.85;
  const startX = 0.6;
  const stepY = 2.7;
  const gap = 0.25;

  // Connector line
  s.addShape(pres.shapes.LINE, {
    x: startX + 0.5, y: stepY + 0.95, w: (sw2 + gap) * 3 + sw2 - 1, h: 0,
    line: { color: C.gold, width: 3, dashType: "dash" }
  });

  steps.forEach((st, i) => {
    const x = startX + i * (sw2 + gap);

    // Big circle with number
    s.addShape(pres.shapes.OVAL, {
      x: x + sw2 / 2 - 0.5, y: stepY + 0.45, w: 1.0, h: 1.0,
      fill: { color: C.navyHeading }, line: { color: C.gold, width: 4 }
    });
    s.addText(st.n, {
      x: x + sw2 / 2 - 0.5, y: stepY + 0.45, w: 1.0, h: 1.0,
      fontSize: 36, fontFace: FONT_HEAD, color: C.gold, bold: true, align: "center", valign: "middle", margin: 0
    });

    // Card below
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: stepY + 1.7, w: sw2, h: 1.9,
      fill: { color: C.white }, line: { color: C.borderLight, width: 0.75 },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 90, opacity: 0.06 }
    });

    s.addText(st.t, {
      x: x + 0.25, y: stepY + 1.85, w: sw2 - 0.5, h: 0.5,
      fontSize: 18, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, align: "center", margin: 0
    });
    s.addText(st.d, {
      x: x + 0.25, y: stepY + 2.4, w: sw2 - 0.5, h: 0.7,
      fontSize: 12, fontFace: FONT_BODY, color: C.textWarm, align: "center", margin: 0
    });
    s.addShape(pres.shapes.LINE, {
      x: x + sw2 / 2 - 0.5, y: stepY + 3.2, w: 1.0, h: 0,
      line: { color: C.gold, width: 1 }
    });
    s.addText(st.time, {
      x: x + 0.25, y: stepY + 3.25, w: sw2 - 0.5, h: 0.3,
      fontSize: 11, fontFace: FONT_BODY, color: C.gold, bold: true, italic: true, align: "center", margin: 0
    });
  });

  // Bottom callout
  s.addText([
    { text: "Every client lands on the ", options: { color: C.textWarm } },
    { text: "Premium tier — at no extra cost to them or to you.", options: { color: C.blue, bold: true } }
  ], {
    x: 0.6, y: 6.7, w: 12, h: 0.3,
    fontSize: 14, fontFace: FONT_BODY, italic: true, align: "center", margin: 0
  });

  addFooterLight(s, 9);
}

// ============================================================
// SLIDE 10 — FIND A PLANNER (NO PER-LEAD FEES)
// ============================================================
function slide10_Directory() {
  const s = pres.addSlide();
  s.background = { color: C.navyDeep };

  // Top accent
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 13.333, h: 0.18, fill: { color: C.gold }, line: { type: "none" }
  });

  addEyebrow(s, "Find a Planner Directory", 0.7, 0.5, C.goldLight);
  s.addText("Get found.", {
    x: 0.7, y: 0.9, w: 12, h: 0.85,
    fontSize: 36, fontFace: FONT_HEAD, color: C.white, bold: true, margin: 0
  });
  s.addText([
    { text: "Without paying ", options: { color: C.white } },
    { text: "per lead.", options: { color: C.gold, italic: true } }
  ], {
    x: 0.7, y: 1.7, w: 12, h: 0.85,
    fontSize: 36, fontFace: FONT_HEAD, bold: true, margin: 0
  });

  s.addText("Included free with every plan. Featured to consumers searching for fiduciary advisors who handle the full picture of retirement.", {
    x: 0.7, y: 2.7, w: 12, h: 0.55,
    fontSize: 14, fontFace: FONT_BODY, color: C.textMutedOnDark, italic: true, margin: 0
  });

  // Comparison: Them vs Us
  const cw = 5.7;
  const ch = 3.05;
  const cy = 3.45;

  // THEM card
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: cy, w: cw, h: ch,
    fill: { color: C.navy }, line: { color: C.borderDark, width: 0.75 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: cy, w: cw, h: 0.08,
    fill: { color: C.red }, line: { type: "none" }
  });
  s.addText("THE OTHER GUYS", {
    x: 0.95, y: cy + 0.25, w: cw - 0.5, h: 0.35,
    fontSize: 11, fontFace: FONT_BODY, color: C.red, bold: true, charSpacing: 4, margin: 0
  });
  s.addText("SmartAsset, Zoe, WiserAdvisor", {
    x: 0.95, y: cy + 0.6, w: cw - 0.5, h: 0.4,
    fontSize: 18, fontFace: FONT_HEAD, color: C.white, bold: true, margin: 0
  });

  const themBullets = [
    "Per-lead fees: $50–$300+ per match",
    "Pay-to-play ranking — placement follows the dollar",
    "No fiduciary screen on consumer side",
    "Required referral disclosure to clients",
  ];
  themBullets.forEach((b, i) => {
    const by = cy + 1.15 + i * 0.42;
    s.addText("✖", {
      x: 0.95, y: by, w: 0.3, h: 0.3,
      fontSize: 14, fontFace: FONT_BODY, color: C.red, bold: true, margin: 0
    });
    s.addText(b, {
      x: 1.3, y: by, w: cw - 0.7, h: 0.4,
      fontSize: 13, fontFace: FONT_BODY, color: C.textMutedOnDark, margin: 0
    });
  });

  // US card
  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.95, y: cy, w: cw, h: ch,
    fill: { color: C.navy }, line: { color: C.gold, width: 1.5 }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 6.95, y: cy, w: cw, h: 0.08,
    fill: { color: C.gold }, line: { type: "none" }
  });
  s.addText("RETIREMORE", {
    x: 7.2, y: cy + 0.25, w: cw - 0.5, h: 0.35,
    fontSize: 11, fontFace: FONT_BODY, color: C.gold, bold: true, charSpacing: 4, margin: 0
  });
  s.addText("Fiduciary-aligned by design", {
    x: 7.2, y: cy + 0.6, w: cw - 0.5, h: 0.4,
    fontSize: 18, fontFace: FONT_HEAD, color: C.white, bold: true, margin: 0
  });

  const usBullets = [
    "Zero per-lead fees. Ever.",
    "Placement based on fit, not who paid most",
    "All listed advisors are CFP® or fiduciary-bound",
    "No required disclosure to your clients",
  ];
  usBullets.forEach((b, i) => {
    const by = cy + 1.15 + i * 0.42;
    s.addText("✓", {
      x: 7.2, y: by, w: 0.3, h: 0.3,
      fontSize: 14, fontFace: FONT_BODY, color: C.gold, bold: true, margin: 0
    });
    s.addText(b, {
      x: 7.55, y: by, w: cw - 0.7, h: 0.4,
      fontSize: 13, fontFace: FONT_BODY, color: C.white, bold: true, margin: 0
    });
  });

  s.addText([
    { text: "If we ever take a per-lead fee from a CFP, you've earned the right to leave.", options: { italic: true, color: C.gold, bold: true } }
  ], {
    x: 0.7, y: 6.62, w: 12, h: 0.3,
    fontSize: 12, fontFace: FONT_BODY, margin: 0, align: "center"
  });

  addFooterDark(s, 10);
}

// ============================================================
// SLIDE 11 — WHAT THIS MEANS FOR YOUR PRACTICE
// ============================================================
function slide11_Practice() {
  const s = pres.addSlide();
  s.background = { color: C.cream };

  addEyebrow(s, "Your Practice", 0.6, 0.55, C.gold);
  s.addText("What this means for your practice.", {
    x: 0.6, y: 0.9, w: 12.13, h: 0.85,
    fontSize: 32, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, margin: 0
  });

  const reasons = [
    {
      n: "01",
      t: "Differentiate",
      desc: "Offer something nobody in your market does. Holistic retirement engagement, not just plan documents.",
      color: C.blue,
    },
    {
      n: "02",
      t: "Retain",
      desc: "Clients engage with your brand between meetings. Higher retention. Lower churn. Stickier referrals.",
      color: C.gold,
    },
    {
      n: "03",
      t: "Discover",
      desc: "The Find a Planner directory drives qualified prospects to you — fiduciary-aligned, fee-free, full-picture.",
      color: C.lifeAccent,
    },
    {
      n: "04",
      t: "Charge More",
      desc: "A complete retirement experience supports premium advisory fees. You're delivering more — charge for it.",
      color: C.legacyAccent,
    },
  ];

  const cw = 2.95;
  const ch = 4.1;
  const startX = 0.6;
  const cy = 2.3;
  const cgap = 0.13;

  reasons.forEach((r, i) => {
    const x = startX + i * (cw + cgap);
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: cy, w: cw, h: ch,
      fill: { color: C.white }, line: { color: C.borderLight, width: 0.75 },
      shadow: { type: "outer", color: "000000", blur: 8, offset: 2, angle: 90, opacity: 0.07 }
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: cy, w: cw, h: 0.12,
      fill: { color: r.color }, line: { type: "none" }
    });

    // Big number
    s.addText(r.n, {
      x: x + 0.3, y: cy + 0.4, w: 2, h: 1.2,
      fontSize: 64, fontFace: FONT_HEAD, color: r.color, bold: true, margin: 0
    });
    // Title
    s.addText(r.t, {
      x: x + 0.3, y: cy + 1.7, w: cw - 0.6, h: 0.6,
      fontSize: 22, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, margin: 0
    });
    // Divider
    s.addShape(pres.shapes.LINE, {
      x: x + 0.3, y: cy + 2.35, w: 0.8, h: 0,
      line: { color: r.color, width: 2 }
    });
    // Description
    s.addText(r.desc, {
      x: x + 0.3, y: cy + 2.55, w: cw - 0.6, h: 1.4,
      fontSize: 12, fontFace: FONT_BODY, color: C.textWarm, margin: 0
    });
  });

  // Bottom strap
  s.addText([
    { text: "You're not adding a tool. You're adding a ", options: { color: C.textWarm } },
    { text: "category of service", options: { color: C.navyHeading, bold: true } },
    { text: " that nobody else in your zip code offers.", options: { color: C.textWarm } }
  ], {
    x: 0.6, y: 6.6, w: 12, h: 0.3,
    fontSize: 14, fontFace: FONT_BODY, italic: true, align: "center", margin: 0
  });

  addFooterLight(s, 11);
}

// ============================================================
// SLIDE 12 — PRICING
// ============================================================
function slide12_Pricing() {
  const s = pres.addSlide();
  s.background = { color: C.navyDeep };

  // Top accent
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 13.333, h: 0.18, fill: { color: C.gold }, line: { type: "none" }
  });

  addEyebrow(s, "Pricing", 0.6, 0.5, C.goldLight);
  s.addText("Simple plans. No setup fees. No long-term contracts.", {
    x: 0.6, y: 0.85, w: 12.13, h: 0.6,
    fontSize: 28, fontFace: FONT_HEAD, color: C.white, bold: true, margin: 0
  });
  s.addText("Annual billing saves 20%. Cancel anytime.", {
    x: 0.6, y: 1.5, w: 12, h: 0.4,
    fontSize: 13, fontFace: FONT_BODY, color: C.textMutedOnDark, italic: true, margin: 0
  });

  // 3 Pricing cards
  const tiers = [
    {
      name: "SOLO",
      mo: "$99", yr: "$79", yrTotal: "$948/yr",
      clients: "Up to 20 clients",
      featured: false,
      features: [
        "White-label branding",
        "Co-branded PDF reports",
        "All 12 planning tools",
        "Client invitation & management",
        "Private advisor notes",
        "Compliance audit trail",
        "Custom disclaimers & ADV link",
        "Email support",
      ],
    },
    {
      name: "PROFESSIONAL",
      mo: "$199", yr: "$159", yrTotal: "$1,908/yr",
      clients: "Up to 45 clients",
      featured: true,
      features: [
        "Everything in Solo, plus:",
        "Custom subdomain",
        "Up to 3 advisor seats",
        "Advanced analytics dashboard",
        "Client document vault",
        "Scheduled report generation",
        "Meeting prep packets",
        "Priority support",
      ],
    },
    {
      name: "ENTERPRISE",
      mo: "$499", yr: "$399", yrTotal: "$4,788/yr",
      clients: "Unlimited clients",
      featured: false,
      features: [
        "Everything in Professional, plus:",
        "Unlimited advisor seats",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "SOC 2 compliance documentation",
        "SLA guarantees",
        "Custom onboarding",
      ],
    },
  ];

  const tw = 4.0;
  const th = 5.0;
  const tStartX = 0.6;
  const ty = 2.05;
  const tGap = 0.15;

  tiers.forEach((t, i) => {
    const x = tStartX + i * (tw + tGap);

    // Card
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: ty, w: tw, h: th,
      fill: { color: C.navy }, line: { color: t.featured ? C.gold : C.borderDark, width: t.featured ? 2 : 0.75 },
      shadow: { type: "outer", color: "000000", blur: 12, offset: 3, angle: 90, opacity: 0.3 }
    });

    // Most popular badge — sits cleanly above the card border
    if (t.featured) {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: x + tw / 2 - 0.85, y: ty - 0.42, w: 1.7, h: 0.36,
        fill: { color: C.gold }, line: { type: "none" }, rectRadius: 0.18
      });
      s.addText("MOST POPULAR", {
        x: x + tw / 2 - 0.85, y: ty - 0.42, w: 1.7, h: 0.36,
        fontSize: 9, fontFace: FONT_BODY, color: C.navyDeep, bold: true, align: "center", valign: "middle", charSpacing: 4, margin: 0
      });
    }

    // Tier name
    s.addText(t.name, {
      x: x + 0.4, y: ty + 0.3, w: tw - 0.8, h: 0.4,
      fontSize: 14, fontFace: FONT_BODY, color: C.gold, bold: true, charSpacing: 5, margin: 0
    });

    // Price
    s.addText(t.yr, {
      x: x + 0.4, y: ty + 0.7, w: tw - 0.8, h: 1.0,
      fontSize: 56, fontFace: FONT_HEAD, color: C.white, bold: true, margin: 0
    });
    s.addText("/mo", {
      x: x + tw - 1.5, y: ty + 1.35, w: 0.95, h: 0.4,
      fontSize: 16, fontFace: FONT_BODY, color: C.textMutedOnDark, italic: true, margin: 0
    });

    // Annual notation
    s.addText(`${t.yrTotal}  •  billed annually`, {
      x: x + 0.4, y: ty + 1.75, w: tw - 0.8, h: 0.3,
      fontSize: 10, fontFace: FONT_BODY, color: C.textMutedOnDark, italic: true, margin: 0
    });
    s.addText(`(or ${t.mo}/mo billed monthly)`, {
      x: x + 0.4, y: ty + 2.0, w: tw - 0.8, h: 0.3,
      fontSize: 10, fontFace: FONT_BODY, color: C.textMutedOnDark, italic: true, margin: 0
    });

    // Clients line
    s.addShape(pres.shapes.LINE, {
      x: x + 0.4, y: ty + 2.4, w: tw - 0.8, h: 0,
      line: { color: C.borderDark, width: 0.75 }
    });
    s.addText(t.clients, {
      x: x + 0.4, y: ty + 2.5, w: tw - 0.8, h: 0.32,
      fontSize: 12, fontFace: FONT_BODY, color: C.gold, bold: true, margin: 0
    });

    // Features
    t.features.forEach((f, j) => {
      const fY = ty + 2.95 + j * 0.25;
      const isHeader = f.startsWith("Everything");
      s.addText("✓", {
        x: x + 0.4, y: fY, w: 0.2, h: 0.25,
        fontSize: 10, fontFace: FONT_BODY, color: C.green, bold: true, margin: 0
      });
      s.addText(f, {
        x: x + 0.65, y: fY, w: tw - 0.95, h: 0.25,
        fontSize: 10, fontFace: FONT_BODY, color: isHeader ? C.gold : C.textOnDark, bold: isHeader, italic: isHeader, margin: 0
      });
    });
  });

  s.addText("All plans include the Find a Planner directory • No per-lead fees • No setup costs", {
    x: 0.6, y: 7.15, w: 12, h: 0.3,
    fontSize: 11, fontFace: FONT_BODY, color: C.goldLight, italic: true, align: "center", margin: 0
  });

  addFooterDark(s, 12);
}

// ============================================================
// SLIDE 13 — SECURITY & COMPLIANCE
// ============================================================
function slide13_Security() {
  const s = pres.addSlide();
  s.background = { color: C.cream };

  addEyebrow(s, "Security & Compliance", 0.6, 0.55, C.gold);
  s.addText("Built to the standards you'd build for yourself.", {
    x: 0.6, y: 0.9, w: 12.13, h: 0.85,
    fontSize: 30, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, margin: 0
  });
  s.addText("CFP-grade controls and transparency. Audits run daily. Findings remediated on the day they're found.", {
    x: 0.6, y: 1.75, w: 12, h: 0.4,
    fontSize: 13, fontFace: FONT_BODY, color: C.textWarm, italic: true, margin: 0
  });

  const items = [
    { t: "SOC 2 Type II", d: "In progress — Q3 2026 target", icon: "shield" },
    { t: "Encryption at rest & in transit", d: "AES-256 / TLS 1.3 across all client data", icon: "lock" },
    { t: "Daily security audits", d: "Automated scans + immediate remediation", icon: "audit" },
    { t: "Compliance audit trail", d: "Every advisor action logged and exportable", icon: "trail" },
    { t: "ADV-friendly disclaimers", d: "Custom disclaimer system per advisor", icon: "doc" },
    { t: "Per-client data isolation", d: "No cross-tenant access — ever", icon: "isolate" },
  ];

  const iw = 3.95;
  const ih = 1.85;
  const iStartX = 0.6;
  const iy = 2.4;
  const iGapX = 0.15;
  const iGapY = 0.15;

  items.forEach((it, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = iStartX + col * (iw + iGapX);
    const y = iy + row * (ih + iGapY);

    s.addShape(pres.shapes.RECTANGLE, {
      x, y, w: iw, h: ih,
      fill: { color: C.white }, line: { color: C.borderLight, width: 0.75 },
      shadow: { type: "outer", color: "000000", blur: 6, offset: 2, angle: 90, opacity: 0.06 }
    });
    // Icon circle
    s.addShape(pres.shapes.OVAL, {
      x: x + 0.3, y: y + 0.4, w: 0.7, h: 0.7,
      fill: { color: C.blue }, line: { type: "none" }
    });
    s.addText("✓", {
      x: x + 0.3, y: y + 0.4, w: 0.7, h: 0.7,
      fontSize: 26, fontFace: FONT_BODY, color: C.gold, bold: true, align: "center", valign: "middle", margin: 0
    });

    // Title
    s.addText(it.t, {
      x: x + 1.2, y: y + 0.35, w: iw - 1.4, h: 0.45,
      fontSize: 16, fontFace: FONT_HEAD, color: C.navyHeading, bold: true, margin: 0
    });
    // Description
    s.addText(it.d, {
      x: x + 1.2, y: y + 0.85, w: iw - 1.4, h: 0.85,
      fontSize: 12, fontFace: FONT_BODY, color: C.textWarm, margin: 0
    });
  });

  // Bottom callout
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 6.55, w: 12.13, h: 0.4,
    fill: { color: C.navyHeading }, line: { type: "none" }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 6.55, w: 0.08, h: 0.4,
    fill: { color: C.gold }, line: { type: "none" }
  });
  s.addText([
    { text: "Want a security review for your firm? ", options: { color: C.white } },
    { text: "I'll do it personally — and fix anything you find.", options: { color: C.gold, bold: true } }
  ], {
    x: 0.85, y: 6.55, w: 11.8, h: 0.4,
    fontSize: 12, fontFace: FONT_BODY, italic: true, valign: "middle", margin: 0
  });

  addFooterLight(s, 13);
}

// ============================================================
// SLIDE 14 — GET STARTED (CTA)
// ============================================================
function slide14_CTA() {
  const s = pres.addSlide();
  s.background = { color: C.navyDeep };

  // Decorative gold L-shape
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 13.333, h: 0.4, fill: { color: C.gold }, line: { type: "none" }
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.4, h: 7.5, fill: { color: C.gold }, line: { type: "none" }
  });

  addEyebrow(s, "Get Started", 0.85, 0.7, C.goldLight);

  s.addText("Activate your free advisor account today.", {
    x: 0.85, y: 1.05, w: 12, h: 0.95,
    fontSize: 38, fontFace: FONT_HEAD, color: C.white, bold: true, margin: 0
  });
  s.addText([
    { text: "We'll import your client roster ", options: { color: C.textOnDark } },
    { text: "together", options: { color: C.gold, italic: true, bold: true } },
    { text: " on our demo call.", options: { color: C.textOnDark } }
  ], {
    x: 0.85, y: 1.95, w: 12, h: 0.7,
    fontSize: 26, fontFace: FONT_HEAD, italic: true, margin: 0
  });

  // 3-step roadmap
  const steps = [
    { n: "1", t: "Sign up free", d: "retiremore.com/advisor — 2 minutes, no card." },
    { n: "2", t: "Schedule your demo", d: "Pick a 30-min slot that works. Bring your roster." },
    { n: "3", t: "Import together", d: "We map your CSV live. Your clients are onboarded the same day." },
  ];
  const sw2 = 3.95;
  const sx = 0.85;
  const sy = 3.4;

  steps.forEach((st, i) => {
    const x = sx + i * (sw2 + 0.2);
    s.addShape(pres.shapes.RECTANGLE, {
      x, y: sy, w: sw2, h: 2.3,
      fill: { color: "3A4D7A" }, line: { color: C.gold, width: 1 },
      shadow: { type: "outer", color: "000000", blur: 10, offset: 3, angle: 90, opacity: 0.35 }
    });
    s.addShape(pres.shapes.OVAL, {
      x: x + 0.35, y: sy + 0.3, w: 0.7, h: 0.7,
      fill: { color: C.gold }, line: { type: "none" }
    });
    s.addText(st.n, {
      x: x + 0.35, y: sy + 0.3, w: 0.7, h: 0.7,
      fontSize: 24, fontFace: FONT_HEAD, color: C.navyDeep, bold: true, align: "center", valign: "middle", margin: 0
    });
    s.addText(st.t, {
      x: x + 0.35, y: sy + 1.05, w: sw2 - 0.7, h: 0.4,
      fontSize: 18, fontFace: FONT_HEAD, color: C.white, bold: true, margin: 0
    });
    s.addText(st.d, {
      x: x + 0.35, y: sy + 1.5, w: sw2 - 0.7, h: 0.75,
      fontSize: 12, fontFace: FONT_BODY, color: C.textMutedOnDark, italic: true, margin: 0
    });
  });

  // Contact bar
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.85, y: 6.05, w: 12.0, h: 0.95,
    fill: { color: C.gold }, line: { type: "none" }
  });
  s.addText("Eddie Appell", {
    x: 1.1, y: 6.15, w: 4, h: 0.4,
    fontSize: 16, fontFace: FONT_HEAD, color: C.navyDeep, bold: true, margin: 0
  });
  s.addText("Founder & CEO, RetireMore", {
    x: 1.1, y: 6.55, w: 4, h: 0.35,
    fontSize: 12, fontFace: FONT_BODY, color: C.navyDeep, italic: true, margin: 0
  });
  s.addText([
    { text: "retiremore.com/advisor", options: { color: C.navyDeep, bold: true } },
  ], {
    x: 5.5, y: 6.3, w: 4, h: 0.4,
    fontSize: 16, fontFace: FONT_BODY, align: "center", valign: "middle", margin: 0
  });
  s.addText([
    { text: "eddie@retiremore.com", options: { color: C.navyDeep, bold: true } },
  ], {
    x: 9.0, y: 6.3, w: 3.5, h: 0.4,
    fontSize: 16, fontFace: FONT_BODY, align: "center", valign: "middle", margin: 0
  });
}

// ============================================================
// SLIDE 15 — Q&A / THANK YOU
// ============================================================
function slide15_QA() {
  const s = pres.addSlide();
  s.background = { color: C.navyDeep };

  // Centered logo
  s.addImage({
    path: LOGO_WHITE,
    x: 4.0, y: 1.5, w: 5.3, h: 1.0,
    sizing: { type: "contain", w: 5.3, h: 1.0 }
  });

  // Big "Questions?"
  s.addText("Questions?", {
    x: 0, y: 3.0, w: 13.333, h: 1.5,
    fontSize: 96, fontFace: FONT_HEAD, color: C.gold, bold: true, italic: true, align: "center", margin: 0
  });

  // Tagline divider
  s.addShape(pres.shapes.LINE, {
    x: 5.5, y: 4.7, w: 2.3, h: 0,
    line: { color: C.gold, width: 2 }
  });
  s.addText("More income.  More purpose.  More clarity.", {
    x: 0, y: 4.85, w: 13.333, h: 0.5,
    fontSize: 18, fontFace: FONT_BODY, color: C.white, italic: true, align: "center", margin: 0
  });

  // Bottom contact line
  s.addText([
    { text: "Eddie Appell", options: { color: C.gold, bold: true } },
    { text: "  •  Founder & CEO  •  ", options: { color: C.textMutedOnDark } },
    { text: "eddie@retiremore.com", options: { color: C.gold, bold: true } },
    { text: "  •  ", options: { color: C.textMutedOnDark } },
    { text: "retiremore.com/advisor", options: { color: C.gold, bold: true } },
  ], {
    x: 0, y: 6.3, w: 13.333, h: 0.5,
    fontSize: 14, fontFace: FONT_BODY, align: "center", margin: 0
  });
}

// ============================================================
// BUILD
// ============================================================
slide1_Title();
slide2_Conversation();
slide3_Gap();
slide4_Introducing();
slide5_Tools();
slide6_AIPlan();
slide7_CoBranded();
slide8_Dashboard();
slide9_Onboarding();
slide10_Directory();
slide11_Practice();
slide12_Pricing();
slide13_Security();
slide14_CTA();
slide15_QA();

pres.writeFile({ fileName: "RetireMore-CFP-Pitch-Deck.pptx" })
  .then((file) => console.log("✅ Generated: " + file));
