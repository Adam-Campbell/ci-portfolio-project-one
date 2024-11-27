console.log("Hello from questionnaire.js");

const questions = [
    // PHQ-9 Questions
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep, or sleeping too much?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?",
    "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?",
    "Trouble concentrating on things, such as reading the newspaper or watching television?",
    "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
    "Thoughts that you would be better off dead, or of hurting yourself in some way?",
    // GAD-7 Questions
    "Feeling nervous, anxious, or on edge?",
    "Not being able to stop or control worrying?",
    "Worrying too much about different things?",
    "Trouble relaxing?",
    "Being so restless that it is hard to sit still?",
    "Becoming easily annoyed or irritable?",
    "Feeling afraid as if something awful might happen?"
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

function getPHQ9ResultMessage(score, sensitiveQuestionScore) {
    let message = "";
    if (score < 5) {
        message = "Your score suggests that you may not be experiencing depression, as determined by the PHQ-9 questionnaire. However, it may still be beneficial to speak with a mental health professional.";
    } else if (score < 10) {
        message = "Your score suggests that you may be experiencing mild depression. We recommend speaking with a mental health professional.";
    } else if (score < 15) {
        message = "Your score suggests that you may be experiencing moderate depression. We recommend speaking with a mental health professional.";
    } else if (score < 20) {
        message = "Your score suggests that you may be experiencing moderately severe depression. We recommend speaking with a mental health professional.";
    } else {
        message = "Your score suggests that you may be experiencing severe depression. We recommend speaking with a mental health professional.";
    }
    if (sensitiveQuestionScore > 0) {
        message += " You have also expressed thoughts of self harm. Please contact your GP immediately to discuss this.";
    }
    return message;
}

function getGAD7ResultMessage(score) {
    let message = "";
    if (score < 5) {
        message = "Your score suggests that you may not be experiencing anxiety, as determined by the GAD-7 questionnaire. However, it may still be beneficial to speak with a mental health professional.";
    } else if (score < 10) {
        message = "Your score suggests that you may be experiencing mild anxiety. We recommend speaking with a mental health professional.";
    } else if (score < 15) {
        message = "Your score suggests that you may be experiencing moderate anxiety. We recommend speaking with a mental health professional.";
    } else {
        message = "Your score suggests that you may be experiencing severe anxiety. We recommend speaking with a mental health professional.";
    }
    return message;
}

function showResults() {
    const totalScorePHQ9 = scores.slice(0, 9).reduce((acc, score) => acc + (score !== null ? score : 0), 0);
    const totalScoreGAD7 = scores.slice(9).reduce((acc, score) => acc + (score !== null ? score : 0), 0);
    const selfHarmScore = scores[8];

    const resultsHTML = `
        <div class="results">
            <h5>Your Total PHQ-9 Score: ${totalScorePHQ9}</h5>
            <p>${getPHQ9ResultMessage(totalScorePHQ9, selfHarmScore)}</p>
            <h5>Your Total GAD-7 Score: ${totalScoreGAD7}</h5>
            <p>${getGAD7ResultMessage(totalScoreGAD7)}</p>
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
    introView.style.display = 'flex';
}
