document.addEventListener('DOMContentLoaded', () => {
    const answer1 = document.getElementById('answer1');
    const answer2 = document.getElementById('answer2');
    const submitButton = document.getElementById('submit-button');
    const typingText = document.getElementById('typing-text');
    
    const correctAnswer1 = 'haan';
    const correctAnswer2 = 'hmm';

    // Function to check if both answers are correct
    function checkAnswers() {
        if (answer1.value === correctAnswer1 && answer2.value === correctAnswer2) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    answer1.addEventListener('input', checkAnswers);
    answer2.addEventListener('input', checkAnswers);

    // Typewriting effect
    const text = 'Fill in the blanks';
    let index = 0;
    
    function typeText() {
        if (index < text.length) {
            typingText.textContent += text[index];
            index++;
            setTimeout(typeText, 100);
        }
    }
    
    typeText();

    // Redirect to pg2.html on submit
    submitButton.addEventListener('click', () => {
        window.location.href = 'pg2.html';
    });

    // Disable inspect element (in a very basic way)
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && (e.key === 'I' || e.key === 'U' || e.key === 'J')) {
            e.preventDefault();
        }
    });
});
