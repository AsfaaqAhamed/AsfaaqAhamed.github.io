/* ============================================================
   PORTFOLIO CONTENT — EDIT THIS FILE ONLY
   ------------------------------------------------------------
   This is the ONLY file you need to edit to update your portfolio.
   To add a new job, project, certification, etc. just copy an
   existing block (between the { } braces), paste it, and change
   the text. Keep the commas and quotes exactly as shown.
   After editing, save the file and refresh the page.
   ============================================================ */

const PORTFOLIO = {

  /* ---------- BASIC PROFILE ---------- */
  profile: {
    name: "Asfaaq Ahamed",
    title: "Electrical & Electronic Engineer",
    // Short rotating taglines shown with a typing effect in the hero
    taglines: [
      "Embedded Systems & IoT",
      "Applied AI / Machine Learning",
      "Aviation Infrastructure",
      "Hardware × Software Engineer"
    ],
    location: "Addalaichenai, Sri Lanka",
    email: "asfaaq.jaafir@gmail.com",
    phone: "+94 77 429 2439",
    linkedin: "https://www.linkedin.com/in/asfaaqahamed",
    github: "", // add your GitHub URL here, e.g. "https://github.com/yourname"
    // Put your photo named "profile.jpg" in the SAME folder as index.html.
    // Until then a clean monogram is shown automatically.
    photo: "profile.jpg"
  },

  /* ---------- ABOUT (short version, shown on the page) ---------- */
  aboutShort: "Electrical & Electronic Engineer specializing in embedded systems, IoT, and applied AI. I design intelligent hardware — from edge-ML devices on the Raspberry Pi 5 to ESP32 IoT systems — with hands-on R&D experience at SLT Digital Lab and exposure to aviation infrastructure at Bandaranaike International Airport. Driven by practical engineering with measurable, real-world impact.",

  /* ---------- ABOUT (full version, kept for reference / longer use) ---------- */
  about: "Electrical and Electronic Engineer with hands-on experience in embedded systems, IoT development, and aviation infrastructure. My final-year project, SignJoy, is an offline bilingual sign-language teaching unit for Sri Lankan primary classrooms built on a Raspberry Pi 5 with a Unity 3D avatar and a CNN-BiLSTM gesture recognition model trained on a custom 410-class dataset. My industrial training spans SLT Digital Lab — where I built ESP32-based monitoring devices, a self-balancing robot, and a React Native control app — and Bandaranaike International Airport, where I gained exposure to navigational aids, surveillance systems, and large-scale power distribution. I am motivated by practical engineering challenges with measurable real-world impact, and committed to growing my expertise across embedded design, automation, and applied AI.",

  /* ---------- TECH LOGO STRIP (scrolling logos in hero) ----------
     Logos load from cdn.simpleicons.org. To add one, copy a line and
     change the slug (find slugs at simpleicons.org) and hex color.
     If a logo doesn't exist it simply hides itself — nothing breaks. */
  techLogos: [
    { name: "Python",       slug: "python",       color: "3776AB" },
    { name: "C++",          slug: "cplusplus",    color: "00599C" },
    { name: "C",            slug: "c",            color: "A8B9CC" },
    { name: "Java",         slug: "openjdk",      color: "5382A1" },
    { name: "JavaScript",   slug: "javascript",   color: "d6b800" },
    { name: "React",        slug: "react",        color: "149ECA" },
    { name: "Espressif",    slug: "espressif",    color: "E7352C" },
    { name: "Arduino",      slug: "arduino",      color: "00878F" },
    { name: "Raspberry Pi", slug: "raspberrypi",  color: "A22846" },
    { name: "Unity",        slug: "unity",        color: "222222" },
    { name: "MongoDB",      slug: "mongodb",      color: "47A248" },
    { name: "KiCad",        slug: "kicad",        color: "314CB0" },
    { name: "MQTT",         slug: "mqtt",         color: "660066" },
    { name: "Expo",         slug: "expo",         color: "222222" }
  ],

  // Quick highlight stats shown as animated counters (label + number)
  stats: [
    { value: 410,  suffix: "+", label: "Class Custom ML Dataset" },
    { value: 8321, suffix: "",  label: "Training Video Samples" },
    { value: 3,    suffix: "",  label: "Industrial Placements" },
    { value: 7,    suffix: "+", label: "Engineering Projects" }
  ],

  /* ---------- EXPERIENCE ---------- */
  experience: [
    {
      role: "Industrial Trainee — Research & Development",
      org: "SLT Digital Lab, Sri Lanka Telecom PLC, Colombo",
      period: "Jun 2025 – Sep 2025 (12 weeks)",
      points: [
        "Designed and deployed IoT systems including a copper-line anti-theft monitor (ESP32, GSM, optocoupler array) with SMS alerting, and a self-balancing robot with real-time video streaming and voice-command control.",
        "Developed a React Native mobile application for robot control, replacing a Blynk-based interface.",
        "Prototyped an RFID attendance system integrated with Google Sheets; diagnosed and refurbished eight smart power-monitoring devices for field deployment.",
        "Researched edge computing, 5G architecture (CU/DU/RU), MEC, and vector database concepts."
      ]
    },
    {
      role: "Industrial Trainee — Electrical, Electronic & Air Navigation Engineering",
      org: "Bandaranaike International Airport, Katunayake",
      period: "Jul 2024 – Sep 2024",
      points: [
        "Gained exposure to navigational aids including ILS, DVOR, DME, and NDB systems used in aircraft navigation.",
        "Studied surveillance technologies such as PSR, SSR, ADS-B, and ADS-C, plus HF/VHF/UHF communications and CPDLC.",
        "Studied airport illumination, cable types, insulation testing, and power distribution (transformers, SF6/vacuum breakers, surge arrestors, Buchholz relays).",
        "Learned airfield ground lighting (runway, taxiway, PAPI lights) operated via Constant Current Regulators (CCR)."
      ]
    },
    {
      role: "AutoCAD Map Designer",
      org: "ESTEX (Private Limited) Engineering",
      period: "Mar 2022 – Oct 2022",
      points: [
        "Technical drawing and design of engineering layouts.",
        "Documentation of engineering plans and project deliverables."
      ]
    }
  ],

  /* ---------- PROJECTS ----------
     OPTIONAL per project (a button appears ONLY when you fill it in):
       demoVideo : link to a demo video. Either a YouTube/Drive URL,
                   OR a local file like "media/signjoy-demo.mp4"
                   (put the file in a "media" folder next to index.html).
       files     : a downloadable zip, e.g. "media/signjoy-files.zip".
       link      : any other link (live site, GitHub repo, report PDF).
     Leave them out or set "" and no button shows. */
  projects: [
    {
      name: "SignJoy — Sign Language Teaching Tool",
      tag: "Final Year Project",
      year: "2025 – 2026",
      desc: "Offline bilingual Sri Lankan Sign Language (SLSL) teaching unit for primary classrooms using a Raspberry Pi 5 and a Unity 3D humanoid avatar. Trained a CNN-BiLSTM gesture recognition model on a custom 410-class dataset of 8,321 video samples. Offline speech & translation stack using MediaPipe Holistic, Vosk, and a local Sinhala–English dictionary. Total hardware BOM ~USD 242.",
      tech: ["Raspberry Pi 5", "Unity 3D", "CNN-BiLSTM", "MediaPipe", "Vosk", "Python"],
      demoVideo: "media/signjoy-demo.mp4",
      files: "",
      link: ""
    },
    {
      name: "Micro Mouse — Autonomous Maze Robot",
      tag: "Robotics Project",
      year: "2024",
      desc: "Designed and built an ESP32-based autonomous Micro Mouse robot that navigates a maze track using an IR sensor array and a line-following control algorithm with PID tuning for smooth, high-speed tracking. Covered motor-driver control, sensor calibration, and real-time decision logic on the ESP32.",
      tech: ["ESP32", "IR Sensor Array", "Line Following", "PID Control", "Motor Drivers", "C/C++"],
      demoVideo: "media/micromouse-demo.mp4",
      files: "",
      link: ""
    },
    {
      name: "Fire Detection & Alarm System",
      tag: "IoT / Embedded Project",
      year: "2024",
      desc: "ESP32-based fire detection and alarm system that senses flame and smoke, triggers an audible alarm, and automatically activates an exhaust fan via a relay to clear smoke and reduce fire risk. Real-time sensor monitoring and control logic running on the ESP32.",
      tech: ["ESP32", "Flame Sensor", "Smoke / Gas Sensor", "Buzzer Alarm", "Relay", "Exhaust Fan", "C/C++"],
      demoVideo: "media/fire-detection-demo.mp4",
      files: "",
      link: ""
    },
    {
      name: "Real-Time Facial Recognition System",
      tag: "Research @ SLT",
      year: "2025",
      desc: "Facial recognition pipeline using DeepFace with a MongoDB Atlas vector database. Implemented vector search + K-NN, edge-device connectivity, embedding pipeline refinement, real-video-data testing, and end-to-end synchronization and performance tuning.",
      tech: ["DeepFace", "MongoDB Atlas", "Vector DB", "K-NN", "Python"]
    },
    {
      name: "Animal Detection & Control System",
      tag: "Academic Project",
      year: "2024 – 2025",
      desc: "Real-time animal detection for a peri-agricultural setting. Designed and integrated sensor modules, built a GSM-based remote alert system, developed the image-processing detection/classification pipeline, and handled circuit design and PCB layout for the control board.",
      tech: ["ESP32-CAM", "Image Processing", "GSM", "Servo", "Alarm", "PCB Design"],
      demoVideo: "media/animal-detection-demo.mp4",
      files: "",
      link: ""
    },
    {
      name: "Trolley Bed with Adjustable Legs",
      tag: "Design Project",
      year: "2023",
      desc: "Prototyped a hospital-style trolley bed with height-adjustable legs and an integrated medical-equipment holder. Owned design iterations, fabrication coordination, and end-to-end project management across mechanical, electrical, and assembly tasks.",
      tech: ["Mechanical Design", "Prototyping", "Project Management"]
    },
    {
      name: "DC Converter Design",
      tag: "Power Electronics",
      year: "2023",
      desc: "Designed, simulated, and built a stable 12 V DC power supply covering transformer selection, rectification, filtering, and regulation. Practical bench testing, measurement, and troubleshooting of electrical systems.",
      tech: ["Power Electronics", "Circuit Design", "LTspice"]
    },
    {
      name: "Lowpass & Highpass Filter Design",
      tag: "Analog Electronics",
      year: "2024",
      desc: "Designed and analyzed lowpass and highpass filters, covering frequency response, component selection, and verification.",
      tech: ["Analog Design", "Filters", "Simulation"]
    }
  ],

  /* ---------- SKILLS (grouped) ---------- */
  skills: [
    {
      group: "Machine Learning & AI",
      items: ["CNN", "Bidirectional LSTM", "Transformers", "TensorFlow", "PyTorch", "Keras", "scikit-learn", "OpenCV", "MediaPipe Holistic", "NLTK", "spaCy", "Edge ML (Raspberry Pi 5)", "Vosk (Offline Speech)"]
    },
    {
      group: "Programming Languages",
      items: ["Python", "C / C++", "Java", "JavaScript", "Dart", "LaTeX"]
    },
    {
      group: "Data Science & Visualization",
      items: ["Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn", "Jupyter Notebook", "Google Colab", "Power BI", "Chart.js"]
    },
    {
      group: "Embedded Systems & IoT",
      items: ["ESP32 (WROOM, S3, Supermini)", "ESP32-CAM", "Arduino IDE", "MPU6050", "SIM800L GSM", "RFID", "ThingsBoard", "MQTT", "Blynk", "Buck/Boost", "TP4056"]
    },
    {
      group: "Simulation & Robotics",
      items: ["MATLAB", "PSCAD", "LTspice", "Multisim", "Proteus", "PSIM", "COMSOL", "FluidSIM", "LADSIM", "Siemens Step7 PLC", "Gazebo", "RViz", "CoppeliaSim", "Blender"]
    },
    {
      group: "Design & CAD",
      items: ["AutoCAD Electrical", "KiCad (PCB)", "SolidWorks", "TinkerCAD", "QUARTUS II"]
    },
    {
      group: "Databases & Tools",
      items: ["SQL", "Firebase", "MongoDB", "Git / GitHub", "VS Code"]
    },
    {
      group: "Mobile & Web",
      items: ["React", "React Native (Expo)", "Unity"]
    }
  ],

  /* ---------- EDUCATION ---------- */
  education: [
    {
      degree: "B.Sc. (Hons) in Electrical and Electronic Engineering",
      school: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2022 – 2026"
    },
    {
      degree: "G.C.E. Advanced Level",
      school: "Ak/Addalaichenai MMV (National School)",
      period: "2021 / 2022"
    },
    {
      degree: "G.C.E. Ordinary Level",
      school: "Ak/Addalaichenai MMV (National School)",
      period: "2018"
    }
  ],

  /* ---------- CERTIFICATIONS ---------- */
  certifications: [
    { name: "Foundations of Project Management", by: "University of Moratuwa", year: "Aug 2025" },
    { name: "AI/ML Engineer — Stage 1 Certification", by: "SLIIT, Centre for Open & Distance Education", year: "Aug 2025" },
    { name: "AI/ML Engineer — Stage 2 Certification", by: "SLIIT, Centre for Open & Distance Education", year: "Aug 2025" }
  ],

  /* ---------- CO-CURRICULAR / LEADERSHIP ---------- */
  activities: [
    "President — Science Association Addalaichenai (2025 – Present)",
    "Assistant Treasurer — Undergraduate Association Addalaichenai (2024 – 2025)",
    "Planning Coordinator — Science Association Addalaichenai (2024 – 2025)",
    "Event Coordinator — Majlis of SLIIT (2023 – 2024)",
    "Member — IEEE Student Branch of SLIIT (2022 – Present)",
    "Member — Rotaract Club of SLIIT (2023 – 2025)",
    "Member — Gavel Club of SLIIT (2025 – 2026)",
    "Member — Leo Club of SLIIT (2022 – 2025)",
    "Cadet Team Commander — Addalaichenai National School (2017)",
    "Provincial Meet, Relay — Eastern Province (2018)"
  ],

  /* ---------- LANGUAGES ---------- */
  languages: [
    { name: "Tamil",   level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Sinhala", level: "Conversational" }
  ]

};
