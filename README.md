# ⛽ FuelWatch APAC

**Asia-Pacific petrol station prices — updated daily, automatically.**

Live site: `https://YOUR-USERNAME.github.io/fuelwatch-apac`

---

## How It Works

```
GitHub Actions runs every day at 8am SGT
        ↓
scripts/scrape_prices.py scrapes 10+ APAC markets
        ↓
docs/prices.json is updated & committed
        ↓
docs/index.html reads prices.json on page load
        ↓
Visitors always see fresh prices
```

---

## ⚡ Setup (5 minutes)

### Step 1 — Create GitHub repo

1. Go to [github.com](https://github.com) → Sign up / Log in (free)
2. Click **"New repository"**
3. Name it: `fuelwatch-apac`
4. Set to **Public**
5. Click **"Create repository"**

### Step 2 — Upload these files

Upload the entire folder structure:
```
fuelwatch-apac/
├── .github/
│   └── workflows/
│       └── daily-scrape.yml   ← GitHub Actions scheduler
├── docs/
│   ├── index.html             ← The website
│   └── prices.json            ← Price data (auto-updated daily)
├── scripts/
│   └── scrape_prices.py       ← The scraper
└── README.md
```

You can drag-and-drop files directly on GitHub, or use GitHub Desktop app.

### Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages**
2. Under "Source", select **"Deploy from a branch"**
3. Branch: `main` / Folder: `/docs`
4. Click **Save**
5. Your site is live at: `https://YOUR-USERNAME.github.io/fuelwatch-apac`

### Step 4 — Run first scrape manually

1. Go to your repo → **Actions** tab
2. Click **"Daily Fuel Price Scraper"**
3. Click **"Run workflow"** → **"Run workflow"**
4. Wait ~30 seconds → prices.json updates automatically

### Step 5 — Done!

From now on, every day at 8am SGT, GitHub automatically:
- Runs the scraper
- Updates prices.json
- Your website shows fresh prices

---

## Updating Prices Manually

If you spot a wrong price (like the SG correction), edit `docs/prices.json` directly on GitHub and commit. The website picks it up immediately.

---

## Data Sources

| Country | Source |
|---------|--------|
| 🇸🇬 Singapore | motorist.sg |
| 🇲🇾 Malaysia | hargaminyak.net (KPDNHEP official) |
| 🇹🇭 Thailand | pttplc.com |
| 🇵🇭 Philippines | doe.gov.ph |
| 🇮🇩 Indonesia | pertamina.com |
| 🇦🇺 Australia | fuelwatch.wa.gov.au |
| 🇯🇵 Japan | oil-info.iaee.or.jp (METI) |
| 🇰🇷 South Korea | opinet.co.kr |
| 🇨🇳 China | NDRC (government fixed) |
| 🇮🇳 India | iocl.com |

---

## Need Help?

Contact Nelson Lee — The Advocators & Co
