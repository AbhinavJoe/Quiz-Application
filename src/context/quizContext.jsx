// src/context/QuizContext.jsx
import { createContext, useState } from 'react';

const QuizContext = createContext();

// eslint-disable-next-line react/prop-types
export function QuizProvider({ children }) {
    const [email, setEmail] = useState('');
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [visitedQuestions, setVisitedQuestions] = useState(new Set());
    const [timeRemaining, setTimeRemaining] = useState(30 * 60);

    const value = {
        email,
        setEmail,
        questions,
        setQuestions,
        answers,
        setAnswers,
        visitedQuestions,
        setVisitedQuestions,
        timeRemaining,
        setTimeRemaining,
    };

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export { QuizContext };