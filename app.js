const STORAGE_KEY = "techBridgeJobNavigator.jobs.v1";
const THEME_KEY = "techBridgeJobNavigator.theme.v1";

const LANE_OPTIONS = [
  "IT Support",
  "Desktop Support",
  "Data Center / Infrastructure",
  "Field Tech / Low Voltage",
  "Automation / Systems",
  "Insurtech / Insurance Systems",
  "Freelance / Small Business Tech"
];

const STATUS_OPTIONS = [
  "Researching",
  "Interesting",
  "Applied",
  "Interview",
  "Rejected",
  "Saved for later",
  "Not worth it"
];

const EMPLOYMENT_OPTIONS = [
  "part-time",
  "contract",
  "full-time future target",
  "freelance"
];

const SCHEDULE_OPTIONS = [
  "weekend",
  "evening",
  "flexible",
  "weekday",
  "unknown"
];

const SCORE_FIELDS = [
  ["cash_score", "Cash Score", 1.0],
  ["schedule_fit", "Schedule Fit", 1.5],
  ["tech_exposure", "Tech Exposure", 2.0],
  ["people_fit", "People / Tribe Fit", 1.5],
  ["exit_value", "Exit Value", 2.0],
  ["stress_cost", "Stress Cost", -1.5]
];

const KEYWORDS = {
  "IT Support": [
    "Windows support",
    "macOS support",
    "ticketing",
    "endpoint troubleshooting",
    "user support",
    "hardware diagnostics",
    "Microsoft 365"
  ],
  "Data Center / Infrastructure": [
    "cabling",
    "rack and stack",
    "server hardware",
    "networking basics",
    "remote hands",
    "inventory",
    "uptime"
  ],
  "Automation / Systems": [
    "workflow automation",
    "Python",
    "CSV processing",
    "dashboards",
    "internal tools",
    "process improvement",
    "documentation"
  ],
  "Insurtech / Insurance Systems": [
    "underwriting operations",
    "policy systems",
    "claims systems",
    "broker workflows",
    "submissions",
    "business requirements",
    "user acceptance testing"
  ],
  "Desktop Support": [
    "desktop imaging",
    "hardware refresh",
    "printer support",
    "asset management",
    "VPN troubleshooting",
    "Active Directory",
    "SLA support"
  ],
  "Field Tech / Low Voltage": [
    "CCTV",
    "structured cabling",
    "site surveys",
    "AV installation",
    "access control",
    "field documentation",
    "customer handoff"
  ],
  "Freelance / Small Business Tech": [
    "small business IT",
    "automation consulting",
    "Cloudflare tunnels",
    "GitHub Pages",
    "Flask apps",
    "dashboard delivery",
    "client documentation"
  ]
};

const FINDER_PACKS = {
  bridge: [
    "part time IT support",
    "desktop support",
    "help desk technician",
    "technical support specialist",
    "implementation specialist",
    "business systems analyst",
    "workflow automation analyst",
    "insurance systems analyst"
  ],
  support: [
    "part time IT support",
    "desktop support",
    "help desk",
    "technical support",
    "endpoint support",
    "Microsoft 365 support"
  ],
  systems: [
    "business systems analyst",
    "workflow automation",
    "Python automation",
    "internal tools",
    "implementation specialist",
    "product support analyst"
  ],
  insurance: [
    "insurance systems analyst",
    "underwriting systems analyst",
    "claims application analyst",
    "insurtech product support",
    "insurance software support",
    "business analyst insurance"
  ],
  field: [
    "data center technician",
    "NOC technician",
    "field technician",
    "low voltage technician",
    "CCTV technician",
    "remote hands"
  ]
};

const SEARCH_LINK_SOURCES = [
  {
    name: "Google Jobs",
    buildUrl: (query, location) => `https://www.google.com/search?q=${encodeURIComponent(`${query} ${location} jobs`)}`
  },
  {
    name: "LinkedIn Jobs",
    buildUrl: (query, location) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`
  },
  {
    name: "Indeed",
    buildUrl: (query, location) => `https://www.indeed.com/jobs?q=${encodeURIComponent(query)}&l=${encodeURIComponent(location)}`
  },
  {
    name: "Dice",
    buildUrl: (query, location) => `https://www.dice.com/jobs?q=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`
  }
];

