# **GENOMICS LAB MASTER — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION**

A **mobile-first**, **dark-mode**, **offline-ready** educational platform covering **Clinical Laboratory Genetics & Genomic Diagnostics** exactly as a **pathology resident** learns it during a **molecular pathology / cytogenetics / genomics rotation** or from core molecular pathology textbooks.

This app must teach:
- Molecular biology fundamentals  
- Cytogenetics (karyotype, FISH)  
- Chromosomal microarray (CMA)  
- Next-generation sequencing (NGS)  
- Variant interpretation (ACMG logic)  
- Inherited vs somatic variants  
- Quality metrics & assay validation  
- Lab workflow  
- Reporting fundamentals  
- Common test panels (hematologic, solid tumor, germline)  
- Pitfalls, artifacts, and limitations  

All examples are **synthetic**, **non-identifiable**, with **session-only quizzes**, **no tracking**, and **no clinical advice**.

---

# **MASTER PROMPT — Genomics Lab Master Educational App Generator (SPECIALIZED VERSION)**

## **0. ROLE & MISSION**

You are:
- PM  
- Staff Engineer  
- Senior Instructional Designer  
- Molecular Pathology SME  
- Cytogenetics SME  
- Bioinformatics SME  
- QA Engineer  
- UX Writer  

**Mission:**  
Build a complete laboratory genomics education environment for pathology residents, covering everything from **DNA/RNA basics** → **assay principles** → **variant analysis** → **clinical lab reporting**.

The app must be:
- Mobile-first  
- Dark-mode optimized  
- Fully offline-capable  
- Synthetic only  
- No saving scores or personal data  

---

# **1. INPUTS**

- **Primary Topics:** {{TOPICS}}  
  Default: molecular biology, cytogenetics, NGS workflows, bioinformatics basics, variant interpretation, QC metrics, assay validation, lab reporting.

- **Target Levels:** {{LEVELS}}  
  Default: PGY1–4 pathology residents, molecular pathology fellows.

- **Learning Context:** {{CONTEXT}}  
  Default: Molecular pathology rotation, cytogenetics rotation, boards prep, lab directorship foundations.

- **Objectives:** {{LEARNING_OBJECTIVES}}  
  Examples:  
  - Distinguish sequencing methods  
  - Interpret CNVs, SNVs, indels, fusions  
  - Understand coverage/QC metrics  
  - Apply ACMG variant classification (conceptual)  
  - Understand germline vs somatic testing  
  - Understand lab workflows and reporting structure  

- **Constraints:** {{CONSTRAINTS}}  
  Must include:  
  - Mobile-first, dark mode, offline-first  
  - Synthetic data only  
  - No tracking  
  - No clinical guidance  

- **References:** {{REFERENCES}}  
  Optional: ACMG/AMP framework (high-level), CAP molecular concepts.

- **Tone:** {{VOICE_TONE}}  
  Default: Clear, structured, high-yield, pattern-driven.

---

# **2. EXECUTIVE SUMMARY & NAME OPTIONS**

**Goal:**  
Give pathology trainees a mastery-level understanding of laboratory genetics & genomics, including molecular mechanisms, assay design, data interpretation, and genomic report construction.

**Name Options:**  
- **Genomics Lab Master** — “From DNA → Data → Diagnosis (conceptual).”  
- **MolecularDx Atlas** — “Assays, mutations, interpretation, reporting.”  
- **GenomeLogic Pro** — “Understand the lab science behind genomic medicine.”  

**Success Criteria:**  
- Learners can explain how major genomics assays work.  
- Trainees can interpret synthetic NGS results, CNVs, fusions.  
- Users understand ACMG logic conceptually.  
- Residents can read and construct conceptual genomic reports.  
- Learners understand assay limitations, QC, and lab workflow.

---

# **3. PERSONAS & USE CASES**

### PERSONAS
1. **PGY-2 Resident (First Molecular Rotation)**  
   Needs: NGS fundamentals, variant types, QC.  
   Pain: Overwhelmed by terminology and workflows.

2. **PGY-4 Senior Resident**  
   Needs: Variant interpretation, assay validation, reporting.  
   Pain: Integrating cytogenetics + molecular + NGS.

3. **Molecular Path Fellow**  
   Needs: High-level conceptual frameworks.  
   Pain: Advanced bioinformatics and difficult variant calls.

### USE CASES
- “How does NGS actually work?”  
- “What does depth of coverage mean?”  
- “How do I interpret a VUS?”  
- “Is this CNV real or an artifact?”  
- “What is a fusion and how do we detect it?”  
- “What is a molecular tumor board summary?”  
- “How do I write a conceptual genomic report?”  

---

# **4. CURRICULUM MAP & KNOWLEDGE GRAPH**

## MODULE A — Molecular Biology Foundations
- DNA, RNA, and protein basics  
- Exons, introns, splice sites (schematic)  
- Mutation types: SNV, indel, CNV, fusion, LOH  
- Somatic vs germline  

---

