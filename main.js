// ============================================
// main.js — Chatbot Support Routing Controls
// ============================================

const supportFAQ = {
    // 1-5: General Platform & Purpose
    "purpose": "The purpose of Global Breath-Link is to democratize lung health by providing a free triage-to-treatment ecosystem. It uses interactive simulation tools to raise awareness, features an AI Acoustic Biopsy tool for screening, and connects users to care paths.",
    "how it work": "The site works in 3 stages: 1. Awareness (learning via lung pathology simulation), 2. Detection (submitting or checking cough audio biomarkers), and 3. Treatment (finding local diagnostic testing facilities).",
    "cost": "Global Breath-Link is completely free! Our mission is to provide open-access lung health pre-screening and education to everyone worldwide.",
    "medical advice": "No, this platform does not provide official medical advice. It is a pre-screening triage tool intended for educational and tracking purposes. Always consult a doctor for official clinical decisions.",
    "language": "You can change languages using the custom translation dropdown menu at the top right of the navigation bar.",

    // 6-10: Section 1 — Awareness Simulator & Pathology
    "simulator": "The Awareness Simulator allows you to adjust exposure tiers (low, medium, high) to inspect the structural cellular impacts of toxins like radon, soot, or industrial particles.",
    "radon": "Radon is an invisible, odorless radioactive gas found in soil. The Awareness Simulator maps out its alpha decay pathways and how it doubles lung risks over chronic exposure.",
    "cookfire": "Biomass and cookfire smoke release microscopic PM 2.5 soot particles that bypass mucus barriers, clogging deep alveoli air sacs and causing severe oxidative stress/COPD.",
    "genetics": "Our genetic module covers Alpha-1 Antitrypsin (AAT) Deficiency, where an inherited liver protein error allows unchecked destructive enzymes to digest lung wall elastin fibers.",
    "pollution": "Urban air pollution sections simulate how ground-level Ozone (O3) and Nitrogen Dioxide (NO2) chemically scald the breathing epithelium, causing hyper-reactive airways (RADS).",

    // 11-14: Section 2 & 3 — AI Biopsy & Care Pathways
    "biopsy": "The AI Acoustic Biopsy tool utilizes real-time Fast Fourier Transform (FFT) audio extraction and K-Nearest Neighbors (KNN) biomarker analysis to screen cough audio recordings.",
    "microphone": "If your microphone isn't recording, make sure you have granted the browser permission to access it, check your device system settings, or ensure other tabs aren't locking the hardware.",
    "treatment": "The Care Pathway section connects risk metrics with actual clinical steps like Spirometry or Low-Dose CT scans, and maps out actual medical centers.",
    "maps": "We integrate the Google Maps API in the Treatment tab to assist users in locating physical diagnostic facilities and respiratory care nodes nearby.",

    // 15-17: Exams & Certification Badges
    "certificate": "You can download your certification of competency after completing all exposure levels in an Awareness pathology module and passing its 10-question final exam.",
    "quiz": "The simulation exam requires a score of 8/10 to unlock your downloadable certificate badge. Helpful hints are provided under each prompt if you get stuck!",
    "download": "If your certificate won't download locally, make sure you are running the project through a server tool like VS Code's 'Live Server' extension to bypass canvas security blocks.",

    // 18-20: Kids Zone & Specifics
    "kids": "The Kids Zone is a colorful space designed for ages 6-13, featuring animated lungs, simple lung facts, a gentle breathing pacing ball, and an automated 6-question quiz badge system.",
    "breath": "Our interactive belly breathing modules track your completed pacing intervals to build respiratory strength, a technique highly recommended by doctors.",
    "contact": "For administrative questions, project collaborations, or direct support, you can reach out to our team at contact@breathlink.org."
};

// Target DOM nodes matching index.html
const widgetToggle  = document.getElementById('chat-toggle-btn');
const widgetWindow  = document.getElementById('chat-container');
const widgetClose   = document.getElementById('close-btn');
const widgetSend    = document.getElementById('send-btn');
const widgetInput   = document.getElementById('user-input');
const widgetDisplay = document.getElementById('chat-box');

// Display structural toggle events
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

// Process system input strings
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
    }, 450);
}

function createBubble(text, systemClass, isHTML = false) {
    const bubble = document.createElement('div');
    bubble.classList.add('message', systemClass);
    
    if (isHTML) {
        bubble.innerHTML = text; // Safely renders the fallback email link
    } else {
        bubble.textContent = text; // Keeps regular messages clean and secure
    }
    
    widgetDisplay.appendChild(bubble);
    widgetDisplay.scrollTop = widgetDisplay.scrollHeight; // Auto-scrolls to the newest message
}

function lookupAnswer(inputRaw) {
    const cleanInput = inputRaw.toLowerCase();
    
    // Scan FAQ data keys for matches
    for (const phrase in supportFAQ) {
        if (cleanInput.includes(phrase)) {
            return supportFAQ[phrase];
        }
    }
    
    // Comprehensive fallback if keyword isn't met
    return "I'm not fully sure about that issue. Try asking about the 'site purpose', 'AI biopsy options', 'microphone troubleshooting', 'simulator tiers', or 'download blocks'. For further assistance, feel free to email us directly at <a href='mailto:contact@breathlink.org' style='color: #27ae60; font-weight: bold; text-decoration: underline;'>contact@breathlink.org</a>.";
}

// UI Event Triggers
if (widgetSend && widgetInput) {
    widgetSend.addEventListener('click', postChatMessage);
    widgetInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') postChatMessage();
    });
}
