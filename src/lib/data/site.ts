import { l, type L } from "../types";

export const BRAND = {
  name: l("Ombrera Kitchens", "أومبريرا للمطابخ"),
  tagline: l("Kitchens with depth.", "مطابخ لها عمق."),
  email: "studio@ombrera.example",
  phone: "+966 11 555 0244",
  phoneHref: "tel:+966115550244",
  whatsapp: "+966 50 555 0244",
  whatsappNumber: "966505550244",
  address: l("Takhassusi Street, Al Mohammadiyah, Riyadh 12363, Saudi Arabia", "شارع التخصصي، المحمدية، الرياض ١٢٣٦٣، المملكة العربية السعودية"),
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Takhassusi+Street+Al+Mohammadiyah+Riyadh",
  hours: [
    { days: l("Saturday – Thursday", "السبت – الخميس"), time: l("10:00 – 21:00", "١٠:٠٠ – ٢١:٠٠") },
    { days: l("Friday", "الجمعة"), time: l("16:00 – 21:00", "١٦:٠٠ – ٢١:٠٠") },
  ],
};

export const NAV: { href: string; label: L }[] = [
  { href: "/styles", label: l("Styles", "الأنماط") },
  { href: "/layouts", label: l("Layouts", "التصاميم") },
  { href: "/materials", label: l("Materials", "الخامات") },
  { href: "/projects", label: l("Projects", "المشاريع") },
  { href: "/showroom", label: l("Showroom", "المعرض") },
];

export const UI = {
  book: l("Book a consultation", "احجز استشارة"),
  bookShort: l("Consultation", "استشارة"),
  explore: l("Explore", "اكتشف"),
  exploreStyles: l("Explore the styles", "اكتشف الأنماط"),
  viewStyle: l("View style", "عرض النمط"),
  viewProject: l("View project", "عرض المشروع"),
  allProjects: l("All projects", "كل المشاريع"),
  allStyles: l("All styles", "كل الأنماط"),
  allLayouts: l("Compare layouts", "قارن التصاميم"),
  allMaterials: l("Material library", "مكتبة الخامات"),
  visitShowroom: l("Visit the showroom", "زر المعرض"),
  nextStyle: l("Next style", "النمط التالي"),
  nextProject: l("Next project", "المشروع التالي"),
  day: l("Day", "نهار"),
  night: l("Night", "ليل"),
  lighting: l("Lighting", "الإضاءة"),
  before: l("Before", "قبل"),
  after: l("After", "بعد"),
  dragCompare: l("Drag to compare", "اسحب للمقارنة"),
  finish: l("Finish", "التشطيب"),
  menu: l("Menu", "القائمة"),
  close: l("Close", "إغلاق"),
  langSwitch: l("عربي", "EN"),
  langLabel: l("Switch to Arabic", "Switch to English"),
  skip: l("Skip to content", "انتقل إلى المحتوى"),
  home: l("Home", "الرئيسية"),
  location: l("Location", "الموقع"),
  type: l("Type", "النوع"),
  year: l("Year", "السنة"),
  size: l("Size", "المساحة"),
  style: l("Style", "النمط"),
  palette: l("Palette", "لوحة الخامات"),
  bestFor: l("Best for", "الأنسب لـ"),
  idealSize: l("Ideal space", "المساحة المثالية"),
  gallery: l("Gallery", "المعرض"),
  details: l("Details", "التفاصيل"),
  scroll: l("Scroll", "مرّر"),
  notFoundTitle: l("This kitchen hasn't been designed yet.", "هذا المطبخ لم يُصمَّم بعد."),
  notFoundText: l("The page you are looking for does not exist or has moved.", "الصفحة التي تبحث عنها غير موجودة أو تم نقلها."),
  backHome: l("Back to home", "العودة إلى الرئيسية"),
  rights: l("© 2026 Ombrera Kitchens. A MYFRIX concept project.", "© ٢٠٢٦ أومبريرا للمطابخ. مشروع تصوري من MYFRIX."),
  footerLine: l("Designed in Riyadh. Built to the millimetre.", "صُممت في الرياض. صُنعت بدقة المليمتر."),
  whatsapp: l("WhatsApp", "واتساب"),
  call: l("Call", "اتصل"),
  write: l("Email", "البريد"),
  visit: l("Visit", "زيارة"),
  hours: l("Opening hours", "ساعات العمل"),
  directions: l("Get directions", "احصل على الاتجاهات"),
};

