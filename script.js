const projects = [
  {
    title: "SPECTER-AI Wearable Cybersecurity Alert System",
    subtitle: "HackaBull 2026 — Tech for Good Winner",
    group: "Embedded Systems + Microcontrollers",
    image: "assets/images/specter-ai.jpg",
    overview: "Wearable cybersecurity alert system that gives SOC analysts real-time physical alerts through an LCD, LEDs, buzzer, pushbuttons, and a potentiometer-based mode dial.",
    details: [
      "Built the wearable hardware interface for an AI-powered cybersecurity response platform.",
      "Integrated Particle Argon with I2C LCD, LEDs, buzzer, pushbutton, and potentiometer control.",
      "Programmed firmware for live alerts, hardware inputs, status display, and backend communication through Particle Cloud events and webhooks.",
      "Implemented human-in-the-loop authorization modes: Monitor, Alert Only, and Defense Ready.",
      "Won Tech for Good at HackaBull 2026."
    ],
    tech: ["Particle Argon", "C/C++", "I2C LCD", "LEDs", "Buzzer", "Webhooks", "Particle Cloud"],
    badges: ["Award", "Featured"],
    links: { GitHub: "https://github.com/Rama7i11/specter-ai", Devpost: "https://devpost.com/software/specter-ai", Photos: "#" }
  },
  {
    title: "Embedded Access Control System",
    subtitle: "Keypad, LCD, tamper detection, lockout logic",
    group: "Embedded Systems + Microcontrollers",
    image: "assets/images/access-control.jpg",
    hasPhoto: true,
    overview: "Electromechanical access control system using Arduino, keypad authentication, I2C LCD output, tamper detection, lockout logic, and discrete safety circuitry.",
    details: [
      "Designed and built an Arduino-based access controller with keypad input and LCD feedback.",
      "Added tamper detection and retry-based lockout logic.",
      "Used 74LS32 OR gates and 74LS00 NAND gates for hardware-level safety and alarm logic.",
      "Built RC timing circuits that operate independently of firmware execution."
    ],
    tech: ["Arduino", "C/C++", "Keypad", "I2C LCD", "74LS32", "74LS00", "RC Circuits"],
    badges: ["Featured"],
    links: { GitHub: "#", Report: "#", Photos: "#" }
  },
  {
    title: "IoT Calculator Interface",
    subtitle: "Particle Argon + keypad + I2C LCD",
    group: "Embedded Systems + Microcontrollers",
    image: "assets/images/iot-calculator.jpg",
    overview: "Standalone calculator built with a Particle Argon, 4×4 keypad, and 16×2 I2C LCD.",
    details: [
      "Programmed embedded logic to parse keypad inputs and display arithmetic results.",
      "Integrated a Particle Argon with LCD and keypad hardware.",
      "Managed user input, operation selection, and LCD updates in C/C++."
    ],
    tech: ["Particle Argon", "C/C++", "I2C LCD", "4×4 Keypad"],
    badges: [],
    links: { GitHub: "#", Photos: "#" }
  },
  {
    title: "0–9 BCD Counter",
    subtitle: "555 timer clock + seven-segment display",
    group: "Digital Logic + Circuits",
    image: "assets/images/bcd-counter.jpg",
    hasPhoto: true,
    overview: "Digital logic counter circuit using a 555 timer clock, BCD counter IC, and CD4511 seven-segment display driver.",
    details: [
      "Designed a 0–9 counter circuit using a 555 timer as the clock source.",
      "Used a potentiometer to control the counter speed.",
      "Connected a BCD counter IC to a CD4511 BCD-to-seven-segment display driver.",
      "Built and tested the breadboarded circuit with LEDs, resistors, and seven-segment display wiring.",
      "Documented the circuit operation in a PDF report now linked from the project modal."
    ],
    tech: ["NE555", "74LS90", "CD4511", "Seven-Segment Display", "Potentiometer"],
    badges: [],
    links: { Report: "assets/docs/bcd-counter.pdf", Photos: "#" }
  },
  {
    title: "BCD Adder Circuit",
    subtitle: "4-bit adders + correction logic",
    group: "Digital Logic + Circuits",
    image: "assets/images/bcd-adder.jpg",
    hasPhoto: true,
    overview: "BCD addition circuit using 4-bit adders and correction logic.",
    details: [
      "Designed a circuit to add two BCD digits.",
      "Used correction logic to add 0110 when the binary sum exceeded valid BCD range.",
      "Practiced truth tables, gate-level reasoning, and IC-based digital design."
    ],
    tech: ["74LS283", "Logic Gates", "BCD Arithmetic", "Breadboarding"],
    badges: [],
    links: { Report: "assets/docs/bcd-adder-seven-seg.pdf", Photos: "#" }
  },
  {
    title: "MATLAB Audio Processing GUI",
    subtitle: "Acoustic effects, filters, and PSD analysis",
    group: "MATLAB + Signal Processing",
    image: "assets/images/audio-gui.jpg",
    overview: "MATLAB GUI that loads WAV audio, applies room effects and vocal filters, controls playback, and compares original versus processed PSD plots.",
    details: [
      "Built a MATLAB App Designer-style GUI with a control panel, audio loading, status feedback, and original/processed playback controls.",
      "Implemented Cave, Cathedral, and Stadium effects using convolution with synthetic room impulse responses.",
      "Implemented Karaoke and Off-Vocal modes using filter-based transformations with adjustable order, gain, and frequency parameters.",
      "Displayed Power Spectral Density plots comparing the original and processed signals using FFT-based analysis.",
      "Added the final PDF report and MATLAB source file as downloadable project links."
    ],
    tech: ["MATLAB", "GUI Design", "WAV Audio", "Convolution", "Filtering", "FFT", "PSD Analysis"],
    badges: ["Featured"],
    links: { GitHub: "#", Report: "assets/docs/matlab-audio-gui-final.pdf", Demo: "#", "Source Code": "assets/code/EEL4102_Audio_GUI.m" }
  },
  {
    title: "Convolution Tutor MATLAB GUI",
    subtitle: "Interactive step-by-step visualizer",
    group: "MATLAB + Signal Processing",
    image: "assets/images/convolution-tutor.jpg",
    overview: "Interactive MATLAB GUI designed to help users understand convolution visually and step by step.",
    details: [
      "Built a MATLAB tutoring interface for learning convolution.",
      "Allowed users to input or select example signals and visualize how convolution combines them.",
      "Displayed signal shifting, multiplication, and output formation."
    ],
    tech: ["MATLAB", "GUI Design", "Signal Processing", "Convolution", "Data Visualization"],
    badges: [],
    links: { GitHub: "https://github.com/alihabil365/MATLAB_convolution_Tutor", Demo: "#", "Source Code": "https://github.com/alihabil365/MATLAB_convolution_Tutor", Report: "#" }
  },
  {
    title: "One-Way ANOVA MATLAB GUI",
    subtitle: "Statistical analysis and visualization tool",
    group: "MATLAB + Signal Processing",
    image: "assets/images/anova-gui.jpg",
    overview: "MATLAB GUI for performing and visualizing one-way ANOVA analysis using user-defined statistical calculations.",
    details: [
      "Built an interactive GUI for entering or loading grouped data.",
      "Computed one-way ANOVA values using custom user-defined functions.",
      "Displayed group means, sum of squares, degrees of freedom, F-statistic, and p-value.",
      "Included group comparison plots and results tables."
    ],
    tech: ["MATLAB", "GUI Design", "Statistics", "ANOVA", "Data Visualization"],
    badges: [],
    links: { GitHub: "#", Demo: "#", "Source Code": "#", Report: "#" }
  },
  {
    title: "Brtr — Barter-Based Web App",
    subtitle: "HackaBull 2025 — Best Theme Implementation",
    group: "Software + Web",
    image: "assets/images/brtr.jpg",
    overview: "Barter-based web application that allows users to list items, place bids, and find fair trades without traditional currency.",
    details: [
      "Built with Next.js and Supabase for listings, bidding, and authentication.",
      "Integrated Gemini API to estimate product values and support fair trades within a 10% range.",
      "Designed an interactive frontend using Tailwind CSS.",
      "Won Best Theme Implementation at HackaBull 2025."
    ],
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Gemini API", "JavaScript/TypeScript"],
    badges: ["Award", "Featured"],
    links: { GitHub: "#", Devpost: "#", Demo: "#" }
  },
  {
    title: "Canvas Co-Pilot",
    subtitle: "AI-powered academic assistant",
    group: "Software + Web",
    image: "assets/images/canvas-copilot.jpg",
    overview: "AI-powered academic assistant integrating the Canvas LMS API, Gemini AI, and Azure Custom Vision.",
    details: [
      "Suggested study slots based on room occupancy data.",
      "Built a responsive frontend with Tailwind CSS.",
      "Supported natural language queries about assignments, grades, and study scheduling."
    ],
    tech: ["Canvas API", "Gemini AI", "Azure Custom Vision", "Tailwind CSS", "JavaScript"],
    badges: [],
    links: { GitHub: "#", Demo: "#" }
  },
  {
    title: "JBS Wood LLC Website",
    subtitle: "Marketing website with local business integrations",
    group: "Marketing",
    image: "assets/images/jbs-wood-llc.jpg",
    overview: "Marketing website and backend project for JBS Wood LLC, deployed on Vercel with Supabase, Resend, Google Places API, and Google Reviews integration.",
    details: [
      "Built the public marketing website for JBS Wood LLC.",
      "Implemented backend functionality using Supabase.",
      "Integrated Google Places API to connect the site with local business presence data.",
      "Added Google Reviews integration to surface customer reviews from the company's Google Business profile.",
      "Deployed the site on Vercel.",
      "Integrated Resend for email handling."
    ],
    tech: ["Google Places API", "Google Reviews", "Google Business Profile", "Supabase", "Vercel", "Resend"],
    badges: ["Featured"],
    links: { Website: "https://jbs-wood-llc.com", Demo: "https://jbs-wood-llc.com" }
  },
  {
    title: "Mimic Robotic Arm Prototype",
    subtitle: "Master-slave servo control system",
    group: "Robotics + Mechatronics",
    image: "assets/images/mimic-arm.jpg",
    overview: "Master-slave robotic arm prototype where potentiometer inputs control servo motor positions through a microcontroller.",
    details: [
      "Prototyped a small robotic control system using potentiometers as input joints and servo motors as output joints.",
      "Planned a custom 3D-printable structure around servo torque limits, linkage geometry, and joint spacing.",
      "Focused on mechanical design, actuator placement, embedded control mapping, and iterative prototyping."
    ],
    tech: ["Arduino/ESP32", "Servo Motors", "Potentiometers", "Fusion 360", "3D Printing"],
    badges: ["In Progress", "Featured"],
    links: { GitHub: "#", "CAD Files": "#", Photos: "#" }
  },
  {
    title: "Arduino Line-Following Robot",
    subtitle: "Custom chassis autonomous robot",
    group: "Robotics + Mechatronics",
    image: "assets/images/line-following-robot.jpg",
    overview: "Autonomous Arduino robot with a custom 3D-printed chassis designed for path following.",
    details: [
      "Designed and 3D printed a functional robot chassis.",
      "Integrated Arduino-based navigation hardware and sensor array.",
      "Tested sensor placement and chassis geometry through iterative adjustments."
    ],
    tech: ["Arduino", "CAD", "3D Printing", "Sensors", "Motor Control"],
    badges: [],
    links: { GitHub: "#", Photos: "#" }
  },
  {
    title: "E-Waste Upcycling Project",
    subtitle: "Laptop camera to external USB webcam",
    group: "Hardware + Repair",
    image: "assets/images/e-waste-webcam.jpg",
    overview: "Hardware reuse project focused on converting old laptop components into functional external devices.",
    details: [
      "Converted an old laptop camera into an external USB webcam through circuit tracing and soldering.",
      "Practiced soldering, circuit tracing, component reuse, and hardware repair.",
      "Connected the project to sustainability and right-to-repair interests."
    ],
    tech: ["Soldering", "Circuit Tracing", "USB Hardware", "Electronics Repair"],
    badges: [],
    links: { Photos: "#", Writeup: "#" }
  }
];

