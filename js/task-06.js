const inputForm = document.querySelector("#validation-input");
const inputLenght = document.querySelector(`input[data-length]`);

inputForm.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
    if (event.target.value.length === Number(inputLenght.dataset.length)) {
        inputForm.classList.remove('invalid');
        inputForm.classList.add('valid');
    }
    else{
    inputForm.classList.remove('valid');
    inputForm.classList.add('invalid');
}
};

