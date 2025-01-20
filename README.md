# Quiz Application

A quiz application built with React and Tailwind CSS that allows users to take timed quizzes with multiple-choice questions fetched from the Open Trivia Database API.

## Overview

This quiz application was developed as part of the CausalFunnel Software Engineer Intern assessment. The application implements a complete quiz-taking experience with features like email-based user identification, a 30-minute timer, question navigation, and detailed result reporting.

### Key Features

- User email input
- Randomized questions from Open Trivia DB
- 30-minute countdown timer
- Question navigation panel
- Progress tracking
- Detailed results page with score analysis
- Responsive design for all device sizes

## Technology Stack

- React.js (with Vite)
- Tailwind CSS for styling
- React Router for navigation
- Context API for state management

## Installation Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd quiz-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── StartPage.jsx
│   ├── QuizPage.jsx
│   ├── QuestionPanel.jsx
│   ├── Timer.jsx
│   └── ReportPage.jsx
├── context/
│   └── QuizContext.jsx
├── App.jsx
└── main.jsx
```

## Assumptions Made

1. Users will complete the quiz in a single session.
2. Browser localStorage is available for state persistence i.e. users are accessing the application from modern web browsers.

## Technical Challenges and Solutions

1. To be added

## Future Improvements

1. Email verification and access to Quiz using a One Time Password
2. Implementing different categories
3. Including question difficulty levels
4. Adding animation effects for better user experience

## License

MIT License - feel free to use this project for your own purposes.
