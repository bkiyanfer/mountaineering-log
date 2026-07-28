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
    date:      '2026-02-01', // approximate — update with exact date
    season:    'Winter',
    region:    'Central Anatolia (Aksaray / Niğde)',
    route:     'Standard north ridge approach',
    status:    'completed',
    winter:    true,
    photo:     'hasandagi/hasan-dagi-start.jpg',
    notes:     'Winter ascent in February 2026. Cold, clear conditions. The volcanic summit plateau offers sweeping views over the Cappadocian plains.',
  },
  {
    id:        'emler',
    name:      'Emler',
    elevation: 3723,
    date:      '2026-07-02',
    season:    'Summer',
    region:    'Aladağlar, Central Taurus',
    route:     'Approach from Oba Yeri camp',
    status:    'completed',
    winter:    false,
    photo:     null,
    notes:     'A steep route over scree, snow patches and mixed rock in the Aladağlar range.',
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
