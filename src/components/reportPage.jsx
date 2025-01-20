// src/components/ReportPage.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/useQuiz';

export default function ReportPage() {
    const navigate = useNavigate();
    const { email, questions, answers } = useQuiz();

    useEffect(() => {
        if (!email) {
            navigate('/');
        }
    }, [email, navigate]);

    const calculateScore = () => {
        let correct = 0;
        questions.forEach((question, index) => {
            if (answers[index] === question.correct_answer) {
                correct += 1;
            }
        });
        return correct;
    };

    return (
        <div className="max-w-4xl h-screen mx-auto bg-white shadow-md overflow-auto p-8">
            <span className="text-2xl font-bold mb-6 text-center">Quiz Results</span>
            <div className="mb-6">
                <p className="text-lg">
                    Score: {calculateScore()} out of {questions.length}
                </p>
                <p className="text-gray-600">Email: {email}</p>
            </div>

            <div className="space-y-6">
                {questions.map((question, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg ${answers[index] === question.correct_answer
                            ? 'bg-green-50'
                            : 'bg-red-50'
                            }`}
                    >
                        <span className="font-semibold">Question {index + 1}</span>
                        <p className="mb-2">{question.question}</p>
                        <p className="text-gray-600">Your answer: {answers[index] || 'Not answered'}</p>
                        <p className="text-gray-600">Correct answer: {question.correct_answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}