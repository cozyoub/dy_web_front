export default {
  intro: {
    label: "ICS",
    d1: "Laying the foundation for Factory AI",
    d2: "Intelligent equipment control and digital twins built on real-time field data",
  },
  features: {
    title1: "An integrated facility control AI,",
    title2: "completed with AI and digital twins",
    items: [
      "One-stop service spanning shop-floor equipment hardware, core business systems, and AI software",
      "Industry-standard high-volume, high-speed data acquisition and real-time equipment control",
      "Data, connectivity, and operating standards integration via AAS (Asset Administration Shell) standardization",
      "Digital twin Level 2/3 with AI-linked simulation twins",
      "Intelligent equipment control based on predictive-maintenance, production, and quality-optimization AI models",
    ],
  },
  diagram: {
    title: "System Architecture",
    alt: "N·Core ICS System Architecture",
    flow: [
      { title: "Field Equipment Data", desc: "Collects PLC, HMI, sensor, PC control, and file/message-based data using industry-standard methods." },
      { title: "AAS Standard Modeling", desc: "Standardizes equipment assets and data attributes to consistently manage communication, operations, and mapping information." },
      { title: "ICS Integrated Control", desc: "Performs real-time control via high-volume, high-speed data acquisition, CPS/DT logic control, and the N·Core DA Framework." },
      { title: "AI · Digital Twin", desc: "Feeds predictive maintenance, production/quality optimization, and simulation results back into on-site monitoring and control." },
    ],
  },
  tabs: {
    title: "N·Core ICS AI Use Cases by Industry",
    desc: "Real-world cases applying digital twin and AI-based equipment control across steel, auto parts, chemicals, logistics, and more",
    categories: [
      { label: "Steel", cases: [{ title: "AI Intelligent Control for Rolling Equipment", bullets: ["Embedded integration with the equipment management system", "AI-based coil thickness prediction", "Standardized equipment operating parameter data"] }] },
      { label: "Auto Parts", cases: [{ title: "Unmanned Automated Equipment Control", bullets: ["Downstream equipment control based on process results", "Lot-tracing data including input materials", "Real-time rework and minimized production time"] }] },
      { label: "Casting", cases: [{ title: "AI Quality Analysis for Casting Machines", bullets: ["Thermal-imaging analysis of mold temperature", "Machine-learning models built on collected data", "Real-time quality-prediction data control"] }] },
      { label: "Color-Coated Steel", cases: [{ title: "Equipment Control & Performance Integration", bullets: ["Automatic linkage of production results to work orders", "Facility-team control and alarms by equipment section", "Overall equipment efficiency analysis"] }] },
      { label: "Chemical", cases: [{ title: "Production Process Quality Control", bullets: ["Remote quality-data analysis", "Remote equipment control (piping, pumps, valves)", "Linked with environmental/safety alarm systems"] }] },
      { label: "Film", cases: [{ title: "Production Control Monitoring", bullets: ["Automated core-system performance framework", "Analysis of critical quality data", "Condition-based equipment control"] }] },
      { label: "Logistics", cases: [{ title: "Integrated Weighing-Station Control", bullets: ["Integrated with the transportation management system", "PLC-based weighing system", "Integrated remote control across domestic and overseas plants"] }] },
      { label: "Heat Treatment", cases: [{ title: "Quality Control & Alarms", bullets: ["User-configurable alarm system", "Production status control by work order", "Prevents quality issues before they occur"] }] },
      { label: "Utilities", cases: [{ title: "Water Treatment Facility Control", bullets: ["Modernized legacy mosaic panels", "Remote control and operation of pumps and gate valves", "Utility facility control"] }] },
    ],
  },
  case1: {
    title: "AAS, AI, Digital Twin Use Case 1",
    desc: "Nickel plating line digital twin: process-optimization AI model and intelligent control",
    alt: "AAS AI Digital Twin use case 1",
    flow: [
      { title: "AAS · AI · Digital Twin", desc: "Models field equipment and data sources with AAS, and applies AI analysis results to digital twin simulation." },
      { title: "Core System Integration", desc: "Integrates MES, ERP, CMMS, and ICS data, connecting it to a web-based autonomous manufacturing platform and equipment control screens." },
    ],
  },
  case2: {
    title: "Core System Integration Use Case 2",
    desc: "Integrated factory operating status dashboard: real-time integrated factory status",
    alt: "Core system integration use case 2",
  },
  effect: {
    title: "Expected Benefits",
    desc: "Builds the foundation for Factory AI — from real-time equipment data acquisition to AI modeling and intelligent control.",
    items: [
      { title: "Real-Time Equipment Control", desc: "Field equipment data acquisition and control, plus AI/ML modeling for predictive maintenance, production, and quality optimization" },
      { title: "Intelligent Equipment Control", desc: "Intelligent equipment control based on optimal operating parameters derived from AI analysis" },
      { title: "Digital Twin", desc: "Process optimization and predictive operations via digital twin Level 2/3 and simulation" },
      { title: "Core System Integration", desc: "Real-time integration with ERP, MES, CMMS, TMS, and other core systems that need equipment data" },
    ],
  },
};
