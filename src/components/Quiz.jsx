import { useState } from 'react';
import { calculateQuestionXp } from '../utils/levelUtils';

function Quiz({ questions, playerProgress, onEarnXp, onNewQuiz }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [correctStreak, setCorrectStreak] = useState(0);
    const [lastXpEarned, setLastXpEarned] = useState(0);

    const currentQuestion = questions[currentIndex];
    const isCorrect = 
        selectedAnswer === currentQuestion.correctAnswer;

    function handleAnswer(option) {
    if (selectedAnswer !== null) {
            return;
        }

        setSelectedAnswer(option);

        if (option === currentQuestion.correctAnswer) {
            const nextStreak = correctStreak + 1;
            const earnedXp = calculateQuestionXp(nextStreak);

            setScore((currentScore) => currentScore + 1);
            setCorrectStreak(nextStreak);
            setLastXpEarned(earnedXp);
            onEarnXp(earnedXp);
        } else {
            setCorrectStreak(0);
            setLastXpEarned(0);
        }
    }

    function handleNextQuestion() {
        const isLastQuestion = currentIndex === questions.length - 1;
        if (isLastQuestion) {
            setFinished(true);
            return;
        }
        setCurrentIndex((currentIndex) => currentIndex + 1);
        setSelectedAnswer(null);okay 
    }

    //Old local function to restart quiz without resetting the score and current index
    function restartQuiz() {
        setCurrentIndex(0);
        setSelectedAnswer(null);
        setScore(0);
        setFinished(false);
    }

    if (finished) {
        return (
            <main className="quiz-screen">
                <section className="quiz-card results-card">
                    <p className="eyebrow">Practice Test Complete</p>
                    <h1>
                        you scored {score} out of {questions.length}
                    </h1>

                    <p className="results-percentage">
                        {Math.round((score / questions.length) * 100)}%
                    </p>

                    <button
                        className="start-button"
                        type="button"
                        onClick={onNewQuiz}
                    >
                        Retake Practice Test
                    </button>
                </section>
            </main>
        );
    }
    
    return(
        <main className="quiz-screen">
            <section className="quiz-card">

                <div className="player-level">
                    <div className="player-level-heading">
                        <strong>
                        Level {playerProgress.level}
                        </strong>

                        <span>{playerProgress.title}</span>
                    </div>

                    <div className="level-progress-track">
                        <div
                        className="level-progress-fill"
                        style={{
                            width: `${playerProgress.progressPercentage}%`,
                        }}
                        />
                    </div>

                    <small>
                        {playerProgress.isMaxLevel
                        ? 'Maximum level reached'
                        : `${playerProgress.currentLevelXp} / ${playerProgress.xpNeeded} EXP`}
                    </small>
                    </div>

                <div className="quiz-header">
                    <p className="question-number">
                        Question {currentIndex + 1} of {questions.length}
                    </p>

                    <p className="question-category">
                        Category: {currentQuestion.category}
                    </p>
                </div>

                <h1>{currentQuestion.question}</h1>

                <div className="answer-list">
                    {currentQuestion.options.map((option) => {
                        let answerClass = 'answer-button';

                        if (selectedAnswer !== null) {
                            if (option === currentQuestion.correctAnswer) {
                                answerClass += ' correct';
                            } else if (option === selectedAnswer) {
                                answerClass += ' incorrect';
                            }
                        }
                        
                        return (
                            <button
                                className={answerClass}
                                key={option}
                                type="button"
                                onClick={() => handleAnswer(option)}
                                disabled={selectedAnswer !== null}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>

                {selectedAnswer !== null && (
                    <div
                        className={`answer-feedback ${
                            isCorrect ? 'correct-feedback' : 'incorrect-feedback'
                        }`}
                    >
                        <h2>{isCorrect ? 'Correct!' : 'Incorrect!'}</h2>

                        {isCorrect && (
                            <p className="xp-earned">
                                +{lastXpEarned} EXP
                                {correctStreak > 1 && (
                                <span> · {correctStreak} answer streak!</span>
                                )}
                            </p>
                        )}

                        {!isCorrect && (
                            <p>
                                Correct answer:{' '}
                                <strong>{currentQuestion.correctAnswer}</strong>
                            </p>
                        )}

                        <p>{currentQuestion.explanation}</p>

                        <button
                            className="next-button"
                            type="button"
                            onClick={handleNextQuestion}
                        >
                            {currentIndex === questions.length - 1
                                ? 'Finish Quiz'
                                : 'Next Question'}
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}

export default Quiz;