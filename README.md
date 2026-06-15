# Tech Bridge Job Navigator

Tech Bridge Job Navigator is a static decision dashboard for researching, comparing, scoring, and tracking flexible tech-transition roles while keeping a full-time job.

It is built for a mid-career insurance operations professional who wants a practical bridge into tech through part-time IT support, desktop support, data center work, NOC work, field tech work, automation, insurtech support, business systems analysis, or implementation/product support.

## What It Does

- Finds jobs from compliant public job APIs in the Auto Finder review queue.
- Tracks job options with title, company, location, apply URL, employment type, schedule, pay range, commute, lane, and status.
- Saves Auto Finder results into the tracker with one click.
- Scores each role using weighted 0-10 sliders for cash, schedule fit, tech exposure, people fit, exit value, and stress cost.
- Calculates a Bridge Score and decision label:
  - 75+ = Strong bridge role
  - 55-74 = Worth applying
  - 35-54 = Maybe / research more
  - Below 35 = Avoid unless cash is needed
- Shows dashboard sections for best roles, best part-time roles, full-time future targets, insurtech roles, applied roles, follow-ups, and average score by lane.
- Stores everything locally in `localStorage`.
- Exports and imports JSON.
- Exports CSV for spreadsheet backup.
- Includes lane-specific resume keywords and a built-in career strategy guide.

## Auto Finder

The `Auto Finder` tab searches public job feeds, predicts the best role lane, estimates the Bridge Score, and builds a review queue. Use `Save to Tracker` to move a discovered role into your decision dashboard.

Current automatic sources:

- Remotive public remote-jobs API.
- Arbeitnow public job-board API, filtered locally for bridge-role keywords.
- RemoteOK public API, filtered locally for bridge-role keywords.

Static GitHub Pages apps cannot safely scrape LinkedIn, Indeed, Dice, Google Jobs, or employer career pages. For those sources, the app generates targeted search links instead of scraping them.

If a public API blocks browser requests, the source status panel will show that it is unavailable. The generated search links still work as a compliant fallback.

## Run Locally

Because this is a static app, you can open `index.html` directly in a browser.

For a local web server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy on GitHub Pages

1. Create a new GitHub repository, for example `tech-bridge-job-navigator`.
2. Push these files to the repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
   - `job-search-queries.md`
3. In GitHub, open `Settings > Pages`.
4. Set source to `Deploy from a branch`.
5. Choose the `main` branch and `/root`.
6. Save. GitHub Pages will publish the app after the first deployment finishes.

## Customize Scoring Weights

The score formula lives in `app.js` in the `SCORE_FIELDS` constant:

```js
const SCORE_FIELDS = [
  ["cash_score", "Cash Score", 1.0],
  ["schedule_fit", "Schedule Fit", 1.5],
  ["tech_exposure", "Tech Exposure", 2.0],
  ["people_fit", "People / Tribe Fit", 1.5],
  ["exit_value", "Exit Value", 2.0],
  ["stress_cost", "Stress Cost", -1.5]
];
```

The current formula is:

```text
total_score =
(cash_score * 1.0)
+ (schedule_fit * 1.5)
+ (tech_exposure * 2.0)
+ (people_fit * 1.5)
+ (exit_value * 2.0)
- (stress_cost * 1.5)
```

Increase a weight when that factor matters more. Keep `stress_cost` negative because higher stress should reduce the Bridge Score.

## Safe Research Workflow

This app avoids scraping job boards or automating behavior that could violate job board terms. Automatic discovery is limited to public APIs and user-opened search links.

Safe future integrations:

- User-uploaded CSV imports.
- Manual bookmarklet that only captures fields from the page the user is already viewing.
- Public APIs where allowed by terms.
- RSS feeds where available.
- Browser extension only if compliant with the sites being used.

## Future Roadmap

- Editable scoring weights in the UI.
- Follow-up reminders and calendar export.
- CSV import with field mapping.
- Tags for certifications, skills, and commute constraints.
- GitHub Pages backup file workflow.
- React/Vite migration while preserving the current JSON data shape.
- Optional backend for account sync across devices.
- Browser extension or bookmarklet for compliant manual capture.

## Example Job Search Queries

See [job-search-queries.md](job-search-queries.md) for copy-ready searches, including:

- part-time IT support technician Bay Area
- weekend desktop support Walnut Creek
- data center technician weekend Bay Area
- insurance systems analyst remote
- workflow automation analyst
