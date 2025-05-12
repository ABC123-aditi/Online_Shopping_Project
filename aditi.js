function validateForm() {
    var password = document.getElementById("password").value;
    var alertBox = document.getElementById("password-alert");
    
    // Define password strength conditions
    var conditions = [
        { regex: /.{8,}/, message: "Password must be at least 8 characters long." },
        { regex: /[A-Z]/, message: "Password must contain at least one uppercase letter." },
        { regex: /[a-z]/, message: "Password must contain at least one lowercase letter." },
        { regex: /[0-9]/, message: "Password must contain at least one number." },
        { regex: /[^A-Za-z0-9]/, message: "Password must contain at least one special character." }
    ];

    // Check each condition
    for (var i = 0; i < conditions.length; i++) {
        if (!conditions[i].regex.test(password)) {
            alertBox.style.display = 'block';
            alertBox.textContent = conditions[i].message;
            return;
        }
    }

    // If all conditions are met, submit the form or proceed with further logic
    alertBox.style.display = 'none';
    alert("Registration successful!");
    window.location.replace("./final.html");
    // Further form submission logic can be added here
}