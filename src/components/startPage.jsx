// src/components/StartPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/useQuiz';

export default function StartPage() {
    const [emailError, setEmailError] = useState('');
    const { setEmail } = useQuiz();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setEmailError('Please enter a valid email address');
            return;
        }

        setEmail(email);
        navigate('/quiz');
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-b-xl shadow-md overflow-hidden p-8">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Welcome to the Quiz</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Enter your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Email Address'
                        className="mt-1 block w-full h-10 rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pl-2"
                        required
                    />
                    {emailError && <p className="mt-1 text-sm text-red-600">{emailError}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Start Quiz
                </button>
            </form>
        </div>
    );
}