const count = document.querySelector(".count");
const subtractButton = document.querySelector(".subtract");
const resetButton = document.querySelector(".reset");
const addButton = document.querySelector(".add");

addButton.addEventListener("click", (e) => {
    count.innerHTML++;
    setColor();
})


subtractButton.addEventListener("click", (e) => {
    count.innerHTML--;
    setColor();
})

resetButton.addEventListener("click", (e) => {
    count.innerHTML = 0;
    setColor();
})


function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "yellow";
    } else if (count.innerHTML < 0) {
        count.style.color = "orangered";
    } else {
        count.style.color = "#fff";
    }
}
