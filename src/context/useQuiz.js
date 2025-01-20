// src/context/useQuiz.js
import { useContext } from 'react';
import { QuizContext } from './quizContext.jsx';

export function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error('useQuiz must be used within a QuizProvider');
    }
    return context;
}