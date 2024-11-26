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
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

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
    `;
    questionContainer.innerHTML = questionHTML;

    // Add event listeners to update scores
    document.querySelectorAll(`input[name="question${index + 1}"]`).forEach(input => {
        input.addEventListener('change', function () {
            scores[index] = parseInt(this.value);
        });
    });
}

function updateButtons() {
    prevButton.disabled = currentQuestionIndex === 0;
    nextButton.textContent = currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next';
}

prevButton.addEventListener('click', function () {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        updateButtons();
    }
});

nextButton.addEventListener('click', function () {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        updateButtons();
    } else {
        // Handle form submission
        alert('Form submitted!');
        console.log('Scores:', scores);
    }
});

// Initialize the first question
showQuestion(currentQuestionIndex);
updateButtons();