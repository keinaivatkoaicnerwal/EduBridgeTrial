function startTest() {
    document.getElementById("home-section").style.display = "none";
    document.getElementById("assessment-section").style.display = "block";
}

function submitTest() {
    let score = 0;
    const totalQuestions = 5;

    // Check answers for all 5 questions
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');

    // Validation: make sure all questions are answered
    if (!q1 || !q2 || !q3 || !q4 || !q5) {
        alert("Please answer all questions before submitting.");
        return;
    }

    // Calculate total correct answers
    if (q1.value === "correct") score++;
    if (q2.value === "correct") score++;
    if (q3.value === "correct") score++;
    if (q4.value === "correct") score++;
    if (q5.value === "correct") score++;

    // Determine grade placement based on score out of 5
    let grade = 7;
    if (score >= 3 && score <= 4) grade = 8;
    if (score === 5) grade = 9;

    // Switch views
    document.getElementById("assessment-section").style.display = "none";
    document.getElementById("dashboard-section").style.display = "block";

    // Display grade and score result
    document.getElementById("grade-result-text").innerText = `Score: ${score}/${totalQuestions} — You have been placed in Grade ${grade}`;
    document.getElementById("grade-" + grade + "-content").style.display = "block";
}

// Open modal window for Video or Assignment
function openModal(itemTitle, type) {
    const modal = document.getElementById("modal-window");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");

    if (type === 'video') {
        title.innerText = "📹 Playing Video";
        description.innerText = "Now playing lesson: " + itemTitle;
    } else {
        title.innerText = "📝 Starting Assignment";
        description.innerText = "Opening worksheet for: " + itemTitle;
    }

    modal.style.display = "flex";
}

// Close modal window
function closeModal() {
    document.getElementById("modal-window").style.display = "none";
}