// ============================================
// main.js — Global Website Interface Logic
// ============================================

const FAQIntentMap = [
    {
        keywords: ["kids zone", "kid zone", "children", "kids.html", "for kids", "what is the kids zone", "child page", "young"],
        reply: "The Kids Zone is a colorful space designed for ages 6–13. It breaks down respiratory science into easy balloon graphics, clear facts (like why your right lung is bigger), an interactive breathing pace ball, and an automated 6-question quiz badge module."
    },
    {
        keywords: ["purpose", "why was this made", "what is this site", "goal", "mission", "about the site", "project summary", "intent"],
        reply: "The purpose of Global Breath-Link is to democratize lung health by providing a free triage-to-treatment ecosystem. It uses interactive simulation tools to raise awareness about environmental/genetic risks, features an AI Acoustic Biopsy tool for early screening, and connects users to structured care paths."
    },
    {
        keywords: ["how does it work", "how to use", "tutorial", "steps", "stages", "walkthrough", "using the site", "instructions"],
        reply: "The site works in three main stages: 1. Awareness (exploring structural lung cell changes under different toxin thresholds), 2. Detection (utilizing smartphone microphone inputs to analyze cough frequency biomarkers), and 3. Treatment (routing users to local diagnostics)."
    },
    {
        keywords: ["cost", "free", "price", "payment", "subscription", "charge", "fee", "do i have to pay"],
        reply: "Global Breath-Link is completely free! This initiative is dedicated to making respiratory screening systems and advanced pathological education globally accessible without financial barriers."
    },
    {
        keywords: ["medical advice", "doctor", "diagnose", "accurate", "reliable", "clinical", "cure", "treatment plan"],
        reply: "No, this platform does not give official medical advice. It is an educational pre-screening triage tool. While it uses robust models like KNN and audio FFT analysis, you should always consult a licensed medical professional for clinical diagnostics."
    },
    {
        keywords: ["language", "translate", "spanish", "chinese", "hindi", "arabic", "french", "german", "espanol", "foreign"],
        reply: "You can change languages instantly using the translation select menu located inside the Settings dropdown gear widget at the top right corner of the navigation bar."
    },
    {
        keywords: ["biopsy", "acoustic", "cough", "recording", "audio", "detection tool", "fft", "knn", "screening"],
        reply: "The AI Acoustic Biopsy tool uses real-time Fast Fourier Transform (FFT) extraction to capture cough frequencies. It then checks these digital sound shapes against a K-Nearest Neighbors (KNN) matrix to assess baseline biomarker health risks."
    },
    {
        keywords: ["microphone", "mic", "not recording", "cannot hear", "permission", "audio error", "mic blocked", "browser access"],
        reply: "If your microphone isn't working: 1. Look at your browser address bar and verify that microphone access is allowed. 2. Close other open tabs that might be using your mic. 3. Double-check your computer or phone's main privacy settings to ensure the browser app has hardware permissions."
    },
    {
        keywords: ["simulator", "lung animation", "exposure", "healthy state", "low", "medium", "high", "particles", "stain", "breathing speed"],
        reply: "The Awareness Simulator uses structural canvas algorithms to draw lung cells. Adjusting exposure states (Healthy, Low, Medium, High) increases particle densities and alters cellular staining patterns to visually demonstrate progressive respiratory tissue damage."
    },
    {
        keywords: ["radon", "radioactive", "gas", "soil", "basal cells", "alpha decay", "sclc", "invisible hazard"],
        reply: "Radon is an invisible, odorless radioactive gas from decaying uranium in the ground. The simulator models how its alpha particles lodge in the bronchi and cause double-strand DNA breaks in basal cells, increasing Small-Cell Lung Carcinoma risks."
    },
    {
        keywords: ["cookfire", "smoke", "soot", "pm 2.5", "biomass", "wood smoke", "alveoli", "copd", "indoor cooking"],
        reply: "Burning wood or biomass indoors creates fine PM 2.5 soot particles. These are small enough to pass by your mucus lining, completely clogging deep alveoli air sacs, overloading macrophage immune cells, and triggering chronic inflammatory tissue remodeling."
    },
    {
        keywords: ["genetics", "aat", "deficiency", "inherited", "elastin", "liver", "enzymes", "emphysema", "born with"],
        reply: "Our genetic module models Alpha-1 Antitrypsin (AAT) Deficiency. This is an inherited error where the liver doesn't produce enough protective AAT protein to stop destructive elastase enzymes from breaking down healthy, elastic fibers in lower lung walls."
    },
    {
        keywords: ["pollution", "smog", "ozone", "traffic", "city air", "no2", "exhaust", "scald", "reactive airways", "rads"],
        reply: "Urban air pollution sections simulate ground-level Ozone (O3) and NO2 from vehicle combustion. These highly reactive gases chemically scald your airway lining, destroying epithelial layers and causing chronic hyper-reactive responses (RADS)."
    },
    {
        keywords: ["radiation", "fibrosis", "xray", "ct scan", "external rays", "free radicals", "scar", "stiff lung"],
        reply: "High-energy external ionizing radiation splits water molecules inside lung cells. This release of free radicals triggers an intense cytokine cascade that overproduces stiff scar tissue, permanently lowering total lung capacity."
    },
    {
        keywords: ["alcohol", "wine", "paralyze", "cilia", "brushes", "stagnant mucus", "pneumonia", "infection"],
        reply: "Chronic alcohol exposure targets the tiny hair-like brushes (cilia) lining your respiratory tract. It paralyzes their internal dynein motors, trapping dirty mucus inside and making it easy for harmful bacteria to colonize."
    },
    {
        keywords: ["diet", "lifestyle", "vitamins", "antioxidant", "shield", "surfactant", "aging", "nutrition"],
        reply: "Low intakes of Vitamins A, C, and E weaken the protective qualities of your lungs' inner surfactant fluid lining. Without these dietary shields, your lung tissues lose their buffer against inhaled oxidants, accelerating cellular aging."
    },
    {
        keywords: ["carcinogens", "asbestos", "industrial", "mesothelioma", "fibers", "pierce", "mitotic", "factory"],
        reply: "Industrial carcinogens like sharp asbestos fibers physically stab through delicate inner cell layers. They tangle with the mitotic machinery when cells divide, creating chromosomal defects that can cause malignant mesothelioma decades down the road."
    },
    {
        keywords: ["certificate", "badge", "diploma", "award", "print", "get certified", "exam rules", "how to unlock"],
        reply: "You can download an official Certificate of Competency! To unlock it, explore all exposure tiers (Healthy through High) inside a pathology module to open up the 10-question final exam. Passing with an 8/10 or better opens up the download form."
    },
    {
        keywords: ["quiz", "test", "exam", "failed", "passed", "score", "questions", "stuck", "hints"],
        reply: "The interactive final exams feature 10 rigorous multiple-choice questions matching your selected topic. If a question feels tough, simply click the lightbulb icon to toggle a custom hint. If you score under an 8/10, you can easily review the simulator text and try again!"
    },
    {
        keywords: ["download block", "wont download", "not working", "download error", "save image", "canvas secure", "live server"],
        reply: "If your certificate button won't trigger a download, your web browser is blocking local canvas image assembly for safety. To bypass this, open your file through a local web host extension like VS Code's 'Live Server'."
    },
    {
        keywords: ["maps", "hospital", "clinic", "near me", "location", "find care", "spirometry", "ct scans", "google maps api"],
        reply: "The Treatment Plan panel features an integrated Google Maps API mapping system. Once you complete your risk index screenings, the maps render available local clinic nodes where you can schedule official validation diagnostics like spirometry tests."
    },
    {
        keywords: ["contact", "email", "support", "help desk", "creators", "ashrita", "akhil", "bug report", "message"],
        reply: "For extra assistance, feature requests, or technical bug fixes, reach out to the project creators (Ashrita Nagalla and Akhil Nagalla) at our admin mailbox: contact@breathlink.org."
    }
];

