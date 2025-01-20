// src/components/Timer.jsx
import { useEffect } from 'react';
import { useQuiz } from '../context/useQuiz';

export default function Timer() {
    const { timeRemaining, setTimeRemaining } = useQuiz();

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [setTimeRemaining]);

    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    return (
        <div className="text-center mb-6">
            <div className="text-2xl font-bold text-gray-800">
                Time Remaining: {minutes}:{seconds.toString().padStart(2, '0')}
            </div>
        </div>
    );
}