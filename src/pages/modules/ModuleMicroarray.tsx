import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ModuleMicroarray() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Microarray & Copy Number Analysis</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Understanding chromosomal microarray technology and CNV interpretation
      </p>

      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Array Technologies</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">SNP Array</h3>
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  Uses SNP probes to detect both copy number changes AND loss of heterozygosity (LOH).
                  Provides genotype information.
                </p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-xs text-blue-700 dark:text-blue-400">
                  <li>Can detect UPD (uniparental disomy)</li>
                  <li>Identifies regions of homozygosity</li>
                  <li>Used in constitutional and oncology testing</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">CGH Array</h3>
                <p className="text-sm text-purple-800 dark:text-purple-300">
                  Comparative genomic hybridization detects copy number changes by comparing patient
                  DNA to reference DNA.
                </p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-1 text-xs text-purple-700 dark:text-purple-400">
                  <li>Cannot detect balanced rearrangements</li>
                  <li>Cannot detect LOH without copy change</li>
                  <li>Higher probe density possible</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Log2 Ratio & B-Allele Frequency
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Log2 Ratio</h3>
              <p className="mb-2">Represents the ratio of patient signal to reference signal on log2 scale.</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Log2 ratio = 0: Normal copy number (diploid)</li>
                <li>Log2 ratio ≈ -1: Heterozygous deletion (1 copy)</li>
                <li>Log2 ratio ≈ +0.58: Duplication (3 copies)</li>
                <li>Log2 ratio &lt; -1: Homozygous deletion (0 copies)</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">B-Allele Frequency (BAF)</h3>
              <p className="mb-2">Represents genotype information from SNP probes (SNP arrays only).</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>BAF = 0: AA homozygous</li>
                <li>BAF = 0.5: AB heterozygous</li>
                <li>BAF = 1: BB homozygous</li>
                <li>Shifted BAF pattern suggests LOH or CN change</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">CNV Detection Logic</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>Copy number variants are identified by analyzing log2 ratio deviations across contiguous probes.</p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Interpretation Criteria</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-blue-800 dark:text-blue-300">
                <li><strong>Size:</strong> Larger CNVs more likely clinically significant</li>
                <li><strong>Gene content:</strong> CNVs affecting dosage-sensitive genes matter most</li>
                <li><strong>Population frequency:</strong> Common CNVs (polymorphisms) often benign</li>
                <li><strong>Inheritance:</strong> De novo CNVs more likely pathogenic</li>
                <li><strong>Database comparison:</strong> Check ClinGen, DECIPHER, OMIM</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Uniparental Disomy (UPD) Concept
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              UPD occurs when both copies of a chromosome (or chromosome segment) are inherited from
              one parent. Detected by SNP arrays as regions of homozygosity without copy number change.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                <strong>Clinical Significance:</strong> UPD can cause disease through unmasking of
                recessive alleles or disruption of imprinting.
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