const groups = ["All", ...new Set(projects.map(project => project.group))];
let activeGroup = "All";

const categoryTabs = document.getElementById("categoryTabs");
const projectSections = document.getElementById("projectSections");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");

function initWindowControls() {
  document.querySelectorAll(".shell-window").forEach((windowEl, index) => {
    const titleBar = windowEl.querySelector(".title-bar");
    const controls = windowEl.querySelector(".window-controls");
    if (!titleBar || !controls) return;

    controls.removeAttribute("aria-hidden");
    controls.querySelectorAll("span").forEach((control, controlIndex) => {
      control.setAttribute("role", "button");
      control.setAttribute("tabindex", "0");
      control.setAttribute("aria-label", "Minimize window");
      control.dataset.windowControl = controlIndex === 0 ? "minimize" : controlIndex === 1 ? "maximize" : "close";

      const toggleWindow = event => {
        event.stopPropagation();
        const isMinimized = windowEl.classList.toggle("is-minimized");
        windowEl.setAttribute("aria-expanded", String(!isMinimized));
      };

      control.addEventListener("click", toggleWindow);
      control.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleWindow(event);
        }
      });
    });

    titleBar.addEventListener("click", event => {
      if (event.target.closest(".window-controls")) return;
      if (!windowEl.classList.contains("is-minimized")) return;

      windowEl.classList.remove("is-minimized");
      windowEl.setAttribute("aria-expanded", "true");
      if (index > 0) windowEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function makeTag(text) {
  return `<span class="tag">${text}</span>`;
}

function makeBadge(text) {
  const className = text === "Award" ? "badge award" : text === "In Progress" ? "badge progress" : "badge";
  return `<span class="${className}">${text}</span>`;
}

function renderTabs() {
  categoryTabs.innerHTML = groups.map(group => `<button class="tab-button ${group === activeGroup ? "active" : ""}" data-group="${group}">${group}</button>`).join("");
  categoryTabs.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      activeGroup = button.dataset.group;
      renderTabs();
      renderProjects();
    });
  });
}

