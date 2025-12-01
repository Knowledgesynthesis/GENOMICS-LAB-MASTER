import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ModuleAssays() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Assay Principles
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Understanding the fundamental molecular techniques used in genomic diagnostics
      </p>

      <div className="space-y-8">
        {/* PCR & qPCR */}
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            PCR & qPCR (Quantitative PCR)
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Polymerase Chain Reaction (PCR) is a fundamental technique for amplifying specific
              DNA sequences exponentially through thermal cycling.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                PCR Steps (Thermal Cycling)
              </h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Denaturation:</strong> Heat to ~95°C to separate DNA strands
                </li>
                <li>
                  <strong>Annealing:</strong> Cool to ~55-65°C for primers to bind
                </li>
                <li>
                  <strong>Extension:</strong> Heat to ~72°C for DNA polymerase to synthesize new
                  strands
                </li>
              </ol>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Quantitative PCR (qPCR/Real-Time PCR)
              </h3>
              <p className="text-sm text-blue-800 dark:text-blue-300">
                Monitors amplification in real-time using fluorescent dyes or probes. Used for:
              </p>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-sm text-blue-800 dark:text-blue-300">
                <li>Gene expression quantification</li>
                <li>Copy number variation detection</li>
                <li>Minimal residual disease monitoring</li>
                <li>Pathogen load quantification</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sanger Sequencing */}
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Sanger Sequencing
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Also known as chain-termination sequencing, Sanger sequencing is the gold standard
              for targeted variant confirmation and single-gene analysis.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Read length: 500-1000 base pairs</li>
                <li>Accuracy: &gt;99.9%</li>
                <li>Uses fluorescently labeled dideoxynucleotides (ddNTPs)</li>
                <li>Ideal for confirming NGS findings and known hotspot mutations</li>
              </ul>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                <strong>Limitation:</strong> Cannot detect low-level mosaicism (&lt;15-20% variant
                allele fraction). For heterogeneous samples, NGS is more sensitive.
              </p>
            </div>
          </div>
        </section>

        {/* FISH */}
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            FISH (Fluorescence In Situ Hybridization)
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              FISH uses fluorescent probes that bind to specific DNA sequences on chromosomes,
              allowing visualization of structural and numerical chromosomal abnormalities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                  Probe Types
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-green-800 dark:text-green-300">
                  <li>
                    <strong>Locus-specific:</strong> Target specific genes
                  </li>
                  <li>
                    <strong>Centromeric:</strong> Detect aneuploidy
                  </li>
                  <li>
                    <strong>Whole chromosome paint:</strong> Identify translocations
                  </li>
                  <li>
                    <strong>Break-apart:</strong> Detect rearrangements
                  </li>
                  <li>
                    <strong>Fusion:</strong> Identify specific translocations
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                  Signal Patterns (Schematic)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-purple-800 dark:text-purple-300">
                  <li>Normal: 2 signals (diploid)</li>
                  <li>Deletion: 1 signal</li>
                  <li>Duplication: 3+ signals</li>
                  <li>Fusion: Yellow signal (red + green)</li>
                  <li>Break-apart: Separated signals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chromosomal Microarray */}
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Chromosomal Microarray (CMA)
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Microarray analysis detects copy number variants (CNVs) across the genome at high
              resolution, typically 50-100 kb or better.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Array Technologies
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>SNP array:</strong> Detects CNVs and loss of heterozygosity (LOH)
                </li>
                <li>
                  <strong>CGH array:</strong> Comparative genomic hybridization for CNV detection
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Clinical Applications:</strong> Developmental delay, autism spectrum
                disorders, congenital anomalies, prenatal testing (conceptual)
              </p>
            </div>
          </div>
        </section>

        {/* NGS Library Prep */}
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            NGS: Library Preparation & Sequencing Basics
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Next-generation sequencing enables massively parallel sequencing of millions of DNA
              fragments simultaneously.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Library Preparation Steps
              </h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>
                  <strong>Fragmentation:</strong> DNA is broken into smaller pieces (200-400 bp)
                </li>
                <li>
                  <strong>End repair:</strong> Fragment ends are made blunt
                </li>
                <li>
                  <strong>Adapter ligation:</strong> Universal adapters added to fragment ends
                </li>
                <li>
                  <strong>Target enrichment:</strong> Capture or amplify regions of interest
                  (panels, exomes, genomes)
                </li>
                <li>
                  <strong>Amplification:</strong> PCR to generate sufficient material
                </li>
                <li>
                  <strong>Quality control:</strong> Verify fragment size and concentration
                </li>
              </ol>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                Sequencing by Synthesis (Conceptual)
              </h3>
              <p className="text-sm text-purple-800 dark:text-purple-300">
                Most NGS platforms use sequencing by synthesis with reversible terminators.
                Fluorescent signals are captured as each base is incorporated, one cycle at a
                time.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                Paired-End Sequencing
              </h3>
              <p className="text-sm text-green-800 dark:text-green-300">
                Sequencing both ends of each DNA fragment improves alignment accuracy and enables
                detection of structural variants and fusions.
              </p>
            </div>
          </div>
        </section>

        {/* MLPA */}
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            MLPA (Multiplex Ligation-dependent Probe Amplification)
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              MLPA is a targeted method to detect copy number changes and point mutations in up
              to 50 genomic sequences in a single reaction.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Key Applications
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Detecting deletions/duplications in specific genes</li>
                <li>Subtelomeric screening</li>
                <li>Dosage analysis for known syndromes</li>
                <li>Cost-effective alternative to FISH for targeted CNV detection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Quiz */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900 rounded-xl border-2 border-primary-200 dark:border-primary-800 p-6">
          <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-4">
            Test Your Understanding
          </h2>
          <p className="text-primary-800 dark:text-primary-200 mb-4">
            Ready to assess your knowledge of assay principles? Head to the Assessment section
            to take a quiz on this module.
          </p>
          <Link
            to="/assessment"
            className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            Go to Assessment
          </Link>
        </section>
      </div>
    </div>
  );
}
