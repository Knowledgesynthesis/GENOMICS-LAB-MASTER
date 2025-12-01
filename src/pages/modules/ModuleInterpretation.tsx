import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ModuleInterpretation() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Variant Interpretation</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Understanding ACMG/AMP guidelines and variant classification principles
      </p>

      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Five-Tier Classification System
          </h2>
          <div className="space-y-3">
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 dark:border-red-700 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 dark:text-red-300">Pathogenic (P)</h3>
              <p className="text-sm text-red-800 dark:text-red-300 mt-1">
                Sufficient evidence to establish causative role in disease
              </p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-500 dark:border-orange-700 rounded-lg p-4">
              <h3 className="font-semibold text-orange-900 dark:text-orange-300">Likely Pathogenic (LP)</h3>
              <p className="text-sm text-orange-800 dark:text-orange-300 mt-1">
                High likelihood of pathogenicity but not definitive
              </p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-500 dark:border-yellow-700 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-300">
                Variant of Uncertain Significance (VUS)
              </h3>
              <p className="text-sm text-yellow-800 dark:text-yellow-300 mt-1">
                Insufficient evidence to classify as pathogenic or benign
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-500 dark:border-blue-700 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 dark:text-blue-300">Likely Benign (LB)</h3>
              <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">
                High likelihood of being benign
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 dark:text-green-300">Benign (B)</h3>
              <p className="text-sm text-green-800 dark:text-green-300 mt-1">
                Established as non-pathogenic, often common population variant
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Evidence Types</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Population Frequency
                </h3>
                <p className="text-sm">
                  Variants common in general population (e.g., &gt;1% in gnomAD) are typically benign.
                  Rare variants in disease genes warrant further investigation.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Computational Predictions
                </h3>
                <p className="text-sm">
                  In silico tools predict functional impact. Multiple concordant predictions
                  strengthen evidence (e.g., SIFT, PolyPhen, CADD scores).
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Functional Data
                </h3>
                <p className="text-sm">
                  Laboratory studies demonstrating impact on protein function, RNA splicing,
                  or cellular pathways provide strong evidence.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Segregation</h3>
                <p className="text-sm">
                  Variant tracks with disease in families. Segregation analysis strengthens
                  pathogenic or benign classification.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  De Novo Occurrence
                </h3>
                <p className="text-sm">
                  Variant absent in unaffected parents but present in affected child. Strong
                  evidence for pathogenicity, especially in dominant disorders.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Literature & Databases
                </h3>
                <p className="text-sm">
                  Published case reports, ClinVar submissions, gene-disease relationships (OMIM),
                  and expert panel reviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Somatic vs Germline Classification
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>Interpretation frameworks differ between germline and somatic contexts.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                  Germline (ACMG/AMP)
                </h3>
                <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-300 space-y-1 ml-2">
                  <li>Focuses on disease-causing potential</li>
                  <li>Considers inheritance pattern</li>
                  <li>Evaluates population frequency</li>
                  <li>Assesses familial segregation</li>
                  <li>5-tier system (P/LP/VUS/LB/B)</li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                  Somatic (AMP/ASCO/CAP)
                </h3>
                <ul className="list-disc list-inside text-sm text-purple-800 dark:text-purple-300 space-y-1 ml-2">
                  <li>Focuses on clinical significance in tumors</li>
                  <li>Considers therapeutic implications (conceptual)</li>
                  <li>Evaluates diagnostic/prognostic value</li>
                  <li>Assesses oncogenic potential</li>
                  <li>4-tier system (Strong/Moderate/Weak/None)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">VUS Concepts</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Variants of Uncertain Significance represent the gray zone where evidence is
              insufficient for definitive classification.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
                Important Principles
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-sm text-yellow-800 dark:text-yellow-300">
                <li>VUS should NOT be used for clinical decision-making without additional evidence</li>
                <li>VUS classifications can change as new data emerges</li>
                <li>Family studies and functional assays can help reclassify VUSs</li>
                <li>Communication to patients/providers requires careful explanation of uncertainty</li>
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
