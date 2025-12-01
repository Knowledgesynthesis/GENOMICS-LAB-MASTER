import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ModuleGermline() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Constitutional (Germline) Genomics
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Understanding inherited genetic variants and constitutional genomic testing
      </p>

      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Inherited Disorders</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Autosomal Dominant</h3>
                <ul className="list-disc list-inside text-sm text-blue-800 dark:text-blue-300 space-y-1 ml-2">
                  <li>One mutant allele sufficient</li>
                  <li>50% transmission risk</li>
                  <li>Vertical pattern in pedigree</li>
                  <li>Examples: Huntington disease, BRCA1/2 hereditary cancer</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Autosomal Recessive</h3>
                <ul className="list-disc list-inside text-sm text-green-800 dark:text-green-300 space-y-1 ml-2">
                  <li>Two mutant alleles required</li>
                  <li>25% recurrence in offspring</li>
                  <li>Horizontal pattern in pedigree</li>
                  <li>Examples: Cystic fibrosis, sickle cell disease</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">X-Linked</h3>
                <ul className="list-disc list-inside text-sm text-purple-800 dark:text-purple-300 space-y-1 ml-2">
                  <li>Gene on X chromosome</li>
                  <li>Primarily affects males</li>
                  <li>No male-to-male transmission</li>
                  <li>Examples: Hemophilia A, Duchenne muscular dystrophy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Carrier Testing Logic</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Carrier testing identifies individuals heterozygous for recessive disease alleles.
              Important for reproductive planning (conceptual only).
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Common Carrier Screening Panels</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Expanded carrier screening (100+ genes)</li>
                <li>Ethnic-specific panels (e.g., Ashkenazi Jewish, Mediterranean)</li>
                <li>Cystic fibrosis carrier screening</li>
                <li>Hemoglobinopathy screening</li>
              </ul>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Key Concept:</strong> When both partners are carriers for the same recessive
                disorder, each pregnancy has 25% risk for affected child, 50% risk for carrier, and
                25% unaffected/non-carrier.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Trio Testing</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Simultaneous sequencing of child and both biological parents improves variant
              interpretation and identifies de novo variants.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Advantages</h3>
                <ul className="list-disc list-inside text-sm text-green-800 dark:text-green-300 space-y-1 ml-2">
                  <li>Identifies de novo variants (strong pathogenic evidence)</li>
                  <li>Filters out parental benign variants</li>
                  <li>Clarifies inheritance pattern</li>
                  <li>Improves diagnostic yield</li>
                </ul>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">Considerations</h3>
                <ul className="list-disc list-inside text-sm text-yellow-800 dark:text-yellow-300 space-y-1 ml-2">
                  <li>Higher cost than proband-only testing</li>
                  <li>Requires availability of both parents</li>
                  <li>May reveal non-paternity incidentally</li>
                  <li>Parental variants may have clinical significance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Mitochondrial Variants</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Mitochondrial DNA (mtDNA) is maternally inherited and exists in multiple copies per cell
              (heteroplasmy). Variants can cause metabolic and neurological disorders.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Unique Features</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Maternal inheritance:</strong> Only mothers transmit mtDNA to offspring</li>
                <li><strong>Heteroplasmy:</strong> Variable proportion of mutant vs wild-type mtDNA</li>
                <li><strong>Threshold effect:</strong> Clinical manifestation when mutant % exceeds threshold</li>
                <li><strong>Tissue-specific distribution:</strong> Heteroplasmy varies between tissues</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Prenatal Testing Basics (Conceptual)
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-sm bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 text-yellow-800 dark:text-yellow-300">
              <strong>Educational Disclaimer:</strong> This section provides conceptual understanding
              only. Prenatal testing requires genetic counseling and is not within the scope of this
              educational app for clinical decision-making.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Testing Modalities (Conceptual)</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>NIPT:</strong> Cell-free DNA screening for aneuploidy from maternal blood</li>
                <li><strong>Amniocentesis:</strong> Fetal cells from amniotic fluid for karyotype/microarray/sequencing</li>
                <li><strong>CVS:</strong> Chorionic villus sampling for early diagnostic testing</li>
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
