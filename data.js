// ============================================
// data.js — All pathology simulation data
// ============================================

const pathologyData = {
    radon: {
        speed: 7, color: "rgba(180, 100, 255, 0.8)", stain: "#2b1042",
        heading: "Radon: Alpha Decay Inhalation",
        info: "Radon gas decays into heavy metallic 'radon daughters' that lodge in the bronchi. These emit high-energy, high-LET alpha particles directly into cell nuclei.",
        mech: "Ionizing alpha particles physically strip electrons from DNA, causing complex double-strand DNA breaks in basal cells of the bronchial epithelium.",
        prog: "Risk of Small-Cell Lung Carcinoma (SCLC), which doubles every 10 years of chronic exposure.",
        quiz: [
            {q: "What radioactive decay gas is color/odorless?", a: "Radon", o: ["Ozone", "Radon", "Carbon Monoxide"], hint: "💡 Think about the gas that comes from the natural decay of uranium in soil — it has no smell or color."},
            {q: "Radon gas decays into what particles?", a: "Radon daughters", o: ["Oxygen", "Radon daughters", "Lead"], hint: "💡 When radon decays, it produces heavy metallic byproducts nicknamed after the parent gas."},
            {q: "What kind of radiation is emitted?", a: "Alpha", o: ["Alpha", "Beta", "Gamma"], hint: "💡 This is the heaviest, slowest type of radiation — it can be stopped by a sheet of paper but is very dangerous inside the body."},
            {q: "Is alpha radiation considered low or high LET?", a: "High LET", o: ["Low LET", "High LET", "Neither"], hint: "💡 LET = Linear Energy Transfer. Alpha particles deposit a LOT of energy in a very short distance."},
            {q: "Where do decay particles lodge?", a: "Bronchi", o: ["Alveoli sacs", "Bronchi", "Trachea"], hint: "💡 Think about the branching airways — not the very end sacs, and not the main windpipe."},
            {q: "Which specific cell layer is targeted?", a: "Basal cells", o: ["Epithelial surface", "Basal cells", "Red cells"], hint: "💡 These are the deepest stem cells of the airway lining — the 'base' layer."},
            {q: "How does the radiation impact DNA?", a: "Double-strand breaks", o: ["Single-strand only", "Double-strand breaks", "Strengthens it"], hint: "💡 Alpha particles are so energetic they break BOTH sides of the DNA ladder simultaneously."},
            {q: "What cancer is the long-term risk?", a: "SCLC", o: ["SCLC", "Mesothelioma", "Benign polyps"], hint: "💡 The abbreviation stands for Small-Cell Lung Carcinoma — a fast-growing cancer linked to radon."},
            {q: "What leads to point mutations?", a: "Complex DNA breaks", o: ["Infection", "Complex DNA breaks", "Poor diet"], hint: "💡 When DNA is physically shattered in complex ways, imperfect repair leads to permanent mutations."},
            {q: "Does risk increase with time?", a: "Yes, it doubles", o: ["Yes, it doubles", "No change", "It decreases"], hint: "💡 Cumulative radiation damage is additive — the longer the exposure, the worse the odds."}
        ]
    },
    cookfire: {
        speed: 1.8, color: "rgba(50, 50, 50, 0.9)", stain: "#080808",
        heading: "Biomass Smoke: PM 2.5 Particulates",
        info: "Burning wood/waste releases microscopic soot that bypasses mucus defenses, physically clogging the alveoli and overloading immune cells.",
        mech: "Persistent Alveolar Macrophage Overload leads to pro-inflammatory cytokine cascades and a permanent state of oxidative stress in deep lung tissue.",
        prog: "Development of 'Grinders Disease' (Severe COPD), with parenchymal remodeling and pulmonary hypertension.",
        quiz: [
            {q: "What is the common term for PM 2.5?", a: "Soot", o: ["Steam", "Soot", "Fresh Air"], hint: "💡 It's the black powdery residue left over from incomplete combustion — you see it on chimneys."},
            {q: "Which air sacs get physically clogged?", a: "Alveoli", o: ["Alveoli", "Trachea", "Bronchi"], hint: "💡 These are the tiny balloon-like sacs at the very end of your airways where oxygen exchange happens."},
            {q: "Which immune cell is overloaded?", a: "Macrophages", o: ["T-cells", "Macrophages", "Red cells"], hint: "💡 These are the 'pac-man' cells of the immune system — they eat debris. Too much soot overwhelms them."},
            {q: "Cytokine cascades lead to what?", a: "Pro-inflammatory response", o: ["Antibody production", "Pro-inflammatory response", "Muscle healing"], hint: "💡 Cytokines are chemical messengers — when overactivated they trigger chronic inflammation, not healing."},
            {q: "Is soot larger or smaller than dust?", a: "Smaller (PM 2.5)", o: ["Smaller (PM 2.5)", "Larger", "Same size"], hint: "💡 PM 2.5 means 2.5 micrometers — far smaller than a human hair and invisible to the naked eye."},
            {q: "Can mucus defenses stop soot?", a: "No, soot bypasses it", o: ["Yes", "No, soot bypasses it", "Only wood smoke"], hint: "💡 Mucus traps larger particles, but PM 2.5 is so tiny it slips straight past into the deep lung."},
            {q: "What vascular issue results from hypoxia?", a: "Pulmonary Hypertension", o: ["Low blood pressure", "Pulmonary Hypertension", "Better blood flow"], hint: "💡 When lungs can't get oxygen, blood vessels constrict — this raises pressure in the pulmonary circuit."},
            {q: "Parenchymal remodeling means what?", a: "Permanent tissue change", o: ["Temporary change", "Permanent tissue change", "Muscle growth"], hint: "💡 Parenchyma is the functional tissue of the lung — 'remodeling' means it has been permanently scarred."},
            {q: "What fuel source is mentioned?", a: "Biomass/Wood", o: ["Biomass/Wood", "Natural Gas", "Solar"], hint: "💡 Think developing-world cooking fires — organic material like wood, dung, or crop waste."},
            {q: "What is the prognosis disease nickname?", a: "Grinders Disease", o: ["Grinders Disease", "Soot Cough", "Wood Flu"], hint: "💡 It's a colloquial name for severe COPD from chronic dust/soot inhalation — think industrial workers."}
        ]
    },
    genetics: {
        speed: 1.2, color: "rgba(255, 150, 150, 0.5)", stain: "#5e2a2a",
        heading: "Genetic: AAT Deficiency",
        info: "A genetic error where the liver doesn't make Alpha-1 Antitrypsin, the body's 'stopper' for a powerful lung-cleaning enzyme.",
        mech: "Protease-antiprotease imbalance. Inhaled Neutrophil Elastase 'digests' its own healthy structural fibers (elastin) in the lung walls.",
        prog: "Panacinar Emphysema, usually in the lower lobes, leading to progressive dyspnea (shortness of breath).",
        quiz: [
            {q: "What protein is deficient?", a: "AAT", o: ["Insulin", "AAT", "Glutathione"], hint: "💡 The abbreviation stands for Alpha-1 Antitrypsin — a protective protein the liver fails to produce enough of."},
            {q: "Where is AAT produced?", a: "Liver", o: ["Lungs", "Liver", "Heart"], hint: "💡 Most plasma proteins are made by this large organ in your abdomen — not in the lungs themselves."},
            {q: "AAT inhibits which enzyme?", a: "Neutrophil Elastase", o: ["Lactase", "Neutrophil Elastase", "Amylase"], hint: "💡 This enzyme is released by white blood cells to break down bacteria — but without AAT it attacks your own lung tissue."},
            {q: "What fibers are digested?", a: "Elastin", o: ["Muscle", "Elastin", "Collagin"], hint: "💡 These are the stretchy structural fibers that allow your lungs to expand and recoil — like rubber bands."},
            {q: "This creates a ________-antiprotease imbalance.", a: "Protease", o: ["Protease", "Antibiotic", "Protein"], hint: "💡 The enzyme doing the damage is a protease — without its 'anti' blocker, it runs unchecked."},
            {q: "Which part of the lung is hit first?", a: "Lower lobes", o: ["Upper lobes", "Lower lobes", "Trachea"], hint: "💡 Gravity pulls inhaled particles and enzymatic activity to the base of the lung first."},
            {q: "Emphysema is obstructive or restrictive?", a: "Obstructive", o: ["Restrictive", "Obstructive", "Both"], hint: "💡 The airways collapse and trap air — air gets IN but can't fully get OUT. That's obstruction."},
            {q: "Smoke exposure accelerates this condition by?", a: "500%", o: ["10%", "50%", "500%"], hint: "💡 Smoking dramatically increases neutrophil activity, massively multiplying the elastase damage — a 5x increase."},
            {q: "What is 'dyspnea'?", a: "Shortness of breath", o: ["Fast heartbeat", "Shortness of breath", "Headache"], hint: "💡 Dys = difficulty, pnea = breathing. The hallmark symptom of advanced lung disease."},
            {q: "Is AAT deficiency genetic or viral?", a: "Genetic", o: ["Genetic", "Viral", "Bacterial"], hint: "💡 You are born with this — it's inherited from your parents through a faulty gene, not caught from anyone."}
        ]
    },
    radiation: {
        speed: 8, color: "rgba(80, 255, 80, 0.7)", stain: "#1a3d1a",
        heading: "Ionizing Radiation: Fibrotic Trigger",
        info: "High-energy external rays cause radiolytic decomposition of cellular water, creating a 'flood' of free radicals that scar lung tissue.",
        mech: "Cytokine-mediated inflammatory cascade leading to fibroblast proliferation, making the lung stiff and unable to expand.",
        prog: "Restrictive Lung Fibrosis, resulting in a permanent reduction in Total Lung Capacity (TLC).",
        quiz: [
            {q: "What causes radiolytic damage?", a: "High-energy rays", o: ["Chemicals", "High-energy rays", "Heat"], hint: "💡 Radio = radiation, lytic = breaking apart. X-rays or gamma rays carry enough energy to split molecules."},
            {q: "Cellular ______ is decomposed.", a: "Water", o: ["Water", "Salt", "Fat"], hint: "💡 Your cells are ~70% this molecule — radiation splits it into dangerous reactive fragments."},
            {q: "What particles cause the scarring?", a: "Free radicals", o: ["Oxygen", "Free radicals", "Bacteria"], hint: "💡 These are unstable molecules with unpaired electrons — they attack nearby cells to steal electrons, causing chain damage."},
            {q: "This creates a stiff, ________ lung.", a: "Restrictive", o: ["Restrictive", "Obstructive", "Smaller"], hint: "💡 The lung is restricted from expanding fully because scar tissue replaces flexible lung tissue."},
            {q: "Can restrictive damage be reversed?", a: "No", o: ["Yes", "No", "Sometimes"], hint: "💡 Scar tissue (fibrosis) is permanent — the body cannot dissolve or replace it with healthy lung tissue."},
            {q: "What cascades make the lung stiff?", a: "Cytokine-mediated", o: ["Blood-sugar", "Cytokine-mediated", "Nerve-based"], hint: "💡 Cytokines are inflammatory signaling proteins — a cascade of them triggers the scar-forming process."},
            {q: "What happens to TLC?", a: "Reduced", o: ["Increased", "Reduced", "No change"], hint: "💡 TLC = Total Lung Capacity. Stiff scarred lungs simply cannot hold as much air as healthy ones."},
            {q: "Are the lungs able to expand well?", a: "No, they are stiff", o: ["Yes", "No, they are stiff", "Better than usual"], hint: "💡 Fibrosis means the lung loses its elasticity — breathing in becomes a physical effort against stiff walls."},
            {q: "This triggers which specific cell type?", a: "Fibroblasts", o: ["Neurons", "Fibroblasts", "Red cells"], hint: "💡 These are the cells that produce collagen and scar tissue — 'fibro' = fiber, 'blast' = builder."},
            {q: "This is primarily an ________ damage source.", a: "External", o: ["External", "Internal", "Genetic"], hint: "💡 Radiation therapy or environmental exposure comes from outside the body — unlike radon which is inhaled internally."}
        ]
    },
    alcohol: {
        speed: 1.1, color: "rgba(150, 180, 255, 0.5)", stain: "#4d3838",
        heading: "Alcohol: Ciliary Dysmotility",
        info: "Ethanol exposure paralyzes the 'brushes' of the lung (cilia), preventing the removal of environmental toxins and pathogens.",
        mech: "Ethanol causes desensitization of dynein arms in cilia, leading to mucus stasis (stopping), and bacterial colonization.",
        prog: "Frequent bacterial pneumonia and lung abscesses (pus pockets); weakened local immunity.",
        quiz: [
            {q: "What is ethanol?", a: "Alcohol", o: ["Alcohol", "Virus", "Chemical"], hint: "💡 Ethanol is the scientific name for the active intoxicating substance found in beer, wine, and spirits."},
            {q: "What brushes are paralyzed?", a: "Cilia", o: ["Hair", "Cilia", "Nails"], hint: "💡 These are the tiny hair-like structures lining your airways — they beat rhythmically to sweep mucus out."},
            {q: "What does 'dysmotility' mean?", a: "Improper movement", o: ["No movement", "Improper movement", "Fast movement"], hint: "💡 Dys = impaired/abnormal, motility = movement. The cilia still move, but poorly and ineffectively."},
            {q: "Ethanol desensitizes which arms?", a: "Dynein", o: ["Mitotic", "Dynein", "Muscle"], hint: "💡 Dynein arms are the molecular motors inside cilia that power their beating motion — alcohol disables them."},
            {q: "What does 'stasis' mean?", a: "Stopped", o: ["Fast", "Stopped", "Repairing"], hint: "💡 Think 'static' — stasis means a complete halt in movement or flow. Mucus stops moving out."},
            {q: "Stagnant mucus causes colonization of?", a: "Bacteria", o: ["Oxygen", "Bacteria", "Fat"], hint: "💡 Trapped, warm, moist mucus is a perfect breeding ground for pathogens that normally get swept out."},
            {q: "Local lung _______ is weakened.", a: "Immunity", o: ["Muscle", "Immunity", "Vision"], hint: "💡 When cilia can't clear debris and alcohol suppresses immune cells, the lung's defense system fails."},
            {q: "Is pneumonia a prognosis risk?", a: "Yes", o: ["Yes", "No", "Only for kids"], hint: "💡 Chronic alcohol users have much higher rates of bacterial pneumonia — stagnant mucus is the main reason."},
            {q: "What is a lung abscess?", a: "A pus pocket", o: ["A water pocket", "A pus pocket", "A clean spot"], hint: "💡 When bacteria colonize and the immune system walls them off, pus accumulates in a sealed cavity."},
            {q: "Does alcohol clear toxins?", a: "No, it prevents clearance", o: ["Yes", "No, it prevents clearance", "Only red wine"], hint: "💡 By paralyzing cilia, alcohol does the opposite — toxins and pathogens stay trapped in the lungs."}
        ]
    },
    air: {
        speed: 3.8, color: "rgba(140, 130, 100, 0.8)", stain: "#2e2e1e",
        heading: "Urban Pollution: Chemical Scald",
        info: "Ground-level Ozone (O3) and NO2 physically 'scald' the lung epithelium, creating a chronic, chemically reactive surface.",
        mech: "Lipid peroxidation of alveolar membranes and epithelial cell death, making the airways hyper-reactive to everything.",
        prog: "Chronic Bronchitis and RADS (Reactive Airways Dysfunction Syndrome). Common in high-traffic areas.",
        quiz: [
            {q: "What does pollution do to epithelium?", a: "Chemical scald", o: ["Freezes it", "Chemical scald", "Moisturizes it"], hint: "💡 Reactive gases like ozone are so oxidizing they essentially 'burn' the delicate surface cells of your airways."},
            {q: "What gas is O3?", a: "Ozone", o: ["Oxygen", "Ozone", "Nitrogen"], hint: "💡 Regular oxygen is O2 — add one more oxygen atom and you get this reactive, unstable molecule."},
            {q: "Where is Ozone described as 'ground-level'?", a: "Urban zones", o: ["The moon", "Urban zones", "Forests"], hint: "💡 Ozone high up in the stratosphere is protective — but at street level in cities it's a pollutant formed by car exhaust + sunlight."},
            {q: "What is lipid peroxidation?", a: "Membrane damage", o: ["Fat growth", "Membrane damage", "Water gain"], hint: "💡 Cell membranes are made of lipids (fats) — oxidants attack them and cause a chain reaction of damage."},
            {q: "Does this cause hyper-reactive airways?", a: "Yes", o: ["Yes", "No", "Sometimes"], hint: "💡 Once the airway surface is chemically damaged, it over-responds to even minor irritants like cold air or dust."},
            {q: "What cells die widespread?", a: "Epithelial", o: ["Muscle", "Epithelial", "Blood"], hint: "💡 The epithelium is the cell lining of your airways — it's the first and main target of inhaled pollutants."},
            {q: "Smog is described as photochemically what?", a: "Reactive", o: ["Nuclear", "Reactive", "Biological"], hint: "💡 Photo = sunlight, chemical = reaction. Sunlight acts on car exhaust gases to form highly reactive smog."},
            {q: "What is RADS?", a: "Airway Dysfunction Syndrome", o: ["Air Delivery System", "Airway Dysfunction Syndrome", "Air Danger Sign"], hint: "💡 RADS = Reactive Airways Dysfunction Syndrome — a persistent asthma-like condition triggered by a single high-level chemical exposure."},
            {q: "Chronic bronchitis is obstructive?", a: "Yes", o: ["Yes", "No", "Both"], hint: "💡 Chronic bronchitis is part of COPD — thickened, inflamed airways narrow the space for airflow, causing obstruction."},
            {q: "NO2 and Ozone: are they described as good?", a: "No", o: ["Yes", "No", "Only in forests"], hint: "💡 At ground level, both are toxic oxidants produced by combustion — they are definitely harmful, not beneficial."}
        ]
    },
    diet: {
        speed: 1.3, color: "rgba(255, 160, 0, 0.5)", stain: "#45382d",
        heading: "Diet: Nutritional Weakness",
        info: "Low intake of Vitamin A, C, and E leaves the vital surfactant layer (the lung's soap) without a chemical 'shield' against air toxins.",
        mech: "Insufficient glutathione and alpha-tocopherol levels to quench inhaled oxidants, accelerating lipid peroxidation and cell aging.",
        prog: "Accelerated lung aging and massive sensitivity to all other environmental triggers.",
        quiz: [
            {q: "Which vitamins make the shield?", a: "A, C, E", o: ["B, D", "A, C, E", "Calcium"], hint: "💡 These three are the key antioxidant vitamins — found in carrots, citrus, and nuts/oils respectively."},
            {q: "What is the primary supportive layer?", a: "Surfactant layer", o: ["Outer skin", "Surfactant layer", "Muscle layer"], hint: "💡 This soapy lipid-protein coating lines the alveoli, reducing surface tension and keeping air sacs from collapsing."},
            {q: "Does low Vit A increase weakness?", a: "Yes", o: ["Yes", "No", "Maybe"], hint: "💡 Vitamin A is critical for maintaining healthy epithelial cells — without it, airway linings deteriorate."},
            {q: "Surfactant acts as a chemical ________.", a: "Shield", o: ["Water", "Shield", "Toxin"], hint: "💡 When reinforced by antioxidant vitamins, this layer neutralizes inhaled oxidants before they can damage cells."},
            {q: "Low diet means insufficient what?", a: "Glutathione", o: ["Sugar", "Glutathione", "Fat"], hint: "💡 Often called the body's 'master antioxidant' — it directly neutralizes free radicals inside cells."},
            {q: "Prognosis includes accelerated cell?", a: "Aging", o: ["Healing", "Aging", "Growth"], hint: "💡 Without antioxidant protection, oxidative stress accumulates and cells age faster than they should."},
            {q: "Poor diet increases massive what?", a: "Sensitivity to other triggers", o: ["Muscle strength", "Sensitivity to other triggers", "Airflow"], hint: "💡 A nutritionally deficient lung has no buffer — radon, smoke, or pollution all hit much harder."},
            {q: "The body cannot quench inhaled what?", a: "Oxidants", o: ["Oxygen", "Oxidants", "Vitamins"], hint: "💡 Oxidants are reactive molecules from pollution, smoke, etc. — antioxidants from food neutralize them."},
            {q: "The surfactant layer is the lung's ________.", a: "Soap/shield", o: ["Stomach", "Soap/shield", "Filter"], hint: "💡 Like dish soap cutting through grease, surfactant reduces surface tension and provides a chemical barrier."},
            {q: "Lifestyle and nutrition: supportive or primary?", a: "Supportive", o: ["Supportive", "Primary", "Irrelevant"], hint: "💡 Diet alone rarely causes lung disease — but it amplifies or reduces the impact of every other risk factor."}
        ]
    },
    carcinogens: {
        speed: 3.2, color: "rgba(0, 0, 0, 1)", stain: "#000000",
        heading: "Carcinogens: Chromosome Interference",
        info: "Industrial carcinogens like Asbestos (fibers) physically pierce cells, causing point mutations and direct translocation of DNA.",
        mech: "Physical interference with mitotic spindles during cell division leads to irreversible chromosome damage and abnormal cell growth.",
        prog: "Malignant Mesothelioma; symptoms typically manifest 20-40 years after original exposure.",
        quiz: [
            {q: "Carcinogens: biological or industrial?", a: "Industrial", o: ["Industrial", "Biological", "Bacterial"], hint: "💡 These are man-made substances from factories, mines, and construction sites — not viruses or bacteria."},
            {q: "What toxin is a fiber?", a: "Asbestos", o: ["Asbestos", "Sugar", "Arsenic"], hint: "💡 This naturally occurring mineral was widely used in insulation — its needle-like fibers are the danger."},
            {q: "How do fibers damage cells?", a: "Physically pierce them", o: ["Freeze them", "Physically pierce them", "Dissolve them"], hint: "💡 Asbestos fibers are sharp and rigid — they literally stab through cell membranes like tiny needles."},
            {q: "What does DNA translocation mean?", a: "Abnormal DNA damage", o: ["DNA repair", "Abnormal DNA damage", "DNA copier"], hint: "💡 Translocation = sections of chromosomes break off and reattach in wrong places, causing cancer-triggering errors."},
            {q: "It interferes with what process?", a: "Cell division", o: ["Cell division", "Breathing", "Eating"], hint: "💡 Fibers tangle in the mitotic spindle — the machinery cells use to pull chromosomes apart during division."},
            {q: "Point mutations are reversible?", a: "No", o: ["Yes", "No", "Sometimes"], hint: "💡 Once a base pair in DNA is permanently changed, that mutation stays in every daughter cell produced from it."},
            {q: "Asbestos cancer: Mesothelioma?", a: "Yes", o: ["Yes", "No", "Flu"], hint: "💡 Mesothelioma is the signature cancer of asbestos exposure — it affects the lining of the lungs, not the lung itself."},
            {q: "What are mitotic spindles?", a: "Cell dividers", o: ["Lung muscles", "Cell dividers", "Nerves"], hint: "💡 These protein fibers form during cell division to pull chromosome copies to opposite ends of the dividing cell."},
            {q: "Symptom delay is how long?", a: "20-40 years", o: ["1 day", "20-40 years", "Next year"], hint: "💡 Mesothelioma has one of the longest latency periods of any cancer — workers exposed in the 1970s got sick in the 2000s."},
            {q: "Chronic irritation leads to normal or abnormal growth?", a: "Abnormal", o: ["Normal", "Abnormal", "Muscle"], hint: "💡 Repeated physical damage and inflammation disrupts normal cell-cycle controls, triggering uncontrolled growth."}
        ]
    }
};