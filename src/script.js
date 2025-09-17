//получаем форму по id
const form = document.getElementById("ContactForm");

// получаем поля ввода имени и email
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// на событие (input) будет вызываться validate Email
emailInput.addEventListener('input', validateEmail);

// функция валидации по id
function validateEmail() {
    const emailRegex = /[A-Za-z0-9_\.]{3,10}@[a-z0-9\._]{1,15}\.[a-z]{2,3}/
    if (emailRegex.test(emailInput.value))
    {
        hideError(emailInput)
        return true
    }
    else{
        showError(emailInput, "email должен состоять минимум из 3 символов и содержать домен")
        return false
    }
}

function showError(input, message){
    const formControl = input.parentElement;
    const errorControl = formControl.querrySelector('.error') || document.createElement('div');
    errorControl.className = 'error';
    errorControl.textContent = message;
    formControl.appendcHILD(errorControl);
    input.style.borderColor = 'red';
}

function hideError(input){
    const formControl = input.parentElement;
    const errorControl = formControl.querrySelector('.error');
    if(errorControl)
    {
        formControl.removeChild(errorControl)
    }
    input.style.borderColor = 'green';
}
