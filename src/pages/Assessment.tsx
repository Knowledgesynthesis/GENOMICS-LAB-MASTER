import { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  module: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Which mutation type is characterized by a single base pair substitution that creates a premature stop codon?',
    options: ['Missense', 'Nonsense', 'Silent', 'Frameshift'],
    correctAnswer: 1,
    explanation: 'A nonsense mutation is a single nucleotide substitution that creates a stop codon (e.g., UAA, UAG, UGA), leading to premature termination of translation.',
    module: 'Foundations'
  },
  {
    id: 2,
    question: 'What is the typical mean coverage threshold for germline variant calling in clinical NGS?',
    options: ['≥10x', '≥30x', '≥100x', '≥500x'],
    correctAnswer: 1,
    explanation: 'Germline NGS typically requires ≥30x mean coverage to confidently call heterozygous variants. Somatic testing requires much higher coverage (250-500x) to detect low VAF variants.',
    module: 'NGS'
  },
  {
    id: 3,
    question: 'A variant has a VAF of approximately 50% in a tumor sample. Which of the following is most consistent with this finding?',
    options: [
      'Definitely a germline variant',
      'Definitely a somatic variant',
      'Could be either germline heterozygous or clonal somatic - context matters',
      'Indicates a homozygous deletion'
    ],
    correctAnswer: 2,
    explanation: 'VAF ~50% can represent either a heterozygous germline variant OR a clonal somatic variant in a high-purity tumor sample. Clinical context, gene function, and comparison to matched normal tissue help distinguish these scenarios.',
    module: 'Somatic'
  },
  {
    id: 4,
    question: 'Which ACMG variant classification should NOT be used for clinical decision-making without additional evidence?',
    options: ['Pathogenic', 'Likely Pathogenic', 'Variant of Uncertain Significance', 'Likely Benign'],
    correctAnswer: 2,
    explanation: 'Variants of Uncertain Significance (VUS) have insufficient evidence for classification as pathogenic or benign and should not be used for clinical decisions. Only P and LP variants have sufficient evidence for clinical actionability.',
    module: 'Interpretation'
  },
  {
    id: 5,
    question: 'What does a log2 ratio of approximately -1 indicate on a chromosomal microarray?',
    options: ['Normal copy number (2 copies)', 'Heterozygous deletion (1 copy)', 'Duplication (3 copies)', 'Homozygous deletion (0 copies)'],
    correctAnswer: 1,
    explanation: 'Log2(-1) = -1 represents a 2-fold decrease, consistent with heterozygous deletion (1 copy instead of 2). Log2(0) = normal, Log2(+0.58) = duplication, Log2 << -1 = homozygous deletion.',
    module: 'Microarray'
  },
  {
    id: 6,
    question: 'Which chromosomal abnormality is considered balanced?',
    options: ['Trisomy 21', 'Deletion 5q', 'Reciprocal translocation t(9;22)', 'Duplication of chromosome 7p'],
    correctAnswer: 2,
    explanation: 'Balanced rearrangements have no net gain or loss of genetic material. Reciprocal translocations are balanced. Trisomies, deletions, and duplications are unbalanced.',
    module: 'Cytogenetics'
  },
  {
    id: 7,
    question: 'In the NGS bioinformatics pipeline, what file format represents aligned reads mapped to a reference genome?',
    options: ['FASTQ', 'BAM', 'VCF', 'BED'],
    correctAnswer: 1,
    explanation: 'BAM (Binary Alignment Map) files contain aligned sequence reads. FASTQ contains raw sequences with quality scores, VCF contains variant calls, and BED defines genomic regions.',
    module: 'NGS'
  },
  {
    id: 8,
    question: 'Which of the following is a key difference between oncogenes and tumor suppressors?',
    options: [
      'Oncogenes require loss-of-function mutations; tumor suppressors require gain-of-function',
      'Oncogenes require gain-of-function mutations; tumor suppressors require loss-of-function',
      'Both require gain-of-function mutations',
      'Both require loss-of-function mutations'
    ],
    correctAnswer: 1,
    explanation: 'Oncogenes promote cell growth and require activating (gain-of-function) mutations. Tumor suppressors inhibit growth and require inactivating (loss-of-function) mutations, often requiring two hits per Knudson\'s hypothesis.',
    module: 'Somatic'
  },
  {
    id: 9,
    question: 'What is the inheritance pattern for X-linked recessive disorders?',
    options: [
      'Primarily affects females; male-to-male transmission possible',
      'Primarily affects males; no male-to-male transmission',
      'Affects males and females equally',
      'Only affects males; never found in females'
    ],
    correctAnswer: 1,
    explanation: 'X-linked recessive disorders primarily affect males (who have one X chromosome). Affected males cannot transmit the condition to sons (who receive the Y chromosome). Carrier females are typically unaffected.',
    module: 'Germline'
  },
  {
    id: 10,
    question: 'Which quality metric assesses the consistency of repeated measurements?',
    options: ['Accuracy', 'Precision', 'Sensitivity', 'Specificity'],
    correctAnswer: 1,
    explanation: 'Precision (reproducibility) measures consistency of repeated measurements. Accuracy measures closeness to true value. Sensitivity is the true positive rate. Specificity is the true negative rate.',
    module: 'Validation'
  },
  {
    id: 11,
    question: 'Which section of a genomic report describes what the test does NOT detect?',
    options: ['Interpretation', 'Methodology', 'Limitations', 'Result Summary'],
    correctAnswer: 2,
    explanation: 'The Limitations section explicitly states what the test cannot detect (e.g., balanced rearrangements, large CNVs if using targeted panel, variants outside target regions), coverage gaps, and potential for false negatives.',
    module: 'Reporting'
  },
  {
    id: 12,
    question: 'What type of assay uses fluorescent probes that bind to specific DNA sequences on chromosomes?',
    options: ['PCR', 'Sanger sequencing', 'FISH', 'Microarray'],
    correctAnswer: 2,
    explanation: 'FISH (Fluorescence In Situ Hybridization) uses fluorescent probes to visualize specific DNA sequences on chromosomes, allowing detection of aneuploidies, deletions, duplications, and rearrangements.',
    module: 'Assays'
  },
  {
    id: 13,
    question: 'Which evidence type provides the strongest support for pathogenicity of a de novo variant in a dominant disorder?',
    options: ['Computational prediction', 'Population frequency', 'De novo occurrence', 'Segregation analysis'],
    correctAnswer: 2,
    explanation: 'De novo occurrence in an affected individual (absent in unaffected parents) is very strong evidence for pathogenicity in dominant disorders, as specified in ACMG guidelines (PS2/PM6 criteria).',
    module: 'Interpretation'
  },
  {
    id: 14,
    question: 'At which step in the NGS wet lab workflow are universal adapter sequences added to DNA fragments?',
    options: ['Fragmentation', 'Adapter ligation', 'Amplification', 'Sequencing'],
    correctAnswer: 1,
    explanation: 'Adapter ligation is the step where universal sequences are added to both ends of DNA fragments. These adapters enable amplification, capture on the flow cell, and sequencing primer binding.',
    module: 'NGS'
  },
  {
    id: 15,
    question: 'Clonal hematopoiesis (CH) mutations most commonly involve which genes?',
    options: ['BRCA1, BRCA2, TP53', 'KRAS, BRAF, EGFR', 'DNMT3A, TET2, ASXL1', 'BCR, ABL1, PML'],
    correctAnswer: 2,
    explanation: 'Clonal hematopoiesis of indeterminate potential (CHIP) commonly involves epigenetic regulators like DNMT3A, TET2, and ASXL1. These age-related somatic mutations can confound tumor testing if detected in blood.',
    module: 'Somatic'
  }
];