export const HOME = {
  heroLabel: l("Kitchen design studio · Riyadh", "استوديو تصميم مطابخ · الرياض"),
  heroTitle: l("Kitchens with Depth.", "مطابخ لها عمق."),
  heroText: l(
    "Bespoke kitchens in stone, timber and brass, designed around the way you cook, gather and host.",
    "مطابخ مصممة خصيصاً من الحجر والخشب والنحاس، حول طريقتك في الطهي والاجتماع والضيافة."
  ),
  hotspots: [
    {
      x: 50, y: 70,
      title: l("Nero Marquina island", "جزيرة من رخام نيرو ماركينا"),
      text: l("Cut from a single slab, with the veins running down both waterfall ends.", "مقطوعة من لوح واحد، تمتد عروقها على الطرفين المنسدلين."),
    },
    {
      x: 50, y: 14,
      title: l("Hidden extraction", "شفط مخفي"),
      text: l("A ceiling extractor keeps the view clear and the room silent.", "شفاط في السقف يُبقي المشهد مفتوحاً والمكان هادئاً."),
    },
    {
      x: 58, y: 37,
      title: l("Layered light", "إضاءة متدرجة"),
      text: l("A brass linear pendant and concealed LEDs, dimmable from day to dinner.", "مصباح نحاسي طولي وإضاءة مخفية، قابلة للتعتيم من النهار حتى العشاء."),
    },
  ],
  statement: l(
    "We believe a kitchen should feel like architecture: calm in daylight, dramatic at night, and built so precisely that you only notice how good it feels.",
    "نؤمن أن المطبخ يجب أن يكون عمارة: هادئاً في النهار، مهيباً في الليل، ومصنوعاً بدقة تجعلك لا تلاحظ إلا كم هو مريح."
  ),
  stylesLabel: l("Six kitchen styles", "ستة أنماط للمطابخ"),
  stylesTitle: l("Find the kitchen that feels like you.", "اكتشف المطبخ الذي يشبهك."),
  switchLabel: l("Material switcher", "مبدّل الخامات"),
  switchTitle: l("One kitchen. Four characters.", "مطبخ واحد. أربع شخصيات."),
  switchText: l("Choose a finish and watch the same kitchen change mood.", "اختر تشطيباً وشاهد المطبخ نفسه يغيّر طابعه."),
  layoutsLabel: l("Layouts", "التصاميم"),
  layoutsTitle: l("The right shape for every room.", "الشكل المناسب لكل مساحة."),
  layoutsText: l("We plan every kitchen around movement first: where you prepare, cook, clean and talk.", "نخطط كل مطبخ حول الحركة أولاً: أين تحضّر وتطهو وتنظّف وتتحدث."),
  renoLabel: l("Before & after", "قبل وبعد"),
  renoTitle: l("From tired to timeless in twelve weeks.", "من مطبخ متعب إلى مطبخ خالد في اثني عشر أسبوعاً."),
  renoText: l(
    "Al Nakheel Villa kept its walls and window. Everything else we redrew: walnut, black marble, hidden appliances and light.",
    "احتفظت فيلا النخيل بجدرانها ونافذتها، وأعدنا رسم كل ما عدا ذلك: الجوز والرخام الأسود والأجهزة المخفية والإضاءة."
  ),
  projectsLabel: l("Selected projects", "مشاريع مختارة"),
  projectsTitle: l("Kitchens across the Gulf.", "مطابخ في أرجاء الخليج."),
  detailsLabel: l("In the details", "في التفاصيل"),
  detailsTitle: l("What you touch every day, made to last.", "ما تلمسه كل يوم، مصنوع ليدوم."),
  detailsItems: [
    { title: l("Drawers", "الأدراج"), text: l("Solid walnut boxes, oak organisers and soft-close runners rated for 80 kg.", "صناديق من الجوز الصلب ومنظمات من البلوط ومجارٍ هادئة الإغلاق تحمل ٨٠ كغ.") },
    { title: l("Taps & sinks", "الصنابير والمغاسل"), text: l("Brushed brass mixers above undermounted sinks cut into the stone.", "خلاطات نحاسية مصقولة فوق أحواض مثبتة أسفل الحجر.") },
    { title: l("Light", "الإضاءة"), text: l("Warm 2700K lines hidden in shelves, plinths and niches.", "خطوط إضاءة دافئة ٢٧٠٠ كلفن مخفية في الرفوف والقواعد والتجاويف.") },
  ],
  stats: [
    { value: 340, suffix: "+", label: l("Kitchens delivered", "مطبخ منجز") },
    { value: 12, suffix: "", label: l("Weeks, design to install", "أسبوعاً من التصميم إلى التركيب") },
    { value: 10, suffix: "", label: l("Year guarantee", "سنوات ضمان") },
  ],
  processLabel: l("How we work", "كيف نعمل"),
  processTitle: l("Four steps, one designer.", "أربع مراحل، ومصمم واحد."),
  showroomLabel: l("The showroom", "المعرض"),
  showroomTitle: l("Open the drawers. Touch the stone.", "افتح الأدراج. والمس الحجر."),
  showroomText: l(
    "Twelve full-scale kitchens and a wall of more than three hundred finishes in Al Mohammadiyah, Riyadh.",
    "اثنا عشر مطبخاً بالحجم الحقيقي وجدار يضم أكثر من ثلاثمئة تشطيب في حي المحمدية بالرياض."
  ),
  testimonial: {
    quote: l(
      "We gave Ombrera an old kitchen and a long wish list. They came back with a room our whole family now lives in.",
      "قدمنا لأومبريرا مطبخاً قديماً وقائمة طويلة من الأمنيات، فأعادوا لنا غرفة تعيش فيها عائلتنا كلها الآن."
    ),
    name: l("Noura A.", "نورة ع."),
    project: l("Al Nakheel Villa, Riyadh", "فيلا النخيل، الرياض"),
  },
  ctaTitle: l("Let's design your kitchen.", "لنصمم مطبخك."),
  ctaText: l(
    "Book a free consultation at the showroom or at your home. A designer will reply within one working day.",
    "احجز استشارة مجانية في المعرض أو في منزلك. سيرد عليك أحد المصممين خلال يوم عمل واحد."
  ),
};

