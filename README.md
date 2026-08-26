# Asia Climate Risk Screener

**Free, open, one-click climate-risk screening for more than 15,000 power stations across Asia — physical risk, transition risk, and replacement resource, computed live in your browser.**

- **Live demo:** https://asia-climate-risk-screener.netlify.app — live and verified on desktop and mobile
- **Preprint:** https://doi.org/10.31224/8047 (engrXiv, posted 24 Aug 2026)
- **Permanent archive:** https://doi.org/10.5281/zenodo.22058897

## What this is

A single self-contained web page (zero backend, no account, no API key) that maps:

- **5,341 fossil-fuel power assets** with satellite-estimated emissions (Climate TRACE, 2025 release, CC BY 4.0)
- **2,265 Asian coal plants** — the complete fleet, unit-level aggregated, with ages, planned retirements and owners (GEM Global Coal Plant Tracker, Jul 2026, CC BY 4.0); 96% of operating plants cross-matched to Climate TRACE at ≤5 km
- **10,116 clean-energy plants** — solar & wind (GEM, Feb 2026), hydro & geothermal (GEM, Mar 2026), bioenergy (GBPT V3) and nuclear (GEM, Aug 2026); operating, ≥50 MW (nuclear: all sizes), all CC BY 4.0

Click any dot and the page builds a plain-language risk profile from four live public feeds — six decades of measured weather (ERA5 via Open-Meteo), river-discharge records since 1984 (GloFAS), climate-model projections to 2050 (CMIP6), and satellite-derived solar/wind resource (NASA POWER), all fetched live in the browser — plus the bundled emissions and census data above.

## Does it work? (measured, not asserted)

A built-in evaluation harness (labelled "validation" in the interface) grades the hazard-data pipeline against **8 documented Asian climate disasters** (Zhengzhou 2021, Pakistan super-flood 2022, Jacobabad 2022, Chongqing 2022, Bangkok 2024, Delhi 2024, Chennai 2023, Kumamoto 2020) under a two-arm protocol: each series is detrended (Theil–Sen), and the event year must rank ≥95th percentile of the location's own record (recall); every other location-year in the same records is graded as a control (specificity).

**Full live run, graded 2026-08-21: recall 4 of 8** — all four rainfall/flood events CONFIRMED (Zhengzhou 95th, Sindh 97th, Chennai 98th, Kumamoto 97th); the four heat events rank 57th–94th after detrending and are shown openly with their diagnostics. **Specificity: 3.8% of 477 control location-years flagged**, consistent with the ~5% expected by construction. Note the heat "misses" are a property of the strict detrended single-year test — the tool's shipped distributional heat indicator flags all four heat sites as elevated. Recompute it yourself: open the site → Tab 3 → "Run validation now".

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

Ng, K. W. P. (2026). *Asia Climate Risk Screener: A Zero-Backend Browser Tool for Asset-Level Physical and Transition Climate-Risk Screening.* engrXiv preprint, posted 24 Aug 2026. https://doi.org/10.31224/8047
