import { useState } from 'react';

function StartScreen({ categories, playerProgress, onStartQuiz }) {
  const [selectedCategory, setSelectedCategory] = useState(
    categories[0]?.name || ''
  );

  return (
    <main className="start-screen">
      <section className="start-card">
        <p className="eyebrow">
          Illinois Permit Preparation
        </p>

        <h1>Illinois Motorcycle Practice Quiz</h1>

        <p className="description">
          Choose a practice mode and prepare for the Illinois
          motorcycle permit written exam.
        </p>

        <div className="player-summary">
            <p>Current Rider Level</p>

            <h2>
                Level {playerProgress.level}
            </h2>

            <strong>{playerProgress.title}</strong>

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
                : `${playerProgress.currentLevelXp} / ${playerProgress.xpNeeded} EXP to next level`}
            </small>
            </div>

        <div className="quiz-details">
          <div>
            <strong>627</strong>
            <span>Total Questions</span>
          </div>

          <div>
            <strong>70</strong>
            <span>Categories</span>
          </div>

          <div>
            <strong>2026</strong>
            <span>Study Material</span>
          </div>
        </div>

        <div className="quiz-modes">
          <article className="mode-card">
            <div>
              <h2>Quick Test</h2>
              <p>
                Answer 15 randomly selected questions from
                the complete question bank.
              </p>
            </div>

            <button
              className="start-button"
              type="button"
              onClick={() => onStartQuiz('random')}
            >
              Start 15-Question Test
            </button>
          </article>

          <article className="mode-card">
            <div>
              <h2>Study by Category</h2>
              <p>
                Practice every available question from one
                selected topic.
              </p>
            </div>

            <label htmlFor="category-select">
              Select a category
            </label>

            <select
              id="category-select"
              className="category-select"
              value={selectedCategory}
              onChange={(event) =>
                setSelectedCategory(event.target.value)
              }
            >
              {categories.map((category) => (
                <option
                  key={category.name}
                  value={category.name}
                >
                  {category.name} ({category.count})
                </option>
              ))}
            </select>

            <button
              className="start-button"
              type="button"
              disabled={!selectedCategory}
              onClick={() =>
                onStartQuiz('category', selectedCategory)
              }
            >
              Study Selected Category
            </button>
          </article>

          <article className="mode-card">
            <div>
              <h2>Complete Question Bank</h2>
              <p>
                Attempt all 627 questions in randomized
                order. Progress currently lasts only until
                the page is closed or refreshed.
              </p>
            </div>

            <button
              className="start-button"
              type="button"
              onClick={() => onStartQuiz('complete')}
            >
              Start All Questions
            </button>
          </article>
        </div>

        <p className="disclaimer">
          This independent practice tool is not affiliated
          with the Illinois Secretary of State. Refer to the
          official Illinois Motorcycle Operator Manual for
          current information.
        </p>
      </section>
    </main>
  );
}

export default StartScreen;