import { Link } from 'react-router-dom';
import {
  Dna,
  FlaskConical,
  Microscope,
  LineChart,
  Database,
  Search,
  Stethoscope,
  UserCircle,
  ShieldCheck,
  FileText,
  FolderOpen,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Module {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
  color: string;
}

const modules: Module[] = [
  {
    id: 'foundations',
    title: 'Molecular Biology Foundations',
    description: 'DNA, RNA, protein basics, mutation types, somatic vs germline',
    icon: Dna,
    path: '/foundations',
    color: 'bg-blue-500',
  },
  {
    id: 'assays',
    title: 'Assay Principles',
    description: 'PCR, Sanger, FISH, CMA, MLPA, NGS library prep & sequencing',
    icon: FlaskConical,
    path: '/assays',
    color: 'bg-purple-500',
  },
  {
    id: 'cytogenetics',
    title: 'Cytogenetics Essentials',
    description: 'Karyotype reading, structural abnormalities, FISH patterns',
    icon: Microscope,
    path: '/cytogenetics',
    color: 'bg-green-500',
  },
  {
    id: 'microarray',
    title: 'Microarray & Copy Number',
    description: 'SNP vs CGH arrays, CNV detection, log2 ratio, B-allele frequency',
    icon: LineChart,
    path: '/microarray',
    color: 'bg-yellow-500',
  },
  {
    id: 'ngs',
    title: 'NGS Pipeline Overview',
    description: 'Wet lab workflow, bioinformatics pipeline, QC metrics',
    icon: Database,
    path: '/ngs',
    color: 'bg-red-500',
  },
  {
    id: 'interpretation',
    title: 'Variant Interpretation',
    description: 'ACMG classification, evidence types, VUS concepts',
    icon: Search,
    path: '/interpretation',
    color: 'bg-indigo-500',
  },
  {
    id: 'somatic',
    title: 'Tumor Genomics',
    description: 'Somatic testing, oncogenes, fusions, MSI, VAF interpretation',
    icon: Stethoscope,
    path: '/somatic',
    color: 'bg-pink-500',
  },
  {
    id: 'germline',
    title: 'Constitutional Genomics',
    description: 'Inherited disorders, carrier testing, trio testing',
    icon: UserCircle,
    path: '/germline',
    color: 'bg-teal-500',
  },
  {
    id: 'validation',
    title: 'QA/QC & Validation',
    description: 'Accuracy, precision, analytical metrics, proficiency testing',
    icon: ShieldCheck,
    path: '/validation',
    color: 'bg-orange-500',
  },
  {
    id: 'reporting',
    title: 'Reporting & Lab Operations',
    description: 'Report anatomy, variant tables, lab workflow, LIS integration',
    icon: FileText,
    path: '/reporting',
    color: 'bg-cyan-500',
  },
  {
    id: 'cases',
    title: 'Integrated Genomic Cases',
    description: 'Comprehensive case-based learning with real-world scenarios',
    icon: FolderOpen,
    path: '/cases',
    color: 'bg-violet-500',
  },
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Genomics Lab Master
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A comprehensive educational platform for Clinical Laboratory Genetics & Genomic
          Diagnostics. Learn at your own pace with interactive modules, assessments, and
          real-world case studies.
        </p>
        <div className="mt-6 inline-block px-4 py-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 text-sm font-medium">
          Educational only • Not for clinical use
        </div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Link
              key={module.id}
              to={module.path}
              className="group block p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-200 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={cn(
                    'flex h-12 w-12 shrink-0 items-center justify-center rounded-lg',
                    module.color
                  )}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {module.description}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Links */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Link
          to="/assessment"
          className="block p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-950 dark:to-primary-900 hover:shadow-lg transition-all duration-200"
        >
          <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
            Test Your Knowledge
          </h3>
          <p className="text-primary-700 dark:text-primary-300">
            Take assessments to evaluate your understanding (session-only, no tracking)
          </p>
        </Link>
        <Link
          to="/settings"
          className="block p-6 rounded-xl border-2 border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 hover:shadow-lg transition-all duration-200"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Settings & Info
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your experience, view disclaimers, and learn about the app
          </p>
        </Link>
      </div>
    </div>
  );
}
