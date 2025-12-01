import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ModuleValidation() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">QA/QC & Validation</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Understanding quality assurance, quality control, and assay validation in genomic testing
      </p>

      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Fundamental Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Accuracy (Trueness)</h3>
              <p className="text-sm text-blue-800 dark:text-blue-300">
                Closeness of measurement to true value. Assesses systematic error or bias.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Precision (Reproducibility)</h3>
              <p className="text-sm text-green-800 dark:text-green-300">
                Consistency of repeated measurements. Assesses random error or variation.
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Analytical Sensitivity</h3>
              <p className="text-sm text-purple-800 dark:text-purple-300">
                Ability to detect true positives. Percentage of samples with variant correctly identified.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Analytical Specificity</h3>
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                Ability to correctly identify true negatives. Percentage of wild-type samples
                correctly called as variant-negative.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Limit of Detection (LOD)</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              LOD is the lowest concentration or variant allele fraction that can be reliably detected
              by an assay.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Clinical Relevance</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Somatic assays require low LOD (e.g., 5% VAF) to detect minority clones</li>
                <li>Germline assays typically detect variants at ~20-30% VAF and above</li>
                <li>Minimal residual disease monitoring requires ultra-sensitive detection (&lt;0.1%)</li>
                <li>LOD must be validated for each variant type and genomic context</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Assay Validation</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Before clinical use, genomic assays must undergo rigorous validation to establish
              performance characteristics.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Validation Components</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Accuracy:</strong> Test known reference materials and compare results</li>
                <li><strong>Precision:</strong> Repeat testing (intra-run, inter-run, inter-operator)</li>
                <li><strong>Analytical sensitivity/specificity:</strong> True positive/negative rates</li>
                <li><strong>LOD:</strong> Serial dilutions to determine detection threshold</li>
                <li><strong>Reportable range:</strong> Define linear/reliable measurement range</li>
                <li><strong>Interfering substances:</strong> Test for specimen quality impacts</li>
                <li><strong>Reference intervals:</strong> Establish normal ranges if applicable</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Proficiency Testing</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              External quality assessment through blinded sample testing from proficiency testing
              providers (e.g., CAP surveys).
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Purpose</h3>
              <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-300 space-y-1 ml-2">
                <li>Verify ongoing accuracy and competency</li>
                <li>Compare performance to peer laboratories</li>
                <li>Identify systematic errors or drift</li>
                <li>Satisfy regulatory requirements (CLIA, CAP)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Internal Controls</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Controls are run with each batch to ensure assay performance meets specifications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Positive Controls</h3>
                <p className="text-sm text-green-800 dark:text-green-300">
                  Samples with known variants verify detection capability and reagent functionality.
                </p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Negative Controls</h3>
                <p className="text-sm text-purple-800 dark:text-purple-300">
                  Wild-type samples confirm absence of contamination and false positives.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Contamination & Index Hopping
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">Contamination Sources</h3>
              <ul className="list-disc list-inside text-sm text-red-800 dark:text-red-300 space-y-1 ml-2">
                <li>Sample-to-sample carryover during pipetting</li>
                <li>PCR amplicon contamination in workspace</li>
                <li>Reagent contamination</li>
                <li>Environmental DNA (e.g., technician DNA)</li>
              </ul>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Index Hopping</h3>
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                NGS artifact where sample barcodes (indexes) mis-assign, causing reads from one
                sample to appear in another. More common with patterned flow cells. Mitigation:
                unique dual indexing, increased sample diversity.
              </p>
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
