import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ModuleCytogenetics() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Cytogenetics Essentials</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Understanding karyotypes, chromosomal abnormalities, and FISH interpretation
      </p>

      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Karyotype Reading</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Karyotyping visualizes the full chromosome complement. Normal human karyotype: 46,XX
              (female) or 46,XY (male).
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Nomenclature Basics</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Total chromosome number listed first</li>
                <li>Sex chromosomes (X, Y) listed next</li>
                <li>Abnormalities described using ISCN nomenclature</li>
                <li>Example: 47,XY,+21 (male with trisomy 21)</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Structural Abnormalities</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Translocations</h3>
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  Exchange of segments between chromosomes. Can be reciprocal (two-way) or
                  Robertsonian (involving acrocentric chromosomes).
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-400 mt-2">
                  Example: t(9;22)(q34;q11.2) - Philadelphia chromosome
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">Deletions</h3>
                <p className="text-sm text-red-800 dark:text-red-300">
                  Loss of chromosomal material. Terminal deletions involve chromosome ends,
                  interstitial deletions occur within the chromosome.
                </p>
                <p className="text-xs text-red-700 dark:text-red-400 mt-2">Example: del(5q)</p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Duplications</h3>
                <p className="text-sm text-green-800 dark:text-green-300">
                  Presence of extra chromosomal material. Can occur in tandem or be inserted
                  elsewhere in the genome.
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Inversions</h3>
                <p className="text-sm text-purple-800 dark:text-purple-300">
                  Reversal of a chromosome segment. Pericentric inversions include the centromere;
                  paracentric inversions do not.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Balanced vs Unbalanced Abnormalities
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Balanced</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>No net gain or loss of genetic material</li>
                  <li>Often phenotypically normal carriers</li>
                  <li>Risk of unbalanced offspring</li>
                  <li>Examples: Balanced translocations, inversions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Unbalanced</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Net gain or loss of genetic material</li>
                  <li>Often clinically significant</li>
                  <li>Associated with developmental abnormalities</li>
                  <li>Examples: Deletions, duplications, trisomies</li>
                </ul>
              </div>
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
