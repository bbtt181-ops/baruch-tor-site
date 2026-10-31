// Free Unsplash photos (Unsplash License: free for commercial use, no attribution required).
// TODO: replace with Baruch's own photos; ideally download and self-host in /public/images.
export const heroPhotos = [
  { id: 'photo-1630406144797-821be1f35d75', alt: 'מורה נהיגה ותלמיד ליד רכב' },
  { id: 'photo-1773063449875-332dff62b6e3', alt: 'שיעור נהיגה בתוך הרכב' },
  { id: 'photo-1669941060931-6912c4538ba3', alt: 'רכב בנסיעה ליד שדה' },
  { id: 'photo-1732868809555-e858caee2547', alt: 'רכב לבן בנסיעה ליד יער' },
  { id: 'photo-1671879504770-a55834bc064b', alt: 'רכב קטן בנסיעה על גשר ליד הים' },
  { id: 'photo-1525806189158-f4dd29a9924b', alt: 'רכב כסוף בנסיעה בכביש מתפתל' },
  { id: 'photo-1572401611152-cf63d874b019', alt: 'האצ׳בק אדום בנסיעה בכביש כפרי' },
];
export const unsplash = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=70&w=${w}`;
