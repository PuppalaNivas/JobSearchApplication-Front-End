function generateVerificationCode() {
    var randomNumber = Math.floor(Math.random() * 1000000); // Generate a random 6-digit number
    document.getElementById("verificationCode").textContent = randomNumber;
}

function authenticate() {
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;
    var enteredCode = document.getElementById("enteredCode").value;
    var generatedCode = document.getElementById("verificationCode").textContent;

    if (userId === "student" && password === "student123" && enteredCode === generatedCode) {
        window.location.href = "https://aln.anudip.org/"; 
    } else {
        alert("Authentication failed. Please check your credentials and verification code.");
    }
}