// Target UI DOM nodes matching index.html layout rules
const widgetToggle  = document.getElementById('chat-toggle-btn');
const widgetWindow  = document.getElementById('chat-container');
const widgetClose   = document.getElementById('close-btn');
const widgetSend    = document.getElementById('send-btn');
const widgetInput   = document.getElementById('user-input');
const widgetDisplay = document.getElementById('chat-box');

// Display structural widget window toggle triggers
if (widgetToggle && widgetWindow && widgetClose) {
    widgetToggle.addEventListener('click', () => {
        widgetWindow.style.display = 'flex';
        widgetToggle.style.display = 'none';
    });

    widgetClose.addEventListener('click', () => {
        widgetWindow.style.display = 'none';
        widgetToggle.style.display = 'block';
    });
}

function postChatMessage() {
    if (!widgetInput || !widgetDisplay) return;
    
    const query = widgetInput.value.trim();
    if (!query) return;

    createBubble(query, 'user-message');
    widgetInput.value = '';

    setTimeout(() => {
        const reply = lookupAnswer(query);
        const isHTML = reply.includes('href=');
        createBubble(reply, 'bot-message', isHTML);
    }, 400);
}

function createBubble(text, systemClass, isHTML = false) {
    const bubble = document.createElement('div');
    bubble.classList.add('message', systemClass);
    
    if (isHTML) {
        bubble.innerHTML = text; 
    } else {
        bubble.textContent = text; 
    }
    
    widgetDisplay.appendChild(bubble);
    widgetDisplay.scrollTop = widgetDisplay.scrollHeight;
}

