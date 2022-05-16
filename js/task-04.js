let counterValue = 0;

const incrementBtn = document.querySelector(`button[data-action = "increment"]`);
const decrementBtn = document.querySelector(`button[data-action = "decrement"]`);

const onIncrementBtnClick = () => {
    document.querySelector("#value").textContent = counterValue += 1
};

const onDecrementBtnClick = () => {
    document.querySelector("#value").textContent = counterValue -= 1
};

incrementBtn.addEventListener("click", onIncrementBtnClick);
decrementBtn.addEventListener("click", onDecrementBtnClick);