// ============================================
// script.js — All simulator, quiz & certificate logic
// ============================================

const canvas = document.getElementById("lungCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let currentType = 'radon';
let simState = { exposure: 0, targetExposure: 0, breathTime: 0 };
let progress = { healthy: false, low: false, medium: false, high: false };

// ── PARTICLE CLASS ──
class Particle {
    constructor() { this.reset(); }
    reset() {
        const s = pathologyData[currentType] || pathologyData['radon'];
        this.x = canvas.width / 2; this.y = 10;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = Math.random() * s.speed + 2;
        this.reachedLungs = false;
    }
    update() {
        this.x += this.vx; this.y += this.vy;
        if (this.y > 180 && !this.reachedLungs) {
            this.vx += (this.x < canvas.width/2 ? -1.5 : 1.5);
            this.reachedLungs = true;
        }
        if (this.y > 480) this.reset();
    }
    draw() {
        ctx.fillStyle = (pathologyData[currentType] || pathologyData['radon']).color;
        ctx.beginPath(); ctx.arc(this.x, this.y, 4, 0, Math.PI * 2); ctx.fill();
    }
}

// ── DRAW ANATOMY ──
function drawAnatomy(scale, exp) {
    const cx = canvas.width / 2; 
    const cy = 140; // Adjusted slightly from 280 to maintain vertical centering
    const s = pathologyData[currentType] || pathologyData['radon'];
    let r = 255 - (exp * 210); 
    let g = 165 - (exp * 140); 
    let b = 175 - (exp * 150);

    const drawSide = (side) => {
        ctx.save(); 
        // Halved the horizontal offset (110 -> 55)
        ctx.translate(cx + (side * 55), cy); 
        const lScale = scale * (1 - (exp * 0.18)); 
        ctx.scale(lScale * side, lScale);

        // Halved all Bezier curve coordinates
        ctx.beginPath(); 
        ctx.moveTo(0, -60); 
        ctx.bezierCurveTo(80, -60, 97.5, 80, 0, 100);
        ctx.bezierCurveTo(-35, 100, -20, -30, 0, -60);
        
        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`; 
        ctx.fill();

        if (exp > 0.05) {
            ctx.globalAlpha = exp; 
            ctx.fillStyle = s.stain;
            for(let i = 0; i < 15; i++) {
                ctx.beginPath(); 
                // Halved the spread (60->30, 90->45) and the base radius/growth (5->2.5, 20->10)
                ctx.arc(Math.sin(i*5)*30, Math.cos(i*3)*45, 2.5 + (exp*10), 0, Math.PI*2); 
                ctx.fill();
            }
        }
        ctx.restore();
    };

    drawSide(-1); 
    drawSide(1);
    
    ctx.fillStyle = "#761818"; 
    // Halved width (36->18), height (140->70), and adjusted Y (40->150) to connect perfectly
    ctx.fillRect(cx - 9, 10, 15, 70); 
}

// ── ANIMATION LOOP ──
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 1. Reduced exposure transition speed by 50% (0.04 -> 0.02)
    simState.exposure += (simState.targetExposure - simState.exposure) * 0.02;
    
    // 2. Reduced breathing speed by 50% (0.04 -> 0.02 and 0.025 -> 0.0125)
    simState.breathTime += (0.02 - (simState.exposure * 0.0125));
    
    // 3. Reduced breathing expansion (scale amplitude) by 50% (0.03 -> 0.015)
    const scale = 1 + (Math.sin(simState.breathTime) * 0.015);
    
    drawAnatomy(scale, simState.exposure);
    
    if (simState.targetExposure > 0) {
        // 4. Reduced maximum particle density by 50% (200 -> 100)
        if (particles.length < simState.targetExposure * 100) particles.push(new Particle());
    } else { 
        particles = []; 
    }
    
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
}
animate();

// ── UI LOGIC ──
function openSim(type) {
    currentType = type; particles = []; progress = { healthy: false, low: false, medium: false, high: false };
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("simulator").style.display = "block";
    updateUI();
    setExposure('healthy');
}

function updateUI() {
    const s = pathologyData[currentType] || pathologyData['radon'];
    document.getElementById("simTitle").innerText = currentType.toUpperCase() + " CLINICAL ANALYSIS";
    document.getElementById("eduHeading").innerText = s.heading;
    document.getElementById("infoText").innerText = s.info;
    document.getElementById("specMech").innerHTML = s.mech;
    document.getElementById("specProg").innerHTML = s.prog;
}

function setExposure(level) {
    progress[level] = true;
    document.querySelectorAll('.controls button').forEach(b => b.classList.remove('active'));
    document.getElementById('step-' + level).classList.add('active');

    let target, health, color;
    if(level==="healthy")     { target=0;    health=100; color="#27ae60"; }
    else if(level==="low")    { target=0.25; health=75;  color="#f1c40f"; }
    else if(level==="medium") { target=0.55; health=45;  color="#e67e22"; }
    else if(level==="high")   { target=1.0;  health=15;  color="#e74c3c"; }

    simState.targetExposure = target;
    document.getElementById("healthFill").style.width = health + "%";
    document.getElementById("healthFill").style.background = color;
    checkUnlockStatus();
}

function checkUnlockStatus() {
    if(progress.healthy && progress.low && progress.medium && progress.high) {
        document.getElementById("lockMessage").style.display = "none";
        document.getElementById("quizButton").style.display = "inline-block";
    }
}

function goBack() {
    document.getElementById("simulator").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}

// ── QUIZ LOGIC ──
function startQuiz() {
    const quiz = (pathologyData[currentType] || {quiz:[]}).quiz;
    const body = document.getElementById("quizBody");
    const results = document.getElementById("quizResults");
    const header = document.getElementById("quizHeader");

    header.innerText = currentType.toUpperCase() + " CERTIFICATION EXAM";
    results.style.display = "none";
    document.getElementById("nameSection").style.display = "none";
    document.getElementById("submitQuizBtn").style.display = "block";
    document.getElementById("downloadCertBtn").style.display = "none";
    document.getElementById("firstNameInput").value = "";
    document.getElementById("lastNameInput").value = "";
    document.getElementById("nameError").style.display = "none";

    let html = "";
    quiz.forEach((q, i) => {
        html += `<div class="quiz-q">
            <p><strong>${i+1}. ${q.q}</strong></p>`;

        // Hint button + collapsible hint box
        if (q.hint) {
            html += `
            <div style="margin: 6px 0 10px 0;">
                <button
                    type="button"
                    onclick="toggleHint(${i})"
                    style="background:none; border:1px solid #f39c12; color:#f39c12; padding:3px 12px; border-radius:12px; font-size:0.78rem; cursor:pointer; font-weight:bold;">
                    💡 Show Hint
                </button>
                <div id="hint-${i}" style="display:none; margin-top:8px; background:#fffbf0; border-left:3px solid #f39c12; padding:8px 12px; border-radius:0 6px 6px 0; font-size:0.85rem; color:#7d5a00;">
                    ${q.hint}
                </div>
            </div>`;
        }

        q.o.forEach(opt => {
            html += `<label style="display:block;margin:4px 0;"><input type="radio" name="q${i}" value="${opt}"> ${opt}</label>`;
        });
        html += `</div>`;
    });
    body.innerHTML = html;
    document.getElementById("quizModal").style.display = "flex";
}

function toggleHint(i) {
    const hintBox = document.getElementById("hint-" + i);
    const btn = hintBox.previousElementSibling;
    if (hintBox.style.display === "none") {
        hintBox.style.display = "block";
        btn.textContent = "💡 Hide Hint";
        btn.style.background = "#fff8e6";
    } else {
        hintBox.style.display = "none";
        btn.textContent = "💡 Show Hint";
        btn.style.background = "none";
    }
}

function submitQuiz() {
    const quiz = (pathologyData[currentType] || {quiz:[]}).quiz;
    let score = 0;
    quiz.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if(selected && selected.value === q.a) score++;
    });

    const results = document.getElementById("quizResults");
    results.style.display = "block";

    if(score >= 8) {
        results.style.background = "#d4edda";
        results.style.color = "#155724";
        results.innerHTML = `🎓 PASSED: ${score}/10! You have demonstrated clinical mastery of ${currentType} pathology.`;
        document.getElementById("submitQuizBtn").style.display = "none";
        document.getElementById("nameSection").style.display = "block";
        document.getElementById("downloadCertBtn").style.display = "block";
    } else {
        results.style.background = "#f8d7da";
        results.style.color = "#721c24";
        results.innerHTML = `❌ FAILED: ${score}/10. You need 8/10 to pass. Review the detailed sub-topics and try again!`;
    }
}

function closeQuiz() { document.getElementById("quizModal").style.display = "none"; }

// ── CERTIFICATE LOGIC ──
function generateCertificate() {
    const firstName = document.getElementById("firstNameInput").value.trim();
    const lastName  = document.getElementById("lastNameInput").value.trim();
    const nameError  = document.getElementById("nameError");
    const firstInput = document.getElementById("firstNameInput");
    const lastInput  = document.getElementById("lastNameInput");

    // Form Validation
    if (!firstName || !lastName) {
        nameError.style.display = "block";
        if (!firstName) firstInput.classList.add("input-error");
        else firstInput.classList.remove("input-error");
        if (!lastName) lastInput.classList.add("input-error");
        else lastInput.classList.remove("input-error");
        setTimeout(() => {
            firstInput.classList.remove("input-error");
            lastInput.classList.remove("input-error");
        }, 400);
        return;
    }

    nameError.style.display = "none";
    const fullName = firstName + " " + lastName;
    const c = document.getElementById("certCanvas");
    const x = c.getContext("2d");

    // Scale 2x to utilize the 1800x1300 HD canvas
    x.scale(2, 2);

    // Prepare dynamic images
    const logoImg = new Image();
    const qrImg = new Image();
    logoImg.src = 'BreathLinkSeal.png';
    qrImg.src = 'qrcode.jpg';

    let imagesLoaded = 0;

    const finalizeCertificate = () => {
        imagesLoaded++;
        // Wait for both images to be fully loaded into memory
        if(imagesLoaded === 2) {
            
            // 1. Background
            x.fillStyle = "#fffdf5"; // Warm ivory professional background
            x.fillRect(0, 0, 900, 650);

            // 2. Decorative background pattern
            x.globalAlpha = 0.03;
            x.fillStyle = "#1a4a7c";
            for (let i = 0; i < 900; i += 40) {
                for (let j = 0; j < 650; j += 40) {
                    x.beginPath(); x.arc(i, j, 15, 0, Math.PI * 2); x.fill();
                }
            }
            x.globalAlpha = 1;

            // 3. PROFESSIONAL METALLIC GOLD BORDER
            const goldGradient = x.createLinearGradient(0, 0, 900, 650);
            goldGradient.addColorStop(0, '#BF953F');
            goldGradient.addColorStop(0.25, '#FCF6BA');
            goldGradient.addColorStop(0.5, '#B38728');
            goldGradient.addColorStop(0.75, '#FBF5B7');
            goldGradient.addColorStop(1, '#AA771C');
            
            // Outer dark blue boundary
            x.strokeStyle = "#1a4a7c"; x.lineWidth = 4; x.strokeRect(16, 16, 868, 618);
            
            // Thick Gold border
            x.strokeStyle = goldGradient; 
            x.lineWidth = 14; 
            x.strokeRect(24, 24, 852, 602);
            
            // Inner dark blue boundary
            x.strokeStyle = "#1a4a7c"; x.lineWidth = 2; x.strokeRect(36, 36, 828, 578);

            // Gold Corner ornaments
            const drawCorner = (cx, cy, angle) => {
                x.save(); x.translate(cx, cy); x.rotate(angle);
                x.strokeStyle = goldGradient; x.lineWidth = 3;
                x.beginPath(); x.moveTo(0, 0); x.lineTo(35, 0); x.moveTo(0, 0); x.lineTo(0, 35); x.stroke();
                x.restore();
            };
            drawCorner(36, 36, 0);
            drawCorner(864, 36, Math.PI / 2);
            drawCorner(864, 614, Math.PI);
            drawCorner(36, 614, -Math.PI / 2);

            // 4. Header
            x.fillStyle = "#1a4a7c";
            x.textAlign = "center";
            x.font = "bold 32px Georgia, serif";
            x.fillText("GLOBAL BREATH-LINK INITIATIVE", 450, 100);

            // Subtitle
            x.fillStyle = "#AA771C"; // Dark gold text
            x.font = "italic 18px Georgia, serif";
            x.fillText("Certificate of Competency", 450, 135);
            
            // Subtle horizontal divider
            x.strokeStyle = goldGradient; x.lineWidth = 1.5;
            x.beginPath(); x.moveTo(300, 150); x.lineTo(600, 150); x.stroke();

            // 5. Body text
            x.fillStyle = "#444";
            x.font = "18px Georgia, serif";
            x.fillText("This document certifies that", 450, 210);

            // Recipient name
            x.fillStyle = "#1a4a7c";
            x.font = "bold 52px Georgia, serif";
            x.fillText(fullName, 450, 280);
            
            // Name underline
            const nameWidth = x.measureText(fullName).width;
            x.strokeStyle = goldGradient; x.lineWidth = 2;
            x.beginPath(); x.moveTo(450 - nameWidth/2 - 20, 295); x.lineTo(450 + nameWidth/2 + 20, 295); x.stroke();

            // Achievement text
            x.fillStyle = "#444";
            x.font = "18px Georgia, serif";
            x.fillText("has successfully completed advanced pathological simulation", 450, 350);
            x.fillText("and diagnostic training for:", 450, 375);

            // Dynamic Pathology Type
            x.fillStyle = "#27ae60";
            x.font = "bold 42px Arial, sans-serif";
            x.fillText((currentType || 'RADON').toUpperCase() + " PATHOLOGY", 450, 435);

            // Footer info
            x.fillStyle = "#666";
            x.font = "14px Arial, sans-serif";
            x.fillText("Issued by the Global Breath-Link Initiative", 450, 485);
            x.fillText("Date: " + new Date().toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'}), 450, 505);

        // 6. SCANNABLE QR CODE
            // Moved to the bottom-right corner to make room for the larger logo
            x.drawImage(qrImg, 737, 498, 90, 90); 


            // 7. OFFICIAL LOGO
            // Moved to the bottom-left corner, 50% larger (128x128), vertically balanced
            x.drawImage(logoImg,  115, 450, 140, 140); 

            // Reset Transform to prevent scaling loops
            x.setTransform(1, 0, 0, 1, 0, 0);

            // 8. Trigger Download
            const link = document.createElement('a');
            link.download = 'BreathLink_Certificate_' + (currentType || 'radon') + '_' + firstName + '_' + lastName + '.png';
            link.href = c.toDataURL('image/png', 1.0);
            link.click();
        }
    };

    // Fire the rendering once images are ready
    logoImg.onload = finalizeCertificate;
    qrImg.onload = finalizeCertificate;
    
    // Fallback if images are missing
    logoImg.onerror = finalizeCertificate;
    qrImg.onerror = finalizeCertificate;
}