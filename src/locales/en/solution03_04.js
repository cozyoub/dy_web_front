export default {
  intro: {
    label: "Qeye",
    d1: "An image-learning-based defect classification and integrated viewer solution",
    d2: "AI-based defect-type learning for smart quality management (lowering Q-Cost)",
  },
  features: {
    title1: "Realized with AI-Vision —",
    title2: "Integrated Quality Management AI",
    items: [
      "Automatic defect classification through AI-based learning of quality defect types",
      "Middleware and integrated DB extracting surface-inspection (SSD) data from the NPL/CAL lines",
      "Continuous learning on an EfficientNet base (every 10 minutes)",
      "Automatic core-system integration of defect count/type, judgment results, and coil grade",
      "Smart quality management realized through an integrated viewer (lowering Q-Cost)",
    ],
  },
  diagram: {
    title: "System Architecture",
    lineShotAlt: "NPL/CAL line surface-inspection equipment layout",
    boxes: [
      {
        title: "Surface Inspection Equipment",
        imgAlt: "Visualization of surface-inspection equipment on the NPL/CAL lines",
        items: ["NPL-line surface inspector (SSD)", "CAL-line surface inspector (SSD)", "Collects coil surface images and defect information"],
      },
      {
        title: "AS-IS Surface-Inspection Operating Software",
        imgAlt: "Visualization of the legacy surface-inspection operating software",
        items: ["Parsytec operating software", "Monitors 8 major defect types", "No core-system integration and false-detection rate issues"],
      },
      {
        title: "Data-Extraction Middleware",
        imgAlt: "Visualization of the middleware extracting coil surface images and metafiles",
        items: ["Extracts coil surface images and metafiles every 10 minutes", "DB schema, image storage, and metafile analysis", "Image preprocessing for AI analysis"],
      },
      {
        title: "AI Module & Integrated DB",
        imgAlt: "Visualization of the GPU-server-based AI analysis module and integrated DB",
        items: ["GPU-server-based continuous learning", "Uses ResNet50 and EfficientNet models", "Unified management of defect types and judgment results"],
      },
      {
        title: "TO-BE SSD Operation",
        imgAlt: "Visualization of the TO-BE SSD integrated operating screen",
        items: ["Provides an integrated viewer via operating software", "Automatically manages defect count/type and judgment results", "Links coil grade to core systems"],
      },
      {
        title: "Integrated Database",
        imgAlt: "Visualization of the integrated database linked with core systems",
        items: ["New schema structure", "New metadata generation", "Integration with the core-system database"],
      },
    ],
  },
  effect: {
    title: "Expected Benefits",
    desc: "AI-analyzed surface-inspection data unifies the quality management framework and lowers Q-Cost.",
    items: [
      { title: "Lower Q-Cost", desc: "AI-based automatic defect classification lowers quality cost and realizes smart quality management." },
      { title: "AS-IS → TO-BE Transition", desc: "Advances from monitoring-only surface-inspection operation to a core-system-integrated TO-BE SSD operating framework." },
      { title: "Lower False-Detection Rate", desc: "Continuous EfficientNet learning delivers accurate defect classification tailored to real operating conditions." },
      { title: "Integrated Quality Data Management", desc: "Manages coil-surface images and metafiles in an integrated DB, linked with the GPU-server AI module." },
    ],
  },
};
