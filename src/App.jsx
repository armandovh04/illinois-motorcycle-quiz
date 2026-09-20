import { useEffect, useState } from 'react';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import questions from './data/questions';
import {
  createCategoryQuiz,
  createFullQuiz,
  createRandomQuiz,
  getCategories,
} from './utils/quizUtils';
import {
  calculateLevel,
  MAX_TOTAL_XP,
} from './utils/levelUtils';
import './App.css';

const categories = getCategories(questions);
const STORAGE_KEY = 'illinoisMotorcycleQuizXp';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [attemptId, setAttemptId] = useState(0);

  const [totalXp, setTotalXp] = useState(() => {
    const savedXp = Number(localStorage.getItem(STORAGE_KEY));

    if (!Number.isFinite(savedXp) || savedXp < 0) {
      return 0;
    }

    return Math.min(savedXp, MAX_TOTAL_XP);
  });

  const playerProgress = calculateLevel(totalXp);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(totalXp));
  }, [totalXp]);

  function awardXp(amount) {
    setTotalXp((currentXp) =>
      Math.min(currentXp + amount, MAX_TOTAL_XP)
    );
  }

  function startQuiz(mode, selectedCategory = '') {
    let generatedQuestions = [];

    if (mode === 'random') {
      generatedQuestions = createRandomQuiz(questions, 15);
    }

    if (mode === 'category') {
      generatedQuestions = createCategoryQuiz(
        questions,
        selectedCategory
      );
    }

    if (mode === 'complete') {
      generatedQuestions = createFullQuiz(questions);
    }

    if (generatedQuestions.length === 0) {
      return;
    }

    setQuizQuestions(generatedQuestions);
    setAttemptId((currentId) => currentId + 1);
    setQuizStarted(true);
  }

  if (quizStarted) {
    return (
      <Quiz
        key={attemptId}
        questions={quizQuestions}
        playerProgress={playerProgress}
        onEarnXp={awardXp}
        onNewQuiz={() => setQuizStarted(false)}
      />
    );
  }

  return (
    <StartScreen
      categories={categories}
      playerProgress={playerProgress}
      onStartQuiz={startQuiz}
    />
  );
}

export default App;