export const PROCESS: { title: L; text: L }[] = [
  { title: l("Consult", "الاستشارة"), text: l("We visit your home, measure the room and listen to how you cook and host.", "نزور منزلك ونقيس المساحة ونستمع إلى طريقتك في الطهي والضيافة.") },
  { title: l("Design", "التصميم"), text: l("Plans, elevations, realistic renders and real samples, revised until it is right.", "مخططات وواجهات وتصورات واقعية وعينات حقيقية، نعدّلها حتى تصبح كما يجب.") },
  { title: l("Craft", "التصنيع"), text: l("Built in our Riyadh workshop, with stone templated and cut on site.", "نصنعها في مشغلنا بالرياض، ويُقاس الحجر ويُقص في الموقع.") },
  { title: l("Install", "التركيب"), text: l("Our own team installs in days, not weeks, and returns after three months to check.", "يركّبها فريقنا الخاص في أيام لا أسابيع، ويعود بعد ثلاثة أشهر للتأكد.") },
];

export const SHOWROOM = {
  heroLabel: l("Showroom · Riyadh", "المعرض · الرياض"),
  heroTitle: l("See It, Touch It, Cook In It.", "شاهده، المسه، واطهُ فيه."),
  heroText: l("Twelve working kitchens under one roof, open six days a week.", "اثنا عشر مطبخاً عاملاً تحت سقف واحد، مفتوحة ستة أيام في الأسبوع."),
  introLabel: l("Inside", "من الداخل"),
  introTitle: l("Walk through every style in a single visit.", "تجوّل بين كل الأنماط في زيارة واحدة."),
  introText: l(
    "From Japandi calm to Italian marble drama, each kitchen is fully working, so you can open, close, cook and compare.",
    "من هدوء الجاباندي إلى فخامة الرخام الإيطالي، كل مطبخ يعمل بالكامل، فتستطيع أن تفتح وتغلق وتطهو وتقارن."
  ),
  steps: [
    { title: l("Book a slot", "احجز موعداً"), text: l("Choose a time online or by WhatsApp. Visits last about an hour.", "اختر موعداً عبر الموقع أو واتساب. تستمر الزيارة نحو ساعة.") },
    { title: l("Meet your designer", "قابل مصممك"), text: l("Bring photos or plans. We prepare samples before you arrive.", "أحضر صوراً أو مخططات. نجهّز العينات قبل وصولك.") },
    { title: l("Leave with a direction", "غادر وأنت تعرف الاتجاه"), text: l("A first sketch, a material shortlist and an honest price range.", "رسم أولي وقائمة مختصرة من الخامات ونطاق سعري واضح.") },
  ],
  materialsLabel: l("Material wall", "جدار الخامات"),
  materialsTitle: l("More than three hundred finishes, side by side.", "أكثر من ثلاثمئة تشطيب، جنباً إلى جنب."),
  materialsText: l("Marbles, quartzites, veneers, lacquers and metals, lit as they will be in your home.", "رخام وكوارتزيت وقشور خشب ولّك ومعادن، مضاءة كما ستكون في منزلك."),
  appliancesLabel: l("Appliances", "الأجهزة"),
  appliancesTitle: l("Integrated, invisible, and ready to try.", "مدمجة، غير مرئية، وجاهزة للتجربة."),
  appliancesText: l(
    "Ovens, steam ovens, induction and downdraft extraction are all live in the showroom, so you can cook before you choose.",
    "الأفران وأفران البخار والطهي بالحث والشفط السفلي كلها تعمل في المعرض، لتطهو قبل أن تختار."
  ),
  locationLabel: l("Find us", "موقعنا"),
  locationTitle: l("Al Mohammadiyah, Riyadh.", "المحمدية، الرياض."),
  parking: l("Free parking in front of the showroom.", "مواقف مجانية أمام المعرض."),
};

