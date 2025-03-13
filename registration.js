let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

function validateForm() {

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();


    let errorMessages = document.querySelectorAll(".error-message");


    errorMessages.forEach(msg => msg.textContent = "");

    let isValid = true;


    if (username === "") {
        setError("username", "Username is required");
        isValid = false;
    }


    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        setError("email", "Enter a valid email address");
        isValid = false;
    }


    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    if (!passwordRegex.test(password)) {
        setError("password", "Password must be 8+ chars with uppercase, lowercase, number, & special character");
        isValid = false;
    }


    if (password !== confirmPassword) {
        setError("confirm-password", "Passwords do not match");
        isValid = false;
    }


    if (isValid) {
        alert("Sign up successful! ✅");
 
    }
}


function setError(id, message) {
    document.getElementById(id).nextElementSibling.textContent = message;
}
