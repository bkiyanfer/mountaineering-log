/* ============================================================
   activities.js — non-summit activity content data
   Activity types: 'hike' or 'climbing'
   ============================================================ */

const ACTIVITIES = [
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
    participants: ['Beril Kiyanfer'],
    relatedSummits: [],
    photos:    [],
    gpx:       null,
    notes:     'A sport climbing day at the Ballıkayalar limestone crags near Kocaeli. Update this record with the specific routes climbed, grades, and any other participants.',
    gear: {
      technical: ['Harness', 'Helmet', 'Climbing shoes', 'Belay device', '60 m rope', 'Quickdraws × 12', 'Chalk bag'],
      personal:  ['Sunscreen', 'Water', 'Snacks'],
    },
  },
];
