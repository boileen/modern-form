// Get form elements

const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const successMessage = document.querySelector(".success-message");

const strengthBars =
    document.querySelectorAll(".strength-bars span");


// Validation Functions

function validateName() {

    const error =
        nameInput.nextElementSibling;

    if (nameInput.value.trim() === "") {

        error.textContent =
            "Name is required";

        return false;
    }

    error.textContent = "";

    return true;
}


function validateEmail() {

    const error =
        emailInput.nextElementSibling;

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {

        error.textContent =
            "Email is required";

        return false;
    }

    if (!emailPattern.test(emailInput.value)) {

        error.textContent =
            "Please enter a valid email";

        return false;
    }

    error.textContent = "";

    return true;
}


function validatePhone() {

    const error =
        phoneInput.nextElementSibling;

    const phonePattern =
        /^[0-9]{11}$/;

    if (phoneInput.value.trim() === "") {

        error.textContent =
            "Phone number is required";

        return false;
    }

    if (!phonePattern.test(phoneInput.value)) {

        error.textContent =
            "Enter an 11-digit phone number";

        return false;
    }

    error.textContent = "";

    return true;
}


function validatePassword() {

    const error =
        passwordInput.nextElementSibling;

    if (passwordInput.value.trim() === "") {

        error.textContent =
            "Password is required";

        return false;
    }

    if (passwordInput.value.length < 8) {

        error.textContent =
            "Password must be at least 8 characters";

        return false;
    }

    error.textContent = "";

    return true;
}


// Password Strength

function checkPasswordStrength() {

    let score = 0;

    const password =
        passwordInput.value;

    if (password.length >= 8)
        score++;

    if (/[A-Z]/.test(password))
        score++;

    if (/[0-9]/.test(password))
        score++;

    if (/[^A-Za-z0-9]/.test(password))
        score++;



    strengthBars.forEach(bar => {

        bar.style.background =
            "#dbe4ff";

    });



    if (score >= 1) {

        strengthBars[0].style.background =
            "#ef4444";
    }

    if (score >= 3) {

        strengthBars[0].style.background =
            "#f59e0b";

        strengthBars[1].style.background =
            "#f59e0b";
    }

    if (score >= 4) {

        strengthBars[0].style.background =
            "#22c55e";

        strengthBars[1].style.background =
            "#22c55e";

        strengthBars[2].style.background =
            "#22c55e";
    }
}



// Blur Events

nameInput.addEventListener(
    "blur",
    validateName
);

emailInput.addEventListener(
    "blur",
    validateEmail
);

phoneInput.addEventListener(
    "blur",
    validatePhone
);

passwordInput.addEventListener(
    "blur",
    validatePassword
);


// Real-Time Validation

nameInput.addEventListener(
    "input",
    validateName
);

emailInput.addEventListener(
    "input",
    validateEmail
);

phoneInput.addEventListener(
    "input",
    validatePhone
);

passwordInput.addEventListener(
    "input",
    () => {

        validatePassword();

        checkPasswordStrength();

    }
);


// Form Submission

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const isNameValid =
            validateName();

        const isEmailValid =
            validateEmail();

        const isPhoneValid =
            validatePhone();

        const isPasswordValid =
            validatePassword();


        if (
            isNameValid &&
            isEmailValid &&
            isPhoneValid &&
            isPasswordValid
        ) {

            successMessage.textContent =
                "✓ Account Created Successfully";

            form.reset();


            strengthBars.forEach(bar => {

                bar.style.background =
                    "#dbe4ff";

            });

        }

        else {

            successMessage.textContent = "";

        }

    }
);