function renderProjects() {
  const visibleGroups = activeGroup === "All" ? groups.filter(group => group !== "All") : [activeGroup];
  projectSections.innerHTML = visibleGroups.map(group => {
    const cards = projects.filter(project => project.group === group).map((project, index) => {
      const projectIndex = projects.indexOf(project);
      const thumbContent = project.hasPhoto
        ? `<img src="${project.image}" alt="${project.title} photo">`
        : `<span>${group}</span>`;
      return `
        <button class="project-card" data-index="${projectIndex}">
          <div class="project-thumb image-placeholder ${project.hasPhoto ? "has-photo" : ""}" data-image="${project.image}">${thumbContent}</div>
          <div class="project-card-body">
            <div class="badges">${project.badges.map(makeBadge).join("")}</div>
            <h4>${project.title}</h4>
            <p>${project.overview}</p>
            <div class="tag-row">${project.tech.slice(0, 4).map(makeTag).join("")}</div>
          </div>
        </button>`;
    }).join("");
    return `<section class="project-category"><h3>📁 ${group}</h3><div class="project-grid">${cards}</div></section>`;
  }).join("");

  projectSections.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openProject(projects[Number(card.dataset.index)]));
  });
}

function openProject(project) {
  document.getElementById("modalWindowTitle").textContent = `${project.title}.txt`;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalSubtitle").textContent = project.subtitle || "";
  document.getElementById("modalCategory").textContent = project.group;
  document.getElementById("modalOverview").textContent = project.overview;
  document.getElementById("modalDetails").innerHTML = project.details.map(item => `<li>${item}</li>`).join("");
  document.getElementById("modalTech").innerHTML = project.tech.map(makeTag).join("");
  document.getElementById("modalImage").classList.toggle("has-photo", Boolean(project.hasPhoto));
  document.getElementById("modalImage").innerHTML = project.hasPhoto
    ? `<img src="${project.image}" alt="${project.title} photo">`
    : `<span>Replace with<br>${project.image}</span>`;
  document.getElementById("modalLinks").innerHTML = Object.entries(project.links).map(([label, href]) => `<a class="xp-button" href="${href}" ${href === "#" ? "aria-disabled=\"true\"" : "target=\"_blank\" rel=\"noreferrer\""}>${label}</a>`).join("");
  modalBackdrop.classList.add("open");
  modalBackdrop.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalBackdrop.classList.remove("open");
  modalBackdrop.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", event => {
  if (event.target === modalBackdrop) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

renderTabs();
renderProjects();
initWindowControls();
