const projects = [
  {
    title: "SPECTER-AI Wearable Cybersecurity Alert System",
    subtitle: "Hackathon project - wearable hardware interface",
    group: "Embedded Systems + Microcontrollers",
    image: "assets/images/specter-ai.jpg",
    overview: "Hackathon wearable that displayed cybersecurity alerts on a small hardware interface with an LCD, LEDs, buzzer, buttons, and a mode dial.",
    details: [
      "Worked on the wearable hardware interface and firmware during HackaBull 2026.",
      "Connected a Particle Argon to an I2C LCD, LEDs, buzzer, pushbutton, and potentiometer input.",
      "Wrote firmware for alert display, hardware input handling, status updates, and Particle Cloud events/webhooks.",
      "Added simple authorization modes for Monitor, Alert Only, and Defense Ready behavior.",
      "The project received the Tech for Good award at HackaBull 2026."
    ],
    tech: ["Particle Argon", "C/C++", "I2C LCD", "LEDs", "Buzzer", "Webhooks", "Particle Cloud"],
    badges: ["Hackathon", "Award"],
    links: { GitHub: "https://github.com/Rama7i11/specter-ai", Devpost: "https://devpost.com/software/specter-ai", Photos: "#" }
  },
  {
    title: "Embedded Access Control System",
    subtitle: "Learning project - keypad, LCD, tamper detection",
    group: "Embedded Systems + Microcontrollers",
    image: "assets/images/access-control.jpg",
    hasPhoto: true,
    overview: "Learning-focused access control project using Arduino, keypad input, LCD feedback, retry lockout, tamper detection, and discrete logic gates.",
    details: [
      "Assembled an Arduino-based access controller with keypad entry and I2C LCD messages.",
      "Practiced retry counting, lockout states, and tamper detection logic.",
      "Used 74LS32 OR gates and 74LS00 NAND gates for a separate alarm/safety path.",
      "Tested RC timing circuits that could operate independently from the main firmware."
    ],
    tech: ["Arduino", "C/C++", "Keypad", "I2C LCD", "74LS32", "74LS00", "RC Circuits"],
    badges: ["Learning Project"],
    links: { GitHub: "#", Report: "#", Photos: "#" }
  },
  {
    title: "Digital Overcurrent Relay with Asset Fault Logging Dashboard",
    subtitle: "Power systems / embedded systems prototype",
    group: "Power Systems + Embedded Hardware",
    image: "assets/images/digital-overcurrent-relay.jpg",
    overview: "ESP32-based protection and monitoring prototype that measures voltage, current, and power with an INA219 sensor, detects overcurrent conditions, trips a relay to isolate the load, and logs fault events for maintenance analysis.",
    sections: [
      {
        title: "What it does",
        items: [
          "Measures low-voltage DC load voltage, current, and power using an INA219 voltage/current sensor.",
          "Uses normal, warning, and trip thresholds to simulate basic electrical asset protection behavior.",
          "Controls an active-low relay module with latched trip logic and a manual reset button.",
          "Shows local status through an I2C OLED display, status LEDs, and a buzzer alarm.",
          "Prints CSV-style serial logs with asset ID, voltage, current, power, status, fault count, event type, and maintenance priority."
        ]
      },
      {
        title: "Why it matters",
        items: [
          "Models utility reliability workflows such as fault detection, equipment isolation, event logging, and maintenance prioritization.",
          "Connects embedded sensing and relay control with the kind of structured fault data that could feed an Excel or Power BI dashboard.",
          "Keeps the prototype realistic for student lab work by limiting testing to low-voltage DC loads for safety."
        ]
      },
      {
        title: "Future improvements",
        items: [
          "Add a real-time dashboard using Wi-Fi.",
          "Add adjustable trip curves.",
          "Add an enclosure and terminal blocks.",
          "Add multiple asset IDs for transformer, feeder, and breaker simulations."
        ]
      }
    ],
    details: [
      "Built a low-voltage digital overcurrent relay prototype using an ESP32 and INA219 voltage/current sensor.",
      "Implemented normal, warning, and trip thresholds to simulate electrical asset protection behavior.",
      "Added active-low relay control with latched trip logic and a manual reset button.",
      "Integrated OLED display, status LEDs, and buzzer alarm for local relay status indication.",
      "Generated CSV-style serial logs for maintenance analysis.",
      "Designed the project to model utility reliability workflows while keeping testing limited to low-voltage DC loads for safety."
    ],
    tech: ["ESP32", "INA219", "I2C OLED", "Relay Module", "LEDs", "Buzzer", "Arduino/C++", "CSV Logging", "Excel/Power BI Dashboard Concept"],
    badges: ["ESP32", "Power Systems", "Fault Logging", "Dashboard"],
    links: { Photos: "#", Writeup: "#" }
  },
  {
    title: "IoT Calculator Interface",
    subtitle: "Lab-style embedded interface",
    group: "Embedded Systems + Microcontrollers",
    image: "assets/images/iot-calculator.jpg",
    overview: "Small embedded calculator interface using a Particle Argon, 4x4 keypad, and 16x2 I2C LCD.",
    details: [
      "Practiced parsing keypad input and showing arithmetic results on an LCD.",
      "Connected the keypad and display to a Particle Argon microcontroller.",
      "Handled number entry, operation selection, and display updates in C/C++."
    ],
    tech: ["Particle Argon", "C/C++", "I2C LCD", "4x4 Keypad"],
    badges: ["Learning Project"],
    links: { GitHub: "#", Photos: "#" }
  },
  {
    title: "0-9 BCD Counter",
    subtitle: "Course project - 555 timer and seven-segment display",
    group: "Digital Logic + Circuits",
    image: "assets/images/bcd-counter.jpg",
    hasPhoto: true,
    overview: "Course-style digital logic counter using a 555 timer clock, BCD counter IC, and CD4511 display driver.",
    details: [
      "Configured a 0-9 counter circuit with a 555 timer as the clock source.",
      "Used a potentiometer to adjust the count speed.",
      "Connected a BCD counter IC to a CD4511 BCD-to-seven-segment display driver.",
      "Breadboarded and tested the circuit with LEDs, resistors, and seven-segment display wiring.",
      "Documented the circuit operation in a linked PDF report."
    ],
    tech: ["NE555", "74LS90", "CD4511", "Seven-Segment Display", "Potentiometer"],
    badges: ["Course Project"],
    links: { Report: "assets/docs/bcd-counter.pdf", Photos: "#" }
  },
  {
    title: "BCD Adder Circuit",
    subtitle: "Course project - 4-bit adders and correction logic",
    group: "Digital Logic + Circuits",
    image: "assets/images/bcd-adder.jpg",
    hasPhoto: true,
    overview: "Digital logic exercise for adding two BCD digits with 4-bit adders and correction logic.",
    details: [
      "Worked through the logic needed to add two BCD digits.",
      "Applied correction logic to add 0110 when the binary sum exceeded the valid BCD range.",
      "Practiced truth tables, gate-level reasoning, and IC-based digital design."
    ],
    tech: ["74LS283", "Logic Gates", "BCD Arithmetic", "Breadboarding"],
    badges: ["Course Project"],
    links: { Report: "assets/docs/bcd-adder-seven-seg.pdf", Photos: "#" }
  },
  {
    title: "MATLAB Audio Processing GUI",
    subtitle: "Course-style MATLAB audio tool",
    group: "MATLAB + Signal Processing",
    image: "assets/images/audio-gui.jpg",
    overview: "MATLAB GUI for experimenting with audio effects, filtering, playback, and PSD comparison.",
    details: [
      "Created a MATLAB App Designer-style interface with audio loading, status feedback, and playback controls.",
      "Explored Cave, Cathedral, and Stadium effects using convolution with synthetic room impulse responses.",
      "Added Karaoke and Off-Vocal modes with adjustable filter order, gain, and frequency parameters.",
      "Compared original and processed audio with FFT-based Power Spectral Density plots.",
      "Linked the final PDF report and MATLAB source file for review."
    ],
    tech: ["MATLAB", "GUI Design", "WAV Audio", "Convolution", "Filtering", "FFT", "PSD Analysis"],
    badges: ["Course Project"],
    links: { GitHub: "#", Report: "assets/docs/matlab-audio-gui-final.pdf", Demo: "#", "Source Code": "assets/code/EEL4102_Audio_GUI.m" }
  },
  {
    title: "Convolution Tutor MATLAB GUI",
    subtitle: "Educational MATLAB visualizer",
    group: "MATLAB + Signal Processing",
    image: "assets/images/convolution-tutor.jpg",
    overview: "Educational MATLAB GUI for visualizing convolution step by step.",
    details: [
      "Made a tutoring-style interface focused on understanding convolution.",
      "Allowed users to enter or select example signals and see how they combine.",
      "Displayed shifting, multiplication, and output formation as separate visual steps."
    ],
    tech: ["MATLAB", "GUI Design", "Signal Processing", "Convolution", "Data Visualization"],
    badges: ["Learning Project"],
    links: { GitHub: "https://github.com/alihabil365/MATLAB_convolution_Tutor", Demo: "#", "Source Code": "https://github.com/alihabil365/MATLAB_convolution_Tutor", Report: "#" }
  },
  {
    title: "One-Way ANOVA MATLAB GUI",
    subtitle: "Educational statistics GUI",
    group: "MATLAB + Signal Processing",
    image: "assets/images/anova-gui.jpg",
    overview: "MATLAB GUI for practicing one-way ANOVA calculations and visualizing grouped data.",
    details: [
      "Created an interface for entering or loading grouped data.",
      "Computed one-way ANOVA values with custom user-defined functions.",
      "Displayed group means, sum of squares, degrees of freedom, F-statistic, and p-value.",
      "Included comparison plots and result tables to make the calculations easier to follow."
    ],
    tech: ["MATLAB", "GUI Design", "Statistics", "ANOVA", "Data Visualization"],
    badges: ["Learning Project"],
    links: { GitHub: "#", Demo: "#", "Source Code": "#", Report: "#" }
  },
  {
    title: "Bartr - Barter-Based Web App",
    subtitle: "Hackathon project - barter web app",
    group: "Software + Web",
    image: "assets/images/bartr-logo.png",
    hasPhoto: true,
    overview: "Hackathon web app for listing items, placing barter offers, and estimating fair trade ranges.",
    details: [
      "Worked on a Next.js and Supabase app for listings, bidding, and authentication.",
      "Used the Gemini API to estimate item values and compare proposed trades within a 10% range.",
      "Styled the frontend with Tailwind CSS during the hackathon build.",
      "The project received Best Theme Implementation at HackaBull 2025."
    ],
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Gemini API", "JavaScript/TypeScript"],
    badges: ["Hackathon", "Award"],
    links: { GitHub: "#", Devpost: "#", Demo: "#" }
  },
  {
    title: "Canvas Co-Pilot",
    subtitle: "Hackathon/student web app",
    group: "Software + Web",
    image: "assets/images/canvas-copilot.jpg",
    overview: "Student assistant prototype that explored Canvas data, Gemini responses, and room occupancy ideas.",
    details: [
      "Explored study-slot suggestions based on room occupancy data.",
      "Worked on a Tailwind CSS frontend for the assistant interface.",
      "Tested natural language queries around assignments, grades, and study scheduling."
    ],
    tech: ["Canvas API", "Gemini AI", "Azure Custom Vision", "Tailwind CSS", "JavaScript"],
    badges: ["Student Project"],
    links: { GitHub: "#", Demo: "#" }
  },
  {
    title: "Mimic Robotic Arm Prototype",
    subtitle: "In progress - servo control prototype",
    group: "Robotics + Mechatronics",
    image: "assets/images/mimic-arm.jpg",
    overview: "In-progress robotics prototype exploring how input joints can map to servo motor movement.",
    details: [
      "Testing a small control setup where potentiometer inputs can map to servo positions.",
      "Modeling 3D-printable parts while considering torque limits, linkage geometry, and joint spacing.",
      "Currently focused on mechanical layout, actuator placement, and improving the control mapping."
    ],
    tech: ["Arduino/ESP32", "Servo Motors", "Potentiometers", "Fusion 360", "3D Printing"],
    badges: ["In Progress", "Prototype"],
    links: { GitHub: "#", "CAD Files": "#", Photos: "#" }
  },
  {
    title: "Arduino Line-Following Robot",
    subtitle: "Custom chassis autonomous robot",
    group: "Robotics + Mechatronics",
    image: "assets/images/line-following-robot.jpg",
    overview: "Arduino robot project focused on chassis design, sensor placement, and line-following behavior.",
    details: [
      "Modeled and 3D printed a small robot chassis.",
      "Added Arduino-based navigation hardware and a sensor array.",
      "Adjusted sensor placement and chassis geometry through testing."
    ],
    tech: ["Arduino", "CAD", "3D Printing", "Sensors", "Motor Control"],
    badges: ["Learning Project"],
    links: { GitHub: "#", Photos: "#" }
  },
  {
    title: "E-Waste Upcycling Project",
    subtitle: "Learning project - laptop camera reuse",
    group: "Hardware + Repair",
    image: "assets/images/e-waste-webcam.jpg",
    overview: "Small hardware reuse project converting an old laptop camera module into an external USB webcam.",
    details: [
      "Traced the camera module connections and soldered the wiring needed for USB use.",
      "Practiced component reuse, hardware repair, and careful circuit tracing.",
      "Connected the project to personal interest in sustainability and right-to-repair."
    ],
    tech: ["Soldering", "Circuit Tracing", "USB Hardware", "Electronics Repair"],
    badges: ["Learning Project"],
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
      const controlName = controlIndex === 0 ? "Minimize" : controlIndex === 1 ? "Restore" : "Hide";
      control.setAttribute("aria-label", `${controlName} window`);
      control.dataset.windowControl = controlName.toLowerCase();

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

function initExperienceSliders() {
  document.querySelectorAll("[data-slider]").forEach(slider => {
    const slides = Array.from(slider.querySelectorAll(".experience-slide"));
    const dots = Array.from(slider.querySelectorAll("[data-slider-dot]"));
    const prevButton = slider.querySelector("[data-slider-prev]");
    const nextButton = slider.querySelector("[data-slider-next]");
    let activeSlide = slides.findIndex(slide => slide.classList.contains("is-active"));
    if (activeSlide < 0) activeSlide = 0;

    const showSlide = nextSlide => {
      activeSlide = (nextSlide + slides.length) % slides.length;
      slides.forEach((slide, index) => slide.classList.toggle("is-active", index === activeSlide));
      dots.forEach((dot, index) => {
        const isActive = index === activeSlide;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    };

    prevButton.addEventListener("click", () => showSlide(activeSlide - 1));
    nextButton.addEventListener("click", () => showSlide(activeSlide + 1));
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => showSlide(index));
    });
    showSlide(activeSlide);
  });
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[character]));
}

