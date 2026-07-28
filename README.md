# Beril Mountain Journal

Personal mountaineering and outdoor journal by Beril Kiyanfer.

## How to manage content

### Add or edit a summit
Edit or add a file in `src/content/summits/` — each summit is one `.js` export inside `src/data/summits.js`.

### Add or edit an activity
Edit `src/data/activities.js`.

### Add or edit a goal
Edit `src/data/goals.js`.

### Add a photo or video
Drop the file into the correct folder inside `public/media/`:
```
public/media/summits/     → summit photos
public/media/activities/  → hike & climbing photos
public/media/gallery/     → extra gallery images
public/media/videos/      → video files
```
Then reference the path in the relevant data file.

### Add a GPX track
Drop the `.gpx` file in `public/gpx/` and reference it in the activity data.

---

## Deploy to GitHub Pages

1. Push this repository to GitHub (repo name: `mountaineering-log`).
2. Go to **Settings → Pages**.
3. Set **Source** to `Deploy from a branch` → branch `main` → folder `/ (root)`.
4. Save. Your site will be live at `https://<your-username>.github.io/mountaineering-log/`.

The `.nojekyll` file at the root ensures GitHub Pages serves all files correctly.

---

## Project structure

```
mountaineering-log/
├── index.html              ← Home page
├── summits.html            ← All summits
├── activities.html         ← All activities (hike / climbing filter)
├── goals.html              ← Future goals
├── gallery.html            ← Photo & video gallery
├── about.html              ← About Beril
├── summit/
│   ├── hasan-dagi.html
│   ├── emler.html
│   ├── yildizbasi.html
│   └── yildizbati.html
├── activity/
│   ├── yildiz-summits-2026.html
│   └── ballikayalar-climbing.html
├── src/
│   ├── data/
│   │   ├── summits.js      ← Edit summit records here
│   │   ├── activities.js   ← Edit activity records here
│   │   └── goals.js        ← Edit goals here
│   └── js/
│       ├── components.js   ← Shared nav + footer
│       └── main.js         ← Page logic helpers
├── src/styles/
│   └── main.css            ← All styles
├── public/
│   ├── media/
│   │   ├── summits/
│   │   ├── activities/
│   │   ├── gallery/
│   │   └── videos/
│   └── gpx/
├── .nojekyll
└── README.md
```
