# Asia Climate Risk Screener

**Free, open, one-click climate-risk screening for more than 15,000 power stations across Asia — physical risk, transition risk, and replacement resource, computed live in your browser.**

- **Live demo:** https://asia-climate-risk-screener.netlify.app — live and verified on desktop and mobile
- **Preprint:** [engrXiv DOI — to be added when live]
- **Permanent archive:** [Zenodo DOI — to be added when live]

## What this is

A single self-contained web page (zero backend, no account, no API key) that maps:

- **5,341 fossil-fuel power assets** with satellite-estimated emissions (Climate TRACE, 2025 release, CC BY 4.0)
- **2,265 Asian coal plants** — the complete fleet, unit-level aggregated, with ages, planned retirements and owners (GEM Global Coal Plant Tracker, Jul 2026, CC BY 4.0); 96% of operating plants cross-matched to Climate TRACE at ≤5 km
- **10,116 clean-energy plants** — solar & wind (GEM, Feb 2026), hydro & geothermal (GEM, Mar 2026), bioenergy (GBPT V3) and nuclear (GEM, Aug 2026); operating, ≥50 MW (nuclear: all sizes), all CC BY 4.0

Click any dot and the page builds a plain-language risk profile from five live public feeds: six decades of measured weather (ERA5 via Open-Meteo), river-discharge records since 1984 (GloFAS), climate-model projections to 2050 (CMIP6), and satellite-derived solar/wind resource (NASA POWER) — plus the emissions and census data above.

## Does it work? (measured, not asserted)

A built-in validation harness grades the pipeline against **8 documented Asian climate disasters** (Zhengzhou 2021, Pakistan super-flood 2022, Jacobabad 2022, Chongqing 2022, Bangkok 2024, Delhi 2024, Chennai 2023, Kumamoto 2020): did the disaster year rank in the extreme tail (≥80th percentile) of that location's own measured record?

**Result: 7 of 8 CONFIRMED (87.5%).** The eighth (Bangkok 2024, 73rd percentile) is displayed openly, not hidden — a diagnostic about grid-cell resolution, not a verdict of low risk. Recompute it yourself: open the site → Tab 3 → "Run validation now".

## Honest by design

- Every panel has an explicit "feed unavailable" state — no silent blanks, no fabricated data
- Every heuristic (composite score, replacement-area estimate, rating bands) is labelled as such in the interface
- Screening-grade only: not investment, lending or insurance advice

## Repository contents

| File | Purpose |
|---|---|
| `index.html` | The complete dashboard (HTML/CSS/vanilla JS; Leaflet + Chart.js via CDN) |
| `assets_data.js` | 5,341 Climate TRACE fossil assets + 24-city climate benchmark |
| `coal_data.js` | 2,265 GEM coal plants, unit-aggregated, cross-matched |
| `clean_data.js` | 10,116 GEM clean-energy plants (solar/wind/hydro/nuclear/geothermal/bioenergy) |
| `events_data.js` | The 8 validation events |
| `LICENSE` | MIT |

Deploy: drag these files onto any static host (e.g. Netlify), or open `index.html` locally.

## Data attribution

Climate TRACE (CC BY 4.0) · Global Energy Monitor trackers (CC BY 4.0; selected solar records derive from TransitionZero TZ-SAM, CC BY-NC 4.0 — non-commercial use only) · Open-Meteo archive/flood/climate APIs (CC BY 4.0; ERA5 © ECMWF/Copernicus, GloFAS © ECMWF/JRC) · NASA POWER (NASA open data) · Basemap © OpenStreetMap contributors, © CARTO.

## Disclosure of AI assistance

Built with AI assistance (Kimi AI, Moonshot AI) under continuous human direction. All engineering decisions, data-validation steps and final content were reviewed, tested and approved by the human author.

## Citation

[Citation block — to be added when the engrXiv DOI is live]
