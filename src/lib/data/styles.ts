import { img, l, type KitchenStyle } from "../types";

export const STYLES: KitchenStyle[] = [
  {
    slug: "modern-handleless",
    number: "01",
    name: l("Modern Handleless", "حديث بلا مقابض"),
    tagline: l("Pure lines, nothing to catch the eye but light.", "خطوط نقية، لا شيء يلفت النظر سوى الضوء."),
    intro: l(
      "Flat graphite fronts, finger-pull channels lit from within and a stone island with a razor-thin edge. Modern Handleless is architecture reduced to its essentials.",
      "واجهات مسطحة بلون الجرافيت، وقنوات سحب مضاءة من الداخل، وجزيرة حجرية بحافة رفيعة كالشفرة. الحديث بلا مقابض هو العمارة في أنقى صورها."
    ),
    story: [
      l("Every appliance is integrated behind full-height doors, so the kitchen reads as a single calm wall.", "كل الأجهزة مدمجة خلف أبواب كاملة الارتفاع، فيبدو المطبخ جداراً واحداً هادئاً."),
      l("Thin LED lines in the pull channels double as night lighting and make the doors appear to float.", "خطوط الإضاءة الرفيعة في قنوات السحب تعمل كإضاءة ليلية وتجعل الأبواب تبدو معلّقة."),
    ],
    palette: [l("Graphite lacquer", "لّك جرافيتي"), l("Sintered stone", "حجر ملبّد"), l("Polished concrete", "خرسانة مصقولة"), l("Bronze LED lines", "خطوط إضاءة برونزية")],
    features: [
      { title: l("Lit pull channels", "قنوات سحب مضاءة"), text: l("Recessed grips with warm LED lines replace every handle.", "مقابض غائرة بخطوط إضاءة دافئة تحل محل كل المقابض.") },
      { title: l("12 mm stone edge", "حافة حجرية ١٢ مم"), text: l("Sintered stone worktops as thin as they are strong.", "أسطح من الحجر الملبّد رفيعة بقدر ما هي متينة.") },
      { title: l("Flush induction", "طهي بالحث مستوٍ"), text: l("Hobs set level with the stone for an unbroken surface.", "مواقد مثبتة بمستوى الحجر لسطح متصل.") },
    ],
    bestFor: l("Apartments and contemporary villas that value calm and order.", "الشقق والفلل المعاصرة التي تقدّر الهدوء والنظام."),
    light: false,
    hero: img("style-modern-hero", l("Graphite handleless kitchen with stone island and lit pull channels", "مطبخ جرافيتي بلا مقابض مع جزيرة حجرية وقنوات سحب مضاءة")),
    wide: img("style-modern-wide", l("Full-height graphite cabinet wall with lit channels", "جدار خزائن جرافيتي كامل الارتفاع بقنوات مضاءة")),
    details: [
      img("style-modern-detail-01", l("Recessed finger-pull channel lit by a warm LED line", "قناة سحب غائرة مضاءة بخط دافئ")),
      img("style-modern-detail-02", l("Flush induction hob in a thin stone worktop", "موقد حثّي مستوٍ في سطح حجري رفيع")),
    ],
  },
  {
    slug: "italian-luxury",
    number: "02",
    name: l("Italian Luxury", "الفخامة الإيطالية"),
    tagline: l("Marble as sculpture, bronze as jewellery.", "الرخام منحوتة، والبرونز حُلي."),
    intro: l(
      "An island clad in book-matched Calacatta Viola, bronze-framed glass cabinets and glossy eucalyptus veneer. Italian Luxury is made for kitchens that entertain.",
      "جزيرة مكسوّة برخام كالاكاتا فيولا المتطابق العروق، وخزائن زجاجية بإطارات برونزية، وقشرة أوكالبتوس لامعة. الفخامة الإيطالية لمطابخ الضيافة."
    ),
    story: [
      l("We select the marble slabs in person and dry-lay them so that every vein meets across the island.", "نختار ألواح الرخام بأنفسنا ونرصّها مسبقاً لتلتقي كل العروق على امتداد الجزيرة."),
      l("Glass display cabinets glow from inside, turning crystal and ceramics into part of the architecture.", "تتوهج الخزائن الزجاجية من الداخل، فيصبح الكريستال والخزف جزءاً من العمارة."),
    ],
    palette: [l("Calacatta Viola", "كالاكاتا فيولا"), l("Eucalyptus veneer", "قشرة أوكالبتوس"), l("Antique bronze", "برونز عتيق"), l("Terrazzo", "تيرازو")],
    features: [
      { title: l("Book-matched marble", "رخام متطابق العروق"), text: l("Mirror-image slabs that meet perfectly at every corner.", "ألواح متماثلة تلتقي بإتقان عند كل زاوية.") },
      { title: l("Bronze vitrines", "واجهات برونزية"), text: l("Lit glass cabinets for crystal, china and collections.", "خزائن زجاجية مضاءة للكريستال والخزف والمقتنيات.") },
      { title: l("Statement lighting", "إضاءة لافتة"), text: l("A sculpted bronze linear pendant made to measure.", "مصباح برونزي طولي منحوت حسب المقاس.") },
    ],
    bestFor: l("Grand villas and kitchens that double as a place to host.", "الفلل الكبيرة والمطابخ التي تستقبل الضيوف."),
    light: false,
    hero: img("style-italian-hero", l("Italian kitchen with a Calacatta Viola marble island and bronze glass cabinets", "مطبخ إيطالي بجزيرة من رخام كالاكاتا فيولا وخزائن زجاجية برونزية")),
    wide: img("style-italian-wide", l("Marble island seen from a round dining table with velvet chairs", "الجزيرة الرخامية من طاولة طعام دائرية بكراسٍ مخملية")),
    details: [
      img("style-italian-detail-01", l("Book-matched Calacatta Viola corner", "زاوية من كالاكاتا فيولا متطابقة العروق")),
      img("style-italian-detail-02", l("Bronze-framed glass cabinet with crystal glasses", "خزانة زجاجية بإطار برونزي مع أكواب كريستال")),
    ],
  },
  {
    slug: "japandi",
    number: "03",
    name: l("Japandi", "جاباندي"),
    tagline: l("Quiet wood, soft light, room to breathe.", "خشب هادئ، ضوء ناعم، ومساحة للتنفس."),
    intro: l(
      "Light ash, pale limestone and a charred-wood wall. Japandi blends Japanese restraint with Scandinavian warmth for kitchens that feel like a retreat.",
      "خشب دردار فاتح وحجر جيري شاحب وجدار من الخشب المحروق. يمزج الجاباندي بين الاتزان الياباني والدفء الإسكندنافي لمطابخ تشبه الملاذ."
    ),
    story: [
      l("Slatted fronts filter light and sound, while handleless doors keep the room uncluttered.", "تُرشّح الواجهات الشرائحية الضوء والصوت، وتُبقي الأبواب بلا مقابض المكان مرتباً."),
      l("Everything is kept low and soft so the garden outside becomes the main feature.", "كل شيء منخفض وناعم لتصبح الحديقة في الخارج هي المشهد الرئيسي."),
    ],
    palette: [l("Light ash", "دردار فاتح"), l("Pale limestone", "حجر جيري شاحب"), l("Charred wood", "خشب محروق"), l("Linen", "كتان")],
    features: [
      { title: l("Slatted ash fronts", "واجهات دردار شرائحية"), text: l("Hand-finished slats with concealed push-to-open doors.", "شرائح مشطّبة يدوياً مع أبواب مخفية تُفتح باللمس.") },
      { title: l("Shou sugi ban wall", "جدار شو سوغي بان"), text: l("Charred timber that adds depth and never needs painting.", "خشب محروق يضيف عمقاً ولا يحتاج إلى طلاء أبداً.") },
      { title: l("Honed limestone", "حجر جيري مصقول"), text: l("A soft, warm worktop that ages gently.", "سطح دافئ وناعم يتقدّم في العمر برفق.") },
    ],
    bestFor: l("Homes with gardens, natural light and a love of calm.", "البيوت ذات الحدائق والضوء الطبيعي ومحبي الهدوء."),
    light: true,
    hero: img("style-japandi-hero", l("Japandi kitchen with ash cabinets, limestone island and charred-wood wall", "مطبخ جاباندي بخزائن دردار وجزيرة جيرية وجدار خشب محروق")),
    wide: img("style-japandi-wide", l("Limestone island with wooden stools and a paper screen to the garden", "جزيرة جيرية بمقاعد خشبية وحاجز ورقي إلى الحديقة")),
    details: [
      img("style-japandi-detail-01", l("Slatted ash doors meeting a charred wood panel", "أبواب دردار شرائحية تلتقي بلوح خشب محروق")),
      img("style-japandi-detail-02", l("Teapot and cups on a pale limestone worktop", "إبريق شاي وأكواب على سطح حجري شاحب")),
    ],
  },
  {
    slug: "classic-shaker",
    number: "04",
    name: l("Classic Shaker", "شيكر الكلاسيكي"),
    tagline: l("Timeless panels, honest materials, a kitchen to grow old with.", "ألواح خالدة ومواد صادقة، مطبخ تكبر معه."),
    intro: l(
      "Hand-painted inset Shaker doors in deep forest green, honed white marble and aged brass. Classic Shaker is warm, practical and never out of date.",
      "أبواب شيكر مدمجة مطلية يدوياً بالأخضر الغابي العميق، ورخام أبيض مصقول، ونحاس معتّق. شيكر الكلاسيكي دافئ وعملي ولا يخرج عن الموضة."
    ),
    story: [
      l("Every door is made in solid timber and painted by hand, so colour can be refreshed for decades.", "كل باب مصنوع من الخشب الصلب ومطلي يدوياً، فيمكن تجديد لونه لعقود."),
      l("A butler's pantry keeps everyday clutter out of sight and the main kitchen ready for guests.", "يُبقي مخزن الخدمة الفوضى اليومية بعيداً عن الأنظار والمطبخ الرئيسي جاهزاً للضيوف."),
    ],
    palette: [l("Forest green paint", "طلاء أخضر غابي"), l("Honed Carrara", "كرارا مصقول"), l("Aged brass", "نحاس معتّق"), l("Herringbone oak", "بلوط متعرّج")],
    features: [
      { title: l("Inset doors", "أبواب مدمجة"), text: l("Doors set flush within the frame, the traditional way.", "أبواب مثبتة داخل الإطار بمستوى واحد، بالطريقة التقليدية.") },
      { title: l("Range chimney", "مدخنة الموقد"), text: l("A plastered hood over a full-size range cooker.", "غطاء جصّي فوق موقد كامل الحجم.") },
      { title: l("Butler's pantry", "مخزن الخدمة"), text: l("Open shelving for ceramics, copper and everyday use.", "رفوف مفتوحة للخزف والنحاس والاستخدام اليومي.") },
    ],
    bestFor: l("Family homes that want warmth, colour and a lifetime of use.", "بيوت العائلات التي تريد الدفء واللون واستخداماً مدى الحياة."),
    light: true,
    hero: img("style-shaker-hero", l("Forest green Shaker kitchen with marble worktops and a wooden island", "مطبخ شيكر أخضر بأسطح رخامية وجزيرة خشبية")),
    wide: img("style-shaker-wide", l("Shaker kitchen leading to a butler's pantry with open shelves", "مطبخ شيكر يؤدي إلى مخزن خدمة برفوف مفتوحة")),
    details: [
      img("style-shaker-detail-01", l("Green inset drawer with an aged brass cup handle", "درج أخضر مدمج بمقبض نحاسي معتّق")),
      img("style-shaker-detail-02", l("Fireclay sink with a brass bridge tap in marble", "حوض خزفي مع صنبور نحاسي في الرخام")),
    ],
  },
  {
    slug: "industrial",
    number: "05",
    name: l("Industrial", "الصناعي"),
    tagline: l("Steel, brick and concrete, refined.", "فولاذ وطوب وخرسانة، بلمسة راقية."),
    intro: l(
      "Exposed brick, blackened steel shelving and a monolithic concrete island with a stainless worktop. Industrial gives loft character with luxury precision.",
      "طوب ظاهر ورفوف من الفولاذ المسوّد وجزيرة خرسانية متجانسة بسطح من الستانلس. يمنح الطابع الصناعي روح اللوفت بدقة فاخرة."
    ),
    story: [
      l("Open steel shelving replaces wall cabinets, keeping the brick on show and everything within reach.", "تحل الرفوف الفولاذية المفتوحة محل الخزائن العلوية، فيبقى الطوب ظاهراً وكل شيء في متناول اليد."),
      l("Smoked oak lower cabinets warm up the palette and age beautifully with use.", "تمنح الخزائن السفلية من البلوط المدخّن دفئاً للألوان وتزداد جمالاً مع الاستخدام."),
    ],
    palette: [l("Blackened steel", "فولاذ مسوّد"), l("Polished concrete", "خرسانة مصقولة"), l("Smoked oak", "بلوط مدخّن"), l("Stainless steel", "ستانلس ستيل")],
    features: [
      { title: l("Concrete island", "جزيرة خرسانية"), text: l("Cast in one piece, with a professional stainless prep zone.", "مصبوبة قطعة واحدة مع منطقة تحضير احترافية من الستانلس.") },
      { title: l("Steel shelving", "رفوف فولاذية"), text: l("Bolted into brick, made to carry cast iron and ceramics.", "مثبتة في الطوب، مصنوعة لحمل الحديد الزهر والخزف.") },
      { title: l("Glass partition", "حاجز زجاجي"), text: l("Steel-framed glazing that separates without closing off.", "زجاج بإطار فولاذي يفصل دون أن يغلق.") },
    ],
    bestFor: l("Lofts, townhouses and keen home cooks.", "شقق اللوفت والتاون هاوس ومحبي الطهي."),
    light: false,
    hero: img("style-industrial-hero", l("Industrial loft kitchen with brick wall, steel shelving and concrete island", "مطبخ لوفت صناعي بجدار طوب ورفوف فولاذية وجزيرة خرسانية")),
    wide: img("style-industrial-wide", l("Concrete island with leather stools beside factory windows", "جزيرة خرسانية بمقاعد جلدية بجانب نوافذ المصنع")),
    details: [
      img("style-industrial-detail-01", l("Steel shelf bracket bolted into brick holding ceramic bowls", "حامل رف فولاذي مثبت في الطوب يحمل أوعية خزفية")),
      img("style-industrial-detail-02", l("Concrete island meeting a stainless steel worktop", "جزيرة خرسانية تلتقي بسطح من الستانلس")),
    ],
  },
  {
    slug: "gulf-majlis",
    number: "06",
    name: l("Gulf Majlis Kitchen", "مطبخ المجلس الخليجي"),
    tagline: l("Hospitality at the heart of the home.", "الضيافة في قلب البيت."),
    intro: l(
      "Sand lacquer, travertine, carved arches and brass mashrabiya screens, with a dedicated coffee station for serving guests. Designed for Gulf hospitality.",
      "لّك بلون الرمل وترافرتين وأقواس منحوتة وشاشات مشربية نحاسية، مع ركن مخصص للقهوة لخدمة الضيوف. مصمم لروح الضيافة الخليجية."
    ),
    story: [
      l("A separate coffee and tea station sits within reach of the majlis, with space for dallahs, finjan and dates.", "يقع ركن القهوة والشاي في متناول المجلس، مع مساحة للدلال والفناجين والتمر."),
      l("Mashrabiya screens hide a second working kitchen, so hosting stays graceful while the cooking happens behind.", "تخفي شاشات المشربية مطبخاً خلفياً، فتبقى الضيافة أنيقة بينما يجري الطهي في الخلف."),
    ],
    palette: [l("Sand lacquer", "لّك رملي"), l("Travertine", "ترافرتين"), l("Brass mashrabiya", "مشربية نحاسية"), l("Carved oak", "بلوط منحوت")],
    features: [
      { title: l("Coffee station", "ركن القهوة"), text: l("A dedicated counter for Arabic coffee, tea and dates.", "سطح مخصص للقهوة العربية والشاي والتمر.") },
      { title: l("Mashrabiya screens", "شاشات المشربية"), text: l("Laser-cut brass panels that cast patterned light.", "ألواح نحاسية مقطوعة بالليزر تلقي ظلالاً مزخرفة.") },
      { title: l("Show & back kitchen", "مطبخ عرض وخلفي"), text: l("An elegant front kitchen with a hard-working kitchen behind.", "مطبخ أمامي أنيق ومطبخ عمل في الخلف.") },
    ],
    bestFor: l("Villas that host family and guests every week.", "الفلل التي تستقبل العائلة والضيوف كل أسبوع."),
    light: false,
    hero: img("style-gulf-hero", l("Gulf-style kitchen with travertine island, arches and a brass coffee set", "مطبخ خليجي بجزيرة ترافرتين وأقواس وطقم قهوة نحاسي")),
    wide: img("style-gulf-wide", l("Kitchen opening through a carved arch to a family dining room", "مطبخ ينفتح عبر قوس منحوت على غرفة طعام عائلية")),
    details: [
      img("style-gulf-detail-01", l("Brass mashrabiya panel casting patterned light", "لوح مشربية نحاسي يلقي ظلالاً مزخرفة")),
      img("style-gulf-detail-02", l("Brass dallah, finjan cups and dates on travertine", "دلة نحاسية وفناجين وتمر على الترافرتين")),
    ],
  },
];

export const getStyle = (slug: string) => STYLES.find((s) => s.slug === slug);
