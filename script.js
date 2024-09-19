// JS for Login Form Validation
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page reload

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    alert('Login successful!');
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// JS for Document Buttons
const documentButtons = document.querySelectorAll('.box-btn');

documentButtons.forEach(button => {
    button.addEventListener('click', function() {
        const documentType = this.parentElement.querySelector('h3').textContent;
        alert(`You clicked on: ${documentType}`);
    });
});

// JS for Face Recognition Mock
document.getElementById('start-recognition').addEventListener('click', function() {
    const faceStatus = document.getElementById('face-status');
    faceStatus.textContent = 'Starting face recognition...';

    // Simulate a delay for facial recognition
    setTimeout(() => {
        const isRecognized = Math.random() > 0.5; // Random mock success/failure

        if (isRecognized) {
            faceStatus.textContent = 'Face recognized successfully!';
            faceStatus.style.color = 'green';
        } else {
            faceStatus.textContent = 'Face recognition failed. Please try again.';
            faceStatus.style.color = 'red';
        }
    }, 3000);
});
