import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ModuleNGS() {
  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">NGS Pipeline Overview</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Understanding next-generation sequencing workflows, from wet lab to bioinformatics
      </p>

      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Wet Lab Workflow</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Step-by-Step Process</h3>
              <ol className="space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white font-bold mr-3">1</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">DNA/RNA Extraction:</strong>
                    <p className="text-sm mt-1">Isolate nucleic acids from tissue or blood samples</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white font-bold mr-3">2</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Fragmentation:</strong>
                    <p className="text-sm mt-1">Break DNA into optimal size (200-400bp typically)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white font-bold mr-3">3</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Adapter Ligation:</strong>
                    <p className="text-sm mt-1">Add universal sequences to fragment ends for amplification and sequencing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white font-bold mr-3">4</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Target Enrichment:</strong>
                    <p className="text-sm mt-1">Hybrid capture or amplicon-based selection of regions of interest</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white font-bold mr-3">5</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Library Amplification:</strong>
                    <p className="text-sm mt-1">PCR to generate sufficient material for sequencing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-600 text-white font-bold mr-3">6</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Sequencing:</strong>
                    <p className="text-sm mt-1">Massively parallel sequencing on NGS platform</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Bioinformatics Pipeline</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>Raw sequencing data undergoes computational processing to identify variants.</p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                FASTQ → BAM → VCF Pipeline
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded font-mono text-sm">FASTQ</div>
                  <div className="flex-1 mx-2 border-t-2 border-dashed border-gray-400"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">Raw sequences + quality scores</span>
                </div>
                <div className="ml-4 text-sm">↓ Quality control, trimming, filtering</div>
                <div className="flex items-center">
                  <div className="bg-green-600 text-white px-3 py-1 rounded font-mono text-sm">BAM</div>
                  <div className="flex-1 mx-2 border-t-2 border-dashed border-gray-400"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">Aligned reads to reference genome</span>
                </div>
                <div className="ml-4 text-sm">↓ Variant calling, annotation</div>
                <div className="flex items-center">
                  <div className="bg-purple-600 text-white px-3 py-1 rounded font-mono text-sm">VCF</div>
                  <div className="flex-1 mx-2 border-t-2 border-dashed border-gray-400"></div>
                  <span className="text-xs text-gray-600 dark:text-gray-400">Variant Call Format - identified variants</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Alignment</h4>
                <p className="text-sm">Maps reads to reference genome (e.g., hg19/GRCh37 or hg38/GRCh38)</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Variant Calling</h4>
                <p className="text-sm">Identifies differences from reference: SNVs, indels, CNVs</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Filtering</h4>
                <p className="text-sm">Remove low-quality calls, PCR duplicates, sequencing artifacts</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Annotation</h4>
                <p className="text-sm">Add gene names, functional predictions, population frequencies</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">QC Metrics</h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>Quality control metrics ensure reliable variant calling and clinical interpretation.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Coverage (Depth)</h3>
                <p className="text-sm text-blue-800 dark:text-blue-300 mb-2">
                  Number of reads overlapping each genomic position. Higher coverage = more confident variant calls.
                </p>
                <ul className="list-disc list-inside text-xs text-blue-700 dark:text-blue-400 space-y-1 ml-2">
                  <li>Germline: Typically ≥30x mean coverage</li>
                  <li>Somatic: Often ≥250-500x for low VAF detection</li>
                  <li>"Depth of coverage" histogram shows distribution</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">Read Quality</h3>
                <p className="text-sm text-green-800 dark:text-green-300 mb-2">
                  Phred quality scores (Q scores) indicate base call accuracy.
                </p>
                <ul className="list-disc list-inside text-xs text-green-700 dark:text-green-400 space-y-1 ml-2">
                  <li>Q20: 1% error rate (99% accuracy)</li>
                  <li>Q30: 0.1% error rate (99.9% accuracy)</li>
                  <li>Target: &gt;80% bases ≥Q30</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <h3 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">Uniformity</h3>
                <p className="text-sm text-purple-800 dark:text-purple-300">
                  Evenness of coverage across target regions. Low uniformity means some regions
                  may be under-covered.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h3 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
                  On-Target Percentage
                </h3>
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  Percentage of reads mapping to intended target regions. Higher is better
                  (typically &gt;70%).
                </p>
              </div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 mt-4">
              <p className="text-sm text-red-800 dark:text-red-300">
                <strong className="text-red-900 dark:text-red-300">Coverage is King:</strong> Always
                interpret variants in the context of QC metrics. Low coverage regions may harbor
                false negatives (missed variants).
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
