/* ============================================================
   activities.js — activity content data
   Activity types: 'hike' or 'climbing'
   ============================================================ */

const ACTIVITIES = [
  {
    id:             'yildiz-summits-2026',
    title:          'Yıldız Summits — 5 Graduates, 3 Peaks & Skinny Dip',
    titleTR:        '5 Mezun 3 Zirve ve Skinny Dip',
    type:           'hike',       // summit expedition reported under hiking
    date:           '2026-07-03',
    dateEnd:        '2026-07-07',
    location:       'Aladağlar, Niğde',
    region:         'Aladağlar, Central Taurus',
    distanceKm:     7.4,
    elevationGain:  475,
    duration:       '11 hours (summit day)',
    difficulty:     'Hard',
    participants:   [
      'Hüseyin Fikret Değirmencioğlu',
      'İlayda Efsane Algın',
      'Alp Dereli',
      'Arca Köybaşıoğlu',
      'Beril Kiyanfer',
    ],
    campsite:       'Oba Yeri',
    relatedSummits: ['yildizbasi', 'yildizbati', 'emler'],
    photos:         [],  // filenames inside public/media/activities/
    gpx:            null, // filename inside public/gpx/
    weather: {
      day1: { morning: '—', afternoon: 'Sunny', evening: 'Clear' },
      day2: { morning: 'Sunny (very windy toward summit)', afternoon: 'Sunny', evening: 'Clear' },
      day3: { morning: 'Rainy', afternoon: 'Sunny', evening: '—' },
    },
    gear: {
      camp:     ['Winter tent × 2 (3-person + 2-person)', 'Kettle', 'Cooking set', 'Gas canister × 2', 'Sleeping mat × 5', 'Sleeping bag × 5', 'Inflatable pillow × 3'],
      technical:['Gaiters × 5', 'Headlamp × 5', 'Helmet × 5', 'Garmin watch × 1', 'Trekking pole × 5'],
      personal: ['First aid kit', 'Sunscreen', 'Sunglasses', 'Lighter', 'Pocket knife', 'Wet & dry wipes'],
      other:    ['Power bank'],
      food:     ['Pasta × 3 packs', 'Bulgur × 2 packs', 'Kavurma × 2 packs', 'Canned turkey × 6', 'Mixed nuts & snacks', 'Quick soups × 10', 'Tea, coffee, water'],
    },
    route: `Esenler / Ataşehir Dudullu → Niğde Otogar → Çamardı Village (by pickup, ~40 min) → Oba Yeri campsite (~3 hr hike).
Return: same route in reverse (2 hr 15 min hike to meeting point at 14:00).`,
    transport: `Departed Dudullu 21:00 on 3 July (Friday). Bus breakdown in Gebze added ~2 hr delay. Arrived Niğde 09:00. Reached camp at ~13:00. Returned 6 July, bus at 20:45 / 21:00.`,
    waterSource: 'Stream at Oba Yeri campsite — check before departure as it dries up seasonally.',
    hazards: [
      'Snow had not melted at time of activity; trails were covered and icy.',
      'Extremely rotten rock on the ridge — do not pull on anything without testing it.',
      'Several exposed traverses with drop-offs behind; extra care required.',
      'Snow patches added significant risk on descent — slippery in both directions.',
    ],
    terrain: 'Scree, loose rock, snow, meadow',
    summit_day_narrative: `Woke at 04:00. Set off immediately without breakfast — packs had been prepared the night before. Lost some time searching for a missing pole (it had been left next to another hiker's gear). One pole shared between two climbers caused no real issue.

The ascent was very steep throughout but morale was high. We reached both Yıldızbaşı and Yıldızbatı summits 1 hour 15 minutes ahead of schedule. The first summit was very cold and extremely windy; everyone changed out of their wet base layers before pushing on. Slab sections were preferable to loose scree — less tiring and marginally safer (though a drop-off sits behind several of them).

On the second half of the route the trail was impossible to find under the snow. The descent into the valley required careful traversal — no trail, heavy snow, and steep ground. At one point the group split: Efsane and Arca took the lower line over a snowfield; Alp, Fikret and Beril crossed higher up and descended onto the flat alpine meadow via a different snow ramp. Both groups remained visible to each other throughout.

The high plateau was mostly flat, with scattered snow. We navigated around it to Dipsiz Göl (Bottomless Lake). Several of us swam. 30 minutes of walking from the lake brought us back to camp.`,
    details: [
      'Fill water at camp stream — refill points exist on the way down if you need them.',
      'Phone signal available on ridgeline (not Vodafone). Garmin watch GPS was erratic.',
      'An extra T-shirt is essential — swap out the wet base layer at the first summit.',
      'Leave gear items in clearly agreed spots. Poles and shared items can easily get confused at camp.',
    ],
  },
  {
    id:        'ballikayalar-climbing',
    title:     'Ballıkayalar Rock Climbing Day',
    type:      'climbing',
    date:      '2026-09-05', // placeholder — update with real date
    location:  'Ballıkayalar, Kocaeli',
    region:    'Marmara',
    distanceKm: null,
    duration:  'Full day',
    difficulty: 'Varied (sport routes)',
    participants: ['Beril Kiyanfer'],  // update with real participant list
    relatedSummits: [],
    photos:    [],
    gpx:       null,
    notes:     'A sport climbing day at the Ballıkayalar limestone crags near Kocaeli — one of the most popular single-pitch crags in the region. Routes range from beginner-friendly slabs to technical crimpy faces. Update this record with the specific routes climbed, grades, and any other participants.',
    gear: {
      technical: ['Harness', 'Helmet', 'Climbing shoes', 'Belay device', '60 m rope', 'Quickdraws × 12', 'Chalk bag'],
      personal:  ['Sunscreen', 'Water', 'Snacks'],
    },
  },
];