function lookupAnswer(inputRaw) {
    const cleanInput = inputRaw.toLowerCase();
    
    for (const group of FAQIntentMap) {
        for (const phrase of group.keywords) {
            if (cleanInput.includes(phrase)) {
                return group.reply;
            }
        }
    }
    
    return "I'm not completely sure how to map that question. Try asking about our 'Kids Zone features', 'site purpose', 'Acoustic Biopsy settings', or 'microphone blocking'. For further assistance, email us at <a href='mailto:contact@breathlink.org' style='color: #27ae60; font-weight: bold; text-decoration: underline;'>contact@breathlink.org</a>.";
}

if (widgetSend && widgetInput) {
    widgetSend.addEventListener('click', postChatMessage);
    widgetInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') postChatMessage();
    });
}

// ============================================
// GEAR DROPDOWN TOGGLE PIPELINE CONTROLS
// ============================================
window.toggleSettingsMenu = function(event) {
    event.stopPropagation(); 
    const dropdown = document.getElementById('settingsDropdown');
    
    if (dropdown) {
        if (dropdown.style.display === 'flex') {
            dropdown.style.display = 'none';
        } else {
            dropdown.style.display = 'flex';
        }
    }
};

document.addEventListener('click', (event) => {
    const dropdown = document.getElementById('settingsDropdown');
    const gearBtn = document.getElementById('gearBtn');
    
    if (dropdown && gearBtn) {
        if (!dropdown.contains(event.target) && !gearBtn.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    }
});

// ============================================
// SYSTEM UPGRADE LOGIC EXTENSIONS
// ============================================

// 1. Chatbot Delayed Pop-up Notification Engine
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const alertBubble = document.getElementById("chat-alert-bubble");
        const chatWindow = document.getElementById("chat-container");
        
        if (alertBubble && chatWindow && chatWindow.style.display !== "flex") {
            alertBubble.style.display = "block";
        }
    }, 3000); 
});

if (widgetToggle) {
    widgetToggle.addEventListener("click", () => {
        const alertBubble = document.getElementById("chat-alert-bubble");
        if (alertBubble) alertBubble.style.display = "none";
    });
}

// 2. Persistent Global Theme Switcher Loop
window.toggleDarkModeTheme = function() {
    const mainBody = document.body;
    mainBody.classList.toggle("dark-theme-mode");
    
    const isActive = mainBody.classList.contains("dark-theme-mode");
    localStorage.setItem("breathlinkDarkModeActive", isActive);
}

document.addEventListener("DOMContentLoaded", () => {
    const cacheStatus = localStorage.getItem("breathlinkDarkModeActive");
    if (cacheStatus === "true") {
        document.body.classList.add("dark-theme-mode");
    }
    // Launch background oxygen animation system
    initHeaderParticles();
});

// 3. Ambient Oxygen Molecule Particle Canvas Animation Loop
function initHeaderParticles() {
    const canvas = document.getElementById('headerParticleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let atoms = [];
    
    function resizeCanvas() {
        const header = document.getElementById('heroHeader');
        if (header && canvas) {
            canvas.width = header.offsetWidth;
            canvas.height = header.offsetHeight;
        }
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    class OxygenAtom {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 0.4;
            this.speedY = -Math.random() * 0.5 - 0.2; // Rises upwards like breath vapor
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.y < -10) { 
                this.y = canvas.height + 10;
                this.x = Math.random() * canvas.width;
            }
        }
        draw() {
            ctx.fillStyle = `rgba(135, 206, 250, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    for (let i = 0; i < 40; i++) {
        atoms.push(new OxygenAtom());
    }
    
    function runLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        atoms.forEach(atom => {
            atom.update();
            atom.draw();
        });
        requestAnimationFrame(runLoop);
    }
    runLoop();
}