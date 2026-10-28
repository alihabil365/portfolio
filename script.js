const projects = [
  {
    title: "MSP430 Bluetooth-Controlled DC Motor System",
    subtitle: "Embedded systems course project - motor control and wireless interfaces",
    group: "Embedded Systems + Microcontrollers",
    overview: "An MSP430FR2355 embedded system that controls a 12 VDC motor through PWM, with keypad and smartphone speed control, real-time LCD feedback, and UART telemetry.",
    sections: [
      {
        title: "Project objectives",
        items: [
          "Design, implement, and validate a reliable embedded system for controlling a 12 VDC motor from 0% to 100% speed.",
          "Support both local keypad input and wireless commands from a phone while providing real-time user feedback and telemetry."
        ]
      },
      {
        title: "System architecture",
        items: [
          "Configured the MSP430FR2355 with an 8 MHz SMCLK and used Timer_B1 to generate an approximately 1 kHz PWM signal.",
          "Continuously scanned keypad and Bluetooth input, validated commands, and updated the PWM duty cycle whenever the selected speed changed.",
          "Updated the I2C LCD and UART terminal alongside the motor output so local status and debugging information stayed synchronized.",
          "Detected the LCD automatically at I2C address 0x27 or 0x3F and continued operating with a UART error report if no display was found."
        ]
      },
      {
        title: "Controls and interfaces",
        items: [
          "Accepted numeric speed entry from 0% to 100% through a 4x4 matrix keypad, with # to confirm and * to clear.",
          "Provided A, B, C, and D presets for 100%, 75%, 50%, and 0% motor speed.",
          "Received wireless speed commands from a phone through an ADSD Tech HM-10 Bluetooth Low Energy module.",
          "Displayed current speed and user input on a 16x2 LCD through a PCF8574 I2C backpack and sent concurrent telemetry over 9600-baud UART."
        ]
      },
      {
        title: "Results",
        items: [
          "Achieved stable, real-time PWM motor control across the full 0% to 100% duty-cycle range.",
          "Integrated reliable software-debounced keypad scanning, BLE control, LCD status updates, and UART telemetry.",
          "Capped invalid speed entries at 100% and preserved motor control when the optional LCD was unavailable."
        ]
      },
      {
        title: "Troubleshooting experience",
        items: [
          "Diagnosed an LCD communication failure by checking both the firmware and the physical I2C bus.",
          "Found that a mislabeled breadboard wire had swapped SCL and SDA; correcting the wiring restored reliable communication without a software change.",
          "The issue reinforced the importance of validating hardware connections and firmware together during system integration."
        ]
      }
    ],
    tech: ["MSP430FR2355", "Embedded C", "PWM", "Timer_B1", "Bluetooth Low Energy", "4x4 Keypad", "I2C", "UART", "PCF8574", "12 VDC Motor"],
    badges: ["Course Project", "Embedded Systems", "Hardware"],
    links: { "Watch Project Demo": "https://youtube.com/shorts/6byMVwUYGHE?is=ErQuvRxVcftZCQDK", "Source Code / GitHub": "#" }
  },
  {
    title: "SPECTER-AI Wearable Cybersecurity Alert System",
    subtitle: "Hackathon project - wearable hardware interface",
    group: "Embedded Systems + Microcontrollers",
    image: "assets/images/specter-ai.jpg",
    hasPhoto: true,
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
    overview: "One-day hackathon prototype for helping students organize, manage, and plan their studies through Canvas LMS data, AI responses, and computer vision ideas.",
    sections: [
      {
        title: "What it did",
        items: [
          "Blended Canvas LMS, Azure Vision, and Google Gemini into a practical student assistant concept.",
          "Explored study planning, assignment organization, and natural language support for student workflows.",
          "Tested ideas around room occupancy and study-slot suggestions to help students save time and effort."
        ]
      },
      {
        title: "What I learned",
        items: [
          "Learned how to combine multiple APIs into a user-friendly solution.",
          "Practiced designing a clear and accessible UI/UX for seamless student interactions.",
          "Built stronger teamwork, debugging, and rapid prototyping habits during a one-day build."
        ]
      },
      {
        title: "Where I want to take it",
        items: [
          "I am proud of what the team accomplished in one day and want to keep developing Canvas Co-Pilot.",
          "The long-term goal is to make it a usable Canvas extension that helps students organize, manage, and plan their studies more efficiently."
        ]
      }
    ],
    tech: ["Canvas API", "Gemini AI", "Azure Custom Vision", "Tailwind CSS", "JavaScript"],
    badges: ["Hackathon", "Student Project"],
    links: { Devpost: "https://lnkd.in/eDRSz3Zt", GitHub: "#", Demo: "#" }
  },
  {
    title: "Mimic Robotic Arm Prototype",
    subtitle: "In progress - servo control prototype",
    group: "Robotics + Mechatronics",
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
    title: "Line-Following Tank Robot",
    subtitle: "First-semester autonomous robotics project",
    group: "Robotics + Mechatronics",
    image: "assets/images/line-following-tank-perspective.png",
    hasPhoto: true,
    extraImages: [
      "assets/images/line-following-tank-bottom.png"
    ],
    overview: "First-semester Arduino tank robot designed to follow a line with IR sensors and detect obstacles with an ultrasonic sensor.",
    sections: [
      {
        title: "My role",
        items: [
          "Served as the design and hardware lead for the project.",
          "Focused on the tank-style chassis layout, sensor placement, motor mounting, and hardware integration.",
          "Modeled the PLA chassis concept for 3D printing and planned space for the motors, H-bridges, Arduino, battery pack, IR sensors, and ultrasonic module."
        ]
      },
      {
        title: "Engineering specifications",
        items: [
          "Used a 3D-printed plastic / PLA chassis to keep the robot lightweight and easy to iterate.",
          "Targeted a maximum speed of about 5 mph for safe operation in a controlled educational environment.",
          "Designed the drive system around two H-bridges controlling four DC motors through Arduino logic.",
          "Planned for at least 2 hours of continuous operation from a 4AA battery pack.",
          "Used IR sensors for line following and an ultrasonic sensor for obstacle detection."
        ]
      },
      {
        title: "What I learned",
        items: [
          "Practiced turning design goals into measurable engineering specifications.",
          "Learned how sensor placement, chassis geometry, and motor control affect autonomous robot behavior.",
          "Built early experience coordinating mechanical design decisions with embedded hardware requirements."
        ]
      }
    ],
    details: [
      "Led design and hardware integration for a first-semester Arduino tank robot.",
      "Used IR sensors for path following and an ultrasonic sensor for obstacle detection.",
      "Designed a PLA / 3D-printed chassis around four DC motors controlled by two H-bridges.",
      "Targeted safe classroom operation with a maximum speed around 5 mph and a 4AA battery pack for extended use."
    ],
    tech: ["Arduino", "IR Sensors", "Ultrasonic Sensor", "H-Bridges", "DC Motors", "PLA Chassis", "CAD", "3D Printing"],
    badges: ["Course Project", "Hardware Lead"],
    links: { GitHub: "#", Photos: "#" }
  },
  {
    title: "E-Waste Upcycling Project",
    subtitle: "Learning project - laptop camera reuse",
    group: "Hardware + Repair",
    image: "assets/images/e-waste-webcam.png",
    hasPhoto: true,
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

const updatedRelays = [
{
    title: "DC Overcurrent Relay & Fault Logging",
    subtitle: "Low-voltage DC prototype — hardware and firmware",
    group: "Power Systems",
    image: "",
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
    links: {}
  },
  {
    "title": "AC RMS Protection Relay — PCB Design",
    "subtitle": "Schematic design / PCB under work",
    "group": "Power Systems",
    "image": "assets/images/ac-rms-protection-relay-schematic.png",
    "hasPhoto": true,
    "imageCaption": "AC RMS protection relay schematic — PCB under work.",
    "overview": "A separate AC RMS protection relay design in KiCad. The schematic is available; PCB layout and hardware validation are still in progress.",
    "sections": [
        {
            "title": "Design shown in the schematic",
            "items": [
                "ESP32-based controller with a 5 V input and 3.3 V regulation.",
                "Current measurement input, relay driver, trip LED, buzzer, and reset/test controls.",
                "AC input/load connections with fuse and varistor components shown in the schematic."
            ]
        },
        {
            "title": "Current status",
            "items": [
                "PCB under work. This image documents the schematic design, not a completed or validated PCB.",
                "AC RMS measurement accuracy, protection behavior, and assembled hardware results have not yet been documented."
            ]
        },
        {
            "title": "How it differs from the DC prototype",
            "items": [
                "The DC prototype uses an INA219 for low-voltage sensing and firmware fault logging.",
                "This entry covers the separate AC RMS schematic and planned PCB implementation."
            ]
        }
    ],
    "tech": [
        "ESP32",
        "KiCad",
        "Schematic Design",
        "PCB Layout",
        "Relay Control",
        "AC RMS"
    ],
    "badges": [
        "In Progress",
        "PCB under work"
    ],
    "links": {
        "Schematic": "assets/images/ac-rms-protection-relay-schematic.png"
    }
}
];
const relay = updatedRelays[0];
projects.splice(projects.findIndex(p => p.title.startsWith("Digital Overcurrent")),1,relay);
projects.push(updatedRelays[1]);
const fpga = {title:'8-Bit FPGA Accumulating Calculator',subtitle:'October 2026 | Verilog design and simulation',group:'FPGA / Digital Design',overview:'Designed and simulated an 8-bit accumulating arithmetic calculator in Verilog, implementing sequential addition and subtraction through custom combinational and sequential logic.',tech:['Artix-7','Basys 3','Vivado','Verilog HDL','RTL Simulation','Digital Logic'],badges:['RTL Simulation'],status:'Simulation verified; physical board testing not documented',sections:[{title:'Engineering objective',items:['Build a sequential circuit that accumulates successive arithmetic operations.']},{title:'System architecture',items:['4-bit operand input → 8-bit adder/subtractor → 8-bit accumulator → output.','The accumulator output feeds back into the arithmetic circuit.']},{title:'Implementation',items:['Connected 1-bit full adders to form an 8-bit ripple-carry adder/subtractor.','Used XOR-controlled operand inversion for two’s-complement subtraction.','Developed the accumulator with enabled D flip-flops and reset logic.','Integrated synchronized push-button inputs, pulse generation, and edge detection.','Mapped FPGA inputs and outputs using a Basys 3 XDC constraints file.']},{title:'Testing and validation',items:['Verified positive, negative, and sequential arithmetic operations using Vivado simulation testbenches and waveform inspection.','Physical FPGA board testing is not documented.']}],links:{}};
fpga.image = 'assets/images/fpga-calculator-rtl.png';
fpga.extraImages = ['assets/images/fpga-calculator-waveform.png', 'assets/images/fpga-calculator-simulation-log.png', 'assets/docs/fpga-reference/IMG_8899.jpeg'];
fpga.imageDescriptions = {
 'assets/images/fpga-calculator-rtl.png': 'Vivado RTL schematic showing the adder/subtractor, accumulator feedback, and synchronized add/subtract pulse generators.',
 'assets/images/fpga-calculator-waveform.png': 'Vivado waveform showing clock, reset, add/subtract commands, 4-bit operand input, and signed accumulator results.',
 'assets/images/fpga-calculator-simulation-log.png': 'Supplied simulation transcript: 16 PASS entries covering reset, positive and negative results, sequential operations, and held-add input.',
 'assets/docs/fpga-reference/IMG_8899.jpeg': 'Supplied Basys 3 board photograph showing power, programming, and output LEDs. This photograph alone does not establish arithmetic test coverage.'
};
fpga.links = {'Verilog source': 'assets/code/fpga-calculator.v', 'Full-size RTL schematic': fpga.image, 'Full-size waveform': fpga.extraImages[0], 'Simulation results': fpga.extraImages[1]};
fpga.status = 'RTL simulation documented; Basys 3 board photographs supplied';
const validation = fpga.sections.find(section => section.title === 'Testing and validation');
validation.items = [
 'The supplied simulation transcript contains 16 PASS entries, including initial and final resets, sequential addition and subtraction, a held-add input, and a zero operand.',
 'Example sequence: 0 + 5 = 5; +7 = 12; −3 = 9; +10 = 19; −12 = 7; −9 = −2; +4 = 2.',
 'The waveform corroborates positive and negative accumulator values, including 7 − 9 = −2 and 8 − 12 = −4.',
 'Basys 3 photographs document the physical board setup. A recorded hardware arithmetic test sequence and the simulation testbench were not supplied.'
];
fpga.sections.find(section => section.title === 'Implementation').items.push('The source XORs the synchronized add and subtract pulses to enable the accumulator, so simultaneous pulses do not update the result.');
fpga.sections.find(section => section.title === 'Implementation').items = fpga.sections.find(section => section.title === 'Implementation').items.filter(item => !item.startsWith('Mapped FPGA'));
fpga.sections.push({title:'Available source and verification limits',items:['The supplied Verilog includes one_bit_adder, adder_subtractor, enabled D_FF, accumlator, pulse_gen, and continuous_add_sub modules.', 'The two-stage button synchronizer and rising-edge pulse detector are visible in the source; switch debouncing is not implemented.', 'The Basys 3 XDC constraints file and simulation testbench are not included in the supplied files. The screenshots record prior simulation results; simulation has not been rerun here.']});
const plc = {title:'PLC Water Tank Control and HMI System',subtitle:'Controls / Industrial Automation',group:'Controls / Automation',overview:'Developed a PLC-based water tank control system with automated filling logic, HMI monitoring, tank-level visualization, and overflow prevention.',tech:['PLC','HMI','Control Logic','Automation'],badges:[],details:['Implemented PLC control logic for water tank filling.','Created HMI visualization of tank level and filling speed/rate.','Incorporated overflow-prevention logic.','Integrated control functionality with operator monitoring.'],links:{}};
const grid = {title:'IEEE PES Smart-Grid Educational Game',subtitle:'Power Systems / Engineering Outreach',group:'Power Systems',overview:'Developing an interactive educational smart-grid demonstration that teaches K–8 students about electricity distribution, generator availability, and power system protection.',tech:['ESP32','Power Distribution','Protection Concepts','Engineering Outreach'],badges:['In Development'],status:'In development — features below are planned',sections:[{title:'Engineering objective',items:['Create a hands-on science-fair experience explaining generation, distribution, and protection to K–8 students.']},{title:'Planned features',items:['Miniature electrical grid with multiple generators.','Physical toggle switches to simulate generator availability.','ESP32-based monitoring and system interaction.','Game dashboard displaying grid status and protection events.','Educational scenarios involving generation, load management, and faults.']}],links:{}};
const specter = projects.find(p => p.title.startsWith('SPECTER'));
specter.subtitle = 'April 2026 | HackaBull 2026 — Tech for Good Award';
specter.overview = 'Developed an embedded wearable hardware interface that delivers security alerts through an LCD, LEDs, buzzer, and interactive controls.';
specter.badges = ['Tech for Good Award','HackaBull 2026'];
const access = projects.find(p => p.title === 'Embedded Access Control System');
access.overview = 'Built a microcontroller-based access control prototype integrating keypad entry, digital logic, electromechanical actuation, and hardware-assisted fail-safe behavior.';
access.tech = ['Arduino','74LSXX Logic','Servo','I2C','RC Circuits','Keypad'];
access.details.push('Integrated servo actuation with the keypad and display interface.');
const names = {'Embedded Systems + Microcontrollers':'Embedded Systems','Power Systems + Embedded Hardware':'Power Systems','Digital Logic + Circuits':'FPGA / Digital Design','Robotics + Mechatronics':'Robotics','Hardware + Repair':'Electronics / Repair'};
projects.forEach(p => { p.group = names[p.group] || (/Software|MATLAB|Web/.test(p.group) ? 'Software' : p.group); p.links = Object.fromEntries(Object.entries(p.links).filter(([,href]) => href && href !== '#')); });
const featured = [relay,fpga,plc,specter,access,grid];
projects.splice(0,projects.length,...featured,...projects.filter(p => !featured.includes(p)));
projects.forEach((p,i) => { p.featured = i < 6; p.slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-$/,''); });
const groups = ['All',...new Set(projects.map(p => p.group))];
let activeGroup = 'All', modalTrigger = null, searchQuery = '';
document.getElementById('projectSearch').addEventListener('input', event => { searchQuery = event.target.value.trim().toLowerCase(); renderProjects(); });
const categoryTabs = document.getElementById('categoryTabs'), projectSections = document.getElementById('projectSections'), modalBackdrop = document.getElementById('modalBackdrop'), modalClose = document.getElementById('modalClose');
function escapeHtml(value) { return String(value).replace(/[&<>"']/g,c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
const makeTag = text => `<span class="tag">${escapeHtml(text)}</span>`;
const makeBadge = text => `<span class="badge ${/Award/.test(text) ? 'award' : ''}">${escapeHtml(text)}</span>`;
function renderTabs() {
 categoryTabs.innerHTML = groups.map(g => `<button type="button" class="tab-button ${g === activeGroup ? 'active' : ''}" aria-pressed="${g === activeGroup}" data-group="${escapeHtml(g)}">${escapeHtml(g)}</button>`).join('');
 categoryTabs.querySelectorAll('button').forEach(button => button.onclick = () => { activeGroup = button.dataset.group; renderTabs(); renderProjects(); [...categoryTabs.children].find(b => b.dataset.group === activeGroup).focus(); });
}
function renderProjects() {
 const sections = activeGroup === 'All' ? ['Featured Engineering',...groups.slice(1)] : [activeGroup];
 projectSections.innerHTML = sections.map(group => {
  const visible = projects.filter(p => !searchQuery || [p.title,p.overview,p.group,...p.tech].join(' ').toLowerCase().includes(searchQuery)).filter(p => group === 'Featured Engineering' ? p.featured : p.group === group && (activeGroup !== 'All' || !p.featured));
  if (!visible.length) return '';
  return `<section class="project-category"><h3>${escapeHtml(group)}</h3><div class="project-grid">${visible.map(p => `<button type="button" class="project-card" data-index="${projects.indexOf(p)}">${p.demoGif || p.image ? `<div class="project-thumb has-photo"><img src="${escapeHtml(p.demoGif || p.image)}" alt="${escapeHtml(p.imageDescriptions?.[p.demoGif || p.image] || `${p.title} — project image`)}" loading="lazy" decoding="async"></div>` : ''}<div class="project-card-body"><p class="card-category">${escapeHtml(p.group)}</p><div class="badges">${p.badges.map(makeBadge).join('')}</div><h4>${escapeHtml(p.title)}</h4><p>${escapeHtml(p.overview)}</p>${p.status ? `<p class="project-status">${escapeHtml(p.status)}</p>` : ''}<div class="tag-row">${p.tech.slice(0,5).map(makeTag).join('')}</div></div></button>`).join('')}</div></section>`;
 }).join('');
 projectSections.querySelectorAll('.project-card').forEach(card => card.onclick = () => openProject(projects[Number(card.dataset.index)]));
 projectSections.querySelectorAll('img').forEach(img => img.onerror = () => img.parentElement.remove());
}
function openProject(p) {
 if (!modalBackdrop.classList.contains('open')) modalTrigger = document.activeElement;
 history.replaceState(null,'',`#project=${p.slug}`);
 for (const [id,value] of Object.entries({modalWindowTitle:p.title,modalTitle:p.title,modalSubtitle:p.subtitle || '',modalCategory:p.group,modalOverview:p.overview})) document.getElementById(id).textContent = value;
 document.getElementById('modalDetailContent').innerHTML = (p.sections || [{title:'Implementation highlights',items:p.details || []}]).map(section => `<h3>${escapeHtml(section.title)}</h3><ul>${section.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`).join('') + (p.status ? `<h3>Current status</h3><p>${escapeHtml(p.status)}</p>` : '');
 document.getElementById('modalTech').innerHTML = p.tech.map(makeTag).join('');
 const panel = document.getElementById('modalImage'), images = [...new Set([p.demoGif,p.image,...(p.extraImages || [])].filter(Boolean))];
 panel.hidden = !images.length; panel.parentElement.classList.toggle('text-only', !images.length); panel.className = 'modal-image has-photo has-gallery';
 panel.innerHTML = images.map((src,i) => `<figure><a href="${escapeHtml(src)}" target="_blank" rel="noreferrer" aria-label="Open full-size ${escapeHtml(p.title)} image ${i+1}"><img src="${escapeHtml(src)}" alt="${escapeHtml(p.imageDescriptions?.[src] || `${p.title} — project image ${i+1}`)}" decoding="async"></a>${p.imageDescriptions?.[src] ? `<figcaption>${escapeHtml(p.imageDescriptions[src])}</figcaption>` : ""}</figure>`).join('');
 panel.querySelectorAll('img').forEach(img => img.onerror = () => { img.closest("figure").remove(); if (!panel.children.length) { panel.hidden = true; panel.parentElement.classList.add('text-only'); } });
 const links = Object.entries(p.links);
 document.getElementById('modalLinks').innerHTML = links.map(([label,url]) => `<a class="xp-button" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(label)}</a>`).join('');
 document.getElementById('modalLinksHeading').hidden = !links.length;
 modalBackdrop.classList.add('open'); modalBackdrop.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden'; document.querySelector('.desktop-bg').inert = true; modalClose.focus();
}
function closeModal() {
 if (!modalBackdrop.classList.contains('open')) return;
 modalBackdrop.classList.remove('open'); modalBackdrop.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; document.querySelector('.desktop-bg').inert = false; modalTrigger?.focus();
 if (location.hash.startsWith('#project=')) history.replaceState(null,'','#projects');
}
modalClose.onclick = closeModal;
modalBackdrop.onclick = event => { if (event.target === modalBackdrop) closeModal(); };
document.addEventListener('keydown',event => {
 if (event.key === 'Escape') closeModal();
 if (event.key === 'Tab' && modalBackdrop.classList.contains('open')) {
  const items = [...modalBackdrop.querySelectorAll('button, a[href]')], first = items[0], last = items[items.length-1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
 }
});
function initExperienceSliders() {
 document.querySelectorAll('[data-slider]').forEach(slider => {
  const slides = [...slider.querySelectorAll('.experience-slide')], dots = [...slider.querySelectorAll('[data-slider-dot]')]; let active = 0;
  function show(i) { active = (i + slides.length) % slides.length; slides.forEach((s,n) => s.classList.toggle('is-active',n === active)); dots.forEach((d,n) => { d.classList.toggle('is-active',n === active); d.setAttribute('aria-current',String(n === active)); }); }
  slider.querySelector('[data-slider-prev]').onclick = () => show(active-1); slider.querySelector('[data-slider-next]').onclick = () => show(active+1); dots.forEach((dot,i) => dot.onclick = () => show(i)); show(0);
 });
}
function openLinkedProject() { const p = projects.find(p => location.hash === `#project=${p.slug}`); if (p) openProject(p); }
document.querySelector('.stat-tile strong').textContent = String(projects.length);
renderTabs(); renderProjects(); initExperienceSliders(); window.addEventListener('hashchange',openLinkedProject); openLinkedProject();
