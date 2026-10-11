import { img, l, type Finish, type Material } from "../types";

export const FINISHES: Finish[] = [
  {
    slug: "walnut",
    name: l("Smoked Walnut", "جوز مدخّن"),
    text: l("Warm, deep and enveloping. Our most requested finish.", "دافئ وعميق ومحتضن. التشطيب الأكثر طلباً لدينا."),
    image: img("switch-walnut", l("Kitchen in smoked walnut with a grey stone island", "مطبخ من الجوز المدخّن مع جزيرة حجرية رمادية")),
    swatch: img("material-smoked-walnut", l("Smoked walnut veneer", "قشرة جوز مدخّن")),
  },
  {
    slug: "marble",
    name: l("Calacatta Marble", "رخام كالاكاتا"),
    text: l("Bold veining with continuous grain across every door.", "عروق جريئة تمتد متصلة عبر كل الأبواب."),
    image: img("switch-marble", l("The same kitchen clad in Calacatta marble", "المطبخ نفسه مكسو برخام كالاكاتا")),
    swatch: img("material-calacatta", l("Calacatta marble", "رخام كالاكاتا")),
  },
  {
    slug: "black",
    name: l("Velvet Black", "أسود مخملي"),
    text: l("Super-matte lacquer that absorbs light and hides fingerprints.", "لّك فائق المطفأ يمتص الضوء ويخفي البصمات."),
    image: img("switch-black", l("The same kitchen in matte black lacquer", "المطبخ نفسه بلّك أسود مطفأ")),
    swatch: img("material-matte-black", l("Matte black lacquer", "لّك أسود مطفأ")),
  },
  {
    slug: "oak",
    name: l("Natural Oak", "بلوط طبيعي"),
    text: l("Light, calm and timeless, with a matte oiled finish.", "فاتح وهادئ وخالد، بتشطيب زيتي مطفأ."),
    image: img("switch-oak", l("The same kitchen in natural oak", "المطبخ نفسه من البلوط الطبيعي")),
    swatch: img("material-natural-oak", l("Natural oak veneer", "قشرة بلوط طبيعي")),
  },
];

export const LIBRARY: Material[] = [
  { slug: "nero-marquina", name: l("Nero Marquina", "نيرو ماركينا"), family: l("Marble", "رخام"), text: l("Deep black Spanish marble with fine white veins. Dramatic on islands.", "رخام إسباني أسود عميق بعروق بيضاء رفيعة. مهيب على الجزر."), image: img("material-nero-marquina", l("Nero Marquina marble", "رخام نيرو ماركينا")) },
  { slug: "calacatta", name: l("Calacatta", "كالاكاتا"), family: l("Marble", "رخام"), text: l("Bright white with bold grey and gold veins, book-matched by hand.", "أبيض ساطع بعروق رمادية وذهبية جريئة، تُطابق يدوياً."), image: img("material-calacatta", l("Calacatta marble", "رخام كالاكاتا")) },
  { slug: "smoked-walnut", name: l("Smoked Walnut", "جوز مدخّن"), family: l("Timber", "خشب"), text: l("Fumed walnut veneer with continuous grain across every front.", "قشرة جوز مدخّنة بعروق متصلة عبر كل الواجهات."), image: img("material-smoked-walnut", l("Smoked walnut", "جوز مدخّن")) },
  { slug: "natural-oak", name: l("Natural Oak", "بلوط طبيعي"), family: l("Timber", "خشب"), text: l("European oak with a matte oiled finish that softens with age.", "بلوط أوروبي بتشطيب زيتي مطفأ يزداد نعومة مع الزمن."), image: img("material-natural-oak", l("Natural oak", "بلوط طبيعي")) },
  { slug: "velvet-black", name: l("Velvet Black", "أسود مخملي"), family: l("Lacquer", "لّك"), text: l("Anti-fingerprint super-matte lacquer, repairable if scratched.", "لّك فائق المطفأ مقاوم للبصمات، قابل للإصلاح عند الخدش."), image: img("material-matte-black", l("Matte black lacquer", "لّك أسود مطفأ")) },
  { slug: "brushed-brass", name: l("Brushed Brass", "نحاس مصقول"), family: l("Metal", "معدن"), text: l("Solid brass handles and trims that develop a soft patina.", "مقابض وحواف من النحاس الصلب تكتسب لمعة عتيقة ناعمة."), image: img("material-brushed-brass", l("Brushed brass", "نحاس مصقول")) },
];
