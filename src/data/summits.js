/* ============================================================
   summits.js — summit content data
   To add a new summit: copy a block and fill in the fields.
   To add a photo: put the file in public/media/summits/
   and set the `photo` field to the filename.
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
    photo:     null, // filename e.g. 'hasan-dagi-summit.jpg'
    notes:     'Winter ascent in February 2026. Cold, clear conditions. One of the most accessible 3000+ metre peaks in Turkey, yet fully alpine in winter dress. The volcanic summit plateau offers sweeping views over the Cappadocian plains.',
    relatedActivity: null,
  },
  {
    id:        'emler',
    name:      'Emler',
    elevation: 3723,
    date:      '2026-07-02',
    season:    'Summer',
    region:    'Aladağlar, Central Taurus',
    route:     'Approach from Oba Yeri camp — Yıldız Summits route',
    status:    'completed',
    winter:    false,
    photo:     null,
    notes:     'Reached during the Yıldız Summits trip in the Aladağlar range. The route traverses steep scree and snow patches. Solid rock sections alternate with heavily weathered faces — careful foot placement required throughout.',
    relatedActivity: 'yildiz-summits-2026',
  },
  {
    id:        'yildizbasi',
    name:      'Yıldızbaşı',
    elevation: 3685,
    date:      '2026-07-04',
    season:    'Summer',
    region:    'Aladağlar, Central Taurus',
    route:     'From Oba Yeri camp — first summit on the ridge traverse',
    status:    'completed',
    winter:    false,
    photo:     null,
    notes:     'First of the two Yıldız summits reached on day two of the camp. The ascent was steep and required careful use of trekking poles on loose scree. Strong wind at the summit; the views across the Aladağlar cirques were exceptional.',
    relatedActivity: 'yildiz-summits-2026',
  },
  {
    id:        'yildizbati',
    name:      'Yıldızbatı',
    elevation: 3700,
    elevationNote: '3,700+ m',
    date:      '2026-07-04',
    season:    'Summer',
    region:    'Aladağlar, Central Taurus',
    route:     'Continuation from Yıldızbaşı along the ridge — easier traverse between the two peaks',
    status:    'completed',
    winter:    false,
    photo:     null,
    notes:     'The second summit of the day, reached from Yıldızbaşı. The ridge connecting the two peaks was more straightforward; morale was high after the first top. Unmelted snowfields on the descent made the return route challenging and required careful traversing.',
    relatedActivity: 'yildiz-summits-2026',
  },
];