const STARTER_JOBS = [
  {
    title: "Part-time Desktop Support",
    company: "Regional healthcare office",
    location: "Walnut Creek, CA",
    applyUrl: "",
    employmentType: "part-time",
    schedule: "evening",
    payRange: "$28-$36/hr",
    commuteEstimate: "30-40 min each way",
    lane: "Desktop Support",
    status: "Interesting",
    scores: {
      cash_score: 7,
      schedule_fit: 7,
      tech_exposure: 8,
      people_fit: 7,
      exit_value: 7,
      stress_cost: 4
    },
    notes: {
      fit: "Direct user support and hardware troubleshooting fit existing repair experience.",
      learn: "Ticketing workflow, imaging process, local M365 administration.",
      keywords: "desktop support, endpoint troubleshooting, ticketing, hardware diagnostics",
      questions: "How many hours per week? Is evening coverage consistent? What ticketing system is used?",
      redFlags: "Unclear schedule or expectation to be on call during full-time job hours."
    }
  },
  {
    title: "Part-time IT Support Specialist",
    company: "Education technology team",
    location: "Cupertino, CA",
    applyUrl: "",
    employmentType: "part-time",
    schedule: "weekend",
    payRange: "$30-$40/hr",
    commuteEstimate: "55-70 min each way",
    lane: "IT Support",
    status: "Researching",
    scores: {
      cash_score: 8,
      schedule_fit: 5,
      tech_exposure: 8,
      people_fit: 6,
      exit_value: 7,
      stress_cost: 6
    },
    notes: {
      fit: "Strong IT support signal if weekend hours are real and predictable.",
      learn: "Jamf or device management, school support patterns, identity basics.",
      keywords: "user support, endpoint troubleshooting, Microsoft 365, macOS support",
      questions: "Can the role be limited to weekends? Is travel between sites required?",
      redFlags: "Long commute plus high-interruption support could drain runway."
    }
  },
  {
    title: "Part-time IT Support Contractor",
    company: "Biotech operations group",
    location: "South San Francisco, CA",
    applyUrl: "",
    employmentType: "contract",
    schedule: "flexible",
    payRange: "$35-$45/hr",
    commuteEstimate: "45-60 min each way",
    lane: "IT Support",
    status: "Interesting",
    scores: {
      cash_score: 9,
      schedule_fit: 6,
      tech_exposure: 8,
      people_fit: 7,
      exit_value: 8,
      stress_cost: 5
    },
    notes: {
      fit: "Contract support can create credible IT bullets quickly if scope is clear.",
      learn: "Asset inventory, regulated environment support, escalation process.",
      keywords: "ticketing, hardware diagnostics, asset inventory, endpoint support",
      questions: "What days and hours are needed? Is there after-hours work only?",
      redFlags: "Ambiguous contract that becomes full weekday availability."
    }
  },
  {
    title: "Geek Squad Agent",
    company: "Best Buy",
    location: "San Carlos, CA",
    applyUrl: "",
    employmentType: "part-time",
    schedule: "weekend",
    payRange: "$20-$26/hr",
    commuteEstimate: "35-50 min each way",
    lane: "IT Support",
    status: "Saved for later",
    scores: {
      cash_score: 4,
      schedule_fit: 7,
      tech_exposure: 6,
      people_fit: 6,
      exit_value: 5,
      stress_cost: 5
    },
    notes: {
      fit: "Consumer tech support can sharpen troubleshooting and customer support stories.",
      learn: "Retail support workflow, device intake, repair documentation.",
      keywords: "customer support, hardware diagnostics, device troubleshooting",
      questions: "Can hours be fixed on weekends? Are repair tasks or sales tasks dominant?",
      redFlags: "Too much retail pressure and too little technical depth."
    }
  },
  {
    title: "CCTV Rollout Technician",
    company: "Security systems contractor",
    location: "San Francisco, CA",
    applyUrl: "",
    employmentType: "contract",
    schedule: "evening",
    payRange: "$30-$42/hr",
    commuteEstimate: "45-75 min each way",
    lane: "Field Tech / Low Voltage",
    status: "Researching",
    scores: {
      cash_score: 8,
      schedule_fit: 6,
      tech_exposure: 7,
      people_fit: 5,
      exit_value: 6,
      stress_cost: 6
    },
    notes: {
      fit: "Hands-on wiring, devices, networking basics, and client-site documentation.",
      learn: "Low-voltage standards, camera configuration, site closeout docs.",
      keywords: "CCTV, structured cabling, site surveys, customer handoff",
      questions: "Is this project work only? Are tools, parking, and travel reimbursed?",
      redFlags: "Physical load, unpredictable sites, or unpaid travel time."
    }
  },
  {
    title: "Business Systems Analyst",
    company: "Insurance platform team",
    location: "Remote / Dublin, CA",
    applyUrl: "",
    employmentType: "full-time future target",
    schedule: "weekday",
    payRange: "$85K-$115K",
    commuteEstimate: "Remote, occasional Dublin meetings",
    lane: "Automation / Systems",
    status: "Saved for later",
    scores: {
      cash_score: 8,
      schedule_fit: 6,
      tech_exposure: 8,
      people_fit: 8,
      exit_value: 9,
      stress_cost: 5
    },
    notes: {
      fit: "Strong use of operations knowledge, dashboards, requirements, and automation projects.",
      learn: "Formal requirements writing, stakeholder mapping, Agile delivery language.",
      keywords: "business requirements, process improvement, dashboards, user acceptance testing",
      questions: "How technical is the analyst role? Does it own workflow automation or only requirements?",
      redFlags: "Role is mostly meetings without systems ownership."
    }
  },
  {
    title: "Claims/Application Analyst",
    company: "Regional insurance carrier",
    location: "Oakland, CA",
    applyUrl: "",
    employmentType: "full-time future target",
    schedule: "weekday",
    payRange: "$78K-$105K",
    commuteEstimate: "35-55 min each way",
    lane: "Insurtech / Insurance Systems",
    status: "Interesting",
    scores: {
      cash_score: 7,
      schedule_fit: 5,
      tech_exposure: 8,
      people_fit: 8,
      exit_value: 9,
      stress_cost: 5
    },
    notes: {
      fit: "Best domain bridge: insurance operations plus application support and requirements.",
      learn: "Claims platform data flow, UAT plans, defect triage, release notes.",
      keywords: "claims systems, policy systems, underwriting operations, user acceptance testing",
      questions: "Does the team support users directly? Is SQL or reporting part of the role?",
      redFlags: "Same insurance work with a new title but little technical ownership."
    }
  }
];

let jobs = [];
let finderResults = [];
let finderHasRun = false;
let activeTab = "dashboard";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
  jobs = loadJobs();
  populateStaticControls();
  bindEvents();
  renderAll();
});

function bindEvents() {
  $$(".tab-button").forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.tab));
  });

  $("#themeToggle").addEventListener("click", toggleTheme);
  $("#newJobButton").addEventListener("click", () => openJobDialog());
  $("#closeDialogButton").addEventListener("click", closeJobDialog);
  $("#cancelDialogButton").addEventListener("click", closeJobDialog);
  $("#jobForm").addEventListener("submit", saveJobFromForm);
  $("#deleteJobButton").addEventListener("click", deleteCurrentJob);

  ["searchInput", "laneFilter", "statusFilter", "employmentFilter", "scheduleFilter", "minScoreFilter", "sortSelect"].forEach((id) => {
    $(`#${id}`).addEventListener("input", renderJobList);
  });

  $("#minScoreFilter").addEventListener("input", () => {
    $("#minScoreReadout").textContent = $("#minScoreFilter").value;
  });

  $("#resetFiltersButton").addEventListener("click", resetFilters);
  $("#restoreSamplesButton").addEventListener("click", restoreSamples);
  $("#exportJsonButton").addEventListener("click", exportJson);
  $("#exportCsvButton").addEventListener("click", exportCsv);
  $("#importFileInput").addEventListener("change", importJsonFile);
  $("#importTextButton").addEventListener("click", importJsonText);
  $("#runFinderButton").addEventListener("click", runAutoFinder);
  $("#clearFinderButton").addEventListener("click", clearFinderResults);
  $("#finderMinScoreInput").addEventListener("input", () => {
    $("#finderMinScoreReadout").textContent = $("#finderMinScoreInput").value;
    renderFinderResults();
  });
  $("#finderPackSelect").addEventListener("change", renderSearchLinks);
  $("#finderLocationInput").addEventListener("input", renderSearchLinks);
  $("#finderFlexibleOnlyInput").addEventListener("change", renderFinderResults);
}

