import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ModuleReporting() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Reporting & Lab Operations
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Understanding genomic report structure, lab workflow, and operational considerations
      </p>

      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Anatomy of a Molecular/Genomic Report
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>Clinical genomic reports follow structured formats to ensure clarity and completeness.</p>
            <div className="space-y-3">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">1. Patient Demographics & Test Info</h3>
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  Patient identifiers, ordering physician, specimen type, accession number, test ordered
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-1">2. Indication</h3>
                <p className="text-sm text-green-800 dark:text-green-300">
                  Clinical reason for testing (e.g., "Acute myeloid leukemia, risk stratification")
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-1">3. Result Summary</h3>
                <p className="text-sm text-purple-800 dark:text-purple-300">
                  High-level summary: "POSITIVE" / "NEGATIVE" / "VARIANT(S) OF UNCERTAIN SIGNIFICANCE"
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">4. Variant Table</h3>
                <p className="text-sm text-yellow-800 dark:text-yellow-300 mb-2">
                  Structured table listing identified variants with key details:
                </p>
                <ul className="list-disc list-inside text-xs text-yellow-700 dark:text-yellow-400 ml-2 space-y-1">
                  <li>Gene, transcript, genomic coordinates</li>
                  <li>cDNA change (e.g., c.123A&gt;T), protein change (p.Lys41*)</li>
                  <li>Variant type, VAF/zygosity</li>
                  <li>Classification (P/LP/VUS/LB/B)</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 dark:text-red-300 mb-1">5. Interpretation</h3>
                <p className="text-sm text-red-800 dark:text-red-300">
                  Clinical significance of findings, supporting evidence for classification, literature
                  references, implications for patient/family (germline only)
                </p>
              </div>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 border-l-4 border-indigo-500 rounded-lg p-4">
                <h3 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-1">6. Methodology</h3>
                <p className="text-sm text-indigo-800 dark:text-indigo-300">
                  Brief description of assay (e.g., "Targeted NGS panel of 50 genes"), reference
                  genome, analysis pipeline
                </p>
              </div>

              <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 rounded-lg p-4">
                <h3 className="font-semibold text-pink-900 dark:text-pink-300 mb-1">7. Limitations</h3>
                <p className="text-sm text-pink-800 dark:text-pink-300">
                  What the test does NOT detect, coverage gaps, potential for false negatives/positives,
                  need for confirmation
                </p>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/20 border-l-4 border-teal-500 rounded-lg p-4">
                <h3 className="font-semibold text-teal-900 dark:text-teal-300 mb-1">8. References & Interpretation Aid</h3>
                <p className="text-sm text-teal-800 dark:text-teal-300">
                  Databases used (ClinVar, gnomAD, etc.), ACMG guidelines citation, contact info for
                  questions
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 border-l-4 border-gray-500 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-300 mb-1">9. Signatures</h3>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Laboratory director sign-out, board certification, CLIA/CAP accreditation info
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            How to Explain Uncertainty
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              VUS and ambiguous findings require careful communication to avoid misinterpretation.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Example VUS Language</h3>
              <p className="text-sm text-yellow-800 dark:text-yellow-300 italic">
                "A variant of uncertain significance was identified in [GENE]. Current evidence is
                insufficient to determine whether this variant is disease-causing or benign. This
                finding should not be used for clinical decision-making at this time. Reclassification
                may occur as additional data becomes available."
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Key Principles</h3>
              <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-300 space-y-1 ml-2">
                <li>Avoid definitive language for VUS</li>
                <li>Clearly state limitations</li>
                <li>Recommend genetic counseling when appropriate</li>
                <li>Explain potential for reclassification</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Lab Workflow</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Specimen to Report Pipeline
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold min-w-[120px]">
                    1. Accession
                  </div>
                  <div className="flex-1 mx-2 border-t-2 border-dashed border-gray-400"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Register specimen, verify requisition
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-semibold min-w-[120px]">
                    2. Extraction
                  </div>
                  <div className="flex-1 mx-2 border-t-2 border-dashed border-gray-400"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Isolate DNA/RNA, QC
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded text-sm font-semibold min-w-[120px]">
                    3. Library Prep
                  </div>
                  <div className="flex-1 mx-2 border-t-2 border-dashed border-gray-400"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Prepare sequencing libraries
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold min-w-[120px]">
                    4. Sequencing
                  </div>
                  <div className="flex-1 mx-2 border-t-2 border-dashed border-gray-400"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Run on NGS platform
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-600 text-white px-3 py-1 rounded text-sm font-semibold min-w-[120px]">
                    5. Bioinformatics
                  </div>
                  <div className="flex-1 mx-2 border-t-2 border-dashed border-gray-400"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Alignment, variant calling
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-indigo-600 text-white px-3 py-1 rounded text-sm font-semibold min-w-[120px]">
                    6. Interpretation
                  </div>
                  <div className="flex-1 mx-2 border-t-2 border-dashed border-gray-400"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Variant classification
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-pink-600 text-white px-3 py-1 rounded text-sm font-semibold min-w-[120px]">
                    7. Reporting
                  </div>
                  <div className="flex-1 mx-2 border-t-2 border-dashed border-gray-400"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Draft report, director sign-out
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-teal-600 text-white px-3 py-1 rounded text-sm font-semibold min-w-[120px]">
                    8. Release
                  </div>
                  <div className="flex-1 mx-2 border-t-2 border-dashed border-gray-400"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Transmit to ordering provider
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mt-4">
              <p className="text-sm">
                <strong className="text-gray-900 dark:text-white">Turnaround Time:</strong> Varies by
                test complexity. Targeted panels: 7-14 days. Exomes/genomes: 4-8 weeks. STAT testing
                available for urgent clinical scenarios.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            LIS Integration (Conceptual)
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Laboratory Information Systems (LIS) manage specimens, track workflow, store results, and
              interface with electronic health records.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Key Functions</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Specimen tracking and chain of custody</li>
                <li>Test ordering and result entry</li>
                <li>Quality control documentation</li>
                <li>Billing and compliance reporting</li>
                <li>Electronic result delivery to EMR</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900 rounded-xl border-2 border-primary-200 dark:border-primary-800 p-6">
          <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-4">
            Test Your Understanding
          </h2>
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
