//Getting the button from the DOM
let validBtn = document.getElementById("validate-button");
let clrBtn = document.getElementById("clear-button");

//Event Listeners
validBtn.addEventListener("click", validateExpression);
clrBtn.addEventListener("click", clearInput);

//Functions to validate the entered expression
function validateExpression() {
    const validationType = document.getElementById("validation-type").value;
    const inputField = document.getElementById("input-field").value;
    const validationResult = document.getElementById("validation-result");

    let isValid = false;

    switch (validationType) {
        case "Email":
            isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputField);
            break;
        case "Phone":
            isValid = /^(?:\+880|880|0)\d{10}$/.test(inputField);
            break;
        case "Postcode":
            isValid = /^\d{4}$/.test(inputField);
            break;
        case "Domain":
            isValid = /^(?!-)([A-Za-z0-9-]+\.)*[A-Za-z0-9-]{1,63}(?<!-)(\.[A-Za-z]{2,6})$/.test(inputField);
            break;
        default:
            validationResult.innerHTML = `<span class="invalid-type">Invalid Type!</span>`;
            return;
    }

    if (isValid) {
        validationResult.innerHTML = `<span class="valid">\"<b>${inputField}</b>\" is a Valid Expression of type: <b>${validationType}</b></span>`;
    } else {
        validationResult.innerHTML = `<span class="invalid">\"<b>${inputField}</b>\" is not a Valid Expression of type: <b>${validationType}</b></span>`;
    }
}



//Function to clear the input field
function clearInput() {
    let inputField = document.getElementById("input-field");
    inputField.value = '';
    const validationResult = document.getElementById("validation-result");
    validationResult.innerHTML = "";
}