function populateStaticControls() {
  populateSelect($("#laneFilter"), ["All lanes", ...LANE_OPTIONS]);
  populateSelect($("#statusFilter"), ["All statuses", ...STATUS_OPTIONS]);
  populateSelect($("#employmentFilter"), ["All types", ...EMPLOYMENT_OPTIONS]);
  populateSelect($("#scheduleFilter"), ["All schedules", ...SCHEDULE_OPTIONS]);

  populateSelect($("#laneInput"), LANE_OPTIONS);
  populateSelect($("#statusInput"), STATUS_OPTIONS);
  populateSelect($("#employmentInput"), EMPLOYMENT_OPTIONS);
  populateSelect($("#scheduleInput"), SCHEDULE_OPTIONS);

  const sliderGrid = $("#sliderGrid");
  sliderGrid.innerHTML = SCORE_FIELDS.map(([key, label]) => `
    <div class="slider-control">
      <label for="${key}Input">${label}</label>
      <input id="${key}Input" type="range" min="0" max="10" value="5" data-score-input="${key}">
      <span class="slider-value" id="${key}Value">5</span>
    </div>
  `).join("");

  $$("[data-score-input]").forEach((slider) => {
    slider.addEventListener("input", () => {
      $(`#${slider.dataset.scoreInput}Value`).textContent = slider.value;
      updateLiveScore();
    });
  });
}

function populateSelect(select, options) {
  select.innerHTML = options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("");
}

function loadJobs() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    const seeded = withIds(STARTER_JOBS);
    saveJobs(seeded);
    return seeded;
  }

  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) throw new Error("Saved data is not an array.");
    return parsed.map(normalizeJob);
  } catch (error) {
    console.error(error);
    const seeded = withIds(STARTER_JOBS);
    saveJobs(seeded);
    showToast("Saved data was unreadable. Starter jobs were restored.");
    return seeded;
  }
}

function withIds(items) {
  return items.map((item) => normalizeJob({ ...item, id: createId(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }));
}

function normalizeJob(job) {
  const scores = job.scores || {};
  const notes = job.notes || {};
  return {
    id: job.id || createId(),
    title: job.title || "",
    company: job.company || "",
    location: job.location || "",
    applyUrl: job.applyUrl || job.url || "",
    employmentType: job.employmentType || "part-time",
    schedule: job.schedule || "unknown",
    payRange: job.payRange || "",
    commuteEstimate: job.commuteEstimate || "",
    lane: job.lane || "IT Support",
    status: job.status || "Researching",
    scores: Object.fromEntries(SCORE_FIELDS.map(([key]) => [key, clampNumber(scores[key], 0, 10, 5)])),
    notes: {
      fit: notes.fit || "",
      learn: notes.learn || "",
      keywords: notes.keywords || "",
      questions: notes.questions || "",
      redFlags: notes.redFlags || ""
    },
    createdAt: job.createdAt || new Date().toISOString(),
    updatedAt: job.updatedAt || new Date().toISOString()
  };
}

function saveJobs(nextJobs = jobs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(nextJobs, null, 2));
}

function renderAll() {
  renderDashboard();
  renderJobList();
  renderKeywords();
  renderSearchLinks();
}

function renderDashboard() {
  const scored = getScoredJobs(jobs);
  const avgScore = scored.length ? average(scored.map((job) => job.bridgeScore)) : 0;
  const topJob = scored[0];
  const activeCount = jobs.filter((job) => !["Rejected", "Not worth it"].includes(job.status)).length;
  const topLane = getTopLane(scored);

  $("#metricGrid").innerHTML = [
    metricCard("Tracked roles", jobs.length),
    metricCard("Average score", Math.round(avgScore)),
    metricCard("Active pipeline", activeCount),
    metricCard("Top lane", topLane)
  ].join("");

  renderRankList("#bestRoles", scored.slice(0, 5));
  renderCompactList("#partTimeRoles", scored.filter((job) => job.employmentType === "part-time").slice(0, 4));
  renderCompactList("#futureTargets", scored.filter((job) => job.employmentType === "full-time future target").slice(0, 4));
  renderCompactList("#insurtechRoles", scored.filter((job) => job.lane === "Insurtech / Insurance Systems").slice(0, 4));
  renderCompactList("#appliedRoles", scored.filter((job) => ["Applied", "Interview"].includes(job.status)).slice(0, 4));
  renderCompactList("#followUpRoles", scored.filter((job) => ["Interesting", "Applied", "Interview"].includes(job.status)).slice(0, 5));
  renderLaneChart(scored);

  if (topJob) document.title = `${Math.round(topJob.bridgeScore)} - Tech Bridge Job Navigator`;
}

function metricCard(label, value) {
  return `
    <article class="metric-card">
      <p class="metric-value">${escapeHtml(String(value))}</p>
      <p class="metric-label">${escapeHtml(label)}</p>
    </article>
  `;
}

function renderRankList(selector, items) {
  const element = $(selector);
  if (!items.length) {
    element.innerHTML = emptyState("No roles match this dashboard section yet.");
    return;
  }

  element.innerHTML = items.map((job, index) => `
    <article class="rank-item">
      <span class="rank-number">${index + 1}</span>
      <div>
        <div class="rank-title">${escapeHtml(job.title)}</div>
        <div class="rank-meta">${escapeHtml(job.company)} - ${escapeHtml(job.lane)} - ${escapeHtml(job.employmentType)}</div>
      </div>
      <span class="score-badge">${Math.round(job.bridgeScore)}</span>
    </article>
  `).join("");
}

function renderCompactList(selector, items) {
  const element = $(selector);
  if (!items.length) {
    element.innerHTML = emptyState("Nothing in this bucket yet.");
    return;
  }

  element.innerHTML = items.map((job) => `
    <article class="compact-item">
      <div>
        <div class="compact-title">${escapeHtml(job.title)}</div>
        <div class="compact-meta">${escapeHtml(job.company)} - ${escapeHtml(job.status)}</div>
      </div>
      <span class="score-badge">${Math.round(job.bridgeScore)}</span>
    </article>
  `).join("");
}

