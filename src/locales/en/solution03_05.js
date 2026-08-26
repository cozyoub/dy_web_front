export default {
  intro: {
    label: "ESH",
    d1: "The complete safe manufacturing workplace",
    d2: "Serious-accident prevention and integrated environment/safety/health management (Zero incidents, Zero accidents)",
  },
  features: {
    title1: "Realized with IoT and AI —",
    title2: "Environmental Safety Management AI",
    items: [
      "TMS-based air quality management: 24-hour remote stack monitoring of emissions",
      "IoT wastewater detection system: water pollution measurement with web/mobile alarms",
      "Intelligent video security: entrance detection for hazardous areas, virtual fencing, unauthorized-entry alarms",
      "Integration with the Korea Environment Corporation TMS network and a unified in-house control center",
      "Integrated serious-accident prevention and EHS management (Zero incidents, Zero accidents)",
    ],
  },
  system: {
    title: "System Architecture",
    desc: "Connects the ESH work portal, air quality management, wastewater detection, and intelligent video security into a single control flow.",
    dashboardAlt: "ESH integrated environment/safety/health dashboard mockup",
    serviceCards: [
      { title: "Air Quality Management with TMS", desc: ["24-hour management of air pollutant emissions via the remote stack monitoring system (TMS)", "Real-time monitoring and mobile alerts on anomalies via ESH air management features"] },
      { title: "IoT Wastewater Detection over Wired/Wireless Networks", desc: ["Water-quality sensors manage chemical and wastewater discharge volumes", "Measured wastewater data is delivered to web/mobile monitoring with alarms"] },
      { title: "Intelligent Video Security for Targeted Areas via IP Cameras", desc: ["Motion detection at hazardous-area entrances and virtual fencing for access surveillance", "Alerts to web/mobile monitoring and photo capture on unauthorized entry"] },
    ],
    flowGroups: [
      { title: "Air Quality Data", imageAlt: "TMS air quality monitoring flow", points: ["Stack emission measurement", "Sensor data collection", "Cloud/control server integration", "Web/mobile alerts"] },
      { title: "Wastewater Detection Network", imageAlt: "IoT wastewater detection network flow", points: ["Water-quality sensor measurement", "Wireless gateway transmission", "Data server storage", "Control screen/alarm output"] },
      { title: "Intelligent Video Security", imageAlt: "IP camera intelligent video security flow", points: ["Access-control area detection", "IP camera video analysis", "Network/server transmission", "Web control/mobile alerts"] },
    ],
  },
  effect: {
    title1: "Environmental Safety AI",
    title2: "for a safe, sustainable manufacturing workplace",
    desc: "Integrated support for workplace ESH — from air, wastewater, and video surveillance to serious-accident prevention.",
    items: [
      { title: "Zero Incidents, Zero Accidents", desc: ["Integrated EHS management to prevent serious accidents", "Real-time surveillance of hazardous areas with immediate alarm response"] },
      { title: "Integrated Air & Wastewater Monitoring", desc: ["24-hour management of air pollutant emissions via TMS", "IoT wastewater detection and real-time water-quality monitoring"] },
      { title: "Intelligent Video Analysis", desc: ["IP-camera-based surveillance of specific areas", "Unauthorized-entry detection and mobile/web alerts"] },
      { title: "Integration with the Environment Corporation", desc: ["Integration with the Korea Environment Corporation TMS network", "Unified management across the Capital, Southeast, South, and Central control centers"] },
    ],
  },
};
