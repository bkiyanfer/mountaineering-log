/* ============================================================
   summits.js — summit content data
   To add a photo: put the file in public/media/summits/
   and set the `photo` field to its path relative to that folder.
   ============================================================ */

const SUMMITS = [
  {
    id:        'hasan-dagi',
    name:      'Hasan Dağı',
    elevation: 3268,
    date:      '2026-03-01',
    season:    'Winter',
    region:    'Central Anatolia (Aksaray / Niğde)',
    route:     'Hasan Dağı 2,000 m campsite — winter summit route',
    status:    'completed',
    winter:    true,
    photo:     'hasandagi/hasan-dagi-start.jpg',
    notes:     'Winter summit completed on 1 March 2026 after camping at 2,000 m. Deep snow, fog, strong wind, and temperatures near −20°C.',
  },
  {
    id:        'emler',
    name:      'Emler',
    elevation: 3723,
    date:      '2023-09-29',
    season:    'Autumn',
    region:    'Aladağlar',
    route:     null,
    status:    'completed',
    winter:    false,
    photo:     'emler/emler-start.jpg',
    notes:     'Summited on 29 September 2023.',
  },
  {
    id:        'yildizlar',
    name:      'Yıldızlar',
    elevation: 3454,
    elevationNote: 'Yıldızbaşı 3,454 m + Yıldızbatı 3,300 m',
    date:      '2026-07-04',
    season:    'Summer',
    region:    'Aladağlar, Central Taurus',
    route:     'Oba Yeri — Yıldızbaşı — Yıldızbatı ridge traverse',
    status:    'completed',
    winter:    false,
    photo:     'yildiz/yildiz-start.jpg',
    peaks: [
      { id: 'yildizbasi', name: 'Yıldızbaşı', elevation: 3454 },
      { id: 'yildizbati', name: 'Yıldızbatı', elevation: 3300 },
    ],
    notes:     'One connected summit story containing Yıldızbaşı and Yıldızbatı, both reached during the same ridge traverse.',
  },
];