function renderLaneChart(scored) {
  const rows = LANE_OPTIONS.map((lane) => {
    const laneJobs = scored.filter((job) => job.lane === lane);
    return {
      lane,
      count: laneJobs.length,
      avg: laneJobs.length ? average(laneJobs.map((job) => job.bridgeScore)) : 0
    };
  }).filter((row) => row.count > 0).sort((a, b) => b.avg - a.avg);

  $("#laneChart").innerHTML = rows.length ? rows.map((row) => `
    <div class="bar-row">
      <strong>${escapeHtml(row.lane)} <span class="compact-meta">(${row.count})</span></strong>
      <div class="bar-track">
        <div class="bar-fill" style="width: ${Math.max(4, Math.min(100, (row.avg / 80) * 100))}%"></div>
      </div>
      <span class="score-badge">${Math.round(row.avg)}</span>
    </div>
  `).join("") : emptyState("Add jobs to see lane averages.");
}

function renderJobList() {
  const filtered = getFilteredJobs();
  $("#jobCountHeading").textContent = `${filtered.length} Jobs`;

  const list = $("#jobList");
  if (!filtered.length) {
    list.innerHTML = emptyState("No jobs match the current filters.");
    return;
  }

  list.innerHTML = filtered.map((job) => {
    const label = getDecisionLabel(job.bridgeScore);
    const urlButton = job.applyUrl
      ? `<a class="secondary-button" href="${escapeAttribute(job.applyUrl)}" target="_blank" rel="noreferrer">Open URL</a>`
      : "";

    return `
      <article class="job-card">
        <div class="card-header">
          <div>
            <h3>${escapeHtml(job.title)}</h3>
            <p class="company-line">${escapeHtml(job.company)} - ${escapeHtml(job.location)}</p>
          </div>
          <span class="score-badge">${Math.round(job.bridgeScore)}</span>
        </div>
        <div class="badge-row">
          <span class="label-badge ${label.className}">${escapeHtml(label.text)}</span>
          <span class="badge">${escapeHtml(job.lane)}</span>
          <span class="badge">${escapeHtml(job.employmentType)}</span>
          <span class="badge">${escapeHtml(job.schedule)}</span>
          <span class="badge">${escapeHtml(job.status)}</span>
        </div>
        <p class="meta-line">${escapeHtml(job.payRange || "Pay unknown")} - ${escapeHtml(job.commuteEstimate || "Commute unknown")}</p>
        <div class="score-strip">
          <span>Schedule<strong>${job.scores.schedule_fit}</strong></span>
          <span>Tech<strong>${job.scores.tech_exposure}</strong></span>
          <span>Exit<strong>${job.scores.exit_value}</strong></span>
          <span>Cash<strong>${job.scores.cash_score}</strong></span>
          <span>People<strong>${job.scores.people_fit}</strong></span>
          <span>Stress<strong>${job.scores.stress_cost}</strong></span>
        </div>
        <p class="note-preview">${escapeHtml(getNotePreview(job))}</p>
        <div class="button-row">
          <button class="secondary-button" type="button" data-edit-id="${escapeAttribute(job.id)}">Edit</button>
          ${urlButton}
        </div>
      </article>
    `;
  }).join("");

  $$("[data-edit-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const job = jobs.find((item) => item.id === button.dataset.editId);
      if (job) openJobDialog(job);
    });
  });
}