function makeTag(text) {
  return `<span class="tag">${escapeHtml(text)}</span>`;
}

function makeBadge(text) {
  const className = text === "Award" ? "badge award" : text === "In Progress" ? "badge progress" : "badge";
  return `<span class="${className}">${escapeHtml(text)}</span>`;
}

function renderTabs() {
  categoryTabs.innerHTML = groups.map(group => `<button class="tab-button ${group === activeGroup ? "active" : ""}" data-group="${escapeHtml(group)}">${escapeHtml(group)}</button>`).join("");
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
        ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} photo">`
        : `<span>${escapeHtml(group)}</span>`;
      return `
        <button class="project-card" data-index="${projectIndex}">
          <div class="project-thumb image-placeholder ${project.hasPhoto ? "has-photo" : ""}" data-image="${escapeHtml(project.image)}">${thumbContent}</div>
          <div class="project-card-body">
            <div class="badges">${project.badges.map(makeBadge).join("")}</div>
            <h4>${escapeHtml(project.title)}</h4>
            <p>${escapeHtml(project.overview)}</p>
            <div class="tag-row">${project.tech.slice(0, 4).map(makeTag).join("")}</div>
          </div>
        </button>`;
    }).join("");
    return `<section class="project-category"><h3>${escapeHtml(group)}</h3><div class="project-grid">${cards}</div></section>`;
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
  document.getElementById("modalDetailContent").innerHTML = project.sections
    ? project.sections.map(section => `
        <h3>${escapeHtml(section.title)}</h3>
        <ul>${section.items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      `).join("")
    : `<h3>Details</h3><ul>${project.details.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  document.getElementById("modalTech").innerHTML = project.tech.map(makeTag).join("");
  document.getElementById("modalImage").classList.toggle("has-photo", Boolean(project.hasPhoto));
  document.getElementById("modalImage").innerHTML = project.hasPhoto
    ? `<img src="${project.image}" alt="${escapeHtml(project.title)} photo">`
    : `<span>Image coming soon<br>${escapeHtml(project.image)}</span>`;
  document.getElementById("modalLinks").innerHTML = Object.entries(project.links).map(([label, href]) => {
    const disabled = href === "#";
    return `<a class="xp-button" href="${disabled ? "" : escapeHtml(href)}" ${disabled ? "aria-disabled=\"true\" tabindex=\"-1\"" : "target=\"_blank\" rel=\"noreferrer\""}>${escapeHtml(label)}</a>`;
  }).join("");
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
initExperienceSliders();
