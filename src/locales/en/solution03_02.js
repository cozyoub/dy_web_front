export default {
  intro: {
    label: "eCMMS",
    d1: "Advancing equipment management, moving from TBM to CBM",
    d2: "Leveraging equipment data and predictive-maintenance AI modeling to build a real-time, data-driven maintenance system (raising OEEE)",
  },
  features: {
    title1: "From TBM to CBM —",
    title2: "Integrated Facility Maintenance AI",
    items: [
      "Facility maintenance planning based on CBM as well as TBM",
      "Real-time equipment data acquisition linked with the Integrated Facility Control System (ICS)",
      "AI-model-based anomaly detection and predictive-maintenance alarms",
      "Equipment monitoring and simulation output based on digital twin Level 2/3",
      "AR (Augmented Reality)-based support for on-site maintenance activities",
    ],
  },
  diagram: {
    title: "System Architecture",
    alt: "N·Core eCMMS System Architecture",
    flow: [
      { title: "Field Equipment & Data Sources", desc: "Collects production, quality, and maintenance data from the NPL, CAL, and SLT lines, inspection equipment, power meters, and environmental sensors." },
      { title: "ICS Data Acquisition", desc: "Standardizes equipment data via OPC servers/clients, plug-in modules, and the N·Core DA Framework." },
      { title: "Automation Gateway", desc: "Connects field data with core-system data via OPC-UA, MQTT, GraphQL, and data loggers." },
      { title: "DT · AR Maintenance", desc: "Outputs real-time monitoring and maintenance results through digital twin Level 2/3 and AR-based maintenance activities." },
    ],
  },
  effect: {
    title1: "Data-driven maintenance,",
    title2: "delivering smart facility maintenance AI",
    desc: "Integrates everything from predictive maintenance to AR-based field maintenance, using ICS-linked data and AI analysis.",
    items: [
      { title: "Improved OEEE", desc: "Real-time, data-driven maintenance activities raise equipment uptime and production efficiency." },
      { title: "Predictive Maintenance Framework", desc: "AI modeling and learning predict failures before they happen, enabling proactive maintenance." },
      { title: "Advanced Maintenance Planning", desc: "CBM-based maintenance planning minimizes maintenance cost and downtime." },
      { title: "Higher Field Maintenance Efficiency", desc: "AR-based maintenance activities linked with core-system records raise on-site productivity." },
    ],
  },
};
