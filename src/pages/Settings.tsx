import { Sun, Moon, Info, AlertTriangle } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';
import { cn } from '@/lib/utils';

export default function Settings() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Settings</h1>

      <div className="space-y-6">
        {/* Theme Toggle */}
        <div className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Sun className="h-5 w-5 mr-2" />
            Appearance
          </h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-900 dark:text-white font-medium">Theme</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Switch between light and dark mode
              </p>
            </div>
            <button
              onClick={toggleTheme}
              className={cn(
                'relative inline-flex h-12 w-24 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950',
                theme === 'dark' ? 'bg-primary-600' : 'bg-gray-300'
              )}
            >
              <span
                className={cn(
                  'inline-flex h-10 w-10 transform items-center justify-center rounded-full bg-white transition-transform',
                  theme === 'dark' ? 'translate-x-12' : 'translate-x-1'
                )}
              >
                {theme === 'dark' ? (
                  <Moon className="h-5 w-5 text-primary-600" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-600" />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Info className="h-5 w-5 mr-2" />
            About Genomics Lab Master
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              <strong className="text-gray-900 dark:text-white">Genomics Lab Master</strong> is
              a comprehensive educational platform designed for pathology residents and fellows
              learning Clinical Laboratory Genetics and Genomic Diagnostics.
            </p>
            <p>
              This mobile-first, offline-capable application covers the full spectrum of topics
              from molecular biology fundamentals to advanced variant interpretation, quality
              control, and laboratory reporting.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  11 Comprehensive Modules
                </h3>
                <p className="text-sm">
                  From molecular foundations to integrated genomic cases
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Interactive Learning
                </h3>
                <p className="text-sm">Engage with synthetic cases and real-world scenarios</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Session-Only Assessments
                </h3>
                <p className="text-sm">Test your knowledge without data tracking</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Offline Support
                </h3>
                <p className="text-sm">Learn anywhere, anytime, even without internet</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm">
                <strong className="text-gray-900 dark:text-white">Version:</strong> 1.0.0
              </p>
              <p className="text-sm">
                <strong className="text-gray-900 dark:text-white">Target Audience:</strong>{' '}
                PGY1-4 Pathology Residents, Molecular Pathology Fellows
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 p-6">
          <h2 className="text-xl font-semibold text-yellow-900 dark:text-yellow-400 mb-4 flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2" />
            Important Disclaimers
          </h2>
          <div className="space-y-4 text-yellow-800 dark:text-yellow-300">
            <div className="bg-white dark:bg-yellow-950/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Educational Use Only</h3>
              <p className="text-sm">
                This application is designed exclusively for educational purposes. It is NOT
                intended for clinical, diagnostic, or therapeutic use. Do not use this
                application to make clinical decisions or provide patient care.
              </p>
            </div>
            <div className="bg-white dark:bg-yellow-950/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Synthetic Data</h3>
              <p className="text-sm">
                All examples, cases, and data presented in this application are entirely
                synthetic and non-identifiable. They do not represent real patients or clinical
                scenarios.
              </p>
            </div>
            <div className="bg-white dark:bg-yellow-950/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2">No Data Tracking</h3>
              <p className="text-sm">
                This application does not track, store, or transmit any personal data, assessment
                scores, or usage information. All quiz results are session-only and are not
                saved.
              </p>
            </div>
            <div className="bg-white dark:bg-yellow-950/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2">No Clinical Advice</h3>
              <p className="text-sm">
                This application does not provide clinical advice, treatment recommendations, or
                diagnostic guidance. For clinical questions, please consult with qualified
                healthcare professionals and refer to current clinical practice guidelines.
              </p>
            </div>
            <div className="bg-white dark:bg-yellow-950/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Content Accuracy</h3>
              <p className="text-sm">
                While we strive for accuracy in all educational content, this application should
                be used as a supplementary learning tool. Always verify information against
                authoritative sources such as peer-reviewed literature, ACMG/AMP guidelines, and
                standard pathology textbooks.
              </p>
            </div>
            <div className="bg-white dark:bg-yellow-950/30 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Accessibility</h3>
              <p className="text-sm">
                This application is designed to meet WCAG 2.2 AA accessibility standards. If you
                encounter any accessibility issues, please consult with your institution's
                accessibility resources.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Privacy Notice
          </h2>
          <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
            <p>
              Genomics Lab Master is committed to protecting your privacy. This application:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Does not collect any personal information</li>
              <li>Does not track your progress or assessment scores</li>
              <li>Does not use cookies for tracking purposes</li>
              <li>Stores only your theme preference locally on your device</li>
              <li>Does not transmit any data to external servers</li>
              <li>Works completely offline once installed</li>
            </ul>
            <p className="mt-4">
              Your learning experience is entirely private and under your control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
