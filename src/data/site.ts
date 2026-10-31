// All business facts live here. Both site designs read from this file.
// Rules: never mention driving without a license; 28 lessons = legal minimum, not an average.

export const site = {
  name: 'ברוך תור',
  tagline: 'מורה הנהיגה שלי',
  legalName: 'ברוך תור – מורה נהיגה',
  phoneDisplay: '054-4566181',
  phoneTel: '+972544566181',
  phoneLocal: '0544566181',
  waNumber: '972544566181',
  facebook: '', // TODO: Baruch's Facebook page URL
  baseCity: 'חריש',
  testCity: 'חדרה',
  years: '20+',
  car: 'יונדאי אוטומטית חדשה',
  gear: 'אוטומט',
  price: 180,
  lessonMinutes: 40,
  minLessonsByLaw: 28,
  startAge: '16 וחצי',
  hours: [
    { label: 'ראשון עד חמישי', short: 'א׳–ה׳', open: '06:40', close: '17:20', days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'] },
    { label: 'שישי', short: 'ו׳', open: '06:40', close: '15:20', days: ['Friday'] },
  ],
  closed: 'שבת: סגור',
  areas: ['חריש', 'חדרה', 'בנימינה', 'פרדס חנה-כרכור', 'אור עקיבא', 'קיסריה'],
  areasExtra: 'וכל יישובי האזור',
  geo: { lat: 32.4614, lng: 35.0453 }, // Harish
};

export const wa = (text?: string) =>
  `https://wa.me/${site.waNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const waMsg = {
  general: 'היי ברוך, אשמח לפרטים על שיעורי נהיגה',
  first: 'היי ברוך, אשמח לקבוע שיעור נהיגה',
  harish: 'היי ברוך, אני מחריש ואשמח לפרטים על שיעורי נהיגה',
};

export const steps = [
  { title: 'טופס ירוק ובדיקת עיניים', text: 'ממלאים בקשה לרישיון באתר משרד התחבורה ועוברים בדיקת ראייה. אשלח לכם רשימה מסודרת של מה צריך.' },
  { title: 'תאוריה', text: 'לומדים את חוקי התנועה והתמרורים ועוברים את מבחן התאוריה.' },
  { title: 'שיעורי נהיגה', text: `שיעורים של ${40} דקות על אוטומט, בקצב שלכם. החוק מחייב מינימום של ${28} שיעורים.` },
  { title: 'טסט פנימי', text: 'בודקים יחד שאתם מוכנים באמת, לפני שניגשים לטסט.' },
  { title: 'טסט בחדרה', text: 'הטסט נערך תמיד בחדרה, ולקראתו מתרגלים בעיקר בכבישים של העיר.' },
];

export const faq = [
  { q: 'כמה עולה שיעור נהיגה?', a: `שיעור של ${site.lessonMinutes} דקות עולה ${site.price} ₪. המחיר מלא וגלוי, בלי תוספות.` },
  { q: 'כמה שיעורים צריך עד הטסט?', a: `החוק מחייב מינימום של ${site.minLessonsByLaw} שיעורים של 40 דקות לפני שאפשר לגשת לטסט. מעבר לזה, מספר השיעורים תלוי בקצב של כל תלמיד.` },
  { q: 'מה צריך כדי להתחיל?', a: 'ממלאים באתר משרד התחבורה בקשה לרישיון נהיגה (״טופס ירוק״) ועושים בדיקת עיניים. אחרי זה אפשר לקבוע שיעור ראשון.' },
  { q: 'מאיזה גיל אפשר להתחיל ללמוד?', a: `שיעורי נהיגה מעשיים ברכב פרטי אפשר להתחיל מגיל ${site.startAge}.` },
  { q: 'רישיון על אוטומט מתאים גם לרכב ידני?', a: 'לא. רישיון שהוצא על רכב אוטומטי מאפשר לנהוג ברכב אוטומטי בלבד. היתרון: הלמידה קלה ומהירה יותר, ובדרך כלל צריך פחות שיעורים.' },
  { q: 'איפה נערך הטסט?', a: `הטסט נערך תמיד ב${site.testCity}. לקראתו נתרגל גם בכבישים של ${site.testCity}.` },
  { q: 'מאיפה אתה אוסף?', a: `מהבית, מבית הספר או מהעבודה, ב${site.areas.join(', ')} ${site.areasExtra}.` },
  { q: 'איך קובעים שיעור?', a: `שולחים הודעה בוואטסאפ או מתקשרים ל-${site.phoneDisplay}, וסוגרים יחד את המועד שנוח לכם.` },
];

// City landing pages. Only enabled cities get a page (avoid thin duplicate pages).
export const cities = [
  {
    slug: 'moreh-nehiga-harish',
    name: 'חריש',
    enabled: true,
    title: 'מורה נהיגה בחריש',
    h1: 'מורה נהיגה בחריש',
    lead: 'לומדים בחריש, נבחנים בחדרה. שיעורי נהיגה על אוטומט עם איסוף מהבית, ממורה שמלמד באזור כל יום.',
    body: [
      'חריש היא נקודת הבסיס שלי. אני אוסף אתכם מהבית, מבית הספר או מהעבודה, וחוזרים לאותה נקודה בסוף השיעור.',
      'השיעורים הראשונים נערכים ברחובות השקטים של חריש, עד שמרגישים בנוח עם ההגה. משם עוברים בהדרגה לכבישים בין־עירוניים ולתנועה עירונית.',
      'הטסט נערך תמיד בחדרה, ולכן לקראת הסוף אנחנו מתרגלים שם: צמתים, כיכרות ותנועה עירונית, כדי שביום הטסט שום דבר לא יהיה חדש.',
    ],
  },
  { slug: 'moreh-nehiga-hadera', name: 'חדרה', enabled: false },
  { slug: 'moreh-nehiga-binyamina', name: 'בנימינה', enabled: false },
  { slug: 'moreh-nehiga-pardes-hanna', name: 'פרדס חנה-כרכור', enabled: false },
  { slug: 'moreh-nehiga-or-akiva', name: 'אור עקיבא', enabled: false },
  { slug: 'moreh-nehiga-caesarea', name: 'קיסריה', enabled: false },
];
