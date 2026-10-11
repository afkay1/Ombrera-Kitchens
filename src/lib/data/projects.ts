import { img, l, type Project } from "../types";

export const PROJECTS: Project[] = [
  {
    slug: "al-nakheel-villa",
    name: l("Al Nakheel Villa", "فيلا النخيل"),
    location: l("Riyadh, Saudi Arabia", "الرياض، المملكة العربية السعودية"),
    type: l("Renovation", "تجديد"),
    year: "2026",
    size: "28 m²",
    style: "modern-handleless",
    summary: l(
      "A dated villa kitchen rebuilt in smoked walnut and Nero Marquina marble, without moving a single wall.",
      "مطبخ فيلا قديم أُعيد بناؤه بالجوز المدخّن ورخام نيرو ماركينا، دون تحريك أي جدار."
    ),
    story: [
      l(
        "The family loved their home but not their kitchen: glossy beige doors, fluorescent panels and a hood that dominated the room. We kept the walls and the window and redesigned everything inside them.",
        "أحبت العائلة منزلها لكن ليس مطبخها: أبواب بيج لامعة، وإضاءة فلورسنت، وشفاط يطغى على المكان. احتفظنا بالجدران والنافذة وأعدنا تصميم كل ما بداخلها."
      ),
      l(
        "Tall walnut columns now hide the ovens, fridge and pantry. A black marble island with waterfall ends anchors the room, and a recessed ceiling with warm coves replaced the old panels.",
        "تُخفي الأعمدة الطويلة من الجوز الآن الأفران والثلاجة والمخزن. وتتوسط المكان جزيرة من الرخام الأسود بطرفين منسدلين، وحلّ سقف غائر بإضاءة دافئة مكان الألواح القديمة."
      ),
    ],
    facts: [
      { label: l("Duration", "المدة"), value: l("12 weeks", "١٢ أسبوعاً") },
      { label: l("Materials", "الخامات"), value: l("Smoked walnut, Nero Marquina, brushed brass", "جوز مدخّن، نيرو ماركينا، نحاس مصقول") },
      { label: l("Appliances", "الأجهزة"), value: l("Fully integrated, ceiling extraction", "مدمجة بالكامل، شفط من السقف") },
    ],
    hero: img("project-al-nakheel-after", l("Renovated walnut kitchen with a black marble island", "مطبخ مجدد من الجوز مع جزيرة رخام أسود")),
    wide: [img("project-al-nakheel-wide-01", l("Walnut oven wall and marble island with stools", "جدار أفران من الجوز وجزيرة رخامية مع مقاعد"))],
    details: [
      img("project-al-nakheel-detail-01", l("Waterfall end of the Nero Marquina island", "الطرف المنسدل لجزيرة نيرو ماركينا")),
      img("project-al-nakheel-detail-02", l("Walnut pantry with lit oak shelves", "مخزن من الجوز برفوف بلوط مضاءة")),
    ],
    before: img("project-al-nakheel-before", l("The original kitchen before renovation", "المطبخ الأصلي قبل التجديد")),
    after: img("project-al-nakheel-after", l("The kitchen after renovation", "المطبخ بعد التجديد")),
  },
  {
    slug: "obhur-beach-house",
    name: l("Obhur Beach House", "بيت أبحر الشاطئي"),
    location: l("Jeddah, Saudi Arabia", "جدة، المملكة العربية السعودية"),
    type: l("Beach house", "بيت شاطئي"),
    year: "2026",
    size: "34 m²",
    style: "japandi",
    summary: l(
      "A sunset kitchen on the Red Sea in bleached oak and white travertine, open to the terrace.",
      "مطبخ الغروب على البحر الأحمر من البلوط المبيّض والترافرتين الأبيض، مفتوح على التراس."
    ),
    story: [
      l(
        "Facing west over the Red Sea, this kitchen is designed for the golden hour. Sliding glass walls disappear completely, so cooking and the terrace become one space.",
        "يطل هذا المطبخ غرباً على البحر الأحمر وقد صُمم لساعة الغروب. تختفي الجدران الزجاجية المنزلقة تماماً، فيصبح الطهي والتراس مساحة واحدة."
      ),
      l(
        "We chose bleached oak and white travertine to stay cool under strong light, and hid a full pantry behind a flush oak door.",
        "اخترنا البلوط المبيّض والترافرتين الأبيض ليبقيا باردين تحت الضوء القوي، وأخفينا مخزناً كاملاً خلف باب بلوطي مستوٍ."
      ),
    ],
    facts: [
      { label: l("Duration", "المدة"), value: l("10 weeks", "١٠ أسابيع") },
      { label: l("Materials", "الخامات"), value: l("Bleached oak, white travertine, brushed brass", "بلوط مبيّض، ترافرتين أبيض، نحاس مصقول") },
      { label: l("Feature", "الميزة"), value: l("Full-height sliding glass to the terrace", "زجاج منزلق كامل الارتفاع إلى التراس") },
    ],
    hero: img("project-obhur-hero", l("Beach house kitchen at sunset facing the Red Sea", "مطبخ بيت شاطئي عند الغروب مطل على البحر الأحمر")),
    wide: [
      img("project-obhur-wide-01", l("Kitchen seen from the terrace dining table at dusk", "المطبخ من طاولة التراس عند الغسق")),
      img("project-obhur-wide-02", l("Oak pantry wall with a hidden door ajar", "جدار مخزن من البلوط مع باب مخفي مفتوح")),
    ],
    details: [
      img("project-obhur-detail-01", l("Travertine sink edge with a brass tap", "حافة حوض من الترافرتين مع صنبور نحاسي")),
      img("project-obhur-detail-02", l("Fresh fish, mint water and sea salt on travertine", "سمك طازج وماء بالنعناع وملح بحري على الترافرتين")),
    ],
  },
  {
    slug: "marina-sky-residence",
    name: l("Marina Sky Residence", "مسكن مارينا سكاي"),
    location: l("Dubai, UAE", "دبي، الإمارات"),
    type: l("Penthouse", "بنتهاوس"),
    year: "2026",
    size: "46 m²",
    style: "italian-luxury",
    summary: l(
      "A night-time penthouse kitchen in black marble, bronze and smoked glass above Dubai Marina.",
      "مطبخ بنتهاوس ليلي من الرخام الأسود والبرونز والزجاج المدخّن فوق دبي مارينا."
    ),
    story: [
      l(
        "The owner hosts late and often. We designed the kitchen to look its best after dark: bronze inlay lines in the marble, a lit wine wall and glass cabinets that mirror the skyline.",
        "يستقبل المالك ضيوفه كثيراً وحتى وقت متأخر، فصممنا المطبخ ليبدو في أجمل حالاته بعد حلول الظلام: خطوط برونزية في الرخام، وجدار نبيذ مضاء، وخزائن زجاجية تعكس أفق المدينة."
      ),
      l(
        "A bar extension seats three, and the whole kitchen opens to a dining room that faces the water.",
        "يتسع امتداد البار لثلاثة أشخاص، وينفتح المطبخ كله على غرفة طعام تطل على الماء."
      ),
    ],
    facts: [
      { label: l("Duration", "المدة"), value: l("14 weeks", "١٤ أسبوعاً") },
      { label: l("Materials", "الخامات"), value: l("Black marble, bronze, smoked glass", "رخام أسود، برونز، زجاج مدخّن") },
      { label: l("Feature", "الميزة"), value: l("Climate-controlled wine wall", "جدار نبيذ بتحكم مناخي") },
    ],
    hero: img("project-marina-hero", l("Penthouse kitchen at night with the Dubai skyline", "مطبخ بنتهاوس ليلاً مع أفق دبي")),
    wide: [
      img("project-marina-wide-01", l("Black marble bar and lit wine wall", "بار من الرخام الأسود وجدار نبيذ مضاء")),
      img("project-marina-wide-02", l("Kitchen and dining area at blue hour", "المطبخ وغرفة الطعام في الساعة الزرقاء")),
    ],
    details: [
      img("project-marina-detail-01", l("Bronze inlay lines in a black marble island", "خطوط برونزية مدمجة في جزيرة رخام أسود")),
      img("project-marina-detail-02", l("Smoked glass cabinet with crystal and a decanter", "خزانة زجاج مدخّن مع كريستال ودورق")),
    ],
  },
  {
    slug: "salmiya-townhouse",
    name: l("Salmiya Townhouse", "تاون هاوس السالمية"),
    location: l("Kuwait City, Kuwait", "مدينة الكويت، الكويت"),
    type: l("Townhouse", "تاون هاوس"),
    year: "2026",
    size: "31 m²",
    style: "gulf-majlis",
    summary: l(
      "An earthy courtyard kitchen in terracotta microcement, fluted oak and Verde Alpi marble.",
      "مطبخ ترابي مطل على الفناء من المايكروسمنت الطيني والبلوط المضلّع ورخام فيردي ألبي."
    ),
    story: [
      l(
        "Built around an olive tree courtyard, this kitchen trades black and white for colour: terracotta walls, green marble and warm fluted oak.",
        "بُني هذا المطبخ حول فناء فيه شجرة زيتون، واستبدل الأبيض والأسود بالألوان: جدران طينية ورخام أخضر وبلوط مضلّع دافئ."
      ),
      l(
        "A built-in breakfast nook under a woven pendant became the family's favourite corner of the house.",
        "تحوّلت زاوية الإفطار المدمجة تحت المصباح المجدول إلى الركن المفضل للعائلة في البيت."
      ),
    ],
    facts: [
      { label: l("Duration", "المدة"), value: l("11 weeks", "١١ أسبوعاً") },
      { label: l("Materials", "الخامات"), value: l("Terracotta microcement, fluted oak, Verde Alpi", "مايكروسمنت طيني، بلوط مضلّع، فيردي ألبي") },
      { label: l("Feature", "الميزة"), value: l("Courtyard arch and breakfast nook", "قوس الفناء وزاوية الإفطار") },
    ],
    hero: img("project-salmiya-hero", l("Terracotta kitchen with green marble island and courtyard arch", "مطبخ طيني بجزيرة رخام أخضر وقوس على الفناء")),
    wide: [
      img("project-salmiya-wide-01", l("Kitchen seen through the courtyard arch and olive branches", "المطبخ من خلال قوس الفناء وأغصان الزيتون")),
      img("project-salmiya-wide-02", l("Breakfast nook with a woven pendant", "زاوية الإفطار مع مصباح مجدول")),
    ],
    details: [
      img("project-salmiya-detail-01", l("Green marble meeting terracotta microcement", "رخام أخضر يلتقي بالمايكروسمنت الطيني")),
      img("project-salmiya-detail-02", l("Fluted oak door with a brass knob and herbs", "باب بلوط مضلّع بمقبض نحاسي وأعشاب")),
    ],
  },
];

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);
