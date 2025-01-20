// src/components/QuizPage.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/useQuiz';
import Timer from './timer';
import QuestionPanel from './questionPanel';

export default function QuizPage() {
    const navigate = useNavigate();
    const { email, setQuestions, timeRemaining } = useQuiz();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Utility function to decode all HTML entities in both the questions and answers.
    function decodeHTMLEntities(text) {
        const textarea = document.createElement('textarea');
        textarea.innerHTML = text;
        return textarea.value;
    }

    useEffect(() => {
        if (!email) {
            navigate('/');
            return;
        }

        const fetchQuestions = async () => {
            try {
                const response = await fetch('https://opentdb.com/api.php?amount=15');
                const data = await response.json();

                if (data.results) {
                    const formattedQuestions = data.results.map((q, index) => ({
                        id: index + 1,
                        question: decodeHTMLEntities(q.question),
                        correct_answer: decodeHTMLEntities(q.correct_answer),
                        choices: q.incorrect_answers
                            .map(answer => decodeHTMLEntities(answer))
                            .concat(decodeHTMLEntities(q.correct_answer))
                            .sort(() => Math.random() - 0.5),
                    }));
                    setQuestions(formattedQuestions);
                }
            } catch (err) {
                setError(`Error: ${err} Failed to load questions. Please try again.`);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [email, navigate, setQuestions]);

    useEffect(() => {
        if (timeRemaining === 0) {
            navigate('/report');
        }
    }, [timeRemaining, navigate]);

    if (loading) {
        return <div className="text-center py-8">Loading questions...</div>;
    }

    if (error) {
        return <div className="text-center py-8 text-red-600">{error}</div>;
    }

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-b-xl shadow-md overflow-hidden">
            <div className="p-6">
                <Timer />
                <QuestionPanel />
            </div>
        </div>
    );
}