function renderKeywords() {
  $("#keywordGrid").innerHTML = Object.entries(KEYWORDS).map(([lane, keywords]) => `
    <article class="keyword-card">
      <p class="eyebrow">Lane signal</p>
      <h3>${escapeHtml(lane)}</h3>
      <ul class="keyword-list">
        ${keywords.map((keyword) => `<li>${escapeHtml(keyword)}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

async function runAutoFinder() {
  const button = $("#runFinderButton");
  const pack = $("#finderPackSelect").value;
  const queries = FINDER_PACKS[pack] || FINDER_PACKS.bridge;
  const location = $("#finderLocationInput").value.trim() || "Bay Area OR remote";

  button.disabled = true;
  button.textContent = "Finding...";
  $("#finderCountHeading").textContent = "Searching public feeds";
  $("#sourceStatus").innerHTML = "";
  $("#finderResults").innerHTML = emptyState("Searching compliant public job APIs...");

  const sourceStatuses = [];
  const discovered = [];
  finderHasRun = true;

  const remotiveSettled = await Promise.allSettled(queries.map((query) => fetchRemotive(query)));
  const remotiveJobs = remotiveSettled.flatMap((result) => result.status === "fulfilled" ? result.value : []);
  const remotiveFailures = remotiveSettled.filter((result) => result.status === "rejected").length;
  sourceStatuses.push({
    name: "Remotive public API",
    message: remotiveFailures ? `${remotiveJobs.length} results, ${remotiveFailures} query failures` : `${remotiveJobs.length} results`
  });
  discovered.push(...remotiveJobs);

  try {
    const arbeitnowJobs = await fetchArbeitnow(queries);
    sourceStatuses.push({ name: "Arbeitnow public API", message: `${arbeitnowJobs.length} filtered results` });
    discovered.push(...arbeitnowJobs);
  } catch (error) {
    console.error(error);
    sourceStatuses.push({ name: "Arbeitnow public API", message: "Blocked or unavailable in this browser" });
  }

  try {
    const remoteOkJobs = await fetchRemoteOk(queries);
    sourceStatuses.push({ name: "RemoteOK public API", message: `${remoteOkJobs.length} filtered results` });
    discovered.push(...remoteOkJobs);
  } catch (error) {
    console.error(error);
    sourceStatuses.push({ name: "RemoteOK public API", message: "Blocked or unavailable in this browser" });
  }

  finderResults = dedupeDiscoveredJobs(discovered)
    .filter(isTargetBridgeRole)
    .filter(isLocationCompatible)
    .map((job) => enrichDiscoveredJob(job, location))
    .sort((a, b) => b.bridgeScore - a.bridgeScore);

  renderSourceStatus(sourceStatuses);
  renderFinderResults();
  renderSearchLinks();
  showToast(`Auto Finder found ${finderResults.length} possible roles.`);

  button.disabled = false;
  button.textContent = "Find Jobs";
}

async function fetchRemotive(query) {
  const response = await fetch(`https://remotive.com/api/remote-jobs?search=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error(`Remotive failed: ${response.status}`);
  const payload = await response.json();
  return (payload.jobs || []).map((job) => ({
    source: "Remotive",
    sourceId: `remotive-${job.id}`,
    title: job.title || "",
    company: job.company_name || "",
    location: job.candidate_required_location || "Remote",
    url: job.url || "",
    payRange: job.salary || "",
    description: stripHtml(job.description || ""),
    remote: true,
    rawType: job.job_type || "remote",
    postedAt: job.publication_date || ""
  }));
}

async function fetchArbeitnow(queries) {
  const response = await fetch("https://www.arbeitnow.com/api/job-board-api");
  if (!response.ok) throw new Error(`Arbeitnow failed: ${response.status}`);
  const payload = await response.json();
  const needles = queries.flatMap((query) => query.toLowerCase().split(/\s+/)).filter((word) => word.length > 3);

  return (payload.data || [])
    .filter((job) => {
      const text = `${job.title || ""} ${job.company_name || ""} ${job.location || ""} ${stripHtml(job.description || "")} ${(job.tags || []).join(" ")} ${(job.job_types || []).join(" ")}`.toLowerCase();
      return needles.some((word) => text.includes(word)) || /support|analyst|technician|automation|systems|infrastructure|insurance|help desk|desktop/i.test(text);
    })
    .slice(0, 60)
    .map((job) => ({
      source: "Arbeitnow",
      sourceId: `arbeitnow-${job.slug}`,
      title: job.title || "",
      company: job.company_name || "",
      location: job.location || (job.remote ? "Remote" : "Unknown"),
      url: job.url || "",
      payRange: "",
      description: stripHtml(job.description || ""),
      remote: Boolean(job.remote),
      rawType: (job.job_types || []).join(", ") || "unknown",
      postedAt: job.created_at ? new Date(job.created_at * 1000).toISOString() : ""
    }));
}

async function fetchRemoteOk(queries) {
  const response = await fetch("https://remoteok.com/api");
  if (!response.ok) throw new Error(`RemoteOK failed: ${response.status}`);
  const payload = await response.json();
  const needles = queries.map((query) => query.toLowerCase());

  return (payload || [])
    .filter((job) => job && job.position && job.company)
    .filter((job) => {
      const text = `${job.position || ""} ${job.company || ""} ${job.location || ""} ${job.description || ""} ${(job.tags || []).join(" ")}`.toLowerCase();
      return needles.some((query) => text.includes(query)) || /support|help desk|desktop|technician|implementation|systems analyst|automation|insurance/.test(text);
    })
    .slice(0, 80)
    .map((job) => ({
      source: "RemoteOK",
      sourceId: `remoteok-${job.id || job.slug || job.url}`,
      title: job.position || "",
      company: job.company || "",
      location: job.location || "Remote",
      url: job.url || "",
      payRange: formatRemoteOkPay(job.salary_min, job.salary_max),
      description: stripHtml(job.description || ""),
      remote: true,
      rawType: (job.tags || []).join(", ") || "remote",
      postedAt: job.date || ""
    }));
}

function enrichDiscoveredJob(job, targetLocation) {
  const text = `${job.title} ${job.company} ${job.location} ${job.rawType} ${job.description}`.toLowerCase();
  const lane = inferLane(text);
  const employmentType = inferEmploymentType(text);
  const schedule = inferSchedule(text, job.remote);
  const scores = inferScores(text, lane, employmentType, schedule, job.remote);
  const bridgeScore = calculateScore(scores);
  const decision = getDecisionLabel(bridgeScore);

  return {
    ...job,
    lane,
    employmentType,
    schedule,
    scores,
    bridgeScore,
    decision,
    targetLocation
  };
}

function inferLane(text) {
  if (/underwriting|claims?\s+system|policy\s+system|broker\s+workflow|submission|guidewire|duck creek|insurtech|insurance\s+(systems?|software|application|platform)/.test(text)) return "Insurtech / Insurance Systems";
  if (/automation|python|csv|dashboard|internal tool|workflow|process improvement|business systems|systems analyst|implementation/.test(text)) return "Automation / Systems";
  if (/data center|datacenter|rack|stack|server hardware|noc|network operations|remote hands|infrastructure/.test(text)) return "Data Center / Infrastructure";
  if (/cctv|low voltage|structured cabling|field technician|access control|av technician|site survey/.test(text)) return "Field Tech / Low Voltage";
  if (/desktop|endpoint|imaging|printer|active directory|hardware refresh/.test(text)) return "Desktop Support";
  if (/freelance|small business|contractor|consultant/.test(text)) return "Freelance / Small Business Tech";
  return "IT Support";
}

function inferEmploymentType(text) {
  if (/part[\s-]?time|weekend|evening/.test(text)) return "part-time";
  if (/contract|contractor|temporary|temp/.test(text)) return "contract";
  if (/freelance|consultant/.test(text)) return "freelance";
  return "full-time future target";
}

function inferSchedule(text, remote) {
  if (/weekend/.test(text)) return "weekend";
  if (/evening|night|after hours|after-hours/.test(text)) return "evening";
  if (/flexible|remote|hybrid|async/.test(text) || remote) return "flexible";
  if (/monday|friday|weekday|9-5|full-time|full time/.test(text)) return "weekday";
  return "unknown";
}

function inferScores(text, lane, employmentType, schedule, remote) {
  const techTerms = countMatches(text, [
    "python",
    "ticket",
    "windows",
    "macos",
    "microsoft 365",
    "active directory",
    "server",
    "network",
    "automation",
    "dashboard",
    "api",
    "sql",
    "hardware",
    "workflow",
    "requirements",
    "uat",
    "implementation"
  ]);
  const domainBoost = /insurance|underwriting|claims|policy|broker/.test(text) ? 2 : 0;
  const flexibleBoost = employmentType !== "full-time future target" || schedule === "flexible" || remote ? 2 : 0;
  const cashBoost = /\$\d|salary|hour|competitive|contract/.test(text) ? 1 : 0;
  const stressPenalty = countMatches(text, ["senior", "lead", "manager", "on-call", "on call", "fast-paced", "urgent", "24/7"]);

  return {
    cash_score: clampNumber(5 + cashBoost + (employmentType === "contract" ? 1 : 0), 0, 10, 5),
    schedule_fit: clampNumber(4 + flexibleBoost + (schedule === "weekend" || schedule === "evening" ? 2 : 0), 0, 10, 5),
    tech_exposure: clampNumber(5 + Math.min(techTerms, 4), 0, 10, 5),
    people_fit: clampNumber(6 + domainBoost, 0, 10, 6),
    exit_value: clampNumber(lane === "Insurtech / Insurance Systems" ? 9 : lane === "Automation / Systems" ? 8 : lane === "Data Center / Infrastructure" ? 7 : 6, 0, 10, 7),
    stress_cost: clampNumber(4 + stressPenalty - (employmentType === "part-time" || schedule === "flexible" ? 1 : 0), 0, 10, 4)
  };
}

function renderFinderResults() {
  const minScore = Number($("#finderMinScoreInput").value);
  const flexibleOnly = $("#finderFlexibleOnlyInput").checked;
  const visible = finderResults
    .filter((job) => job.bridgeScore >= minScore)
    .filter((job) => !flexibleOnly || isFlexibleFinderMatch(job))
    .slice(0, 80);

  $("#finderCountHeading").textContent = finderHasRun ? `${visible.length} Suggested Roles` : "No search run yet";

  if (!visible.length) {
    $("#finderResults").innerHTML = emptyState(finderHasRun ? "No API roles matched the bridge-role filters right now. Use the generated search links below for local boards, or try another search pack." : "Run Auto Finder to pull roles from public job APIs and score them.");
    return;
  }

  $("#finderResults").innerHTML = visible.map((job) => `
    <article class="finder-card">
      <div class="card-header">
        <div>
          <p class="eyebrow">${escapeHtml(job.source)}</p>
          <h3>${escapeHtml(job.title)}</h3>
          <p class="company-line">${escapeHtml(job.company)} - ${escapeHtml(job.location)}</p>
        </div>
        <span class="score-badge">${Math.round(job.bridgeScore)}</span>
      </div>
      <div class="badge-row">
        <span class="label-badge ${job.decision.className}">${escapeHtml(job.decision.text)}</span>
        <span class="badge">${escapeHtml(job.lane)}</span>
        <span class="badge">${escapeHtml(job.employmentType)}</span>
        <span class="badge">${escapeHtml(job.schedule)}</span>
      </div>
      <p class="meta-line">${escapeHtml(job.payRange || "Pay unknown")} - ${escapeHtml(job.remote ? "Remote feed" : "Location listed")}</p>
      <p class="note-preview">${escapeHtml(truncateText(job.description, 240))}</p>
      <div class="finder-actions">
        <button class="secondary-button" type="button" data-save-found-id="${escapeAttribute(job.sourceId)}">Save to Tracker</button>
        <a class="secondary-button" href="${escapeAttribute(job.url)}" target="_blank" rel="noreferrer">Open Posting</a>
      </div>
    </article>
  `).join("");

  $$("[data-save-found-id]").forEach((button) => {
    button.addEventListener("click", () => saveDiscoveredJob(button.dataset.saveFoundId));
  });
}

function renderSourceStatus(statuses = []) {
  $("#sourceStatus").innerHTML = statuses.map((status) => `
    <div class="source-pill">
      <strong>${escapeHtml(status.name)}</strong>
      <span>${escapeHtml(status.message)}</span>
    </div>
  `).join("");
}

function renderSearchLinks() {
  const pack = $("#finderPackSelect")?.value || "bridge";
  const location = $("#finderLocationInput")?.value.trim() || "Bay Area OR remote";
  const queries = (FINDER_PACKS[pack] || FINDER_PACKS.bridge).slice(0, 6);
  const links = queries.flatMap((query) => SEARCH_LINK_SOURCES.map((source) => ({ source, query })));

  const grid = $("#searchLinkGrid");
  if (!grid) return;

  grid.innerHTML = links.map(({ source, query }) => `
    <a class="search-link" href="${escapeAttribute(source.buildUrl(query, location))}" target="_blank" rel="noreferrer">
      ${escapeHtml(source.name)}
      <span>${escapeHtml(query)} - ${escapeHtml(location)}</span>
    </a>
  `).join("");
}

function saveDiscoveredJob(sourceId) {
  const found = finderResults.find((job) => job.sourceId === sourceId);
  if (!found) return;

  const alreadySaved = jobs.some((job) => job.applyUrl && found.url && job.applyUrl === found.url);
  if (alreadySaved) {
    showToast("That posting is already in your tracker.");
    return;
  }

  const now = new Date().toISOString();
  const saved = normalizeJob({
    id: createId(),
    title: found.title,
    company: found.company,
    location: found.location,
    applyUrl: found.url,
    employmentType: found.employmentType,
    schedule: found.schedule,
    payRange: found.payRange || "",
    commuteEstimate: found.remote ? "Remote" : "Verify commute",
    lane: found.lane,
    status: "Researching",
    scores: found.scores,
    notes: {
      fit: `Auto-found from ${found.source}. Predicted lane: ${found.lane}. Validate schedule, pay, and actual tech exposure before applying.`,
      learn: "Confirm tools, ticket volume, training, escalation path, and whether the schedule protects the full-time job.",
      keywords: (KEYWORDS[found.lane] || []).join(", "),
      questions: "Is the schedule fixed? What systems and tools will I touch? How many hours per week? Who handles escalation?",
      redFlags: "Watch for vague schedule, unpaid availability, high on-call expectations, or low technical depth."
    },
    createdAt: now,
    updatedAt: now
  });

  jobs = [saved, ...jobs];
  saveJobs();
  renderAll();
  showToast("Saved discovered role to tracker.");
}

function clearFinderResults() {
  finderResults = [];
  finderHasRun = false;
  $("#sourceStatus").innerHTML = "";
  renderFinderResults();
}

function isFlexibleFinderMatch(job) {
  const text = `${job.title} ${job.location} ${job.rawType} ${job.description}`.toLowerCase();
  return job.remote || job.employmentType !== "full-time future target" || /remote|hybrid|part[\s-]?time|contract|flexible|weekend|evening/.test(text);
}

function dedupeDiscoveredJobs(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = (item.url || `${item.title}-${item.company}`).toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return item.title && item.company && item.url;
  });
}

function isTargetBridgeRole(job) {
  const title = String(job.title || "").toLowerCase();
  const text = `${title} ${job.description || ""}`.toLowerCase();
  const targetTitle = /(help desk|it support|desktop support|technical support|product support|application support|endpoint support|support specialist|support analyst|support technician|support engineer|customer support engineer|technical customer support|systems analyst|business systems analyst|business analyst|implementation specialist|implementation consultant|data center|datacenter|noc technician|network operations|field technician|low voltage|cctv|remote hands|workflow automation|automation analyst|claims analyst|application analyst|underwriting systems|insurance systems|policy systems)/i;
  const targetBody = /(ticketing|user support|endpoint troubleshooting|microsoft 365|active directory|desktop imaging|rack and stack|remote hands|workflow automation|business requirements|user acceptance testing|claims systems|policy systems|underwriting operations)/i;
  const badTitle = /(head of|vp|director|senior software|staff software|software engineer|full.stack|frontend|backend|developer|sales|account executive|marketing|copywriter|designer|recruit|brand manager|physician|nurse|cinematic|video editor)/i;

  if (targetTitle.test(title)) return true;
  if (badTitle.test(title)) return false;
  return targetBody.test(text) && /(support|analyst|technician|specialist|implementation|automation|systems)/i.test(title);
}

function isLocationCompatible(job) {
  const location = String(job.location || "").toLowerCase();
  const text = `${job.title || ""} ${job.company || ""} ${location} ${job.description || ""}`.toLowerCase();
  const locationPositive = /(worldwide|usa|u\.s\.|united states|americas|north america|california|san francisco|bay area|oakland|walnut creek|cupertino|south san francisco|san jose|san mateo|dublin)/;
  const regionNegative = /(germany|deutschland|berlin|munich|augsburg|brazil|latam|europe only|europe,|israel|india|australia only|m\/w\/d|gmbh)/;

  if (regionNegative.test(text) && !/(usa|u\.s\.|united states|north america|americas|worldwide)/.test(location)) return false;
  if (locationPositive.test(text)) return true;
  if (job.source === "Remotive" && job.remote) return true;
  return Boolean(job.remote && locationPositive.test(location));
}

function countMatches(text, terms) {
  return terms.reduce((count, term) => count + (text.includes(term) ? 1 : 0), 0);
}

function stripHtml(value) {
  const element = document.createElement("div");
  element.innerHTML = value;
  return element.textContent || element.innerText || "";
}

function truncateText(value, maxLength) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3)}...`;
}

function getFilteredJobs() {
  const search = $("#searchInput").value.trim().toLowerCase();
  const lane = $("#laneFilter").value;
  const status = $("#statusFilter").value;
  const employment = $("#employmentFilter").value;
  const schedule = $("#scheduleFilter").value;
  const minScore = Number($("#minScoreFilter").value);
  const sortBy = $("#sortSelect").value;

  return getScoredJobs(jobs)
    .filter((job) => lane === "All lanes" || job.lane === lane)
    .filter((job) => status === "All statuses" || job.status === status)
    .filter((job) => employment === "All types" || job.employmentType === employment)
    .filter((job) => schedule === "All schedules" || job.schedule === schedule)
    .filter((job) => job.bridgeScore >= minScore)
    .filter((job) => {
      if (!search) return true;
      const haystack = [
        job.title,
        job.company,
        job.location,
        job.lane,
        job.status,
        job.notes.fit,
        job.notes.learn,
        job.notes.keywords,
        job.notes.questions,
        job.notes.redFlags
      ].join(" ").toLowerCase();
      return haystack.includes(search);
    })
    .sort((a, b) => {
      if (sortBy === "pay") return parsePayValue(b.payRange) - parsePayValue(a.payRange);
      if (sortBy in a.scores) return b.scores[sortBy] - a.scores[sortBy];
      return b.bridgeScore - a.bridgeScore;
    });
}

function getScoredJobs(items) {
  return items.map((job) => ({ ...job, bridgeScore: calculateScore(job.scores) })).sort((a, b) => b.bridgeScore - a.bridgeScore);
}

function calculateScore(scores) {
  return SCORE_FIELDS.reduce((total, [key, , weight]) => total + (Number(scores[key]) || 0) * weight, 0);
}

function getDecisionLabel(score) {
  if (score >= 75) return { text: "Strong bridge role", className: "strong" };
  if (score >= 55) return { text: "Worth applying", className: "apply" };
  if (score >= 35) return { text: "Maybe / research more", className: "maybe" };
  return { text: "Avoid unless cash is needed", className: "avoid" };
}

function openJobDialog(job = null) {
  const dialog = $("#jobDialog");
  $("#jobForm").reset();
  $("#dialogTitle").textContent = job ? "Edit Job" : "Add Job";
  $("#deleteJobButton").style.display = job ? "inline-flex" : "none";

  const target = job || normalizeJob({
    title: "",
    company: "",
    location: "",
    employmentType: "part-time",
    schedule: "flexible",
    lane: "IT Support",
    status: "Researching",
    scores: {
      cash_score: 5,
      schedule_fit: 5,
      tech_exposure: 5,
      people_fit: 5,
      exit_value: 5,
      stress_cost: 5
    }
  });

  $("#jobId").value = target.id;
  $("#titleInput").value = target.title;
  $("#companyInput").value = target.company;
  $("#locationInput").value = target.location;
  $("#urlInput").value = target.applyUrl;
  $("#employmentInput").value = target.employmentType;
  $("#scheduleInput").value = target.schedule;
  $("#payInput").value = target.payRange;
  $("#commuteInput").value = target.commuteEstimate;
  $("#laneInput").value = target.lane;
  $("#statusInput").value = target.status;
  $("#fitNotesInput").value = target.notes.fit;
  $("#learnNotesInput").value = target.notes.learn;
  $("#keywordNotesInput").value = target.notes.keywords;
  $("#questionsNotesInput").value = target.notes.questions;
  $("#redFlagsNotesInput").value = target.notes.redFlags;

  SCORE_FIELDS.forEach(([key]) => {
    $(`#${key}Input`).value = target.scores[key];
    $(`#${key}Value`).textContent = target.scores[key];
  });

  updateLiveScore();

  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "open");
}

function closeJobDialog() {
  const dialog = $("#jobDialog");
  if (typeof dialog.close === "function") dialog.close();
  else dialog.removeAttribute("open");
}

function saveJobFromForm(event) {
  event.preventDefault();
  const id = $("#jobId").value || createId();
  const existing = jobs.find((job) => job.id === id);
  const now = new Date().toISOString();

  const job = normalizeJob({
    id,
    title: $("#titleInput").value.trim(),
    company: $("#companyInput").value.trim(),
    location: $("#locationInput").value.trim(),
    applyUrl: $("#urlInput").value.trim(),
    employmentType: $("#employmentInput").value,
    schedule: $("#scheduleInput").value,
    payRange: $("#payInput").value.trim(),
    commuteEstimate: $("#commuteInput").value.trim(),
    lane: $("#laneInput").value,
    status: $("#statusInput").value,
    scores: Object.fromEntries(SCORE_FIELDS.map(([key]) => [key, Number($(`#${key}Input`).value)])),
    notes: {
      fit: $("#fitNotesInput").value.trim(),
      learn: $("#learnNotesInput").value.trim(),
      keywords: $("#keywordNotesInput").value.trim(),
      questions: $("#questionsNotesInput").value.trim(),
      redFlags: $("#redFlagsNotesInput").value.trim()
    },
    createdAt: existing?.createdAt || now,
    updatedAt: now
  });

  if (!job.title || !job.company || !job.location) {
    showToast("Title, company, and location are required.");
    return;
  }

  jobs = existing ? jobs.map((item) => item.id === id ? job : item) : [job, ...jobs];
  saveJobs();
  closeJobDialog();
  renderAll();
  showToast(existing ? "Job updated." : "Job added.");
}

function deleteCurrentJob() {
  const id = $("#jobId").value;
  const job = jobs.find((item) => item.id === id);
  if (!job) return;

  const ok = window.confirm(`Delete "${job.title}"?`);
  if (!ok) return;

  jobs = jobs.filter((item) => item.id !== id);
  saveJobs();
  closeJobDialog();
  renderAll();
  showToast("Job deleted.");
}

function updateLiveScore() {
  const scores = Object.fromEntries(SCORE_FIELDS.map(([key]) => [key, Number($(`#${key}Input`).value)]));
  $("#liveScore").textContent = Math.round(calculateScore(scores));
}

function resetFilters() {
  $("#searchInput").value = "";
  $("#laneFilter").value = "All lanes";
  $("#statusFilter").value = "All statuses";
  $("#employmentFilter").value = "All types";
  $("#scheduleFilter").value = "All schedules";
  $("#minScoreFilter").value = "0";
  $("#minScoreReadout").textContent = "0";
  $("#sortSelect").value = "score";
  renderJobList();
}

function restoreSamples() {
  const ok = window.confirm("Restore starter examples? This will replace the current job list.");
  if (!ok) return;
  jobs = withIds(STARTER_JOBS);
  saveJobs();
  renderAll();
  showToast("Starter examples restored.");
}

function exportJson() {
  downloadFile("tech-bridge-jobs.json", JSON.stringify(jobs, null, 2), "application/json");
  showToast("JSON export prepared.");
}

function exportCsv() {
  const headers = [
    "Title",
    "Company",
    "Location",
    "Apply URL",
    "Employment Type",
    "Schedule",
    "Pay Range",
    "Commute Estimate",
    "Role Lane",
    "Status",
    "Bridge Score",
    "Decision Label",
    "Cash Score",
    "Schedule Fit",
    "Tech Exposure",
    "People Fit",
    "Exit Value",
    "Stress Cost",
    "Why This Fits",
    "Need To Learn",
    "Resume Keywords",
    "Interview Questions",
    "Red Flags"
  ];

  const rows = getScoredJobs(jobs).map((job) => [
    job.title,
    job.company,
    job.location,
    job.applyUrl,
    job.employmentType,
    job.schedule,
    job.payRange,
    job.commuteEstimate,
    job.lane,
    job.status,
    Math.round(job.bridgeScore),
    getDecisionLabel(job.bridgeScore).text,
    job.scores.cash_score,
    job.scores.schedule_fit,
    job.scores.tech_exposure,
    job.scores.people_fit,
    job.scores.exit_value,
    job.scores.stress_cost,
    job.notes.fit,
    job.notes.learn,
    job.notes.keywords,
    job.notes.questions,
    job.notes.redFlags
  ]);

  const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  downloadFile("tech-bridge-jobs.csv", csv, "text/csv");
  showToast("CSV export prepared.");
}

function importJsonFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => importJobsFromJson(String(reader.result || ""));
  reader.onerror = () => showToast("Could not read that file.");
  reader.readAsText(file);
  event.target.value = "";
}

function importJsonText() {
  importJobsFromJson($("#importTextArea").value);
}

function importJobsFromJson(raw) {
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) throw new Error("Import must be a JSON array.");
    jobs = parsed.map(normalizeJob);
    saveJobs();
    renderAll();
    $("#importTextArea").value = "";
    showToast(`Imported ${jobs.length} jobs.`);
  } catch (error) {
    console.error(error);
    showToast("Import failed. Use a JSON array exported from this app.");
  }
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function switchTab(tabName) {
  activeTab = tabName;
  $$(".tab-button").forEach((button) => button.classList.toggle("active", button.dataset.tab === tabName));
  $$(".tab-panel").forEach((panel) => panel.classList.toggle("active", panel.id === tabName));
}

