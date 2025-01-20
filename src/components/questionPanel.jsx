// src/components/QuestionPanel.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/useQuiz';

export default function QuestionPanel() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { questions, answers, setAnswers, visitedQuestions, setVisitedQuestions } = useQuiz();
    const navigate = useNavigate();

    const handleAnswer = (answer) => {
        setAnswers((prev) => ({ ...prev, [currentQuestion]: answer }));
        setVisitedQuestions((prev) => new Set([...prev, currentQuestion]));
    };

    const navigateToQuestion = (index) => {
        setCurrentQuestion(index);
    };

    const submitQuiz = () => {
        navigate('/report');
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-around gap-2 mb-4">
                {questions.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => navigateToQuestion(index)}
                        className={`w-10 h-10 rounded-full 
                            ${visitedQuestions.has(index)
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-200 text-gray-700'
                            }
                            ${visitedQuestions.has(index)
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-200 text-gray-700'
                            }
                            ${currentQuestion === index
                                ? 'ring-2 ring-indigo-600 ring-offset-2'
                                : ''
                            }
                            flex items-center justify-center transition-all duration-200
                            `}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
                <span className="text-xl font-semibold mb-4">
                    Question {currentQuestion + 1} of {questions.length}
                </span>
                <p className="mb-4">{questions[currentQuestion].question}</p>
                <div className="space-y-2">
                    {questions[currentQuestion].choices.map((choice, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(choice)}
                            className={`w-full p-3 text-left rounded-lg ${answers[currentQuestion] === choice
                                ? 'bg-indigo-600 text-white'
                                : 'bg-white border border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            {choice}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-between">
                <button
                    onClick={() => navigateToQuestion(currentQuestion - 1)}
                    disabled={currentQuestion === 0}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
                >
                    Previous
                </button>
                {currentQuestion === questions.length - 1 ? (
                    <button
                        onClick={submitQuiz}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        Submit Quiz
                    </button>
                ) : (
                    <button
                        onClick={() => navigateToQuestion(currentQuestion + 1)}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
}