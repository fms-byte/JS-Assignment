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

    const regularExpressions = {
        "Email": /^[\w\.-]+@[\w\.-]+$/,
        "Phone": /^(?:\+880|880|0)\d{10}$/,
        "Postcode": /^\d{4}$/, //considering only digits
        "Domain": /^(?!-)([A-Za-z0-9-]+\.)*[A-Za-z0-9-]{1,63}(?<!-)(\.[A-Za-z]{2,6})$/
    };

    if (regularExpressions.hasOwnProperty(validationType)) {
        const regexPattern = regularExpressions[validationType];
        if (regexPattern.test(inputField)) {
            validationResult.innerHTML = `<span class="valid">\"<b>${inputField}</b>\" is a Valid Expression of type: <b>${validationType}</b></span>`;
        } else {
            validationResult.innerHTML = `<span class="invalid">\"<b>${inputField}</b>\" is not a Valid Expression of type: <b>${validationType}</b></span>`;
        }
    } else {
        validationResult.innerHTML = `<span class="invalid-type">Invalid Type!</span>`;
    }
};


//Function to clear the input field
function clearInput() {
    let inputField = document.getElementById("input-field");
    inputField.value = '';
    const validationResult = document.getElementById("validation-result");
    validationResult.innerHTML = "";
}