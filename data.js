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
      "Process Automation",
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
  aboutShort: "I'm an Electrical & Electronic Engineer who builds things at the hardware-software boundary. My final-year project, SignJoy, is a sign language teaching device that runs completely offline on a Raspberry Pi 5, built for Sri Lankan classrooms with no reliable internet. At SLT Digital Lab I built IoT monitoring devices and a React Native control app, at Bandaranaike Airport I learned how navigation and communications infrastructure holds together, and most recently at IDP Worldwide International I managed marketing and sales and automated the workflows behind them. I'm most interested in problems where the hardware and software have to solve something real.",

  /* ---------- ABOUT (full version, kept for reference / longer use) ---------- */
  about: "Versatile Electrical and Electronic Engineer with hands-on experience in embedded systems, IoT development, aviation infrastructure, and operational automation. At SLT Digital Lab I developed ESP32-based monitoring devices and a React Native control application, and refurbished smart power-monitoring devices for field deployment; at IDP Worldwide International I managed marketing, sales, and workflow automation. I built SignJoy, an offline sign-language teaching platform running a CNN-BiLSTM model on Raspberry Pi 5. Skilled in practical engineering, PCB and circuit design, technical documentation, and applied AI development.",

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
    { value: 4,    suffix: "",  label: "Professional Roles" },
    { value: 8,    suffix: "+", label: "Engineering Projects" }
  ],

  /* ---------- EXPERIENCE ---------- */
  experience: [
    {
      role: "Manager, Marketing & Sales",
      org: "IDP Worldwide International (PGC Education)",
      period: "Apr 2026 – Oct 2026",
      points: [
        "Managed day-to-day marketing, sales, and operational activities, reporting directly to senior management.",
        "Automated lead capture, follow-ups, and enquiry handling, speeding up response times and reducing manual workload.",
        "Automated internal operational processes and drove the rollout of Standard Operating Procedures (SOPs) across marketing, sales, and operations.",
        "Worked towards student enrolment targets through sales follow-up and marketing campaigns."
      ]
    },
    {
      role: "Assistant Electronic Engineer, Research & Development",
      org: "SLT Digital Lab, Sri Lanka Telecom PLC, Colombo",
      period: "Feb 2025 – Feb 2026",
      points: [
        "Designed and deployed a copper-line anti-theft monitor (ESP32, GSM, optocoupler array) with real-time SMS alerts.",
        "Built a self-balancing robot with live video streaming and voice-command control; developed a React Native app to replace its Blynk-based interface.",
        "Prototyped an RFID attendance system integrated with Google Sheets.",
        "Diagnosed and refurbished 8 smart power-monitoring devices for field deployment.",
        "Researched edge computing, 5G RAN architecture (CU/DU/RU), multi-access edge computing (MEC), and vector databases."
      ],
      letter: "certs/SLT_Training_Completion_Letter_Asfaaq_Ahamed.pdf"
    },
    {
      role: "Assistant Engineer, Electrical, Electronic & Air Navigation Engineering",
      org: "Bandaranaike International Airport (BIA), Katunayake",
      period: "Sep 2023 – Sep 2024",
      points: [
        "Studied air navigation aids (ILS, DVOR, DME, NDB) and surveillance systems (PSR, SSR, ADS-B, ADS-C).",
        "Learned HF/VHF/UHF communication systems and CPDLC for pilot–controller communication.",
        "Observed power distribution infrastructure (transformers, SF6/vacuum circuit breakers, surge arrestors, Buchholz relays) and cable insulation testing.",
        "Studied airfield ground lighting (runway, taxiway, PAPI) driven by Constant Current Regulators (CCR), and X-ray baggage screening systems."
      ],
      letter: "certs/Industrial_Training_Letter_Asfaaq_Ahamed.pdf"
    },
    {
      role: "AutoCAD Map Designer",
      org: "ESTEX (Private) Limited Engineering",
      period: "Mar 2022 – Oct 2022",
      points: [
        "Produced AutoCAD technical drawings and engineering layouts.",
        "Documented engineering plans and project deliverables."
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
      name: "SignJoy: Sign Language Teaching Tool",
      tag: "Final Year Project",
      year: "2025 – 2026",
      desc: "Offline bilingual Sri Lankan Sign Language (SLSL) teaching unit for primary classrooms using a Raspberry Pi 5 and a Unity 3D humanoid avatar. Trained a CNN-BiLSTM gesture recognition model on a custom 410-class dataset of 8,321 video samples. Offline speech & translation stack using MediaPipe Holistic, Vosk, and a local Sinhala–English dictionary. Total hardware BOM ~USD 242.",
      tech: ["Raspberry Pi 5", "Unity 3D", "CNN-BiLSTM", "MediaPipe", "Vosk", "Python"],
      demoVideo: "media/signjoy-demo.mp4",
      files: "",
      link: ""
    },
    {
      name: "Micro Mouse: Autonomous Maze Robot",
      tag: "Robotics Project",
      year: "2024",
      desc: "An ESP32 line-follower that races through a maze. The hard part was PID tuning: getting smooth, fast cornering without the robot overshooting or stalling at junctions. All control logic, sensor calibration, and motor driving runs on the ESP32 in C/C++.",
      tech: ["ESP32", "IR Sensor Array", "Line Following", "PID Control", "Motor Drivers", "C/C++"],
      demoVideo: "media/micromouse-demo.mp4",
      files: "",
      link: ""
    },
    {
      name: "Fire Detection & Alarm System",
      tag: "IoT / Embedded Project",
      year: "2024",
      desc: "When the flame or smoke sensor trips, the system immediately sounds an alarm and switches on an exhaust fan via relay, no manual intervention needed. Detection, alerting, and fan control all run on a single ESP32.",
      tech: ["ESP32", "Flame Sensor", "Smoke / Gas Sensor", "Buzzer Alarm", "Relay", "Exhaust Fan", "C/C++"],
      demoVideo: "media/fire-detection-demo.mp4",
      files: "",
      link: ""
    },
    {
      name: "Real-Time Facial Recognition System",
      tag: "Research @ SLT",
      year: "2025",
      desc: "Built a facial recognition pipeline with DeepFace backed by MongoDB Atlas vector search. Most of the work was on the embedding pipeline and getting K-NN retrieval accurate enough on real (messy) video footage, not just clean test images.",
      tech: ["DeepFace", "MongoDB Atlas", "Vector DB", "K-NN", "Python"]
    },
    {
      name: "Animal Detection & Control System",
      tag: "Academic Project",
      year: "2024 – 2025",
      desc: "A system for detecting animals encroaching on farmland. It fires a GSM alert to the farmer and triggers deterrents automatically. I handled the image processing pipeline, GSM alerting, circuit design, and PCB layout for the control board.",
      tech: ["ESP32-CAM", "Image Processing", "GSM", "Servo", "Alarm", "PCB Design"],
      demoVideo: "media/animal-detection-demo.mp4",
      files: "",
      link: ""
    },
    {
      name: "12 V DC Power Supply Design",
      tag: "Power Electronics",
      year: "2023",
      desc: "Designed, simulated, and built a stable 12 V DC supply covering transformer selection, rectification, filtering, and regulation, followed by bench testing and troubleshooting.",
      tech: ["Power Electronics", "Rectification", "Voltage Regulation", "Simulation", "Bench Testing"]
    },
    {
      name: "Trolley Bed with Adjustable Legs",
      tag: "Design Project",
      year: "2023",
      desc: "Prototyped a hospital trolley bed with height-adjustable legs and a built-in equipment holder. I ran the project from initial sketches through fabrication, coordinating the mechanical and electrical sides and managing everything to delivery.",
      tech: ["Mechanical Design", "Prototyping", "Project Management"]
    }
  ],

  /* ---------- SKILLS (grouped) ---------- */
  skills: [
    {
      group: "Machine Learning & AI",
      items: ["CNN", "Bidirectional LSTM", "Transformers", "TensorFlow", "PyTorch", "Keras", "scikit-learn", "OpenCV", "MediaPipe Holistic", "DeepFace", "NLTK", "spaCy", "Edge ML (Raspberry Pi 5)", "Vosk (Offline Speech)"]
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
      items: ["SQL", "Firebase", "MongoDB (Atlas Vector Search)", "Git / GitHub", "VS Code"]
    },
    {
      group: "Mobile & Web",
      items: ["React", "React Native (Expo)", "Unity"]
    },
    {
      group: "Professional",
      items: ["Technical Documentation", "SOP Development", "Process Automation", "Marketing & Sales Operations", "Teamwork"]
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
    { name: "Foundations of Project Management", by: "University of Moratuwa (CODL)", year: "2025", file: "certs/Foundations_of_Project_Management.pdf" },
    { name: "AI/ML Engineer Stage 1 Certification", by: "SLIIT, Centre for Open & Distance Education", year: "Oct 2025", file: "certs/AIML_Engineer_Stage1.pdf" },
    { name: "AI/ML Engineer Stage 2 Certification", by: "SLIIT, Centre for Open & Distance Education", year: "Aug 2025", file: "certs/AIML_Engineer_Stage2.pdf" },
    { name: "Project Scope and Schedule Management", by: "University of Moratuwa, Open Learning", year: "2025", file: "certs/Project_Scope_and_Schedule_Management_E-Certificate.pdf" },
    { name: "AI/ML Engineer Stage 3 Certification", by: "SLIIT, Centre for Open & Distance Education", year: "", file: "" }
  ],

  /* ---------- CO-CURRICULAR / LEADERSHIP ---------- */
  activities: [
    "President, Science Association Addalaichenai (2025 – Present)",
    "Assistant Treasurer, Undergraduate Association Addalaichenai (2024 – 2025)",
    "Planning Coordinator, Science Association Addalaichenai (2024 – 2025)",
    "Event Coordinator, Majlis of SLIIT (2023 – 2024)",
    "Member, IEEE Student Branch of SLIIT (2022 – Present)",
    "Member, Rotaract Club of SLIIT (2023 – 2025)",
    "Member, Gavel Club of SLIIT (2025 – 2026)",
    "Member, Leo Club of SLIIT (2022 – 2025)",
    "Cadet Team Commander, Addalaichenai National School (2017)",
    "Provincial Meet, Relay, Eastern Province (2018)"
  ],

  /* ---------- LANGUAGES ---------- */
  languages: [
    { name: "Tamil",   level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "Sinhala", level: "Conversational" }
  ]

};
