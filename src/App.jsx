// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './components/startPage';
import QuizPage from './components/quizPage';
import ReportPage from './components/reportPage';
import { QuizProvider } from './context/quizContext';

function App() {
  return (
    <QuizProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4">
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/report" element={<ReportPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QuizProvider>
  );
}

export default App;