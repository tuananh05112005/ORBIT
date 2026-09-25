export const missionsData = [
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
];
