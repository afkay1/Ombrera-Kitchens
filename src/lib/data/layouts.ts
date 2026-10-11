import { img, l, type Layout } from "../types";

const ROOM = "M10 10 H110 V70 H10 Z";

export const LAYOUTS: Layout[] = [
  {
    slug: "l-shape",
    name: l("L-shape", "حرف L"),
    text: l("Two runs meeting in a corner, leaving the rest of the room open for dining.", "مساران يلتقيان في زاوية، ويبقى باقي المكان مفتوحاً للطعام."),
    bestFor: l("Open-plan rooms with a dining table", "المساحات المفتوحة مع طاولة طعام"),
    size: l("From 10 m²", "من ١٠ م²"),
    pros: [l("Efficient work triangle", "مثلث عمل فعّال"), l("Frees space for a table", "يترك مساحة للطاولة"), l("Easy corner storage", "تخزين سهل في الزاوية")],
    image: img("layout-l-shape", l("L-shaped walnut kitchen with a round dining table", "مطبخ جوز على شكل L مع طاولة طعام دائرية")),
    plan: { walls: ROOM, units: [{ x: 10, y: 10, w: 100, h: 9 }, { x: 10, y: 19, w: 9, h: 51 }] },
  },
  {
    slug: "u-shape",
    name: l("U-shape", "حرف U"),
    text: l("Cabinets on three walls for the most worktop and storage in one room.", "خزائن على ثلاثة جدران لأكبر مساحة عمل وتخزين في غرفة واحدة."),
    bestFor: l("Serious cooks and closed kitchens", "محبو الطهي والمطابخ المغلقة"),
    size: l("From 12 m²", "من ١٢ م²"),
    pros: [l("Maximum storage", "أكبر سعة تخزين"), l("Everything within reach", "كل شيء في متناول اليد"), l("No through traffic", "لا مرور عابر")],
    image: img("layout-u-shape", l("U-shaped black kitchen around a window", "مطبخ أسود على شكل U حول نافذة")),
    plan: { walls: ROOM, units: [{ x: 10, y: 10, w: 100, h: 9 }, { x: 10, y: 19, w: 9, h: 38 }, { x: 101, y: 19, w: 9, h: 38 }] },
  },
  {
    slug: "island",
    name: l("Island", "الجزيرة"),
    text: l("A tall wall of storage facing a freestanding island that becomes the social centre.", "جدار تخزين طويل تقابله جزيرة مستقلة تصبح مركز الاجتماع."),
    bestFor: l("Villas that cook and entertain together", "الفلل التي يجتمع فيها الطهي والضيافة"),
    size: l("From 18 m²", "من ١٨ م²"),
    pros: [l("Seating for guests", "جلسات للضيوف"), l("Two-sided work zone", "منطقة عمل من الجهتين"), l("A natural focal point", "نقطة جذب طبيعية")],
    image: img("layout-island", l("Walnut wall kitchen with a black marble island", "مطبخ بجدار جوز وجزيرة رخام أسود")),
    plan: { walls: ROOM, units: [{ x: 10, y: 10, w: 100, h: 9 }, { x: 34, y: 38, w: 52, h: 14, island: true }] },
  },
  {
    slug: "galley",
    name: l("Galley", "الممر"),
    text: l("Two facing runs in a corridor: the professional chef's layout.", "مساران متقابلان في ممر: تصميم الطهاة المحترفين."),
    bestFor: l("Narrow rooms and apartments", "الغرف الضيقة والشقق"),
    size: l("From 7 m²", "من ٧ م²"),
    pros: [l("Fastest workflow", "أسرع سير عمل"), l("Uses narrow spaces well", "يستغل المساحات الضيقة"), l("Clear zones on each side", "مناطق واضحة على كل جانب")],
    image: img("layout-galley", l("Graphite galley kitchen with a window at the far end", "مطبخ ممر جرافيتي بنافذة في نهايته")),
    plan: { walls: "M32 6 H88 V74 H32 Z", units: [{ x: 32, y: 6, w: 10, h: 68 }, { x: 78, y: 6, w: 10, h: 68 }] },
  },
  {
    slug: "parallel",
    name: l("Parallel", "المتوازي"),
    text: l("A storage wall and a long working island side by side, open to the living room.", "جدار تخزين وجزيرة عمل طويلة متوازيان، مفتوحان على غرفة المعيشة."),
    bestFor: l("Large open-plan living spaces", "مساحات المعيشة المفتوحة الكبيرة"),
    size: l("From 20 m²", "من ٢٠ م²"),
    pros: [l("Cook while facing guests", "اطهُ وأنت تواجه ضيوفك"), l("Hidden appliance wall", "جدار أجهزة مخفي"), l("Long, generous worktop", "سطح عمل طويل وواسع")],
    image: img("layout-parallel", l("Parallel kitchen open to a living area", "مطبخ متوازٍ مفتوح على منطقة المعيشة")),
    plan: { walls: ROOM, units: [{ x: 10, y: 10, w: 100, h: 9 }, { x: 18, y: 40, w: 84, h: 12, island: true }] },
  },
];
