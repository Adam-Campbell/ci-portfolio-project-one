console.log("Hello from questionnaire.js");

const questions = [
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep, or sleeping too much?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?",
    "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?",
    "Trouble concentrating on things, such as reading the newspaper or watching television?",
    "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
    "Thoughts that you would be better off dead, or of hurting yourself in some way?"
];

let currentQuestionIndex = 0;
let scores = Array(questions.length).fill(null); // Initialize scores array with null values

const questionContainer = document.querySelector('.question-container');
const resultsContainer = document.querySelector('.results-container');
const introView = document.getElementById('intro-view');
const questionView = document.getElementById('question-view');
const resultsView = document.getElementById('results-view');
const beginButton = document.getElementById('begin-button');

beginButton.addEventListener('click', function () {
    introView.style.display = 'none';
    questionView.style.display = 'flex'; // Set display to flex
    showQuestion(currentQuestionIndex);
});

function showQuestion(index) {
    const score = scores[index];
    const questionHTML = `
        <div class="question" id="question-${index + 1}">
            <h5>${index + 1}. ${questions[index]}</h5>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="question${index + 1}" id="question${index + 1}-option0" value="0" ${score === 0 ? 'checked' : ''}>
                <label class="form-check-label" for="question${index + 1}-option0">Not at all</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="question${index + 1}" id="question${index + 1}-option1" value="1" ${score === 1 ? 'checked' : ''}>
                <label class="form-check-label" for="question${index + 1}-option1">Several days</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="question${index + 1}" id="question${index + 1}-option2" value="2" ${score === 2 ? 'checked' : ''}>
                <label class="form-check-label" for="question${index + 1}-option2">More than half the days</label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="question${index + 1}" id="question${index + 1}-option3" value="3" ${score === 3 ? 'checked' : ''}>
                <label class="form-check-label" for="question${index + 1}-option3">Nearly every day</label>
            </div>
        </div>
        <div class="navigation-buttons mt-4">
            <button type="button" class="btn btn-secondary" id="prev-button" ${index === 0 ? 'disabled' : ''}>Previous</button>
            <button type="button" class="btn btn-primary" id="next-button">${index === questions.length - 1 ? 'Submit' : 'Next'}</button>
        </div>
    `;
    questionContainer.innerHTML = questionHTML;

    // Add event listeners to update scores
    document.querySelectorAll(`input[name="question${index + 1}"]`).forEach(input => {
        input.addEventListener('change', function () {
            scores[index] = parseInt(this.value);
            updateButtons(); // Update buttons after changing the score
        });
    });

    // Add event listeners to navigation buttons
    document.getElementById('prev-button').addEventListener('click', function () {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
            updateButtons();
        }
    });

    document.getElementById('next-button').addEventListener('click', function () {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
            updateButtons();
        } else {
            // Show results
            showResults();
        }
    });

    updateButtons(); // Initial button state update
}

function updateButtons() {
    const nextButton = document.getElementById('next-button');
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.disabled = scores.includes(null); // Disable submit button if any scores are null
    } else {
        nextButton.disabled = false;
    }
}

function showResults() {
    const totalScore = scores.reduce((acc, score) => acc + (score !== null ? score : 0), 0);
    const lastQuestionScore = scores[scores.length - 1];

    const resultsHTML = `
        <div class="results">
            <h5>Your Total Score: ${totalScore}</h5>
            <p>Your score for the last question was ${lastQuestionScore === 0 ? '0' : lastQuestionScore}.</p>
            <button type="button" class="btn btn-primary" id="reset-button">Reset Questionnaire</button>
        </div>
    `;
    resultsContainer.innerHTML = resultsHTML;

    // Hide question view and show results view
    questionView.style.display = 'none';
    resultsView.style.display = 'flex';

    // Add event listener to reset button
    document.getElementById('reset-button').addEventListener('click', resetQuestionnaire);
}

function resetQuestionnaire() {
    scores.fill(null);
    currentQuestionIndex = 0;
    resultsView.style.display = 'none';
    introView.style.display = 'block';
}
