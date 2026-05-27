// ============================================
// main.js — Chatbot Support Routing Controls
// ============================================

const supportFAQ = {
    "purpose": "The purpose of Global Breath-Link is to democratize lung health by providing a free triage-to-treatment ecosystem. It uses interactive simulation tools to raise awareness about environmental or genetic risks, features an AI Acoustic Biopsy tool for screening, and connects users to personalized clinical care paths.",
    "biopsy": "The AI Acoustic Biopsy tool utilizes real-time FFT audio extraction and KNN biomarkers to process cough recordings for risk analysis.",
    "acoustic": "Our Acoustic Biopsy analyzes key respiratory frequencies from smartphone mic inputs to help track digital biomarkers.",
    "radon": "Radon is an invisible, odorless radioactive gas. The Awareness Simulator maps out its alpha decay pathways in lung tissue.",
    "simulator": "The Awareness Simulator allows you to adjust exposure tiers (low, medium, high) to inspect the structural cellular impacts of toxins.",
    "treatment": "The Care Pathway section connects risk metrics with actual clinical steps like Spirometry and uses the Google Maps API to source care nodes.",
    "maps": "We integrate the Google Maps API in the Treatment tab to assist users in locating physical diagnostic facilities nearby.",
    "certificate": "You can download your certification of competency after completing all exposure levels in a pathology simulation and passing its 10-question final exam.",
    "quiz": "The exam requires a score of 8/10 to unlock your downloadable certificate badge. Hints are provided under each prompt if you get stuck!",
    "hello": "Hi there! Welcome to Breath-Link support. How can I help you navigate our simulation or triage portals?",
    "help": "I can help explain our AI diagnostic models, simulation pathways, certificate requirements, or map tools. What can I answer for you?"
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
        // Pass true if the reply contains an HTML link string
        const isHTML = reply.includes('href=');
        createBubble(reply, 'bot-message', isHTML);
    }, 450);
}

function createBubble(text, systemClass, isHTML = false) {
    const bubble = document.createElement('div');
    bubble.classList.add('message', systemClass);
    
    if (isHTML) {
        bubble.innerHTML = text; // Safely renders our fallback email link
    } else {
        bubble.textContent = text; // Keeps regular messages clean and secure
    }
    
    widgetDisplay.appendChild(bubble);
    widgetDisplay.scrollTop = widgetDisplay.scrollHeight; // Keep view auto-scrolled
}

function lookupAnswer(inputRaw) {
    const cleanInput = inputRaw.toLowerCase();
    
    // Scan FAQ data keys for matches
    for (const phrase in supportFAQ) {
        if (cleanInput.includes(phrase)) {
            return supportFAQ[phrase];
        }
    }
    
    // Fallback text with a direct, clickable mailto address link
    return "I'm not fully sure how to answer that question. Try asking about the 'site purpose', 'Acoustic Biopsy', 'Simulator levels', or 'Quiz rules'. For further assistance, feel free to email us directly at <a href='mailto:contact@breathlink.org' style='color: #27ae60; font-weight: bold; text-decoration: underline;'>contact@breathlink.org</a>.";
}

// UI Event Triggers
if (widgetSend && widgetInput) {
    widgetSend.addEventListener('click', postChatMessage);
    widgetInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') postChatMessage();
    });
}
