export const earthStats = [
  {
    value: 12.4,
    suffix: "M",
    unit: "KM²",
    label: "OBSERVED CONTINUOUSLY",
    desc: "Autonomous multispectral coverage per orbital pass across all biomes."
  },
  {
    value: 98.7,
    suffix: "%",
    unit: "ACCURACY",
    label: "DATA ACCURACY",
    desc: "AI surface atmospheric interference removal calibrated against laser ground beacons."
  },
  {
    value: 24,
    prefix: "",
    suffix: "/7",
    unit: "ACTIVE",
    label: "MONITORING",
    desc: "Constellation-wide uninterrupted optical and radar synthetic aperture coverage."
  }
];

export const spaceDataTelemetry = [
  { label: "ORBITAL ALTITUDE", value: "408", unit: "KM", trend: "+0.2" },
  { label: "VELOCITY", value: "7.66", unit: "KM/S", trend: "NOMINAL" },
  { label: "EXTERNAL TEMP", value: "-42", unit: "°C", trend: "STABLE" },
  { label: "DOWNLINK SIGNAL", value: "98.4", unit: "%", trend: "LOCKED" },
  { label: "MISSION ELAPSED", value: "184", unit: "DAYS", trend: "T+184:14:22" }
];

export const aboutStats = [
  { value: 2026, suffix: "", label: "FOUNDED", detail: "Formed to spearhead sovereign deep-space autonomy" },
  { value: 120, suffix: "+", label: "ENGINEERS", detail: "Specialists in orbital mechanics, avionics & AI" },
  { value: 18, suffix: "", label: "MISSIONS", detail: "Sub-orbital, LEO, and cislunar deployments" },
  { value: 42, suffix: "+", label: "SATELLITES", detail: "Currently operational in autonomous constellation" }
];

export const spacecraftHotspots = [
  {
    id: "01",
    title: "NAVIGATION CORE",
    subtitle: "PRIMARY GUIDANCE MODULE",
    position: [0, 0.4, 0.8],
    description: "Autonomous navigation for long-duration missions. Runs onboard optical star-trackers and pulsar triangulation matrix for zero-ground reliance.",
    specs: {
      "PROCESSING": "Triple-redundant neuromorphic SoC",
      "ATTITUDE DRIFT": "0.0001 deg/hr",
      "REACTION TIME": "12 ms intervention"
    }
  },
  {
    id: "02",
    title: "COMMUNICATION ARRAY",
    subtitle: "OPTICAL LASER TRANSCEIVER",
    position: [1.6, -0.2, -0.4],
    description: "Ultra-narrow beam laser transceiver maintaining inter-satellite crosslinks and deep-space relay connections with subterranean optical terminals.",
    specs: {
      "WAVELENGTH": "1550 nm coherent",
      "POINTING ACCURACY": "0.15 microrad",
      "DATA RATE": "100 Gbps burst"
    }
  },
  {
    id: "03",
    title: "OBSERVATION MODULE",
    subtitle: "MULTI-APERTURE PAYLOAD",
    position: [-1.4, 0.1, 0.5],
    description: "Wide-swath hyperspectral sensor package and synthetic aperture radar, synchronizing planetary surface scans with real-time onboard inference.",
    specs: {
      "SPECTRAL RANGE": "380nm - 2500nm",
      "GROUND SAMPLING": "0.28m GSD",
      "AI INFERENCE": "60 TOPS edge compute"
    }
  }
];
