export default {
  intro: {
    label: "ICS",
    d1: "Connects equipment data in real time on industry-standard protocols",
    d2: "to support building an AI Factory",
  },
  features: {
    title1: "An integrated facility control system,",
    title2: "completed with AI and digital twins",
    items: [
      "One-stop service spanning shop-floor equipment hardware, core business systems, and AI software",
      "Adopts industry-standard data acquisition/control platforms",
      "Builds real-time-data-driven digital twins, including simulation twins linked with AI",
      "Standard remote equipment control plus intelligent control linked with process (production/quality) optimization AI",
      "AAS (Asset Administration Shell) integration per data, connectivity, and operating standards",
    ],
  },
  diagram: { title: "System Architecture", alt: "N·Core ICS System Architecture" },
  tabs: {
    title: "N·Core ICS Use Cases by Industry",
    desc: "Real-world cases applying digital twin and AI-based equipment control across steel, auto parts, chemicals, logistics, and more",
    categories: [
      {
        label: "Steel",
        cases: [
          { title: "Digital Twin Simulation", bullets: ["Level 3 digital twin", "Simulation linked with process-optimization AI", "Integrated facility control / intelligent control"] },
          { title: "AI Intelligent Control for Rolling Equipment", bullets: ["Embedded integration with the equipment management system", "AI-based coil thickness prediction", "Standardized equipment operating parameter data"] },
        ],
      },
      {
        label: "Auto Parts",
        cases: [
          { title: "Digital Twin", bullets: ["Tool usage history management", "Production status and equipment status control", "Linked with core-system work orders and performance"] },
          { title: "Factory Digital Twin", bullets: ["Wide-plant-level digital twin", "AMR and other material handling", "Detailed digital twins by equipment stage"] },
          { title: "Unmanned Automated Control", bullets: ["Downstream equipment control based on process results", "Lot-tracing data including input materials", "Real-time rework and minimized production time"] },
        ],
      },
      {
        label: "Color-Coated Steel",
        cases: [{ title: "Core System Performance Integration", bullets: ["Automatic linkage of production results to work orders", "Facility-team control and alarms by equipment section", "Overall equipment efficiency analysis"] }],
      },
      {
        label: "Public Sector",
        cases: [{ title: "Interceptor Facility Control", bullets: ["Control of environmental corporation interceptor facilities", "Water quality, conductivity, and level data management", "Remote sluice, motor, and compressor control"] }],
      },
      {
        label: "Chemical",
        cases: [{ title: "Production Process Quality Control", bullets: ["Remote quality-data analysis", "Remote equipment control (piping, pumps, valves)", "Linked with environmental/safety alarm systems"] }],
      },
      {
        label: "Film",
        cases: [{ title: "Production Control Monitoring", bullets: ["Automated core-system performance framework", "Analysis of critical quality data", "Condition-based equipment control"] }],
      },
      {
        label: "Logistics",
        cases: [{ title: "Unmanned Weighing System", bullets: ["Integrated with the transportation management system", "PLC-based weighing system", "Integrated remote control across domestic and overseas plants"] }],
      },
      {
        label: "Heat Treatment",
        cases: [{ title: "Quality Control & Alarms", bullets: ["User-configurable alarm system", "Production status control by work order", "Prevents quality issues before they occur"] }],
      },
      {
        label: "Utilities",
        cases: [{ title: "Water Treatment Facility Control", bullets: ["Modernized legacy mosaic panels", "Remote control and operation of pumps and gate valves", "Utility facility control"] }],
      },
    ],
  },
};
