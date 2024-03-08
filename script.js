// script.js
function submitForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulate AJAX request to the backend
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'success.html'; // Redirect to success page
        } else {
            document.getElementById('error-message').innerText = data.message;
        }
    })
    .catch(error => console.error('Error:', error));
}
