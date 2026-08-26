export default {
  intro: {
    label: "TMS",
    d1: "Dispatch process, in-plant logistics, and product delivery management",
    d2: "Integrated logistics management with AI-based auto dispatch, vehicle recognition, GPS, and automatic weighing",
  },
  features: {
    title1: "Completed with smart logistics —",
    title2: "Integrated Logistics & Transportation AI",
    items: [
      "AI-based automatic vehicle dispatch with KakaoTalk/app push notifications",
      "Unmanned weighing-station entry/exit management via vehicle-number recognition",
      "Real-time trip and arrival tracking via GPS location data",
      "Delivery management linked with QR codes, supporting documents, and receipts",
      "I/F integration with core systems such as SCM, ERP, and WMS",
    ],
  },
  system: {
    title: "System Architecture",
    desc: "Connects the TMS flow — from purchase receiving to shipment dispatch, vehicle control, and mobile transport reporting — into a single logistics operating framework.",
    processGroups: [
      { title: "Inbound Dispatch", label: "Purchasing", steps: ["Purchase order", "P/O issuance", "Inbound dispatch registration", "QR code issuance", "Main gate arrival"] },
      { title: "Outbound Dispatch", label: "Logistics", steps: ["Shipment request", "Transport order", "Outbound dispatch registration", "Loading complete", "Unloading at destination"] },
      { title: "Vehicle Control", label: "Gate", steps: ["Vehicle-number recognition", "Entry processing", "Empty weighing", "Loaded weighing", "Exit processing"] },
      { title: "Mobile TMS", label: "Driver App", steps: ["Dispatch confirmation", "Supporting documents", "Trip arrival", "Confirm weighing value on entry", "Receipt registration"] },
    ],
    supportItems: [
      { title: "Core System I/F", desc: "Integrates dispatch, weighing, and settlement data with SCM, ERP, and WMS." },
      { title: "Unmanned Weighing Station", desc: "Processes entry/exit via vehicle-number recognition and automatic weighing." },
      { title: "GPS Tracking", desc: "Manages location and destination information during transport, alongside mobile reporting." },
    ],
    originalAlt: "N·Core TMS integrated flow — inbound dispatch, outbound dispatch, mobile TMS, unmanned weighing station",
  },
  reference: {
    title: "TMS Use Cases",
    desc: "See TMS/WSS deployment cases at major steel manufacturing sites, shown on a map.",
    imageAlt: "Map of N·Core TMS deployment cases",
  },
  effect: {
    title: "Expected Benefits",
    desc: "AI dispatch and unmanned weighing raise logistics operating efficiency and delivery management accuracy.",
    items: [
      { title: "Lower Logistics Cost", desc: "Automatic dispatch and unmanned weighing lower logistics operating cost." },
      { title: "Shorter Wait Times", desc: "Entry/exit call alerts and automatic weighing minimize vehicle wait times." },
      { title: "Trip Visibility", desc: "GPS location data and mobile reporting provide real-time visibility into trip status." },
      { title: "Automated Core System Integration", desc: "Integrated with SCM/ERP/WMS to automatically process dispatch, weighing, and closing data." },
    ],
  },
};