## MODULE B — Assay Principles (Foundational)
- PCR & qPCR  
- Sanger sequencing  
- FISH: probes, signal patterns (schematic only)  
- Chromosomal microarray (CMA)  
- MLPA (conceptual)  
- NGS:
  - Library prep  
  - Target capture  
  - Amplification  
  - Sequencing by synthesis (conceptual)  
  - Paired-end logic  

---

## MODULE C — Cytogenetics Essentials
- Karyotype reading (iconic 46,XY/abnormal patterns)  
- Structural abnormalities:
  - Translocations  
  - Deletions  
  - Duplications  
  - Inversions  
- Balanced vs unbalanced  
- FISH patterns (schematic dots/lines only)  

---

## MODULE D — Microarray & Copy Number
- SNP vs CGH array  
- Log2 ratio & B-allele frequency (iconic graphs only)  
- CNV detection logic  
- UPD concept (high-level)  
- Common pathogenic CNVs (synthetic examples)  

---

## MODULE E — NGS Pipeline Overview
- Wet lab:
  - Fragmentation  
  - Adapter ligation  
  - Amplification  
- Sequencing instrument (concept-only icons)  
- Bioinformatics:
  - FASTQ → BAM → VCF (simple pipeline)  
  - Alignment  
  - Variant calling  
  - Filtering, deduplication  
- QC metrics:
  - Coverage  
  - Read quality  
  - Depth vs breadth  

---

## MODULE F — Variant Interpretation (ACMG Logic)
- 5-tier classification (pathogenic → benign)  
- Evidence types:  
  - Population frequency  
  - Computational predictions  
  - Functional data  
  - Segregation  
  - De novo occurrence  
- Somatic vs germline classification logic  
- VUS concepts  
- Actionable vs non-actionable (no treatment recs)  

---

## MODULE G — Tumor Genomics (Somatic Testing)
- SNVs, indels, CNVs in tumors  
- Oncogenes vs tumor suppressors  
- Fusions & rearrangements  
- MSI & MMR deficiency (conceptual)  
- Clonal hematopoiesis (CH) pitfalls  
- Tumor purity & variant allele fraction (VAF)  

---

## MODULE H — Constitutional (Germline) Genomics
- Inherited disorders  
- Carrier testing logic (concept only)  
- Trio testing (child + parents)  
- Mitochondrial variants  
- Prenatal testing basics (NIPT conceptual, no clinical advice)  

---

## MODULE I — QA/QC & Validation in Genomics
- Accuracy  
- Precision  
- Analytical sensitivity/specificity  
- Limit of detection  
- Assay validation components  
- Proficiency testing  
- Internal controls  
- Contamination & index hopping concepts  

---

## MODULE J — Reporting & Lab Operations
- Anatomy of a molecular/genomic report  
- Variant table  
- Interpretation summary  
- Limitations section  
- How to explain uncertainty  
- Lab workflow: accession → extraction → sequencing → reporting  
- LIS integration (conceptual)  

---

## MODULE K — Integrated Genomic Cases
- Somatic tumor panel cases  
- Germline suspected hereditary cases  
- Microarray CNV interpretation  
- FISH pattern interpretation  
- Synthetic VCF-based variant reasoning  
- Combined karyotype + NGS + CMA cases  

---

# **5. INTERACTIVE MODELS**

| Interactive | Purpose | Inputs | Outputs | Visuals | Guardrails |
|------------|---------|--------|----------|---------|-----------|
| Variant Type Classifier | Identify SNV/indel/CNV/fusion | Sequence change | Variant category | DNA icons | Educational only |
| NGS Pipeline Navigator | Understand workflow | Step selection | Pipeline map | Flowchart | Conceptual |
| Coverage Analyzer | Interpret QC | Depth values | “Adequate?” or “Low coverage zone” | Bar graph | No clinical action |
| CNV Explorer | Interpret log2/B-allele | Synthetic CMA plot | CNV type | Array schematic | Synthetic |
| FISH Pattern Simulator | Recognize basic rearrangements | Dot diagrams | Pattern interpretation | Iconic FISH | Non-diagnostic |
| Karyotype Builder | Create/review synthetic karyotypes | Structural changes | Final karyotype | Ideogram icons | Educational |
| ACMG Evidence Scorer | Apply classification concepts | Variant evidence set | Suggested tier | Tile-based UI | No clinical advice |
| Tumor VAF Interpreter | Understand variant allele fraction | VAF values | Possible clonal/heterogeneous pattern | Bar charts | Conceptual |
| Integrated Case Report Builder | Build conceptual report | Findings | Synthetic report | Text template | Not for clinical use |

---

# **6. ASSESSMENT & MASTERY (Session-Only)**

Question types:
- MCQs  
- Variant classification  
- Coverage/QC interpretation  
- CNV calling  
- FISH/karyotype pattern recognition  
- NGS pipeline  
- Tumor vs germline variant logic  
- Integrated cases  

Quiz ending:  
- “You answered X/Y correctly this session.”  
- No storage of results.  

---

# **7. GENOMICS REASONING FRAMEWORK**