export default function Assessment() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (index: number) => {
    if (!showExplanation) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowExplanation(true);
    setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Quiz Complete!
          </h1>
          <div className="mb-6">
            <div className="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {percentage}%
            </div>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              You answered {score} out of {questions.length} questions correctly
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
            <p className="text-blue-900 dark:text-blue-300 mb-2">
              <strong>Session-Only Results</strong>
            </p>
            <p className="text-sm text-blue-800 dark:text-blue-400">
              This score is for your reference only and is not saved. Feel free to retake the
              quiz to reinforce your learning!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              <RotateCcw className="h-5 w-5 mr-2" />
              Retake Quiz
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        to="/"
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <div className="bg-white dark:bg-gray-950 rounded-xl border-2 border-gray-200 dark:border-gray-800 p-6 md:p-8">
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Module: {currentQuestion.module}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
            <div
              className="bg-primary-600 dark:bg-primary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === currentQuestion.correctAnswer;
            const showCorrect = showExplanation && isCorrect;
            const showIncorrect = showExplanation && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                className={cn(
                  'w-full text-left p-4 rounded-lg border-2 transition-all duration-200',
                  !showExplanation && !isSelected && 'border-gray-200 dark:border-gray-800 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-gray-50 dark:hover:bg-gray-900',
                  !showExplanation && isSelected && 'border-primary-500 bg-primary-50 dark:bg-primary-900/20',
                  showCorrect && 'border-green-500 bg-green-50 dark:bg-green-900/20',
                  showIncorrect && 'border-red-500 bg-red-50 dark:bg-red-900/20',
                  showExplanation && !isCorrect && !isSelected && 'border-gray-200 dark:border-gray-800 opacity-50'
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">{option}</span>
                  {showCorrect && <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />}
                  {showIncorrect && <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={cn(
            'rounded-lg p-4 mb-6',
            selectedAnswer === currentQuestion.correctAnswer
              ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
              : 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
          )}>
            <h3 className={cn(
              'font-semibold mb-2',
              selectedAnswer === currentQuestion.correctAnswer
                ? 'text-green-900 dark:text-green-300'
                : 'text-blue-900 dark:text-blue-300'
            )}>
              {selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Explanation'}
            </h3>
            <p className={cn(
              'text-sm',
              selectedAnswer === currentQuestion.correctAnswer
                ? 'text-green-800 dark:text-green-300'
                : 'text-blue-800 dark:text-blue-300'
            )}>
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Score: {score}/{answeredQuestions.length}
          </div>
          <div className="flex gap-3">
            {!showExplanation ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
              >
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
        <p className="text-sm text-yellow-800 dark:text-yellow-300">
          <strong>Note:</strong> Quiz results are session-only and are not saved or tracked.
          This assessment is for educational purposes only.
        </p>
      </div>
    </div>
  );
}