export const CONSULT = {
  label: l("Free consultation", "استشارة مجانية"),
  title: l("Tell us about your kitchen.", "حدثنا عن مطبخك."),
  text: l(
    "A few details help us prepare. A designer will reply within one working day to arrange a visit at the showroom or your home.",
    "بعض التفاصيل تساعدنا على الاستعداد. سيرد عليك أحد المصممين خلال يوم عمل لترتيب زيارة في المعرض أو في منزلك."
  ),
  orWhatsapp: l("Prefer WhatsApp? Send the same details in one tap.", "تفضّل واتساب؟ أرسل التفاصيل نفسها بضغطة واحدة."),
  sendWhatsapp: l("Send via WhatsApp", "أرسل عبر واتساب"),
};

export const FORM = {
  name: l("Full name", "الاسم الكامل"),
  email: l("Email", "البريد الإلكتروني"),
  phone: l("Phone", "الهاتف"),
  city: l("City", "المدينة"),
  projectType: l("Project", "المشروع"),
  style: l("Preferred style", "النمط المفضل"),
  layout: l("Layout", "التصميم"),
  budget: l("Budget range", "نطاق الميزانية"),
  timeline: l("Timeline", "الجدول الزمني"),
  contactMethod: l("Contact me by", "تواصلوا معي عبر"),
  message: l("Anything else?", "أي تفاصيل أخرى؟"),
  choose: l("Choose…", "اختر…"),
  notSure: l("Not sure yet", "لم أقرر بعد"),
  send: l("Request consultation", "اطلب الاستشارة"),
  sending: l("Sending…", "جارٍ الإرسال…"),
  thanksTitle: l("Thank you.", "شكراً لك."),
  thanksText: l("Your request has reached our studio. A designer will contact you within one working day.", "وصل طلبك إلى الاستوديو. سيتواصل معك أحد المصممين خلال يوم عمل واحد."),
  errRequired: l("Please complete this field.", "يرجى تعبئة هذا الحقل."),
  errEmail: l("Please enter a valid email address.", "يرجى إدخال بريد إلكتروني صحيح."),
  errPhone: l("Please enter a valid phone number.", "يرجى إدخال رقم هاتف صحيح."),
  errGeneric: l("Something went wrong. Please try again or message us on WhatsApp.", "حدث خطأ ما. يرجى المحاولة مرة أخرى أو مراسلتنا عبر واتساب."),
  privacy: l("We only use your details to reply to your request.", "نستخدم بياناتك فقط للرد على طلبك."),
  projectTypes: [l("New home", "منزل جديد"), l("Renovation", "تجديد"), l("Apartment", "شقة"), l("Commercial", "تجاري")],
  budgets: [l("Under SAR 80,000", "أقل من ٨٠٬٠٠٠ ريال"), l("SAR 80,000 – 150,000", "٨٠٬٠٠٠ – ١٥٠٬٠٠٠ ريال"), l("SAR 150,000 – 300,000", "١٥٠٬٠٠٠ – ٣٠٠٬٠٠٠ ريال"), l("Over SAR 300,000", "أكثر من ٣٠٠٬٠٠٠ ريال")],
  timelines: [l("As soon as possible", "في أقرب وقت"), l("Within 3 months", "خلال ٣ أشهر"), l("3 – 6 months", "٣ – ٦ أشهر"), l("Just exploring", "أستكشف فقط")],
  methods: [l("WhatsApp", "واتساب"), l("Phone call", "اتصال هاتفي"), l("Email", "البريد الإلكتروني")],
};
