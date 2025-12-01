# Genomics Lab Master

A comprehensive mobile-first educational platform for Clinical Laboratory Genetics & Genomic Diagnostics.

## Overview

**Genomics Lab Master** is an educational application designed for pathology residents and molecular pathology fellows learning clinical laboratory genetics and genomic diagnostics. The app covers the full spectrum from molecular biology fundamentals to advanced variant interpretation, quality control, and laboratory reporting.

## Features

### 11 Comprehensive Modules

1. **Molecular Biology Foundations** - DNA, RNA, protein basics, mutation types, somatic vs germline
2. **Assay Principles** - PCR, Sanger, FISH, CMA, MLPA, NGS library prep & sequencing
3. **Cytogenetics Essentials** - Karyotype reading, structural abnormalities, FISH patterns
4. **Microarray & Copy Number** - SNP vs CGH arrays, CNV detection, log2 ratio interpretation
5. **NGS Pipeline Overview** - Wet lab workflow, bioinformatics pipeline, QC metrics
6. **Variant Interpretation** - ACMG/AMP classification, evidence types, VUS concepts
7. **Tumor Genomics** - Somatic testing, oncogenes, fusions, MSI, VAF interpretation
8. **Constitutional Genomics** - Inherited disorders, carrier testing, trio testing
9. **QA/QC & Validation** - Accuracy, precision, analytical metrics, proficiency testing
10. **Reporting & Lab Operations** - Report anatomy, variant tables, lab workflow
11. **Integrated Genomic Cases** - Comprehensive case-based learning scenarios

### Educational Features

- **Session-Only Assessments** - 15 interactive quiz questions across all modules (no score tracking)
- **Dark Mode Support** - Easy on the eyes for extended study sessions
- **Offline Capable** - Progressive Web App (PWA) works without internet connection
- **Mobile-First Design** - Optimized for phones, tablets, and desktops
- **No Data Tracking** - Complete privacy, no personal data collection

### Settings

- **Theme Toggle** - Switch between light and dark modes
- **About Section** - Learn about the app and its features
- **Disclaimers** - Important educational use notices

## Technology Stack

- **React** + **TypeScript** - Type-safe component development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling with dark mode
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management
- **PWA Support** - Offline capability via service worker

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Knowledgesynthesis/GENOMICS-LAB-MASTER.git
cd GENOMICS-LAB-MASTER
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

Build the app for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/          # Reusable React components
│   │   └── Layout.tsx       # Main layout with navigation
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Landing page with module grid
│   │   ├── Assessment.tsx   # Interactive quiz page
│   │   ├── Settings.tsx     # Settings and disclaimers
│   │   └── modules/         # 11 educational module pages
│   ├── store/               # State management
│   │   └── themeStore.ts    # Theme state (Zustand)
│   ├── lib/                 # Utility functions
│   │   └── utils.ts         # Helper functions
│   ├── App.tsx              # Root component with routing
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## Educational Content

All content is:
- **Synthetic** - No real patient data
- **Educational only** - Not for clinical use
- **Evidence-based** - Aligned with ACMG/AMP guidelines (conceptual)
- **Comprehensive** - Covers rotation-level topics for pathology residents

## Important Disclaimers

### Educational Use Only
This application is designed exclusively for educational purposes. It is NOT intended for clinical, diagnostic, or therapeutic use. Do not use this application to make clinical decisions or provide patient care.

### Synthetic Data
All examples, cases, and data presented in this application are entirely synthetic and non-identifiable. They do not represent real patients or clinical scenarios.

### No Data Tracking
This application does not track, store, or transmit any personal data, assessment scores, or usage information. All quiz results are session-only and are not saved.

### No Clinical Advice
This application does not provide clinical advice, treatment recommendations, or diagnostic guidance. For clinical questions, please consult with qualified healthcare professionals and refer to current clinical practice guidelines.

## Target Audience

- PGY-2 to PGY-4 Pathology Residents
- Molecular Pathology Fellows
- Clinical laboratory professionals learning genomics

## License

This project is for educational purposes only.

## Contributing

This is an educational project. For questions or feedback, please contact the repository maintainers.

## Acknowledgments

Built according to specifications in `plan.md` and `ultrathink.md` to provide comprehensive genomics education for pathology trainees.

---

**Version:** 1.0.0
**Last Updated:** 2025-12-01
