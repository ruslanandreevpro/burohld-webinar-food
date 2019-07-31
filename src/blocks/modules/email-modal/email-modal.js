let emailForm = document.getElementsByClassName("email_reg_form")[0];
let nameField = document.getElementById("name");
let telField = document.getElementById("tel");
let emailField = document.getElementById("email");
let emailRegBtn = document.getElementById("email_reg_btn");
let policyAccept = document.getElementById("policy_accept");
let isNameValid = false;
let isTelValid = false;
let isEmailValid = false;
let isPolicyCheck = true;

if (isNameValid && isTelValid && isEmailValid && isPolicyCheck) {
    emailRegBtn.disabled = false;
} else {
    emailRegBtn.disabled = true;
}

// Get the modal
let emailModal = document.getElementById("emailModal");

// Get the button that opens the modal
let btnEmail = document.getElementById("btn_email");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("emailModalClose")[0];

// When the user clicks on the button, open the modal 
btnEmail.onclick = () => {
    emailModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
    emailModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = event => {
    if (event.target == emailModal) {
        emailModal.style.display = "none";
    }
}

nameField.addEventListener("keyup", event => {
    isNameValid = nameField.checkValidity();
    if (isNameValid && isTelValid && isEmailValid && isPolicyCheck) {
        emailRegBtn.disabled = false;
    } else {
        emailRegBtn.disabled = true;
    }
})

telField.addEventListener("keyup", event => {
    isTelValid = telField.checkValidity();
    if (isNameValid && isTelValid && isEmailValid && isPolicyCheck) {
        emailRegBtn.disabled = false;
    } else {
        emailRegBtn.disabled = true;
    }
})

emailField.addEventListener("keyup", event => {
    isEmailValid = emailField.checkValidity();
    if (isNameValid && isTelValid && isEmailValid && isPolicyCheck) {
        emailRegBtn.disabled = false;
    } else {
        emailRegBtn.disabled = true;
    }
})

policyAccept.addEventListener("change", event => {
    isPolicyCheck = policyAccept.checked;
    if (isNameValid && isTelValid && isEmailValid && isPolicyCheck) {
        emailRegBtn.disabled = false;
    } else {
        emailRegBtn.disabled = true;
    }
})

emailRegBtn.onclick = () => {
    submitFormAjax();
}

const submitFormAjax = () => {
    let xmlhttp= window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","email_reg.php", true);
    // xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    // xmlhttp.send("name=" + nameField + "&tel=" + telField + "&email=" + emailField);
}