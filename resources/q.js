import questions, { length } from 'project-react-quiz-two-boilerplate/resources/quizQuestion.json';

let currentQuestionIndex = 0;

// Event handler for previous button
function handlePreviousButtonClick() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
  }
}

// Event handler for next button
function handleNextButtonClick() {
  if (currentQuestionIndex < length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  }
}

// Function to display the current question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  // Update the UI with the current question
  // ...
}

// Event handler for quit button
function handleQuitButtonClick() {
  const confirmation = confirm('Are you sure you want to quit?');
}