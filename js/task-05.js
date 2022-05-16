const refs = {
    inputText: document.querySelector(`#name-input`),
    outputText: document.querySelector(`#name-output`),
}

console.log(refs.inputText.textContent);
console.log(refs.outputText.textContent);

refs.inputText.addEventListener(`input`, inputChange);

function inputChange(event) {
    if (refs.inputText.value === "") {
    return refs.outputText.textContent = "Anonymous!";
    }
    refs.outputText.textContent = event.currentTarget.value;
};
