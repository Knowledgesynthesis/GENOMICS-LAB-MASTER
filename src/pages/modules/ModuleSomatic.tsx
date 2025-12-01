import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ModuleSomatic() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tumor Genomics (Somatic Testing)</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Understanding somatic variants, oncogenic mechanisms, and tumor molecular profiling
      </p>

      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Oncogenes vs Tumor Suppressors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">Oncogenes</h3>
              <p className="text-sm text-red-800 dark:text-red-300 mb-3">
                Genes that promote cell growth when activated. Gain-of-function mutations drive oncogenesis.
              </p>
              <div className="text-xs text-red-700 dark:text-red-400">
                <p className="font-semibold mb-1">Mutation Pattern:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Typically missense (specific hotspots)</li>
                  <li>Amplifications</li>
                  <li>Fusions creating constitutive activity</li>
                  <li>One hit sufficient (dominant)</li>
                </ul>
                <p className="font-semibold mt-2 mb-1">Examples (synthetic):</p>
                <ul className="list-disc list-inside ml-2">
                  <li>KRAS, BRAF, MYC, EGFR</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Tumor Suppressors</h3>
              <p className="text-sm text-blue-800 dark:text-blue-300 mb-3">
                Genes that inhibit cell growth when functional. Loss-of-function mutations promote tumorigenesis.
              </p>
              <div className="text-xs text-blue-700 dark:text-blue-400">
                <p className="font-semibold mb-1">Mutation Pattern:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Nonsense, frameshift, splice site</li>
                  <li>Deletions</li>
                  <li>Distributed across gene</li>
                  <li>Typically requires two hits (recessive)</li>
                </ul>
                <p className="font-semibold mt-2 mb-1">Examples (synthetic):</p>
                <ul className="list-disc list-inside ml-2">
                  <li>TP53, RB1, PTEN, APC</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Fusions & Rearrangements</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Gene fusions create hybrid genes with novel functions, often driving oncogenesis
              through constitutive kinase activity or altered transcription.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Detection Methods</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>RNA-based NGS:</strong> Identifies fusion transcripts directly</li>
                <li><strong>DNA-based NGS:</strong> Detects breakpoints with mate-pair/split-read analysis</li>
                <li><strong>FISH:</strong> Break-apart or fusion probes for known rearrangements</li>
                <li><strong>Karyotyping:</strong> Visualizes gross chromosomal rearrangements</li>
              </ul>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                Common Fusion Examples (Synthetic)
              </h3>
              <div className="text-sm text-purple-800 dark:text-purple-300 space-y-1">
                <p>• BCR-ABL1 in CML (t(9;22))</p>
                <p>• PML-RARA in APL (t(15;17))</p>
                <p>• EML4-ALK in lung adenocarcinoma</p>
                <p>• TMPRSS2-ERG in prostate cancer</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Variant Allele Fraction (VAF)
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              VAF represents the proportion of sequencing reads containing the variant allele.
              Interpretation depends on tumor purity and clonality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">High VAF (~50%)</h3>
                <p className="text-sm text-green-800 dark:text-green-300">
                  May indicate clonal variant present in all tumor cells (or germline heterozygous)
                </p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
                  Moderate VAF (20-40%)
                </h3>
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  Subclonal variant or clonal in low purity sample
                </p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">Low VAF (&lt;10%)</h3>
                <p className="text-sm text-red-800 dark:text-red-300">
                  Minor subclone or potential artifact - requires careful validation
                </p>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Key Concept:</strong> VAF around 50% could represent either heterozygous
                germline variant OR clonal somatic variant in pure tumor. Context matters!
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            MSI & MMR Deficiency
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Microsatellite instability (MSI) results from mismatch repair (MMR) deficiency,
              leading to accumulation of mutations in repetitive DNA sequences.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Clinical Significance</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Biomarker for immunotherapy response (conceptual)</li>
                <li>Associated with Lynch syndrome when germline</li>
                <li>Detectable by PCR or NGS</li>
                <li>Immunohistochemistry for MMR proteins (MLH1, MSH2, MSH6, PMS2)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Clonal Hematopoiesis (CH)
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Age-related somatic mutations in hematopoietic stem cells. Common in normal aging
              but can confound tumor testing.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Key Pitfall</h3>
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                CH variants detected in liquid biopsy or blood-contaminated tumor samples may be
                mistaken for tumor mutations. Common CH genes: DNMT3A, TET2, ASXL1.
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
