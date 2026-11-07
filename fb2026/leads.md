# לידים – מדידה והפיכה לתלמידים

## המשפך

```
חיפוש / פוסט / easy  →  כניסה לאתר  →  פנייה (וואטסאפ / טלפון / טופס)  →  שיחה עם ברוך  →  שיעור ראשון  →  תלמיד קבוע
        (גוגל)          (page_view)        (whatsapp_click וכו')            (ברוך)             (ברוך)
```

אתה מודד את שלושת השלבים הראשונים. שני האחרונים קורים אצל ברוך, ושם נמצא רוב הכסף. לכן חצי מהעבודה שלך היא לעזור לו לסגור.

## הנתונים

פרויקט Supabase: **fb2026-leads** (`npilufobhgqomgglwwxb`), דרך ה-connector של Supabase, `execute_sql`.
טבלה `lead_events`: `created_at, kind, page, place, source, referrer`. אנונימי לגמרי, בלי שמות ובלי טלפונים.
- `kind`: `page_view`, `whatsapp_click`, `phone_click`, `form_submit`
- `source`: `google`, `facebook`, `easy`, `gbp`, `ai`, `bing`, `direct`, או `utm_source` מהקישור. אם בקישור יש גם `utm_content`, הוא נשמר אחרי נקודתיים: `facebook:review-noa`. לסיכום לפי ערוץ: `split_part(source, ':', 1)`.

שאילתות בסיס (שעון ישראל):

```sql
-- פניות וכניסות לפי מקור, 7 ימים אחרונים מול 7 הימים שלפני
select source,
  count(*) filter (where kind='page_view' and created_at > now()-interval '7 days') as visits,
  count(*) filter (where kind<>'page_view' and created_at > now()-interval '7 days') as leads,
  count(*) filter (where kind<>'page_view' and created_at between now()-interval '14 days' and now()-interval '7 days') as leads_prev
from lead_events group by source order by leads desc;

-- אילו דפים מביאים פניות, ומאיזה מקום בדף
select page, place, kind, count(*) from lead_events
where kind<>'page_view' and created_at > now()-interval '28 days'
group by 1,2,3 order by 4 desc limit 20;

-- דפים עם כניסות בלי פניות (בעיית המרה)
select page, count(*) filter (where kind='page_view') v, count(*) filter (where kind<>'page_view') l
from lead_events where created_at > now()-interval '28 days'
group by page having count(*) filter (where kind='page_view') >= 10 order by l::float/greatest(v,1) asc;
```

הערות: לחיצה על וואטסאפ היא כוונה, לא בהכרח הודעה שנשלחה. מבקרים עם חוסם פרסומות לא נספרים. מספרים קטנים (מתחת ל-10) מדווחים כ"אות", לא כמגמה.

## תיוג קישורים (כדי לדעת מה עבד)

כל קישור לאתר שיוצא ממך מקבל מקור:
- תגובה ראשונה בפייסבוק: `?utm_source=facebook&utm_content=<נושא-הפוסט>`
- פוסט בפרופיל גוגל: `?utm_source=gbp`
- קבוצות פייסבוק מקומיות: `?utm_source=fbgroup`
- טיקטוק / אינסטגרם: `?utm_source=tiktok` / `?utm_source=instagram`
להציע לברוך פעם אחת לעדכן את קישור האתר ב-easy ל-`?utm_source=easy`.

## הפיכת פנייה לתלמיד – מה אתה מכין לברוך

אתה לא שולח שום הודעה לאף אחד. אתה מכין לברוך טקסטים מוכנים, ומשפר אותם לפי מה שהוא מספר לך.

1. **מהירות.** מי שעונה ראשון סוגר. להציע הודעת ברוכים הבאים והודעת "לא זמין" ב-WhatsApp Business (בשעות שיעור), עם הבטחה ריאלית ("אחזור אליך עד הערב").
2. **תשובות מהירות (Quick Replies)** בוואטסאפ, בקול של ברוך: מחיר, איזורים, איך מתחילים (טופס ירוק), אוטומט מול ידני, פיקדון לחיילים משוחררים, פחד מנהיגה.
3. **שאלה שמקדמת.** כל תשובה נגמרת בשאלה שמובילה לשיעור ראשון: "מתי נוח לך השבוע, בוקר או אחה"צ?"
4. **מעקב.** מי שלא ענה: תזכורת עדינה אחרי יום, ואחרונה אחרי 3–4 ימים. לא יותר.
5. **ההורה.** הודעה נפרדת להורה: בטיחות, איסוף מהבית, מורה אחד לאורך כל הדרך, מחיר גלוי.
6. **הוכחה.** בכל שיחה, קישור לביקורות (easy / גוגל) או תמונה של תלמיד שעבר.
7. **התנגדויות.** "יקר" → 40 דקות מלאות, איסוף מהבית, בלי תוספות. "אני פוחד/ת" → המדריך `/madrich/pachad-mineehiga/`. "אוטומט או ידני?" → `/madrich/automat-o-yadani/`.

## השלב החסר: כמה פניות הפכו לתלמידים

את זה רק ברוך יודע. בכל סיכום שבועי שאל אותו שאלה אחת קצרה: "כמה פניות חדשות היו השבוע, וכמה קבעו שיעור ראשון?" כשהוא עונה, רושמים ב-`insights.md`. זה המספר הכי חשוב בכל המערכת.
