function validatePassword() {
    var password = document.getElementById('passwordInput').value;

    // Regular expressions for password requirements
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var digitRegex = /\d/;
    var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    var invalidPasswordRegex = /password/i;

    // Check password against requirements
    var isValid = (
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password) &&
        digitRegex.test(password) &&
        specialCharRegex.test(password) &&
        !invalidPasswordRegex.test(password)
    );

    // Display appropriate message in popup
    if (isValid) {
        // alert("Password is valid. Redirecting to another link...");
        window.location.href = 'success.html'
        
        // Add code to redirect to another link after validation
        // Example: window.location.href = 'https://example.com';
    } else {
        alert("Password is missing a requirement. Please check and try again.         (Also your password can't be password nerd)");
    }
}
