export const en = {
  nav: {
    brandSub: "AUTONOMOUS SYSTEMS",
    technology: "Technology",
    spacecraft: "Spacecraft",
    missions: "Missions",
    earth: "Earth",
    about: "About",
    contact: "CONTACT",
    contactMobile: "CONTACT MISSION CONTROL",
    systemStatus: "ORBIT PLATFORM // SYS-VER 3.8.4 // ALL SYSTEMS NOMINAL"
  },
  loading: {
    title: "ORBIT",
    statuses: [
      { at: 15, text: "SYNCHRONIZING STAR CATALOGUE..." },
      { at: 40, text: "CALIBRATING ATTITUDE SENSORS..." },
      { at: 70, text: "NEURAL GUIDANCE MATRIX ONLINE..." },
      { at: 90, text: "QUANTUM DOWNLINK NOMINAL..." },
      { at: 100, text: "ALL SYSTEMS NOMINAL" }
    ],
    footer: "AUTONOMOUS SPACE SYSTEMS // DEEP-SPACE ARCHITECTURE"
  },
  hero: {
    badge: "AUTONOMOUS SPACE SYSTEMS",
    titleLine1: "EXPLORE",
    titleLine2: "BEYOND.",
    subtext: "Autonomous technology for a new generation of deep-space exploration, planetary observation, and interplanetary infrastructure.",
    ctaPrimary: "EXPLORE TECHNOLOGY",
    ctaSecondary: "VIEW MISSIONS",
    scrollIndicator: "SCROLL TO EXPLORE",
    hudStatus: "ORBIT-TELEMETRY // ACTIVE",
    hudNominal: "CONSTELLATION STATUS: 100% NOMINAL"
  },
  intro: {
    tagline: "// PARADIGM SHIFT IN AEROSPACE",
    line1: "SPACE",
    line2: "IS NO LONGER",
    line3: "THE LIMIT.",
    footnote: "We architect self-governing orbital networks, autonomous lunar reconnaissance craft, and deep-space intelligence payloads designed to outlast human reaction times."
  },
  technology: {
    sectionLabel: "SYSTEM ARCHITECTURE",
    sectionTitle: "OUR TECHNOLOGY",
    sectionDesc: "Engineered from first principles for sovereign mission execution. Every subsystem combines aerospace-grade fault tolerance with on-orbit machine cognition.",
    cards: [
      {
        id: "01",
        tag: "SYS // NAV-CORE",
        title: "AUTONOMOUS NAVIGATION",
        subtitle: "DEEP-SPACE GUIDANCE & CONTROL",
        description: "AI-powered navigation systems designed for deep-space missions, computing real-time orbital maneuvers without Earth ground station latency.",
        specs: [
          { label: "LATENCY REDUCTION", value: "99.4%" },
          { label: "TRAJECTORY DRIFT", value: "< 0.02 mm/s" },
          { label: "AUTONOMY LEVEL", value: "LEVEL 5 SPACE" }
        ],
        highlight: "Autonomous multi-body gravitational slingshot calculation and optical pulsar tracking."
      },
      {
        id: "02",
        tag: "SYS // OPT-OBS",
        title: "EARTH OBSERVATION",
        subtitle: "SUB-METER HYPERSPECTRAL IMAGING",
        description: "High-resolution satellite intelligence for understanding our planet, tracking ecological shifts, climate fluctuations, and atmospheric dynamics.",
        specs: [
          { label: "RESOLUTION", value: "0.28 M / PIXEL" },
          { label: "SPECTRAL BANDS", value: "240 CHANNELS" },
          { label: "REVISIT TIME", value: "48 MINUTES" }
        ],
        highlight: "Onboard neural processor executes real-time cloud screening and anomaly classification."
      },
      {
        id: "03",
        tag: "SYS // OPT-COMMS",
        title: "SPACE COMMUNICATION",
        subtitle: "COHERENT LASER INTER-SATELLITE LINK",
        description: "Reliable communication systems for autonomous spacecraft constellations, maintaining high-throughput quantum-encrypted optical links.",
        specs: [
          { label: "BANDWIDTH", value: "100 Gbps OPTICAL" },
          { label: "LINK RANGE", value: "450,000 KM" },
          { label: "UPTIME", value: "99.999%" }
        ],
        highlight: "Adaptive pointing gimbal with piezo stabilization maintains locked optical beams across vast distances."
      }
    ]
  },
  spacecraft: {
    sectionLabel: "MODULAR BUS ARCHITECTURE",
    sectionTitle: "THE ORBIT PLATFORM",
    sectionDesc: "A next-generation autonomous spacecraft chassis engineered for harsh radiation environments, high-throughput edge processing, and autonomous orbit reconfiguration.",
    controlsHint: "CLICK & DRAG TO ROTATE // SCROLL TO ZOOM",
    zoomIn: "ZOOM +",
    zoomOut: "ZOOM -",
    reset: "RESET",
    hotspots: [
      {
        id: "01",
        title: "NAVIGATION CORE",
        subtitle: "PRIMARY GUIDANCE MODULE",
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
        description: "Wide-swath hyperspectral sensor package and synthetic aperture radar, synchronizing planetary surface scans with real-time onboard inference.",
        specs: {
          "SPECTRAL RANGE": "380nm - 2500nm",
          "GROUND SAMPLING": "0.28m GSD",
          "AI INFERENCE": "60 TOPS edge compute"
        }
      }
    ]
  },
  missions: {
    sectionLabel: "FLIGHT MANIFEST",
    sectionTitle: "MISSIONS",
    sectionDesc: "Executing autonomous orbital insertion, deep space trajectory guidance, and real-time station keeping across planetary horizons.",
    trajectoryLabel: "TRAJECTORY",
    orbitLabel: "ORBIT",
    durationLabel: "DURATION",
    apogeeLabel: "APOGEE / PERIGEE",
    inclinationLabel: "INCLINATION",
    payloadLabel: "PAYLOAD",
    successLabel: "SUCCESS RATE",
    list: [
      {
        id: "01",
        code: "ORBIT-01",
        name: "LOW EARTH ORBIT",
        status: "COMPLETED",
        statusType: "completed",
        year: "2024",
        orbit: "540 KM SUN-SYNCHRONOUS",
        duration: "420 DAYS",
        payload: "Autonomous Sensor Array Mark I",
        details: "Validation of neural network-based collision avoidance and autonomous station-keeping maneuvers in dense orbital debris zones.",
        telemetry: {
          inclination: "97.4°",
          apogee: "545 km",
          perigee: "538 km",
          successRate: "100%"
        }
      },
      {
        id: "02",
        code: "ORBIT-02",
        name: "LUNAR RECON",
        status: "IN PROGRESS",
        statusType: "active",
        year: "2025 - PRESENT",
        orbit: "120 KM CISLUNAR POLAR",
        duration: "184 DAYS ACTIVE",
        payload: "Hyperspectral Volatiles Scanner",
        details: "High-resolution topological mapping of lunar south pole craters, scouting sub-surface water ice deposits and autonomous landing coordinates.",
        telemetry: {
          inclination: "89.8°",
          apogee: "124 km",
          perigee: "118 km",
          successRate: "99.8%"
        }
      },
      {
        id: "03",
        code: "ORBIT-03",
        name: "DEEP SPACE",
        status: "PLANNED",
        statusType: "planned",
        year: "2027 TARGET",
        orbit: "HELIOCENTRIC / ASTEROID BELT",
        duration: "1,200 DAYS EXP.",
        payload: "Deep-Space Autonomous Scout Core",
        details: "Autonomous transit to near-Earth asteroid 469219 Kamo?oalewa. Testing long-range pulsar navigation and zero-intervention course correction.",
        telemetry: {
          inclination: "7.1°",
          apogee: "1.24 AU",
          perigee: "0.98 AU",
          successRate: "PENDING LAUNCH"
        }
      }
    ]
  },
  earth: {
    sectionLabel: "PLANETARY INTELLIGENCE",
    sectionTitle: "SEE EARTH DIFFERENTLY.",
    sectionDesc: "Continuous multispectral intelligence delivering synthetic aperture radar, infrared thermography, and hyper-temporal greenhouse gas analytics directly to decentralized terrestrial terminals.",
    stats: [
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
    ]
  },
  spaceData: {
    sectionLabel: "LIVE FLIGHT TELEMETRY",
    sectionTitle: "ORBITAL STATUS",
    liveBadge: "CARRIER LOCK // DOWNLINK 98.4%",
    telemetry: [
      { label: "ORBITAL ALTITUDE", value: "408", unit: "KM", trend: "+0.2" },
      { label: "VELOCITY", value: "7.66", unit: "KM/S", trend: "NOMINAL" },
      { label: "EXTERNAL TEMP", value: "-42", unit: "°C", trend: "STABLE" },
      { label: "DOWNLINK SIGNAL", value: "98.4", unit: "%", trend: "LOCKED" },
      { label: "MISSION ELAPSED", value: "184", unit: "DAYS", trend: "T+184:14:22" }
    ],
    waveformLabel: "S-BAND RF SIGNAL DISPERSION MONITOR",
    orbitPass: "PASS 4,892 // NEXT ECLIPSE: 32M"
  },
  cinematic: {
    tagline: "// INTERPLANETARY VOYAGE",
    headingLine1: "FROM EARTH",
    headingLine2: "TO THE UNKNOWN.",
    desc: "Traversing solar radiation belts, lunar shadows, and deep vacuum with zero ground station dependence. Autonomous guidance is the key to deep space permanency."
  },
  about: {
    sectionLabel: "MISSION PRINCIPLES",
    sectionTitle: "BUILDING FOR WHAT’S NEXT.",
    manifesto: "ORBIT develops autonomous systems designed to expand humanity’s reach beyond Earth.",
    body: "We replace latency-bound human teleoperation with decentralized onboard machine perception. From low Earth orbit debris avoidance to autonomous lunar hazard detection, our systems make mission-critical decisions in milliseconds.",
    stats: [
      { value: 2026, suffix: "", label: "FOUNDED", detail: "Formed to spearhead sovereign deep-space autonomy" },
      { value: 120, suffix: "+", label: "ENGINEERS", detail: "Specialists in orbital mechanics, avionics & AI" },
      { value: 18, suffix: "", label: "MISSIONS", detail: "Sub-orbital, LEO, and cislunar deployments" },
      { value: 42, suffix: "+", label: "SATELLITES", detail: "Currently operational in autonomous constellation" }
    ]
  },
  finalCta: {
    sectionLabel: "LAUNCH INITIATIVE",
    headingLine1: "THE NEXT FRONTIER",
    headingLine2: "STARTS HERE.",
    subtext: "Collaborate with our flight avionics team to integrate autonomous autonomy cores into your upcoming lunar, orbital, or interplanetary mission.",
    btnPrimary: "EXPLORE ORBIT",
    btnSecondary: "CONTACT US"
  },
  footer: {
    tagline: "AUTONOMOUS SPACE SYSTEMS",
    desc: "Pioneering autonomous edge computing and deep-space orbital guidance platforms.",
    navTitle: "NAVIGATION",
    commsTitle: "COMMUNICATIONS",
    missionControlTitle: "MISSION CONTROL",
    address: "Aerospace Operations Center\nLaunch Complex 39-A Sub-orbital Ring\npayload@orbit-space.aero",
    downlinkBtn: "[ INITIATE SECURE DOWNLINK ? ]",
    statusNominal: "© 2026 ORBIT. ALL SYSTEMS NOMINAL.",
    groundRelay: "GROUND RELAY: ACTIVE",
    encryption: "ENCRYPTION: QUANTUM 512-BIT",
    backToTop: "BACK TO TOP"
  },
  contactModal: {
    label: "// SECURE MISSION COMMUNICATOR",
    title: "INITIATE DOWNLINK",
    desc: "Inquire about spacecraft platform integration, constellation deployment, or proprietary autonomous guidance cores.",
    nameLabel: "FULL NAME // CALLSIGN",
    namePlaceholder: "e.g. Commander Marcus Vance",
    orgLabel: "ORGANIZATION / AGENCY",
    orgPlaceholder: "e.g. European Space Directorate / AeroTech Labs",
    emailLabel: "OFFICIAL EMAIL",
    emailPlaceholder: "contact@agency.space",
    objectiveLabel: "MISSION OBJECTIVE",
    options: [
      "LEO Constellation Autonomous Deployment",
      "Lunar Reconnaissance & Landing Guidance",
      "Deep-Space Interplanetary Scouting",
      "Optical Laser Link Integration",
      "Hyperspectral Earth Observation Payload"
    ],
    specLabel: "TECHNICAL SPECIFICATIONS / BRIEF",
    specPlaceholder: "Provide orbital inclination, target mass, or mission timeline...",
    submitBtn: "TRANSMIT SECURE PACKET",
    successTitle: "TRANSMISSION RECEIVED",
    successDesc: "Your inquiry has been routed to ORBIT Flight Mission Operations. Our orbital systems team will respond via encrypted link within 24 standard hours."
  }
};