function toggleTheme() {
  document.body.classList.toggle("light");
  const theme = document.body.classList.contains("light") ? "light" : "dark";
  localStorage.setItem(THEME_KEY, theme);
}

function applySavedTheme() {
  const theme = localStorage.getItem(THEME_KEY);
  if (theme === "light") document.body.classList.add("light");
}

function getTopLane(scored) {
  const counts = new Map();
  scored.forEach((job) => counts.set(job.lane, (counts.get(job.lane) || 0) + 1));
  if (!counts.size) return "None";
  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1])[0][0];
}

function getNotePreview(job) {
  return job.notes.fit || job.notes.learn || job.notes.keywords || "Add research notes so this role has a clear decision trail.";
}

function parsePayValue(payRange) {
  if (!payRange) return 0;
  const numbers = payRange.match(/\d+(?:\.\d+)?/g)?.map(Number) || [];
  if (!numbers.length) return 0;
  const avg = average(numbers);
  return /k/i.test(payRange) ? avg * 1000 : avg;
}

function formatRemoteOkPay(min, max) {
  const low = Number(min);
  const high = Number(max);
  if (low && high) return `$${low.toLocaleString()}-$${high.toLocaleString()}`;
  if (low) return `$${low.toLocaleString()}+`;
  if (high) return `Up to $${high.toLocaleString()}`;
  return "";
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function clampNumber(value, min, max, fallback) {
  const number = Number(value);
  if (!Number.isFinite(number)) return fallback;
  return Math.min(max, Math.max(min, number));
}

function createId() {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `job-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function emptyState(message) {
  return `<p class="empty-state">${escapeHtml(message)}</p>`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}
