import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ModuleFoundations() {
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
        Molecular Biology Foundations
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Understanding the fundamental building blocks of genomics and molecular pathology
      </p>

      <div className="space-y-8">
        {/* DNA, RNA, and Protein Basics */}
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            DNA, RNA, and Protein Basics
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">DNA Structure</h3>
              <p>
                DNA (deoxyribonucleic acid) is a double-stranded helical molecule composed of
                nucleotides. Each nucleotide contains a sugar (deoxyribose), a phosphate group,
                and one of four nitrogenous bases: adenine (A), thymine (T), guanine (G), or
                cytosine (C).
              </p>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                <li>Base pairing: A pairs with T, G pairs with C</li>
                <li>Antiparallel strands (5' to 3' direction)</li>
                <li>Human genome: ~3 billion base pairs across 23 chromosome pairs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">RNA and Transcription</h3>
              <p>
                RNA (ribonucleic acid) is typically single-stranded and uses uracil (U) instead
                of thymine. mRNA carries genetic information from DNA to ribosomes for protein
                synthesis.
              </p>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                <li>Transcription: DNA → RNA</li>
                <li>mRNA, tRNA, rRNA serve different cellular functions</li>
                <li>Alternative splicing creates protein diversity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Protein Synthesis</h3>
              <p>
                Translation converts mRNA sequences into amino acid chains. The genetic code is
                read in triplets (codons), with each codon specifying an amino acid or stop
                signal.
              </p>
            </div>
          </div>
        </section>

        {/* Exons, Introns, and Splice Sites */}
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Gene Structure: Exons, Introns, and Splice Sites
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Genes in eukaryotes consist of coding regions (exons) interrupted by non-coding
              regions (introns). During RNA processing, introns are removed and exons are joined
              together through splicing.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Key Concepts</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Exons:</strong> Coding sequences that remain in mature mRNA
                </li>
                <li>
                  <strong>Introns:</strong> Non-coding sequences removed during RNA processing
                </li>
                <li>
                  <strong>Splice sites:</strong> Conserved sequences at exon-intron boundaries
                  (GT-AG rule)
                </li>
                <li>
                  <strong>Alternative splicing:</strong> Different exon combinations create
                  protein variants
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-300">
                <strong>Clinical Relevance:</strong> Splice site mutations can disrupt normal
                splicing, leading to disease. These variants are important targets in genomic
                analysis.
              </p>
            </div>
          </div>
        </section>

        {/* Mutation Types */}
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Mutation Types
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                  SNV (Single Nucleotide Variant)
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  A single base pair substitution. Can be synonymous (silent), missense
                  (amino acid change), or nonsense (creates stop codon).
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-400 mt-2">
                  Example: c.123A&gt;T (p.Lys41*)
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                  Indel (Insertion/Deletion)
                </h3>
                <p className="text-sm text-purple-800 dark:text-purple-300">
                  Addition or removal of nucleotides. Frameshift indels (not divisible by 3)
                  alter the downstream reading frame.
                </p>
                <p className="text-xs text-purple-700 dark:text-purple-400 mt-2">
                  Example: c.456delA (frameshift)
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                  CNV (Copy Number Variant)
                </h3>
                <p className="text-sm text-green-800 dark:text-green-300">
                  Large-scale deletions or duplications affecting entire genes or genomic
                  regions. Detected by microarray or NGS.
                </p>
                <p className="text-xs text-green-700 dark:text-green-400 mt-2">
                  Example: del(7q11.2)
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 dark:text-red-300 mb-2">
                  Fusion/Rearrangement
                </h3>
                <p className="text-sm text-red-800 dark:text-red-300">
                  Structural rearrangement joining two genes. Common in hematologic
                  malignancies and some solid tumors.
                </p>
                <p className="text-xs text-red-700 dark:text-red-400 mt-2">
                  Example: BCR-ABL1 (synthetic)
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
                  LOH (Loss of Heterozygosity)
                </h3>
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  Loss of one parental allele in a tumor. Important for tumor suppressor gene
                  inactivation (two-hit hypothesis).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Somatic vs Germline */}
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Somatic vs Germline Variants
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Germline Variants
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Present in all cells from conception</li>
                  <li>Inherited from parents or de novo</li>
                  <li>Can be passed to offspring</li>
                  <li>VAF typically ~50% (heterozygous) or ~100% (homozygous)</li>
                  <li>
                    Examples: Hereditary cancer syndromes, inherited metabolic disorders
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Somatic Variants
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Acquired during lifetime in specific tissues</li>
                  <li>Not inherited from parents</li>
                  <li>Cannot be passed to offspring</li>
                  <li>VAF varies based on tumor purity and clonality</li>
                  <li>Examples: Tumor mutations, clonal hematopoiesis</li>
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Key Point:</strong> Distinguishing somatic from germline variants is
                critical in molecular pathology. Germline variants have implications for family
                members and require genetic counseling, while somatic variants inform tumor
                biology and potential targeted therapies (conceptual only).
              </p>
            </div>
          </div>
        </section>

        {/* Quick Quiz */}
        <section className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900 rounded-xl border-2 border-primary-200 dark:border-primary-800 p-6">
          <h2 className="text-2xl font-semibold text-primary-900 dark:text-primary-100 mb-4">
            Test Your Understanding
          </h2>
          <p className="text-primary-800 dark:text-primary-200 mb-4">
            Ready to assess your knowledge of molecular biology foundations? Head to the
            Assessment section to take a quiz on this module.
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
