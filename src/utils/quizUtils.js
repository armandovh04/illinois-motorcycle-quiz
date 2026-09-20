export function shuffleArray(items) {
  const shuffledItems = [...items];

  for (
    let currentIndex = shuffledItems.length - 1;
    currentIndex > 0;
    currentIndex--
  ) {
    const randomIndex = Math.floor(
      Math.random() * (currentIndex + 1)
    );

    [shuffledItems[currentIndex], shuffledItems[randomIndex]] = [
      shuffledItems[randomIndex],
      shuffledItems[currentIndex],
    ];
  }

  return shuffledItems;
}

function shuffleQuestionOptions(questions) {
  return questions.map((question) => ({
    ...question,
    options: shuffleArray(question.options),
  }));
}

export function createRandomQuiz(questionBank, questionCount = 15) {
  const shuffledQuestions = shuffleArray(questionBank);
  const selectedQuestions = shuffledQuestions.slice(0, questionCount);

  return shuffleQuestionOptions(selectedQuestions);
}

export function createCategoryQuiz(questionBank, selectedCategory) {
  const categoryQuestions = questionBank.filter(
    (question) => question.category === selectedCategory
  );

  const shuffledQuestions = shuffleArray(categoryQuestions);

  return shuffleQuestionOptions(shuffledQuestions);
}

export function createFullQuiz(questionBank) {
  const shuffledQuestions = shuffleArray(questionBank);

  return shuffleQuestionOptions(shuffledQuestions);
}

export function getCategories(questionBank) {
  const categoryCounts = {};

  questionBank.forEach((question) => {
    const category = question.category;

    categoryCounts[category] =
      (categoryCounts[category] || 0) + 1;
  });

  return Object.entries(categoryCounts)
    .map(([name, count]) => ({
      name,
      count,
    }))
    .sort((firstCategory, secondCategory) =>
      firstCategory.name.localeCompare(secondCategory.name)
    );
}