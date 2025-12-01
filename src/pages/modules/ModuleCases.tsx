import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ModuleCases() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Integrated Genomic Cases
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Apply your knowledge through synthetic case-based scenarios
      </p>

      <div className="space-y-8">
        {/* Case Categories */}
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Case Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Somatic Tumor Panel Cases
              </h3>
              <p className="text-sm text-blue-800 dark:text-blue-300">
                Solid tumor and hematologic malignancy cases with SNVs, CNVs, and fusions
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                Germline Suspected Hereditary Cases
              </h3>
              <p className="text-sm text-green-800 dark:text-green-300">
                Inherited disorders with variant classification and family implications
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                Microarray CNV Interpretation
              </h3>
              <p className="text-sm text-purple-800 dark:text-purple-300">
                Chromosomal microarray results with log2 ratio and B-allele frequency patterns
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
                FISH Pattern Interpretation
              </h3>
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                Recognize common FISH signal patterns and chromosomal rearrangements
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">
                Synthetic VCF-Based Reasoning
              </h3>
              <p className="text-sm text-red-800 dark:text-red-300">
                Interpret variant call format (VCF) data with QC metrics and annotations
              </p>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4">
              <h3 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-2">
                Combined Karyotype + NGS + CMA Cases
              </h3>
              <p className="text-sm text-indigo-800 dark:text-indigo-300">
                Integrate multiple testing modalities for comprehensive diagnosis
              </p>
            </div>
          </div>
        </section>

        {/* Example Case 1: Somatic */}
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <div className="bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 rounded-lg p-4 mb-4">
            <p className="text-sm font-semibold text-red-900 dark:text-red-300">
              EXAMPLE CASE 1: Somatic Tumor Testing (Synthetic)
            </p>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Clinical History</h3>
              <p className="text-sm">
                66-year-old with newly diagnosed acute myeloid leukemia (AML). Karyotype shows
                t(9;22)(q34;q11.2). NGS tumor panel requested for prognostic markers.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Findings</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-200 dark:bg-gray-800">
                    <tr>
                      <th className="px-3 py-2 text-left">Gene</th>
                      <th className="px-3 py-2 text-left">Variant</th>
                      <th className="px-3 py-2 text-left">VAF</th>
                      <th className="px-3 py-2 text-left">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-3 py-2">ABL1</td>
                      <td className="px-3 py-2">BCR-ABL1 fusion (synthetic)</td>
                      <td className="px-3 py-2">47%</td>
                      <td className="px-3 py-2">Fusion</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2">TP53</td>
                      <td className="px-3 py-2">c.742C&gt;T (p.Arg248Trp)</td>
                      <td className="px-3 py-2">89%</td>
                      <td className="px-3 py-2">Missense</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Questions to Consider
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-blue-800 dark:text-blue-300 ml-2">
                <li>Is the BCR-ABL1 fusion consistent with the karyotype finding?</li>
                <li>What is the significance of the TP53 variant in AML?</li>
                <li>Why is the TP53 VAF higher than the fusion VAF?</li>
                <li>What are the prognostic implications? (Conceptual only)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example Case 2: Germline */}
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <div className="bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 rounded-lg p-4 mb-4">
            <p className="text-sm font-semibold text-green-900 dark:text-green-300">
              EXAMPLE CASE 2: Germline Testing (Synthetic)
            </p>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Clinical History</h3>
              <p className="text-sm">
                32-year-old woman with family history of early-onset breast cancer. Mother and
                maternal aunt both diagnosed &lt;40 years. Hereditary cancer panel ordered.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Findings</h3>
              <p className="text-sm mb-2">
                BRCA1 c.5266dupC (p.Gln1756Profs*74), frameshift variant
              </p>
              <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                <li>VAF: 51% (consistent with heterozygous germline)</li>
                <li>Classification: Pathogenic (known founder mutation)</li>
                <li>Population frequency: Rare (&lt;0.01% in gnomAD)</li>
                <li>ClinVar: Multiple pathogenic submissions</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                Questions to Consider
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-purple-800 dark:text-purple-300 ml-2">
                <li>Why is this variant classified as pathogenic?</li>
                <li>What is the inheritance pattern?</li>
                <li>What are implications for family members?</li>
                <li>Would genetic counseling be recommended? (Educational context)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Example Case 3: Microarray */}
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <div className="bg-purple-100 dark:bg-purple-900/30 border-l-4 border-purple-500 rounded-lg p-4 mb-4">
            <p className="text-sm font-semibold text-purple-900 dark:text-purple-300">
              EXAMPLE CASE 3: Chromosomal Microarray (Synthetic)
            </p>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Clinical History</h3>
              <p className="text-sm">
                3-year-old with developmental delay, dysmorphic features. CMA ordered for genomic
                evaluation.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Findings</h3>
              <p className="text-sm mb-2">
                Deletion detected at chr7q11.23, approximately 1.5 Mb
              </p>
              <ul className="list-disc list-inside text-xs space-y-1 ml-2">
                <li>Log2 ratio: -0.85 (consistent with heterozygous deletion)</li>
                <li>B-allele frequency: Loss of heterozygosity pattern</li>
                <li>Genes affected: ELN, LIMK1, and 26 others (synthetic example)</li>
                <li>Database match: Williams syndrome region</li>
              </ul>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
                Questions to Consider
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800 dark:text-yellow-300 ml-2">
                <li>How do you interpret the log2 ratio value?</li>
                <li>Is this deletion likely pathogenic?</li>
                <li>What additional testing might be helpful?</li>
                <li>Would karyotype have detected this deletion?</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900 rounded-xl border-2 border-primary-200 dark:border-primary-800 p-6">
          <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-4">
            Practice with More Cases
          </h2>
          <p className="text-primary-800 dark:text-primary-200 mb-4">
            Ready to test your case interpretation skills? The Assessment section includes
            additional integrated cases covering all modules.
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