1. **Identify variant type** (SNV/indel/CNV/fusion)  
2. **Assess QC first**  
3. **Evaluate frequency & population data**  
4. **Check gene function (oncogene vs TSG)**  
5. **Review computational & functional predictions**  
6. **Consider inheritance model** (germline) or  
7. **Consider tumor purity + VAF patterns** (somatic)  
8. **Assign conceptual classification tier**  
9. **Summarize limitations & uncertainties**  

Pitfalls:
- Misreading low VAF due to low purity  
- Overcalling benign polymorphisms  
- Confusing somatic vs germline context  
- Misinterpreting array noise as CNV  
- Misreading FISH signals  
- Underestimating contamination & index hopping  

---

# **8. ACCESSIBILITY, EQUITY, SAFETY**

- WCAG 2.2 AA  
- Icons instead of real genomic screenshots  
- Neutral, inclusive case names  
- Synthetic variants only  
- Clear disclaimers:  
  “Educational only. Not for clinical, diagnostic, or therapeutic use.”

---

# **9. TECH ARCHITECTURE**

Stack:
- React + TypeScript  
- Tailwind + shadcn/ui  
- Zustand (session-only)  
- Service Worker for offline use  

Routes:
- `/foundations`  
- `/assays`  
- `/cytogenetics`  
- `/microarray`  
- `/ngs`  
- `/interpretation`  
- `/somatic`  
- `/germline`  
- `/validation`  
- `/reporting`  
- `/cases`  
- `/assessment`  
- `/settings`

Settings ONLY:
- Dark/light toggle  
- About  
- Disclaimer

---

# **10. DATA SCHEMAS**

### Variant Entry Schema

{
"id": "var_001",
"change": "c.123A>T (p.Lys41*)",
"type": "nonsense",
"qc": {"depth": 500, "vaf": 0.48},
"interpretation": "Likely pathogenic (conceptual)"
}


### CNV Schema


{
"id": "cnv_4",
"region": "chr7q11.2",
"log2_ratio": -0.6,
"baf_pattern": "shifted",
"interpretation": "Synthetic deletion"
}


### Integrated Case Schema


{
"id": "genomic_case_12",
"karyotype": "46,XY,t(9;22)(q34;q11.2)",
"fusion": "BCR-ABL1 (synthetic)",
"ngs": [{"gene": "ABL1", "vaf": 0.47}],
"question": "Which category best fits this?",
"options": ["Somatic fusion", "Germline variant", "Benign polymorphism"],
"correct": "Somatic fusion"
}


---

# **11. SCREEN INVENTORY & WIREFRAMES**

### HOME  
Modules: Foundations • Assays • Cytogenetics • Microarray • NGS • Interpretation • Somatic • Germline • Validation • Reporting • Cases • Assessment • Settings

### MODULE OVERVIEW  
- Summary  
- Subsection list  
- Quick quiz

### LESSON PAGE  
- Variant diagrams  
- NGS pipeline schematics  
- FISH dot icons  
- CMA plots (synthetic)  

### CASE ENGINE  
- Variant → QC → Interpretation reasoning  
- Karyotype + CMA + NGS integrated cases  
- Immediate feedback  

### ASSESSMENT  
- MCQ + scenario-based reasoning  
- Session-only  

### SETTINGS  
- Dark/light  
- About  
- Disclaimer  

---

# **12. COPY & CONTENT KIT**

Examples:
- “Coverage is king—interpret variants only after QC checks.”  
- “VAF around 50% may represent heterozygous germline or clonal somatic—context matters.”  
- “Fusions create novel junctions—detected via targeted RNA or DNA assays.”  
- “CMA cannot detect balanced translocations.”  
- “ACMG criteria provide a structured conceptual approach to variant classification.”

Glossary:
- SNV, indel, CNV, fusion, VAF, LOH, BAF, coverage, FASTQ/BAM/VCF, pathogenicity tiers, etc.

---

# **13. CREATOR-SIDE A/B TESTING**
(Not in-app tracking)

- Compare flowchart vs tile-based ACMG classification instruction  
- Evaluate user understanding of VAF patterns  
- Test clarity of CMA graphics  

---

# **14. QA CHECKLIST**
- Variant interpretation logic accurate (conceptual)  
- Cytogenetic diagrams correct  
- NGS pipeline accurate  
- Array CNV models correct  
- No PHI or clinically actionable guidance  
- Offline and dark-mode functionality validated  

---

# **15. ROADMAP**
- M0: Foundations + Assays  
- M1: Cytogenetics + Array  
- M2: NGS + Interpretation  
- M3: Somatic + Germline modules  
- M4: Validation + Reporting  
- M5: Case Bank (100+ synthetic cases)

---

# **ACCEPTANCE CRITERIA**
- Covers full lab genetics/genomics curriculum for pathology residents  
- No real data, entirely synthetic visualizations  
- Mobile-first, dark-mode, offline-capable  
- Zero data tracking  
- Clear, structured, high-yield content  

---

## **NOW GENERATE**
Using this blueprint, generate the full **Genomics Lab Master** educational app deliverables according to the specified Output Format and constraints.  
