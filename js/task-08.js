const loginForm = document.querySelector(`.login-form`);
// console.log(loginForm);

loginForm.addEventListener(`submit`, formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    // console.dir(formElements);

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const validationAlert = (mail, password) => {
        if (mail ==="" || password === "") {
            alert("Please, fill all data");
        }
    };
    validationAlert(mail, password);
    
    const loginData = new FormData(event.currentTarget);
    const loginValues = Object.fromEntries(loginData.entries());
    
    console.log(loginValues);

    event.currentTarget.reset();
}
