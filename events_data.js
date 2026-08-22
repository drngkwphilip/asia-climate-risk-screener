// Validation event log — well-documented Asian climate disasters used to grade
// whether the dashboard's indicators reflect reality. Types:
//   heat  -> ERA5 TX90p hot-day count for the event year (calendar-day 90th pct, 1961-90 calibration)
//   rain  -> ERA5 annual max 1-day precipitation (Rx1day) for the event year
//   flood -> GloFAS annual max river discharge for the event year
// Protocol (v1.1): each series is detrended (Theil-Sen slope removed) before ranking;
// hit = event year at or above the 95th percentile of the detrended record;
// all other location-years in the same record serve as specificity controls (expected hit rate ~5%).
window.EVENTS = [
  { name:"Zhengzhou extreme rainfall ('21·7' Henan flood)", place:"Zhengzhou, China", year:2021, lat:34.75, lon:113.62, type:"rain" },
  { name:"Pakistan super-flood (Indus, Sindh)", place:"Sindh, Pakistan", year:2022, lat:26.50, lon:68.00, type:"flood" },
  { name:"India–Pakistan heatwave", place:"Jacobabad, Pakistan", year:2022, lat:28.30, lon:68.40, type:"heat" },
  { name:"Yangtze basin heatwave & drought", place:"Chongqing, China", year:2022, lat:29.56, lon:106.55, type:"heat" },
  { name:"Southeast Asia heatwave", place:"Bangkok, Thailand", year:2024, lat:13.75, lon:100.50, type:"heat" },
  { name:"North India heatwave", place:"Delhi, India", year:2024, lat:28.61, lon:77.21, type:"heat" },
  { name:"Cyclone Michaung extreme rain", place:"Chennai, India", year:2023, lat:13.08, lon:80.27, type:"rain" },
  { name:"Kyushu floods", place:"Kumamoto, Japan", year:2020, lat:32.80, lon:130.71, type:"rain" }
];
